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
    expect(el.querySelectorAll('.main-nav-item.is-open')).to.have.lengthOf(1);
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
    el.querySelector('.action-wrapper.nav-toggle button').click();
    expect(el.querySelector('.main-nav-section').inert).to.equal(false);
  });

  it('is never inert at desktop', async () => {
    await setViewport({ width: 1440, height: 900 });
    const el = await mountFullHeader();
    expect(el.querySelector('.main-nav-section').inert).to.equal(false);
  });
});
