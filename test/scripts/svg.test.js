import { expect } from '@esm-bundle/chai';
import loadIcons, { getSvg, loadHrefSvg } from '../../scripts/utils/svg.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

/*
 * An <svg> built by an XML parser without an xmlns lands in no namespace: it serialises
 * identically and never paints, so every assertion here is on the live element or its geometry
 * rather than on markup. External <use> has no load event, hence the poll.
 */
async function renderedBox(use, timeout = 3000) {
  const deadline = performance.now() + timeout;
  while (performance.now() < deadline) {
    const box = use.getBBox();
    if (box.width > 0 && box.height > 0) return box;
    await new Promise((resolve) => { requestAnimationFrame(resolve); });
  }
  throw new Error(`${use.getAttribute('href')} painted nothing within ${timeout}ms`);
}

function mount(name) {
  const host = document.createElement('p');
  host.style.fontSize = '20px';
  host.append(getSvg({ name, className: `icon icon-${name}` }));
  document.body.append(host);
  return host;
}

describe('getSvg', () => {
  it('returns an element in the SVG namespace', () => {
    const svg = getSvg({ name: 'globe' });
    expect(svg.namespaceURI).to.equal(SVG_NS);
    expect(svg).to.be.an.instanceOf(SVGSVGElement);
  });

  it('puts the <use> in the SVG namespace too', () => {
    const use = getSvg({ name: 'globe' }).firstElementChild;
    expect(use.namespaceURI).to.equal(SVG_NS);
    expect(use).to.be.an.instanceOf(SVGUseElement);
  });

  it('hides the icon from assistive technology and squares the box', () => {
    const svg = getSvg({ name: 'globe' });
    expect(svg.getAttribute('aria-hidden')).to.equal('true');
    expect(svg.getAttribute('viewBox')).to.equal('0 0 24 24');
  });

  it('keeps the span class and points at the fixed fragment', () => {
    const svg = getSvg({ name: 'globe', className: 'icon icon-globe' });
    expect(svg.getAttribute('class')).to.equal('icon icon-globe');
    expect(svg.firstElementChild.getAttribute('href')).to.contain('/img/icons/globe.svg#icon');
  });
});

describe('a mounted icon', () => {
  let host;

  afterEach(() => { host?.remove(); });

  it('paints globe.svg through the external reference', async () => {
    host = mount('globe');
    const box = await renderedBox(host.querySelector('use'));
    expect(box.width).to.be.greaterThan(0);
    expect(box.height).to.be.greaterThan(0);
    expect(host.firstElementChild.getBoundingClientRect().width).to.be.greaterThan(0);
  });

  it('paints helix-color.svg, blank before its root was given id="icon"', async () => {
    host = mount('helix-color');
    const box = await renderedBox(host.querySelector('use'));
    expect(box.width).to.be.greaterThan(0);
    expect(box.height).to.be.greaterThan(0);
  });
});

async function countFetches(run) {
  const original = window.fetch;
  let calls = 0;
  window.fetch = (...args) => {
    calls += 1;
    return original.call(window, ...args);
  };
  try {
    await run();
  } finally {
    window.fetch = original;
  }
  return calls;
}

describe('loadHrefSvg', () => {
  it('returns a live element in the SVG namespace, hiding nothing from the caller', async () => {
    const svg = await loadHrefSvg('/img/icons/globe.svg');
    expect(svg.namespaceURI).to.equal(SVG_NS);
    expect(svg).to.be.an.instanceOf(SVGSVGElement);
    expect(svg.hasAttribute('aria-hidden')).to.be.false;
  });

  it('drops the id the normaliser put on the file', async () => {
    const svg = await loadHrefSvg('/img/icons/globe.svg');
    expect(svg.hasAttribute('id')).to.be.false;
  });

  it('returns null for a href that does not resolve, without poisoning the cache', async () => {
    const missing = '/img/icons/no-such-file.svg';
    expect(await loadHrefSvg(missing)).to.equal(null);
    expect(await loadHrefSvg('/img/icons/toggle.svg')).to.be.an.instanceOf(SVGSVGElement);

    const retries = await countFetches(async () => {
      await loadHrefSvg(missing);
      await loadHrefSvg(missing);
    });
    expect(retries).to.equal(2);
  });

  it('fetches once however many instances are asked for', async () => {
    const href = '/img/icons/more.svg?once';
    const calls = await countFetches(async () => {
      const svgs = await Promise.all([loadHrefSvg(href), loadHrefSvg(href), loadHrefSvg(href)]);
      svgs.push(await loadHrefSvg(href));
      expect(svgs.every((svg) => svg instanceof SVGSVGElement)).to.be.true;
      expect(new Set(svgs).size).to.equal(4);
    });
    expect(calls).to.equal(1);
  });
});

describe('loadIcons', () => {
  it('swaps every span for a namespaced svg, whatever order the classes arrive in', () => {
    const host = document.createElement('p');
    host.innerHTML = '<span class="icon icon-globe"></span><span class="icon-more icon"></span>';
    loadIcons(host.querySelectorAll('span.icon, span'));
    const svgs = [...host.children];
    expect(svgs).to.have.lengthOf(2);
    expect(svgs.every((svg) => svg.namespaceURI === SVG_NS)).to.be.true;
    expect(svgs[0].firstElementChild.getAttribute('href')).to.contain('/globe.svg#icon');
    expect(svgs[1].firstElementChild.getAttribute('href')).to.contain('/more.svg#icon');
  });
});
