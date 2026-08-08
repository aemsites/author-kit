# 0000. Own the page lifecycle instead of shipping a toolbox

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

Improvements to load ordering reach every site instead of being reimplemented, correctly or
otherwise, in each `scripts.js`. That is the whole return, and it is why `ak.js` carries an ownership
rule (see "What you own" in `AGENTS.md`) that no boilerplate file needs.

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
- **No `buildBlock` primitive.** Auto-blocking is link-pattern-driven, so synthesising a block from
  page metadata rather than a link needs building.
- **No CSP or Trusted Types.** The boilerplate ships both. This is a gap, not a decision.
- **Ecosystem gravity.** The boilerplate is what documentation, tutorials, and new hires assume.
  Divergence has a real onboarding cost, which `AGENTS.md` and these records exist to offset.

The reversal this record guards against is the conclusion that Author Kit should be "just a
boilerplate fork" — adopting the library shape to reduce divergence. Doing so would return the
pipeline to every project, and with it the class of mistakes that motivated this in the first place.
