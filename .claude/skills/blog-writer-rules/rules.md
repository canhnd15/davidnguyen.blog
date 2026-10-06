# Writer rules (W-xx)

Edit rules by ID. When you change or add a rule, append an entry to `corrections-log.md`.
If the rule has a reviewer counterpart, update the matching R-xx in `blog-reviewer-rules/rules.md`.

## Files and front matter
- **W-01** File path: `data/blog/YYYY-MM-DD-kebab-slug.mdx`. The date is today's date unless the brief says otherwise. The slug is short, English, kebab-case.
- **W-02** Front matter fields, in this order: `title`, `date`, `lastmod`, `tags`, `draft`, `summary`, `images`, `layout`.
- **W-03** `date` and `lastmod` are identical (`'YYYY-MM-DD'`, quoted). Never copy `lastmod` from another post.
- **W-04** `draft: false` always, on every new post and every revision. Never set `draft: true`.
- **W-05** `summary` is one paragraph that starts with "Trong bài viết này, mình sẽ cùng anh em tìm hiểu ...". It states the problem and what the reader gets.
- **W-06** `images: ['/static/img/cover/posts/<name>.png']` and `layout: PostLayout`. The cover is not created; list it in the to-do list.
- **W-07** `tags`: technology tags (proper case, e.g. `Spring Boot`, `Redis`) plus exactly one lowercase category tag from: `spring-framework`, `java`, `devops`, `cloud`, `software-architecture`, `testing`. Reuse tags already used in `data/blog/` before inventing new ones.
- **W-08** Title: use the brief's prefix (`[AWS] - `, `[AI] - `, ...) or none. 2025+ style favors a plain question or "Làm sao ...?" phrasing. Quote the title in YAML.

## Voice
- **W-10** Vietnamese, first person "mình", reader "anh em". Informal and conversational.
- **W-11** Technical terms stay in English (e.g. rate limit, cache, endpoint). Do not translate them.
- **W-12** Use rhetorical Q&A and light humor. Emoji are sparse: 😁 in the body at most a few times, 🚀 only in the closing line.
- **W-13** State opinions plainly, including trade-offs. No marketing tone and no filler.
- **W-14** Never use the word "ngây thơ". For a first or simplest approach, say "cơ bản", "basic" or "đơn giản".

## Structure
- **W-20** The first body line is `<TOCInline toc={props.toc} asDisclosure toHeading={3} />`.
- **W-21** Top-level headings are numbered: `# 1. Title`, with `### 1.1 - Subtitle` subsections. Skip `##`.
- **W-22** Section 1 opens with a real pain point or a naive example, then the transition `=> Trong bài viết này, mình sẽ cùng anh em ...`.
- **W-23** Then, in order: concepts/tools, step-by-step implementation, demo/test with output, `# N. - Kết luận & tổng kết`.
- **W-24** If the brief's "Source repo" field is a URL, add a "Source Code" section with that link before the conclusion. If it is `generate`, follow the Demo code rules (W-80..W-84) to create it, then link the result the same way. If `none`, omit the section.
- **W-25** The conclusion is a recap paragraph or bullets. Optionally link related posts as `https://davidnguyenblog.vercel.app/blog/<slug>`; verify that each slug exists under `data/blog/`.
- **W-26** The last line is exactly: `Hẹn gặp lại anh em ở những dự án tiếp theo – Happy Coding! 🚀`

## Formatting
- **W-30** `=>` starts takeaways and transitions. Callouts: `**Note**:` and `**QUESTION**:`.
- **W-31** Bold key terms, inline code for identifiers, tables for comparisons, ❌/✅ for bad/good.
- **W-32** Blank line between bullet items.

## Code
- **W-40** Fenced blocks with a language tag. Code is complete and realistic, not pseudo-code. Comments in Vietnamese.
- **W-41** Show expected console output, logs or responses after commands or requests.
- **W-42** Never invent API names, config keys or versions. If unsure, verify against official docs or mark `TODO(verify)`.

## Images
- **W-50** Centered: `<p align="center"><img src="/static/img/posts/<slug>/image_N.png" alt="..." title="..." /></p>` followed by `<p align="center">caption</p>`.
- **W-51** Use the images listed in the brief. Where an image helps but none is supplied, insert the tag and list it under "Images needed" at the end of the run. Do not create image files.
- **W-52** Prefer a diagram over a paragraph: wherever a flow, a sequence, a state change or a comparison between approaches is explained in words, add an image (flow, sequence or comparison diagram) instead of, or alongside a much shorter text. Insert the tag per W-50 and list it under "Images needed" with a description of what it should show.

## Facts and references
- **W-60** Use the brief's references first. You may web-search official docs to verify claims.
- **W-61** Link to official docs inline where a claim depends on them.
- **W-62** Anything unverified is marked `TODO(verify)` in the text and listed in the run summary. Never guess.

## Length
- **W-70** 1,000–2,500 words unless the brief sets a target.

## Demo code
- **W-80** Trigger: only when the brief's "Source repo" field is exactly `generate`. If it's a URL, use it as-is (no demo generation). If `none`, skip this section entirely.
- **W-81** Location: maintain a local clone of `https://github.com/canhnd15/blog-demos` at `~/Desktop/code/blog-demos` (clone it if missing, otherwise `git pull origin main` first). Create a new folder named exactly `<slug>/` inside it.
- **W-82** Content: complete, runnable code in the post's stack (same bar as W-40 — no pseudo-code), plus a `README.md` with setup and run instructions. Never include secrets, credentials or proprietary data.
- **W-83** Publish: commit with message `demo: add <slug>`, push to `main` on `blog-demos` only. Never force-push, never touch any folder but `<slug>/`, never create or push to any other repo.
- **W-84** Link back: point the post's "Source Code" section (W-24) to `https://github.com/canhnd15/blog-demos/tree/main/<slug>`.
