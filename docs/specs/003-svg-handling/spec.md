# SVG handling

Date: 2026-08-12
Status: implemented

## Problem

Nobody designed the icon system. It accumulated, and what accumulated is wrong in ways that are
invisible until you look at the files:

| Defect | Where |
|---|---|
| `id="Layer_1"` straight from Illustrator, so `#helix-color` resolves to nothing and **the icon renders blank** | `img/icons/helix-color.svg` |
| Two hardcoded pinks in an Illustrator `<style>` block, so the icon ignores the colour scheme | same file |
| The same `M128,148…` path shipped twice — nine dots authored, ten paths served | `img/icons/more.svg` |
| The `<use>` fragment is the filename, so a rename silently blanks the icon | `scripts/utils/icons.js:9` |
| No global `.icon` rule anywhere in `styles/`, so every icon outside the header is unsized and its space unreserved | `styles/styles.css` |
| No `aria-hidden`, so exposure to assistive technology is whatever each browser defaults to | `scripts/utils/icons.js:8` |
| Four-space wrapped attributes in three files, two-space in another, XML prolog inline in some and on its own line in others | across `img/icons/` |
| The whole contract is written down nowhere — `README.md` mentions icons only under favicons | `README.md` |

Two of those are live bugs. The rest is drift, and drift is the real problem: there is no statement
of what an icon in this project is, so every new one is normalised by hand, differently, and only
the parts someone happened to remember.

That matters more here than in a normal repo. Icons arrive from designers as editor exports, and
this is a template, so whatever shape we leave behind is the shape every fork inherits.

## Constraints

1. **The icon set is unknown at build time.** Authors write `:name:` in a document. Nothing can
   enumerate the icons a page uses before the page exists, which rules out any build-time sprite.
2. **Everything in the tree ships to every fork.** The transform is tooling rather than shipped
   bytes, but a generated project gets a snapshot of this directory, so the tooling is inherited
   too and has to be worth inheriting.
3. **No new dependencies.** `package.json` carries none that reach shipped code and this should not
   be the change that adds one, not even a devDependency.
4. **Baseline Newly available**, per [ADR 0003](../../adr/0003-target-baseline-newly-available.md).
5. **The `<use>` shadow boundary.** Only inherited properties cross it — custom properties among
   them, measured in Chrome and unverified elsewhere, so nothing here leans on it. CSS cannot select
   into it, and external references are same-origin only. Every decision below is downstream of this
   one fact.

## Decisions

### The fragment id is fixed at `icon`

`<use href="/img/icons/globe.svg#icon">`, never `#globe`. This is about removing a decision, not
about fixing a defect. A filename-derived fragment makes every filename a question someone has to
answer — a name starting with a digit is a valid HTML id and an invalid CSS selector, underscores
and capitals may or may not be allowed, and whatever sanitises `:2_Name-Of--Icon:` has to be found
and understood. Fixing the string means none of that is ever asked, by an engineer, an author or an
agent. That a rename can no longer blank an icon, and that Illustrator's `id="Layer_1"` cannot
survive the normaliser, follow from it rather than motivate it.

What the fixed fragment does **not** remove is the filename itself: the icon resolves by name, and
an authored `:name:` sanitises to lowercase alphanumerics and hyphens, so the file has to match.
That is one rule instead of a family of them, stated once and checked by the skill.

This is the breaking one. Every fork's icons go blank the moment they take the new `svg.js`, until
they re-run their own `img/icons/` through the skill — one command, but it has to be stated
somewhere a fork will actually see it. It is in [ADR 0004](../../adr/0004-reference-svg-through-use.md)'s
consequences, in the README's icon section as an upgrade note carrying the command, and here.

### `currentColor` is a requirement, not a preference

Because only inherited properties cross the shadow boundary, `currentColor` is the only mechanism
by which an icon can respond to anything — the link it sits in, the section around it, the colour
scheme. A fill of `#1a1a1a` is not a style choice that can be overridden later; it is permanent.

So the normaliser converts every paint value to `currentColor`, preserving `none`, and any icon it
cannot convert becomes a reported finding rather than a silent pass.

### Multi-colour icons stop and ask

More than one distinct paint value is a judgement call the script does not make. It reports the
colours, names any `#fff` sitting over a colour as a probable knockout, and offers three branches:

- flatten everything to `currentColor`;
- keep the palette as hex, which is the existing `helix` / `helix-color` convention. **Every other
  rewrite still happens** — the root id, the editor class styles, the stripping — because a colour
  variant that keeps its hex but not its `id="icon"` is exactly the blank icon this work exists to
  fix. The tool does not ask for the `-color` suffix — `SKILL.md` puts the rename on the agent and
  the person supplying the icon, since a rename breaks the `:name:` an author may already have
  written;
- flatten but keep a specific value, for a knockout that has to stay white.

`--palette` is a property of the run rather than of a file: it suppresses paint conversion for
everything in the invocation, so a monochrome icon caught in a `--palette` run over a directory
keeps its hex. It takes a single path. Every file it suppresses says so — a `palette-suppressed`
warning naming the colours left as authored, because an edit silently *not* made is the same defect
as a finding silently becoming an edit.

The `-color` branch costs the colour scheme: a hex palette will not follow light and dark, because
the values are literals and nothing on the page changes a literal. That cost is stated when the
branch is offered.

### `svg.js` exposes `getSvg`; `loadIcons` is a loop over it

The module's job is to build a referencing `<svg>`, and the icon spans are one caller of that:

```js
const parser = new DOMParser();

// Project Prefs
const VIEW_BOX = '0 0 24 24';
const ID = 'icon';
const PATH = '/img/icons';

export function getSvg({ name, id = ID, className = '', viewBox = VIEW_BOX, path = PATH }) {
  const str = `<svg xmlns="http://www.w3.org/2000/svg" class="${className}" viewBox="${viewBox}" aria-hidden="true">
    <use href="${codeBase}${path}/${name}.svg#${id}"></use>
  </svg>`;
  return parser.parseFromString(str, 'image/svg+xml').documentElement;
}

export default function loadIcons(iconSpans) {
  for (const span of iconSpans) {
    const name = [...span.classList].find((c) => c.startsWith('icon-')).substring(5);
    span.replaceWith(getSvg({ name, className: span.className }));
  }
}
```

Every constant is overridable per call, and `path` and `id` are why: an SVG that is not an icon
lives elsewhere and was never normalised, so it keeps its own root id. That pair is what makes the
module about SVG rather than about icons, and it is the whole argument for the rename.

`parseFromString` returns a `Document`, and pre-insertion validity accepts only
`DocumentFragment`, `DocumentType`, `Element` and `CharacterData` — inserting the document itself
throws `HierarchyRequestError`. `documentElement` is the node to hand back, and it is adopted into
the target document automatically on insert. The parser is built once at module scope rather than
per icon.

One consequence of `image/svg+xml`: parsing is XML, so it is strict where the `insertAdjacentHTML`
it replaces was forgiving. A raw `&` in a class name yields a `<parsererror>` document instead of
an icon. Not guarded — that is the chainsaw question `AGENTS.md` describes, and class names come
from the authoring pipeline.

The `xmlns` is load-bearing for the same reason, and it is the half of that strictness that does
not announce itself: XML has no implicit namespace, so without the declaration the root is a
generic `Element` that serialises as `<svg>` and never paints. See
[ADR 0004](../../adr/0004-reference-svg-through-use.md).

The name lookup searches for the `icon-` prefixed class rather than reading `classList[1]`, which
took the wrong substring whenever the classes arrived in another order. It deliberately does not
use `?.`: a span with no `icon-` class throws, exactly as the positional read did, instead of
quietly requesting `undefined.svg`.

`viewBox="0 0 24 24"` is safe whatever viewBox the referenced file carries — the referenced root
scales into the `use` box regardless. What it buys is an intrinsic 1:1 aspect ratio, so setting one
dimension derives the other, and a non-square CSS box letterboxes rather than stretches.

`aria-hidden="true"` is the correct default for every icon this project generates, and it is a
decision rather than a default: an `<svg>` with no role is exposed inconsistently across screen
readers, so leaving it unmarked is not neutral.

### Accessibility lives on the control, never in the file

An icon beside visible text is decorative and the text is already the name. An icon-only control
gets its name from `aria-label` on the button or link — the obligation sits with the block, which
is what [spec 001](../001-header-accessibility/spec.md) was about. A `<title>` inside an externally
referenced file is not reliably exposed through the boundary and is therefore not a naming
mechanism, which is why the normaliser strips `<title>` and `<desc>` rather than preserving them.

### Icons default to `1em`, and sizing targets `.icon`

```css
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
}
```

`1em` means an icon matches the text it sits next to without anyone writing a rule — body-sized in
body copy, heading-sized in a heading. `vertical-align: -0.125em` puts it on the optical baseline
rather than the text baseline.

The subtle half is *what the rule matches*. `svg.js` copies the placeholder span's class list onto
the generated `<svg>`, so `.icon` matches the span before the swap and the icon after it. The box
is therefore reserved across the network round trip and nothing shifts when the icon lands.

Which makes the CLS rule: **a block that wants a different size writes `.icon`, never `svg`.**
`svg.icon { width: 48px }` sizes only the element that arrives late and reintroduces exactly the
shift the default rule removes. `header.css`'s existing 24×24 already does this correctly.

### `icons.js` becomes `svg.js`

The concern is SVG handling, not icons specifically, and the file will accrete more of it. One
import path in `ak.js:239` moves with it. That is an `ak.js` diff, and per `AGENTS.md` those are
assumed wrong until argued — the argument is that it is a path string forced by a rename in a file
the same change owns, with no behavioural content.

While in the file: `icon.classList[1].substring(5)` reads the icon name by *position*, so a class
list arriving in a different order takes the wrong substring and requests a nonexistent file. It
becomes a search for the `icon-` prefixed class. One line, no contract change.

### The transform is a pure function; the script makes no judgements

`normalise(svg, { name }) → { svg, findings }` imports nothing, so it runs in Node and in the
browser and tests in the existing web-test-runner harness like everything else. `prep.js` is the
only file that touches `node:fs`.

The split is the point: mechanical rewrites happen, judgement calls become findings, and **a
finding never silently becomes an edit**. The agent works the findings with a human.

Rejected: svgo. It would replace most of `normalise.js` with configuration and is far better tested
than anything written here, but it is a devDependency every fork inherits, and its defaults rewrite
path data precision — output that is harder to predict than to read.

### A non-24 viewBox is reported, not rescaled

Rendering is identical whatever the file's viewBox is. A shared 24 grid matters for authoring
consistency — stroke weights and corner radii agreeing across a set — and that can only be fixed at
the source. Rescaling an export with a `<g transform="scale(…)">` wrapper scales its strokes by the
same factor, producing a file that looks conformant while fixing nothing.

### Stripping `<script>` is not theatre

Script in an SVG does not execute when the file is loaded through `<use>` or `<img>`; resource
documents do not run script. The check looks redundant and is not: `img/icons/whatever.svg` is also
a plain URL on your own origin, and a visitor navigating to it directly renders it as a document,
where its script runs with your origin's cookies. Any SVG committed here is a page being hosted.

`SKILL.md` says this, so nobody deletes the check as pointless.

### One decision is extracted to an ADR

[ADR 0004](../../adr/0004-reference-svg-through-use.md) records the referencing strategy — `<use>` over `<img>` and over
`mask-image`, the fixed fragment, the boundary's limitations, and the reversals each of them
invites. It passes the trigger test: a reader seeing every file carry the same generic id reads it
as sloppiness and "fixes" `svg.js` back to `#${name}`, and nothing in the code says why not.

The rest of the decisions above stay here. They are scoped to this work and stop mattering when it
is rebuilt.

## Structure

```
.agents/skills/svg-prep/
  SKILL.md            when to use it, the judgement calls, the report format
  normalise.js        pure, no imports
  prep.js             node shim: read → normalise → write in place
test/skills/svg-prep.test.js
scripts/utils/svg.js  renamed from icons.js; #icon, viewBox, aria-hidden, class lookup
scripts/ak.js         one import path
styles/styles.css     the .icon rule
img/icons/*.svg       all six re-run
README.md             the icon section
docs/adr/0004-reference-svg-through-use.md
docs/adr/README.md    index entry for 0004
docs/specs/README.md  index entry for 003
```

Invocation is in place, against a file or a directory:

```
node .agents/skills/svg-prep/prep.js img/icons/
```

The source file is rewritten where it sits and `git diff` is the review. Nothing is moved, and
nothing is renamed — a rename breaks the `:name:` an author already wrote.

### Rewritten silently

| | |
|---|---|
| Root `id` | set to `icon`, whatever it was |
| `viewBox` | required; synthesised from `width`/`height` when absent, and when neither exists the file is left untouched and the run exits non-zero |
| `width`/`height` | removed from root |
| `xmlns` | added when absent; `xmlns:xlink` dropped, `xlink:href` → `href` |
| Paint | every `fill`, `stroke` and `stop-color` colour → `currentColor`; `none` preserved |
| Illustrator classes | `<defs><style>.cls-1{fill:#ed2c85}</style></defs>` resolved onto elements, then `<style>` and `class` dropped |
| Inline `style` | paint declarations treated as paint, then the attribute removed |
| `<script>`, `on*` | stripped |
| `<metadata>`, `<title>`, `<desc>`, comments, `data-name`, `xml:space`, `serif:id` | stripped |
| Descendant `id` | stripped when unreferenced, kept when a `url(#…)` points at it |
| XML prolog | dropped |
| Formatting | one element per line, two-space indent |

### Reported, never auto-fixed

- **`<text>` / `<tspan>`** — live text. The font is not on the CDN and will not be on the visitor's
  machine. Outline it at the source and re-export. The loudest finding in the set.
- **More than one distinct colour** — the branch above, with probable knockouts named.
- **`url(#gradient)` paint** — cannot become `currentColor`.
- **`<image>`** — a raster or an external URL inside an icon. Not a vector icon; refuse.
- **`<foreignObject>`** — stripped, but loudly, because it is an HTML and script vector.
- **`<mask>`, `<clipPath>`, `filter`** — survive, noted as render risk through `<use>`.
- **`--palette` suppressing a conversion** — the paint stayed as authored, on this file too.
- **viewBox not `0 0 24 24`** — informational; renders correctly, re-export if stroke weight has to
  match the set.
- **viewBox non-square or non-zero origin** — will not sit right at the CSS size.
- **Filename not lower kebab-case** — the icon resolves by name, and an authored `:name:` sanitises
  to lowercase alphanumerics and hyphens, so the file has to match. The one naming rule the fixed
  `#icon` fragment could not delete. Reported, not renamed.

Before and after byte counts are printed per file.

## The fork migration

Stated in the ADR's consequences, in the README's icon section, and here: taking this change blanks
every icon until `img/icons/` is re-run through the skill. One command, and the skill accepts a
directory for exactly this reason.

**The loader and the files have to land in the same commit.** There is no ordering that keeps the
icons rendering: flip the loader first and it asks six files for a `#icon` none of them carry, run
the files first and the loader asks for a `#name` none of them carry any more. Any commit that
splits them leaves `main` with six blank icons, so the plan sequences the skill and its tests
first, then changes the loader and the six files together.

## Not doing

- **`img/logos/`.** A parallel convention `loadIcons` never touches, and logos keep their brand hex
  by definition. The skill will normalise one if pointed at it — it is path-driven — but the logos
  are not in scope and are not being re-run.
- **A themeable second colour.** Not pursued: one icon needs it and the `-color` file answers it.
  Custom properties do reach the referenced content — verified after this work in Blink, Gecko and
  WebKit — so a palette authored as `style="fill: var(--icon-accent, #ed2c85)"` would follow the
  scheme and still fall back to the brand colour. That is a real option for later, not a platform
  limit, and it reaches further than icons — any referenced artwork could follow light and dark.
  The properties to use are the ones `styles.css` already defines, so there is no icon-specific
  token layer to invent. What is unsettled is whether a `light-dark()` token survives the crossing
  or has to be resolved on the host first, and what `svg-prep` does when it meets a file shaped that
  way — it strips `style` today. See [ADR 0004](../../adr/0004-reference-svg-through-use.md).
- **Sprite sheets.** Ruled out by constraint 1: a page showing two icons would download forty.
- **Namespacing internal ids.** `svg-prep` strips every id nothing references, so a normalised icon
  has none left to collide.
- **Accessibility metadata in the files.** It belongs on the control. See above.
