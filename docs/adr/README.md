# Architecture decision records

Decisions that shaped this project, and why. Numbered, immutable, newest last.

- [0000. Own the page lifecycle instead of shipping a toolbox](0000-own-the-page-lifecycle.md) —
  why Author Kit exists alongside the Adobe boilerplate, and what `ak.js` owns.
- [0001. Record architecture decisions](0001-record-architecture-decisions.md) — why these records
  exist and what qualifies for one.
- [0002. Serialise sections, parallelise within them](0002-serialise-sections-parallelise-within-them.md) —
  why the section loop awaits one section at a time.
- [0003. Target Baseline Newly available](0003-target-baseline-newly-available.md) — the browser
  support floor, and why nothing in the codebase has a fallback.
- [0004. Reference SVG icons through `<use>`](0004-reference-svg-through-use.md) — why every icon
  file answers to the same `#icon`, and what the shadow boundary costs.
- [0005. Version the engine, not the repository](0005-version-the-engine-not-the-repository.md) —
  what the number in `package.json` tracks, and why one line of `ak.js` outweighs the rest.

Start with 0000. It is numbered zero because it is prologue: the decision to have this project at
all, rather than a decision made within it.

## When a decision needs an ADR

**The trigger test: would a future reader reverse this by accident?**

If someone could look at the code, see no reason for a choice, and undo it — write an ADR. If the
reason is visible in the code itself, don't. A commit message covers most changes; an ADR covers
the ones where the code cannot explain itself.

Passes the test — each of these is a record here:

- Browser support floor is Baseline Newly available — nothing in the code says why not older.
  [0003](0003-target-baseline-newly-available.md)
- Sections are awaited one at a time — read cold, the loop looks like a missed optimisation.
  [0002](0002-serialise-sections-parallelise-within-them.md)
- `scripts/ak.js` is the shared engine forks inherit — invisible from inside the file.
  [0000](0000-own-the-page-lifecycle.md)

Fails the test:

- Which CSS property fixed a layout bug. Read the CSS.
- Naming, formatting, file placement. Convention, not decision.
- Anything the linter already enforces.

## Lifecycle

An ADR is immutable once merged. Changing your mind means writing a new one that supersedes it —
never editing the original, because the record of what you believed then is the point.

What is immutable is the decision, not the bytes. Typos, broken links and missing metadata get
fixed in place — none of them is a belief, and a rule that forbids correcting them is one nobody
can follow. Anything that changes what was decided, or why, needs a new record.

- New ADRs are `Status: accepted`.
- A superseded ADR gets one line added: `Superseded by [NNNN](NNNN-title.md)`. Nothing else changes.
- The superseding ADR links back: `Supersedes [NNNN](NNNN-title.md)`.

Two links, no rewriting. A reader following either direction gets the whole history.

There is no `proposed` status. An ADR under review is an open pull request, and merging is what
accepts it — so nothing half-decided ever sits in this directory. A decision that needs arguing
before anyone will write it down belongs in an issue or a [spec](../specs/README.md). Two open PRs
can claim the same number; the second one to merge renumbers.

## Format

Four headings and an optional fifth, as short as the decision allows. Most fit on one screen.

```markdown
# NNNN. Title in the imperative

Date: YYYY-MM-DD
Status: accepted

## Context
What forced a decision. The constraints, not the narrative.

## Decision
What we chose, stated plainly.

## Consequences
What this costs and what it rules out. The part future readers need most.

## The reversals this guards against
Optional. The specific diffs that would undo this while looking like improvements.
```

`Date` is the date the ADR was accepted. It is in the file rather than left to `git log` because
this is a template: a generated project gets a snapshot, not a history, so nothing outside the
document survives into the repositories that inherit it.

The optional fifth heading is worth writing when the decision is one a reasonable person would
reverse on sight — [0003](0003-target-baseline-newly-available.md) names three such diffs. It is
the trigger test above, written down for the reader who is about to fail it.

One reversal belongs in `Consequences`, as the last thing it says;
[0002](0002-serialise-sections-parallelise-within-them.md) does it in a sentence. Several earn the
heading, because a list buried in a closing paragraph is a list nobody reads.

## Relationship to specs

ADRs record a decision. Specs in `docs/specs/` design a body of work and usually contain several
decisions. Most of those stay in the spec: they are scoped to the thing being built and stop
mattering when it is rebuilt. A spec decision is worth extracting only when it also passes the
trigger test above.

The header spec's rejection of the Popover API is the useful near-miss. It looks durable, but the
reason is local — the same node is an in-flow accordion below 900px and an overlay above it, and a
popover cannot be in flow. Redesign the header and the reasoning evaporates with it. That belongs
in [`docs/specs/001-header-accessibility/`](../specs/001-header-accessibility/spec.md), which is
where it is.

## For projects built from this template

These are Author Kit's own records, kept as worked examples rather than deleted. Add your own
alongside them, or clear them out — the convention is what's being shipped, not the content.
