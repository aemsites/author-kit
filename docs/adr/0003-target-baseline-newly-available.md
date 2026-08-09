# 0003. Target Baseline Newly available

Date: 2026-08-09
Status: accepted

## Context

Every project has a browser support floor. In a project with a build step it is a configuration
value — a browserslist query, a transpiler target — and lowering it costs a rebuild. Here there is
no build step, so the floor is not configuration. It is the code itself: supporting an older
browser means hand-written fallbacks, and every one of them ships to every visitor of every fork,
forever, with nothing to signal when it is safe to remove.

The floor is therefore a decision about shipped bytes, and it needs to be a decision rather than an
accumulation of individual judgement calls.

Nothing in the code states it. `light-dark()` appears fifteen times across `styles/` and `blocks/`;
`:has()`, `@container`, `:focus-visible`, CSS nesting, `checkVisibility()` and `inert` are all used
without a guard. A reader who does not know the floor sees unguarded modern syntax and cannot tell
whether it is deliberate or an oversight nobody has hit yet.

## Decision

The floor is **Baseline Newly available**: a feature is available here once it has shipped in the
current stable release of every core browser — Chrome, Edge, Firefox and Safari, with mobile Safari
and Firefox for Android counted rather than waived.

Two consequences follow directly, and both are already stated in `AGENTS.md`:

- **No polyfills, no `@supports` fallbacks, no build-time transforms.** Below the floor there is no
  degraded path, because writing one is the thing being ruled out.
- **The floor is also a ceiling.** A feature that has not reached Baseline Newly available is not
  available either, however good the support in the browser you happen to be testing in.

**Not Baseline Widely available**, the conservative choice, which is Newly available plus thirty
months. It would forbid `light-dark()` today — the alternative being every colour token duplicated
behind a `prefers-color-scheme` query — and thirty months is roughly the whole useful life of a
template generation. A project generated today would be built with the platform of three years ago.

**Not a usage-percentage query.** A browserslist floor is a moving statistical target that needs
tooling to evaluate and shifts under you without a commit. Baseline is published, dated, and
lookupable by a person reviewing a diff.

## Consequences

The set of available features grows on its own as browsers ship. That is the point of naming a
definition rather than a version matrix: no commit is needed when a feature crosses the line, and
no one has to re-argue the floor to use `@scope` in a year.

Enforcement is review, not tooling. Neither `stylelint-config-standard` nor the eslint config knows
what Baseline is, so the rule holds because it is written down and applied by people — which is why
this record exists rather than a lint rule.

Visitors below the floor get a broken page, not a degraded one. Author Kit already fails closed by
construction — sections are hidden by CSS until JavaScript reveals them, per
[0000](0000-own-the-page-lifecycle.md) — so this adds no failure mode that was not already there.

For a project generated from this template, the floor is inherited as code with no fallbacks in it.
A fork with a contractual older-browser requirement is not turning a setting off; it is retrofitting
support into styles written without it. That is worth knowing at generation rather than at launch.

## The reversals this guards against

**"Add an `@supports` fallback, it's cheap."** Each one is bytes shipped to everyone to serve a
shrinking fraction of nobody, and nothing ever triggers its removal. Cheap once, permanent after.

**Replacing `light-dark()` with duplicated `prefers-color-scheme` blocks.** Reads in a diff as a
robustness improvement. It doubles the colour layer to widen support that was deliberately declined.

**Reaching for a feature because the browser in front of you has it.** The common failure is the
ceiling, not the floor — the rule is symmetric and the upper half is the half people forget.
