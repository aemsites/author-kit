import { expect } from '@esm-bundle/chai';

// Set query param before importing scripts module
const originalUrl = window.location.href;
window.history.pushState({}, '', '?dapreview=true');

// Now import - module will see the dapreview param
await import('../../scripts/scripts.js');

describe('dapreview', () => {
  after(() => {
    window.history.pushState({}, '', originalUrl);
  });

  it('should detect dapreview query parameter', () => {
    const url = new URL(window.location.href);
    const dapreview = url.searchParams.get('dapreview');
    expect(dapreview).to.equal('true');
  });

  it('should load da.js module', async () => {
    // Wait for dynamic import to complete
    await new Promise((resolve) => { setTimeout(resolve, 100); });

    const resources = performance.getEntriesByType('resource');
    const daLoaded = resources.some((r) => r.name.includes('tools/da/da.js'));
    expect(daLoaded).to.be.true;
  });
});
