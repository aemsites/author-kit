import { loadArea, setConfig } from './ak.js';

const hostnames = ['authorkit.dev'];

const locales = {
  '': { lang: 'en' },
  '/de': { lang: 'de' },
  '/es': { lang: 'es' },
  '/fr': { lang: 'fr' },
  '/hi': { lang: 'hi' },
  '/ja': { lang: 'ja' },
  '/zh': { lang: 'zh' },
};

const linkBlocks = [
  { fragment: '/fragments/' },
  { schedule: '/schedules/' },
  { youtube: 'https://www.youtube' },
];

// Blocks with self-managed styles
const components = ['fragment', 'schedule'];

const EXT_TO_TYPE = {
  'jpg': 'image/jpeg',
  'png': 'image/png',
}

const SOURCE_SET = [
  { type: 'image/webp', media: '(min-width: 600px)' },
  { type: 'image/webp' },
  { media: '(min-width: 600px)' },
];

const MB_PARAMS = [
  '?width=2000&format=webp&optimize=medium',
  '?width=750&format=webply&optimize=medium',
  '?width=2000&format={{ext}}&optimize=medium',
  '?width=750&format={{ext}}&optimize=medium',
];

const DM_PARAMS = [
  '?width=2000&format=webply&quality=85',
  '?width=750&format=webply&quality=85',
  '?width=2000&format={{ext}}&quality=85',
  '?width=750&format={{ext}}&quality=85',
];

const aToPic = (parent) => {
  const links = parent.querySelectorAll('a[href*="./media_"], a[href*="adobeaemcloud.com"]');
  for (const link of links) {
    const url = new URL(link.href);
    const ext = url.pathname.split('.').pop();
    const type = EXT_TO_TYPE[ext];

    const isDM = origin.endsWith('adobeaemcloud.com');

    const plainSrc = `${url.origin}${url.pathname}`;

    const sources = SOURCE_SET.map((attrs, idx) => {
      const source = document.createElement('source');
      source.setAttribute('type', attrs.type || type);
      if (attrs.media) source.setAttribute('media', attrs.media);

      const search = isDM
        ? DM_PARAMS[idx].replace('{{ext}}', ext)
        : MB_PARAMS[idx].replace('{{ext}}', ext);

      source.setAttribute('srcset', `${plainSrc}${search}`);

      return source;
    });

    const pic = document.createElement('picture');
    pic.append(...sources);

    const img = document.createElement('img');

    const search = isDM
      ? DM_PARAMS[3].replace('{{ext}}', ext)
      : MB_PARAMS[3].replace('{{ext}}', ext);
    img.src = `${plainSrc}${search}`;
    img.loading = 'lazy';
    link.parentElement.replaceChild(pic, link);
  }
}

// How to decorate an area before loading it
const decorateArea = ({ area = document }) => {
  aToPic(area);

  const eagerLoad = (parent, selector) => {
    const img = parent.querySelector(selector);
    if (!img) return;
    img.removeAttribute('loading');
    img.fetchPriority = 'high';
  };

  eagerLoad(area, 'img');
};

export async function loadPage() {
  setConfig({ hostnames, locales, linkBlocks, components, decorateArea });
  await loadArea();
}
await loadPage();

(function da() {
  const { searchParams } = new URL(window.location.href);
  const hasPreview = searchParams.has('dapreview');
  if (hasPreview) import('../tools/da/da.js').then((mod) => mod.default(loadPage));
  const hasQE = searchParams.has('quick-edit');
  if (hasQE) import('../tools/quick-edit/quick-edit.js').then((mod) => mod.default());
}());
