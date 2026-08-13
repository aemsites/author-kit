# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

## What this is

Author Kit is a template repo for AEM Edge Delivery / DA-authored sites. Content is authored in
da.live; this repo is the code half. `README.md` lists the authoring features and design tokens —
read it for the content-side vocabulary.

When something here looks arbitrary, check `docs/adr/` before changing it — that is where decisions
the code cannot explain are recorded, and `docs/adr/README.md` says when a new one is warranted.
Designs for larger bodies of work live in `docs/specs/NNN-topic/`.

## What you own

Everything except `scripts/ak.js`. It's the shared engine — nearly 400 lines that every fork
inherits — so changes belong upstream, in a GitHub issue with your use case, not in your project.
Prefer solving it in a file that's yours: getting a change into `lazy.js` (~25 lines) is a far
smaller ask than one into `ak.js`. Project configuration goes in `scripts/scripts.js`, which is the
seam for exactly this.

That rule is for projects built from this template. In this repo you are the maintainer — `ak.js`
is fair game, but every change ships to every downstream fork, so weigh the blast radius rather
than the permission.

## Buildless — every line ships

There is no bundler or transpiler. Files are served to the browser exactly as they are on disk
(`head.html` loads `/styles/styles.css` and `/scripts/scripts.js` as native ESM). Consequences:

- Editorial comments, dead code, and defensive scaffolding are shipped bytes. Keep code terse.
- Browser support is live at HEAD too. **Baseline Newly available** is the bar: a feature qualifies
  once it ships in the current stable release of every core browser, mobile Safari and Firefox for
  Android included. No polyfills, no `@supports` fallbacks, no build-time transforms.
- `deps/` holds vendored third-party code (lit, rum) and is eslint-ignored. `npm run build:lit` is
  the one build step, and only for that dependency.
- Every static import is its own blocking request before first paint, so anything statically
  reachable from `scripts.js` sits on the LCP critical path. Keep that set minimal and reach for
  dynamic `import()` instead, the way `lazy.js`, `svg.js`, and `error.js` are pulled in.

## What counts as a bug

The happy path, and real bugs within reason. A defect is something a user or a normal authoring
choice actually hits. A brand link authored without a styled second part is a bug. Calling a
decorator twice on the same element, or removing a block from the DOM mid-interaction, is not —
that is asking whether the chainsaw can cut your arm off.

This governs review as much as code. Defensive scaffolding against perverse input is shipped bytes,
and a long list of theoretical edge cases costs more attention than it returns. Things worth doing
later go in GitHub issues, not in guards, comments, or docs.

## Local development

`aem up` (needs `@adobe/aem-cli` installed globally) serves this repo's code but proxies **content**
from the published origin, which it derives from the git remote — there is no `fstab.yaml`. For this
repo that is `https://main--author-kit--aemsites.aem.page`. A local page is your working tree plus
live content: blocks and fragments come from the origin, and nothing renders without it.

Tests run in real Chrome via **web-test-runner** — not jsdom. Do not reach for Jest or Vitest. DOM
APIs and computed styles both work against a real layout, and `@web/test-runner-commands` provides
`setViewport` for exercising media queries.

## Load pipeline

`scripts/scripts.js` is the per-project config layer and the only file most forks edit: it declares
`hostnames`, `locales`, `linkBlocks`, `components`, and `decorateArea`, calls `setConfig`, then
`loadArea()`. `scripts/ak.js` is the engine behind it — see "What you own" before changing it.

`loadArea({ area })` runs over the document or over a detached fragment:

1. `decorateDoc` (document only) — header, `template` metadata, stored color scheme.
2. `decorateSections` — each `main > div` becomes `.section`. **Children are then regrouped**: runs
   of `div` children are wrapped in `.block-content`, runs of everything else in `.default-content`.
   Block CSS almost always has to account for these wrappers.
3. `decorateLinks` — see below.
4. Per section, two concurrent phases — link blocks, then div blocks — followed by
   `section-metadata` if the section carries any metadata. Fragments resolve first, so outer blocks
   see final content and never have to care whether a fragment landed: decoration effectively runs
   inside out. Within a phase blocks race, so two blocks that depend on each other must handle
   arriving in either order. Sections hydrate in document order, so above-the-fold work finishes
   first.
5. After the first section: `postlcp.js` (loads the header block) and rum. At the end, `lazy.js`
   (favicon, footer, and author-only tools).

## Block contract

A block is `blocks/<name>/<name>.js` default-exporting `init(el)`, plus `<name>.css` which
`loadExperience` loads automatically. Listing a name in `components` (scripts.js) opts out of that
automatic CSS — for blocks that manage their own styles.

**Auto blocks** are links, not divs. `linkBlocks: [{ fragment: '/fragments/' }]` means any anchor
whose href contains `/fragments/` gets `class="fragment auto-block"` and is loaded as a block with
the anchor itself passed as `el`. The block is responsible for replacing that anchor.

## Content conventions encoded in code

These are authoring contracts — changing them breaks live content, and they are not discoverable
from any one file:

- **Buttons** come from markdown emphasis around a link (`decorateButton` in `ak.js`): italic →
  secondary, bold → primary, bold+italic → accent, strikethrough → negative, underline → outline.
- **Hash flags** are stripped from hrefs and turned into behavior: `#_blank`, `#_dnt` (do not
  translate/localize), `#_dnb` (do not auto-block).
- **Relative links are auto-localized** to the current locale prefix unless marked `#_dnt`.
- **Metadata switches**: `header` / `footer` set to `off` remove the landmark, or to a path to load
  a different fragment; `template` loads `templates/<name>/<name>.css`.
- **Widget links** like `/tools/widgets/toggle` resolve to nothing on the server — the header block
  matches them by href and replaces them with real controls.

## Gotchas

- **Logging**: `config.log(ex, el)` — the exception (or a message) comes first, an optional element
  second. Passing an element renders a `.has-error` box around it in non-prod only.
- **Environment** (`scripts/utils/env.js`) is inferred from the hostname: `--` → stage, `local` →
  dev, otherwise prod. Author-facing tooling (`tools/`) only loads outside prod.
- **Tests that call `loadArea` or `decorateLink` must `setConfig` first** with at least `hostnames`
  and `linkBlocks`; otherwise link decoration throws into the catch and the failure is easy to
  misread as a product bug.

## When this file does not have the answer

Edge Delivery platform behaviour that is not specific to this repo lives at
[aem.live](https://www.aem.live/docs/), with agent-oriented guidance at
[aem.live/developer/ai-coding-agents](https://www.aem.live/developer/ai-coding-agents). Prefer those
over inferring platform semantics from this codebase — much of what looks like project convention
here is actually Edge Delivery convention.
