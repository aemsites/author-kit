> **Historical record.** The plan for work completed on 2026-08-07, reduced when `spec.md` was
> marked implemented. Eleven task briefs are summarised to a line each; Task 4 is kept in full as
> the worked example of the format. The unreduced 1117-line text is in git:
>
> ```bash
> git show 31eda25:docs/specs/001-header-accessibility/plan.md
> ```
>
> Read `spec.md` for the design and the code for current truth. What the plan got wrong is recorded
> at the end — that section is the reason this file still exists.

# Header Accessibility Implementation Plan

**Goal:** Make `blocks/header` keyboard and screen reader accessible without changing how it looks at any breakpoint.

**Architecture:** Disclosure pattern, not menubar. No Popover API — the menus are in-flow accordions below 900px and absolutely positioned overlays above it, and a shown popover cannot participate in normal flow. Dismissal (Escape, outside click, focus leaving) is hand-rolled, replacing the existing `docClose` logic. Drawer mode is detected from the DOM via `checkVisibility()` rather than a duplicated breakpoint constant.

**Tech Stack:** Vanilla ES modules, no build. `@web/test-runner` in real Chrome for tests. Playwright driven from `$AK_VISUAL` outside the repo (never added to `package.json`) for visual regression.

**Spec:** [`spec.md`](spec.md)

## Global Constraints

- **The design must not change.** Every visual delta must be zero, or a named and approved fix. A regression fails the task.
- **Browser support floor:** current stable Chrome, Safari and Firefox. No polyfills, no `@supports` fallbacks.
- **Buildless.** No new runtime dependencies. No new `package.json` entries of any kind for this work.
- **Every line ships.** No editorial comments. Match the terseness of surrounding code.
- **ARIA via IDL properties** where one exists (`btn.ariaExpanded = 'true'`, `el.inert = true`), matching `advanced-tabs.js` and `hero.js`. Use `setAttribute` only where no IDL property exists.
- **No hardcoded user-visible English** except the single documented skip-link fallback, which must carry `lang="en"`.
- `scripts/ak.js` is out of scope. Nothing in this plan modifies it.

## File Structure

| File | Responsibility | Change |
|---|---|---|
| `blocks/header/header.js` | All header decoration and behaviour | Modify |
| `blocks/header/header.css` | Header styling incl. new hidden/focus utilities | Modify |
| `test/blocks/header.test.js` | Behaviour tests | Create |
| `AGENTS.md` | Browser support policy | Modify |

`header.js` is 201 lines and gains roughly 60. That keeps it under ~270, which is within the range of other blocks in the repo — no split needed. If it passes ~350 during implementation, stop and raise it rather than splitting unilaterally.

## Prerequisites

The dev server and capture harness were smoke-tested on 2026-08-05 and work. The harness lives
outside the repo, at a stable path rather than a session-scoped temp directory:

```bash
export AK_VISUAL=~/.cache/ak-visual              # capture.mjs + playwright, already installed
aem up --no-open --no-livereload --port 3000     # serves local code, proxies live content
cd "$AK_VISUAL" && node capture.mjs <label>      # 18 shots, 2 legitimate skips
```

Set `AK_VISUAL` in every shell that runs a capture step. If `$AK_VISUAL/capture.mjs` is missing,
recreate it before starting Task 1 — the plan's verification depends on it.

The harness hides `main` and `footer` and freezes animations before each shot — the header is the subject, and the hero gradient behind it is animated, which made byte-exact diffing meaningless until this was added. It drives system Chrome via `channel: 'chrome'` — the cached Playwright browsers are the wrong build and must not be downloaded. It clips to the runtime union of the header and any visible menu; screenshotting the `header` element silently clips overflowing desktop menus and produces false green diffs.

## The twelve tasks

Each task followed the same loop: write the failing test, watch it fail, implement, run the test,
capture and diff against the baseline, commit. A visual delta was a stop condition.

| # | Task | Outcome |
|---|---|---|
| 1 | Capture the pre-change baseline | No code. 18 shots into `$AK_VISUAL/shots/before/`, read as a review artifact rather than only as a machine reference. |
| 2 | Replace the label-hiding hack with a clip utility | `.a11y-clip` added inside the `header` scope; the `width:0;height:0` rules on `.text` and `.brand-text` deleted. |
| 3 | Focus-visible styling | `:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }`. `currentColor` needs no light/dark variant. |
| 4 | Menu triggers become buttons | Kept in full below. |
| 5 | Escape, focus return, and focus-out dismissal | `menuKeydown` and `menuFocusout` added on the nav; `closeAllMenus` took over detaching `docClose`, fixing an existing listener leak. |
| 6 | Inert the collapsed mobile nav | `syncDrawerState(header)`, with drawer mode read from `toggle.checkVisibility()` rather than a breakpoint constant duplicated in JS. |
| 7 | Treat the mobile drawer as modal | `main` and `footer` go `inert` while open, focus moves into the drawer, Escape closes it and returns focus to the toggle. |
| 8 | Skip link | `decorateSkipLink`, authored via `/tools/widgets/skip`, falling back to a constant marked `lang="en"`. No `<main>` means no skip link. |
| 9 | Current page and nav label | `aria-current="page"` on a matching link; `nav.ariaLabel` from `section.dataset.label`, omitted when unauthored. |
| 10 | Action button state | `aria-pressed` on scheme (a state toggle), `aria-expanded` on language (a disclosure). |
| 11 | Reduced motion and the support policy | `.actions-section` transition wrapped in `@media (prefers-reduced-motion: no-preference)`; the browser support policy recorded in `AGENTS.md`. |
| 12 | Final verification and release note | Full suite and lint, after-capture diffed against baseline, content-drift check, manual VoiceOver / NVDA and keyboard passes, release note drafted. |

## Task 4, in full

The highest-risk task, and the fullest example of the loop — including the visual gate that the
rest of the plan leans on. Reproduced as written, unticked checkboxes and all.

---

### Task 4: Menu triggers become buttons

The highest-risk task. A `<button>` renders nothing like an `<a>` without a reset, and the reset is what protects the design.

**Files:**
- Modify: `blocks/header/header.js:132-142` (`decorateNavItem`)
- Modify: `blocks/header/header.css` (button reset for `.main-nav-link`)
- Test: `test/blocks/header.test.js`

**Interfaces:**
- Consumes: `toggleMenu(li)` from `header.js:21`, unchanged.
- Produces: `decorateNavItem(li)` now creates `button.main-nav-link` with `aria-expanded` and `aria-controls`; menu wrappers gain an `id` of the form `header-menu-<n>`. Tasks 5 and 6 rely on both.

- [ ] **Step 1: Write the failing test**

```js
describe('menu triggers', () => {
  it('is a button wired to its menu', async () => {
    const el = await mountNav();               // helper defined in Step 3
    const trigger = el.querySelector('.main-nav-link');
    expect(trigger.tagName).to.equal('BUTTON');
    expect(trigger.getAttribute('aria-expanded')).to.equal('false');
    const menu = el.querySelector('.menu');
    expect(trigger.getAttribute('aria-controls')).to.equal(menu.id);
    expect(menu.id).to.not.equal('');
  });

  it('flips aria-expanded on activation', async () => {
    const el = await mountNav();
    const trigger = el.querySelector('.main-nav-link');
    trigger.click();
    expect(trigger.getAttribute('aria-expanded')).to.equal('true');
    trigger.click();
    expect(trigger.getAttribute('aria-expanded')).to.equal('false');
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: FAIL — `expected 'A' to equal 'BUTTON'`.

- [ ] **Step 3: Add the mount helper to the test file**

```js
const NAV_HTML = `<div class="section">
  <div class="default-content">
    <ul>
      <li><p><a href="/plain">Plain</a></p></li>
      <li>
        <p><a href="/products">Products</a></p>
        <ul><li><a href="/products/a">A</a></li></ul>
      </li>
    </ul>
  </div>
</div>`;

async function mountNav() {
  const el = await mountHeader(NAV_HTML);
  const { decorateNavSection } = await import('../../blocks/header/header.js');
  decorateNavSection(el.querySelector('.section'));
  return el;
}
```

Export `decorateNavSection` from `header.js` by changing `function decorateNavSection(section) {` to `export function decorateNavSection(section) {`. It is the smallest seam that exercises nav decoration without a fragment fetch.

- [ ] **Step 4: Rewrite `decorateNavItem`**

Replace `header.js:132-142` with:

```js
let menuId = 0;

function decorateNavItem(li) {
  li.classList.add('main-nav-item');
  const link = li.querySelector(':scope > p > a');
  if (link) link.classList.add('main-nav-link');
  const menu = decorateMegaMenu(li) || decorateMenu(li);
  if (!menu || !link) return;

  menuId += 1;
  menu.id = `header-menu-${menuId}`;
  const btn = document.createElement('button');
  btn.className = 'main-nav-link';
  btn.type = 'button';
  btn.textContent = link.textContent;
  btn.ariaExpanded = 'false';
  btn.setAttribute('aria-controls', menu.id);
  link.replaceWith(btn);

  btn.addEventListener('click', () => {
    toggleMenu(li);
    btn.ariaExpanded = String(li.classList.contains('is-open'));
  });
}
```

`toggleMenu` runs first so `aria-expanded` reflects the state this button settled on. Note this only corrects the clicked trigger — a menu closed by `closeAllMenus` keeps a stale `aria-expanded="true"` until Task 5 moves the reset into `closeAllMenus` itself.

- [ ] **Step 5: Add the button reset**

In `blocks/header/header.css`, inside `.main-nav-section { … }`, extend the existing `.main-nav-link` rule:

```css
    .main-nav-link {
      display: block;
      line-height: 64px;
      appearance: none;
      background: none;
      border: 0;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      text-align: inherit;
      cursor: pointer;
    }
```

`font: inherit` and `color: inherit` are the two that matter most — UA button styling overrides both.

- [ ] **Step 6: Run the tests**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: PASS.

- [ ] **Step 7: Verify the design held**

```bash
cd "$AK_VISUAL" && node capture.mjs t4
cd "$AK_VISUAL/shots" && for f in before/*.png; do cmp -s "$f" "t4/$(basename $f)" || echo "DELTA: $(basename $f)"; done
```

Expected: no output. If there is a delta, open the named PNG next to its `before/` counterpart and fix the reset until it is gone. Do not proceed with an unexplained delta — this is the task the visual pass exists for.

- [ ] **Step 8: Commit**

```bash
git add blocks/header/header.js blocks/header/header.css test/blocks/header.test.js
git commit -m "Make header menu triggers buttons with expanded state"
```

---

## Where the plan was wrong

Six defects in code this plan specified, found during execution and fixed in the code rather than
here. This is what a plan is worth keeping for.

1. **`menuFocusout` closed on a null `relatedTarget`.** Focus leaving the window dismissed the open
   menu. Fixed in `c19aa48`.
2. **`closeAllMenus` reset triggers by negative exclusion.** Querying `header .is-open` and
   excluding by structure was replaced with an explicit trigger registry in `2e7a4dd`.
3. **Drawer `inert` leaked on resize.** Crossing the breakpoint with the drawer open left `main` and
   `footer` inert with no way to clear them — a page-bricking Critical. `teardownDrawer` was added
   in `296cd6e`.
4. **Task 7's inline `esc` listener collided with submenu Escape handling** and outlived the drawer
   it was attached for. Same commit.
5. **`decorateNavToggle` resolved its header with `document.body.querySelector('header')`,** which
   is the wrong header as soon as there is more than one in the document. Same commit.
6. **Task 10's `dark()` helper misreported scheme state,** so `aria-pressed` could be inverted —
   the failure mode where the ARIA is worse than none.

The size estimate was also wrong, in a way worth recording: `header.js` was projected at 201 lines
plus roughly 60. It shipped at 319 and has grown since. The stop-and-raise threshold of ~350 was
the useful half of that estimate; the point estimate was not.

Four further corrections were made to the plan while the work was in flight rather than to the
code — ARIA IDL properties over `setAttribute` and a single clip rule (`ef1be34`), expected test
counts (`4928b87`), visual harness stabilisation (`1b8c09d`, `160f42f`), and Task 4's
`aria-expanded` rationale (`5a850ce`).

## Notes for the implementer

- **Do not add Playwright to `package.json`.** It lives in the scratchpad. If the harness is missing, recreate it from the Prerequisites section.
- **A visual delta is a stop condition,** not something to note and move past. Task 4 is where one is most likely.
- **`scripts/ak.js` is out of scope.** If something seems to require changing it, stop and raise it.
- **Do not add arrow-key navigation.** Excluded deliberately by the disclosure pattern; see the spec.
- The baseline in `shots/before/` is only valid for the HEAD it was captured from. If you rebase or pull mid-implementation, recapture it.
