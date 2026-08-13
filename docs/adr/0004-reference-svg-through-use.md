# 0004. Reference SVG icons through `<use>`

Date: 2026-08-12
Status: accepted

## Context

Icons are authored, not configured: someone types `:globe:`, the pipeline emits
`<span class="icon icon-globe">`, and the page swaps that for something that renders. The set in use
is whatever authors wrote — unknowable at build time, and there is no build. So an icon is one file
fetched by name, and the only question left is how the page refers to it.

Sections carry a colour scheme, the header toggles it at runtime, and links and buttons set their
own colour. An icon that cannot take a colour from the page is wrong somewhere on every site.

## Decision

```html
<svg class="icon icon-globe" viewBox="0 0 24 24" aria-hidden="true">
  <use href="/img/icons/globe.svg#icon"></use>
</svg>
```

Files in `img/icons/` are monochrome, painted `currentColor`, with `id="icon"` on the root.
`svg-prep` puts a supplied file into that shape. A fixed palette is the named exception, suffixed
`-color`.

`currentColor` is the mechanism, not a preference. Only inherited properties cross the shadow
boundary `<use>` creates, so `color` is the single channel by which the page reaches the artwork. A
`fill="#1a1a1a"` is not a default CSS can override later; it is permanent.

**The fragment is the fixed string `icon`, never the filename**, so that nobody has to think about
it. Deriving it from the name makes every name a question: `#2_foo` is a valid id and an invalid
selector, are underscores allowed, what sanitises `:2_Name-Of--Icon:`, and is any of that written
down. Fixing the string deletes the category. That a rename can no longer blank an icon is a
consequence, not the reason.

One naming rule survives, because resolution is *by name*: `:globe:` → `icon-globe` →
`/img/icons/globe.svg`. An authored name sanitises to lowercase alphanumerics and hyphens, so
filenames are lower kebab-case — one rule instead of a family, stated here and checked by
`svg-prep`.

**Not `<img>`.** An opaque replaced element: nothing inherits in, so `currentColor` resolves against
the file's own initial value and every icon is black. Matching the page would mean a second file per
colour, forever.

**Not `mask-image`.** It recolours cleanly, but a mask keeps only alpha, so every colour in the file
is discarded and `helix-color.svg` could not exist. It is also a paint effect on a box with no
intrinsic ratio, so every call site has to state both dimensions.

## Consequences

**Custom properties cross; the obvious syntax for using them does not.** `var()` inside a referenced
file resolves against whatever set it on the host — `:root`, a section, the generated `<svg>`, or
the `<use>`. Verified 2026-08-13 in Blink, Gecko and WebKit. But only when the file consumes it as a
declaration, `style="fill: var(--brand)"`. As a presentation attribute `fill="var(--brand)"` is an
invalid value and the shape does not paint at all — which looks exactly like the property never
arriving, and is how this was written down backwards for a while.

So a fixed palette is not the dead end it looks. `style="fill: var(--color-accent, #ed2c85)"` would
follow the scheme and still fall back to brand, using tokens `styles.css` already defines rather
than an icon-specific layer nobody should have to learn. Untested: whether a `light-dark()` token
survives the crossing or has to be resolved on the host first. `svg-prep` strips `style` today, so
this is work not yet done rather than a limit.

**CSS cannot select into the icon.** `.icon path { fill: red }` matches nothing. The complete list
of ways to style one from the page is: inherited properties.

**External `<use>` is same-origin only**, and CORS does not lift it — there is no header to send.
`codeBase` comes from `import.meta.url`, so a fork serving its code and its pages from different
origins gets blank icons, and the failure looks like a bad path rather than a policy.

**Both limits have one shipped answer.** Per-part styling and cross-origin artwork are real needs,
so `svg.js` exposes `loadHrefSvg`: it fetches any href, caches the parse, and hands the SVG element
back for the caller to insert. Inlined, the artwork is ordinary DOM — selectors reach it, and a
cross-origin file works if it sends CORS headers, which `<use>` cannot use at all.

**`loadHrefSvg` is designed for grown-ups.** It is the escape hatch from the sanitising `svg-prep`
does, and strips nothing — not `<script>`, not `<style>`, not event handlers — so the legitimate
uses of those stay available. Inlining is what makes that a real choice rather than a formality: a
referenced file never runs anything, while inlined content is live DOM. Point it at files you
control.

**Sizing targets `.icon`, never `svg`.** The loader copies the placeholder's class list onto the
generated element, so `.icon` matches the span before the swap and the icon after it — which is what
reserves the box across the round trip.

**A fork taking this change has blank icons until it re-runs its own set:**

```
node .agents/skills/svg-prep/prep.js img/icons/
```

## The reversals this guards against

**"Use `<img>`, it's simpler."** It is, until the first icon that has to be a colour other than the
one in the file — which is the first icon, on a site with two schemes.

**Changing `#icon` back to `#${name}`.** Every file carrying the same generic id reads as
copy-paste. It is a handle, not a name: the filename already identifies the file, and pinning the
fragment to it means a rename blanks the icon silently instead of 404ing loudly.

**Sizing with `svg.icon`.** The same rule applied one element too late. The placeholder is a
`<span>`; anything matching only the generated `<svg>` reserves no space before it lands.

**Removing `xmlns` from `getSvg`.** It looks redundant — the element is named `svg`, and the HTML
parser never needed telling. Not hypothetical: it shipped, and every icon was invisible while all 73
tests passed. `parseFromString(str, 'image/svg+xml')` is strict XML, so without the declaration the
root is a generic `Element` that serialises as `<svg>`, measures 0×0, and never paints.
`test/scripts/svg.test.js` guards it on `namespaceURI`, constructor and rendered geometry — never on
markup, which cannot tell the difference.
