# 0000. Own the page lifecycle instead of shipping a toolbox

Date: 2026-08-07
Status: accepted

## Context

Adobe ships [aem-boilerplate](https://github.com/adobe/aem-boilerplate) as the reference
implementation for Edge Delivery. Author Kit targets the same platform and covers the same ground,
so its existence needs an answer.

The two are built on opposite premises about who owns the page lifecycle.

**In the boilerplate, `aem.js` is a library.** It exports 22 functions and drives nothing. The
pipeline lives in each project's `scripts.js`, which defines `loadEager`, `loadLazy` and
`loadDelayed`, composes them into `loadPage`, and calls it — roughly 217 lines, most of it pipeline.
Every project owns a copy.

That is a reasonable design for a reference implementation. Its job is to be minimal and
unopinionated, because it is the floor shipped to everyone; a reference that parallelised block
loading and shipped an i18n system would be deciding on behalf of people who never asked.

But a pipeline copied into a thousand repositories has a failure mode, and it showed up in practice:
projects reproduced the same mistakes, and fixing one fixed nothing else. Three of those mistakes
are visible in the reference pipeline itself:

- `loadSection` awaits blocks one at a time, carrying an `eslint-disable-next-line no-await-in-loop`
  above the loop. The pattern was flagged by tooling, suppressed, and then copied everywhere.
- `loadEager` blocks the entire pipeline on the LCP image's `load` event. `fetchPriority: high`
  gives the same priority guarantee without the stall.
- `decorateIcons(main)` walks every icon on the page before the first section renders — work
  proportional to total page length, paid before first paint.

None of these is hard to fix in isolation. All of them are impossible to fix centrally when the
pipeline is project-owned.

## Decision

Author Kit owns the page lifecycle. `scripts/ak.js` holds `loadArea`; a project's `scripts.js` is
configuration — `hostnames`, `locales`, `linkBlocks`, `components` — plus one call.

The engine therefore guarantees, rather than merely enabling:

- **Blocks within a section load concurrently; sections are awaited in order.** See
  [0002](0002-serialise-sections-parallelise-within-them.md).
- **Icons load per section**, not per page, and are emitted as inline `<svg><use>` rather than
  `<img>`, so they inherit `currentColor` and follow the active colour scheme. An
  `<img>`-referenced SVG is a separate document that CSS cannot reach into.
- **Sections are hidden by the stylesheet in `head`**, not by JavaScript, and revealed only once
  their blocks and block CSS have resolved. The boilerplate applies `display: none` from
  `decorateSections`, leaving a window before JS runs in which raw authored markup paints.
- **Localisation is engine-level** — locale prefixes, link localisation, `#_dnt`. The boilerplate
  hardcodes `document.documentElement.lang = 'en'`.
- **Auto-blocking is declarative.** `linkBlocks: [{ fragment: '/fragments/' }]` replaces the
  hand-written `buildAutoBlocks` that each project otherwise maintains.

One hook stays project-owned: **`decorateArea`**. It exists because some decisions the engine cannot
make — if a hero's first image is a low-contrast gradient and the second is the real LCP candidate,
only the project knows. A single well-placed hook is a smaller surface to get wrong than an entire
`loadEager`.

## Consequences

Load-ordering improvements get made once, in one place, instead of being reimplemented — correctly
or otherwise — in every project's `scripts.js`. That is the whole return.

Distribution is what keeps that affordable. Author Kit is a template, not a dependency: a project
generated today holds its own copy of `ak.js`, and nothing pulls it forward. The engine can change,
or be trimmed, without reaching back into shipped sites — which is what allowed the legacy
section-metadata shim to be deleted once Edge Delivery began flattening metadata server-side, while
projects built against the older rendering carried on untouched. The costs below are paid once, at
generation, not continuously.

The same property cuts the other way: a fix does not arrive at a site that has not adopted it.
Propagation is opt-in.

Both projects protect their engine file — Adobe's guidance is that `aem.js` is the core library of
Edge Delivery and must never be modified, and "What you own" in `AGENTS.md` says the same of
`ak.js`. The difference is what the boundary encloses. Protecting a library of helpers still leaves
the pipeline in project-owned `scripts.js`, free to diverge; protecting `ak.js` protects the
pipeline itself. The rule is the same, drawn around different things.

The lifecycle is also legible: one function, read top to bottom, is the entire load. Tracing the
boilerplate's requires holding two files and eight function names.

The costs are real:

- **You must accept `loadArea`.** A project that outgrows it has a harder conversation than a
  boilerplate project, which can simply rewrite its own pipeline.
- **`ak.js` is a bigger commitment than a library of helpers**, and forking it is worse than forking
  a toolbox.
- **Author Kit fails closed.** Sections are hidden by CSS, so if JavaScript never runs the page
  renders nothing, where the boilerplate would show unstyled markup. A deliberate trade for a
  platform where JS is assumed.
- **Ecosystem gravity.** The boilerplate is what documentation, tutorials, and new hires assume.
  Divergence has a real onboarding cost, which `AGENTS.md` and these records exist to offset.

## The reversals this guards against

**"Author Kit should just be a boilerplate fork."** Adopting the library shape to reduce divergence
would return the pipeline to every project, and with it the reason this exists.

**"You could have done all of this inside a boilerplate project."** True, and worth stating
precisely, because it is the strongest objection. Nothing in `aem.js` forces a project through
`loadSection` or `decorateIcons` — a project can decline to call them and write its own. About 205
lines of the library are commodity utilities worth keeping: `loadCSS`, `getMetadata`,
`createOptimizedPicture`, `loadBlock`. The other ~270 are the pipeline and its decorators, and
reaching parity means replacing them.

So the objection resolves to: yes, at the cost of ~270 lines of engine work that lives in a
project-owned file, diverges from every other project, and reaches none of them. That is the least
defensible of the three positions — full responsibility for an architecture, pinned to utilities you
are told not to modify, and nothing to carry forward.

None of which claims this engine is correct. The claim is about where decisions live. Made once, in
one place, they can be read, argued with, and fixed, and the fix reaches the next project. Made
privately in each `scripts.js`, the same decision is made a thousand times over, and nothing
aggregates — no one is in a position to notice the pattern, let alone repair it.
