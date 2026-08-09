# 0001. Record architecture decisions

Date: 2026-08-07
Status: accepted

## Context

Author Kit is a template. Every project generated from it inherits the code and the reasoning
behind it — except the reasoning isn't written down anywhere, so it doesn't actually transfer.

The gap shows up in both directions. A fork sees `scripts/ak.js` and has no way to know it is a
shared engine rather than project code. A maintainer returning to a deliberate choice months later
sees only its result, and the cheapest reading of an unexplained constraint is that it was an
oversight.

Commit messages are the obvious home, and they nearly work: they are attached to the change and
they survive. But they are found by `git log -S` on a string you already suspect, which requires
knowing what to look for. A decision you have forgotten is one you cannot search for.

## Decision

Keep architecture decision records in `docs/adr/`, numbered sequentially, immutable once merged,
superseded rather than edited.

`docs/adr/README.md` carries the trigger test that decides what qualifies and the lifecycle rule
for superseding. It is deliberately narrow: most changes need no ADR.

## Consequences

Decisions become greppable and browsable, and a fork inherits the reasoning along with the code —
which is the whole point for a template.

The cost is a judgement call per decision, and the failure mode is enthusiasm: an `docs/adr/` full
of records for choices the code already explains is worse than none, because it trains readers to
skim. The trigger test exists to hold that line, and the honest expectation is a handful of ADRs,
not dozens.

Immutability means the directory accumulates records that are no longer true. That is intended —
a superseded decision plus the one that replaced it explains more than the current state alone.
