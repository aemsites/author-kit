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

## Parallelise with purpose

Awaited and unawaited async are both deliberate here. The pattern is consistent once you see it:

- The LCP image and the first section's blocks **race** — same paint, so concurrency costs nothing
  and finishing sooner helps.
- Blocks within a section run **concurrently** — all of them are needed for that section to render.
- Sections are **awaited one at a time** — section 3's blocks racing section 0's would saturate
  bandwidth and delay LCP for content nobody can see yet.

The unit is **everything needed for the next visible milestone**. Parallelise inside it, await at
its edge. See [ADR 0002](../../../docs/adr/0002-serialise-sections-parallelise-within-them.md) for
why the section loop is serial and what breaks if someone "optimises" it.

Three separate questions get confused here. Ask them one at a time.

**Does the next statement need this?** Await only when what follows reads the result — DOM it
queries, state it branches on. `await Promise.all(linkBlocks)` earns its await because the div-block
phase must see fragment content already in place. `import('./postlcp.js')` is not awaited because
nothing after it depends on the header existing. An `await` on a result nothing consumes is pure
latency.

**Do these belong in the same batch?** Group by milestone, not by convenience. Work feeding one
paint goes in one `Promise.all`. Work feeding a paint the user cannot see yet belongs after the
boundary, not in the batch.

**Is this needed now at all?** If not, it belongs in `lazy.js` or `postlcp.js`. Most additions
justified as "prefetch for speed" fail this one.

### Kick off now, consume later

Between "await it now" and "defer it entirely" sits the option that is usually right for slow data:
start the request early, hand the **promise** forward, and await it where the result is used.

```js
const data = fetch(url).then((r) => r.json());   // started, not awaited
// … later, where it is actually needed
render(await data);
```

Awaiting at the start blocks a phase for data nobody needs yet. Starting at the end creates a
waterfall. Handing the promise forward removes both and costs nothing.

This only works where the promise can reach its consumer, and where whatever you key off actually
exists at that point. A selector for markup another block builds during its own `init()` matches
nothing when `decorateArea` runs, so the prefetch never fires and the complexity is paid for
nothing. Check the node is there before relying on it.

### Reviewing it

Flag: an `await` whose result nothing reads; sequential `await`s over independent work; a
`Promise.all` mixing this-paint work with later-paint work; a fetch awaited in a phase that runs
before its consumer.

## Load what this request uses

Deferring is not the same as not loading. `lazy.js` runs after paint and *still* gates author
tooling behind `ENV !== 'prod'` — a visitor should never download the sidekick.

**If a module is not needed by every request, guard it and import it dynamically.**

| Where | Guard |
|---|---|
| `loadIcons` | `if (!icons.length) return;` before the import |
| `lazy.js` | `ENV !== 'prod'` for scheduler and sidekick |
| `LOG` → `error.js` | imported only when something throws |
| `loadExperience` | skips the CSS request for names in `components` |

The subtle failure is an **unguarded dynamic import** — `import()` inside a function that always
runs is a static import with extra steps: the request moved later but never went away. The test is
whether a condition stands in front of it.

Flag: a new static import of something conditional; a dynamic import with no guard; a guard placed
after the import rather than before.

## The core rule

**A diff touching `scripts/ak.js` should be assumed wrong until it argues otherwise.** `ak.js` is
the shared engine every fork inherits; see "What you own" in `AGENTS.md`.

`scripts.js` is more permissive, but only for **data and non-blocking, network-free logic**.
Building up a synthetic block for `loadArea` to hydrate later is fine — it is synchronous DOM work,
and the loader takes it from there. A new static import or an awaited JSON fetch is not: both put a
request ahead of the first section.

Legitimate: a new `hostnames` entry, a `linkBlocks` pattern, a `components` opt-out, a new locale,
an autoblock that builds markup for `loadArea` to pick up.

Not legitimate: anything awaiting the network, a new static import, or work that could equally
happen in `lazy.js`.

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

**Imports.** With no bundler every static import is its own request, and everything reachable from
`scripts.js` is fetched before first paint.

```bash
git diff <base>..HEAD -- '*.js' | grep -E '^\+import .* from'
```

Judge each hit against "Load what this request uses" above.

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
