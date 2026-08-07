---
name: performance-review
description: Review a diff for performance cost and lifecycle fragility — before opening a PR, when a change touches scripts.js, ak.js, head.html, images, fonts or dependencies, or when a block wants to hook into core page load for "speed". Analyses the change against the load lifecycle; does not measure.
---

# Performance review

This project is buildless and every line ships. Regressions here are not slow functions — they are
bytes and requests added before first paint, and work hoisted ahead of the lifecycle stage that
should own it.

This skill analyses; it does not measure. Lighthouse against a proxied dev server produces numbers
that are not the published numbers, and every check below is decidable from source.

Report findings. Do not fix them unless asked.

## The lifecycle — what already happens, in order

| # | Where | What runs | Network |
|---|---|---|---|
| 1 | `scripts.js` top level | `setConfig`, then top-level `await loadPage()` | no |
| 2 | `loadArea` → `decorateSession` / `decorateDoc` (document only) | header mode, `template` metadata, stored colour scheme, hash → `localStorage` | no |
| 3 | `decoratePictures` | adds the 3000px source to `picture:has([loading])` | no |
| 4 | `config.decorateArea` hook | project-specific; today eager-loads the first image | no |
| 5 | `decorateSections` | `.section` wrapping, child regrouping, `decorateLinks` | no |
| 6 | section loop, per section | `loadIcons`, then link blocks, then div blocks, then `section-metadata` | **yes** — dynamic import per block, parallel within a phase, sections awaited in order |
| 7 | after section 0 | `postlcp.js` (loads the header block), `deps/rum.js` | deferred |
| 8 | after all sections | `lazy.js` → lazyhash, favicon, footer, author tools in non-prod | deferred, post-paint |

Steps 1–5 are synchronous and block the first section. Anything added there delays every paint on
every page.

## The core rule

**A diff touching `scripts/ak.js` should be assumed wrong until it argues otherwise.** `ak.js` is
the shared engine every fork inherits; see "What you own" in `AGENTS.md`.

`scripts.js` is more permissive but only for **data, not logic**. Legitimate: a new `hostnames`
entry, a new `linkBlocks` pattern, a `components` opt-out, a new locale. Not legitimate: new
conditional branching, or anything naming a specific block.

## The leak check

Generic loader code must not know about specific blocks. Flag any `querySelector` for a named
block's class, or a dynamic `import()` by block name, appearing in `scripts.js`, `ak.js`, or
`decorateArea`.

Two reasons beyond tidiness. First, the timing is usually wrong — blocks created by *other* blocks
during `init()` do not exist yet when `decorateArea` runs, so the selector silently matches nothing
on every real page and the "optimisation" never fires. Second, it is nearly always solving the
wrong layer: reserved CSS space costs nothing and cannot race.

The fix is the same every time: let the block do it in its own `init()`.

## The ruthless test

For anything added to steps 1–5, ask in order:

1. **CLS** — does removing this cause layout shift that reserved CSS space cannot fix?
2. **LCP** — does removing this measurably delay paint of the actual LCP element?
3. **Generic?** — does it work regardless of which blocks are on the page?
4. **Could it live in the block?** — could the same work happen in that block's `init()`?
5. **Wrong shelf?** — would `lazy.js` or `postlcp.js` produce an identical visible result?
6. **Measured or imagined?** — is this fixing a profiled waterfall or a theorised one?

**If 1 and 2 are both "no", it does not belong ahead of the section loop.** Question 6 carries the
most weight: speculative optimisation is the common case, and this project treats unmeasured
defensive work as shipped bytes.

## What already runs for free — do not re-solve it

- **Per-block lazy JS and CSS.** `loadBlock` dynamic-imports every block's code and stylesheet
  already, unless the name is in `components`.
- **Section-ordered rendering.** The loop awaits section *N* before starting *N+1*, so above-the-fold
  work finishes first by construction.
- **Inside-out hydration.** Link blocks resolve before div blocks, so a fragment's content is in
  place before outer blocks decorate.
- **Eager LCP image.** `decorateArea` already strips `loading` and sets `fetchPriority: high` on
  the first image.
- **Deferred non-critical work.** `lazy.js` exists for exactly this. New "not needed for paint" work
  belongs there, not in `loadPage`.

## Mechanical checks

**Critical-path imports.** Everything statically reachable from `scripts.js` is fetched before first
paint, and with no bundler each import is its own request.

```bash
git diff <base>..HEAD -- '*.js' | grep -E '^\+import .* from'
```

A new static `import` in a file already on that graph is a finding. Dynamic `import()` is the
intended escape hatch — `lazy.js`, `icons.js` and `error.js` all use it.

**Blocking resources.** Any `<link rel="stylesheet">`, non-module `<script>`, or synchronous
third-party tag added to `head.html`.

**Images.** Missing `width`/`height` (the most common CLS cause here); `loading="eager"` below the
fold or `loading="lazy"` on the LCP image; `fetchpriority` on more than one element; a large PNG
doing a job a `.webp` would do smaller.

**Fonts.** New `@font-face` needs `font-display: swap` and a `unicode-range`, matching
`styles/styles.css`. Without both, text rendering blocks.

**Dependencies.** Any addition to `dependencies` is a finding — this project ships none, and `deps/`
is vendored deliberately. `devDependencies` are fine if they cannot reach shipped code.

**Payload.** `git diff --stat <base>..HEAD -- '*.css' '*.js'`. Growth is not itself a defect; growth
on the critical path, or growth that is mostly comments and defensive scaffolding, is.

## Reporting

Order by cost: lifecycle violations and added critical-path requests first, then layout shift, then
payload. For each, give file and line, what it costs, and the specific alternative — usually a
lifecycle stage to move to, or a CSS property that removes the need for JS timing.

A finding without an alternative is an observation. Say so, or leave it out.

If the diff touches none of this, say so in one line. Most diffs will.
