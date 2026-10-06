# Writer corrections log

Newest first. One entry per correction.

Format:
`YYYY-MM-DD | W-xx (new|changed|removed) | what was wrong | what the rule says now`

2026-10-06 | W-05 (changed), R-04 (changed) | Summary opener was forced to "Trong bài viết này, ..." | Opening is flexible and no longer checked
2026-10-06 | W-05 (changed), R-04 (changed) | Summaries ran long (the duplicate-order post had 625 characters listing every approach) | Summary is limited to 2 sentences and 400 characters (about 4 lines), modelled on the n8n post; reviewer counts characters and flags overruns as Major
2026-10-06 | W-04 (changed), R-03 (changed) | Rule forced `draft: true`, so the author had to flip every post to false by hand | Always `draft: false` on every new post and revision; reviewer flags `draft: true` as a Blocker
2026-10-04 | W-80..W-84 (new) | No workflow existed for generating and publishing runnable demo code | When the brief's Source repo field is `generate`, create the demo in `~/Desktop/code/blog-demos/<slug>/`, push to github.com/canhnd15/blog-demos, and link it via W-24
2026-10-04 | W-24 (changed) | Only covered a pre-existing repo URL or "none" | Now also covers `generate`, delegating to the new Demo code rules
2026-10-04 | W-52 (new) | Posts explained flows and comparisons mostly in prose | Prefer flow/sequence/comparison diagrams over paragraphs; add the tag and list it under "Images needed"
2026-10-04 | W-14 (new) | Post used the word "ngây thơ" for the simplest approach | Never use it; say "cơ bản", "basic" or "đơn giản"
2026-10-02 | W-01..W-70 (new) | Initial seed derived from existing posts (RSQL, n8n, duplicate-username, AI posts) | Baseline rules
