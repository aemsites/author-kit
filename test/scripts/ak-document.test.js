import { expect } from '@esm-bundle/chai';
import { loadArea, setConfig } from '../../scripts/ak.js';

const until = (check) => new Promise((resolve) => {
  const tick = () => (check() ? resolve() : requestAnimationFrame(tick));
  tick();
});

describe('loadArea on the document', () => {
  const { classList } = document.body;

  before(async () => {
    sessionStorage.removeItem('session');
    localStorage.setItem('color-scheme', 'dark-scheme');
    document.head.insertAdjacentHTML('beforeend', `
      <meta name="header" content="off">
      <meta name="template" content="Product Page">`);
    document.body.innerHTML = '<header></header><main><div><p>Hello</p></div></main>';
    setConfig({ hostnames: [], linkBlocks: [], components: [] });
    await loadArea();
  });

  after(() => localStorage.removeItem('color-scheme'));

  it('should remove the header when metadata turns it off', () => {
    expect(document.querySelector('header')).to.be.null;
    expect(classList.contains('no-header')).to.be.true;
  });

  it('should apply the template from metadata', async () => {
    await until(() => classList.contains('product-page-template'));
    expect(classList.contains('has-template')).to.be.false;
  });

  it('should restore the stored color scheme', () => {
    expect(classList.contains('dark-scheme')).to.be.true;
  });

  it('should start a session after the first section', () => {
    expect(sessionStorage.getItem('session')).to.equal('true');
    expect(classList.contains('session')).to.be.true;
  });

  it('should decorate sections under main', () => {
    expect(document.querySelector('main > .section > .default-content > p')).to.exist;
  });
});
