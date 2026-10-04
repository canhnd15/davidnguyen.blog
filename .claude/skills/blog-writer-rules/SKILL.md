---
name: blog-writer-rules
description: Style rules, structure, and workflow for writing new davidnguyen.blog posts (Vietnamese MDX). Use when drafting a post from a brief, or when the author wants to add or correct a writer rule.
---

# Blog writer rules

The rules live in `rules.md` (IDs `W-xx`). Read `rules.md` and `examples.md` in this directory before writing. Do not rely on memory of the rules.

## Workflow
1. Read the brief at `drafts/briefs/<slug>.md`. If a required field is missing (topic, problem statement, tags), stop and list what is missing.
2. Read `rules.md`, `examples.md`, and the 2 most relevant existing posts in `data/blog/` (match by tag or topic).
3. Check which tags and related posts already exist (`Grep` over `data/blog/`).
4. Verify technical claims against the brief's references and official docs. Mark unverified claims `TODO(verify)`.
5. Write `data/blog/YYYY-MM-DD-<slug>.mdx` following the rules.
6. If the brief's "Source repo" field is `generate`, follow the Demo code rules (W-80..W-84) to create and push the demo, then link it per W-24.
7. Re-read your draft against `rules.md`, and fix violations before finishing.

## Output contract
Finish with a short summary containing:
- the path of the post and the word count
- **Images needed**: list of placeholder paths with intended content (including the cover)
- **TODO(verify)** items
- rules you deliberately deviated from, with the reason (the brief wins over `rules.md`)

## Correcting rules
When the author says "update W-xx ..." or "add a rule ...":
1. Edit `rules.md` (keep IDs stable; never renumber; retire a rule by marking it `(removed)`).
2. Append a dated entry to `corrections-log.md`.
3. If the rule has a reviewer counterpart, update the matching R-xx in `../blog-reviewer-rules/rules.md` and log it there too.
