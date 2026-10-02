---
description: Write a new blog post from drafts/briefs/<slug>.md, then review it
argument-hint: <slug>
---

Create a new blog post from the brief `drafts/briefs/$ARGUMENTS.md`.

1. Read the brief. If the file is missing, or required fields (Topic, Problem statement, Tags) are empty, stop and tell me exactly what to fill in. Do not guess.
2. Launch the `senior-writer` agent with the slug `$ARGUMENTS`. Wait for it to finish; it writes `data/blog/<date>-$ARGUMENTS.mdx` with `draft: true`.
3. Launch the `senior-reviewer` agent with the path of that post and the brief path.
4. Show me: the post path, the writer's "Images needed" and `TODO(verify)` lists, and the reviewer's full report.

Do not fix the review findings yourself. I will decide what to apply, and may ask the writer to revise, or ask you to correct a rule (W-xx / R-xx).
