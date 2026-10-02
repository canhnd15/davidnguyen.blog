# Post briefs

## Write a new post
1. Copy `_TEMPLATE.md` to `drafts/briefs/<slug>.md` (slug: short English kebab-case).
2. Fill in the fields. Topic, working title, problem statement and tags are required.
3. In Claude Code run `/new-post <slug>`. The senior writer drafts `data/blog/<date>-<slug>.mdx` (`draft: true`), then the senior reviewer returns a report.
4. Apply fixes (ask the writer to revise), add the images, set `draft: false` and publish.

## Correct the rules
Tell Claude, for example:
- "Update W-12: no emoji in the body."
- "Add a reviewer rule: every post needs a comparison table."

Rules live in `.claude/skills/blog-writer-rules/rules.md` (W-xx) and `.claude/skills/blog-reviewer-rules/rules.md` (R-xx). Every change is logged in the matching `corrections-log.md`.
