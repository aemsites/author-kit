import { getConfig, localizeUrl } from '../../scripts/ak.js';
import ENV from '../../scripts/utils/env.js';
import { loadFragment } from '../fragment/fragment.js';

const config = getConfig();

async function removeSchedule(a, e) {
  if (ENV === 'prod') {
    a.remove();
    return;
  }
  if (e) config.log(e);
  config.log(`Could not load: ${a.href}`);
}

async function loadLocalizedEvent(event) {
  const url = new URL(event.fragment);
  const localized = localizeUrl({ config, url });
  const path = localized?.pathname || url.pathname;

  try {
    const fragment = await loadFragment(path);
    return fragment;
  } catch {
    config.log(`Error fetching ${path} fragment`);
    return null;
  }
}

async function loadEvent(a, event, defEvent) {
  // If no fragment path on purpose, remove the schedule.
  if (!event.fragment) {
    a.remove();
    return;
  }

  let fragment = await loadLocalizedEvent(event);
  // Try the default event if the original match didn't work.
  if (!fragment) fragment = await loadLocalizedEvent(defEvent);
  // If still no fragment, remove the schedule link
  if (!fragment) {
    removeSchedule(a);
    return;
  }

  let count = 0;
  let current = a;
  const parent = a.closest('.section');

  // Walk up the DOM tree from child to parent
  while (current && current !== parent) {
    current = current.parentElement;
    if (current && current !== parent) {
      count += 1;
    }
  }

  // Do 1:1 swap if parent is a section
  if (count === 2) {
    const sections = fragment.querySelectorAll(':scope > .section');
    for (const section of sections) {
      parent.insertAdjacentElement('afterend', section);
    }
    parent.remove();
  } else {
    a.parentElement.replaceChild(fragment, a);
  }
}

function getDate() {
  const now = Date.now();
  if (ENV === 'prod') return now;

  // Attempt a simulated schedule
  const sim = localStorage.getItem('aem-schedule')
   || new URL(window.location.href).searchParams.get('schedule');
  return sim * 1000 || now;
}

export default async function init(a) {
  const resp = await fetch(a.href);
  if (!resp.ok) {
    await removeSchedule(a);
    return;
  }
  const { data } = await resp.json();
  // Look
  data.reverse();
  const now = getDate();
  const found = data.find((evt) => {
    try {
      const start = Date.parse(evt.start);
      const end = Date.parse(evt.end);
      return now > start && now < end;
    } catch {
      config.log(`Could not get scheduled event: ${evt.name}`);
      return false;
    }
  });

  // Get a default event in case the main event doesn't load
  const defEvent = data.find((evt) => !(evt.start && evt.end));

  // Use either the found event or the default
  const event = found || defEvent;
  if (!event) {
    await removeSchedule(a);
    return;
  }

  await loadEvent(a, event, defEvent);
}
