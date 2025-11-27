const log = async (ex, el) => (await import('./utils/error.js')).default(ex, el);

export function getMetadata(name) {
  const attr = name && name.includes(':') ? 'property' : 'name';
  const meta = document.head.querySelector(`meta[${attr}="${name}"]`);
  return meta && meta.content;
}

export function getLocale(locales) {
  const { pathname } = window.location;
  const matches = Object.keys(locales).filter((locale) => pathname.startsWith(`${locale}/`));
  const prefix = getMetadata('locale') || matches.sort((a, b) => b.length - a.length)?.[0] || '';
  if (locales[prefix].lang) document.documentElement.lang = locales[prefix].lang;
  return { prefix, ...locales[prefix] };
}

export const [setConfig, getConfig] = (() => {
  let config;
  return [
    (conf = {}) => {
      config = {
        ...conf,
        log: conf.log || log,
        locale: getLocale(conf.locales),
        codeBase: `${import.meta.url.replace('/scripts/ak.js', '')}`,
      };
      return config;
    },
    () => (config || setConfig()),
  ];
})();

export async function loadStyle(href) {
  return new Promise((resolve) => {
    if (!document.querySelector(`head > link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = resolve;
      document.head.append(link);
    } else {
      resolve();
    }
  });
}

export async function loadBlock(block) {
  const { components } = getConfig();
  const { classList } = block;
  const name = classList[0];
  block.dataset.blockName = name;
  const blockPath = `/blocks/${name}/${name}`;
  const loaded = [new Promise((resolve) => {
    (async () => {
      try {
        await (await import(`${blockPath}.js`)).default(block);
      } catch (ex) { await getConfig().log(ex, block); }
      resolve();
    })();
  })];
  const isCmp = components.some((cmp) => name === cmp);
  if (!isCmp) loaded.push(loadStyle(`${blockPath}.css`));
  await Promise.all(loaded);
  return block;
}

function loadTemplate() {
  const template = getMetadata('template');
  if (!template) return;
  const { codeBase } = getConfig();
  document.body.classList.add('has-template');
  loadStyle(`${codeBase}/templates/${template}/${template}.css`).then(() => {
    document.body.classList.add(`${template}-template`);
    document.body.classList.remove('has-template');
  });
}

function decoratePictures(el) {
  const pics = el.querySelectorAll('picture');
  for (const pic of pics) {
    const source = pic.querySelector('source');
    const clone = source.cloneNode();
    const [pathname, params] = clone.getAttribute('srcset').split('?');
    const search = new URLSearchParams(params);
    search.set('width', 3000);
    clone.setAttribute('srcset', `${pathname}?${search.toString()}`);
    clone.setAttribute('media', '(min-width: 1440px)');
    pic.prepend(clone);
  }
}

function decorateButton(link) {
  const isEm = link.closest('em');
  const isStrong = link.closest('strong');
  const isStrike = link.closest('del');
  const isUnder = link.querySelector('u');
  if (!(isEm || isStrong || isStrike || isUnder)) return;
  const trueParent = link.closest('p, li, div');
  if (!trueParent) return;
  const siblings = [...trueParent.childNodes];

  const hasSibling = siblings.every(
    (el) => el.nodeName === 'A'
    || el.nodeName === 'EM'
    || el.nodeName === 'STRONG'
    || el.nodeName === 'DEL'
    || !el.textContent.trim(),
  );
  if (!hasSibling) return;
  if (siblings.length > 1) trueParent.classList.add('btn-group');

  link.classList.add('btn');
  if (isStrike) {
    link.classList.add('btn-negative');
  } else if (isEm && isStrong) {
    link.classList.add('btn-accent');
  } else if (isStrong) {
    link.classList.add('btn-primary');
  } else if (isEm) {
    link.classList.add('btn-secondary');
  }
  if (isUnder) {
    link.classList.add('btn-outline');
    link.innerHTML = isUnder.innerHTML;
    isUnder.remove();
  }
  const toReplace = [isEm, isStrong, isStrike].find((el) => el?.parentNode === trueParent);
  if (toReplace) trueParent.replaceChild(link, toReplace);
}

export function localizeUrl({ config, url }) {
  const { locales, locale } = config;

  // If we are in the root locale, do nothing
  if (locale.prefix === '') return null;

  const { origin, pathname, search, hash } = url;

  // If the link is already localized, do nothing
  if (pathname.startsWith(`${locale.prefix}/`)) return null;

  const localized = Object.keys(locales).some(
    (key) => key !== '' && pathname.startsWith(`${key}/`),
  );
  if (localized) return null;

  return new URL(`${origin}${locale.prefix}${pathname}${search}${hash}`);
}

function decorateHash(a, url) {
  const { hash } = url;
  if (!hash || hash === '#') return {};

  const findHash = (name) => {
    const found = hash.includes(name);
    if (found) a.href = a.href.replace(name, '');
    return found;
  };

  const blank = findHash('#_blank');
  if (blank) a.target = '_blank';

  const dnt = findHash('#_dnt');
  const dnb = findHash('#_dnb');
  return { dnt, dnb };
}

function decorateLink(config, a) {
  try {
    const url = new URL(a.href);
    const hostMatch = config.hostnames.some((host) => url.hostname.endsWith(host));
    if (hostMatch) a.href = a.href.replace(url.origin, '');

    const { dnt, dnb } = decorateHash(a, url);
    if (!dnt) {
      const localized = localizeUrl({ config, url });
      if (localized) a.href = localized.href;
    }
    decorateButton(a);
    if (!dnb) {
      const { href } = a;
      const found = config.widgets.some((pattern) => {
        const key = Object.keys(pattern)[0];
        if (!href.includes(pattern[key])) return false;
        a.classList.add(key, 'auto-block');
        return true;
      });
      if (found) return a;
    }
  } catch (ex) {
    config.log('Could not decorate link');
    config.log(ex);
  }
  return null;
}

function decorateLinks(el) {
  const config = getConfig();
  const anchors = [...el.querySelectorAll('a')];
  return anchors.reduce((acc, a) => {
    const decorated = decorateLink(config, a);
    if (decorated) acc.push(decorated);
    return acc;
  }, []);
}

function loadIcons(el) {
  const icons = el.querySelectorAll('span.icon');
  if (!icons.length) return;
  import('./utils/icons.js').then((mod) => mod.default(icons));
}

function groupChildren(section) {
  const children = section.querySelectorAll(':scope > *');
  const groups = [];
  let currentGroup = null;

  for (const child of children) {
    const isDiv = child.tagName === 'DIV';
    const currentType = currentGroup?.classList.contains('block-content');

    if (!currentGroup || currentType !== isDiv) {
      currentGroup = document.createElement('div');
      currentGroup.className = isDiv
        ? 'block-content' : 'default-content';
      groups.push(currentGroup);
    }

    currentGroup.append(child);
  }

  return groups;
}

function decorateSections(parent, isDoc) {
  const selector = isDoc ? 'main > div' : ':scope > div';
  return [...parent.querySelectorAll(selector)].map((section) => {
    const groups = groupChildren(section);
    section.append(...groups);

    section.classList.add('section');
    section.dataset.status = 'decorated';

    section.widgets = decorateLinks(section);
    section.blocks = [...section.querySelectorAll('.block-content > div[class]')];
    return section;
  });
}

function decorateHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  const meta = getMetadata('header') || 'header';
  if (meta === 'off') {
    document.body.classList.add('no-header');
    header.remove();
    return;
  }
  header.className = meta;
  header.dataset.status = 'decorated';
  const breadcrumbs = document.body.querySelector('breadcrumbs');
  const breadcrumbsPath = getMetadata('breadcrumbs');
  if (!(breadcrumbs || breadcrumbsPath)) return;
  document.body.classList.add('has-breadcrumbs');
  if (breadcrumbs) header.append(breadcrumbs);
}

function decorateDoc() {
  decorateHeader();
  loadTemplate();

  // Setup scheme
  const scheme = localStorage.getItem('color-scheme');
  if (scheme) document.body.classList.add(scheme);

  // Detect Hash
  const pageId = window.location.hash?.replace('#', '');
  if (pageId) localStorage.setItem('lazyhash', pageId);
}

export async function loadArea({ area } = { area: document }) {
  const isDoc = area === document;
  if (isDoc) decorateDoc();
  decoratePictures(area);
  const { decorateArea } = getConfig();
  if (decorateArea) decorateArea({ area });
  const sections = decorateSections(area, isDoc);
  for (const [idx, section] of sections.entries()) {
    loadIcons(section);
    await Promise.all(section.widgets.map((block) => loadBlock(block)));
    await Promise.all(section.blocks.map((block) => loadBlock(block)));
    delete section.dataset.status;
    if (isDoc && idx === 0) import('./postlcp.js');
  }
  if (isDoc) import('./lazy.js');
}
