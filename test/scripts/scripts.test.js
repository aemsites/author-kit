import { expect } from '@esm-bundle/chai';
import { loadPage } from '../../scripts/scripts.js';

describe('scripts.js', () => {
  before(async () => {
    document.body.innerHTML = '<img src="test.jpg" loading="lazy">';
    await loadPage();
  });

  describe('decorateArea', () => {
    it('should remove loading attribute from first image', () => {
      const img = document.querySelector('img');
      expect(img.hasAttribute('loading')).to.be.false;
    });

    it('should set fetchPriority to high', () => {
      const img = document.querySelector('img');
      expect(img.fetchPriority).to.equal('high');
    });
  });
});
