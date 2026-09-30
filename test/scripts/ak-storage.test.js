import { expect } from '@esm-bundle/chai';

const { localStorage, sessionStorage } = window;

describe('Storage when enabled', () => {
  it('should be the native storage', async () => {
    const { ifLocalStorage, ifSessionStorage } = await import('../../scripts/ak.js');
    expect(ifLocalStorage).to.equal(localStorage);
    expect(ifSessionStorage).to.equal(sessionStorage);
  });
});
