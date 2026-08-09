> **Historical record.** This is the plan as it stood when execution finished, including the
> corrections made to it along the way. Execution found further defects that were fixed in code
> rather than here — a Critical page-bricking `inert` leak on resize, a leaked Escape listener, and
> a `dark()` helper that misreported scheme state. Read `spec.md` for the design and the code for
> current truth.

# Header Accessibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

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

---

### Task 1: Capture the pre-change baseline

No code changes. This exists so every later task has something to diff against, and so pre-existing visual bugs are separated from ones we introduce.

**Files:** none in the repo. Artifacts land in `$AK_VISUAL/shots/before/`.

**Interfaces:**
- Produces: `$AK_VISUAL/shots/before/` containing 18 PNGs, `header.html`, and `report.json`, used by Task 12.

- [ ] **Step 1: Confirm the working tree is clean**

```bash
git status --short
```

Expected: no output. If there are uncommitted changes the baseline is not from a known HEAD — stop and resolve first.

- [ ] **Step 2: Start the dev server**

```bash
aem up --no-open --no-livereload --port 3000
```

Expected in the log: `Local AEM dev server up and running` and `Enabled reverse proxy to https://main--author-kit--aemsites.aem.page`.

- [ ] **Step 3: Verify local code is being served**

```bash
curl -s http://127.0.0.1:3000/blocks/header/header.js | grep -c nav-toggle
```

Expected: `1`. If `0`, the server is serving the published code rather than the working tree and the baseline is worthless.

- [ ] **Step 4: Capture**

```bash
cd "$AK_VISUAL" && node capture.mjs before
```

Expected: 18 `ok`, and exactly 2 `skip` lines, both `not applicable at this viewport` for `desktop-*-drawer-open`. Any other skip means content changed and the state matrix needs revisiting before proceeding.

- [ ] **Step 5: Review the shots as a review artifact**

Open every PNG in `shots/before/`. For each, note anything already visually wrong. Record findings in a scratch list under two headings: **quick win** (fix during this plan, as a deliberate delta) and **defer** (file as a follow-up issue). Known candidate already checked and cleared: the desktop single-menu dropdown renders correctly. Known observation, not a defect: `.menu` and `.mega-menu` have no border or shadow, so separation depends on the content behind them.

No commit — nothing in the repo changed.

---

### Task 2: Replace the label-hiding hack with a clip utility

`width:0;height:0;overflow:hidden` is unreliable for accessible name computation. This is the lowest-risk visual change in the plan, which makes it a good first test of whether the harness actually detects deltas.

**Files:**
- Modify: `blocks/header/header.css:63-68` (`.text`), `blocks/header/header.css:155-160` (`.brand-text`)
- Test: `test/blocks/header.test.js`

**Interfaces:**
- Produces: `.a11y-clip` class inside the `header` scope, reused by Task 8's skip link.

- [ ] **Step 1: Write the failing test**

```js
import { expect } from '@esm-bundle/chai';

// Loads header.css into the page and returns the decorated <header>.
async function mountHeader(html) {
  await new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/blocks/header/header.css';
    link.onload = resolve;
    link.onerror = resolve;
    document.head.append(link);
  });
  const el = document.createElement('header');
  el.innerHTML = html;
  document.body.append(el);
  return el;
}

describe('label hiding', () => {
  it('keeps clipped labels measurable, not zero-sized', async () => {
    const el = await mountHeader('<div class="action-wrapper scheme"><button><span class="text">Scheme</span></button></div>');
    const span = el.querySelector('.text');
    const { width, height } = span.getBoundingClientRect();
    expect(width).to.be.greaterThan(0);
    expect(height).to.be.greaterThan(0);
    expect(getComputedStyle(span).clipPath).to.not.equal('none');
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: FAIL — width is `0`, because the current rule sets `width: 0; height: 0`.

- [ ] **Step 3: Add the utility and use it**

In `blocks/header/header.css`, inside the `header { … }` block, add a single rule covering the
utility class and both existing labels — one selector list, no duplicated declarations:

```css
  .a11y-clip,
  .text,
  .brand-text {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    white-space: nowrap;
    clip-path: inset(50%);
  }
```

Then delete the now-dead `.text` rule (nested inside `.action-wrapper button`, currently
`display: block; width: 0; height: 0; overflow: hidden`) and the `.brand-text` rule (nested inside
`.brand-section .default-content a`). Both are more deeply nested than the new rule and would win
on specificity if left in place.

- [ ] **Step 4: Run the test**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: PASS.

- [ ] **Step 5: Verify no visual delta**

```bash
cd "$AK_VISUAL" && node capture.mjs t2
```

Compare `shots/before/` and `shots/t2/` byte-for-byte:

```bash
cd "$AK_VISUAL/shots" && for f in before/*.png; do cmp -s "$f" "t2/$(basename $f)" || echo "DELTA: $(basename $f)"; done
```

Expected: no output. A delta here means the clip utility changed layout — `position: absolute` on a former in-flow element is the likely cause, and the fix is to confirm the parent button is a positioned or flex context.

- [ ] **Step 6: Commit**

```bash
git add blocks/header/header.css test/blocks/header.test.js
git commit -m "Use a clip utility for visually hidden header labels"
```

---

### Task 3: Focus-visible styling

**Files:**
- Modify: `blocks/header/header.css` (inside the `header { … }` block)

**Interfaces:**
- Consumes: nothing.
- Produces: nothing later tasks depend on.

- [ ] **Step 1: Add the rule**

Inside the `header { … }` block:

```css
  :focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
```

`currentColor` resolves against the active colour scheme, so this needs no light/dark variant.

- [ ] **Step 2: Verify no delta at rest**

```bash
cd "$AK_VISUAL" && node capture.mjs t3
cd "$AK_VISUAL/shots" && for f in before/*.png; do cmp -s "$f" "t3/$(basename $f)" || echo "DELTA: $(basename $f)"; done
```

Expected: no output. The harness never focuses anything, so a keyboard-only style must not appear.

- [ ] **Step 3: Commit**

```bash
git add blocks/header/header.css
git commit -m "Add focus-visible styling to the header"
```

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

### Task 5: Escape, focus return, and focus-out dismissal

**Files:**
- Modify: `blocks/header/header.js:9-32` (`closeAllMenus`, `docClose`, `toggleMenu`)
- Test: `test/blocks/header.test.js`

**Interfaces:**
- Consumes: `button.main-nav-link[aria-controls]` from Task 4.
- Produces: `closeAllMenus()` now also resets `aria-expanded` on every trigger. Task 7 calls it.

- [ ] **Step 1: Write the failing tests**

```js
describe('menu dismissal', () => {
  it('closes on Escape and returns focus to the trigger', async () => {
    const el = await mountNav();
    const trigger = el.querySelector('button.main-nav-link');
    trigger.click();
    const link = el.querySelector('.menu a');
    link.focus();
    link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(el.querySelector('.main-nav-item.is-open')).to.equal(null);
    expect(document.activeElement).to.equal(trigger);
    expect(trigger.getAttribute('aria-expanded')).to.equal('false');
  });

  it('closes when focus leaves the menu', async () => {
    const el = await mountNav();
    const trigger = el.querySelector('button.main-nav-link');
    trigger.click();
    const outside = document.createElement('button');
    document.body.append(outside);
    el.querySelector('.menu a').focus();
    outside.focus();
    await new Promise((r) => { setTimeout(r, 0); });
    expect(el.querySelector('.main-nav-item.is-open')).to.equal(null);
    outside.remove();
  });
});
```

- [ ] **Step 2: Run and watch both fail**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: FAIL — the menu stays open; `is-open` is still present.

- [ ] **Step 3: Replace the dismissal block**

Replace `header.js:9-32` with:

```js
function closeAllMenus() {
  const openMenus = document.body.querySelectorAll('header .is-open');
  for (const openMenu of openMenus) {
    openMenu.classList.remove('is-open');
    const trigger = openMenu.querySelector('[aria-expanded]');
    if (trigger) trigger.ariaExpanded = 'false';
  }
  document.removeEventListener('click', docClose);
}

function docClose(e) {
  if (e.target.closest('header')) return;
  closeAllMenus();
}

function menuKeydown(e) {
  if (e.key !== 'Escape') return;
  const open = e.target.closest('.is-open');
  if (!open) return;
  const trigger = open.querySelector('[aria-expanded]');
  closeAllMenus();
  trigger?.focus();
}

function menuFocusout(e) {
  const open = e.target.closest('.is-open');
  if (!open) return;
  if (!e.relatedTarget) return;
  if (open.contains(e.relatedTarget)) return;
  closeAllMenus();
}

function toggleMenu(menu) {
  const isOpen = menu.classList.contains('is-open');
  closeAllMenus();
  if (isOpen) return;
  document.addEventListener('click', docClose);
  menu.classList.add('is-open');
}
```

`closeAllMenus` now owns removing the document listener, which fixes the existing leak where `docClose` closed menus without detaching itself.

- [ ] **Step 4: Attach the handlers**

In `decorateNavSection`, after the `for (const navItem of mainNavItems)` loop:

```js
  nav.addEventListener('keydown', menuKeydown);
  nav.addEventListener('focusout', menuFocusout);
```

- [ ] **Step 5: Run the tests**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add blocks/header/header.js test/blocks/header.test.js
git commit -m "Add escape, focus return and focus-out dismissal to header menus"
```

---

### Task 6: Inert the collapsed mobile nav

The headline defect. Below 900px with the drawer shut, nav links are clipped by `overflow: hidden` but remain focusable and announced.

**Files:**
- Modify: `blocks/header/header.js` (new `syncDrawerState`, called from `decorateHeader`)
- Test: `test/blocks/header.test.js`

**Interfaces:**
- Consumes: `.action-wrapper.nav-toggle button` from `HEADER_ACTIONS`.
- Produces: `syncDrawerState(header)`, called by Task 7.

- [ ] **Step 1: Write the failing test**

```js
import { setViewport } from '@web/test-runner-commands';

describe('collapsed mobile nav', () => {
  it('is inert when the drawer is shut', async () => {
    await setViewport({ width: 390, height: 844 });
    const el = await mountFullHeader();          // helper from Step 3
    expect(el.querySelector('.main-nav-section').inert).to.equal(true);
    el.querySelector('.action-wrapper.nav-toggle button').click();
    expect(el.querySelector('.main-nav-section').inert).to.equal(false);
  });

  it('is never inert at desktop', async () => {
    await setViewport({ width: 1440, height: 900 });
    const el = await mountFullHeader();
    expect(el.querySelector('.main-nav-section').inert).to.equal(false);
  });
});
```

- [ ] **Step 2: Run and watch it fail**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: FAIL — `expected undefined to equal true`.

- [ ] **Step 3: Add the full-header mount helper**

```js
const FULL_HTML = `<div class="section"><div class="default-content"><p><a href="/">Brand<span> Name</span></a></p></div></div>
${NAV_HTML}
<div class="section"><div class="default-content">
  <p><a href="/tools/widgets/toggle"><span class="icon icon-more"></span>Menu</a></p>
</div></div>`;

async function mountFullHeader() {
  const el = await mountHeader(FULL_HTML);
  const { decorateHeaderContent } = await import('../../blocks/header/header.js');
  decorateHeaderContent(el);
  return el;
}
```

Rename `decorateHeader` to `decorateHeaderContent` and export it. The name `decorateHeader` already exists in `scripts/ak.js` for a different job, and the collision is confusing when reading both.

- [ ] **Step 4: Implement drawer-state sync**

Add to `header.js`:

```js
function syncDrawerState(header) {
  const toggle = header.querySelector('.action-wrapper.nav-toggle button');
  const drawerMode = !!toggle?.checkVisibility();
  const isOpen = header.classList.contains('is-mobile-open');
  const collapsed = drawerMode && !isOpen;
  for (const section of header.querySelectorAll('.main-nav-section, .actions-section')) {
    section.inert = collapsed && !section.contains(toggle);
  }
  if (toggle) toggle.ariaExpanded = String(drawerMode && isOpen);
}
```

The `!section.contains(toggle)` guard matters: whichever section holds the toggle must stay reachable, or a keyboard user cannot reopen the drawer they just closed. In the live content the toggle sits in `.brand-section`, which is never inerted — but a project could author it into the actions section, and the guard makes that case safe without relocating anything in the DOM.

- [ ] **Step 5: Call it on decorate and on resize**

In `decorateHeaderContent`, after the action loop:

```js
  syncDrawerState(header);
  new ResizeObserver(() => syncDrawerState(header)).observe(header);
```

In `decorateNavToggle`, after toggling `is-mobile-open`:

```js
    syncDrawerState(header);
```

- [ ] **Step 6: Run the tests**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: PASS.

- [ ] **Step 7: Verify no delta**

```bash
cd "$AK_VISUAL" && node capture.mjs t6
cd "$AK_VISUAL/shots" && for f in before/*.png; do cmp -s "$f" "t6/$(basename $f)" || echo "DELTA: $(basename $f)"; done
```

Expected: no output. `inert` has no visual effect, so any delta means the toggle relocation in Step 4 moved something.

- [ ] **Step 8: Commit**

```bash
git add blocks/header/header.js test/blocks/header.test.js
git commit -m "Make the collapsed mobile nav inert"
```

---

### Task 7: Treat the mobile drawer as modal

`is-mobile-open` sets `bottom: 0` and covers the viewport, so it behaves as a modal without being marked as one.

**Files:**
- Modify: `blocks/header/header.js` (`decorateNavToggle`)
- Test: `test/blocks/header.test.js`

**Interfaces:**
- Consumes: `syncDrawerState(header)` from Task 6, `closeAllMenus()` from Task 5.

- [ ] **Step 1: Write the failing test**

```js
describe('mobile drawer', () => {
  it('inerts the page, moves focus in, and restores it on Escape', async () => {
    await setViewport({ width: 390, height: 844 });
    const main = document.createElement('main');
    document.body.append(main);
    const el = await mountFullHeader();
    const toggle = el.querySelector('.action-wrapper.nav-toggle button');

    toggle.click();
    expect(main.inert).to.equal(true);
    expect(el.contains(document.activeElement)).to.equal(true);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(el.classList.contains('is-mobile-open')).to.equal(false);
    expect(main.inert).to.equal(false);
    expect(document.activeElement).to.equal(toggle);
    main.remove();
  });
});
```

- [ ] **Step 2: Run and watch it fail**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: FAIL — `expected undefined to equal true` on `main.inert`.

- [ ] **Step 3: Replace `decorateNavToggle`**

```js
function closeDrawer(header, toggle) {
  header.classList.remove('is-mobile-open');
  for (const el of document.querySelectorAll('main, footer')) el.inert = false;
  syncDrawerState(header);
  toggle.focus();
}

function decorateNavToggle(btn) {
  btn.ariaExpanded = 'false';
  btn.addEventListener('click', () => {
    const header = document.body.querySelector('header');
    if (!header) return;
    const opening = !header.classList.contains('is-mobile-open');
    if (!opening) {
      closeDrawer(header, btn);
      return;
    }
    header.classList.add('is-mobile-open');
    for (const el of document.querySelectorAll('main, footer')) el.inert = true;
    syncDrawerState(header);
    header.querySelector('.main-nav-section a, .main-nav-section button')?.focus();
    document.addEventListener('keydown', function esc(e) {
      if (e.key !== 'Escape') return;
      document.removeEventListener('keydown', esc);
      closeAllMenus();
      closeDrawer(header, btn);
    });
  });
}
```

- [ ] **Step 4: Run the tests**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add blocks/header/header.js test/blocks/header.test.js
git commit -m "Treat the mobile drawer as a modal for focus and inertness"
```

---

### Task 8: Skip link

**Files:**
- Modify: `blocks/header/header.js` (new `decorateSkipLink`)
- Modify: `blocks/header/header.css` (focused state)
- Test: `test/blocks/header.test.js`

**Interfaces:**
- Consumes: `.a11y-clip` from Task 2.
- Produces: `decorateSkipLink(header)`, called from `decorateHeaderContent`.

- [ ] **Step 1: Write the failing tests**

```js
describe('skip link', () => {
  it('uses authored text when present', async () => {
    document.body.append(document.createElement('main'));
    const el = await mountHeader('<div class="section"><div class="default-content"><p><a href="/tools/widgets/skip">Zum Inhalt springen</a></p></div></div>');
    const { decorateSkipLink } = await import('../../blocks/header/header.js');
    decorateSkipLink(el);
    const skip = el.querySelector('.skip-link');
    expect(skip.textContent).to.equal('Zum Inhalt springen');
    expect(skip.hasAttribute('lang')).to.equal(false);
    document.querySelector('main').remove();
  });

  it('falls back to English marked as English', async () => {
    document.body.append(document.createElement('main'));
    const el = await mountHeader('<div class="section"></div>');
    const { decorateSkipLink } = await import('../../blocks/header/header.js');
    decorateSkipLink(el);
    const skip = el.querySelector('.skip-link');
    expect(skip.textContent).to.equal('Skip to main content');
    expect(skip.getAttribute('lang')).to.equal('en');
    document.querySelector('main').remove();
  });

  it('is not created without a main landmark', async () => {
    const el = await mountHeader('<div class="section"></div>');
    const { decorateSkipLink } = await import('../../blocks/header/header.js');
    decorateSkipLink(el);
    expect(el.querySelector('.skip-link')).to.equal(null);
  });
});
```

- [ ] **Step 2: Run and watch all three fail**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: FAIL — `decorateSkipLink is not a function`.

- [ ] **Step 3: Implement**

```js
const SKIP_PATH = '/tools/widgets/skip';
const SKIP_FALLBACK = 'Skip to main content';

export function decorateSkipLink(header) {
  const main = document.querySelector('main');
  if (!main) return;
  if (!main.id) main.id = 'main';
  const authored = header.querySelector(`[href*="${SKIP_PATH}"]`);
  const skip = document.createElement('a');
  skip.className = 'skip-link a11y-clip';
  skip.href = `#${main.id}`;
  if (authored) {
    skip.textContent = authored.textContent;
    authored.parentElement.remove();
  } else {
    skip.textContent = SKIP_FALLBACK;
    skip.lang = 'en';
  }
  header.prepend(skip);
}
```

Call it first inside `decorateHeaderContent` so it is the first focusable element.

- [ ] **Step 4: Make it visible on focus**

In `blocks/header/header.css`, inside the `header { … }` block:

```css
  .skip-link:focus {
    position: fixed;
    top: 8px;
    left: 8px;
    width: auto;
    height: auto;
    margin: 0;
    padding: var(--spacing-s);
    overflow: visible;
    clip-path: none;
    z-index: 1002;
    background-color: light-dark(var(--color-light), var(--color-dark));
    outline: 2px solid currentColor;
  }
```

`:focus` rather than `:focus-visible` — a skip link activated by any means must be visible.

- [ ] **Step 5: Run the tests**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: PASS.

- [ ] **Step 6: Verify no delta at rest**

```bash
cd "$AK_VISUAL" && node capture.mjs t8
cd "$AK_VISUAL/shots" && for f in before/*.png; do cmp -s "$f" "t8/$(basename $f)" || echo "DELTA: $(basename $f)"; done
```

Expected: no output.

- [ ] **Step 7: Commit**

```bash
git add blocks/header/header.js blocks/header/header.css test/blocks/header.test.js
git commit -m "Add a skip link to the header"
```

---

### Task 9: Current page and nav label

**Files:**
- Modify: `blocks/header/header.js` (`decorateNavSection`, `decorateNavItem`)
- Test: `test/blocks/header.test.js`

**Interfaces:**
- Consumes: `section.dataset.label`, populated by `decorateSection` in `scripts/ak.js` from authored section metadata.

- [ ] **Step 1: Write the failing tests**

```js
describe('nav labelling', () => {
  it('marks the current page', async () => {
    const el = await mountHeader(`<div class="section"><div class="default-content"><ul>
      <li><p><a href="${window.location.pathname}">Here</a></p></li>
      <li><p><a href="/elsewhere">There</a></p></li>
    </ul></div></div>`);
    const { decorateNavSection } = await import('../../blocks/header/header.js');
    decorateNavSection(el.querySelector('.section'));
    const [here, there] = el.querySelectorAll('.main-nav-link');
    expect(here.getAttribute('aria-current')).to.equal('page');
    expect(there.hasAttribute('aria-current')).to.equal(false);
  });

  it('labels the nav only when authored', async () => {
    const el = await mountHeader('<div class="section"><div class="default-content"><ul><li><p><a href="/a">A</a></p></li></ul></div></div>');
    const section = el.querySelector('.section');
    const { decorateNavSection } = await import('../../blocks/header/header.js');
    decorateNavSection(section);
    expect(el.querySelector('nav').hasAttribute('aria-label')).to.equal(false);

    const el2 = await mountHeader('<div class="section"><div class="default-content"><ul><li><p><a href="/a">A</a></p></li></ul></div></div>');
    const section2 = el2.querySelector('.section');
    section2.dataset.label = 'Hauptnavigation';
    decorateNavSection(section2);
    expect(el2.querySelector('nav').getAttribute('aria-label')).to.equal('Hauptnavigation');
  });
});
```

- [ ] **Step 2: Run and watch both fail**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: FAIL — `aria-current` is null.

- [ ] **Step 3: Implement**

In `decorateNavSection`, after `nav.append(navList)`:

```js
  if (section.dataset.label) nav.ariaLabel = section.dataset.label;
```

In `decorateNavItem`, after `link.classList.add('main-nav-link')`:

```js
  if (link.pathname === window.location.pathname) link.ariaCurrent = 'page';
```

Placed before the button conversion, so an item that becomes a trigger does not carry `aria-current` — it no longer points anywhere.

- [ ] **Step 4: Run the tests**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add blocks/header/header.js test/blocks/header.test.js
git commit -m "Mark the current nav item and label the nav when authored"
```

---

### Task 10: Action button state

**Files:**
- Modify: `blocks/header/header.js` (`decorateScheme`, `decorateLanguage`)
- Test: `test/blocks/header.test.js`

- [ ] **Step 1: Write the failing tests**

```js
describe('action state', () => {
  it('reports scheme as a pressed toggle', async () => {
    const el = await mountFullHeaderWithActions();   // helper from Step 3
    const btn = el.querySelector('.action-wrapper.scheme button');
    const before = btn.getAttribute('aria-pressed');
    expect(before).to.be.oneOf(['true', 'false']);
    btn.click();
    expect(btn.getAttribute('aria-pressed')).to.not.equal(before);
  });

  it('reports language as expandable', async () => {
    const el = await mountFullHeaderWithActions();
    const btn = el.querySelector('.action-wrapper.language button');
    expect(btn.getAttribute('aria-expanded')).to.equal('false');
  });
});
```

- [ ] **Step 2: Run and watch both fail**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: FAIL — attributes are null.

- [ ] **Step 3: Add the helper**

```js
const ACTIONS_HTML = `<div class="section"><div class="default-content">
  <p><a href="/tools/widgets/scheme"><span class="icon icon-toggle"></span>Scheme</a></p>
  <p><a href="/tools/widgets/language"><span class="icon icon-globe"></span>Language</a></p>
</div></div>`;

async function mountFullHeaderWithActions() {
  const el = await mountHeader(ACTIONS_HTML);
  const { decorateHeaderContent } = await import('../../blocks/header/header.js');
  decorateHeaderContent(el);
  return el;
}
```

- [ ] **Step 4: Implement**

In `decorateScheme`, before `btn.addEventListener`:

```js
  const dark = () => document.body.classList.contains('dark-scheme');
  btn.ariaPressed = String(dark());
```

and as the last statement inside the click handler:

```js
    btn.ariaPressed = String(dark());
```

In `decorateLanguage`, before `btn.addEventListener`:

```js
  btn.ariaExpanded = 'false';
```

and as the last statement inside the click handler:

```js
    btn.ariaExpanded = String(section.classList.contains('is-open'));
```

- [ ] **Step 5: Run the tests**

Run: `npm run test:file -- ./test/blocks/header.test.js`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add blocks/header/header.js test/blocks/header.test.js
git commit -m "Expose pressed and expanded state on header action buttons"
```

---

### Task 11: Reduced motion and the support policy

**Files:**
- Modify: `blocks/header/header.css:167` (the `.actions-section` transition)
- Modify: `AGENTS.md`

- [ ] **Step 1: Guard the transition**

Replace the bare `transition: all 0.2s ease-in-out;` in `.actions-section` with:

```css
    @media (prefers-reduced-motion: no-preference) {
      transition: all 0.2s ease-in-out;
    }
```

- [ ] **Step 2: Record the browser support policy**

In `AGENTS.md`, replace the bullet reading "Target evergreen browsers directly — CSS nesting, `:has()`, `light-dark()`, top-level `await`, dynamic `import()` are all used already. No polyfills." with:

```markdown
- Browser support is live at HEAD too: if a feature works in the current stable release of Chrome,
  Safari and Firefox, it is available here. No polyfills, no `@supports` fallbacks, no build-time
  transforms. CSS nesting, `:has()`, `light-dark()`, `inert`, `checkVisibility()`, top-level
  `await` and dynamic `import()` are all in use already.
```

- [ ] **Step 3: Verify no delta**

```bash
cd "$AK_VISUAL" && node capture.mjs t11
cd "$AK_VISUAL/shots" && for f in before/*.png; do cmp -s "$f" "t11/$(basename $f)" || echo "DELTA: $(basename $f)"; done
```

Expected: no output. The harness runs with `reducedMotion: 'reduce'`, so the transition is already suppressed in every shot.

- [ ] **Step 4: Commit**

```bash
git add blocks/header/header.css AGENTS.md
git commit -m "Guard header motion and record the browser support policy"
```

---

### Task 12: Final verification and release note

**Files:**
- Modify: none, unless the diff review turns up a fix.

- [ ] **Step 1: Full suite and lint**

```bash
npm run lint && npm test
```

Expected: both clean. The suite should now report substantially more than the 9 tests present before this work.

- [ ] **Step 2: Capture the after state**

```bash
cd "$AK_VISUAL" && node capture.mjs after
```

- [ ] **Step 3: Check for content drift**

```bash
cd "$AK_VISUAL/shots" && diff before/header.html after/header.html
```

Differences here are expected — the markup deliberately changed. Read the diff and confirm every change is one this plan intended (`<a>` to `<button>`, added ARIA, the skip link). Anything else means the proxied content moved under you and the visual comparison is unreliable.

- [ ] **Step 4: Diff every state**

```bash
cd "$AK_VISUAL/shots" && for f in before/*.png; do cmp -s "$f" "after/$(basename $f)" || echo "DELTA: $(basename $f)"; done
```

Expected: no output. For each delta, open both PNGs and classify it as zero, a deliberate fix, or a regression. Regressions block the task.

- [ ] **Step 5: Manual screen reader pass**

Not automatable. Confirm and tick:

- [ ] VoiceOver, mobile and desktop widths
- [ ] NVDA, mobile and desktop widths
- [ ] Keyboard-only walkthrough at both widths: skip link reachable first, every menu openable and dismissable, focus never lost or trapped, no focus stops in the collapsed mobile nav

- [ ] **Step 6: Write the release note entry**

Draft it in the scratchpad for the next release, covering the fork-affecting changes: menu triggers are now `<button>` and drop the authored href; element-selector CSS such as `header a { … }` no longer matches them; the new optional `/tools/widgets/skip` authoring contract; and `main` and `footer` receiving `inert` while the mobile drawer is open.

- [ ] **Step 7: Final commit**

Each task already committed its own work, so there is usually nothing left to stage. Commit only if
Step 4's review turned up a fix:

```bash
git status --short
git diff --cached --quiet || git commit -m "Address final visual review findings"
```

Only if Steps 1-5 are all clean. Push is a separate, explicit decision.

---

## Notes for the implementer

- **Do not add Playwright to `package.json`.** It lives in the scratchpad. If the harness is missing, recreate it from the Prerequisites section.
- **A visual delta is a stop condition,** not something to note and move past. Task 4 is where one is most likely.
- **`scripts/ak.js` is out of scope.** If something seems to require changing it, stop and raise it.
- **Do not add arrow-key navigation.** Excluded deliberately by the disclosure pattern; see the spec.
- The baseline in `shots/before/` is only valid for the HEAD it was captured from. If you rebase or pull mid-implementation, recapture it.
