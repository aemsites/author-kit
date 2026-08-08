# Architecture decision records

Decisions that shaped this project, and why. Numbered, immutable, newest last.

Start with [0000](0000-own-the-page-lifecycle.md) — why Author Kit exists alongside the Adobe
boilerplate. It is numbered zero because it is prologue: the decision to have this project at all,
rather than a decision made within it.

## When a decision needs an ADR

**The trigger test: would a future reader reverse this by accident?**

If someone could look at the code, see no reason for a choice, and undo it — write an ADR. If the
reason is visible in the code itself, don't. A commit message covers most changes; an ADR covers
the ones where the code cannot explain itself.

Passes the test:

- Browser support floor is Baseline Newly available — nothing in the code says why not older.
- Menu dismissal is hand-rolled rather than using the Popover API — the code shows *what*, not why
  the obvious modern choice was rejected.
- `scripts/ak.js` is the shared engine forks inherit — invisible from inside the file.

Fails the test:

- Which CSS property fixed a layout bug. Read the CSS.
- Naming, formatting, file placement. Convention, not decision.
- Anything the linter already enforces.

## Lifecycle

An ADR is immutable once merged. Changing your mind means writing a new one that supersedes it —
never editing the original, because the record of what you believed then is the point.

- New ADRs are `Status: accepted`.
- A superseded ADR gets one line added: `Superseded by [NNNN](NNNN-title.md)`. Nothing else changes.
- The superseding ADR links back: `Supersedes [NNNN](NNNN-title.md)`.

Two links, no rewriting. A reader following either direction gets the whole history.

## Format

Four headings, as short as the decision allows. Most fit on one screen.

```markdown
# NNNN. Title in the imperative

Status: accepted

## Context
What forced a decision. The constraints, not the narrative.

## Decision
What we chose, stated plainly.

## Consequences
What this costs and what it rules out. The part future readers need most.
```

## Relationship to specs

ADRs record a decision. Specs in `docs/specs/` design a body of work and usually contain several
decisions. A spec that turns out to hinge on one durable choice is worth extracting into an ADR —
the header accessibility spec's rejection of the Popover API is the example.

## For projects built from this template

These are Author Kit's own records, kept as worked examples rather than deleted. Add your own
alongside them, or clear them out — the convention is what's being shipped, not the content.
