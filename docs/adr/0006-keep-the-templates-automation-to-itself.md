# 0006. Keep the template's automation to itself

Date: 2026-09-25
Status: accepted

## Context

A repository generated from this template gets a copy of `.github/`, and its workflows are live in
the new repository from the first push. Any CI that Author Kit runs on its own pull requests would
also run on every generated project. That project would spend its own Actions minutes on checks it
never chose, against tests and lint config it may already have changed.

Author Kit still wants CI, and some generated projects will want it too. Deleting the workflows
from generated projects, or not shipping them, would leave those projects nothing to adopt.

Nothing in a workflow file shows that it will be copied. Someone adding the next workflow has no
reason to think it will run anywhere except here.

## Decision

Every job in `.github/workflows/` is gated on the repository it belongs to:

```yaml
if: github.repository == 'aemsites/author-kit'
```

To adopt a workflow, change that string to your own `owner/repo`.

**Not a repository variable.** A `vars.` gate is set in repository settings, not in the file. The
file never shows it, and a generated project cannot tell what it would have to set.

**Not `github.event.repository.is_template`.** That depends on a settings checkbox, and the
condition does not tell an adopter what to change.

## Consequences

In a generated project, the jobs show as skipped instead of missing. The workflow stays visible
for anyone who wants to adopt it.

Pull requests from forks of Author Kit are still checked. A `pull_request` run takes its
`github.repository` from the repository receiving the pull request, not from the fork.

The gate goes on each job, so a new job without one runs in every generated project. Review has to
catch that.

## The reversals this guards against

**Removing the `if:` because CI should always run.** It does always run, here. Without the gate it
also runs in every project generated from the template.

**Adding a workflow without copying the gate.** A workflow file does not show that generated
projects will run it too, so this is the easy mistake to make.
