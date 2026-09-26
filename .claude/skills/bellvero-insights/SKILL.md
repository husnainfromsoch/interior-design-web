---
name: bellvero-insights
description: Use when building, changing, adding an article to, or verifying the Bellvero Insights section (P25 listing /insights, P26 article /insights/[slug]) — enforces the final Insights spec, DESIGN.md, and the spec's acceptance criteria.
---

# Bellvero Insights — build and verify

**Final source of truth:** `Bellvero_Insights_Technical_Specification_EN.md` at the repo root.
**Design reference:** `DESIGN.md` (distilled from the spec; the spec wins on any conflict).

Never re-derive copy, image prompts, layout sizes or article text. Look them up in the spec and use them verbatim.

## 1. Before touching code

1. Read the spec section for what you are changing: A2 (P25), A3 (P26), A4 (body components), A6 (data model), A7 (SEO), A8 (analytics), B3 (image slots), C1 (UI copy), C7–C9 (articles).
2. Read the matching part of `DESIGN.md`.
3. This Next.js version differs from training data. Check `node_modules/next/dist/docs/` before writing framework code (see `AGENTS.md`).

## 2. Where things live

| Concern | File |
|---|---|
| Listing page P25 | `src/app/[locale]/insights/page.tsx` |
| Article page P26 | `src/app/[locale]/insights/[slug]/page.tsx` |
| Articles, topics, author, related logic | `src/data/insights.ts` |
| Cards (`IN02`, `IN04`, `AR11`) | `src/components/sections/InsightsCard.tsx` |
| Intro / filter / author box | `InsightsHero.tsx`, `InsightsTopicFilter.tsx`, `InsightsAuthorBox.tsx` |
| Body renderer (A4 components) | `src/components/sections/ArticleBody.tsx` |
| TOC, FAQ, copy link, analytics | `ArticleTOC.tsx`, `ArticleFaq.tsx`, `CopyLinkButton.tsx`, `ArticleTracker.tsx` |
| UI strings (C1) | `messages/en.json` and `messages/ru.json`, namespace `Insights` |
| SEO helpers / sitemap | `src/lib/seo.ts`, `src/app/sitemap.ts` |
| Form `F1` | `src/components/ui/EnquiryForm.tsx` (anchor `#project-enquiry`) |
| Images | `public/insights/` with spec file names (B1 naming) |

## 3. Adding or editing an article

1. Take `article_id`, slug, title, seo_title, meta description, standfirst, excerpt, key points, related services and related articles **from the spec** (C6 plan, C7–C9 for launch articles).
2. **EN and RU must both exist.** Never publish one locale only, and keep the same H2s in the same order in both.
3. Body markup in `src/data/insights.ts`:
   - The spec's `####` headings become `## ` (published as H2).
   - Keep `> quote — Sayyed Osaf`, `Callout — Important:` and `Врезка «Важно»:` exactly as the spec writes them.
   - Apply **every** link in the spec's "Internal links:" line as a markdown link, in EN and RU. Do not publish the "Internal links:" line itself.
   - Use this site's real service slugs: approvals → `/services/approvals-noc-permits`, villa renovation → `/services/renovation-fit-out-dubai`, interior design → `/services/interior-design`, joinery → `/services/custom-joinery-furniture`, build from your design → `/process#build-from-your-design`. RU links use the `/ru/...` prefix.
   - Insert inline images at the positions B3 names ("Use" row), with the B3 alt text and caption.
4. `regulatory: true` for INS-001, 004–010, 017 and 044.
5. The cover uses the article's B3 file. With no own cover, use the topic default `ins-topic-[slug].avif`. **Never reuse an unrelated photo as a placeholder.** If an asset is missing, say so rather than faking it.
6. Content rules (C5): no invented numbers, prices, timelines, client stories or quotes. The only prices allowed are the design fees AED 250 / 262.50 and AED 310 / 325.50 per m². Warranty is always 36 months (renovation) and 48 months (cabinetry).

## 4. Verification checklist (run before calling any Insights work done)

Structure and behaviour:
- [ ] P25 and P26 render in EN and RU, and the language switcher on P26 opens the same article.
- [ ] The filter and pagination are plain links and work with JS disabled.
- [ ] Filtered views are `noindex, follow` with canonical `/insights`. Paginated pages use a self canonical and the "— Page n" suffix.
- [ ] The featured article is not duplicated in the page 1 grid. The grid shows 9 per page.
- [ ] No placeholder cards, grey boxes, initials circles or silhouettes. The author photo shows only if `AUTHOR.photo` is a real approved photo.

Per article:
- [ ] Key points (3–5), a last-reviewed date, ≥1 related service, and a working form pre-selected from the first related service.
- [ ] Every "Internal links" item from the spec is a real link in both locales, including ≥1 link to another article.
- [ ] Anchors exist on their targets: `/about#leadership`, `/services/interior-design#fees`, `/process#build-from-your-design`.
- [ ] Regulatory articles show the `C-AR08` disclaimer.
- [ ] The cover and the 2 inline images are the correct B3 files, each with the AI label in `<figcaption>`.

SEO and analytics:
- [ ] `Article` JSON-LD has author as `Person` (`jobTitle`, `worksFor`, `url` → `/about#leadership`), `dateModified` = `lastReviewedAt`. There is no `FAQPage`.
- [ ] The P25 OG image `ins-og-listing.jpg` exists in `public/`.
- [ ] The sitemap includes both locales of every article with `lastmod` = `lastReviewedAt`.
- [ ] GA4 events fire after consent only: `insights_filter`, `article_read_50`, `article_read_90`, `article_service_click`, `article_related_click`, `generate_lead`.

Layout (DESIGN.md, including the 2026-09-25 client amendment):
- [ ] Images, cards, covers and the key-points box use `rounded-lg`, and controls use `rounded-sm`. Nothing is left at 0 or 2 px, and nothing has a shadow.
- [ ] Card images use `.img-zoom` (1.03 zoom and darkening, 200 ms). There is no lift.
- [ ] At ≥1200 the TOC sits in a 3-column left gutter and the body sits in columns 5–10 at max 720 px.
- [ ] At 320 px there is no horizontal scroll and the longest RU title (INS-043) wraps without truncation.
- [ ] Service pages show one "From Insights" link after the FAQ and before the form, only when a relevant article exists (A1).
- [ ] Insights is in the footer "Explore" column after "Our Story". The header only gets it at 10+ articles.

Finish with `npm run lint` and `npm run build`, and report failures verbatim.

## 5. Open owner items (do not resolve by guessing)

- Sayyed Osaf approves the author profile, the three articles and the pull quotes.
- Employer names for the extended bio need written confirmation.
- A real author photo, or confirmation to run without one.
- The regulatory statements in INS-001 are re-checked on the publication day.
