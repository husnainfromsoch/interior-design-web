# Insights Section — Build Reference (condensed)

Source: `Bellvero_Insights_Technical_Specification_EN (1).md` (full spec, kept for the content text and CMS field list). This file is the **short reference to build from** — image-generation prompts (Part B) are intentionally excluded; use the source doc only if new cover art is needed.

Status: **not implemented yet**. No `insights` route, component, or nav entry exists in the repo as of 2026-09-23.

---

## 1. Routes & URLs

| Page | EN | RU | File to create |
|---|---|---|---|
| P25 Listing | `/insights` | `/ru/insights` | `src/app/[locale]/insights/page.tsx` |
| P26 Article | `/insights/[slug]` | `/ru/insights/[slug]` | `src/app/[locale]/insights/[slug]/page.tsx` |

Rules:
- Slug: English, lowercase, hyphenated, **identical across locales**; never changes post-publish (301 if it must).
- Topic filter = query param `?topic=approvals` on listing only; filtered views get canonical `/insights` + `noindex, follow`. No separate topic pages yet (need ≥25 articles first).
- Pagination `?page=2`, indexable, self-canonical, title suffix "— Page 2" / "— страница 2".
- No tag pages, author archive, date archive, or search page.
- Nav: Insights lives in Footer "Explore" column only until 10+ articles published, then also added to header nav between About and Contact (update `src/data/nav.ts`).
- Language switcher on article page → same article, other locale (never listing page).
- Each service page may show one optional "From Insights" text link after FAQ, before form (only if a relevant article exists).
- No Insights block on homepage.

## 2. P25 Listing page sections (`IN01`–`IN07`)

1. **IN01 Intro** — eyebrow + H1 + one intro line, no hero image/banner/search box.
2. **IN02 Featured** — CMS `featured` article (else most recent). Desktop split 7+5 cols; whole card = one link; AI disclosure label under image.
3. **IN03 Topic filter** — "All" + 6 topics as plain links (works without JS), active item underlined + `aria-current="true"`; horizontal scroll on mobile.
4. **IN04 Grid** — 3/2/1 col responsive, cover 3:2, topic label, H3 title (max 3 lines), excerpt (max 2 lines), meta (date · reading time). 9 cards/page after featured, no duplication of featured on page 1.
5. **IN05 Pagination** — Prev/Next + numbers, plain links, hidden if 1 page.
6. **IN06 Empty state** — one line + "View all articles" link when topic has 0 articles.
7. **IN07 Enquiry form** — reuse existing `F1` form component, anchor `#project-enquiry`, service field pre-selected "Not sure yet".

Acceptance: works with JS disabled, no placeholder cards, every cover has AI label, no counters/ratings/pop-ups.

## 3. P26 Article page sections (`AR01`–`AR12`)

1. **AR01** Breadcrumbs Home › Insights › [Topic], `BreadcrumbList` JSON-LD.
2. **AR02** Header: topic label, H1 (drops a size tier if title > 70 chars), standfirst (max 3 sentences).
3. **AR03** Author/date row: photo only if real approved photo exists (never a placeholder/initials/silhouette); name, role, "Published … · Last reviewed … · n min read"; name links to `#author`.
4. **AR04** Cover image, full width ≤1320px, 16:9 desktop / 4:3 mobile, `fetchpriority="high"`, never lazy (this is LCP).
5. **AR05** Key points box ("In short"), 3–5 bullets, mandatory every article.
6. **AR06** Table of contents from H2s — sticky left gutter ≥1200px, collapsed disclosure on tablet/mobile, hidden if <3 H2s.
7. **AR07** Body, 720px column, only components from §4 below.
8. **AR08** Review note ("Last reviewed by [author] on [date]") + regulatory disclaimer if `regulatory: true`.
9. **AR09** Author box `#author`: optional 96×96 photo, name, role, bio, link to `/about#leadership`.
10. **AR10** Related services — 1–2 manual picks, never empty.
11. **AR11** Related articles — 3 cards (manual, fallback to same-topic then any-topic latest; hidden if none exist).
12. **AR12** Enquiry form `F1`, service pre-selected from article's first related service.

Not allowed anywhere on P26: comments, share-count rows, newsletter pop-ups, carousels, viewport progress bars, ads, affiliate links. One "Copy link" text button is allowed near the meta line.

## 4. Rich-text components allowed in article body

Paragraph, H2/H3 only (no H4+), bulleted/numbered list, "Important" callout (max 1/800 words), pull quote, table, checklist, inline image (with bilingual alt + AI disclosure caption), internal link (≥1 to a service page, ≥1 to another article once available), external link (official sources only, `rel="noopener"`, "↗"), optional FAQ block (max 5 Q&A, no `FAQPage` schema). Forbidden: embedded video/social, GIFs, emoji, colored text, text-in-images, stock photos, AI portraits.

## 5. CMS content model (fields to design data/schema around)

**Article**: `article_id`, `locale`, `slug`, `title` (≤90 char), `seo_title` (≤60), `meta_description` (140–160), `standfirst`, `excerpt` (≤180), `topic`, `regulatory` (bool), `author`, `published_at`, `last_reviewed_at`, `reading_time` (auto, words÷200), `key_points` (3–5), `body`, `cover`, `related_services` (1–2, required), `related_articles` (0–3), `featured` (bool, max 1/locale), `status` (draft/in_review/approved/published/archived), `translation_status` (missing/in_progress/complete — **publish blocked unless both locales approved + complete**).

**Topic** (exactly 6, fixed): `topic_id`, `slug`, `name_en/ru`, `description_en/ru`, `default_cover`.
| slug | EN | RU |
|---|---|---|
| approvals | Approvals & Permits | Согласования и разрешения |
| costs | Costs & Budgeting | Стоимость и бюджет |
| materials | Materials & Finishes | Материалы и отделка |
| joinery | Bespoke Joinery | Мебель на заказ |
| design | Design Ideas | Идеи дизайна |
| process | Process & Planning | Процесс и планирование |

**Author** (single record, `AUTH-01`): Sayyed Osaf, Co-Founder & Chief Engineer (see source doc §C4 for full bio text EN/RU). Photo only if real + `publication_consent: true`.

## 6. SEO / structured data

- `Article` JSON-LD on P26 (headline, description, image, datePublished, dateModified=last_reviewed_at, inLanguage, author as Person, publisher as Organization, mainEntityOfPage). `CollectionPage` + `BreadcrumbList` on P25.
- hreflang en/ru/x-default(=en), reciprocal.
- OG image 1200×630 (listing uses one shared image; article covers re-cropped).
- No `FAQPage`/`Review`/`AggregateRating`/`HowTo`/`Speakable`. No RSS this release.
- Sitemap: every published article both locales, `lastmod`=`last_reviewed_at`.

## 7. Analytics (GA4, post-consent)

`insights_filter{topic}`, `article_read_50{article_id,locale}`, `article_read_90{...}`, `article_service_click{article_id,service}`, `article_related_click{article_id,target_id}`, `generate_lead{source_page}`.

## 8. Accessibility / perf

WCAG 2.2 AA, strict heading order (one H1→H2→H3), TOC as `<nav aria-label="Contents">` with `aria-current`, filter row as `<nav aria-label="Topics">` of links (not buttons), bilingual alt text + AI-disclosure in `<figcaption>` (never alt-only), LCP ≤2.5s mobile p75 (featured/article cover), below-fold cards lazy-loaded, covers AVIF/WebP with `srcset` 480/800/1200/1600/2000.

## 9. Editorial rules (content, not code — for whoever writes copy)

- No invented stats/prices/timelines/client stories/reviews/awards.
- Only prices allowed: design fees from AED 250/m² (full design) and AED 310/m² (design+procurement), both ex/incl VAT as published elsewhere on the site.
- No approval-time guarantees. Warranty: 36 months renovation workmanship / 48 months bespoke cabinetry, exact wording only.
- Voice: "we" for company, calm/practical, 2–4 sentence paragraphs, no sales language/exclamation/emoji.
- RU is full adaptation (not literal), same H2 structure/order as EN so TOCs match.
- Structure: title (≤90 char) → standfirst → 3–5 key points → 4–7 H2 sections, 900–1,600 words/language → ≥1 internal service link (+ article link once others exist) → optional FAQ (≤5).

## 10. Interface copy strings (EN / RU) — for `messages/en.json` & `messages/ru.json`

See source doc §C1 for the full table (nav label, eyebrow, H1, intro, "Read the article →", "All", pagination labels, empty state, breadcrumbs, "In short", "Contents", callout "Important", review note, regulatory disclaimer, author box link, "Related services", "More insights", form heading/intro, AI disclosure label "AI-generated image"/"Изображение создано ИИ"). Copy verbatim into the messages files under an `insights` namespace when building.

## 11. Launch content (3 articles, full EN+RU text ready to paste)

All in source doc §C7–C9:
1. `INS-001` — Villa renovation approvals in Dubai (`regulatory: true`, needs Sayyed Osaf fact-check before publish) — slug `villa-renovation-approvals-dubai`
2. `INS-002` — What drives the cost of a villa renovation — slug `villa-renovation-cost-drivers`
3. `INS-003` — Building from your own design — slug `build-from-your-own-design`

48-article content plan (titles, topic, priority, service link) is in source doc §C6 — pull from there when scheduling future articles, no need to re-read the rest of the spec.

## 12. Explicitly out of scope for this file

Part B (image generation prompts/cards) — only open the source doc for that, when new AI cover art needs producing.
