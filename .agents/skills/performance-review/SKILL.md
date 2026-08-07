---
name: performance-review
description: Use when reviewing a diff in this repo for performance impact — before opening a PR, when asked to check performance, or when a change touches scripts.js, head.html, styles.css, images, fonts, or adds a dependency. Analyses the change; does not measure.
---

# Performance review

This project is buildless and every line ships. Performance regressions here are not slow
functions — they are bytes and requests added to the critical path before first paint. This skill
reads a diff for those. It does not run Lighthouse: lab numbers against a proxied dev server are
noisy, and every check below is decidable from the source.

Report findings; do not fix them unless asked.

## 1. The critical path

`head.html` loads `/styles/styles.css` and `/scripts/scripts.js`. Everything **statically
reachable** from `scripts.js` is fetched before first paint, and with no bundler each import is its
own request.

Walk the static import graph from `scripts/scripts.js` and compare it to the graph before the
change:

```bash
git diff <base>..HEAD -- '*.js' | grep -E '^\+import .* from'
```

Any new `import` statement in a file already on that graph is a finding. Dynamic `import()` is not
— it is the intended escape hatch, used by `lazy.js`, `icons.js`, and `error.js`.

State the finding as the added request, not as a style note: *"`scripts.js` now statically imports
`utils/foo.js`, adding a blocking request before first paint. Load it with dynamic `import()` from
`lazy.js` unless it is needed for LCP."*

## 2. Blocking resources in `head.html`

Any added `<link rel="stylesheet">`, `<script>` without `type="module"`, or synchronous third-party
tag is render-blocking. Flag additions and ask what forces them into `head` rather than `lazy.js`.

## 3. Images

Check every added or modified `<picture>`, `<img>`, and background image for:

- **Missing `width`/`height`** — causes layout shift. The single most common CLS cause here.
- **`loading="eager"` below the fold**, or `loading="lazy"` on the LCP image. `decorateArea` in
  `scripts.js` deliberately eager-loads the first image; a second eager image competes with it.
- **`fetchpriority`** set on more than one element — priority given to everything is priority given
  to nothing.
- **Format** — is a large PNG doing a job a `.webp` would do smaller?

## 4. Fonts

New `@font-face` blocks need `font-display: swap` and a `unicode-range`, matching the existing
declarations in `styles/styles.css`. A webfont without both blocks text rendering.

## 5. Dependencies

Any addition to `package.json` `dependencies` is a finding — this project ships no runtime
dependencies, and `deps/` is vendored deliberately. `devDependencies` are fine; confirm the
addition cannot reach shipped code.

## 6. Payload

For changed CSS and JS, report the byte delta:

```bash
git diff --stat <base>..HEAD -- '*.css' '*.js'
```

Growth is not itself a defect. Growth in a file on the critical path, or growth that is mostly
comments and defensive scaffolding, is — this project treats those as shipped bytes.

## Reporting

Order findings by cost: added critical-path requests first, then layout shift, then payload. For
each, give the file and line, what it costs, and the specific alternative. A finding without an
alternative is an observation.

If the diff touches none of the above, say so plainly in one line. Most diffs will.
