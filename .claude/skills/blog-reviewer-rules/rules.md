# Reviewer rules (R-xx)

Edit by ID and log changes in `corrections-log.md`. Where a rule checks a writer rule, the W-xx is in brackets; if one changes, update the other.
Default severity is in parentheses: Blocker (must fix before publishing), Major (should fix), Minor (nice to have).

## Front matter and file
- **R-01** (Blocker) All eight fields exist in order and are valid YAML; the title is quoted. [W-02, W-08]
- **R-02** (Major) `date` equals `lastmod` and matches the filename date format. [W-03]
- **R-03** (Blocker) `draft: true` on a new post. Published posts (reviewing an existing post) are exempt. [W-04]
- **R-04** (Major) `summary` starts with "Trong bài viết này, mình sẽ cùng anh em ..." and states the problem. [W-05]
- **R-05** (Major) `tags` has exactly one lowercase category tag from the allowed list; other tags match existing casing in `data/blog/`. [W-07]
- **R-06** (Minor) The cover path follows `/static/img/cover/posts/` and the file exists or is listed as pending. [W-06]

## Style and structure
- **R-10** (Major) Voice: "mình"/"anh em", informal, English technical terms not translated. [W-10, W-11]
- **R-11** (Minor) Emoji sparse; 🚀 only in the closing line. [W-12]
- **R-12** (Blocker) First body line is the TOCInline tag. [W-20]
- **R-13** (Major) Numbered `#` headings, `###` subsections, no `##`. [W-21]
- **R-14** (Major) The intro opens with a pain point or naive example and has the "=> Trong bài viết này" transition. [W-22]
- **R-15** (Major) A conclusion section exists, with a recap. [W-23, W-25]
- **R-16** (Blocker) The last line is exactly the signature line. [W-26]
- **R-17** (Minor) Formatting habits: `=>`, callouts, tables, blank lines between bullets. [W-30..W-32]
- **R-18** (Minor) Length is within 1,000–2,500 words or the brief's target. [W-70]

## Technical accuracy
- **R-20** (Blocker) Code is complete and plausible: imports, annotations and config keys are real. Spot-check at least 3 non-trivial claims against official docs. [W-40, W-42]
- **R-21** (Major) Console output or results are shown where commands or requests appear. [W-41]
- **R-22** (Blocker) No fabricated facts, versions, or benchmarks. Leftover `TODO(verify)` markers are Blockers. [W-62]
- **R-23** (Major) Claims depending on official behavior have an inline link. [W-61]

## Links and images
- **R-30** (Major) Internal links to `davidnguyenblog.vercel.app/blog/<slug>` point to existing slugs in `data/blog/`. [W-25]
- **R-31** (Major) Image tags use the centered format with a caption; paths follow `/static/img/posts/<slug>/`. [W-50]
- **R-32** (Minor) Every placeholder image is listed in the writer's "Images needed". [W-51]
- **R-33** (Major) A Source Code section exists iff the brief has a repo or says `generate`. [W-24]
- **R-34** (Major) When the brief's Source repo field is `generate`, the linked `blog-demos/<slug>` URL resolves (check with WebFetch) and the code it shows is consistent with what's in the post. [W-80..W-84]

## Readability
- **R-40** (Major) Intro hooks within the first 3 sentences; no padding paragraphs.
- **R-41** (Minor) The post covers the brief's "must include" points and avoids "must avoid" ones.

## Report format (fixed)
```
## Verdict: READY | NEEDS CHANGES
Counts: Blocker n / Major n / Minor n

## Findings
| # | Severity | Rule | Location | Problem | Suggested fix |

## Checklist for author
- [ ] images, cover, TODO(verify), draft flag
```
Findings only. Never edit the post.
