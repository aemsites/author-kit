> **Historical record.** The plan for work completed on 2026-08-12, reduced when `spec.md` was
> marked implemented. Eleven task briefs are summarised to a line each; Task 4 is kept in full as
> the worked example of the format. The branch was squashed on merge, so unlike
> [001](../001-header-accessibility/plan.md) there is no unreduced text to link — this is all of it.
>
> Read `spec.md` for the design and the code for current truth. What the plan got wrong is recorded
> at the end — that section is the reason this file still exists.

# SVG handling implementation plan

**Goal:** Give this project a stated icon contract, a skill that enforces it on any supplied SVG,
and a loader that matches it.

**Architecture:** A pure `normalise(svg, { name }) → { svg, findings }` string transform with no
imports, so it runs in Node and in the browser and tests in the existing web-test-runner harness. A
thin `prep.js` shim is the only file that touches `node:fs`. Mechanical rewrites happen inside
`normalise`; judgement calls come back as findings and a human resolves them. `scripts/utils/
icons.js` becomes `svg.js`, exposing a reusable `getSvg` that `loadIcons` loops over.

**Tech Stack:** Buildless ESM, no bundler. web-test-runner in real Chrome, chai from
`@esm-bundle/chai`. Node 22 for the shim. No new dependencies of any kind.

## Global Constraints

- **No new dependencies**, not even devDependencies. `normalise.js` imports nothing at all.
- **Baseline Newly available** is the browser floor. No polyfills, no `@supports` fallbacks.
- **Buildless** — every line in `scripts/`, `styles/` and `blocks/` ships to the browser as-is.
  Keep it terse; editorial comments are shipped bytes.
- **Commit subjects are plain imperative sentences.** No `feat:`/`fix:` prefixes.
- **`npm run lint` and `npm test` must both pass before every commit.**
- **`no-continue` is an error** in `@adobe/eslint-config-helix`, and this codebase uses `continue`
  nowhere. Filter the loop (`for (const t of tokens.filter(…))`) or use an if/else chain.
- **Task 10 is atomic.** The loader and the six icon files land in one commit — see the spec's
  "The fork migration". No commit may leave `main` with blank icons.

## File structure

| File | Responsibility |
|---|---|
| `.agents/skills/svg-prep/normalise.js` | Pure transform. Tokenise → rewrite → serialise, plus findings. No imports. |
| `.agents/skills/svg-prep/prep.js` | CLI. Walks paths, reads, calls `normalise`, writes in place, prints the report, sets the exit code. Only file using `node:fs`. |
| `.agents/skills/svg-prep/SKILL.md` | When to invoke, how to work the findings, the report format. |
| `test/skills/svg-prep.test.js` | Tests `normalise` and its exported internals in real Chrome. |
| `scripts/utils/svg.js` | Renamed from `icons.js`. Exports `getSvg` and default `loadIcons`. |
| `scripts/ak.js:239` | One dynamic import path. |
| `styles/styles.css` | The global `.icon` rule. |
| `img/icons/*.svg` | Six files re-run through the skill. |
| `README.md`, `docs/adr/0004-*.md`, `docs/adr/README.md`, `docs/specs/003-svg-handling/spec.md` | Documentation and the extracted decision. |

### The `normalise` contract, fixed here so every task agrees

```js
/**
 * @param {string} svg  raw file contents
 * @param {{ name: string, flatten?: boolean, keep?: string, palette?: boolean }} opts
 *        name    filename stem, e.g. 'globe' — used for the kebab-case check
 *        flatten convert paint even when the file has more than one colour
 *        keep    a paint value to leave untouched while flattening, e.g. '#fff'
 *        palette do every structural rewrite but leave paint exactly as authored
 * @returns {{ svg: string, findings: Finding[] }}
 *
 * Finding: { level: 'error' | 'warn' | 'info', code: string, message: string }
 */
```

`level: 'error'` means the file is **not** written and the run exits non-zero. Codes used across
the tasks, and nowhere else:

| Code | Level | Meaning |
|---|---|---|
| `no-viewbox` | error | No `viewBox` and no `width`/`height` to synthesise one from |
| `multi-colour` | error | More than one distinct paint value, and neither `--flatten` nor `--palette`. Downgrades to `warn` under `--palette`, because a hex palette cannot follow the colour scheme |
| `raster-image` | error | An `<image>` element — not a vector icon |
| `live-text` | warn | `<text>` or `<tspan>` — outline it at the source |
| `gradient-paint` | warn | `url(#…)` paint that cannot become `currentColor` |
| `foreign-object` | warn | `<foreignObject>` stripped |
| `clip-mask-filter` | warn | `<mask>`, `<clipPath>` or `filter` survived |
| `viewbox-shape` | warn | viewBox non-square or non-zero origin |
| `viewbox-grid` | info | viewBox is not `0 0 24 24` |
| `filename` | warn | Filename stem is not kebab-case |

## Tooling notes

Two pieces of wiring the plan assumed and Task 1 proved, both worth knowing before reaching for a
workaround:

- **web-test-runner serves a dot-directory.** `test/skills/svg-prep.test.js` imports
  `../../.agents/skills/svg-prep/normalise.js` directly. No symlink, and `normalise.js` did not
  have to leave the skill directory to be testable.
- **`eslint .` reaches it too**, under flat config — the dot prefix is not an implicit ignore. What
  was missing was Node globals for `prep.js`, added as a `files: ['.agents/skills/**/*.js']` block
  in `eslint.config.js`.

A single test file runs with `npx wtr "./test/skills/svg-prep.test.js" --node-resolve --port=2000`.

## The eleven tasks

Each task followed the same loop: write the failing test, watch it fail, implement, run the test,
lint, commit.

| # | Task | Outcome |
|---|---|---|
| 1 | Tokeniser and serialiser | `parse` / `serialise` over a flat token list. Also proved the two wiring assumptions above. |
| 2 | The root element contract | `decorateRoot`: `id="icon"`, `xmlns`, `viewBox` synthesised from `width`/`height`. |
| 3 | Resolve Illustrator class styles | `resolveClasses` lifts `<defs><style>` declarations onto the elements, then drops both. A surviving-`<defs>` regression test followed. |
| 4 | Paint conversion and colour findings | Kept in full below. |
| 5 | Stripping | `<script>`, editor metadata, `on*`, cruft attributes and unreferenced descendant ids. |
| 6 | The remaining findings | `inspect` and `inspectViewBox`: raster, live text, clip/mask/filter, viewBox shape and grid, filename. |
| 7 | The `prep.js` shim | The CLI, in place rewriting, the report and the exit code. |
| 8 | `SKILL.md` | Corrected twice on review: the whole-run reach of `--palette`, and an inaccurate `--keep` caution. |
| 9 | The global `.icon` rule | `1em` square on the placeholder span, so the box is reserved before the icon lands. |
| 10 | The atomic swap | `icons.js` → `svg.js`, the fixed `#icon` fragment, and all six files re-normalised together. `helix-color.svg` took `--palette`; `more.svg`'s duplicate path was deleted by hand. |
| 11 | The documentation and the decision | ADR 0004, the README icon section, the spec closed and this plan reduced. |

## Task 4, in full

The task with a real decision in it, and the fullest example of the loop. Reproduced as written,
unticked checkboxes and all — including the "Before you start" note, which is itself a patch over a
sequencing error the plan shipped with. See the section after it.

---

### Task 4: Paint conversion and colour findings

**Files:**
- Modify: `.agents/skills/svg-prep/normalise.js`
- Modify: `test/skills/svg-prep.test.js`

**Interfaces:**
- Consumes: token list post-`resolveClasses`.
- Produces: findings `multi-colour` and `gradient-paint`.

**Before you start.** Task 3's test *"moves class declarations onto the elements and drops the
style block"* currently asserts `fill="#ed2c85"` — paint conversion did not exist when it was
written, so it asserts what the code produced at that point. This task changes that value: a
single-colour file converts without `--flatten`. Update the assertion to
`<path d="M0,0Z" fill="currentColor"/>` and drop the now-pointless `flatten: true` from that
test's options. Expect it to fail before you touch it; that failure is the signal your pass is
wired in.

- [ ] **Step 1: Write the failing test**

```js
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
```

- [ ] **Step 2: Run and confirm failure.**

- [ ] **Step 3: Implement**

```js
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
  if (palette) return;
  for (const token of tokens.filter((t) => t.type === 'open')) {
    for (const prop of PAINT) {
      const value = token.attrs.get(prop);
      const convertible = value && !KEYWORD.has(value) && !value.startsWith('url(')
        && !(keep && value.toLowerCase() === keep.toLowerCase());
      if (convertible) token.attrs.set(prop, 'currentColor');
    }
  }
}
```

Call it after `resolveClasses`. When `findings` gains an `error`, `normalise` returns the original
string — extend the existing early return rather than adding a second one.

- [ ] **Step 4: Run and confirm pass** — 19 passing.

- [ ] **Step 5: Commit**

```bash
git add .agents/skills/svg-prep/normalise.js test/skills/svg-prep.test.js
git commit -m "Convert icon paint to currentColor and refuse multi-colour files"
```

---

## Where the plan was wrong

This plan specified its implementation as literal code, on the theory that a task an implementer can
paste is a task that cannot be misread. What that actually bought was five defects with the
authority of source, none of them caught by the person who wrote them. Three were found in review
before any of it ran; two were found by implementers, and the worst of those only after the task had
passed review.

1. **It used `continue` throughout.** `no-continue` is an error under
   `@adobe/eslint-config-helix`, and the keyword appears nowhere in this codebase — so five separate
   tasks shipped code that could not survive the lint step every one of them ended with. Task 1 hit
   it, rewrote `serialise` as an if/else chain, and the rest of the plan was brought into line.

2. **It asserted `fill="currentColor"` in Task 3**, one task before paint conversion existed. The
   test could not pass against the implementation the same brief specified, which leaves an
   implementer with a failing test and no way to tell a plan error from their own. Fixed by asserting
   what Task 3's own pass produces and moving the flip into Task 4 — where it survives above as the
   "Before you start" note.

3. **The `-color` branch it described could not work.** Keeping a palette left the file
   multi-colour, `normalise` refuses to write a multi-colour file, and a refused file gets none of
   the structural rewrites either — so a colour variant would have kept its hex *and* never gained
   `id="icon"`. That is precisely the blank icon this whole body of work exists to fix, reached by
   following the plan exactly. The `--palette` flag was added during plan review to close it.

4. **`resolveClasses` dropped `<defs>` wholesale.** Gradients are a warning rather than a refusal,
   so a file can legitimately reach serialisation with gradient definitions inside `<defs>` — and
   this would have deleted them, leaving paint pointing at nothing. Also caught in review; the
   shipped pass drops only a `<defs>` left empty by the `<style>` removal, with a test holding it
   there.

5. **The `getSvg` it pointed at omitted `xmlns`.** `parseFromString(str, 'image/svg+xml')` is
   strict XML: without a namespace declaration the root is a generic `Element` that serialises as
   `<svg>` and never paints. Every icon on the site was invisible, and the entire 73-test suite was
   green, because nothing had ever asserted on the element `getSvg` returns — only on the markup,
   which is identical either way. Found by rendering one icon in a browser, after Task 10 had
   already passed review. Fixed by declaring the namespace, and by adding `test/scripts/svg.test.js`:
   assertions on
   `namespaceURI`, constructor and real `getBBox` geometry, each confirmed to fail for an
   unresolvable fragment and a missing file rather than pass vacuously.

Two things generalise from that list.

**Writing a plan as literal code makes the intermediate states wrong even when the final state is
right.** Defects 2 and 3 are both of this kind: the destination was correct and the path there was
not, because a plan built as a sequence of complete code blocks has to be correct at every step, and
nothing checks the steps. Prose describing the intent of a task cannot fail lint or contradict the
task before it. Code can, silently, and it arrives looking reviewed.

**A specification is not evidence that the thing works.** Defect 5 passed spec review, plan review,
task review and a full green suite, and the feature was completely broken the entire time. The tests
that existed asserted on what the code was asked to produce — the same abstraction the bug lived in —
so they could only ever confirm it agreed with itself. What caught it was looking at an icon.
