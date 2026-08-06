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
