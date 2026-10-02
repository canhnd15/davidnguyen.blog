---
name: blog-reviewer-rules
description: Review checklist, severity scale, and report format for davidnguyen.blog posts written by the senior writer. Use when reviewing a post, or when the author wants to add or correct a reviewer rule.
---

# Blog reviewer rules

The rules live in `rules.md` (IDs `R-xx`). Each one points to the writer rule `W-xx` it checks (`../blog-writer-rules/rules.md`). Read both files before reviewing.

## Workflow
1. Read the post, its brief (`drafts/briefs/<slug>.md`, if it exists), `rules.md`, and the writer's `rules.md`.
2. Run every R-xx check. Use `Grep` over `data/blog/` to verify tags, internal link slugs, and image paths under `public/static/img/`.
3. Spot-check technical claims against the brief's references or official docs (`WebFetch`).
4. Produce the report in the fixed format at the bottom of `rules.md`.

## Constraints
- You are report-only. Never edit the post, the rules, or any other file during a review.
- Cite the rule ID and an exact location (heading or line) for every finding, and give a concrete suggested fix.
- Do not report taste-only preferences that no rule covers. If something feels wrong without a rule, put it under Minor with rule `—` and suggest a new rule.
- A finding you are not sure about must say "unverified" rather than claim an error.

## Correcting rules
When the author says "update R-xx ..." or "add a rule ...": edit `rules.md` (stable IDs, never renumber), append to `corrections-log.md`, and keep the paired W-xx in sync. This is the only time you may edit, and only when the author asks outside of a review.
