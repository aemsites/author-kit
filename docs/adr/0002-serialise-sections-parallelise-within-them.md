# 0002. Serialise sections, parallelise within them

Date: 2026-08-07
Status: accepted

## Context

`loadArea` walks a page's sections in a `for` loop and awaits each one before starting the next.
Inside a section it does the opposite — link blocks load together, then div blocks load together,
each phase a single `Promise.all`.

Read cold, the loop looks like a missed optimisation. Every block on the page could be started at
once, and the change is a one-line edit. Nothing at the call site explains why it is not.

Bandwidth is the reason. It is finite and shared, so concurrency is only free while the things
racing are all needed for the same paint. Blocks within a section qualify: none of them renders
until all of them do, so running them together costs nothing and finishes sooner. Blocks in section
five do not. Started early, they compete for bandwidth with section zero — delaying the LCP element
in exchange for readying content that is still below the fold.

The LCP image sits on the near side of that line, which is why `decorateArea` gives it
`fetchPriority: high` and lets it race the first section's blocks rather than waiting.

## Decision

The unit of concurrency is everything needed for the next visible milestone. Parallelise inside it;
await at its edge.

Concretely, in `loadArea`:

- Blocks within a phase run concurrently.
- Phases within a section are sequenced, so fragments resolve before the blocks that contain them.
- Sections are awaited one at a time, in document order.

Work that is not needed for the next paint does not belong in the loop at all — `postlcp.js` and
`lazy.js` exist for that.

## Consequences

Above-the-fold content gets the whole connection. LCP is protected by construction rather than by
tuning, and the ordering degrades gracefully: a long page does not get slower at the top as it grows
at the bottom.

The cost is that total page-complete time is longer than a fully parallel load would give. That is
the trade being made deliberately — this optimises for time-to-first-meaningful-paint, not for
time-to-everything. On a page whose content is entirely above the fold the serialisation buys
nothing, and it still applies.

It also means a block cannot assume a later section's DOM exists when it runs. Blocks that need to
coordinate must handle arriving in either order.

Changing the loop to load all sections at once would measurably raise LCP on long pages while
appearing, in isolation, to be a straightforward improvement. That is the reversal this record
exists to prevent.
