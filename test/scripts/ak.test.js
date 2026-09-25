import { expect } from '@esm-bundle/chai';
import {
  getMetadata, getLocale, decorateLink, loadArea, setConfig,
} from '../../scripts/ak.js';

const LOCALES = { '': { lang: 'en' }, '/de': { lang: 'de' }, '/ar': { lang: 'ar', dir: 'rtl' } };

function setMeta(attr, key, value) {
  const meta = document.createElement('meta');
  meta.setAttribute(attr, key);
  meta.content = value;
  document.head.append(meta);
  return meta;
}

function setLocaleMeta(value) {
  document.head.querySelector('meta[name="locale"]')?.remove();
  if (!value) return;
  const meta = document.createElement('meta');
  meta.name = 'locale';
  meta.content = value;
  document.head.append(meta);
}

describe('getMetadata', () => {
  it('should read name and property metadata', () => {
    const metas = [setMeta('name', 'template', 'docs'), setMeta('property', 'og:title', 'Hi')];
    expect(getMetadata('template')).to.equal('docs');
    expect(getMetadata('og:title')).to.equal('Hi');
    expect(getMetadata('missing')).to.be.null;
    metas.forEach((meta) => meta.remove());
  });
});

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

  it('should strip configured hostnames so links become relative', () => {
    const a = document.createElement('a');
    a.href = 'https://www.authorkit.dev/about?q=1';
    decorate(a, { hostnames: ['authorkit.dev'] });
    expect(a.getAttribute('href')).to.equal('/about?q=1');
  });

  it('should open #_blank links in a new tab and drop the flag', () => {
    const a = document.createElement('a');
    a.href = 'https://example.com/#_blank';
    decorate(a);
    expect(a.target).to.equal('_blank');
    expect(a.href).to.equal('https://example.com/');
  });

  it('should not auto-block a #_dnb link', () => {
    const a = document.createElement('a');
    a.href = '/fragments/promo#_dnb';
    decorate(a, { linkBlocks: [{ fragment: '/fragments/' }] });
    expect(a.classList.contains('auto-block')).to.be.false;
    expect(a.href).to.not.contain('#');
  });

  describe('localization', () => {
    const LOCALIZED = { locales: LOCALES, locale: { prefix: '/de' } };
    const localize = (href, conf = LOCALIZED) => {
      const a = document.createElement('a');
      a.href = href;
      decorate(a, conf);
      return new URL(a.href).pathname;
    };

    it('should prefix relative links with the current locale', () => {
      expect(localize('/about')).to.equal('/de/about');
    });

    it('should leave links already in a locale alone', () => {
      expect(localize('/de/about')).to.equal('/de/about');
      expect(localize('/ar/about')).to.equal('/ar/about');
    });

    it('should leave #_dnt and external links alone', () => {
      expect(localize('/about#_dnt')).to.equal('/about');
      expect(localize('https://example.com/about')).to.equal('/about');
    });

    it('should leave links alone in the root locale', () => {
      expect(localize('/about', { locales: LOCALES, locale: { prefix: '' } })).to.equal('/about');
    });
  });

  describe('buttons', () => {
    const button = (html) => {
      const p = document.createElement('p');
      p.innerHTML = html;
      p.querySelectorAll('a').forEach((a) => decorate(a));
      return p;
    };

    const STYLES = [
      ['<em>', 'btn-secondary'],
      ['<strong>', 'btn-primary'],
      ['<em><strong>', 'btn-accent'],
      ['<del>', 'btn-negative'],
    ];
    for (const [open, cls] of STYLES) {
      it(`should make ${open} a ${cls}`, () => {
        const close = open.replaceAll('<', '</').split('><').reverse().join('><');
        const p = button(`${open}<a href="/go">Go</a>${close}`);
        const a = p.firstElementChild;
        expect(a.tagName).to.equal('A');
        expect([...a.classList]).to.eql(['btn', cls]);
      });
    }

    it('should make underline an outline and unwrap the text', () => {
      const a = button('<strong><a href="/go"><u>Go</u></a></strong>').firstElementChild;
      expect([...a.classList]).to.eql(['btn', 'btn-primary', 'btn-outline']);
      expect(a.innerHTML).to.equal('Go');
    });

    it('should group adjacent buttons', () => {
      const p = button('<strong><a href="/a">A</a></strong> <em><a href="/b">B</a></em>');
      expect(p.classList.contains('btn-group')).to.be.true;
      expect([...p.children].map((a) => a.className)).to.eql(['btn btn-primary', 'btn btn-secondary']);
    });

    it('should not make a button of a link in running text', () => {
      const p = button('Read <strong><a href="/more">more</a></strong> here.');
      expect(p.querySelector('.btn')).to.be.null;
    });
  });
});

describe('loadArea', () => {
  const calls = [];
  let area;

  before(async () => {
    setConfig({
      hostnames: [],
      linkBlocks: [{ youtube: 'https://www.youtube' }],
      components: ['youtube'],
      log: (ex, el) => calls.push({ ex, el }),
    });
    area = document.createElement('div');
    area.innerHTML = `
      <div class="dark">
        <h2>Title</h2>
        <picture>
          <source type="image/webp" srcset="./media_1.jpg?width=2000&format=webply" media="(min-width: 600px)">
          <img loading="lazy" src="./media_1.jpg?width=750&format=jpg">
        </picture>
        <div class="columns"><div><div>A</div><div>B</div></div></div>
        <div class="columns"><div><div>C</div></div></div>
        <div class="not-a-block"><div><div>D</div></div></div>
        <p><a href="https://www.youtube.com/watch?v=abc">Video</a></p>
      </div>
      <div><p>Plain</p></div>`;
    await loadArea({ area });
  });

  const links = (name) => document.head.querySelectorAll(`link[href$="/blocks/${name}/${name}.css"]`);

  it('should group section children into default and block content', () => {
    const [first, second] = area.children;
    expect([...first.children].map((el) => el.className))
      .to.eql(['default-content', 'block-content', 'default-content']);
    expect([...second.children].map((el) => el.className)).to.eql(['default-content']);
  });

  it('should mark sections decorated and clear their status', () => {
    for (const section of area.children) {
      expect(section.classList.contains('section')).to.be.true;
      expect(section.dataset.status).to.be.undefined;
    }
  });

  it('should add an extra-wide source to authored pictures', () => {
    const source = area.querySelector('picture > source');
    expect(source.media).to.equal('(min-width: 1400px)');
    expect(source.getAttribute('srcset')).to.equal('./media_1.jpg?width=3000&format=webply');
  });

  it('should load div blocks and their styles once', () => {
    const cols = area.querySelectorAll('.columns');
    for (const el of cols) {
      expect(el.dataset.blockName).to.equal('columns');
      expect(el.querySelector('.row-1 > .col-1')).to.exist;
    }
    expect(links('columns')).to.have.length(1);
  });

  it('should load link blocks without styles when listed as components', () => {
    expect(area.querySelector('a[href*="youtube"]')).to.be.null;
    expect(area.querySelector('.video').dataset.src).to.contain('/embed/abc');
    expect(links('youtube')).to.have.length(0);
  });

  it('should report an unknown block and keep loading the rest', () => {
    const block = area.querySelector('.not-a-block');
    expect(calls.map(({ el }) => el)).to.eql([block]);
  });

  it('should apply section metadata only where it is authored', () => {
    const [first, second] = area.children;
    expect(first.dataset.meta).to.be.undefined;
    expect(second.dataset.meta).to.be.undefined;
    expect(links('section-metadata')).to.have.length(1);
  });
});
