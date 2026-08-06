import { expect } from '@esm-bundle/chai';

// Loads header.css into the page and returns the decorated <header>.
async function mountHeader(html) {
  await new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/blocks/header/header.css';
    link.onload = resolve;
    link.onerror = resolve;
    document.head.append(link);
  });
  const el = document.createElement('header');
  el.innerHTML = html;
  document.body.append(el);
  return el;
}

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
    </ul>
  </div>
</div>`;

async function mountNav() {
  const el = await mountHeader(NAV_HTML);
  const { decorateNavSection } = await import('../../blocks/header/header.js');
  decorateNavSection(el.querySelector('.section'));
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
