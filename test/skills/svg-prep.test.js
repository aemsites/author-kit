import { expect } from '@esm-bundle/chai';
import normalise, { parse, serialise } from '../../.agents/skills/svg-prep/normalise.js';

describe('parse', () => {
  it('splits elements, attributes and text', () => {
    const tokens = parse('<?xml version="1.0"?><svg id="a"><path d="M0,0Z"/><g>hi</g></svg>');
    expect(tokens.map((t) => t.type)).to.eql([
      'pi', 'open', 'open', 'open', 'text', 'close', 'close',
    ]);
    expect(tokens[1].attrs.get('id')).to.equal('a');
    expect(tokens[2].selfClose).to.equal(true);
  });

  it('does not split on a > inside a quoted attribute value', () => {
    const tokens = parse('<svg data-name="a > b"><path d="M0,0Z"/></svg>');
    expect(tokens[0].attrs.get('data-name')).to.equal('a > b');
    expect(tokens.filter((t) => t.type === 'open')).to.have.length(2);
  });
});

describe('serialise', () => {
  it('emits one element per line at two-space indent', () => {
    const out = serialise(parse('<svg id="a"><g><path d="M0,0Z"/></g></svg>'));
    expect(out).to.equal([
      '<svg id="a">',
      '  <g>',
      '    <path d="M0,0Z"/>',
      '  </g>',
      '</svg>',
    ].join('\n'));
  });

  it('keeps an element with only text on one line', () => {
    expect(serialise(parse('<svg><text>hi</text></svg>')))
      .to.equal('<svg>\n  <text>hi</text>\n</svg>');
  });
});

describe('root element', () => {
  it('forces the id to icon and drops width, height and the prolog', () => {
    const { svg } = normalise(
      '<?xml version="1.0"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg"'
      + ' width="20" height="20" viewBox="0 0 20 20"/>',
      { name: 'globe' },
    );
    expect(svg).to.equal('<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"/>');
  });

  it('synthesises a viewBox from width and height', () => {
    const { svg } = normalise('<svg width="24" height="24"/>', { name: 'a' });
    expect(svg).to.contain('viewBox="0 0 24 24"');
  });

  it('adds the namespace when it is missing', () => {
    const { svg } = normalise('<svg viewBox="0 0 24 24"/>', { name: 'a' });
    expect(svg).to.contain('xmlns="http://www.w3.org/2000/svg"');
  });

  it('errors and returns the input untouched with no viewBox to build', () => {
    const input = '<svg id="x"/>';
    const { svg, findings } = normalise(input, { name: 'a' });
    expect(svg).to.equal(input);
    expect(findings[0]).to.include({ level: 'error', code: 'no-viewbox' });
  });
});

describe('illustrator classes', () => {
  it('moves class declarations onto the elements and drops the style block', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><defs><style>.cls-1{fill:#ed2c85;}</style></defs>'
      + '<path class="cls-1" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    expect(svg).to.not.contain('cls-1');
    expect(svg).to.not.contain('<style');
    expect(svg).to.contain('<path d="M0,0Z" fill="currentColor"/>');
  });

  it('leaves an element alone when its class has no declaration', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><path class="nope" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    expect(svg).to.not.contain('class="nope"');
  });

  it('keeps a defs that still holds real content after the style is dropped', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><defs><style>.cls-1{fill:#ed2c85;}</style>'
      + '<linearGradient id="g"/></defs><path class="cls-1" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    expect(svg).to.contain('<defs>');
    expect(svg).to.contain('<linearGradient');
    expect(svg).to.not.contain('<style');
    expect(svg).to.not.contain('cls-1');
  });

  it('paints every class in a grouped selector list', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><style>.cls-1,.cls-2{fill:#1a1a1a}</style>'
      + '<path class="cls-1" d="M0,0Z"/><path class="cls-2" d="M1,1Z"/></svg>',
      { name: 'a' },
    );
    expect(svg.match(/fill="currentColor"/g)).to.have.length(2);
  });

  it('ignores a selector that is not a bare class', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><style>#icon path,.cls-1 .cls-2{fill:#1a1a1a}</style>'
      + '<path class="cls-1" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    expect(svg).to.equal('<svg viewBox="0 0 24 24" id="icon" xmlns="http://www.w3.org/2000/svg">'
      + '\n  <path d="M0,0Z"/>\n</svg>');
  });

  it('lets a class declaration beat the presentation attribute it overrides', () => {
    const { svg, findings } = normalise(
      '<svg viewBox="0 0 24 24"><style>.cls-1{fill:#fff}</style>'
      + '<path class="cls-1" fill="#1a1a1a" d="M0,0Z"/><path fill="#fff" d="M1,1Z"/></svg>',
      { name: 'a' },
    );
    expect(findings).to.eql([]);
    expect(svg.match(/fill="currentColor"/g)).to.have.length(2);
  });

  it('survives two adjacent defs', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><defs><style>.cls-1{fill:#1a1a1a}</style></defs>'
      + '<defs><clipPath id="c"><rect width="24" height="24"/></clipPath></defs>'
      + '<path class="cls-1" clip-path="url(#c)" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    expect(svg.match(/<defs>/g)).to.have.length(1);
    expect(svg).to.contain('<clipPath id="c">');
  });

  it('resolves the first rule through a CDATA-wrapped stylesheet', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><style><![CDATA[ .cls-1{fill:#1a1a1a} ]]></style>'
      + '<path class="cls-1" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    expect(svg).to.contain('fill="currentColor"');
  });

  it('resolves the first rule after a leading CSS comment', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><style>/* Generator: Adobe Illustrator */ .cls-1{fill:#1a1a1a}</style>'
      + '<path class="cls-1" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    expect(svg).to.contain('fill="currentColor"');
  });
});

describe('paint', () => {
  it('converts a single colour and preserves none', () => {
    const { svg, findings } = normalise(
      '<svg viewBox="0 0 24 24"><path fill="#1a1a1a" stroke="none" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    expect(svg).to.contain('fill="currentColor"');
    expect(svg).to.contain('stroke="none"');
    expect(findings).to.eql([]);
  });

  it('reads paint out of an inline style and removes the attribute', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><path style="fill:#1a1a1a" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    expect(svg).to.contain('fill="currentColor"');
    expect(svg).to.not.contain('style=');
  });

  it('refuses more than one colour and writes nothing', () => {
    const input = '<svg viewBox="0 0 24 24"><path fill="#ed2c85"/><path fill="#b64aa1"/></svg>';
    const { svg, findings } = normalise(input, { name: 'a' });
    expect(svg).to.equal(input);
    expect(findings[0]).to.include({ level: 'error', code: 'multi-colour' });
    expect(findings[0].message).to.contain('#ed2c85');
  });

  it('flattens more than one colour when asked', () => {
    const { svg, findings } = normalise(
      '<svg viewBox="0 0 24 24"><path fill="#ed2c85"/><path fill="#fff"/></svg>',
      { name: 'a', flatten: true },
    );
    expect(svg.match(/currentColor/g)).to.have.length(2);
    expect(findings).to.eql([]);
  });

  it('keeps a nominated value while flattening', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><path fill="#ed2c85"/><path fill="#fff"/></svg>',
      { name: 'a', flatten: true, keep: '#fff' },
    );
    expect(svg).to.contain('fill="currentColor"');
    expect(svg).to.contain('fill="#fff"');
  });

  it('names a probable knockout among the colours it refuses', () => {
    const { findings } = normalise(
      '<svg viewBox="0 0 24 24"><path fill="#ed2c85"/><path fill="#fff"/></svg>',
      { name: 'a' },
    );
    expect(findings[0].message).to.contain('knockout');
  });

  it('does every structural rewrite but leaves the palette alone', () => {
    const { svg, findings } = normalise(
      '<svg id="Layer_1" viewBox="0 0 24 24"><path fill="#ed2c85"/><path fill="#b64aa1"/></svg>',
      { name: 'a', palette: true },
    );
    expect(svg).to.contain('id="icon"');
    expect(svg).to.contain('fill="#ed2c85"');
    expect(findings[0]).to.include({ level: 'warn', code: 'multi-colour' });
  });

  it('reports gradient paint it cannot convert', () => {
    const { findings } = normalise(
      '<svg viewBox="0 0 24 24"><path fill="url(#g)"/></svg>',
      { name: 'a' },
    );
    expect(findings[0]).to.include({ code: 'gradient-paint' });
  });
});

describe('stripping', () => {
  it('removes script, event handlers, editor metadata and comments', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><!-- generator --><title>Layer 1</title><desc>x</desc>'
      + '<metadata>m</metadata><script>alert(1)</script>'
      + '<path data-name="Path 1" onclick="go()" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    for (const gone of ['script', 'title', 'desc', 'metadata', 'onclick', 'data-name', 'generator']) {
      expect(svg, gone).to.not.contain(gone);
    }
    expect(svg).to.contain('<path d="M0,0Z"/>');
  });

  it('rewrites xlink:href and drops unreferenced descendant ids', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><clipPath id="used"/><path id="loose" clip-path="url(#used)"'
      + ' xlink:href="#used"/></svg>',
      { name: 'a' },
    );
    expect(svg).to.contain('id="used"');
    expect(svg).to.not.contain('id="loose"');
    expect(svg).to.contain('href="#used"');
    expect(svg).to.not.contain('xlink:href');
  });

  it('keeps an id referenced only from a stylesheet or an inline style', () => {
    const { svg } = normalise(
      '<svg viewBox="0 0 24 24"><style>.cls-1{clip-path:url(#c)}</style>'
      + '<clipPath id="c"><rect width="24" height="24"/></clipPath>'
      + '<linearGradient id="g"><stop stop-color="#1a1a1a"/></linearGradient>'
      + '<path class="cls-1" style="fill:url(#g)" d="M0,0Z"/></svg>',
      { name: 'a' },
    );
    expect(svg).to.contain('<clipPath id="c">');
    expect(svg).to.contain('<linearGradient id="g">');
  });

  it('strips foreignObject and says so', () => {
    const { svg, findings } = normalise(
      '<svg viewBox="0 0 24 24"><foreignObject><b>hi</b></foreignObject></svg>',
      { name: 'a' },
    );
    expect(svg).to.not.contain('foreignObject');
    expect(findings.map((f) => f.code)).to.contain('foreign-object');
  });
});

const findingsFor = (svg, opts = { name: 'a' }) => normalise(svg, opts).findings.map((f) => f.code);

describe('findings', () => {
  it('reports live text', () => {
    expect(findingsFor('<svg viewBox="0 0 24 24"><text>AK</text></svg>')).to.contain('live-text');
  });

  it('refuses a raster image and writes nothing', () => {
    const input = '<svg viewBox="0 0 24 24"><image href="x.png"/></svg>';
    const { svg, findings } = normalise(input, { name: 'a' });
    expect(svg).to.equal(input);
    expect(findings[0]).to.include({ level: 'error', code: 'raster-image' });
  });

  it('notes clip paths, masks and filters that survive', () => {
    expect(findingsFor('<svg viewBox="0 0 24 24"><clipPath id="c"/></svg>'))
      .to.contain('clip-mask-filter');
  });

  it('reports a non-24 grid as information and a non-square box as a warning', () => {
    expect(findingsFor('<svg viewBox="0 0 512 512"/>')).to.contain('viewbox-grid');
    expect(findingsFor('<svg viewBox="0 0 32 16"/>')).to.contain('viewbox-shape');
  });

  it('reports a filename that is not kebab-case', () => {
    expect(findingsFor('<svg viewBox="0 0 24 24"/>', { name: 'Arrow Right' }))
      .to.contain('filename');
  });

  it('warns when --palette suppresses a conversion that would have happened', () => {
    const { svg, findings } = normalise(
      '<svg viewBox="0 0 24 24"><path fill="#1a1a1a" d="M0,0Z"/></svg>',
      { name: 'a', palette: true },
    );
    expect(svg).to.contain('fill="#1a1a1a"');
    expect(findings[0]).to.include({ level: 'warn', code: 'palette-suppressed' });
  });

  it('says nothing about --palette when there was no paint to convert', () => {
    const input = '<svg viewBox="0 0 24 24"><path fill="none" d="M0,0Z"/></svg>';
    expect(findingsFor(input, { name: 'a', palette: true })).to.eql([]);
  });
});

/*
 * Every assertion above is on the output string, and the two ways this transform blanks an icon —
 * a paint that never lands, a reference that dangles — both read fine in a diff. So: normalise an
 * Illustrator-shaped export, mount the result, and ask the browser what it painted. The gradient
 * path is the sharp one; Chrome does not render an element whose paint server does not resolve.
 */
const EXPORT = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">'
  + '<defs><style>.cls-1,.cls-2{fill:#1a1a1a;}.cls-2{fill:url(#g);}.cls-3{clip-path:url(#c);}</style>'
  + '<linearGradient id="g"><stop offset="0" stop-color="#1a1a1a"/></linearGradient>'
  + '<clipPath id="c"><rect x="0" y="0" width="12" height="24"/></clipPath></defs>'
  + '<path class="cls-1" d="M0,0H8V8H0Z"/><path class="cls-2" d="M10,0H18V8H10Z"/>'
  + '<path class="cls-3" fill="#1a1a1a" d="M0,10H24V18H0Z"/></svg>';

describe('a normalised export, rendered', () => {
  const COLOUR = 'rgb(255, 0, 0)';
  let svg;
  let paths;

  before(() => {
    const { svg: out } = normalise(EXPORT, { name: 'a' });
    svg = new DOMParser().parseFromString(out, 'image/svg+xml').documentElement;
    svg.style.cssText = `position:fixed;top:0;left:0;width:240px;height:240px;color:${COLOUR}`;
    document.body.append(svg);
    paths = svg.querySelectorAll('path');
  });

  after(() => { svg.remove(); });

  it('paints all three shapes at their authored geometry', () => {
    expect(paths).to.have.length(3);
    for (const path of paths) {
      const box = path.getBBox();
      expect(box.width, path.getAttribute('d')).to.be.greaterThan(0);
      expect(box.height, path.getAttribute('d')).to.be.greaterThan(0);
    }
  });

  it('gives the grouped-selector shape the colour of the text around it', () => {
    expect(getComputedStyle(paths[0]).fill).to.equal(COLOUR);
    expect(document.elementFromPoint(40, 40)).to.equal(paths[0]);
  });

  it('resolves the gradient the stylesheet asked for, so the shape paints at all', () => {
    expect(document.elementFromPoint(140, 40)).to.equal(paths[1]);
  });

  it('resolves the clip path the stylesheet asked for, so the shape is clipped', () => {
    expect(document.elementFromPoint(60, 140)).to.equal(paths[2]);
    expect(document.elementFromPoint(200, 140)).to.equal(svg);
  });
});
