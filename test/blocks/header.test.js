import { expect } from '@esm-bundle/chai';
import { setViewport } from '@web/test-runner-commands';

let headerStylesheetLoaded = null;
const mountedHeaders = [];

// Loads header.css into the page and returns the decorated <header>.
async function mountHeader(html) {
  if (!headerStylesheetLoaded) {
    headerStylesheetLoaded = new Promise((resolve) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/blocks/header/header.css';
      link.onload = resolve;
      link.onerror = resolve;
      document.head.append(link);
    });
  }
  await headerStylesheetLoaded;
  const el = document.createElement('header');
  el.innerHTML = html;
  document.body.append(el);
  mountedHeaders.push(el);
  return el;
}

afterEach(() => {
  for (const el of mountedHeaders.splice(0)) {
    el.remove();
  }
});

describe('label hiding', () => {
  it('keeps clipped labels measurable, not zero-sized', async () => {
    const el = await mountHeader('<div class="action-wrapper scheme"><button><span class="text">Scheme</span></button></div>');
    const span = el.querySelector('.text');
    const { width, height } = span.getBoundingClientRect();
    expect(width).to.be.greaterThan(0);
    expect(height).to.be.greaterThan(0);
    expect(getComputedStyle(span).clipPath).to.not.equal('none');
  });
});

const NAV_HTML = `<div class="section">
  <div class="default-content">
    <ul>
      <li><p><a href="/plain">Plain</a></p></li>
      <li>
        <p><a href="/products">Products</a></p>
        <ul><li><a href="/products/a">A</a></li></ul>
      </li>
      <li>
        <p><a href="/services">Services</a></p>
        <ul><li><a href="/services/a">A</a></li></ul>
      </li>
    </ul>
  </div>
</div>`;

async function mountNav() {
  const el = await mountHeader(NAV_HTML);
  const { decorateNavSection } = await import('../../blocks/header/header.js');
  decorateNavSection(el.querySelector('.section'));
  return el;
}

const FULL_HTML = `<div class="section"><div class="default-content"><p><a href="/">Brand<span> Name</span></a></p></div></div>
${NAV_HTML}
<div class="section"><div class="default-content">
  <p><a href="/tools/widgets/toggle"><span class="icon icon-more"></span>Menu</a></p>
</div></div>`;

async function mountFullHeader() {
  const el = await mountHeader(FULL_HTML);
  const { decorateHeaderContent } = await import('../../blocks/header/header.js');
  decorateHeaderContent(el);
  return el;
}

// Matches production: the toggle link sits alongside the brand link, in the
// same section, not in the actions section.
const BRAND_TOGGLE_HTML = `<div class="section"><div class="default-content">
  <p><a href="/">Brand<span> Name</span></a></p>
  <p><a href="/tools/widgets/toggle"><span class="icon icon-more"></span>Menu</a></p>
</div></div>
${NAV_HTML}
<div class="section"><div class="default-content"></div></div>`;

async function mountBrandToggleHeader() {
  const el = await mountHeader(BRAND_TOGGLE_HTML);
  const { decorateHeaderContent } = await import('../../blocks/header/header.js');
  decorateHeaderContent(el);
  return el;
}

const ACTIONS_HTML = `<div class="section"><div class="default-content">
  <p><a href="/tools/widgets/scheme"><span class="icon icon-toggle"></span>Scheme</a></p>
  <p><a href="/tools/widgets/language"><span class="icon icon-globe"></span>Language</a></p>
</div></div>`;

async function mountFullHeaderWithActions() {
  const el = await mountHeader(ACTIONS_HTML);
  const { decorateHeaderContent } = await import('../../blocks/header/header.js');
  decorateHeaderContent(el);
  return el;
}

// Matches a project that authors the nav toggle into the actions section
// (alongside language) instead of the brand section, with the toggle link
// ahead of the language link in document order.
const TOGGLE_LANGUAGE_HTML = `<div class="section"><div class="default-content"><p><a href="/">Brand<span> Name</span></a></p></div></div>
${NAV_HTML}
<div class="section"><div class="default-content">
  <p><a href="/tools/widgets/toggle"><span class="icon icon-more"></span>Menu</a></p>
  <p><a href="/tools/widgets/language"><span class="icon icon-globe"></span>Language</a></p>
</div></div>`;

async function mountToggleLanguageHeader() {
  const el = await mountHeader(TOGGLE_LANGUAGE_HTML);
  const { decorateHeaderContent } = await import('../../blocks/header/header.js');
  decorateHeaderContent(el);
  return el;
}

const BRAND_TEXT_AND_SPAN_HTML = '<div class="section"><div class="default-content"><p><a href="/">Brand<span> Name</span></a></p></div></div>';
const BRAND_TEXT_ONLY_HTML = '<div class="section"><div class="default-content"><p><a href="/">Brand</a></p></div></div>';
const BRAND_NO_LINK_HTML = `<div class="section"><div class="default-content"><p>No link</p></div></div>
${NAV_HTML}
<div class="section"><div class="default-content">
  <p><a href="/tools/widgets/toggle"><span class="icon icon-more"></span>Menu</a></p>
</div></div>`;

async function mountBrandHeader(html) {
  const el = await mountHeader(html);
  const { decorateHeaderContent } = await import('../../blocks/header/header.js');
  decorateHeaderContent(el);
  return el;
}

describe('brand section', () => {
  it('wraps the trailing text node in a span when the brand link has one', async () => {
    const el = await mountBrandHeader(BRAND_TEXT_AND_SPAN_HTML);
    const span = el.querySelector('.brand-text');
    expect(span.textContent).to.equal(' Name');
  });

  it('does not render "undefined" when the brand link is a single text node', async () => {
    const el = await mountBrandHeader(BRAND_TEXT_ONLY_HTML);
    const link = el.querySelector('.brand-section a');
    expect(link.textContent).to.equal('Brand');
    expect(link.querySelector('.brand-text')).to.equal(null);
  });

  it('does not throw when the brand section has no link, and the rest of the header still decorates', async () => {
    const el = await mountBrandHeader(BRAND_NO_LINK_HTML);
    expect(el.querySelector('.brand-section')).to.not.equal(null);
    expect(el.querySelector('.main-nav-section')).to.not.equal(null);
    expect(el.querySelector('.action-wrapper.nav-toggle')).to.not.equal(null);
  });
});

describe('menu triggers', () => {
  it('is a button wired to its menu', async () => {
    const el = await mountNav();
    const trigger = el.querySelector('button.main-nav-link');
    expect(trigger.tagName).to.equal('BUTTON');
    expect(trigger.getAttribute('aria-expanded')).to.equal('false');
    const menu = el.querySelector('.menu');
    expect(trigger.getAttribute('aria-controls')).to.equal(menu.id);
    expect(menu.id).to.not.equal('');
  });

  it('flips aria-expanded on activation', async () => {
    const el = await mountNav();
    const trigger = el.querySelector('button.main-nav-link');
    trigger.click();
    expect(trigger.getAttribute('aria-expanded')).to.equal('true');
    trigger.click();
    expect(trigger.getAttribute('aria-expanded')).to.equal('false');
  });

  it('leaves the plain nav link alone', async () => {
    const el = await mountNav();
    const plain = el.querySelector('a[href="/plain"]');
    expect(plain.tagName).to.equal('A');
    expect(plain.getAttribute('href')).to.equal('/plain');
    expect(plain.hasAttribute('aria-expanded')).to.equal(false);
  });

  it('aria-controls resolves to the menu element', async () => {
    const el = await mountNav();
    const trigger = el.querySelector('button.main-nav-link');
    const menu = el.querySelector('.menu');
    expect(document.getElementById(trigger.getAttribute('aria-controls'))).to.equal(menu);
  });

  it('gives each mount a distinct menu id', async () => {
    const elA = await mountNav();
    const elB = await mountNav();
    const idA = elA.querySelector('.menu').id;
    const idB = elB.querySelector('.menu').id;
    expect(idA).to.not.equal(idB);
  });
});

describe('menu dismissal', () => {
  it('closes on Escape and returns focus to the trigger', async () => {
    const el = await mountNav();
    const trigger = el.querySelector('button.main-nav-link');
    trigger.click();
    const link = el.querySelector('.menu a');
    link.focus();
    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    // Assert via booleans, not raw nodes: a failing chai equal() on a DOM
    // element serializes the node for the diff, which reliably wedges this
    // headless Chrome (it never returns from the failed assertion).
    expect(el.querySelector('.main-nav-item.is-open') === null).to.equal(true);
    expect(document.activeElement === trigger).to.equal(true);
    expect(trigger.getAttribute('aria-expanded')).to.equal('false');
  });

  it('closes when focus leaves the menu', async () => {
    const el = await mountNav();
    const trigger = el.querySelector('button.main-nav-link');
    trigger.click();
    const outside = document.createElement('button');
    document.body.append(outside);
    const link = el.querySelector('.menu a');
    // Dispatched directly rather than via real focus() calls: cross-element
    // focus transfer plus a tick yield races with whichever browser window
    // the OS hands focus to next when the suite runs several test files
    // concurrently, so it is flaky here. The handler under test only reads
    // e.relatedTarget, so a synthetic focusout exercises the same code path
    // deterministically.
    link.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: outside }));
    expect(el.querySelector('.main-nav-item.is-open') === null).to.equal(true);
    outside.remove();
  });

  it('stays open when focus moves to a link inside the menu', async () => {
    const el = await mountNav();
    const trigger = el.querySelector('button.main-nav-link');
    trigger.click();
    const menu = el.querySelector('.menu');
    const link = menu.querySelector('a');
    link.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: menu }));
    expect(el.querySelector('.main-nav-item.is-open') === null).to.equal(false);
  });

  it('stays open when relatedTarget is null (blur to non-focusable content)', async () => {
    const el = await mountNav();
    const trigger = el.querySelector('button.main-nav-link');
    trigger.click();
    const link = el.querySelector('.menu a');
    link.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: null }));
    expect(el.querySelector('.main-nav-item.is-open') === null).to.equal(false);
  });

  it('resets aria-expanded on trigger A when trigger B opens', async () => {
    const el = await mountNav();
    const [triggerA, triggerB] = el.querySelectorAll('button.main-nav-link');
    triggerA.click();
    expect(triggerA.getAttribute('aria-expanded')).to.equal('true');
    triggerB.click();
    expect(triggerA.getAttribute('aria-expanded')).to.equal('false');
    expect(triggerB.getAttribute('aria-expanded')).to.equal('true');
    expect(el.querySelectorAll('.main-nav-item.is-open').length).to.equal(1);
  });
});

describe('collapsed mobile nav', () => {
  afterEach(async () => {
    await setViewport({ width: 1440, height: 900 });
  });

  it('is inert when the drawer is shut', async () => {
    await setViewport({ width: 390, height: 844 });
    const el = await mountFullHeader();
    expect(el.querySelector('.main-nav-section').inert).to.equal(true);
    // Toggle lives in the actions section here: the guard must keep it reachable.
    expect(el.querySelector('.actions-section').inert).to.equal(false);
    el.querySelector('.action-wrapper.nav-toggle button').click();
    expect(el.querySelector('.main-nav-section').inert).to.equal(false);
  });

  it('is never inert at desktop', async () => {
    await setViewport({ width: 1440, height: 900 });
    const el = await mountFullHeader();
    expect(el.querySelector('.main-nav-section').inert).to.equal(false);
  });

  it('inerts the actions section, not the brand section, when the toggle ships in brand', async () => {
    await setViewport({ width: 390, height: 844 });
    const el = await mountBrandToggleHeader();
    const toggle = el.querySelector('.action-wrapper.nav-toggle button');
    expect(el.querySelector('.actions-section').inert).to.equal(true);
    expect(el.querySelector('.brand-section').inert).to.equal(false);
    expect(el.querySelector('.main-nav-section').inert).to.equal(true);
    expect(toggle.ariaExpanded).to.equal('false');
    toggle.click();
    expect(toggle.ariaExpanded).to.equal('true');
  });
});

describe('mobile drawer', () => {
  afterEach(async () => {
    await setViewport({ width: 1440, height: 900 });
  });

  it('inerts the page, moves focus in, and restores it on Escape', async () => {
    await setViewport({ width: 390, height: 844 });
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    document.body.append(main, footer);
    const el = await mountFullHeader();
    const toggle = el.querySelector('.action-wrapper.nav-toggle button');

    toggle.click();
    expect(main.inert).to.equal(true);
    expect(footer.inert).to.equal(true);
    expect(el.contains(document.activeElement)).to.equal(true);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(el.classList.contains('is-mobile-open')).to.equal(false);
    expect(main.inert).to.equal(false);
    expect(footer.inert).to.equal(false);
    // Compared via boolean, not passed to chai's equal(): a failing equal()
    // on a DOM node serializes it for the diff, which reliably wedges this
    // headless Chrome (see the same pattern in 'menu dismissal' above).
    expect(document.activeElement === toggle).to.equal(true);
    main.remove();
    footer.remove();
  });

  it('inerts the page and un-inerts it again when closed by re-clicking the toggle', async () => {
    await setViewport({ width: 390, height: 844 });
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    document.body.append(main, footer);
    const el = await mountFullHeader();
    const toggle = el.querySelector('.action-wrapper.nav-toggle button');

    toggle.click();
    expect(main.inert).to.equal(true);
    expect(footer.inert).to.equal(true);

    toggle.click();
    expect(el.classList.contains('is-mobile-open')).to.equal(false);
    expect(main.inert).to.equal(false);
    expect(footer.inert).to.equal(false);
    main.remove();
    footer.remove();
  });

  it('closes the drawer and un-inerts the page when resized past the breakpoint while open', async () => {
    await setViewport({ width: 390, height: 844 });
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    document.body.append(main, footer);
    const el = await mountFullHeader();
    const toggle = el.querySelector('.action-wrapper.nav-toggle button');

    toggle.click();
    expect(main.inert).to.equal(true);
    expect(footer.inert).to.equal(true);
    const focused = document.activeElement;

    await setViewport({ width: 1440, height: 900 });
    // The teardown runs off a ResizeObserver callback, which the browser
    // schedules a frame or two after layout settles - poll a few animation
    // frames rather than asserting immediately.
    for (let i = 0; i < 10 && el.classList.contains('is-mobile-open'); i += 1) {
      await new Promise((resolve) => { requestAnimationFrame(resolve); });
    }

    expect(el.classList.contains('is-mobile-open')).to.equal(false);
    expect(main.inert).to.equal(false);
    expect(footer.inert).to.equal(false);
    // No user gesture occurred here: an automatic, resize-driven teardown
    // must not steal focus from wherever it already was.
    expect(document.activeElement === focused).to.equal(true);
    main.remove();
    footer.remove();
  });

  it('closes only the open submenu on Escape, leaving the drawer open', async () => {
    await setViewport({ width: 390, height: 844 });
    const main = document.createElement('main');
    document.body.append(main);
    const el = await mountFullHeader();
    const toggle = el.querySelector('.action-wrapper.nav-toggle button');
    toggle.click();

    const trigger = el.querySelector('.main-nav-section button.main-nav-link');
    trigger.click();
    expect(trigger.getAttribute('aria-expanded')).to.equal('true');

    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(trigger.getAttribute('aria-expanded')).to.equal('false');
    expect(el.classList.contains('is-mobile-open')).to.equal(true);
    expect(main.inert).to.equal(true);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(el.classList.contains('is-mobile-open')).to.equal(false);
    expect(main.inert).to.equal(false);
    main.remove();
  });

  it('drives its own header when multiple headers are present', async () => {
    await setViewport({ width: 390, height: 844 });
    const elA = await mountFullHeader();
    const elB = await mountFullHeader();
    const toggleB = elB.querySelector('.action-wrapper.nav-toggle button');

    toggleB.click();
    expect(elB.classList.contains('is-mobile-open')).to.equal(true);
    expect(elA.classList.contains('is-mobile-open')).to.equal(false);
    toggleB.click();
  });

  it('does not leak the Escape listener when closed by re-clicking the toggle', async () => {
    await setViewport({ width: 390, height: 844 });
    const el = await mountFullHeader();
    const toggle = el.querySelector('.action-wrapper.nav-toggle button');

    // Count net document-level 'keydown' listeners added across repeated
    // open/close-by-click cycles. closeDrawer() is idempotent, so a leaked
    // listener does not show up as a wrong end state on its own (all stale
    // handlers still close the same header correctly) - it only shows up as
    // registrations that never get balanced by a removal.
    let net = 0;
    const { addEventListener, removeEventListener } = document;
    document.addEventListener = function patchedAdd(type, fn, opts) {
      if (type === 'keydown') net += 1;
      return addEventListener.call(this, type, fn, opts);
    };
    document.removeEventListener = function patchedRemove(type, fn, opts) {
      if (type === 'keydown') net -= 1;
      return removeEventListener.call(this, type, fn, opts);
    };

    toggle.click();
    toggle.click();
    toggle.click();
    toggle.click();

    document.addEventListener = addEventListener;
    document.removeEventListener = removeEventListener;

    expect(net).to.equal(0);
  });
});

describe('skip link', () => {
  afterEach(() => {
    document.querySelector('main')?.remove();
  });

  it('uses authored text when present', async () => {
    document.body.append(document.createElement('main'));
    const el = await mountHeader('<div class="section"><div class="default-content"><p><a href="/tools/widgets/skip">Zum Inhalt springen</a></p></div></div>');
    const { decorateSkipLink } = await import('../../blocks/header/header.js');
    decorateSkipLink(el);
    const skip = el.querySelector('.skip-link');
    expect(skip.textContent).to.equal('Zum Inhalt springen');
    expect(skip.hasAttribute('lang')).to.equal(false);
  });

  it('falls back to English marked as English', async () => {
    document.body.append(document.createElement('main'));
    const el = await mountHeader('<div class="section"></div>');
    const { decorateSkipLink } = await import('../../blocks/header/header.js');
    decorateSkipLink(el);
    const skip = el.querySelector('.skip-link');
    expect(skip.textContent).to.equal('Skip to main content');
    expect(skip.getAttribute('lang')).to.equal('en');
  });

  it('is not created without a main landmark', async () => {
    const el = await mountHeader('<div class="section"></div>');
    const { decorateSkipLink } = await import('../../blocks/header/header.js');
    decorateSkipLink(el);
    expect(el.querySelector('.skip-link')).to.equal(null);
  });

  it('assigns an id and points the href at it when main has none', async () => {
    const main = document.createElement('main');
    document.body.append(main);
    const el = await mountHeader('<div class="section"></div>');
    const { decorateSkipLink } = await import('../../blocks/header/header.js');
    decorateSkipLink(el);
    expect(main.id).to.equal('main');
    expect(el.querySelector('.skip-link').getAttribute('href')).to.equal('#main');
  });

  it('keeps an authored id and points the href at it', async () => {
    const main = document.createElement('main');
    main.id = 'content';
    document.body.append(main);
    const el = await mountHeader('<div class="section"></div>');
    const { decorateSkipLink } = await import('../../blocks/header/header.js');
    decorateSkipLink(el);
    expect(main.id).to.equal('content');
    expect(el.querySelector('.skip-link').getAttribute('href')).to.equal('#content');
  });
});

describe('nav labelling', () => {
  it('marks the current page', async () => {
    const el = await mountHeader(`<div class="section"><div class="default-content"><ul>
      <li><p><a href="${window.location.pathname}">Here</a></p></li>
      <li><p><a href="/elsewhere">There</a></p></li>
    </ul></div></div>`);
    const { decorateNavSection } = await import('../../blocks/header/header.js');
    decorateNavSection(el.querySelector('.section'));
    const [here, there] = el.querySelectorAll('.main-nav-link');
    expect(here.getAttribute('aria-current')).to.equal('page');
    expect(there.hasAttribute('aria-current')).to.equal(false);
  });

  it('labels the nav only when authored', async () => {
    const el = await mountHeader('<div class="section"><div class="default-content"><ul><li><p><a href="/a">A</a></p></li></ul></div></div>');
    const section = el.querySelector('.section');
    const { decorateNavSection } = await import('../../blocks/header/header.js');
    decorateNavSection(section);
    expect(el.querySelector('nav').hasAttribute('aria-label')).to.equal(false);

    const el2 = await mountHeader('<div class="section"><div class="default-content"><ul><li><p><a href="/a">A</a></p></li></ul></div></div>');
    const section2 = el2.querySelector('.section');
    section2.dataset.label = 'Hauptnavigation';
    decorateNavSection(section2);
    expect(el2.querySelector('nav').getAttribute('aria-label')).to.equal('Hauptnavigation');
  });
});

describe('action state', () => {
  afterEach(() => {
    localStorage.removeItem('color-scheme');
    document.body.classList.remove('dark-scheme', 'light-scheme');
  });

  it('reports scheme as a pressed toggle', async () => {
    const el = await mountFullHeaderWithActions();
    const btn = el.querySelector('.action-wrapper.scheme button');
    const before = btn.getAttribute('aria-pressed');
    expect(before).to.be.oneOf(['true', 'false']);
    btn.click();
    expect(btn.getAttribute('aria-pressed')).to.not.equal(before);
  });

  it('reflects dark mode already in effect at decoration time', async () => {
    document.body.classList.add('dark-scheme');
    const el = await mountFullHeaderWithActions();
    const btn = el.querySelector('.action-wrapper.scheme button');
    expect(btn.getAttribute('aria-pressed')).to.equal('true');
  });

  it('falls back to matchMedia when no scheme class is set yet', async () => {
    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    const el = await mountFullHeaderWithActions();
    const btn = el.querySelector('.action-wrapper.scheme button');
    expect(btn.getAttribute('aria-pressed')).to.equal(String(prefersDark));
  });

  it('reports language as expandable', async () => {
    const el = await mountFullHeaderWithActions();
    const btn = el.querySelector('.action-wrapper.language button');
    expect(btn.getAttribute('aria-expanded')).to.equal('false');
  });

  it('closes the language menu on Escape and returns focus to the trigger', async () => {
    const originalFetch = window.fetch;
    window.fetch = async () => ({ ok: true, text: async () => '<main><div><p><a href="/de">DE</a></p></div></main>' });
    try {
      const el = await mountFullHeaderWithActions();
      const btn = el.querySelector('.action-wrapper.language button');
      btn.click();
      await new Promise((resolve) => { setTimeout(resolve, 0); });
      expect(btn.getAttribute('aria-expanded')).to.equal('true');
      const link = el.querySelector('.language.menu a');
      link.focus();
      link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      expect(btn.getAttribute('aria-expanded')).to.equal('false');
      expect(document.activeElement === btn).to.equal(true);
    } finally {
      window.fetch = originalFetch;
    }
  });

  it('resets the language trigger on close without touching a nav toggle sharing its section', async () => {
    const originalFetch = window.fetch;
    window.fetch = async () => ({ ok: true, text: async () => '<main><div></div></main>' });
    try {
      const el = await mountToggleLanguageHeader();
      const toggleBtn = el.querySelector('.action-wrapper.nav-toggle button');
      const langBtn = el.querySelector('.action-wrapper.language button');
      // Toggle precedes language in document order, inside the same
      // .actions-section that gains "is-open" when the language menu opens.
      langBtn.click();
      await new Promise((resolve) => { setTimeout(resolve, 0); });
      expect(langBtn.getAttribute('aria-expanded')).to.equal('true');
      expect(toggleBtn.getAttribute('aria-expanded')).to.equal('false');

      // A click outside the header runs docClose -> closeAllMenus().
      document.body.click();
      expect(langBtn.getAttribute('aria-expanded')).to.equal('false');
      expect(toggleBtn.getAttribute('aria-expanded')).to.equal('false');
    } finally {
      window.fetch = originalFetch;
    }
  });
});
