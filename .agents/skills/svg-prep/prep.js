import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, basename, extname } from 'node:path';
import normalise from './normalise.js';

const args = process.argv.slice(2);
const flatten = args.includes('--flatten');
const palette = args.includes('--palette');
const keep = args.find((a) => a.startsWith('--keep='))?.slice(7);
const paths = args.filter((a) => !a.startsWith('--'));

const svgsIn = (path) => (statSync(path).isDirectory()
  ? readdirSync(path).filter((f) => extname(f) === '.svg').map((f) => join(path, f))
  : [path]);

const MARK = { error: '✗', warn: '⚠', info: 'ℹ' };
let failed = false;

for (const file of paths.flatMap(svgsIn)) {
  try {
    const before = readFileSync(file, 'utf8');
    const name = basename(file, '.svg');
    const { svg, findings } = normalise(before, { name, flatten, keep, palette });
    const errored = findings.some((f) => f.level === 'error');
    if (!errored) writeFileSync(file, `${svg}\n`);
    failed ||= errored;
    const size = errored ? 'not written' : `${before.length} → ${svg.length} bytes`;
    console.log(`\n${file}  ${size}`);
    for (const f of findings) console.log(`  ${MARK[f.level]} ${f.code}: ${f.message}`);
  } catch (ex) {
    failed = true;
    console.log(`\n${file}  not written\n  ${MARK.error} crashed: ${ex.message}`);
  }
}

process.exit(failed ? 1 : 0);
