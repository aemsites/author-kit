# 0005. Version the engine, not the repository

Date: 2026-08-12
Status: accepted

## Context

Author Kit is a template, not a dependency — [0000](0000-own-the-page-lifecycle.md). Nothing
resolves it and nothing pulls a release into a generated site, so the version in `package.json` has
no mechanical consumer. It is read by a person deciding whether to carry a change back into a
project generated from an older copy.

Semver's usual referent is a package's public API. There is no package here, so the referent has to
be named, or the number means whatever the person cutting the release felt about it.

Most of the repository is a poor candidate. `AGENTS.md` has already drawn the line: "Everything
except `scripts/ak.js`" belongs to the project. Blocks, styles, tokens and the README are a starting
point a fork edits on day one, so a release that rewrites them is describing files most forks no
longer have. `ak.js` is the opposite — the one file a fork inherits unmodified, and therefore the
only one it might take again.

## Decision

The version tracks `scripts/ak.js` and nothing else.

- **Major** — `ak.js` broke. A fork that takes the new copy gets a page that does not work.
- **Minor** — `ak.js` gained something, and a fork can take it without changing anything else.
- **Patch** — `ak.js` was fixed in place.
- **No bump** — the release did not touch the engine, however much else it changed.

The test is **"did `ak.js` break?"** Not "did we touch `ak.js`", and not "is this release breaking
for forks". Those are three different questions, and this release answers all three differently.

`ak.js` includes what it imports. A module it pulls in is part of the engine for this purpose even
though it sits elsewhere on disk, because a fork that takes the engine without it has taken a broken
engine.

This release is the worked example. The change to `ak.js` is one line — the dynamic import at
`scripts/ak.js:239` moved from `./utils/icons.js` to `./utils/svg.js` — and the file's own behaviour
is identical either side of it. The disruptive part of the release is elsewhere: every icon in a
fork blanks until its `img/icons/` is re-run, per [0004](0004-reference-svg-through-use.md). That
part is project-owned, and on its own it would have moved the version by nothing.

It is 2.0.0 anyway, because a fork that takes the new `ak.js` without also taking
`scripts/utils/svg.js` is importing a file that does not exist. The import rejects and no icon
loads at all — not an empty box where an icon should be, no icon and no box. That is `ak.js`
breaking, in one line, with no visible change to its own behaviour.

## Consequences

The number answers one question well rather than several vaguely. It does not estimate how much work
a release is downstream: 2.0.0 says nothing about the icon re-run that is most of this release's
actual cost, and the README and release notes carry that instead. A fork reading the version learns
what its copy of the engine needs, and reads prose for everything else.

Diff size is not the measure, in either direction. One line can be major; a hundred lines of new
engine capability that nothing depends on is a minor.

The import graph is the surface that moves most quietly, and the one to check at release. Adding a
module `ak.js` imports is a major even when the module is new and nothing else changed, because
partial adoption is the failure mode. That is the entire content of this release.

The version will sit still across releases that change a great deal, which reads like neglect. It is
the signal working: an unmoved number means a fork's engine is still current, which is the only
thing it was ever asked to say.

## The reversals this guards against

**Bumping the major because the release felt big.** Live in this one: the icon change breaks every
fork's artwork, which is far more visible than an import path, and it would have produced the same
2.0.0 for the wrong reason. A major that can be earned by downstream disruption cannot be trusted to
mean the engine, and the next reader has to diff `ak.js` themselves — which is the work the number
exists to save.

**Leaving the version alone because the `ak.js` diff was one line.** Same release, opposite error,
and the likelier one in review: an import path changed, the file's behaviour did not, and it reads
as a refactor. What broke is not in the line, it is in the file the line now names.

**Bumping the minor for a release full of new blocks and tokens.** Ordinary semver hygiene, and it
is versioning the repository again. Once the number moves for work outside the engine it records
activity, and a fork can no longer tell a release it must act on from one it can ignore.
