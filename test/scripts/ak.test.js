import { expect } from '@esm-bundle/chai';
import { getLocale, decorateLink } from '../../scripts/ak.js';

const LOCALES = { '': { lang: 'en' }, '/de': { lang: 'de' }, '/ar': { lang: 'ar', dir: 'rtl' } };

function setLocaleMeta(value) {
  document.head.querySelector('meta[name="locale"]')?.remove();
  if (!value) return;
  const meta = document.createElement('meta');
  meta.name = 'locale';
  meta.content = value;
  document.head.append(meta);
}

describe('getLocale', () => {
  afterEach(() => {
    setLocaleMeta(null);
    document.documentElement.removeAttribute('dir');
  });

  it('should apply lang and dir for a known locale', () => {
    setLocaleMeta('/ar');
    const locale = getLocale(LOCALES);
    expect(locale.prefix).to.equal('/ar');
    expect(document.documentElement.lang).to.equal('ar');
    expect(document.documentElement.dir).to.equal('rtl');
  });

  it('should fall back to root when the locale is unknown', () => {
    setLocaleMeta('/klingon');
    const locale = getLocale(LOCALES);
    expect(locale.prefix).to.equal('');
    expect(locale.lang).to.equal('en');
  });

  it('should not throw when the locale map has no root entry', () => {
    const locale = getLocale({ '/de': { lang: 'de' } });
    expect(locale.prefix).to.equal('');
  });
});

describe('decorateLink', () => {
  const decorate = (a, conf = {}) => {
    const calls = [];
    const config = {
      hostnames: [], linkBlocks: [], locales: {}, locale: { prefix: '' }, ...conf,
    };
    config.log = (ex, el) => calls.push({ ex, el });
    decorateLink(config, a);
    return calls;
  };

  it('should report the failing anchor so errors are not swallowed', () => {
    const a = document.createElement('a');
    const [call, ...rest] = decorate(a);
    expect(rest).to.be.empty;
    expect(call.ex).to.be.instanceOf(Error);
    expect(call.el).to.equal(a);
  });

  it('should auto-block a link matching a configured pattern', () => {
    const a = document.createElement('a');
    a.href = '/fragments/nav/header';
    const calls = decorate(a, { linkBlocks: [{ fragment: '/fragments/' }] });
    expect(calls).to.be.empty;
    expect(a.classList.contains('fragment')).to.be.true;
    expect(a.classList.contains('auto-block')).to.be.true;
  });
});
