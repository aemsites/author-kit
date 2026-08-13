# Specs

Designs for bodies of work large enough that the design needs settling before the code. Numbered
`NNN-topic/`, newest last.

- [001-header-accessibility](001-header-accessibility/spec.md) — keyboard and screen reader support
  for the header block, without changing how it looks.
- [002-agentic-workflow](002-agentic-workflow/spec.md) — how this repo is structured for coding
  agents, and what a fork inherits.
- [003-svg-handling](003-svg-handling/spec.md) — what an icon in this project is, and the skill
  that enforces it.

## When a spec is warranted

When the work spans several files and several decisions, and getting one of them wrong is expensive
to unwind. A spec is a design being argued before it is built.

A single change does not need one — that is what a PR description is for. Neither does work whose
shape is obvious; a spec written to justify work already understood is paperwork.

## What a directory holds

- `spec.md` — problem, constraints, decisions. Required, and the reason the directory exists.
- `plan.md` — the decomposition into tasks. Optional. `002` has none: it was six files, and a plan
  for work that needs no decomposition is theatre.

Directories, not flat files, so a plan can sit beside its spec. Numbered, not dated, because
sequence is what reading order needs — the date lives inside the document.

## Status, and what changes after

Each spec opens with `Date` and `Status`. A spec is editable while the work is in flight — it is a
design under argument, not a record of belief, which is the opposite of an
[ADR](../adr/README.md). Once the work lands, `Status` becomes `implemented` with the date it was
verified, and the document stops changing.

From that point the code is the source of truth and the spec is the reasoning behind it. `001`
says so in its own header.

A committed `plan.md` is history in the same way, and a stronger form of it: `001`'s plan was wrong
in six places that execution corrected. It is kept as *how this was executed*, not as instruction,
and it opens by saying which parts the code has since overtaken. That is the whole reason plans are
colocated with the spec rather than living in a directory of their own.

## Reducing a plan

**A plan is reduced when its spec is marked implemented.** Not before — in flight it is an
instrument, and its length is the point. Task briefs exist so an implementer can start at task 7
without reconstructing the six before it, and a plan trimmed while the work is running is a plan
broken for the only reader it has.

Once the code is the source of truth that length becomes inherited weight. A generated project gets
a snapshot of this tree, not its history, so every line stays with every fork forever — while the
unreduced text costs nothing to leave behind in git. Keep:

- the goal, architecture, constraints and file structure;
- any tooling notes worth reusing — `001`'s are the only written record of the visual harness;
- **one task brief in full**, as the worked example of the format. One demonstrates the shape as
  well as twelve;
- **what the plan got wrong**, which is the part the code cannot tell you and the reason to keep a
  plan at all.

Replace the remaining briefs with a line each, and link the unreduced text by commit. Delete
anything phrased as live instruction to an implementer — a plan that still says "do this next" is
the failure mode reduction exists to prevent. `001` went from 1117 lines to 266 this way.

## Relationship to ADRs

A spec designs a body of work and usually contains several decisions. An ADR records one decision
that outlives the work it came from. See [`docs/adr/README.md`](../adr/README.md) for the trigger
test that decides which is which.

## For projects built from this template

These are Author Kit's own specs, kept as worked examples rather than deleted. Add your own
alongside them, or clear them out — the convention is what's being shipped, not the content.
