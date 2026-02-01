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

/**
 * Determine what ancestor to replace with the fragment
 *
 * @param {Element}} a the fragment link
 * @returns the element that can be replaced
 */
function getReplaceEl(a) {
  let current = a;
  const ancestor = a.closest('.section');

  // Walk up the DOM from child to ancestor
  // Break when there is more than one child
  while (current && current !== ancestor) {
    const childCount = current.parentElement.children.length;
    if (childCount <= 1) {
      current = current.parentElement;
    } else {
      break;
    }
  }

  return current;
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
  const elToReplace = getReplaceEl(a);
  const sections = fragment.querySelectorAll(':scope > .section');
  const children = sections.length === 1
    ? fragment.querySelectorAll(':scope > *')
    : [fragment];
  for (const child of children) {
    elToReplace.insertAdjacentElement('afterend', child);
  }
  elToReplace.remove();
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
