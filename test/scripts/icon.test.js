import { expect } from '@esm-bundle/chai';
import loadIcons from '../../scripts/utils/svg.js';

describe('.icon sizing', () => {
  before(async () => {
    await new Promise((resolve) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/styles/styles.css';
      link.onload = resolve;
      link.onerror = resolve;
      document.head.append(link);
    });
  });

  it('reserves a square box on the placeholder span before the icon loads', () => {
    const host = document.createElement('p');
    host.style.fontSize = '20px';
    host.innerHTML = '<span class="icon icon-globe"></span>';
    document.body.append(host);
    const { width, height } = host.querySelector('.icon').getBoundingClientRect();
    expect(width).to.equal(20);
    expect(height).to.equal(20);
    host.remove();
  });

  // The anti-CLS mechanism is not the size, it is that the two boxes are the same box.
  for (const size of [16, 32]) {
    it(`hands the icon the box the placeholder reserved at ${size}px`, () => {
      const host = document.createElement('p');
      host.style.fontSize = `${size}px`;
      host.innerHTML = '<span class="icon icon-globe"></span>';
      document.body.append(host);
      const before = host.querySelector('span.icon').getBoundingClientRect();
      loadIcons(host.querySelectorAll('span.icon'));
      const after = host.querySelector('svg.icon').getBoundingClientRect();
      expect(before.width).to.equal(size);
      expect(after.width).to.equal(before.width);
      expect(after.height).to.equal(before.height);
      host.remove();
    });
  }
});
