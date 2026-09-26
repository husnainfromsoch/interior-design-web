# BELLVERO GROUP — INSIGHTS SECTION: TECHNICAL SPECIFICATION

**Version:** 1.0 · **Date:** 22.09.2026 · **Status:** Ready for build
**Scope:** two new page types added to the website — P25 Insights listing and P26 Insights article — in English and Russian.
**Recipients:** web developer · AI content creator · content manager · author

---

## Contents

0. Scope and relationship to the main specification
**Part A — Design specification**
A1. Sitemap, URLs and navigation
A2. P25 — Insights listing page
A3. P26 — Article page template
A4. Article content components
A5. Responsive behaviour
A6. CMS content model
A7. SEO and structured data
A8. Analytics
A9. Accessibility and performance
A10. Acceptance criteria
**Part B — Image production specification**
B1. Visual rules for Insights
B2. Master cover prompt for future articles
B3. Image production cards (16 slots)
**Part C — Content specification**
C1. Interface copy (EN / RU)
C2. SEO metadata for the listing page
C3. Topics
C4. Author profile
C5. Editorial rules
C6. Content plan — 48 articles
C7. Launch article 1 — Villa renovation approvals in Dubai (EN / RU)
C8. Launch article 2 — What drives the cost of a villa renovation (EN / RU)
C9. Launch article 3 — Building from your own design (EN / RU)

---

## 0. Scope and relationship to the main specification

1. This document extends `Bellvero_Website_Technical_Specification_EN.md` (the main specification). Everything not defined here is inherited from it without change: header and footer (section 7), design system (section 8), Global AI Visual DNA (section 9), AI disclosure policy and label styling (section 10), media formats (section 11), CMS media structure (section 13), enquiry form `F1` (sections 14 and 17.3), forms and integrations (20), responsive rules (21), SEO (23), analytics and cookies (24), accessibility (25), performance (26), security (27), QA (29).
2. The site grows from 24 to **26 page types** (52 localised URLs). P25 is one page. P26 is one template that renders every article.
3. **Decisions confirmed by the owner:**
   - One section, named **Insights**: a listing page and an article template.
   - Every article is published in **both English and Russian**. An article never goes live in one language only.
   - Articles carry a **real author**: **Sayyed Osaf, Co-Founder & Chief Engineer**. This is a deliberate, scoped exception to the main specification's rule that no personal names appear on the site. The exception applies only to the author byline and author profile inside Insights. Everywhere else the main specification's rule stays in force.
   - The launch set is **three complete articles** plus a **48-article content plan**.
4. **Honesty rules carried over.** No invented statistics, prices, timelines, client stories, reviews, awards or project results. No AI-generated portraits. No AI-generated image that resembles an official document, permit, stamp, certificate or authority logo. Every AI image carries the disclosure label.

---

# PART A — DESIGN SPECIFICATION

## A1. Sitemap, URLs and navigation

| ID | EN URL | RU URL | EN title | RU title |
|---|---|---|---|---|
| P25 | `/insights` | `/ru/insights` | Insights | Статьи |
| P26 | `/insights/[slug]` | `/ru/insights/[slug]` | Article title | Заголовок статьи |

**URL rules**

1. The slug is written in English, lowercase, hyphen-separated, and is **identical in both languages**. Only the `/ru/` prefix differs. Example: `/insights/villa-renovation-approvals-dubai` and `/ru/insights/villa-renovation-approvals-dubai`.
2. A slug is never changed after publication. If it must change, a permanent 301 redirect from the old URL is added in the same release.
3. **Topic filter** is a query parameter on the listing page: `/insights?topic=approvals`. Filtered views carry `<link rel="canonical">` to `/insights` and `noindex, follow`. Separate topic pages (`/insights/topic/approvals`) are **not** built until the section holds at least 25 published articles.
4. **Pagination** uses `/insights?page=2`. Each paginated page is indexable, has a self-referencing canonical, and a unique title suffix "— Page 2" / "— страница 2".
5. No tag pages, no author archive page, no date archives, no search page in this release.

**Navigation**

| Stage | Where Insights is linked |
|---|---|
| Fewer than 10 published articles | Footer column "Explore" only, after "Our Story" |
| 10 or more published articles | Added to the main header menu between "About" and "Contact", and kept in the footer |

The language switcher on P26 switches to the same article in the other language, never to the listing page.

**Contextual links from existing pages**

- Each service page may show one "From Insights" text link to the most relevant article, placed after the FAQ and before the form. Shown only when a relevant article is published; otherwise the link is not rendered.
- The homepage does not show an Insights block in this release.

---

## A2. P25 — Insights listing page

**Purpose.** Let a visitor find a useful article quickly, and show that the company explains its work with facts. Entry sources: Google search, links from service pages, sharing.

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `IN01` Intro | Background `--bg`. Top padding 64 px desktop, 40 px mobile. Eyebrow, H1 (inner page H1 style: 64 / 52 / 38 px), one intro line (large intro style, max 640 px). No hero image, no banner, no search box. | none | `C-IN01` |
| `IN02` Featured article | The article marked `featured` in the CMS; if none is marked, the most recent. Desktop: split 7 + 5 columns, 48 px gap — cover image 16:9 on the left, text on the right vertically centred. Text: topic label (eyebrow style, `--accent`), title (H2 style 48 / 40 / 32 px), excerpt (body, max 3 lines), meta line (author · date · reading time, captions style `--muted`), text link "Read the article →". Mobile: image, then text. The whole card is one link; the text link is visual only and is not a separate tab stop. AI disclosure label under the image. | article cover | `C-IN02` |
| `IN03` Topic filter | A single row of text items: "All" plus the six topics (section C3). Manrope 500 15 px, `--ink`, 32 px gap. Active item: 2 px `--accent` underline, 6 px below the text, and `aria-current="true"`. Items are links to `?topic=…`, so the filter works without JavaScript; with JavaScript the list updates without a full reload and the URL updates. On mobile the row scrolls horizontally inside its own container with a fade on the right edge; the page itself never scrolls sideways. No pills, no background chips, no counts. | none | `C-IN03` |
| `IN04` Article grid | Grid of article cards. Desktop 3 columns, 32 px gap, 56 px row gap; tablet 2 columns; mobile 1 column. Card: cover 3:2 (`object-fit: cover`, radius 0), 16 px below it the topic label (eyebrow style, `--accent`), title (H3 style 30 / 28 / 26 px, max 3 lines, no truncation with ellipsis on desktop), excerpt (body 16 px, `--muted`, max 2 lines), meta line (date · reading time). No shadows, no borders, no background panels. Card heights equal within a row. The whole card is one link. AI disclosure label under every cover (12 / 11 px, `--muted`). 9 cards per page after the featured article. The featured article is not repeated in the grid on page 1. | article covers | `C-IN04` |
| `IN05` Pagination | Centred row: "← Previous", page numbers, "Next →". Current page is text with `aria-current="page"`, not a link. Hidden when there is only one page. No infinite scroll, no "load more" button. | none | `C-IN05` |
| `IN06` Empty state | Shown when a topic has no published articles: one line of text and a link back to "All". Never shows placeholder cards or grey boxes. | none | `C-IN06` |
| `IN07` Enquiry form | `F1` exactly as in the main specification, on `--surface`, anchor `#project-enquiry`. Service field pre-selected to "Not sure yet". | none | `C-F1` |

**Page acceptance.** Listing renders with JavaScript disabled; filter and pagination work as plain links; no placeholder cards; every cover carries the AI label; featured article not duplicated; no counters, ratings, testimonials or pop-ups.

---

## A3. P26 — Article page template

**Purpose.** Answer one real question from a property owner thoroughly and honestly, show engineering competence through facts, and offer the next step without pressure.

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `AR01` Breadcrumbs | Home › Insights › [Topic]. Captions style, `--muted`, 32 px below the header. Topic links to `/insights?topic=…`. `BreadcrumbList` JSON-LD. | none | `C-AR01` |
| `AR02` Article header | Max width 880 px, left-aligned to the text column. Topic label (eyebrow, `--accent`), H1 (inner page H1 style 64 / 52 / 38 px; titles longer than 70 characters drop to 52 / 44 / 34 px), standfirst (large intro style 20 / 19 / 18 px, `--ink`, max 3 sentences). | none | article fields |
| `AR03` Author and dates line | One row under the standfirst, separated from it by 24 px. Author photo 48 × 48 px circle **only if a real photograph has been supplied and approved**; otherwise no image at all (no initials circle, no silhouette, no placeholder). Then: author name (Manrope 600 15 px), role (Manrope 400 14 px, `--muted`), then "Published [date] · Last reviewed [date] · [n] min read" (captions style). The author name links to the author box `#author` at the end of the article. | author photo (real, optional) | `C-AR03` |
| `AR04` Cover image | Full content width up to 1320 px, 16:9 desktop, 4:3 mobile (separate crop from the same file via focal point). Radius 0. AI disclosure label beneath, left-aligned, per main specification 10.3. Optional caption above the label. `fetchpriority="high"`, never lazy-loaded; this is the LCP element. | cover | article fields |
| `AR05` Key points | Directly after the cover, inside the text column. Background `--surface`, padding 32 / 24 px, no border, radius 0. Heading "In short" (Manrope 600 14 px, uppercase, tracking .08em). Three to five bullet points, body style. Mandatory on every article. | none | article field `key_points` |
| `AR06` Table of contents | Generated automatically from the article's H2 headings. Desktop ≥ 1200 px: sticky in the left gutter column (3 columns wide, `top: 120px`), text links Manrope 400 14 px, `--muted`, active heading `--ink` with a 2 px `--accent` left rule. Tablet and mobile: a collapsed "Contents" disclosure after the key points, closed by default. Hidden if the article has fewer than 3 H2 headings. | none | `C-AR06` |
| `AR07` Article body | Text column max width 720 px (about 68 characters per line), positioned in columns 5–10 of 12 on desktop so the table of contents sits to its left. Uses only the components in A4. Body 18 px desktop / 17 px mobile, line height 1.7, paragraph spacing 24 px. H2 36 / 32 / 28 px Cormorant Garamond 500, 64 px above and 20 px below. H3 24 / 22 / 21 px Manrope 600, 40 px above and 12 px below. | inline images | article body |
| `AR08` Review note | Directly after the body. Captions style, `--muted`, 1 px `--line` rule above, 24 px padding top. Text: "Last reviewed by [author] on [date]." plus, for articles tagged `regulatory`, the regulatory disclaimer from `C-AR08`. | none | `C-AR08` |
| `AR09` Author box | Anchor `#author`. Max 720 px. 1 px `--line` rules above and below, 32 px padding. Optional real photo 96 × 96 px; name (H3 style), role (`--accent`, Manrope 500 15 px), short bio (body 16 px, 3–4 lines), text link "How our team works on your project →" to `/about#leadership`. | author photo (real, optional) | `C-AR09`, C4 |
| `AR10` Related services | Heading "Related services". One or two text rows, each: service name as a link plus one line of description. Chosen manually in the CMS; never empty — at least one service is mandatory. No images. | none | `C-AR10` |
| `AR11` Related articles | Heading "More insights". Three article cards identical to `IN04`. Chosen manually in the CMS; if fewer than three are chosen, the remaining slots fill with the latest articles from the same topic, then from any topic. If fewer than three articles exist in total, the block shows as many as exist; if none, the block is hidden. | covers | `C-AR11` |
| `AR12` Enquiry form | `F1`, anchor `#project-enquiry`. Service field pre-selected from the article's first related service. | none | `C-F1` |

**Mobile bottom bar** from the main specification (Discuss Project · WhatsApp) appears on P26 after the cover has scrolled out of view.

**Not allowed on P26:** comments, social share button rows with counters, newsletter pop-ups, "you may also like" carousels, progress bars across the whole viewport, sticky banners other than the standard mobile bar, ads, affiliate links.

A single discreet "Copy link" text button is allowed next to the meta line; on mobile it uses the native share sheet where available.

---

## A4. Article content components

The CMS rich-text editor exposes only these components. Anything else is removed on save.

| Component | Rendering |
|---|---|
| Paragraph | Body style, 720 px column |
| H2, H3 | As in `AR07`. H4 and deeper are not allowed |
| Bulleted list, numbered list | 24 px left indent, 12 px between items, markers in `--accent` |
| Callout "Important" | Left rule 3 px `--accent`, padding 20 / 24 px, background none, label "Important" / "Важно" Manrope 600 14 px uppercase, then body text. Max one per 800 words |
| Pull quote | Cormorant Garamond 500 30 / 26 px, `--ink`, no quotation-mark graphics, 1 px `--line` rules above and below. Only direct statements by the author, never invented client quotes |
| Table | Full 720 px width, Manrope 15 px, header row Manrope 600 on `--surface`, 1 px `--line` row dividers, no vertical rules. Scrolls horizontally inside its own container on mobile |
| Checklist | Numbered list styled with square markers; used for "what to prepare" lists |
| Inline image | Full 720 px column width or "wide" up to 1080 px. Ratio 3:2 or 4:5. Caption (captions style) then AI disclosure label beneath. Alt text in both languages mandatory |
| Internal link | Underlined `--ink`, underline `--accent` on hover. Every article links to at least one service page and at least one other article when one exists |
| External link | Only to official sources (authorities, standards bodies). Opens in the same tab, `rel="noopener"`, marked with a small "↗" |
| FAQ block | Optional, placed at the end of the body. Uses the `Q1` accordion from the main specification. Maximum five questions. `FAQPage` markup is not added (see A7) |

Forbidden in body content: embedded videos from third-party platforms, embedded social posts, GIFs, emoji, coloured text, text in images, stock photographs, AI portraits.

---

## A5. Responsive behaviour

| Width | P25 | P26 |
|---|---|---|
| ≥ 1200 px | Featured split 7 + 5; grid 3 columns | TOC sticky left; text column 720 px |
| 768–1199 px | Featured stacked; grid 2 columns | TOC collapsed "Contents" disclosure; text column max 720 px centred |
| ≤ 767 px | Everything 1 column; filter row scrolls inside its container | Cover 4:3; body 17 px; tables scroll inside container |
| 320 px | No horizontal page scroll; titles wrap, never truncated | Same |

Russian titles run longer than English: every title container must be tested with the longest Russian title in the content plan.

---

## A6. CMS content model

**Article** (one record per language, linked as a translation pair)

| Field | Type | Rules |
|---|---|---|
| `article_id` | text | Shared by the EN and RU records, e.g. `INS-001` |
| `locale` | enum | `en`, `ru` |
| `slug` | text | Identical in both locales, locked after publication |
| `title` | text | Max 90 characters |
| `seo_title` | text | Max 60 characters including " | Bellvero Group" |
| `meta_description` | text | 140–160 characters |
| `standfirst` | text | Max 3 sentences |
| `excerpt` | text | Max 180 characters, for cards |
| `topic` | reference | Exactly one topic from C3 |
| `regulatory` | boolean | Shows the regulatory disclaimer in `AR08` |
| `author` | reference | Author record |
| `published_at` | date | Set on first publication |
| `last_reviewed_at` | date | Set by the author on every review; required |
| `reading_time` | number | Auto: words ÷ 200, rounded up |
| `key_points` | list | 3–5 items |
| `body` | rich text | A4 components only |
| `cover` | media reference | Media record with `asset_type` and disclosure fields from main specification 13 |
| `related_services` | references | 1–2 service pages, required |
| `related_articles` | references | 0–3 articles |
| `featured` | boolean | Only one article per locale can be featured at a time |
| `status` | enum | `draft`, `in_review`, `approved`, `published`, `archived` |
| `translation_status` | enum | `missing`, `in_progress`, `complete`. **Publishing is blocked unless both locales are `approved` and `translation_status` is `complete`** |

**Topic**: `topic_id`, `slug`, `name_en`, `name_ru`, `description_en`, `description_ru`, `default_cover` (media reference).

**Author**: `author_id`, `name` (same in both locales), `role_en`, `role_ru`, `bio_en`, `bio_ru`, `photo` (optional; real photograph only, with a stored `publication_consent: true`), `profile_link` (`/about#leadership`).

**Workflow.** Draft → author review → `approved` → translation → author review of translation → publish both locales together. Articles tagged `regulatory` are re-reviewed every 12 months; the CMS lists articles whose `last_reviewed_at` is older than 12 months.

---

## A7. SEO and structured data

| Item | P25 | P26 |
|---|---|---|
| `<title>` | `C-SEO-P25` | `seo_title` |
| Meta description | `C-SEO-P25` | `meta_description` |
| Canonical | Self (page 1 = `/insights`; filtered views → `/insights`) | Self |
| hreflang | `en`, `ru`, `x-default` (= EN), reciprocal | Same, pointing to the article's pair |
| Open Graph | `IN-IMG-01`, 1200 × 630 | Article cover re-cropped to 1200 × 630 |
| JSON-LD | `CollectionPage` + `BreadcrumbList` | `Article` + `BreadcrumbList` |
| Robots | index, follow (filtered views noindex) | index, follow |
| Sitemap | Included | Every published article, both locales, `lastmod` = `last_reviewed_at` |

**`Article` JSON-LD fields:** `headline`, `description`, `image` (cover URL), `datePublished`, `dateModified` (= `last_reviewed_at`), `inLanguage`, `author` as `Person` (`name`, `jobTitle`, `url` → `/about#leadership`), `publisher` as `Organization` (Bellvero Group, logo URL), `mainEntityOfPage`.

Not added: `FAQPage`, `Review`, `AggregateRating`, `HowTo`, `Speakable`.

An RSS feed is not part of this release.

---

## A8. Analytics

Events (GA4, after consent only, per main specification 24):

| Event | When | Parameters |
|---|---|---|
| `insights_filter` | Topic filter used | `topic` |
| `article_read_50` | 50% of body scrolled | `article_id`, `locale` |
| `article_read_90` | 90% of body scrolled | `article_id`, `locale` |
| `article_service_click` | Related service link clicked | `article_id`, `service` |
| `article_related_click` | Related article clicked | `article_id`, `target_id` |
| `generate_lead` | Form submitted from P25 or P26 | `source_page` = `insights` or `article_id` |

---

## A9. Accessibility and performance

- WCAG 2.2 AA as in the main specification. Headings in strict order: one H1, then H2, then H3.
- Table of contents is a `<nav aria-label="Contents">`. The active-heading highlight is not the only indicator: the link also receives `aria-current="true"`.
- Filter row: `<nav aria-label="Topics">`, links, not buttons.
- Every image: alt text in both languages; the AI disclosure is in `<figcaption>`, never only in alt text.
- LCP ≤ 2.5 s mobile (p75): P25 LCP is the featured cover; P26 LCP is the article cover. Card covers below the first screen are lazy-loaded.
- Covers exported as AVIF / WebP with `srcset` 480 / 800 / 1200 / 1600 / 2000.

---

## A10. Acceptance criteria

1. Both pages exist in EN and RU; the language switcher on an article opens the same article in the other language.
2. Publishing an article in one language only is technically impossible.
3. Filter and pagination work without JavaScript; filtered views are `noindex` with canonical to `/insights`.
4. No placeholder cards, grey boxes, silhouettes or initials circles appear anywhere.
5. Author photo appears only if a real, approved photograph exists.
6. Every AI image carries the visible disclosure label beneath it.
7. Every article has key points, at least one related service, a last-reviewed date and a working form.
8. Articles tagged `regulatory` show the regulatory disclaimer.
9. `Article` JSON-LD validates in Google's Rich Results Test with author as `Person`.
10. No counters, ratings, reviews, testimonials, pop-ups, comment sections or share-count widgets.
11. The longest Russian title in the content plan renders without truncation at 320 px.
12. LCP, INP and CLS targets from the main specification are met on both page types.

---

# PART B — IMAGE PRODUCTION SPECIFICATION

## B1. Visual rules for Insights

1. **Inherit the Global AI Visual DNA** of the main specification (section 9) without change: the same materials, light, colour grading and camera behaviour. An Insights image must look as if it were taken on the same shoot as the rest of the site.
2. **One subject per image, and the subject is the topic.** An article about approvals shows the architecture that approvals concern. An article about joinery shows a joinery detail. Generic "beautiful living room" images are not used as article covers.
3. **Fixed motif per topic.** Each topic has one recurring visual motif, so the grid reads as an ordered editorial series:

| Topic (C3) | Motif | Typical framing |
|---|---|---|
| Approvals & Permits | Architecture in the process of change: an opened wall, a villa façade, a site at an early stage | Exterior or wide interior, straight verticals |
| Costs & Budgeting | Materials laid out side by side at true scale: samples, finishes, hardware | Top-down or 45° still life on stone or oak |
| Materials & Finishes | A single material surface in raking daylight | Close detail, shallow depth of field |
| Bespoke Joinery | A joinery detail: edge, joint, drawer, hinge, handle | Close-up, 50–90 mm |
| Design Ideas | A finished, calm room corner | Medium-wide, eye level |
| Process & Planning | Tools of work: drawings, a sample board, a measuring tape on a work surface — never readable text | Still life, soft window light |

4. **Forbidden in every Insights image:** people, hands, faces, silhouettes; readable text, numbers, letters on drawings or screens; logos or brand names; stamps, seals, permit cards, certificates, government or authority logos, anything that looks like an official document; price tags; before/after split frames; construction workers or safety signage with text; stock-photo looks; AI portraits of the author.
5. **Drawings in images** must be abstract: fine lines of a plan or elevation seen at an angle and out of focus, so that no dimension, word or stamp is legible.
6. **Disclosure.** Every image is `asset_type: ai_illustration` and carries the visible label under the image: "AI-generated image" / «Изображение создано ИИ». On P25 cards and in P26 inline images the label is always visible, never on hover.
7. **Colour of the grid.** Across any row of three cards, at least one image must be predominantly light (plaster, limestone) so the grid never turns dark. The content manager checks the listing after each publication.
8. **Real photographs replace AI images** when the company supplies rights-cleared photographs of its own work (`asset_type: real_photo`, `publication_permission: true`). Then the disclosure label changes accordingly per main specification section 10.

**Export and naming**

| Use | Ratio | Generate at | Export |
|---|---|---|---|
| Article cover | 16:9 master, with a 4:3 and a 3:2 crop from the same file | 2912 × 1638 minimum | 2000 × 1125 (AVIF + WebP), plus 1200 × 800 card crop |
| Inline image | 3:2 or 4:5 | 2400 px long side minimum | 1600 px long side |
| Open Graph | 1.91:1 | 2400 × 1256 | 1200 × 630 JPG, ≤ 300 KB |

File name pattern: `ins-[article_id]-[cover|inline-01|inline-02]-[short-subject].avif`, for example `ins-001-cover-villa-facade-change.avif`. Topic defaults: `ins-topic-[topic-slug].avif`.

Every image record in the CMS stores: prompt used, model and version, seed (when available), date generated, generator account, and the approver's name, as required by main specification section 13.

---

## B2. Master cover prompt for future articles

The content manager uses this template for every new article after the launch set. Fill the bracketed parts from the article's topic motif (B1 table) and its subject. Always append the Global Image Style Prompt (main specification 9.1) and the Insights negative prompt below.

```
[TOPIC MOTIF FRAMING] of [SPECIFIC SUBJECT OF THE ARTICLE], in a contemporary residential property in Dubai, [TWO OR THREE KEY MATERIALS FROM THE VISUAL DNA], soft natural daylight from [DIRECTION], [TIME OF DAY], calm editorial composition with one clear subject and generous negative space on the [LEFT/RIGHT] for cropping, straight architectural verticals, [LENS] full-frame equivalent, camera height [HEIGHT], [DEPTH OF FIELD], quiet documentary realism, no people, no text, no logos
+ Global Image Style Prompt (main specification 9.1)
--ar 16:9 --style raw
```

**Insights negative prompt** (extends main specification 9.3; always used in full):

```
[Global Negative Prompt from main specification 9.3], no people, no hands, no faces, no silhouettes, no workers, no readable text, no numbers, no letters on drawings, no screens with content, no stamps, no seals, no certificates, no permit documents, no government emblems, no authority logos, no official-looking paperwork, no price tags, no currency, no charts, no before-and-after split, no safety signage, no hard hats, no stock photo look, no dramatic sky replacement, no dusk neon, no gold or brass glamour
```

**Approval checklist for every generated image** (content manager, before upload):

1. No text, number or symbol is legible anywhere, including on drawings, tape measures and packaging.
2. No part of the image could be mistaken for a permit, stamp, certificate or authority document.
3. Materials match the Visual DNA; no chrome, no polished brass, no glossy white lacquer unless the article is specifically about it.
4. Verticals are straight; no warped joinery, doubled handles or impossible joints.
5. The 4:3 and 3:2 crops still hold the subject.
6. Alt text in EN and RU written; disclosure label set.

---

## B3. Image production cards

Sixteen slots for the launch. Each card is complete: the "Prompt" field already contains the slot-specific text; append the Global Image Style Prompt (9.1) at the end and use the Insights negative prompt from B2 plus the slot-specific negatives.

### IN-IMG-01 — Open Graph image for the Insights listing

| Field | Value |
|---|---|
| Use | P25 social sharing image (`og:image`, `twitter:image`) |
| Ratio / export | 1.91:1 · 1200 × 630 JPG ≤ 300 KB |
| Composition | A quiet architectural still life: a pale oak work table seen from 45°, a rolled set of drawings (lines only, out of focus), a stack of three stone and timber samples, a matte black pencil. Empty plaster wall behind. Subject in the right half; left half calm for platform crops. |
| Camera / light | 50 mm, height 1.2 m, f/4; soft morning daylight from the left window, long gentle shadows |
| Alt EN | Oak work table with rolled architectural drawings and stone and timber samples in soft daylight |
| Alt RU | Дубовый рабочий стол со свёрнутыми чертежами и образцами камня и дерева при мягком дневном свете |
| Disclosure | AI-generated image / Изображение создано ИИ (not shown on social platforms; stored in CMS) |
| File | `ins-og-listing.jpg` |

Prompt:
```
Editorial still life on a pale natural oak work table seen from a 45 degree angle, a loosely rolled set of architectural drawings with fine abstract lines only and no legible text, a small stack of three material samples in honed beige limestone, warm grey stone and pale oak, one matte black pencil lying parallel to the table edge, a warm off-white mineral plaster wall behind with nothing on it, subject placed in the right half of the frame with calm empty space on the left, soft morning daylight from a window on the left, long gentle shadows, 50 mm full-frame equivalent, camera height 1.2 meters, f/4 depth of field, quiet documentary realism --ar 1.91:1 --style raw
```
Extra negatives: `no laptop, no coffee cup, no plants in pots, no readable drawing annotations`

### IN-IMG-02 — Topic default cover: Approvals & Permits

| Field | Value |
|---|---|
| Use | Default cover for topic `approvals` when an article has no own cover; also topic OG crop |
| Ratio / export | 16:9 master · 2000 × 1125 · card crop 3:2 |
| Composition | Contemporary two-storey Dubai villa façade in warm off-white render, seen straight-on from the garden. One ground-floor opening is visibly being altered: temporary timber props and a neat protective sheet, no workers. Clean paving, one olive tree at the edge. Villa occupies the centre and right; open sky on the left third. |
| Camera / light | 35 mm, height 1.6 m, f/8; mid-morning sun from the right, soft shadows |
| Alt EN | Contemporary villa façade in Dubai with one ground-floor opening under alteration |
| Alt RU | Фасад современной виллы в Дубае, где переделывается один проём на первом этаже |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-topic-approvals.avif` |

Prompt:
```
Straight-on exterior view of a contemporary two-storey villa in a Dubai residential community, warm off-white smooth render walls, slim matte black window frames, deep flat roof overhang, one ground-floor opening in the middle of the facade visibly under alteration with neat temporary timber props and a clean pale protective sheet, no workers present, tidy beige limestone paving in the foreground, a single mature olive tree at the left edge, clear pale blue sky occupying the left third, mid-morning sun from the right, soft realistic shadows, 35 mm full-frame equivalent, camera height 1.6 meters, f/8, architectural documentary realism --ar 16:9 --style raw
```
Extra negatives: `no scaffolding with banners, no signs, no permit boards, no construction vehicles, no dust clouds`

### IN-IMG-03 — Topic default cover: Costs & Budgeting

| Field | Value |
|---|---|
| Use | Default cover for topic `costs` |
| Ratio / export | 16:9 · 2000 × 1125 |
| Composition | Top-down still life on honed limestone: a row of material samples ordered from simple to premium — painted plaster board, engineered oak, solid oak, walnut, porcelain tile, natural stone — with two cabinet hinges and one handle. No labels, no numbers, no money. |
| Camera / light | 60 mm macro look, directly overhead, f/5.6; soft window light from the top of the frame |
| Alt EN | Row of finish samples from plaster to natural stone laid out on a limestone surface |
| Alt RU | Ряд образцов отделки — от штукатурки до натурального камня — на поверхности из известняка |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-topic-costs.avif` |

Prompt:
```
Top-down flat lay on a honed beige limestone surface, a single neat horizontal row of rectangular material samples of equal size ordered from left to right: warm off-white painted plaster board, engineered pale oak, solid pale oak, walnut veneer, matte porcelain tile, warm grey natural stone, below the row two matte black concealed cabinet hinges and one slim matte black handle placed with precise spacing, generous empty limestone around the composition, soft diffused window light falling from the top of the frame, subtle natural shadows, 60 mm macro full-frame equivalent, camera directly overhead, f/5.6, calm editorial product still life --ar 16:9 --style raw
```
Extra negatives: `no labels, no price tags, no coins, no banknotes, no calculator, no charts, no paper with numbers`

### IN-IMG-04 — Topic default cover: Materials & Finishes

| Field | Value |
|---|---|
| Use | Default cover for topic `materials` |
| Ratio / export | 16:9 · 2000 × 1125 |
| Composition | The meeting line of three surfaces: mineral plaster wall, oak skirting detail and limestone floor, in raking afternoon light that reveals texture. |
| Camera / light | 85 mm, height 0.6 m, f/4; low raking sun from the left |
| Alt EN | Close view of plaster wall, oak skirting and limestone floor meeting in raking light |
| Alt RU | Крупный план стыка штукатурной стены, дубового плинтуса и пола из известняка в боковом свете |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-topic-materials.avif` |

Prompt:
```
Close architectural detail of the junction where a warm off-white mineral plaster wall meets a slim flush pale oak skirting and a honed beige limestone floor, low raking late afternoon sunlight from the left revealing the fine trowel texture of the plaster, the grain of the oak and the soft pores of the limestone, precise shadow gap between wall and skirting, clean real-world material scale, 85 mm full-frame equivalent, camera height 0.6 meters, f/4 with gentle falloff, quiet tactile realism --ar 16:9 --style raw
```
Extra negatives: `no dust, no damage, no cables, no sockets`

### IN-IMG-05 — Topic default cover: Bespoke Joinery

| Field | Value |
|---|---|
| Use | Default cover for topic `joinery` |
| Ratio / export | 16:9 · 2000 × 1125 |
| Composition | A pale oak drawer half open inside a tall wardrobe, showing the dovetail-free precise corner, soft-close runner and a walnut inner tray. Edge of an open door on the right. |
| Camera / light | 70 mm, height 1.0 m, f/4; soft daylight from the left |
| Alt EN | Half-open oak drawer with walnut tray inside a built-in wardrobe |
| Alt RU | Приоткрытый дубовый ящик с ореховым лотком внутри встроенного шкафа |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-topic-joinery.avif` |

Prompt:
```
Close view inside a tall built-in wardrobe in pale natural oak, one wide drawer pulled half open showing its precise mitred corner, the thin matte black edge of a concealed soft-close runner and a fitted walnut inner tray, the edge of an open oak door on the right side of the frame, even reveals and perfectly aligned gaps, soft natural daylight from the left, subtle shadows inside the carcass, 70 mm full-frame equivalent, camera height 1.0 meter, f/4, crafted furniture detail photography --ar 16:9 --style raw
```
Extra negatives: `no clothes with brand labels, no jewellery, no chrome runners, no misaligned fronts, no doubled handles`

### IN-IMG-06 — Topic default cover: Design Ideas

| Field | Value |
|---|---|
| Use | Default cover for topic `design` |
| Ratio / export | 16:9 · 2000 × 1125 |
| Composition | A calm living room corner: linen sofa end, limestone side table, a single terracotta ceramic, oak shelving built into the wall, sheer curtain filtering daylight. |
| Camera / light | 40 mm, height 1.3 m, f/5.6; diffused daylight through sheer curtains from the right |
| Alt EN | Quiet living room corner with linen sofa, built-in oak shelving and a terracotta vase |
| Alt RU | Спокойный угол гостиной с льняным диваном, встроенными дубовыми полками и терракотовой вазой |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-topic-design.avif` |

Prompt:
```
Quiet corner of a contemporary villa living room in Dubai, the end of a low sofa upholstered in sand linen, a small honed limestone side table with one muted terracotta ceramic vase, pale oak shelving built flush into a warm off-white plaster wall holding three objects only, sheer bone-coloured curtains filtering soft daylight from the right, honed beige limestone floor, generous negative space on the left, 40 mm full-frame equivalent, camera height 1.3 meters, f/5.6, calm editorial interior photography --ar 16:9 --style raw
```
Extra negatives: `no books with readable spines, no artwork with figures, no television, no clutter`

### IN-IMG-07 — Topic default cover: Process & Planning

| Field | Value |
|---|---|
| Use | Default cover for topic `process` |
| Ratio / export | 16:9 · 2000 × 1125 |
| Composition | On a limestone kitchen island inside an unfinished interior: a folded set of drawings (lines only), a closed retractable tape measure, a sample of oak and stone. Background softly out of focus: primed walls, a window. |
| Camera / light | 50 mm, height 1.1 m, f/2.8; soft side daylight from the window behind-left |
| Alt EN | Drawings, tape measure and material samples on a stone surface inside an interior under renovation |
| Alt RU | Чертежи, рулетка и образцы материалов на каменной поверхности в помещении на этапе ремонта |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-topic-process.avif` |

Prompt:
```
Still life on a warm grey natural stone island inside a villa interior under renovation, a folded set of architectural drawings showing only fine abstract lines with no legible text, a closed matte black retractable tape measure with no visible markings facing the camera, one pale oak sample and one limestone sample, background softly out of focus showing freshly primed off-white walls and a large window, soft side daylight from behind left, 50 mm full-frame equivalent, camera height 1.1 meters, f/2.8 shallow depth of field, calm documentary realism --ar 16:9 --style raw
```
Extra negatives: `no visible tape numbers, no tools with brand names, no helmets, no dust, no mess`

### IN-IMG-08 — Cover, launch article INS-001 (Approvals)

| Field | Value |
|---|---|
| Use | Cover of C7 "Villa renovation approvals in Dubai" |
| Ratio / export | 16:9 master · 4:3 mobile crop · 3:2 card crop |
| Composition | Interior of a villa ground floor in the middle of a layout change: a wall has been partly opened, a steel temporary beam supported on props spans the new opening, the room beyond is bright. Everything clean and orderly. The opening sits at the centre; the 4:3 crop keeps it. |
| Camera / light | 28 mm, height 1.5 m, f/8; daylight from the garden windows beyond the opening |
| Alt EN | Villa interior where a wall is being opened, with a temporary beam supported on props |
| Alt RU | Интерьер виллы, где открывается проём в стене, с временной балкой на стойках |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-001-cover-wall-opening.avif` |

Prompt:
```
Wide interior view of a contemporary villa ground floor during a planned layout change, a partly removed internal wall creating a new wide opening in the centre of the frame, a clean matte grey temporary steel beam across the top of the opening supported on two neat adjustable steel props, freshly cut plaster edges, floor protected by clean pale sheeting, the room beyond the opening bright with daylight from large garden windows, orderly and swept site, no workers present, 28 mm full-frame equivalent with corrected verticals, camera height 1.5 meters, f/8, architectural documentary realism --ar 16:9 --style raw
```
Extra negatives: `no rubble piles, no exposed rebar chaos, no warning tape with text, no stickers, no documents`

### IN-IMG-09 — Cover, launch article INS-002 (Costs)

| Field | Value |
|---|---|
| Use | Cover of C8 "What drives the cost of a villa renovation" |
| Ratio / export | 16:9 · 4:3 · 3:2 |
| Composition | Two material choices for the same kitchen side by side on a stone worktop: on the left a simple matte painted door sample and a porcelain slab offcut; on the right a solid oak door sample and a natural stone offcut. Two different handles. The comparison is visible without any words. |
| Camera / light | 50 mm, height 1.2 m at 30° down, f/5.6; soft window light from the left |
| Alt EN | Two sets of kitchen finish samples compared side by side on a stone worktop |
| Alt RU | Два набора образцов кухонной отделки, разложенные для сравнения на каменной столешнице |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-002-cover-finish-comparison.avif` |

Prompt:
```
Editorial still life on a warm grey natural stone kitchen worktop seen from 30 degrees above, two small groups of kitchen finish samples placed side by side with a clear gap between them, left group: a matte warm off-white painted cabinet door sample, a pale porcelain slab offcut and a simple slim matte black bar handle, right group: a solid pale oak cabinet door sample with visible grain, a honed natural stone offcut and a sculpted matte black pull handle, blurred kitchen joinery in the background, soft window light from the left, 50 mm full-frame equivalent, camera height 1.2 meters, f/5.6, calm documentary product realism --ar 16:9 --style raw
```
Extra negatives: `no price tags, no labels, no numbers, no paper, no calculator, no brand marks on samples`

### IN-IMG-10 — Cover, launch article INS-003 (Build from your design)

| Field | Value |
|---|---|
| Use | Cover of C9 "Building from your own design" |
| Ratio / export | 16:9 · 4:3 · 3:2 |
| Composition | Split in depth, not a split frame: in the foreground on an oak table, an open set of interior drawings (lines only, out of focus); behind it, in focus, the finished room that matches the drawing — a built-in oak wall unit with a limestone niche. |
| Camera / light | 35 mm, height 1.2 m, f/4 focused on the background; afternoon daylight from the right |
| Alt EN | Interior drawings in the foreground and the finished oak wall unit built from them behind |
| Alt RU | Чертежи интерьера на переднем плане и выполненная по ним дубовая стенка на заднем |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-003-cover-drawing-to-room.avif` |

Prompt:
```
Interior view with strong depth, in the soft out-of-focus foreground an open set of interior elevation drawings lying on a pale oak table showing only fine abstract lines with no legible text or numbers, in sharp focus in the background the finished room built from them: a full-height built-in pale natural oak wall unit with a recessed honed limestone niche and concealed linear lighting switched off, warm off-white plaster walls, honed beige limestone floor, afternoon daylight from the right, 35 mm full-frame equivalent, camera height 1.2 meters, f/4 focused on the background, calm editorial realism --ar 16:9 --style raw
```
Extra negatives: `no split screen, no before-and-after frame, no legible title block, no stamps on drawings`

### IN-IMG-11 — INS-001 inline 1: master community villa street

| Field | Value |
|---|---|
| Use | C7, after the section "The route depends on where the villa is" |
| Ratio / export | 3:2 · 1600 × 1067 · column width |
| Composition | A quiet street in a master-planned villa community: consistent villa façades, matching boundary walls, palm trees, clean paving. Shows why community guidelines exist, without any signage. |
| Camera / light | 35 mm, height 1.6 m, f/8; late morning |
| Alt EN | Street of villas with consistent façades in a master-planned community in Dubai |
| Alt RU | Улица с виллами в едином стиле в мастер-сообществе Дубая |
| Caption EN / RU | Communities apply their own design guidelines to external changes. / Сообщества применяют собственный регламент к внешним изменениям. |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-001-inline-01-community-street.avif` |

Prompt:
```
Quiet residential street in a master-planned villa community in Dubai, a row of contemporary two-storey villas with consistent warm off-white render facades, matching low boundary walls in beige stone, regularly spaced date palms, clean paved road and footpath, no cars, no people, late morning sun with soft shadows, one-point perspective along the street, 35 mm full-frame equivalent, camera height 1.6 meters, f/8, architectural documentary realism --ar 3:2 --style raw
```
Extra negatives: `no street signs, no community name, no gates with logos, no cars, no house numbers`

### IN-IMG-12 — INS-001 inline 2: work that usually needs a permit

| Field | Value |
|---|---|
| Use | C7, in the section "What usually requires approval" |
| Ratio / export | 4:5 · 1280 × 1600 |
| Composition | Opened ceiling in a villa corridor showing HVAC ductwork and cable trays being rerouted, clean and orderly — the kind of change to services that the article describes. |
| Camera / light | 24 mm looking up at 30°, f/8; even daylight from a nearby window |
| Alt EN | Open ceiling in a villa corridor with air-conditioning ducts and cable trays being rerouted |
| Alt RU | Открытый потолок в коридоре виллы с перекладкой воздуховодов и кабельных лотков |
| Caption EN / RU | Changes to engineering systems usually require approval. / Изменения инженерных систем обычно требуют согласования. |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-001-inline-02-open-ceiling.avif` |

Prompt:
```
View looking up at 30 degrees in a villa corridor under renovation, a section of false ceiling removed exposing neatly installed insulated air conditioning ductwork and galvanised cable trays being rerouted, tidy hangers and supports, freshly primed off-white walls below, even daylight from a nearby window, orderly clean site, no workers, 24 mm full-frame equivalent with corrected verticals, f/8, technical documentary realism --ar 4:5 --style raw
```
Extra negatives: `no labels on ducts, no stickers, no warning signs, no dangling cables, no mess`

### IN-IMG-13 — INS-002 inline 1: hidden work

| Field | Value |
|---|---|
| Use | C8, in the section "The work you do not see" |
| Ratio / export | 3:2 · 1600 × 1067 |
| Composition | A bathroom at the waterproofing stage: floor and lower walls coated with a grey-green waterproofing membrane, drain in place, pipes capped. Shows the stage that is invisible after tiling. |
| Camera / light | 28 mm, height 1.4 m, f/8; daylight from a small frosted window |
| Alt EN | Villa bathroom at the waterproofing stage before tiling |
| Alt RU | Ванная комната виллы на этапе гидроизоляции до укладки плитки |
| Caption EN / RU | Waterproofing, services and substrates decide much of the cost and all of the durability. / Гидроизоляция, коммуникации и основания определяют значительную часть стоимости и всю долговечность. |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-002-inline-01-waterproofing.avif` |

Prompt:
```
Villa bathroom under renovation at the waterproofing stage, floor and lower half of the walls evenly coated with a smooth grey green liquid waterproofing membrane with reinforcing tape at the corners, a linear floor drain set in place, plumbing points neatly capped, upper walls primed off-white, soft daylight from a small frosted window, clean orderly site, no workers, 28 mm full-frame equivalent with corrected verticals, camera height 1.4 meters, f/8, technical documentary realism --ar 3:2 --style raw
```
Extra negatives: `no product buckets with labels, no brand names, no tools lying around, no dirt`

### IN-IMG-14 — INS-002 inline 2: specification level

| Field | Value |
|---|---|
| Use | C8, in the section "Specification level" |
| Ratio / export | 4:5 · 1280 × 1600 |
| Composition | Close view of a finished kitchen corner: stone worktop edge, oak doors, integrated handle profile, a tap in matte black. The quality level is carried by the details. |
| Camera / light | 70 mm, height 1.0 m, f/4; soft daylight from the left |
| Alt EN | Detail of a kitchen corner with stone worktop, oak doors and a matte black tap |
| Alt RU | Деталь угла кухни: каменная столешница, дубовые фасады и чёрный матовый смеситель |
| Caption EN / RU | The same layout can be specified at very different levels. / Одна и та же планировка может быть выполнена на очень разном уровне. |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-002-inline-02-kitchen-detail.avif` |

Prompt:
```
Close detail of a finished contemporary kitchen corner, 20 millimetre honed warm grey natural stone worktop with a crisp eased edge, pale natural oak cabinet doors with a recessed integrated handle profile, a slim matte black kitchen tap, perfectly even door gaps, soft natural daylight from the left, subtle reflections on the stone, 70 mm full-frame equivalent, camera height 1.0 meter, f/4, crafted interior detail photography --ar 4:5 --style raw
```
Extra negatives: `no appliances with logos, no food, no chrome, no glossy lacquer`

### IN-IMG-15 — INS-003 inline 1: drawing review

| Field | Value |
|---|---|
| Use | C9, in the section "What we review first" |
| Ratio / export | 3:2 · 1600 × 1067 |
| Composition | A set of printed drawings spread on a large oak table next to a laptop that is closed, a scale ruler and three coloured pencils; lines only, no legible text. |
| Camera / light | 50 mm, overhead at 60°, f/5.6; soft window light |
| Alt EN | Printed interior drawings spread on an oak table with a scale ruler and pencils |
| Alt RU | Распечатанные чертежи интерьера на дубовом столе с масштабной линейкой и карандашами |
| Caption EN / RU | Drawings are checked against the property and the approvals before scope is agreed. / Чертежи сверяются с объектом и разрешениями до согласования состава работ. |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-003-inline-01-drawing-review.avif` |

Prompt:
```
Several large printed architectural interior drawings spread and slightly overlapping on a pale natural oak table, seen from 60 degrees above, fine abstract plan and elevation lines only with no legible text, numbers or title blocks, a matte black triangular scale ruler with no visible markings, three pencils in terracotta, graphite and ochre, a closed matte grey laptop at the top edge, soft window light from the left, 50 mm full-frame equivalent, f/5.6, calm documentary realism --ar 3:2 --style raw
```
Extra negatives: `no readable text, no dimensions, no stamps, no signatures, no logos on laptop`

### IN-IMG-16 — INS-003 inline 2: joinery from a designer's drawings

| Field | Value |
|---|---|
| Use | C9, in the section "Joinery from your designer's drawings" |
| Ratio / export | 4:5 · 1280 × 1600 |
| Composition | Workshop scene: a finished oak cabinet front standing upright on a clean workbench, a sample stone top beside it; background a calm, clean joinery workshop softly out of focus. No people. |
| Camera / light | 50 mm, height 1.2 m, f/2.8; soft skylight from above |
| Alt EN | Finished oak cabinet front and stone sample on a clean workbench in a joinery workshop |
| Alt RU | Готовый дубовый фасад и образец камня на чистом верстаке в столярном цехе |
| Caption EN / RU | Manufacturing starts after technical measurement and approved shop drawings. / Изготовление начинается после технического замера и согласованных производственных чертежей. |
| Disclosure | AI-generated image / Изображение создано ИИ |
| File | `ins-003-inline-02-workshop.avif` |

Prompt:
```
Clean contemporary joinery workshop, a finished tall pale natural oak cabinet front standing upright on a pale birch workbench, beside it a small honed warm grey stone worktop sample, background softly out of focus showing orderly panel storage racks and a large window, clean dust-free surfaces, soft diffused skylight from above, no people, 50 mm full-frame equivalent, camera height 1.2 meters, f/2.8 shallow depth of field, crafted documentary realism --ar 4:5 --style raw
```
Extra negatives: `no machines with brand names, no safety posters, no workers, no clutter, no hands`

---

# PART C — CONTENT SPECIFICATION

## C1. Interface copy (EN / RU)

All interface strings are stored in the CMS translation table. Russian copy is written for Russian-speaking property owners in the UAE: formal "вы", lowercase "вы/ваш" inside sentences, no anglicisms where a normal Russian word exists (but "NOC" stays as is, as in the main specification).

| Ref | Element | EN | RU |
|---|---|---|---|
| `C-NAV` | Footer / header link | Insights | Статьи |
| `C-IN01` | Eyebrow | Bellvero Group · Insights | Bellvero Group · Статьи |
| `C-IN01` | H1 | Insights | Статьи о ремонте и дизайне |
| `C-IN01` | Intro | Practical notes on design, approvals, renovation and joinery in Dubai and Abu Dhabi, written by our engineering team. | Практические материалы о дизайне, согласованиях, ремонте и мебели на заказ в Дубае и Абу-Даби от нашей инженерной команды. |
| `C-IN02` | Featured link | Read the article → | Читать статью → |
| `C-IN02` | Featured label (screen readers) | Featured article | Главная статья |
| `C-IN03` | Filter label (screen readers) | Topics | Темы |
| `C-IN03` | First item | All | Все |
| `C-IN04` | Meta pattern | [Date] · [n] min read | [Дата] · [n] мин чтения |
| `C-IN04` | Date format | 22 September 2026 | 22 сентября 2026 |
| `C-IN05` | Previous | ← Previous | ← Назад |
| `C-IN05` | Next | Next → | Далее → |
| `C-IN05` | Page (screen readers) | Page [n] | Страница [n] |
| `C-IN05` | Title suffix | — Page [n] | — страница [n] |
| `C-IN06` | Empty state | There are no articles in this topic yet. | В этой теме пока нет статей. |
| `C-IN06` | Link | View all articles → | Все статьи → |
| `C-AR01` | Breadcrumbs | Home › Insights › [Topic] | Главная › Статьи › [Тема] |
| `C-AR03` | Meta line | Published [date] · Last reviewed [date] · [n] min read | Опубликовано [дата] · Проверено [дата] · [n] мин чтения |
| `C-AR03` | Copy link | Copy link | Скопировать ссылку |
| `C-AR03` | Copied confirmation | Link copied | Ссылка скопирована |
| `C-AR05` | Key points heading | In short | Коротко |
| `C-AR06` | Table of contents | Contents | Содержание |
| `C-AR07` | Callout label | Important | Важно |
| `C-AR08` | Review note | Last reviewed by [author] on [date]. | Проверено: [автор], [дата]. |
| `C-AR08` | Regulatory disclaimer | This article is a general guide, not a determination for your property. Requirements depend on the property, the responsible authorities and the actual scope of works, and they change over time. We confirm the applicable route for your specific property before any work is planned. | Эта статья — общий ориентир, а не заключение по вашему объекту. Требования зависят от объекта, ответственных органов и фактического состава работ и со временем меняются. Применимый маршрут для вашего объекта мы подтверждаем до планирования работ. |
| `C-AR09` | Author box link | How our team works on your project → | Как наша команда работает над вашим проектом → |
| `C-AR09` | Author box label (screen readers) | About the author | Об авторе |
| `C-AR10` | Heading | Related services | Связанные услуги |
| `C-AR11` | Heading | More insights | Другие статьи |
| `C-AR12` | Form heading | Discuss Your Project | Обсудить ваш проект |
| `C-AR12` | Form intro | Have a question about your own property? Share a few details and our client relations manager will contact you. | Есть вопрос по вашему объекту? Расскажите немного о нём, и наш менеджер по работе с клиентами свяжется с вами. |
| `C-AI` | Disclosure label | AI-generated image | Изображение создано ИИ |
| `C-F1` | Enquiry form | Inherited from the main specification without change | Из основной спецификации без изменений |

---

## C2. SEO metadata for the listing page

**`C-SEO-P25`**

| Element | EN | RU |
|---|---|---|
| `<title>` | Renovation & Design Insights \| Bellvero Group | Статьи о ремонте и дизайне \| Bellvero Group |
| Meta description | Practical guides on villa renovation, approvals, interior design and bespoke joinery in Dubai and Abu Dhabi, from the Bellvero Group engineering team. | Практические материалы о ремонте вилл, согласованиях, дизайне интерьера и мебели на заказ в Дубае и Абу-Даби от инженерной команды Bellvero Group. |
| H1 | Insights | Статьи о ремонте и дизайне |
| OG image | `IN-IMG-01` | `IN-IMG-01` |

---

## C3. Topics

Exactly six topics. A new topic is added only by the owner's decision and only when at least five articles exist for it.

| `topic_id` | Slug | EN name | RU name | EN description (for CMS and meta) | RU description | Default cover |
|---|---|---|---|---|---|---|
| T1 | `approvals` | Approvals & Permits | Согласования и разрешения | How renovation and fit-out approvals work in Dubai and Abu Dhabi, and what to settle before design. | Как устроены согласования ремонта и отделки в Дубае и Абу-Даби и что решить до начала проектирования. | `IN-IMG-02` |
| T2 | `costs` | Costs & Budgeting | Стоимость и бюджет | What shapes a renovation budget, how quotations are built and how changes are approved. | Из чего складывается бюджет ремонта, как составляется смета и как согласуются изменения. | `IN-IMG-03` |
| T3 | `materials` | Materials & Finishes | Материалы и отделка | Choosing floors, walls, stone and timber that suit the climate and the way you live. | Выбор полов, стен, камня и дерева с учётом климата и образа жизни. | `IN-IMG-04` |
| T4 | `joinery` | Bespoke Joinery | Мебель на заказ | Kitchens, wardrobes and built-in furniture: planning, hardware and manufacturing. | Кухни, шкафы и встроенная мебель: планирование, фурнитура и производство. | `IN-IMG-05` |
| T5 | `design` | Design Ideas | Идеи дизайна | Layouts, light and palettes for calm, practical homes and workspaces. | Планировки, свет и палитры для спокойных и удобных домов и офисов. | `IN-IMG-06` |
| T6 | `process` | Process & Planning | Процесс и планирование | How a project runs from the first visit to handover and warranty. | Как проходит проект — от первого выезда до сдачи и гарантии. | `IN-IMG-07` |

---

## C4. Author profile

**Author record `AUTH-01`**

| Field | EN | RU |
|---|---|---|
| Name | Sayyed Osaf | Sayyed Osaf (written in Latin letters in both languages) |
| Role | Co-Founder & Chief Engineer | Сооснователь и главный инженер |
| Short bio (author box `AR09`, 3–4 lines) | Sayyed Osaf leads the technical direction of Bellvero Group. Before co-founding the family business, he held chief engineer positions with UAE contracting companies on large residential, commercial and public buildings in Dubai and Abu Dhabi. He reviews every Insights article for technical accuracy. | Sayyed Osaf руководит техническим направлением Bellvero Group. До основания семейного бизнеса он занимал должность главного инженера в подрядных компаниях ОАЭ на крупных жилых, коммерческих и общественных объектах Дубая и Абу-Даби. Он проверяет каждую статью раздела на техническую точность. |
| Extended bio (JSON-LD `description`, 1 paragraph) | Sayyed Osaf is Co-Founder and Chief Engineer of Bellvero Group, a family-led interior design, renovation and bespoke joinery company serving Dubai and Abu Dhabi. Before the family business, he held chief engineer positions with UAE contracting companies on large residential, commercial and public buildings. At Bellvero Group he is responsible for the technical review of designs before works start, the coordination of mechanical, electrical and plumbing works with the interior, and the approvals route of each project. | Sayyed Osaf — сооснователь и главный инженер Bellvero Group, семейной компании, которая занимается дизайном интерьера, ремонтом и мебелью на заказ в Дубае и Абу-Даби. До семейного бизнеса он занимал должность главного инженера в подрядных компаниях ОАЭ на крупных жилых, коммерческих и общественных объектах. В Bellvero Group он отвечает за техническую проверку проектов до начала работ, увязку инженерных систем с интерьером и маршрут согласований каждого проекта. |
| Photo | None until a real photograph with `publication_consent: true` is supplied. No AI portrait, no placeholder. | — |
| Profile link | `/about#leadership` | `/ru/about#leadership` |

**Rules for the author profile**

1. The bio text above uses only the facts already confirmed in the main specification (section C-P20-A03). Before publication Sayyed Osaf reads and approves both language versions; his approval date is stored in the author record.
2. Names of former employers, named buildings, years and project sizes are **not** published until he confirms each of them in writing. When confirmed, they are added as one extra sentence to the extended bio, in the pattern "His previous roles include [role] at [employer] on [project type]." They are never presented as Bellvero Group projects.
3. The byline appears on every article, including articles drafted by a content writer: Sayyed Osaf is the **author and technical reviewer**, and nothing is published under his name that he has not read and approved.
4. The name is shown identically in EN and RU. In Russian running text it is not declined.
5. Structured data: `author` in `Article` JSON-LD is `{"@type": "Person", "name": "Sayyed Osaf", "jobTitle": "Co-Founder & Chief Engineer", "worksFor": {"@type": "Organization", "name": "Bellvero Group"}, "url": "https://[domain]/about#leadership"}`. `sameAs` (e.g. LinkedIn) is added only if he supplies the URL.

---

## C5. Editorial rules

**Purpose of every article.** Answer one real question a property owner asks before or during a project, completely and honestly, and show how the company thinks, not how big it is.

**Facts and claims**

1. No invented statistics, percentages, prices, durations, project counts, client stories, quotes, reviews or awards. If a number is not a confirmed company fact or a published official figure with a link, it is not written.
2. The only prices that may appear are the confirmed design fees from the main specification: **from AED 250/m² excluding VAT (AED 262.50/m² including VAT)** for Full Interior Design and **from AED 310/m² excluding VAT (AED 325.50/m² including VAT)** for Interior Design & Procurement. No renovation, joinery or approval prices are published.
3. No timelines for authority approvals, no "guaranteed approval", no statements about how fast any authority works.
4. Warranty periods, when mentioned, are quoted exactly: 36 months for renovation workmanship and 48 months for Bellvero bespoke cabinetry, each from documented handover of the relevant works, as defined in the project documents.
5. Payment arrangements are described only with the wording of `C-PAY-SHORT`.
6. Authorities, platforms and portals are named only as in the main specification (Dubai Municipality, Build in Dubai, TAMM) or with a link to their official site. Every regulatory statement is checked against the official source on the day of review.
7. Concept projects are always called concept projects. Nothing in an article implies they were built.

**Voice**

- First person plural ("we") for the company; the author speaks in the first person only in pull quotes.
- Calm, specific, practical. Short paragraphs of 2–4 sentences. No sales phrases ("best in Dubai", "luxury at affordable prices", "free quote"), no exclamation marks, no emoji.
- Each article ends with a practical takeaway, never with a hard sales push. The form below the article is the only call to action.
- Russian is a full adaptation, not a literal translation: natural sentence order, Russian terms for building works, the same facts and the same structure (the same H2 sections in the same order, so the table of contents matches).

**Structure of every article**

1. Title that states the question or the answer (max 90 characters; RU may be longer but must fit the 320 px test).
2. Standfirst: who this is for and what they will know after reading.
3. Key points: 3–5 statements that are true on their own.
4. 4–7 H2 sections. Length 900–1,600 words per language.
5. At least one internal link to a service page and, once others exist, one link to another article.
6. Optional FAQ block (max 5 questions).

**Notation in the article texts (C7–C9).** `####` lines inside the article texts are the article's H2 headings (published as H2); lines starting with `>` are pull quotes; paragraphs starting with "Callout — Important:" / «Врезка «Важно»:» are the Important callout component (A4); the "Internal links" line under each text tells the content manager which phrases to link and is not published.

**Review cycle**

| Article type | Review | Who |
|---|---|---|
| Regulatory (`regulatory: true`) | Before publication and every 12 months, or immediately when a rule changes | Sayyed Osaf |
| All other articles | Before publication and every 24 months | Sayyed Osaf |
| Russian version | Every time the English version changes; both are republished together | Translator, then Sayyed Osaf |

On every review the `last_reviewed_at` date is updated even if nothing changed.

**Publication cadence.** Launch with the three articles in C7–C9. Then two articles per month in the order of the priority column of C6. Quality over volume: an article that has not passed author review is not published to keep a schedule.

---

## C6. Content plan — 48 articles

Eight articles per topic. `INS-001` to `INS-003` are the launch articles written in full in C7–C9. Titles may be refined by the author, but the question each article answers stays fixed. All service references are page IDs from the main specification (section 4). Priority sets the order of production: Launch → High → Medium → Low.

### T1 Approvals & Permits

| ID | EN title | RU title | Reader's question | Service link | Priority |
|---|---|---|---|---|---|
| `INS-001` | Villa renovation approvals in Dubai: how the route is decided | Согласование ремонта виллы в Дубае: как определяется маршрут | Do I need a permit, and from whom? | P11 | Launch |
| `INS-004` | What a community NOC is and when you need one | Что такое NOC сообщества и когда он нужен | My villa is in a community. What comes first? | P11 | High |
| `INS-005` | Interior-only work: when a villa still needs a permit | Только внутренние работы: когда вилле всё равно нужно разрешение | I'm not touching the façade. Do I still need approval? | P11, P05 | High |
| `INS-006` | Apartment renovation: building management approval explained | Ремонт квартиры: как устроено согласование с управляющей компанией | What does my building need before works start? | P06, P11 | High |
| `INS-007` | Adding a pool, pergola or canopy: what to check first | Бассейн, пергола или навес: что проверить в первую очередь | Can I add an outdoor structure to my villa? | P04, P11 | Medium |
| `INS-008` | Office fit-out approvals in Dubai: the order of steps | Согласования для отделки офиса в Дубае: порядок шагов | What must be approved before an office fit-out? | P07, P11 | Medium |
| `INS-009` | Renovating in Abu Dhabi: how the process differs from Dubai | Ремонт в Абу-Даби: чем процесс отличается от Дубая | Is Abu Dhabi the same as Dubai? | P11 | Medium |
| `INS-010` | Continuing an application another contractor started | Если заявку начал другой подрядчик: как её продолжить | My previous contractor left mid-application. What now? | P11 | Low |

### T2 Costs & Budgeting

| ID | EN title | RU title | Reader's question | Service link | Priority |
|---|---|---|---|---|---|
| `INS-002` | What drives the cost of a villa renovation | Из чего складывается стоимость ремонта виллы | Why do quotations for the same villa differ so much? | P05 | Launch |
| `INS-011` | How to read a renovation quotation line by line | Как читать смету на ремонт построчно | What should a proper quotation contain? | P05 | High |
| `INS-012` | Interior design fees: what is included per square metre | Стоимость дизайн-проекта: что входит в цену за квадратный метр | What do I get for a design fee? | P03 | High |
| `INS-013` | Variations: how additional work is priced and approved | Дополнительные работы: как они рассчитываются и согласовываются | What happens if the scope changes mid-project? | P05 | High |
| `INS-014` | Payment schedules in renovation contracts | График платежей в договоре на ремонт | How are payments usually structured? | P19 | Medium |
| `INS-015` | Where spending more pays off in a renovation, and where it does not | Где в ремонте стоит вложиться, а где можно сэкономить | Where should the budget go first? | P05 | Medium |
| `INS-016` | Bespoke kitchen cost: what changes the price | Кухня на заказ: что влияет на цену | Why do two kitchens of the same size cost differently? | P09 | Medium |
| `INS-017` | Authority fees, deposits and service fees: what is what | Сборы органов, депозиты и оплата услуг: что есть что | Which costs are ours and which are the authority's? | P11 | Low |

### T3 Materials & Finishes

| ID | EN title | RU title | Reader's question | Service link | Priority |
|---|---|---|---|---|---|
| `INS-018` | Limestone, porcelain or marble for villa floors | Известняк, керамогранит или мрамор для пола виллы | Which floor suits a family villa? | P13 | High |
| `INS-019` | Choosing finishes for the Dubai climate | Выбор отделки с учётом климата Дубая | What survives heat, humidity and sand? | P13 | High |
| `INS-020` | Engineered or solid oak: where each belongs | Инженерная доска или массив дуба: где что уместно | Is solid wood always better? | P13, P08 | Medium |
| `INS-021` | Mineral plaster or paint: choosing a wall finish | Минеральная штукатурка или краска: чем отделать стены | Is decorative plaster worth it? | P13 | Medium |
| `INS-022` | Bathroom surfaces that stay good for years | Отделка ванной, которая служит годами | What should a bathroom be finished with? | P05 | Medium |
| `INS-023` | Worktops compared: natural stone, quartz and sintered stone | Сравнение столешниц: натуральный камень, кварц и спечённый камень | Which worktop for a kitchen that is used every day? | P09 | Medium |
| `INS-024` | Glass in interiors: partitions, doors and shower screens | Стекло в интерьере: перегородки, двери и душевые ограждения | Where does glass work well at home? | P08 | Low |
| `INS-025` | Samples and sign-off: how materials are approved | Образцы и утверждение: как согласуются материалы | How do I avoid surprises when the material arrives? | P13 | Low |

### T4 Bespoke Joinery

| ID | EN title | RU title | Reader's question | Service link | Priority |
|---|---|---|---|---|---|
| `INS-026` | How a bespoke wardrobe is made, from measurement to installation | Как изготавливается шкаф на заказ: от замера до монтажа | What happens after I order a wardrobe? | P10 | High |
| `INS-027` | Plan the kitchen layout before choosing finishes | Сначала планировка кухни, потом отделка | Where do I start with a new kitchen? | P09 | High |
| `INS-028` | Hinges, runners and handles: hardware that decides daily use | Петли, направляющие и ручки: фурнитура, от которой зависит удобство | Does hardware really matter? | P08 | Medium |
| `INS-029` | Built-in or freestanding furniture in a villa | Встроенная или отдельностоящая мебель в вилле | What should be built in? | P08 | Medium |
| `INS-030` | Dressing room planning: dimensions that work | Планирование гардеробной: размеры, которые работают | How much space does a dressing room need? | P10 | Medium |
| `INS-031` | Veneer, lacquer or solid timber fronts | Шпон, эмаль или массив: какие фасады выбрать | Which cabinet front suits my home? | P08 | Medium |
| `INS-032` | What shop drawings are and why you approve them | Что такое производственные чертежи и зачем их утверждать | Why am I asked to sign drawings before manufacturing? | P08 | Low |
| `INS-033` | Caring for oak and stone furniture | Уход за мебелью из дуба и камня | How do I keep joinery looking good? | P22 | Low |

### T5 Design Ideas

| ID | EN title | RU title | Reader's question | Service link | Priority |
|---|---|---|---|---|---|
| `INS-034` | Planning a villa layout around family life | Планировка виллы под жизнь семьи | How do I plan rooms around how we live? | P03 | High |
| `INS-035` | Daylight in Dubai interiors: working with the sun | Дневной свет в интерьерах Дубая: как работать с солнцем | How do I get light without heat? | P03 | High |
| `INS-036` | Connecting the interior with the garden | Как связать интерьер и сад | How do inside and outside feel like one space? | P04 | Medium |
| `INS-037` | Lighting design: layers, not fixtures | Освещение: слои, а не светильники | How do I plan lighting properly? | P03, P12 | Medium |
| `INS-038` | Designing storage from the start | Хранение, продуманное с самого начала | How do I avoid clutter in a new interior? | P03, P10 | Medium |
| `INS-039` | A calm palette: combining oak, stone and plaster | Спокойная палитра: как сочетать дуб, камень и штукатурку | How do I choose materials that work together? | P03 | Medium |
| `INS-040` | A home office in a villa or apartment | Домашний кабинет в вилле или квартире | Where and how do I fit a workspace at home? | P03 | Low |
| `INS-041` | A small apartment that feels generous | Небольшая квартира, в которой просторно | How do I make a small apartment work harder? | P06 | Low |

### T6 Process & Planning

| ID | EN title | RU title | Reader's question | Service link | Priority |
|---|---|---|---|---|---|
| `INS-003` | Building from your own design: how we take over the project | Реализация вашего готового дизайна: как мы принимаем проект | I already have a designer. Can you build it? | P19 #build-from-your-design | Launch |
| `INS-042` | The first site visit: what happens and what to prepare | Первый выезд на объект: что происходит и что подготовить | What should I have ready for the first visit? | P19 | High |
| `INS-043` | Scope, specification and exclusions: why they come first | Состав работ, спецификация и исключения: почему с них всё начинается | Why so many questions before a quotation? | P19 | High |
| `INS-044` | Coordinating MEP with the interior before works start | Увязка инженерных систем с интерьером до начала работ | Why do ceilings and AC get redone on so many sites? | P12 | High |
| `INS-045` | Renovating while abroad: following a project remotely | Ремонт, пока вы за границей: как следить за проектом удалённо | Can I renovate without being in Dubai? | P19 | Medium |
| `INS-046` | Inspection and handover: how finished work is checked | Приёмка и передача: как проверяется готовая работа | What happens at handover? | P19 | Medium |
| `INS-047` | Warranty after renovation: what it covers and what it does not | Гарантия после ремонта: что покрывается, а что нет | What if something goes wrong after handover? | P22 | Medium |
| `INS-048` | Renovating an occupied home: phasing and protection | Ремонт в доме, где вы живёте: этапы и защита | Can we stay at home during works? | P05 | Low |

**Regulatory flag.** Articles INS-001 and INS-004 to INS-010, INS-017 and INS-044 are published with `regulatory: true`.

**Length check.** The longest Russian title in the plan (INS-043) must render without truncation on a 320 px screen in the card and in the article header (A10, criterion 11).

---
## C7. Launch article 1 — Villa renovation approvals in Dubai

**Pre-publication requirement.** This article is `regulatory: true`. Before publication Sayyed Osaf checks every statement against the current official sources (Dubai Municipality, the Build in Dubai platform, the TAMM portal and the relevant community's published guidelines), corrects anything that has changed, and records his approval. The text deliberately contains no fees, no review periods and no promise of approval.

| Field | EN | RU |
|---|---|---|
| `article_id` | INS-001 | INS-001 |
| `slug` | `villa-renovation-approvals-dubai` | `villa-renovation-approvals-dubai` |
| Topic | Approvals & Permits | Согласования и разрешения |
| `regulatory` | true | true |
| Title | Villa Renovation Approvals in Dubai: How the Route Is Decided | Согласование ремонта виллы в Дубае: как определяется маршрут |
| `seo_title` | Villa Renovation Approvals in Dubai \| Bellvero Group | Согласование ремонта виллы в Дубае \| Bellvero Group |
| Meta description | Who approves a villa renovation in Dubai depends on where the villa is, not on the work. How the route is set, what usually needs a permit and what to prepare. | Кто согласует ремонт виллы в Дубае, зависит от её расположения, а не от вида работ. Как определяется маршрут, что обычно требует разрешения и что подготовить. |
| Standfirst | Before a villa renovation is designed, one question has to be answered: who approves it. This guide explains why the answer depends on the location of the villa, which works usually need approval, and what to prepare before the first conversation. | Прежде чем проектировать ремонт виллы, нужно ответить на один вопрос: кто его согласует. Разбираем, почему ответ зависит от расположения виллы, какие работы обычно требуют разрешения и что подготовить к первому разговору. |
| Excerpt | Who approves a villa renovation depends on where the villa is. How the route is decided and why it comes before design. | Кто согласует ремонт виллы, зависит от того, где она находится. Как определяется маршрут и почему это решается до дизайна. |
| Related services | P11 Approvals & NOCs · P05 Villa Renovation | P11 Согласования и NOC · P05 Ремонт вилл |
| Related articles | INS-004, INS-005, INS-003 (INS-003 until the others are published) | то же |
| Cover / inline | `IN-IMG-08` · `IN-IMG-11` · `IN-IMG-12` | то же |

**Key points (EN)**

- In Dubai, the location of the villa decides which authority issues the permit, which drawing format is accepted and whether a community NOC comes first.
- Layout changes, structural work, extensions, external changes and changes to services usually require approval. Finishes alone usually do not.
- A community or building management may require notification even where no authority permit applies.
- The route should be confirmed before design work begins, because approval requirements shape the design itself.
- No one can honestly guarantee an approval by a fixed date.

**Key points (RU)**

- В Дубае расположение виллы определяет, какой орган выдаёт разрешение, в каком формате принимаются чертежи и нужен ли сначала NOC сообщества.
- Изменение планировки, работы с конструкциями, пристройки, изменения фасада и инженерных систем обычно требуют согласования. Только отделка — обычно нет.
- Управляющая компания сообщества или здания может требовать уведомления даже там, где разрешение органа не нужно.
- Маршрут нужно подтвердить до начала проектирования: требования согласований влияют на сам дизайн.
- Никто не может честно гарантировать получение разрешения к определённой дате.

### C7-EN. Article body — English

#### Approval in Dubai is not one process

Owners often ask us a simple question: "Do I need a permit for my renovation?" The honest first answer is another question: where is the villa?

In Dubai, approval is not a single procedure that every property follows. Which authority issues the permit, which drawing format it accepts, and whether a community No Objection Certificate (NOC) is needed first are decided mainly by the location of the property. The type of work matters too, but it comes second. Two identical renovations in two different communities can follow two different routes.

That is why identifying the correct route is the first thing we do on any villa project, and we do it before design work begins.

#### The route depends on where the villa is

In practice, most villa and apartment projects in Dubai and Abu Dhabi fall into one of four situations.

| Where the property is | What usually comes first | Who issues the permit |
|---|---|---|
| Independent villa on Dubai mainland | No master-developer layer | Dubai Municipality, through the Build in Dubai platform |
| Villa in a master community | The community's own NOC, reviewed against its design guidelines | The authority with jurisdiction over that community |
| Apartment or office in a building | Building management approval | The authority responsible for that zone; in some Dubai zones this is not the municipality |
| Property in Abu Dhabi | A different emirate and a different system | The responsible department, through the TAMM portal |

The second row is where most villa owners are. In a master community, the developer or community management has its own guidelines for what a villa may look like from the outside, and sometimes for how works must be carried out. Their NOC is usually the first step, and the authority permit follows.

This table is a map, not a ruling. The exact route for a specific villa is confirmed by checking the community, the plot and the proposed works together.

#### Why this is settled before the design, not after

It is tempting to design first and "sort out the permits" later. On a villa, that order is expensive.

Approval requirements shape the design itself. External changes, structural openings, extensions, a new pool, changes to electrical, water or air-conditioning loads: each carries its own requirement. In a master community, the external appearance is also reviewed against guidelines written specifically for that community. A design developed without these constraints in mind is often redrawn later, and redrawing costs time on a project that has already started.

Drawing format matters as much as content. Authorities do not share a single submission format, and a set prepared for one authority can be rejected by another without its content being assessed. Establishing the route first is what prevents this.

> The cheapest moment to meet an approval requirement is before the first line of the design is drawn. — Sayyed Osaf

#### What usually requires approval

The following is a general guide. It is based on how requirements are commonly applied, not on your property, and it is always checked case by case.

**Usually requires approval:**

- removing or adding walls and changing the layout;
- any work that affects the structure;
- extensions and additions to the built-up area;
- changes to the external appearance, including windows, cladding and roof elements;
- pools, canopies and permanent outdoor structures;
- relocating drainage and water points;
- changes to electrical load or distribution;
- modifying air-conditioning ducting and equipment.

**Usually does not, but is still checked:**

- painting;
- replacing floor and wall finishes;
- replacing sanitary fixtures without relocating services;
- furniture and non-structural false ceilings.

Callout — Important: Even where no authority permit applies, the community or building management may still require notification before works start, and may set rules on working hours, access and site protection. Check this before the first contractor arrives.

#### What we do on the approvals side

When a client asks us to handle approvals, the work follows the same four steps on every project:

1. **Review the proposed works and confirm the applicable route** for that specific property.
2. **Prepare the required drawings** in the format the authority accepts.
3. **Coordinate the submissions** and respond to comments.
4. **Track the status** and keep the client informed.

Approvals are coordinated by our engineering lead. Our service fee, authority charges and any deposits are always shown as separate items in the proposal, so the client can see which costs are ours and which are not.

What we do not do is promise a date. Decisions and review periods depend on the approving parties and on how complete the application is. A contractor who guarantees an approval date is promising something that is not in their control.

#### What to prepare before the first conversation

You do not need a complete document pack to start. For a first discussion, it helps to have:

1. The location of the property, including the community name if it is in one.
2. Any plans you have: original drawings from the developer, previous renovation drawings, or even a clear floor plan.
3. A description of the changes you are considering, in your own words.
4. Any approvals already obtained for earlier works.

After reviewing the case, we confirm which further documents are needed. We never ask for ownership documents through a public website form.

#### The practical takeaway

If you are planning a villa renovation in Dubai, start by confirming the approval route for your property, then design within it. It is a short step at the beginning that avoids redrawing and delays later. If you are unsure which route applies to your villa, we can check it with you before any design work begins.

**FAQ block (EN)**

1. **Can I order approvals without a renovation?** — Yes. Drawings and approval support can be commissioned separately.
2. **Are authority fees included in your price?** — Our service fee, authority charges and any deposits are identified separately in the proposal.
3. **Can you guarantee approval by a fixed date?** — No. Decisions and review periods depend on the approving parties and on the completeness and scope of the application.
4. **Can you continue an application someone else started?** — We can review its current status and advise what is required before confirming our involvement.

Internal links: "Approvals & NOCs" → `/services/approvals`; "villa renovation" → `/services/villa-renovation`; "confirm the approval route" → `#project-enquiry`.

### C7-RU. Текст статьи — русский

#### Согласование в Дубае — это не одна процедура

Владельцы вилл часто задают нам простой вопрос: «Нужно ли разрешение на мой ремонт?» Честный первый ответ — встречный вопрос: где находится вилла?

В Дубае согласование — не единая процедура для всех объектов. Какой орган выдаёт разрешение, в каком формате он принимает чертежи и нужен ли сначала NOC (No Objection Certificate) от сообщества, определяется прежде всего расположением объекта. Вид работ тоже важен, но он вторичен. Два одинаковых ремонта в двух разных сообществах могут идти по двум разным маршрутам.

Поэтому определение правильного маршрута — первое, что мы делаем на любом проекте виллы, и делаем это до начала проектирования.

#### Маршрут зависит от того, где находится вилла

На практике большинство проектов вилл и квартир в Дубае и Абу-Даби относятся к одной из четырёх ситуаций.

| Где находится объект | Что обычно идёт первым | Кто выдаёт разрешение |
|---|---|---|
| Отдельная вилла на материковой части Дубая | Слоя управляющей компании нет | Муниципалитет Дубая через платформу Build in Dubai |
| Вилла в мастер-сообществе | NOC сообщества, который проверяется по его дизайн-регламенту | Орган, в чьей юрисдикции находится сообщество |
| Квартира или офис в здании | Согласование управляющей компании здания | Орган, отвечающий за эту зону; в отдельных зонах Дубая это не муниципалитет |
| Объект в Абу-Даби | Другой эмират и другая система | Профильный департамент через портал TAMM |

Большинство владельцев вилл находятся во второй строке. В мастер-сообществе у девелопера или управляющей компании есть собственный регламент того, как вилла может выглядеть снаружи, а иногда и того, как должны вестись работы. Их NOC обычно становится первым шагом, а разрешение органа следует за ним.

Эта таблица — карта, а не заключение. Точный маршрут для конкретной виллы подтверждается проверкой сообщества, участка и планируемых работ вместе.

#### Почему это решается до дизайна, а не после

Хочется сначала сделать дизайн, а «разрешения решить потом». Для виллы такой порядок обходится дорого.

Требования согласований влияют на сам дизайн. Изменения фасада, проёмы в конструкциях, пристройки, новый бассейн, изменение нагрузок на электрику, водоснабжение или кондиционирование — у каждого пункта свои требования. В мастер-сообществе внешний вид дополнительно проверяется по регламенту, написанному именно для этого сообщества. Дизайн, разработанный без учёта этих ограничений, часто приходится переделывать, а переделка стоит времени на уже начатом проекте.

Формат чертежей важен не меньше содержания. У разных органов разные требования к подаче, и комплект, подготовленный для одного, может быть отклонён другим без рассмотрения по существу. Именно поэтому маршрут определяется первым.

> Дешевле всего выполнить требование согласования до того, как проведена первая линия проекта. — Sayyed Osaf

#### Какие работы обычно требуют согласования

Ниже — общий ориентир. Он основан на том, как требования обычно применяются, а не на вашем объекте, и всегда проверяется в каждом конкретном случае.

**Обычно требуют согласования:**

- снос и возведение стен, изменение планировки;
- любые работы, затрагивающие конструкции;
- пристройки и увеличение застроенной площади;
- изменение внешнего вида, включая окна, облицовку и элементы кровли;
- бассейны, навесы и постоянные наружные конструкции;
- перенос точек водоснабжения и канализации;
- изменение электрической нагрузки и распределения;
- изменение воздуховодов и оборудования кондиционирования.

**Обычно не требуют, но проверяются:**

- покраска;
- замена напольных и настенных покрытий;
- замена сантехнических приборов без переноса коммуникаций;
- мебель и неконструктивные подвесные потолки.

Врезка «Важно»: даже там, где разрешение органа не нужно, управляющая компания сообщества или здания может требовать уведомления до начала работ и устанавливать правила по времени работ, доступу и защите территории. Уточните это до приезда первой бригады.

#### Что мы делаем по согласованиям

Когда клиент поручает нам согласования, работа на каждом проекте идёт в четыре шага:

1. **Изучаем планируемые работы и подтверждаем применимый маршрут** для конкретного объекта.
2. **Готовим необходимые чертежи** в формате, который принимает орган.
3. **Подаём документы** и отрабатываем замечания.
4. **Отслеживаем статус** и информируем клиента.

Согласования координирует руководитель нашего инженерного направления. Стоимость наших услуг, сборы органов и возможные депозиты всегда указываются в предложении отдельными строками, чтобы клиент видел, какие расходы наши, а какие нет.

Чего мы не делаем — не обещаем дату. Решение и сроки рассмотрения зависят от согласующих сторон и от полноты заявки. Подрядчик, который гарантирует дату получения разрешения, обещает то, что от него не зависит.

#### Что подготовить к первому разговору

Полный пакет документов для начала не нужен. Для первого обсуждения полезно иметь:

1. Местоположение объекта, включая название сообщества, если вилла в нём находится.
2. Имеющиеся планы: исходные чертежи девелопера, чертежи прошлых ремонтов или хотя бы понятный план этажа.
3. Описание изменений, которые вы рассматриваете, своими словами.
4. Разрешения, уже полученные на прежние работы.

После изучения задачи мы уточняем, какие ещё документы понадобятся. Документы о праве собственности через форму на сайте мы не запрашиваем.

#### Практический вывод

Если вы планируете ремонт виллы в Дубае, начните с подтверждения маршрута согласований для вашего объекта и проектируйте уже в его рамках. Это короткий шаг в начале, который избавляет от переделок и задержек потом. Если вы не уверены, какой маршрут применим к вашей вилле, мы можем проверить это вместе с вами до начала проектирования.

**Блок FAQ (RU)**

1. **Можно заказать согласования без ремонта?** — Да. Подготовку документации и сопровождение согласований можно заказать отдельно.
2. **Сборы органов входят в вашу цену?** — Стоимость наших услуг, сборы и возможные депозиты указываются в предложении отдельно.
3. **Гарантируете получение разрешения к определённой дате?** — Нет. Решение и сроки рассмотрения зависят от согласующих сторон, полноты и содержания заявки.
4. **Можете продолжить заявку, начатую другим подрядчиком?** — Изучим её текущий статус и определим необходимые действия до подтверждения участия.

Внутренние ссылки: «Согласования и NOC» → `/ru/services/approvals`; «ремонт виллы» → `/ru/services/villa-renovation`; «подтвердить маршрут» → `#project-enquiry`.

---

## C8. Launch article 2 — What drives the cost of a villa renovation

**Content rule for this article.** No renovation prices, no price ranges per square metre, no percentages of budget. The only figures allowed are the confirmed design fees and warranty periods from the main specification.

| Field | EN | RU |
|---|---|---|
| `article_id` | INS-002 | INS-002 |
| `slug` | `villa-renovation-cost-drivers` | `villa-renovation-cost-drivers` |
| Topic | Costs & Budgeting | Стоимость и бюджет |
| `regulatory` | false | false |
| Title | What Drives the Cost of a Villa Renovation | Из чего складывается стоимость ремонта виллы |
| `seo_title` | What Drives Villa Renovation Cost \| Bellvero Group | Стоимость ремонта виллы \| Bellvero Group |
| Meta description | Why quotations for the same villa can differ so much: scope, hidden works, specification, joinery and approvals, and how to get a quotation you can compare. | Почему сметы на одну и ту же виллу так отличаются: объём работ, скрытые работы, уровень отделки, мебель и согласования, и как получить сравнимую смету. |
| Standfirst | Two quotations for the same villa can be far apart, and neither is necessarily wrong. This article explains what actually moves the cost of a renovation, which parts you never see after handover, and how to get a quotation that can be compared line by line. | Две сметы на одну и ту же виллу могут сильно различаться, и ни одна не обязательно ошибочна. Разбираем, что на самом деле влияет на стоимость ремонта, какие работы не видны после сдачи и как получить смету, которую можно сравнить построчно. |
| Excerpt | Scope, hidden works, specification level, joinery and approvals: what really moves the cost of a villa renovation. | Объём работ, скрытые работы, уровень отделки, мебель и согласования: что на самом деле определяет стоимость ремонта виллы. |
| Related services | P05 Villa Renovation · P03 Interior Design | P05 Ремонт вилл · P03 Дизайн интерьера |
| Related articles | INS-001, INS-003 | то же |
| Cover / inline | `IN-IMG-09` · `IN-IMG-13` · `IN-IMG-14` | то же |

**Key points (EN)**

- The cost of a renovation is set mostly by scope and specification, not by floor area alone.
- Works hidden after handover (waterproofing, services, substrates) decide much of the cost and all of the durability.
- A complete design and specification before the quotation is the most reliable way to keep the budget stable.
- Quotations can only be compared when they describe the same scope, the same specification and the same exclusions.
- Additional work should be quoted and approved before it starts.

**Key points (RU)**

- Стоимость ремонта определяется прежде всего составом работ и уровнем отделки, а не только площадью.
- Работы, скрытые после сдачи (гидроизоляция, коммуникации, основания), определяют значительную часть стоимости и всю долговечность.
- Полный дизайн-проект и спецификация до расчёта сметы — самый надёжный способ удержать бюджет.
- Сметы можно сравнивать, только если в них одинаковый состав работ, одинаковая спецификация и одинаковые исключения.
- Дополнительные работы должны рассчитываться и согласовываться до их начала.

### C8-EN. Article body — English

#### Why "how much per square metre?" is the wrong first question

It is the question almost everyone asks first, and it is understandable: a single number feels like control. The difficulty is that a renovation is not bought by the square metre. It is bought by scope and specification. The same 400 m² villa can be refreshed with new paint and finishes, or opened up, re-plumbed, rewired and fitted with new joinery throughout. Both are "renovations", and the difference between them is far larger than any difference in contractors' rates.

So instead of a rate, this article looks at what actually moves the cost, in the order in which it usually matters.

#### 1. What is touched: scope

The largest single factor is how deeply the works go into the building.

- **Surface works**: painting, new floor and wall finishes, replacing fixtures in their existing positions.
- **Layout works**: moving or removing walls, new openings, relocating a kitchen or bathroom.
- **Services works**: new electrical distribution, relocated drainage and water points, new or modified air-conditioning.
- **Envelope and outdoor works**: windows, façade elements, pools, canopies, landscape.

Each step down this list usually brings the next with it. Moving a bathroom means moving drainage; moving a kitchen means new electrical circuits and extraction. It also changes the approvals picture, which we cover in our guide to [villa renovation approvals](/insights/villa-renovation-approvals-dubai).

#### 2. The work you do not see

After handover, a client sees stone, oak and plaster. What they do not see is often what the budget was spent on.

- **Waterproofing** in bathrooms, balconies and terraces.
- **Substrates**: levelling screeds, wall preparation, ceiling structures.
- **Services** inside walls and ceilings: cabling, pipework, ducting.
- **Protection** of the parts of the house that are not being renovated.

This is also where quotations differ most quietly. One quotation may include a full waterproofing system with tests, another a single coat. On paper they are both "waterproofing". Three years later, they are not the same bathroom.

> The part of a renovation that nobody photographs is the part that decides how long everything else lasts. — Sayyed Osaf

#### 3. Specification level

The same layout can be specified at very different levels. A kitchen wall can be finished in paint or in stone; a floor in porcelain or in limestone; a door in a standard leaf or a full-height concealed one. Hardware, sanitaryware, lighting and glass follow the same logic.

Specification is where the client has the most control, and where a design pays for itself: when every finish is chosen and written down before the quotation, the price describes what will actually be installed, instead of an allowance that is revised later.

#### 4. Bespoke joinery

Kitchens, wardrobes, vanities and built-in storage are often a large part of a villa renovation. Their cost depends on:

- the construction and board materials;
- the fronts: veneer, lacquer or solid timber;
- the hardware: hinges, runners, lift systems;
- the worktops and any stone or glass elements;
- the complexity of installation.

Because we manufacture cabinetry in our own production, joinery is quoted from the approved drawings and after technical measurement, not from a catalogue estimate.

#### 5. Design and documentation

A renovation without complete drawings is priced on assumptions, and assumptions are where budgets move. The design is not an extra cost on top of the renovation; it is what turns the renovation into a defined price.

Our design fees are published: **Full Interior Design from AED 250/m² excluding VAT (AED 262.50/m² including VAT)**, and **Interior Design & Procurement from AED 310/m² excluding VAT (AED 325.50/m² including VAT)**, which adds material and furniture sourcing, supplier coordination and order tracking. What is included in each package is set out on our [interior design page](/services/interior-design#fees).

#### 6. Approvals and site conditions

Approval requirements, community rules on working hours and access, whether the family is living in the house during works, and how materials reach the site all affect the programme, and therefore the cost. These items are identified during the site visit and written into the scope, rather than discovered later.

#### How to get a quotation you can compare

Two quotations can only be compared when they describe the same thing. Before comparing prices, check that each one:

1. Lists the **scope** room by room, not as one lump sum.
2. States the **specification** of finishes, fixtures and joinery, or clearly marks allowances.
3. Lists **exclusions**: what is not included, such as authority fees, furniture or appliances.
4. Explains **how additional work is handled**. With us, additional works are quoted and approved before they start.
5. Sets out the **payment schedule**. Ours is agreed before work begins and recorded in the contract: it sets out the initial payment, the payments that follow and the conditions for each. Manufacturing and material purchases may be scheduled as separate payments.
6. States the **warranty**. Ours is 36 months for renovation workmanship and 48 months for our bespoke cabinetry, each from documented handover of the relevant works.

Callout — Important: A lower quotation that leaves out waterproofing detail, services or protection is not cheaper; it is describing a different project.

#### The practical takeaway

Decide the scope first, fix the specification second, and ask for a price third. If you already have a design, a contractor can price it precisely; if you do not, a design is the most direct way to a budget that holds. Either way, the first site visit is where the cost drivers of your particular villa become clear.

Internal links: "villa renovation approvals" → INS-001; "interior design page" → `/services/interior-design#fees`; "Villa Renovation" → `/services/villa-renovation`.

### C8-RU. Текст статьи — русский

#### Почему «сколько стоит квадратный метр?» — не тот первый вопрос

Этот вопрос почти все задают первым, и это понятно: одна цифра создаёт ощущение контроля. Сложность в том, что ремонт покупается не квадратными метрами, а составом работ и уровнем отделки. Одну и ту же виллу площадью 400 м² можно освежить покраской и новой отделкой, а можно полностью перепланировать, заменить сантехнику, электрику и поставить новую мебель по всему дому. Оба варианта — «ремонт», и разница между ними намного больше любой разницы в расценках подрядчиков.

Поэтому вместо расценки разберём, что на самом деле влияет на стоимость, в том порядке, в котором это обычно важно.

#### 1. Что затрагивается: состав работ

Самый большой фактор — насколько глубоко работы заходят в здание.

- **Отделочные работы**: покраска, новые покрытия пола и стен, замена приборов на прежних местах.
- **Перепланировка**: перенос и снос стен, новые проёмы, перенос кухни или ванной.
- **Инженерные системы**: новая разводка электрики, перенос канализации и точек водоснабжения, новое или изменённое кондиционирование.
- **Фасад и участок**: окна, элементы фасада, бассейн, навесы, ландшафт.

Каждый шаг вниз по этому списку обычно тянет за собой следующий. Перенос ванной означает перенос канализации; перенос кухни — новые электрические линии и вытяжку. Меняется и картина согласований, о которой мы пишем в статье о [согласовании ремонта виллы](/ru/insights/villa-renovation-approvals-dubai).

#### 2. Работы, которых не видно

После сдачи клиент видит камень, дуб и штукатурку. Чего он не видит — так это того, на что часто ушла значительная часть бюджета.

- **Гидроизоляция** в ванных, на балконах и террасах.
- **Основания**: стяжки, подготовка стен, конструкции потолков.
- **Коммуникации** в стенах и потолках: кабели, трубы, воздуховоды.
- **Защита** тех частей дома, которые не ремонтируются.

Именно здесь сметы различаются незаметнее всего. В одной смете может быть полная система гидроизоляции с испытаниями, в другой — один слой. На бумаге и то и другое — «гидроизоляция». Через три года это уже разные ванные.

> Та часть ремонта, которую никто не фотографирует, определяет, сколько прослужит всё остальное. — Sayyed Osaf

#### 3. Уровень отделки

Одну и ту же планировку можно выполнить на очень разном уровне. Стену кухни можно покрасить или отделать камнем; пол — керамогранитом или известняком; дверь — стандартным полотном или скрытой дверью в потолок. Фурнитура, сантехника, освещение и стекло подчиняются той же логике.

Уровень отделки — это то, что клиент контролирует больше всего, и то, где дизайн-проект окупает себя: если каждая отделка выбрана и записана до расчёта сметы, цена описывает то, что действительно будет установлено, а не условную сумму, которую потом пересматривают.

#### 4. Мебель на заказ

Кухни, шкафы, тумбы в ванных и встроенные системы хранения часто составляют большую часть ремонта виллы. Их стоимость зависит от:

- конструкции и материала корпусов;
- фасадов: шпон, эмаль или массив;
- фурнитуры: петли, направляющие, подъёмные механизмы;
- столешниц и элементов из камня или стекла;
- сложности монтажа.

Поскольку корпусную мебель мы изготавливаем на собственном производстве, её стоимость рассчитывается по утверждённым чертежам и после технического замера, а не по каталожной оценке.

#### 5. Дизайн и документация

Ремонт без полного комплекта чертежей считается на допущениях, а именно на допущениях бюджет и «плывёт». Дизайн-проект — не дополнительная трата сверх ремонта, а то, что превращает ремонт в определённую цену.

Наши цены на дизайн опубликованы: **Полный дизайн-проект — от 250 AED/м² без VAT (262.50 AED/м² с VAT)** и **Дизайн и комплектация — от 310 AED/м² без VAT (325.50 AED/м² с VAT)**, куда дополнительно входят подбор материалов и мебели, работа с поставщиками и отслеживание заказов. Что входит в каждый пакет, указано на [странице дизайна интерьера](/ru/services/interior-design#fees).

#### 6. Согласования и условия объекта

Требования согласований, правила сообщества по времени работ и доступу, живёт ли семья в доме во время ремонта, как материалы попадают на объект — всё это влияет на график, а значит, и на стоимость. Эти пункты выявляются на выезде и записываются в состав работ, а не обнаруживаются потом.

#### Как получить смету, которую можно сравнить

Две сметы можно сравнивать, только если они описывают одно и то же. Прежде чем сравнивать цены, проверьте, что каждая из них:

1. Раскрывает **состав работ** по помещениям, а не одной суммой.
2. Указывает **спецификацию** отделки, приборов и мебели или явно помечает условные суммы.
3. Перечисляет **исключения**: что не входит, например сборы органов, мебель или техника.
4. Объясняет, **как оформляются дополнительные работы**. У нас дополнительные работы рассчитываются и согласовываются до начала.
5. Описывает **график оплаты**. Наш график согласовывается до начала работ и фиксируется в договоре: в нём указываются аванс, последующие платежи и условия их внесения. Для изготовления мебели и закупки материалов могут предусматриваться отдельные платежи.
6. Указывает **гарантию**. У нас — 36 месяцев на ремонтные работы и 48 месяцев на нашу корпусную мебель, в каждом случае с документально оформленной передачи соответствующих работ.

Врезка «Важно»: смета, в которой меньше деталей по гидроизоляции, коммуникациям или защите, не дешевле — она описывает другой проект.

#### Практический вывод

Сначала определите состав работ, затем зафиксируйте уровень отделки и только потом запрашивайте цену. Если у вас уже есть дизайн-проект, подрядчик может точно его посчитать; если нет — дизайн-проект самый прямой путь к бюджету, который не будет меняться. В любом случае именно на первом выезде становится понятно, что определяет стоимость ремонта вашей виллы.

Внутренние ссылки: «согласовании ремонта виллы» → INS-001; «странице дизайна интерьера» → `/ru/services/interior-design#fees`; «Ремонт вилл» → `/ru/services/villa-renovation`.

---

## C9. Launch article 3 — Building from your own design

| Field | EN | RU |
|---|---|---|
| `article_id` | INS-003 | INS-003 |
| `slug` | `build-from-your-own-design` | `build-from-your-own-design` |
| Topic | Process & Planning | Процесс и планирование |
| `regulatory` | false | false |
| Title | Building From Your Own Design: How We Take Over the Project | Реализация вашего готового дизайна: как мы принимаем проект |
| `seo_title` | Renovation From Your Own Design \| Bellvero Group | Ремонт по вашему дизайн-проекту \| Bellvero Group |
| Meta description | Already have a designer's drawings? What we review first, how the scope is agreed, how we work with your designer and how joinery is made from their drawings. | Уже есть дизайн-проект? Что мы проверяем в первую очередь, как согласуется состав работ, как мы работаем с вашим дизайнером и как делаем мебель по его чертежам. |
| Standfirst | Many owners come to us with a design already finished by their own designer. This article explains what happens next: what we check in the drawings, how the implementation scope is agreed, how we work alongside your designer, and how bespoke joinery is made from their drawings. | Многие владельцы приходят к нам с готовым проектом от своего дизайнера. Рассказываем, что происходит дальше: что мы проверяем в чертежах, как согласуется состав реализации, как мы работаем вместе с вашим дизайнером и как изготавливаем мебель по его чертежам. |
| Excerpt | You have a design. What we review first, how the scope is agreed and how we work with your designer. | У вас есть дизайн-проект. Что мы проверяем первым, как согласуется состав работ и как мы работаем с вашим дизайнером. |
| Related services | P19 Our Process `#build-from-your-design` · P08 Bespoke Joinery & Furniture | P19 Как мы работаем `#build-from-your-design` · P08 Столярные изделия и мебель |
| Related articles | INS-001, INS-002 | то же |
| Cover / inline | `IN-IMG-10` · `IN-IMG-15` · `IN-IMG-16` | то же |

**Key points (EN)**

- You can bring your own designer's project: we review your drawings and existing approvals, agree the implementation scope and coordinate the works.
- The first step is a technical review of the drawings against the property and the approvals, before any price is given.
- Gaps in the drawings are listed openly and resolved before works, not improvised on site.
- Roles are agreed at the start: the design stays your designer's; delivery is ours.
- Bespoke joinery can be manufactured from your designer's drawings after technical measurement and approved manufacturing drawings.

**Key points (RU)**

- Можно прийти с проектом своего дизайнера: мы изучаем чертежи и имеющиеся разрешения, согласовываем состав реализации и организуем работы.
- Первый шаг — техническая проверка чертежей на соответствие объекту и разрешениям, до расчёта стоимости.
- Пробелы в чертежах перечисляются открыто и закрываются до начала работ, а не решаются на объекте на ходу.
- Роли распределяются в начале: дизайн остаётся за вашим дизайнером, реализация — за нами.
- Мебель на заказ можно изготовить по чертежам вашего дизайнера после технического замера и утверждения производственных чертежей.

### C9-EN. Article body — English

#### You already have a design. What now?

Some clients come to us at the very beginning, with a property and an idea. Many others arrive later: they have already worked with an interior designer, the drawings are finished, and sometimes the approvals are in hand. What they need is a team to build it.

This is one of the routes we offer from the start, not an exception. We review your drawings and existing approvals, agree the implementation scope and coordinate the works. The design remains your designer's. Our job is to deliver it faithfully and to raise, early and in writing, anything that would stop it being delivered well.

#### What we review first

Before we give a price, we review the documents. A design that looks complete in presentation images can still be incomplete as a set of instructions for a site. We check four things.

**1. Completeness of the drawings.** Is there a full set of layout, ceiling, electrical, plumbing and elevation drawings, with sections where they matter? Are the joinery items drawn in enough detail to manufacture? Are finishes specified, or only shown in renders?

**2. The drawings against the property.** Drawings are compared with the actual site. Dimensions, existing services, ceiling voids, structural elements and levels are checked during a site visit. Differences are normal; what matters is finding them before works start.

**3. Engineering coordination.** Does the air-conditioning fit in the ceiling that has been drawn? Do the lighting and power positions match the furniture? Is there access for maintenance? This is where interiors most often clash with services, and where a technical review saves the most rework.

**4. Existing approvals.** If approvals have been obtained, we check that the approved drawings match the design we are asked to build. If they have not, we confirm which route applies, as explained in our guide to [villa renovation approvals](/insights/villa-renovation-approvals-dubai).

> A good design deserves to be built as drawn. The way to do that is to find the questions before the site does. — Sayyed Osaf

#### When the drawings have gaps

Almost every design set has some. A detail left open, a finish marked "to be confirmed", a joinery item shown only in elevation. None of this is a problem if it is found early.

After the review we send a written list of the points that need an answer: what is missing, what conflicts, and what we recommend. Each point is resolved in one of three ways: your designer completes it, you decide it with us, or it is excluded from the scope until it is decided. Nothing is improvised on site without the client's approval.

Callout — Important: If a detail is not drawn, it is not priced. Asking for a quotation before the gaps are closed usually means asking for a quotation that will change.

#### How the scope is agreed

Once the drawings are reviewed, we agree the implementation scope with you in writing. It lists the works room by room, the specification that applies to each, what is excluded, and who is responsible for what. This document is the basis of the quotation and, later, of the contract.

Additional work that arises during the project is quoted and approved before it starts. The payment schedule is agreed before work begins and recorded in the contract.

#### Working with your designer

The relationship works best when roles are clear from the first day.

- **Your designer** owns the design intent: finishes, proportions, the look of the space. Design changes come from the designer or from you, never from the site.
- **We** own delivery: site works, procurement where agreed, manufacturing, programme, quality and safety on site.
- **Your project manager** is the single point of contact for progress, and shares photos, videos and written updates in a dedicated project group. Your designer can be included in that group if you wish.

When a question comes up on site, it is recorded, sent to the person who owns the answer, and the decision is written down before the work continues.

#### Joinery from your designer's drawings

Bespoke furniture is often the most detailed part of a designer's project, and the part where the gap between a drawing and a finished item is largest. Because we have our own production for cabinetry, glass and stone work, we can manufacture joinery directly from your designer's drawings. The process is:

1. **Review** of the joinery drawings and specifications.
2. **Technical measurement** on site, after the agreement is signed, once walls and ceilings are ready for it.
3. **Manufacturing drawings** prepared by us from the designer's drawings and the measurements, showing construction, hardware and dimensions.
4. **Approval** of the manufacturing drawings by you, and by your designer if you wish.
5. **Manufacturing and installation**, followed by inspection at handover.

Our bespoke cabinetry carries a 48-month warranty from documented handover of the relevant items.

#### What to send us

For a first review, it helps to share:

1. The design drawings you have, in PDF (and DWG if available).
2. The specification or finish schedule, if there is one.
3. Any approvals already obtained, with the approved drawings.
4. The location of the property and your intended timing.
5. Your designer's contact, if you would like us to speak with them directly.

#### The practical takeaway

A finished design is a strong starting point. The step that protects it is a technical review before pricing: it turns a beautiful set of drawings into a buildable, priced scope, and it keeps the design your designer intended. If you have a design and are looking for a team to build it, send us the drawings and we will start with the review.

Internal links: "villa renovation approvals" → INS-001; "Build from Your Design" → `/process#build-from-your-design`; "Bespoke Joinery" → `/services/bespoke-joinery`.

### C9-RU. Текст статьи — русский

#### У вас уже есть дизайн-проект. Что дальше?

Одни клиенты приходят к нам в самом начале — с объектом и идеей. Многие другие приходят позже: они уже поработали с дизайнером интерьера, чертежи готовы, а иногда уже получены и разрешения. Им нужна команда, которая всё это реализует.

Это один из маршрутов, которые мы предлагаем изначально, а не исключение. Мы изучаем чертежи и имеющиеся разрешения, согласовываем состав реализации и организуем работы. Дизайн остаётся за вашим дизайнером. Наша задача — точно его реализовать и заранее, письменно, поднять всё, что может этому помешать.

#### Что мы проверяем в первую очередь

Прежде чем называть цену, мы изучаем документы. Проект, который выглядит законченным на визуализациях, может оказаться неполным как инструкция для объекта. Мы проверяем четыре вещи.

**1. Полнота чертежей.** Есть ли полный комплект: планировка, потолки, электрика, сантехника, развёртки стен и разрезы там, где они нужны? Достаточно ли детально прорисована мебель, чтобы её изготовить? Указана ли отделка в спецификации или она есть только на визуализациях?

**2. Соответствие чертежей объекту.** Чертежи сверяются с реальным объектом. Размеры, существующие коммуникации, запотолочное пространство, конструкции и уровни проверяются на выезде. Расхождения — это нормально; важно найти их до начала работ.

**3. Увязка инженерных систем.** Помещается ли кондиционирование в нарисованный потолок? Совпадают ли точки освещения и розетки с мебелью? Есть ли доступ для обслуживания? Именно здесь интерьер чаще всего конфликтует с инженерией, и именно здесь техническая проверка экономит больше всего переделок.

**4. Имеющиеся разрешения.** Если разрешения получены, мы проверяем, что согласованные чертежи совпадают с проектом, который нас просят реализовать. Если нет — подтверждаем применимый маршрут, как описано в статье о [согласовании ремонта виллы](/ru/insights/villa-renovation-approvals-dubai).

> Хороший дизайн заслуживает того, чтобы его построили так, как он нарисован. Для этого вопросы нужно найти раньше, чем их найдёт объект. — Sayyed Osaf

#### Если в чертежах есть пробелы

Они есть почти в каждом комплекте. Незакрытый узел, отделка с пометкой «уточнить», мебель, показанная только на развёртке. Всё это не проблема, если найдено вовремя.

После проверки мы отправляем письменный список вопросов: чего не хватает, что противоречит друг другу и что мы рекомендуем. Каждый пункт закрывается одним из трёх способов: его дорабатывает ваш дизайнер, вы решаете его вместе с нами или он исключается из состава работ до принятия решения. Ничего не решается на объекте на ходу без согласия клиента.

Врезка «Важно»: если узел не прорисован, он не посчитан. Запросить смету до закрытия пробелов обычно означает получить смету, которая изменится.

#### Как согласуется состав работ

После проверки чертежей мы письменно согласуем с вами состав реализации. В нём перечислены работы по помещениям, спецификация для каждого из них, исключения и зоны ответственности. Этот документ становится основой сметы, а затем и договора.

Дополнительные работы, возникшие в ходе проекта, рассчитываются и согласовываются до их начала. График оплаты согласовывается до начала работ и фиксируется в договоре.

#### Как мы работаем с вашим дизайнером

Всё работает лучше всего, когда роли понятны с первого дня.

- **Ваш дизайнер** отвечает за дизайнерский замысел: отделку, пропорции, облик пространства. Изменения в дизайн вносит дизайнер или вы, но никогда не объект.
- **Мы** отвечаем за реализацию: работы на объекте, комплектацию в согласованном объёме, производство, график, качество и безопасность на объекте.
- **Ваш проджект-менеджер** — единое контактное лицо по ходу работ. Он присылает фото, видео и письменные отчёты в отдельную группу проекта. По вашему желанию в неё можно добавить и дизайнера.

Когда на объекте возникает вопрос, он фиксируется, передаётся тому, кто отвечает за ответ, и решение записывается до продолжения работ.

#### Мебель по чертежам вашего дизайнера

Мебель на заказ часто самая детальная часть дизайн-проекта — и та, где разрыв между чертежом и готовым изделием больше всего. Поскольку у нас собственное производство корпусной мебели, изделий из стекла и камня, мы можем изготовить мебель напрямую по чертежам вашего дизайнера. Порядок такой:

1. **Изучение** чертежей и спецификаций мебели.
2. **Технический замер** на объекте после подписания договора, когда стены и потолки к нему готовы.
3. **Производственные чертежи**, которые мы готовим по чертежам дизайнера и замерам, с конструкцией, фурнитурой и размерами.
4. **Утверждение** производственных чертежей вами и, по вашему желанию, вашим дизайнером.
5. **Изготовление и монтаж**, затем проверка при передаче.

На нашу корпусную мебель действует гарантия 48 месяцев с документально оформленной передачи соответствующих изделий.

#### Что нам прислать

Для первой проверки полезно передать:

1. Имеющиеся чертежи проекта в PDF (и DWG, если есть).
2. Спецификацию или ведомость отделки, если она есть.
3. Уже полученные разрешения вместе с согласованными чертежами.
4. Местоположение объекта и планируемые сроки.
5. Контакт вашего дизайнера, если вы хотите, чтобы мы общались с ним напрямую.

#### Практический вывод

Готовый дизайн-проект — сильная отправная точка. Защищает его техническая проверка до расчёта стоимости: она превращает красивый комплект чертежей в реализуемый и посчитанный состав работ и сохраняет тот замысел, который заложил ваш дизайнер. Если у вас есть проект и вы ищете команду для его реализации, пришлите нам чертежи — мы начнём с проверки.

Внутренние ссылки: «согласовании ремонта виллы» → INS-001; «Реализация вашего дизайна» → `/ru/process#build-from-your-design`; «Мебель на заказ» → `/ru/services/bespoke-joinery`.

---

## Document control

| Version | Date | Change |
|---|---|---|
| 1.0 | 22.09.2026 | First issue: P25 and P26 design, 16 image cards, interface copy, topics, author profile, 48-article plan, three launch articles in EN and RU |

**Open items for the owner before launch**

1. Sayyed Osaf reads and approves the author profile (C4) and the three articles (C7–C9), including the pull quotes attributed to him.
2. Confirm whether employer names and projects may be added to his extended bio (C4, rule 2).
3. Supply a real photograph of Sayyed Osaf, or confirm that the author box runs without a photo.
4. Confirm the regulatory statements in C7 against current official sources on the day of publication.

