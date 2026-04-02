import { loadArea, setConfig, getMetadata } from './ak.js';

const hostnames = ['target.authorkit.dev'];

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

// How to decorate an area before loading it
const decorateArea = ({ area = document }) => {
  const eagerLoad = (parent, selector) => {
    const img = parent.querySelector(selector);
    if (!img) return;
    img.removeAttribute('loading');
  };

  eagerLoad(area, 'img');
};

setConfig({ hostnames, locales, linkBlocks, components, decorateArea });

async function loadTarget() {
  const targetMeta = getMetadata('target');
  if (targetMeta) {
    window.targetGlobalSettings = {
      serverDomain: hostnames[0],
      secureOnly: true,
      overrideMboxEdgeServer: false,
    };

    await import('../deps/at/at.js');
    const offers = await window.adobe.target.getOffers({
      request: { execute: { pageLoad: {} } },
    });

    // Loop through them and inject
    offers?.execute?.pageLoad?.options?.forEach((opt) => {
      if (!opt.content?.[0] || opt.content.length === 0) return;
      const { cssSelector, content } = opt.content[0];
      const el = document.querySelector(cssSelector);
      if (el) el.outerHTML = content;
    });
  }
}

export async function loadPage() {
  await loadTarget();
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
