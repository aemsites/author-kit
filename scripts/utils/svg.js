import { getConfig } from '../ak.js';

const { codeBase } = getConfig();
const parser = new DOMParser();

// Project Prefs
const VIEW_BOX = '0 0 24 24';
const ID = 'icon';
const PATH = '/img/icons';

export function getSvg({ name, id = ID, className = '', viewBox = VIEW_BOX, path = PATH }) {
  const str = `<svg xmlns="http://www.w3.org/2000/svg" class="${className}" viewBox="${viewBox}" aria-hidden="true">
    <use href="${codeBase}${path}/${name}.svg#${id}"></use>
  </svg>`;
  return parser.parseFromString(str, 'image/svg+xml').documentElement;
}

export const loadHrefSvg = (() => {
  const cache = {};

  return async (href) => {
    cache[href] ??= (async () => {
      const resp = await fetch(href).catch(() => null);
      if (!resp?.ok) {
        delete cache[href];
        return null;
      }
      const doc = parser.parseFromString(await resp.text(), 'image/svg+xml');
      const svg = doc.querySelector('svg');
      svg.removeAttribute('id');
      return svg;
    })();

    const svg = await cache[href];
    if (!svg) return null;
    const clone = svg.cloneNode(true);
    return clone;
  };
})();

export default function loadIcons(iconSpans) {
  for (const span of iconSpans) {
    const name = [...span.classList].find((c) => c.startsWith('icon-')).substring(5);
    span.replaceWith(getSvg({ name, className: span.className }));
  }
}
