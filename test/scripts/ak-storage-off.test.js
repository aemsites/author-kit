import { expect } from '@esm-bundle/chai';

// Browsers turn storage off either by throwing on access or by exposing null
Object.defineProperty(window, 'localStorage', {
  get: () => { throw new DOMException('Access is denied', 'SecurityError'); },
  configurable: true,
});
Object.defineProperty(window, 'sessionStorage', { value: null, configurable: true });

const { ifLocalStorage, ifSessionStorage } = await import('../../scripts/ak.js');

describe('Storage when turned off', () => {
  for (const [name, storage] of [['throws', ifLocalStorage], ['is null', ifSessionStorage]]) {
    it(`should read nothing and ignore writes when storage ${name}`, () => {
      storage.setItem('color-scheme', 'dark-scheme');
      expect(storage.getItem('color-scheme')).to.be.null;
      expect(storage.key(0)).to.be.null;
      expect(storage.length).to.equal(0);
      expect(() => storage.removeItem('color-scheme')).not.to.throw();
      expect(() => storage.clear()).not.to.throw();
    });
  }
});
