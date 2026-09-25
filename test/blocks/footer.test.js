import { expect } from '@esm-bundle/chai';
import init from '../../blocks/footer/footer.js';

describe('footer source', () => {
  const originalFetch = window.fetch;
  const metas = [];
  let fetched;

  const setMeta = (name, content) => {
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.append(meta);
    metas.push(meta);
  };

  const fetchedPath = async () => {
    await init(document.createElement('footer')).catch(() => {});
    return fetched;
  };

  beforeEach(() => {
    window.fetch = async (path) => {
      fetched = path;
      return { ok: false };
    };
  });

  afterEach(() => {
    window.fetch = originalFetch;
    metas.splice(0).forEach((meta) => meta.remove());
  });

  it('loads the default fragment when a different footer block is chosen', async () => {
    setMeta('footer', 'custom-landing-footer');
    expect(await fetchedPath()).to.equal('/fragments/nav/footer');
  });

  it('loads the fragment named by footer-source', async () => {
    setMeta('footer-source', '/fragments/nav/landing-footer');
    expect(await fetchedPath()).to.equal('/fragments/nav/landing-footer');
  });
});
