# Header accessibility

Date: 2026-08-05
Status: implemented and verified, 2026-08-07. This document is the design record; the code is the
source of truth from here.

## Problem

The header is the most-used interactive component in the kit and is not keyboard or screen reader
accessible. An audit of `blocks/header/header.js` and `blocks/header/header.css` found:

| Gap | Where | Severity |
|---|---|---|
| Collapsed mobile nav is clipped by `overflow: hidden` + `max-height`, not hidden — links stay focusable and announced while invisible | `header.css:12` | High |
| Menu triggers are `<a href>` with `preventDefault` — Space does not activate, and the href goes nowhere | `header.js:139` | High |
| No `aria-expanded` or `aria-controls` on the three disclosure controls (menu triggers, nav toggle, language); scheme is a state toggle and needs `aria-pressed` instead | `header.js:84-88`, `decorateNavItem` | High |
| No Escape to close, no focus return, no dismissal on focus leaving | `toggleMenu` | High |
| Button labels hidden with `width:0;height:0;overflow:hidden`, unreliable for name computation; icon-only actions get no name | `header.css:65`, `:158` | Medium |
| `<nav>` unlabeled; no `aria-current` for the active item | `decorateNavSection` | Medium |
| No `:focus-visible` styling anywhere in the repo | — | Medium |

Corrected during design: the menu panels themselves are **not** a defect. `display: none` already
removes them from the accessibility tree. The visibility mechanism does not change.

## Constraints

1. **The design must not change.** Interaction behaviour defers to accessibility best practice
   (soft close, focus management); visual appearance does not change at either breakpoint.
2. **Browser support floor: Baseline Newly available.** A feature qualifies once it ships in the
   current stable release of every core browser — which includes mobile Safari and Firefox for
   Android, not just the desktop three. Live at HEAD applies to browser support the same way it
   applies to code. Recording this policy in `AGENTS.md` is a deliverable of this work, not a
   footnote. Anchor positioning was checked against it during design and qualifies.
3. **Buildless.** No new runtime dependencies. Every shipped line counts.

## Decisions

**Approach: platform semantics with hand-rolled dismissal. No Popover API.**

The same DOM node is an in-flow accordion below 900px and an absolutely positioned overlay above
it. A shown popover always renders in the top layer and cannot participate in normal document
flow, so adopting popover would either change the mobile design or require the `popover` attribute
to be added and removed on a `matchMedia` change — two behaviour modes, forked CSS, and a bad edge
case when the viewport crosses the breakpoint while a menu is open. Constraint 1 rules out the
first; constraint 3 argues against the second.

Modern features still used: `inert`, `:focus-visible`, `checkVisibility()`, `ResizeObserver`,
`interpolate-size` / `calc-size()`, `@starting-style` with `transition-behavior: allow-discrete`.

**Menu triggers become buttons and the authored href is dropped.** Those items never navigated —
`preventDefault` runs only when a nav item has a menu — so this matches current behaviour exactly.
Plain nav links are untouched. Authors who want the parent destination reachable link it inside the
menu themselves.

**ARIA pattern: disclosure, not menubar.** APG recommends disclosure for site navigation. Tab moves
through triggers and into open menus. No arrow-key navigation and no roving tabindex.

**UI strings are authored, with an English fallback.** The header fragment is already fetched per
locale, so anything authored there is localized for free. The skip link is authored as
`[Skip to content](/tools/widgets/skip)`, reusing the existing widget-sentinel convention. If it is
absent the block creates one from a constant and marks it `lang="en"`, so a non-English synthesizer
pronounces it as English rather than mangling it.

The nav label is the exception: it comes from the nav section's `section-metadata` (already lifted
onto `section.dataset` by `decorateSection`) and is **omitted when unauthored**. An `aria-label`
cannot carry its own language, so an English fallback on a `lang="de"` page would be announced in a
German voice with no way to correct it. With exactly one `<nav>` per page today — the header block
is the only place one is created — an unlabeled nav is acceptable; a mispronounced one is not.

## Structure and semantics

| Control | Today | Proposed |
|---|---|---|
| Menu trigger | `<a href>` + `preventDefault` | `<button>` + `aria-expanded` + `aria-controls` |
| Menu panel | `.is-open` → `display: block` | unchanged, plus an `id` |
| Plain nav link | `<a>` | unchanged, plus `aria-current="page"` when it matches |
| Nav toggle | `<button>` | + `aria-expanded` + `aria-controls` |
| Language | `<button>` | + `aria-expanded` + `aria-controls` |
| Scheme | `<button>` | + `aria-pressed` reflecting dark mode |
| `.text` / `.brand-text` | `width:0;height:0;overflow:hidden` | standard clip-path utility |
| Skip link | none | first focusable element, visually hidden until focused |

## Behaviour

**Dismissal.** Escape closes the open menu and returns focus to its trigger. Outside click closes
(exists today as `docClose`). `focusout` with a `relatedTarget` outside the menu closes it, which
also makes tabbing past the last item work without special handling. No focus trap on desktop
menus — they are disclosures, not dialogs.

**Mobile drawer is modal.** `is-mobile-open` sets `bottom: 0` and covers the viewport, so it is
treated as modal even though it is not marked as one: focus moves into the drawer on open, `main`
and `footer` become `inert` while it is open, Escape closes it and returns focus to the toggle.

**No breakpoint constant in JS.** The nav toggle is `display: none` at desktop, so
`navToggle.checkVisibility()` answers "are we in drawer mode?" with the CSS as the single source of
truth. A `ResizeObserver` on the header recomputes it. Changing the breakpoint in CSS needs no JS
change.

**Focus indicators.** `:focus-visible` with `outline: 2px solid currentColor` and an offset;
`currentColor` adapts to both colour schemes without a second rule. Keyboard only.

**Motion.** The existing `.actions-section` transition and anything added go inside
`@media (prefers-reduced-motion: no-preference)`.

**Degradation.** No `<main>` means no skip link rather than a dangling one. No menu means no
`aria-controls`. Nothing on this path throws, and nothing needs a `try`/`catch`.

## Verification

### Automated

`test/blocks/header.test.js`, web-test-runner in real Chrome, `setViewport` for breakpoints. One
test per distinct behaviour:

1. Collapsed mobile nav is `inert`
2. `aria-expanded` flips on the trigger, and the trigger is a `<button>`
3. Escape closes and returns focus to the trigger
4. `focusout` past the menu closes it
5. Skip link uses authored text; falls back with `lang="en"`; absent `<main>` means no skip link
6. `aria-current="page"` lands on the matching link
7. Drawer open: `main` and `footer` inert, focus moves in, Escape restores focus

Explicitly not tested: outline widths, class names, or element type as its own assertion.

### Visual delta pass

Playwright installed into a scratchpad directory, **not** the repo — nothing enters `package.json`.
Drive `aem up` on localhost so both runs serve identical remote content and only the code differs.

| Axis | Values |
|---|---|
| Viewport | 390×844, 1440×900 |
| Scheme | light, dark |
| State | at rest, drawer open, mega menu open, single menu open, language open |

**Acceptance: no unexplained delta.** Every diff is one of three things — zero, a deliberate fix we
named and chose, or a regression, which fails. "Zero delta everywhere" is deliberately *not* the
bar, because the baseline may already contain visual bugs and that criterion would lock them in.

Baselines are captured from current HEAD **before any code changes**. The baseline shots are read
as a review artifact, not just consumed as a machine reference: anything already broken is either
taken as a quick win — recorded as a deliberate delta — or filed as a follow-up issue. Pre-existing
defects that are deferred get written down, so the next person knows they were seen rather than
missed.

Known candidate for that bucket: the desktop single-menu dropdown CSS added on 2026-08-05
(`min-width: 220px`, `:has(> .menu)` anchoring) has never been viewed in a browser. It passed lint
and computed-style assertions only.

Caveat: `aem up` proxies live content, so a header fragment that changes between runs shows up as
diff noise. Capture both runs in one sitting and save the fetched fragment HTML alongside the shots
so drift is detectable.

### Manual

Automated tests cannot prove announcement, so the header was verified by hand at both breakpoints:
a VoiceOver pass and a keyboard-only walkthrough — skip link reachable first, every menu opens and
dismisses, focus never lost or trapped, no focus stops in the collapsed mobile nav.

## Risks

- **The button needs a visual reset** — `appearance: none`, `background: none`, `border: 0`,
  `font: inherit`, matching padding. Without it the conversion visibly changes the nav, which is
  the one thing this work promises not to do. Highest-risk detail in the change; the visual delta
  pass either proves it correct or catches it immediately.
- Element-selector CSS in forks (`header a { … }`) stops matching converted triggers. The
  `.main-nav-link` class is preserved, so class-based rules are unaffected.
- `inert` on `main` and `footer` during drawer open will block programmatic focus from project code
  that runs while the drawer is open.
- A fork with no authored nav toggle never enters drawer mode — coherent, since there would be no
  way to open the drawer either.
- **Fork-affecting.** Changed markup plus a new authoring contract. Needs a release note under the
  rule set with v1.4.0: changes to `ak.js`, to a shipped CSS hook, or to an authoring contract get
  called out.

## Deliverables

1. `blocks/header/header.js` — semantics, dismissal, drawer focus management, skip link,
   `aria-current`.
2. `blocks/header/header.css` — button reset, clip-path label utility, `:focus-visible`,
   reduced-motion guard.
3. `test/blocks/header.test.js` — the seven behaviours listed under Verification.
4. `AGENTS.md` — record the browser-support policy from constraint 2.
5. Release note entry, per the rule set with v1.4.0.

## Non-goals and follow-ups

- **Footer** — same unlabeled-nav problem, deliberately out of scope. Own spec.
- **`axe-core` as a devDependency** — would catch broad regressions, but it is a new dependency and
  its own decision.
- **Playwright in the repo** — this pass is ad hoc. Adopting it properly is its own decision.
- **Placeholders sheet** — the conventional EDS answer for UI strings. Not needed for this scope;
  revisit if the string count grows.
- **Arrow-key menu navigation** — excluded by the disclosure pattern choice, not an oversight.
