# Agentic workflow structure

Date: 2026-08-07
Status: implemented

## Problem

The repo had accumulated an agentic surface by accident. `AGENTS.md` grew section by section during
unrelated work. `CLAUDE.md` pointed at it. One spec sat in `docs/specs/` as a flat dated file
because that is where it happened to land mid-session, and its plan was gitignored after an
argument about whether plans should be committed. `.gitignore` excluded `.claude` wholesale, so no
harness configuration could be shared even if someone wanted to.

None of that was designed. It also has a second audience: this is a template, so every generated
project inherits whatever shape we leave behind.

## Constraints

1. **Two audiences, one set of files.** GitHub template instantiation copies the entire tree and
   there is no `.templateignore` — the feature remains unimplemented as of August 2026. Anything
   committed lands in every fork.
2. **No machinery.** A self-deleting cleanup workflow was considered and rejected: it needs Actions
   enabled and `contents: write`, runs after creation rather than during it, and fails silently if
   a fork disables Actions.
3. **Harness-agnostic where possible.** Skills should not be hostage to one vendor's directory name.

## Decisions

**Write for both readers instead of stripping.** `AGENTS.md` already proves this works — "What you
own" addresses forks and then adds "in this repo you are the maintainer." Applied to `docs/`, it
means Author Kit's own records stay as worked examples of the convention rather than being deleted,
which is more useful to a fork than an empty directory and a README describing what should go in it.

**Skills live in `.agents/skills/`, with `.claude/skills` a symlink.** Same reasoning as
`CLAUDE.md → @AGENTS.md`, one level down. A different agent harness reads `.agents/` directly.

Known limitation: git stores symlinks, but a Windows checkout without symlink support materialises
them as a text file containing the path, leaving `.claude/skills` broken. Acceptable — the canonical
location still works, and the fix is one `ln -s`.

**Two document types, both committed.** ADRs in `docs/adr/` record a decision; specs in
`docs/specs/NNN-topic/` design a body of work. Specs are directories so a plan can sit beside its
spec.

**Plans are committed, colocated.** This reverses an earlier call in the same week. The objection
was that the header plan was wrong in four places execution corrected, so committing it preserves
errors the code has already fixed. Colocation answers that: a `plan.md` inside a numbered spec
directory reads as "how this was executed," not as current instruction, and `001`'s plan carries a
header saying exactly that.

**A plan is optional.** This spec has none — the work was six files and a `.gitignore` edit, and a
plan written after the fact for work that needed no decomposition is theatre. Plans exist for work
large enough that an implementer needs the decomposition, which `001` was and this was not.

**Numbered, not dated.** Sequence is what matters for reading order; the date lives inside the
document.

## Structure

```
.agents/skills/<name>/SKILL.md        canonical, harness-agnostic
.claude/skills -> ../.agents/skills   symlink
.claude/settings.json                 shared permissions, committed
.claude/settings.local.json           personal, gitignored
docs/adr/README.md                    trigger test and lifecycle rule
docs/adr/NNNN-title.md
docs/specs/NNN-topic/spec.md
docs/specs/NNN-topic/plan.md          when the work needs decomposition
```

`.gitignore` line 11 becomes `.claude/settings.local.json`, and the `docs/plans/` entry is removed.

## The one skill

`performance-review` analyses a diff for the things this project already has opinions about: new
statically-reachable imports from `scripts.js`, blocking resources in `head.html`, images without
dimensions, fonts without `font-display`, new runtime dependencies, payload growth on the critical
path.

It analyses rather than measures, deliberately. Lighthouse against a proxied dev server produces
numbers that are not the published numbers, and every check above is decidable from source.

Its real job is making the LCP rule in `AGENTS.md` checkable — that rule currently relies on
everyone remembering it.

## Permissions

`.claude/settings.json` pre-approves lint, test, `aem up`, and read-only git. Nothing that writes,
publishes, or installs. The value is fewer prompts for the calls every agent makes constantly; the
line is that anything with side effects still asks.

## Not doing

- **Hooks.** A `PreToolUse` hook on `scripts/ak.js` writes was considered. It fires for maintainers
  too, for whom `ak.js` is fair game, so it would mostly generate noise for the people best placed
  to ignore it.
- **`.mcp.json`.** DA MCP would let an agent read authored content instead of inferring it, which
  would genuinely have helped during `001`. Deferred: a shared config assumes every fork uses DA
  with the same auth story, and that is its own decision.
- **Committing the visual-regression harness.** It lives outside the repo and caught two real
  regressions during `001`. Bringing it in is worth doing and is out of scope here.
