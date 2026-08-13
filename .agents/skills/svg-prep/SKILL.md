---
name: svg-prep
description: Normalise a supplied SVG into an icon this project can use — before one lands in img/icons/, when an existing icon renders blank or ignores the colour scheme, or after a designer re-export. Rewrites the mechanical parts in place and reports the judgement calls instead of guessing at them.
---

# SVG prep

Icons are referenced, never inlined: `<use href="/img/icons/<name>.svg#icon">`. Only inherited
properties cross that shadow boundary, which makes two things in the file load-bearing rather than
stylistic — the root `id="icon"`, because a fragment that resolves to nothing renders nothing, and
`currentColor`, because a `fill="#1a1a1a"` is not a default that CSS can override later, it is
permanent. An editor export satisfies neither.

This skill rewrites what is mechanical and **reports** what is a decision. A finding never silently
becomes an edit.

## Running it

```
node .agents/skills/svg-prep/prep.js <path…> [--flatten] [--keep=<value>] [--palette]
```

A path is a file or a directory — its `.svg` children, one level, no recursion. Files are
**rewritten where they sit**, so `git diff` is the review. Nothing is moved and nothing is renamed.

**`--palette` takes one path, never a directory.** It suppresses paint conversion on *every* file in
the run, not only on the one that needed it — a monochrome icon caught in a `--palette` run over
`img/icons/` is written with its hex fill intact. Each file it suppressed says so, so read the
report rather than the exit code, and point the flag at the single file that earned it.

```
img/icons/globe.svg  713 → 662 bytes
  ℹ viewbox-grid: viewBox "0 0 20 20" — renders correctly; re-export on 0 0 24 24 if stroke weight has to match the set

img/icons/helix-color.svg  not written
  ℹ viewbox-grid: viewBox "0 0 512 512" — renders correctly; re-export on 0 0 24 24 if stroke weight has to match the set
  ✗ multi-colour: 2 distinct colours: #ed2c85, #b64aa1
```

`✗` means that file was left untouched and the run exits 1. Every other file in the run is still
written, so working an error is a re-run of the one file, not of the set. `⚠` and `ℹ` are on a file
that is already written — read them, then decide.

## Rewritten silently

| | |
|---|---|
| Root `id` | set to `icon`, whatever it was |
| `viewBox` | required; synthesised from `width`/`height` when absent |
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

`<title>` and `<desc>` go because they are not a naming mechanism: they are not reliably exposed
through the `<use>` boundary. An icon's accessible name belongs on the button or link around it.

## Reported, never auto-fixed

| Code | | |
|---|---|---|
| `multi-colour` | ✗ | more than one distinct paint value — the decision below |
| `raster-image` | ✗ | an `<image>`: a raster or an external URL inside an icon. Not a vector icon; refuse it |
| `no-viewbox` | ✗ | no `viewBox` and no `width`/`height` to build one from. Re-export with either |
| `live-text` | ⚠ | `<text>` / `<tspan>` — the decision below |
| `gradient-paint` | ⚠ | `url(#…)` paint cannot become `currentColor`; whether the icon still follows the scheme is down to the gradient's own stops |
| `palette-suppressed` | ⚠ | `--palette` left this file's paint as authored. Expected on the file that earned the flag; on any other file in the run it is the flag reaching too far |
| `foreign-object` | ⚠ | stripped, but said out loud: `<foreignObject>` hosts HTML and script |
| `clip-mask-filter` | ⚠ | `<mask>`, `<clipPath>`, `filter` survive; check them through `<use>`, not just in a viewer |
| `viewbox-shape` | ⚠ | non-square or non-zero origin — it will not sit right at the CSS size |
| `viewbox-grid` | ℹ | not `0 0 24 24`. Renders correctly; re-export only if stroke weight has to match the set |
| `filename` | ⚠ | not lower kebab-case — an authored `:name:` sanitises to that. **Do not rename the file** — see below |

A non-24 grid is reported rather than rescaled because rescaling does not fix it: a
`<g transform="scale(…)">` wrapper scales the strokes by the same factor, producing a file that
looks conformant and matches nothing.

## multi-colour: the one with a real decision in it

The tool prints the colours it found and names a white among them as a probable knockout — white
sitting over a coloured shape, which flattening turns into a solid block. Show the colours, say
which reading you think is right, and pick a branch with the person who supplied the icon.

| | |
|---|---|
| `--flatten` | everything to `currentColor`. The answer when the second colour is incidental — an editor artefact, or shading nobody asked for |
| `--flatten --keep=#fff` | as above, but the nominated value stays as authored. For a knockout that has to stay white. Spell the value the way the file spells it — case is ignored, `#fff` does not match `#ffffff` |
| `--palette` | every structural rewrite happens — root id, class resolution, stripping, formatting — and the paint is left exactly as authored, with a `palette-suppressed` warning saying so. On this file only: see "Running it" |

`--palette` is what a genuine colour variant wants. It exists because the alternative people reach
for is leaving the file alone, and a file that keeps its hex but not its `id="icon"` is the blank
icon this tooling was built to prevent.

Two things follow from taking it. Name the file `<name>-color.svg` by hand — the tool will not, and
if content already references the old name that rename is a content change too. And **the icon will
not follow the colour scheme**: it is one appearance in light and dark, which is why the finding
stays on the report, downgraded to a warning, instead of clearing. Hex is hex — nothing on the page
changes a literal.

That is a property of the hex, not of `<use>`. A custom property *does* reach the referenced file
across every engine, so a palette written by hand as `style="fill: var(--icon-accent, #ed2c85)"`
would follow the scheme and still fall back to the brand colour. This tool does not produce that
shape and will strip it if it meets one, so today the warning stands — but treat it as work not yet
done rather than a wall.

`--flatten` records no finding once you have chosen it — the diff is the record.

## live-text cannot be fixed here

`<text>` and `<tspan>` need the font at render time. It is not on the CDN and it will not be on the
visitor's machine, so the icon renders in whatever the browser substitutes — wrong shapes, wrong
metrics, and no way to tell from the machine that exported it. Outline the text at the source and
re-export. No flag does this and none should.

## Never rename a file to fix `filename`

Authors write `:name:` in a document, which becomes `icon-<name>` and then a request for
`<name>.svg`. The filename is a live content reference. Report the finding, leave the file where it
is, and fix it at the source if it is worth fixing at all.

## Why `<script>` is stripped when `<use>` never runs it

It looks like theatre and is not. Script in an SVG does not execute through `<use>` or `<img>` —
resource documents do not run script. But anything under `img/icons/` is also a plain URL on your
own origin, and a visitor who navigates to it directly gets a document, where that script runs with
your origin's cookies. Every SVG committed here is a page you are hosting.

Do not delete the check as redundant.

## Before committing

`git diff` is the review — the tool leaves you a readable file precisely so this works. Then look at
the icon rendered, in **both colour schemes**, at the size it is actually used. Paint converted to
`currentColor` is invisible in a diff and obvious on a dark background.
