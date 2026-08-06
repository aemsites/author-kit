import { getConfig, getMetadata } from '../../scripts/ak.js';
import { loadFragment } from '../fragment/fragment.js';
import { setColorScheme } from '../section-metadata/section-metadata.js';

const { locale } = getConfig();

const HEADER_PATH = '/fragments/nav/header';

function closeAllMenus() {
  const openMenus = document.body.querySelectorAll('header .is-open');
  for (const openMenu of openMenus) {
    openMenu.classList.remove('is-open');
    const trigger = openMenu.querySelector('[aria-expanded]');
    if (trigger) trigger.ariaExpanded = 'false';
  }
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('click', docClose);
}

function docClose(e) {
  if (e.target.closest('header')) return;
  closeAllMenus();
}

function menuKeydown(e) {
  if (e.key !== 'Escape') return;
  const open = e.target.closest('.is-open');
  if (!open) return;
  const trigger = open.querySelector('[aria-expanded]');
  closeAllMenus();
  trigger?.focus();
}

function menuFocusout(e) {
  const open = e.target.closest('.is-open');
  if (!open) return;
  if (!e.relatedTarget) return;
  if (open.contains(e.relatedTarget)) return;
  closeAllMenus();
}

function toggleMenu(menu) {
  const isOpen = menu.classList.contains('is-open');
  closeAllMenus();
  if (isOpen) return;
  document.addEventListener('click', docClose);
  menu.classList.add('is-open');
}

function decorateLanguage(btn) {
  const section = btn.closest('.section');
  btn.addEventListener('click', async () => {
    let menu = section.querySelector('.language.menu');
    if (!menu) {
      const content = document.createElement('div');
      content.classList.add('block-content');
      const fragment = await loadFragment(`${locale.prefix}${HEADER_PATH}/languages`);
      menu = document.createElement('div');
      menu.className = 'language menu';
      menu.append(fragment);
      content.append(menu);
      section.append(content);
    }
    toggleMenu(section);
  });
}

function decorateScheme(btn) {
  btn.addEventListener('click', async () => {
    const { body } = document;

    let currPref = localStorage.getItem('color-scheme');
    if (!currPref) {
      currPref = matchMedia('(prefers-color-scheme: dark)')
        .matches ? 'dark-scheme' : 'light-scheme';
    }

    const theme = currPref === 'dark-scheme'
      ? { add: 'light-scheme', remove: 'dark-scheme' }
      : { add: 'dark-scheme', remove: 'light-scheme' };

    body.classList.remove(theme.remove);
    body.classList.add(theme.add);
    localStorage.setItem('color-scheme', theme.add);
    // Re-calculatie section schemes
    const sections = document.querySelectorAll('.section');
    for (const section of sections) {
      setColorScheme(section);
    }
  });
}

function decorateNavToggle(btn) {
  btn.addEventListener('click', () => {
    const header = document.body.querySelector('header');
    if (!header) return;
    header.classList.toggle('is-mobile-open');
    // eslint-disable-next-line no-use-before-define
    syncDrawerState(header);
  });
}

const HEADER_ACTIONS = [
  { name: 'scheme', path: '/tools/widgets/scheme', decorate: decorateScheme },
  { name: 'language', path: '/tools/widgets/language', decorate: decorateLanguage },
  { name: 'nav-toggle', path: '/tools/widgets/toggle', decorate: decorateNavToggle },
];

function decorateAction(header, { name, path, decorate }) {
  const link = header.querySelector(`[href*="${path}"]`);
  if (!link) return;

  const icon = link.querySelector('.icon');
  const text = link.textContent;
  const btn = document.createElement('button');
  if (icon) btn.append(icon);
  if (text) {
    const textSpan = document.createElement('span');
    textSpan.className = 'text';
    textSpan.textContent = text;
    btn.append(textSpan);
  }
  const wrapper = document.createElement('div');
  wrapper.className = `action-wrapper ${name}`;
  wrapper.append(btn);
  link.parentElement.parentElement.replaceChild(wrapper, link.parentElement);

  decorate(btn);
}

function decorateMenu(li) {
  const list = li.querySelector(':scope > ul');
  if (!list) return null;
  const wrapper = document.createElement('div');
  wrapper.className = 'menu';
  wrapper.append(list);
  li.append(wrapper);
  return wrapper;
}

function decorateMegaMenu(li) {
  const menu = li.querySelector('.fragment-content');
  if (!menu) return null;
  const wrapper = document.createElement('div');
  wrapper.className = 'mega-menu';
  wrapper.append(menu);
  li.append(wrapper);
  return wrapper;
}

let menuId = 0;

function decorateNavItem(li) {
  li.classList.add('main-nav-item');
  const link = li.querySelector(':scope > p > a');
  if (link) link.classList.add('main-nav-link');
  const menu = decorateMegaMenu(li) || decorateMenu(li);
  if (!menu || !link) return;

  menuId += 1;
  menu.id = `header-menu-${menuId}`;
  const btn = document.createElement('button');
  btn.className = 'main-nav-link';
  btn.type = 'button';
  btn.textContent = link.textContent;
  btn.ariaExpanded = 'false';
  btn.setAttribute('aria-controls', menu.id);
  link.replaceWith(btn);

  btn.addEventListener('click', () => {
    toggleMenu(li);
    btn.ariaExpanded = String(li.classList.contains('is-open'));
  });
}

function decorateBrandSection(section) {
  section.classList.add('brand-section');
  const brandLink = section.querySelector('a');
  const [, text] = brandLink.childNodes;
  const span = document.createElement('span');
  span.className = 'brand-text';
  span.append(text);
  brandLink.append(span);
}

export function decorateNavSection(section) {
  section.classList.add('main-nav-section');
  const navContent = section.querySelector('.default-content');
  const navList = section.querySelector('ul');
  if (!navList) return;
  navList.classList.add('main-nav-list');

  const nav = document.createElement('nav');
  nav.append(navList);
  navContent.append(nav);

  const mainNavItems = section.querySelectorAll('nav > ul > li');
  for (const navItem of mainNavItems) {
    decorateNavItem(navItem);
  }
  nav.addEventListener('keydown', menuKeydown);
  nav.addEventListener('focusout', menuFocusout);
}

function decorateActionSection(section) {
  section.classList.add('actions-section');
}

function syncDrawerState(header) {
  const toggle = header.querySelector('.action-wrapper.nav-toggle button');
  const drawerMode = !!toggle?.checkVisibility();
  const isOpen = header.classList.contains('is-mobile-open');
  const collapsed = drawerMode && !isOpen;
  for (const section of header.querySelectorAll('.main-nav-section, .actions-section')) {
    section.inert = collapsed && !section.contains(toggle);
  }
  if (toggle) toggle.ariaExpanded = String(drawerMode && isOpen);
}

export function decorateHeaderContent(header) {
  const sections = header.querySelectorAll(':scope > .section, :scope > .header-content > .section');
  if (sections[0]) decorateBrandSection(sections[0]);
  if (sections[1]) decorateNavSection(sections[1]);
  if (sections[2]) decorateActionSection(sections[2]);

  for (const action of HEADER_ACTIONS) {
    decorateAction(header, action);
  }

  syncDrawerState(header);
  new ResizeObserver(() => syncDrawerState(header)).observe(header);
}

/**
 * loads and decorates the header
 * @param {Element} el The header element
 */
export default async function init(el) {
  const headerMeta = getMetadata('header');
  const path = headerMeta || HEADER_PATH;
  try {
    const fragment = await loadFragment(`${locale.prefix}${path}`);
    fragment.classList.add('header-content');
    el.append(fragment);
    decorateHeaderContent(el);
  } catch (e) {
    throw Error(e);
  }
}
