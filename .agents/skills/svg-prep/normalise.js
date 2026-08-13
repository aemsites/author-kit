const TAG = /<!--[\s\S]*?-->|<\?[\s\S]*?\?>|<\/?[a-zA-Z][^>"']*(?:(?:"[^"]*"|'[^']*')[^>"']*)*>/g;
const ATTR = /([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
const VOID_TEXT = /^\s+$/;

export function parse(svg) {
  const tokens = [];
  let last = 0;
  for (const match of svg.matchAll(TAG)) {
    const text = svg.slice(last, match.index);
    if (text && !VOID_TEXT.test(text)) tokens.push({ type: 'text', value: text.trim() });
    last = match.index + match[0].length;
    const raw = match[0];
    if (raw.startsWith('<!--')) {
      tokens.push({ type: 'comment', value: raw.slice(4, -3) });
    } else if (raw.startsWith('<?')) {
      tokens.push({ type: 'pi', value: raw.slice(2, -2) });
    } else if (raw.startsWith('</')) {
      tokens.push({ type: 'close', name: raw.slice(2, -1).trim() });
    } else {
      const selfClose = raw.endsWith('/>');
      const name = raw.slice(1).match(/^[\w:-]+/)[0];
      const attrs = new Map();
      for (const [, key, dq, sq] of raw.matchAll(ATTR)) attrs.set(key, dq ?? sq);
      tokens.push({ type: 'open', name, attrs, selfClose });
    }
  }
  const tail = svg.slice(last);
  if (tail && !VOID_TEXT.test(tail)) tokens.push({ type: 'text', value: tail.trim() });
  return tokens;
}

const tag = ({ name, attrs, selfClose }) => {
  const pairs = [...attrs].map(([k, v]) => ` ${k}="${v}"`).join('');
  return `<${name}${pairs}${selfClose ? '/>' : '>'}`;
};

export function serialise(tokens) {
  const lines = [];
  let depth = 0;
  for (const [i, token] of tokens.entries()) {
    const pad = '  '.repeat(depth);
    if (token.type === 'text') {
      lines[lines.length - 1] += token.value;
    } else if (token.type === 'close') {
      depth -= 1;
      const inline = tokens[i - 1]?.type === 'text';
      if (inline) lines[lines.length - 1] += `</${token.name}>`;
      else lines.push(`${'  '.repeat(depth)}</${token.name}>`);
    } else if (token.type !== 'pi' && token.type !== 'comment') {
      lines.push(pad + tag(token));
      if (!token.selfClose) depth += 1;
    }
  }
  return lines.join('\n');
}

const NS = 'http://www.w3.org/2000/svg';

function decorateRoot(root, findings) {
  root.attrs.delete('xmlns:xlink');
  root.attrs.set('id', 'icon');
  if (!root.attrs.has('xmlns')) root.attrs.set('xmlns', NS);
  const width = root.attrs.get('width');
  const height = root.attrs.get('height');
  root.attrs.delete('width');
  root.attrs.delete('height');
  if (root.attrs.has('viewBox')) return true;
  if (!width || !height) {
    findings.push({
      level: 'error',
      code: 'no-viewbox',
      message: 'no viewBox, and no width/height to synthesise one from',
    });
    return false;
  }
  root.attrs.set('viewBox', `0 0 ${parseFloat(width)} ${parseFloat(height)}`);
  return true;
}

function drop(tokens, names) {
  const out = [];
  let skip = 0;
  let skipName = null;
  for (const token of tokens) {
    if (skip) {
      if (token.type === 'open' && token.name === skipName && !token.selfClose) skip += 1;
      else if (token.type === 'close' && token.name === skipName) skip -= 1;
    } else if (token.type === 'open' && names.has(token.name)) {
      if (!token.selfClose) {
        skip = 1;
        skipName = token.name;
      }
    } else {
      out.push(token);
    }
  }
  return out;
}

const RULE = /([^{}]+)\{([^}]*)\}/g;
const CLASS = /^\.([\w-]+)$/;
const NOISE = /\/\*[\s\S]*?\*\/|<!\[CDATA\[|\]\]>/g;

function resolveClasses(tokens) {
  const rules = new Map();
  for (const [i, token] of tokens.entries()) {
    if (token.type === 'open' && token.name === 'style') {
      const text = tokens[i + 1]?.type === 'text' ? tokens[i + 1].value : '';
      for (const [, selectors, body] of text.replace(NOISE, '').matchAll(RULE)) {
        for (const one of selectors.split(',')) {
          const cls = one.trim().match(CLASS)?.[1];
          if (cls) rules.set(cls, `${rules.get(cls) ?? ''};${body}`);
        }
      }
    }
  }
  for (const token of tokens.filter((t) => t.type === 'open' && t.attrs.has('class'))) {
    for (const one of token.attrs.get('class').split(/\s+/)) {
      for (const decl of (rules.get(one) ?? '').split(';')) {
        const [prop, value] = decl.split(':').map((s) => s?.trim());
        if (prop && value) token.attrs.set(prop, value);
      }
    }
    token.attrs.delete('class');
  }
  const kept = drop(tokens, new Set(['style']));
  const pair = (open, close) => open?.name === 'defs' && open.type === 'open' && !open.selfClose
    && close?.name === 'defs' && close.type === 'close';
  return kept.filter((t, i) => !(pair(t, kept[i + 1]) || pair(kept[i - 1], t)));
}

const STRIP = new Set(['script', 'metadata', 'title', 'desc', 'foreignObject']);
const CRUFT = ['data-name', 'xml:space', 'serif:id'];
const REF = /url\(#([\w-]+)\)|(?:^|\s)#([\w-]+)$/g;

function strip(tokens, findings, root) {
  if (tokens.some((t) => t.type === 'open' && t.name === 'foreignObject')) {
    findings.push({
      level: 'warn',
      code: 'foreign-object',
      message: 'foreignObject stripped — it can host HTML and script',
    });
  }
  const kept = drop(tokens, STRIP).filter((t) => t.type !== 'comment' && t.type !== 'pi');
  const referenced = new Set();
  const elements = kept.filter((t) => t.type === 'open');
  const values = kept.flatMap((t) => (t.type === 'open' ? [...t.attrs.values()] : [t.value ?? '']));
  for (const value of values) {
    for (const [, url, hash] of value.matchAll(REF)) referenced.add(url ?? hash);
  }
  for (const token of elements) {
    for (const key of [...token.attrs.keys()]) {
      if (key.startsWith('on') || CRUFT.includes(key)) token.attrs.delete(key);
      if (key === 'xlink:href') {
        token.attrs.set('href', token.attrs.get(key));
        token.attrs.delete(key);
      }
    }
    const id = token.attrs.get('id');
    if (token !== root && id && id !== 'icon' && !referenced.has(id)) token.attrs.delete('id');
  }
  return kept;
}

const PAINT = ['fill', 'stroke', 'stop-color'];
const KEYWORD = new Set(['none', 'currentColor', 'inherit', 'transparent']);

function readStyle(token) {
  const style = token.attrs.get('style');
  if (!style) return;
  for (const decl of style.split(';')) {
    const [prop, value] = decl.split(':').map((s) => s?.trim());
    if (PAINT.includes(prop) && value) token.attrs.set(prop, value);
  }
  token.attrs.delete('style');
}

const WHITE = new Set(['#fff', '#ffffff', 'white']);

function paint(tokens, findings, { flatten, keep, palette }) {
  const colours = new Set();
  for (const token of tokens.filter((t) => t.type === 'open')) {
    readStyle(token);
    for (const prop of PAINT) {
      const value = token.attrs.get(prop);
      if (value && !KEYWORD.has(value)) {
        if (value.startsWith('url(')) {
          findings.push({
            level: 'warn',
            code: 'gradient-paint',
            message: `${prop}="${value}" cannot become currentColor`,
          });
        } else {
          colours.add(value.toLowerCase());
        }
      }
    }
  }
  if (colours.size > 1) {
    const knockout = [...colours].some((c) => WHITE.has(c))
      ? ' — a white among them is a probable knockout, and flattening it fills the icon solid'
      : '';
    if (palette) {
      findings.push({
        level: 'warn',
        code: 'multi-colour',
        message: `palette kept as authored: ${[...colours].join(', ')} — it will not follow the colour scheme`,
      });
      return;
    }
    if (!flatten) {
      findings.push({
        level: 'error',
        code: 'multi-colour',
        message: `${colours.size} distinct colours: ${[...colours].join(', ')}${knockout}`,
      });
      return;
    }
  }
  if (palette) {
    if (colours.size) {
      findings.push({
        level: 'warn',
        code: 'palette-suppressed',
        message: `--palette left ${[...colours].join(', ')} as authored — this icon will not follow`
          + ' the colour scheme',
      });
    }
    return;
  }
  for (const token of tokens.filter((t) => t.type === 'open')) {
    for (const prop of PAINT) {
      const value = token.attrs.get(prop);
      const convertible = value && !KEYWORD.has(value) && !value.startsWith('url(')
        && !(keep && value.toLowerCase() === keep.toLowerCase());
      if (convertible) token.attrs.set(prop, 'currentColor');
    }
  }
}

const RISKY = new Set(['clipPath', 'mask', 'filter']);

function inspect(tokens, findings, { name }) {
  const names = new Set(tokens.filter((t) => t.type === 'open').map((t) => t.name));
  if (names.has('image')) {
    findings.push({
      level: 'error',
      code: 'raster-image',
      message: 'contains an <image> — this is not a vector icon',
    });
  }
  if (names.has('text') || names.has('tspan')) {
    findings.push({
      level: 'warn',
      code: 'live-text',
      message: 'live text will not render without the font — outline it and re-export',
    });
  }
  for (const risky of [...RISKY].filter((r) => names.has(r))) {
    findings.push({
      level: 'warn',
      code: 'clip-mask-filter',
      message: `<${risky}> survives but is a render risk through <use>`,
    });
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) {
    findings.push({
      level: 'warn',
      code: 'filename',
      message: `"${name}" is not lower kebab-case — an authored :name: sanitises to that, and the file has to match`,
    });
  }
}

function inspectViewBox(root, findings) {
  const box = root.attrs.get('viewBox');
  if (box === '0 0 24 24') return;
  const [x, y, w, h] = box.split(/[\s,]+/).map(Number);
  if (x !== 0 || y !== 0 || w !== h) {
    findings.push({
      level: 'warn',
      code: 'viewbox-shape',
      message: `viewBox "${box}" is not square at the origin and will not sit right`,
    });
    return;
  }
  findings.push({
    level: 'info',
    code: 'viewbox-grid',
    message: `viewBox "${box}" — renders correctly; re-export on 0 0 24 24 if stroke weight`
      + ' has to match the set',
  });
}

export default function normalise(svg, { name, flatten, keep, palette }) {
  const findings = [];
  let tokens = parse(svg);
  const root = tokens.find((t) => t.type === 'open' && t.name === 'svg');
  inspect(tokens, findings, { name });
  tokens = strip(tokens, findings, root);
  if (decorateRoot(root, findings)) {
    inspectViewBox(root, findings);
    tokens = resolveClasses(tokens);
    paint(tokens, findings, { flatten, keep, palette });
  }
  if (findings.some((f) => f.level === 'error')) return { svg, findings };
  return { svg: serialise(tokens), findings };
}
