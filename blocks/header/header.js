import { getConfig, getMetadata } from '../../scripts/ak.js';
import { loadFragment } from '../fragment/fragment.js';
import { setColorScheme } from '../section-metadata/section-metadata.js';

const { locale } = getConfig();

const HEADER_PATH = '/fragments/nav/header';

const menuTriggers = new WeakMap();

function closeAllMenus() {
  const openMenus = document.body.querySelectorAll('header .is-open');
  for (const container of openMenus) {
    container.classList.remove('is-open');
    const trigger = menuTriggers.get(container);
    if (trigger) trigger.ariaExpanded = 'false';
  }
}

function docClose(e) {
  if (e.target.closest('header')) return;
  closeAllMenus();
}

function menuKeydown(e) {
  if (e.key !== 'Escape') return;
  const open = e.target.closest('.is-open');
  if (!open) return;
  e.stopPropagation();
  const trigger = menuTriggers.get(open);
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

function toggleMenu(container) {
  const isOpen = container.classList.contains('is-open');
  closeAllMenus();
  if (isOpen) return;
  document.addEventListener('click', docClose);
  container.classList.add('is-open');
  const trigger = menuTriggers.get(container);
  if (trigger) trigger.ariaExpanded = 'true';
}

function decorateLanguage(btn) {
  const section = btn.closest('.section');
  btn.ariaExpanded = 'false';
  menuTriggers.set(section, btn);
  section.addEventListener('keydown', menuKeydown);
  section.addEventListener('focusout', menuFocusout);
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
  const dark = () => {
    const { classList } = document.body;
    if (classList.contains('dark-scheme')) return true;
    if (classList.contains('light-scheme')) return false;
    return matchMedia('(prefers-color-scheme: dark)').matches;
  };
  btn.ariaPressed = String(dark());
  btn.addEventListener('click', async () => {
    const { body } = document;

    const theme = dark()
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
    btn.ariaPressed = String(dark());
  });
}

const drawerEscHandlers = new WeakMap();

function teardownDrawer(header) {
  header.classList.remove('is-mobile-open');
  for (const el of document.querySelectorAll('main, footer')) el.inert = false;
  const escHandler = drawerEscHandlers.get(header);
  if (escHandler) {
    document.removeEventListener('keydown', escHandler);
    drawerEscHandlers.delete(header);
  }
}

function syncDrawerState(header) {
  const toggle = header.querySelector('.action-wrapper.nav-toggle button');
  const drawerMode = !!toggle?.checkVisibility();
  if (!drawerMode && header.classList.contains('is-mobile-open')) {
    teardownDrawer(header);
  }
  const isOpen = header.classList.contains('is-mobile-open');
  const collapsed = drawerMode && !isOpen;
  for (const section of header.querySelectorAll('.main-nav-section, .actions-section')) {
    section.inert = collapsed && !section.contains(toggle);
  }
  if (toggle) toggle.ariaExpanded = String(drawerMode && isOpen);
}

function closeDrawer(header, toggle) {
  teardownDrawer(header);
  syncDrawerState(header);
  toggle.focus();
}

function decorateNavToggle(btn) {
  btn.ariaExpanded = 'false';
  btn.addEventListener('click', () => {
    const header = btn.closest('header');
    if (!header) return;
    const opening = !header.classList.contains('is-mobile-open');
    if (!opening) {
      closeDrawer(header, btn);
      return;
    }
    header.classList.add('is-mobile-open');
    for (const el of document.querySelectorAll('main, footer')) el.inert = true;
    syncDrawerState(header);
    header.querySelector('.main-nav-section a, .main-nav-section button')?.focus();
    const escHandler = (e) => {
      if (e.key !== 'Escape') return;
      closeAllMenus();
      closeDrawer(header, btn);
    };
    drawerEscHandlers.set(header, escHandler);
    document.addEventListener('keydown', escHandler);
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
  if (link && link.pathname === window.location.pathname) link.ariaCurrent = 'page';
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
  menuTriggers.set(li, btn);

  btn.addEventListener('click', () => {
    toggleMenu(li);
  });
}

const SKIP_PATH = '/tools/widgets/skip';
const SKIP_FALLBACK = 'Skip to main content';

export function decorateSkipLink(header) {
  const main = document.querySelector('main');
  if (!main) return;
  if (!main.id) main.id = 'main';
  const authored = header.querySelector(`[href*="${SKIP_PATH}"]`);
  const skip = document.createElement('a');
  skip.className = 'skip-link a11y-clip';
  skip.href = `#${main.id}`;
  if (authored) {
    skip.textContent = authored.textContent;
    authored.parentElement.remove();
  } else {
    skip.textContent = SKIP_FALLBACK;
    skip.lang = 'en';
  }
  header.prepend(skip);
}

function decorateBrandSection(section) {
  section.classList.add('brand-section');
  const brandLink = section.querySelector('a');
  if (!brandLink) return;
  const [, text] = brandLink.childNodes;
  if (!text) return;
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
  if (section.dataset.label) nav.ariaLabel = section.dataset.label;
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

export function decorateHeaderContent(header) {
  decorateSkipLink(header);
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
