# DESIGN.md — Bellvero Group · Insights

> **Source of truth:** [`Bellvero_Insights_Technical_Specification_EN.md`](Bellvero_Insights_Technical_Specification_EN.md) (v1.0, 22.09.2026, marked **FINAL**).
> This file is a working design reference distilled from it. If this file and the spec ever disagree, **the spec wins** — fix this file.
> Section references like `A2`, `AR07`, `B1` point into the spec.
>
> **Client amendment 2026-09-25 (overrides the spec on these points only): rounded corners.** See section 0. Wherever the spec or this file says "radius 0" or "radius 2 px", the amendment applies instead.

The Insights spec inherits the site-wide design system (header/footer, tokens, typography, Visual DNA, AI disclosure, form `F1`) from the main specification (`bellvero-website/Bellvero_Website_Technical_Specification_EN_1.md`, sections 7–14). Those inherited values are reproduced below so this page is self-contained.

---

## 0. Client amendment 2026-09-25 — corners, hover, removed elements

**Radius tokens.** These are the only two values. They are defined in `src/app/globals.css` (`@theme`) and emitted on `:root`:

| Token | Value | Tailwind | Applies to |
|---|---|---|---|
| `--radius-lg` | 20px | `rounded-lg` | All images and their containers (hero, service rows, project/article cards, gallery, covers), service, project and article cards, the enquiry form block and any `#EBE4D9` surface block, large media blocks, video poster, lightbox frame, dropdown panels |
| `--radius-sm` | 12px | `rounded-sm` | Primary and secondary buttons, inputs, textareas, dropdowns, country-code selector, language switcher, menu button, icon buttons (carousel arrows, back-to-top, FAQ toggles), chips and small badges |

- Nothing visible uses 0 px or 2 px. All other Tailwind radius sizes are disabled (`--radius-*: initial`). `rounded-full` remains only for true circles (dots, progress bars, a real author photo, ambient blur shapes).
- Full-bleed section bands (a background colour running edge to edge) are not blocks and keep square edges. A *block* on `#EBE4D9`, like the enquiry form, is contained and uses `rounded-lg`.
- Rounded images clip through `overflow-hidden` on the rounded container, with `object-fit: cover` kept.

**Shadows.** None anywhere: no `box-shadow`, no `text-shadow`, no glow. To separate a block, use a 1 px `#D8CEC1` line or the `#EBE4D9` surface.

**Image hover.** Add the `.img-zoom` class to the image inside a `.group` container. It gives a 1.03 zoom plus `brightness(0.9)` over 200 ms. There is no card lift, translate or shadow on hover.

**Removed (forbidden by the spec):**
- The pill-shaped nav capsule with the sliding dark pill. The header is now plain text navigation (Manrope 500 14 px, 24 px gap) with a click/keyboard Services dropdown (`src/components/ui/DesktopNav.tsx`), and the desktop header starts at 1100 px.
- Circled numbers 01–04 and images in the home Services section. It is now a text-only 2 × 2 grid (plain number, title, sentence, text links).
- Circular icons with arrows on links and buttons.
- Circular icons next to the role lines (home "Family-Led", About leadership).
- The floating "PM — one project manager" chip.

---

## 1. Colour tokens

Defined in `src/app/globals.css` and exposed to Tailwind as `bv-*`.

| Spec token | Code token / Tailwind | HEX | Use |
|---|---|---|---|
| `--bg` | `--bv-background` / `bg-bv-background` | `#F7F4EE` | Page background |
| `--surface` | `--bv-surface` / `bg-bv-surface` | `#EBE4D9` | Key points box, form `F1`, table header row |
| `--ink` | `--bv-ink` / `text-bv-ink` | `#332E2B` | Headings, body, standfirst |
| `--muted` | `--bv-muted` / `text-bv-muted` | `#685F57` | Captions, meta lines, AI disclosure labels |
| `--accent` | `--bv-accent` / `text-bv-accent` | `#98583F` | Topic labels, active filter underline, TOC active rule, list markers, callout rule |
| `--accent-hover` | `--bv-accent-hover` | `#804733` | Hover/pressed of primary buttons |
| `--line` | `--bv-line` / `border-bv-line` | `#D8CEC1` | 1 px dividers (review note, author box, pull quote, tables) |
| `--field-border` | `--bv-field-border` | `#81766A` | Form field borders |
| `--error` / `--success` | `--bv-error` / `--bv-success` | `#A32626` / `#315C48` | Form states |

**Forbidden:** shadows on cards, borders or background panels on article cards, gold gradients, pills or chips in the topic filter, counters or badges.

---

## 2. Typography

Headings: **Cormorant Garamond 500**. Body/UI: **Manrope** 400 body, 500 labels/nav, 600 buttons and emphasis. Same families for EN and RU (Cyrillic subset is never swapped for a system font). Headings are never uppercase and never lighter than 500.

| Style | Desktop ≥1200 | Tablet 768–1199 | Mobile ≤767 | Where in Insights |
|---|---|---|---|---|
| Inner page H1 | 64 | 52 | 38 | `IN01` H1, `AR02` H1 |
| Long-title H1 (>70 chars) | 52 | 44 | 34 | `AR02` |
| H2 | 48 | 40 | 32 | `IN02` featured title |
| Article H2 (Cormorant 500) | 36 | 32 | 28 | `AR07` body; 64 px above, 20 px below |
| Article H3 (Manrope 600) | 24 | 22 | 21 | `AR07` body; 40 px above, 12 px below |
| H3 / card title | 30 | 28 | 26 | `IN04` and `AR11` cards, author name `AR09` |
| Large intro | 20 | 19 | 18 | `IN01` intro, `AR02` standfirst |
| Article body | 18 | 18 | 17 | `AR07`; line height 1.7, 24 px paragraph spacing |
| Body | 17 / 16 | | | Card excerpt 16 px |
| Captions | 14 | 14 | 13 | Breadcrumbs, meta lines, review note |
| Eyebrow | 12 | 12 | 11 | tracking .12em (topic labels) |
| AI disclosure | 12 | 12 | 11 | Manrope 400, line height 1.4, tracking .04em, `--muted` |

Russian text is never truncated and never gets hard `<br>`. Every title container must pass with the longest RU title in the content plan (**INS-043**) at 320 px.

---

## 3. Grid, spacing and shape

- Content max width **1320 px**. Gutters: 60 px @1440, 40 @1024, 32 @768, 20 @390/360, 16 @320.
- Columns: desktop 12 / 32 px gap · tablet 8 / 24 px · mobile 4 / 16 px.
- Radius per section 0: `rounded-lg` 20 px for images, cards and surface blocks, and `rounded-sm` 12 px for controls. No shadows.
- Transitions 150–250 ms. Section entrance: opacity plus at most 12 px translate, 350 ms, once. Everything is readable with JavaScript and animation off.
- Forbidden: scroll hijacking, custom cursors, marquees, splash screens, entry pop-ups.

---

## 4. P25 — Insights listing (`/insights`, `/ru/insights`) · spec A2

| Block | Design contract |
|---|---|
| `IN01` Intro | `--bg`. Top padding 64 desktop / 40 mobile. Eyebrow → H1 (inner H1) → one intro line (large intro, max 640 px). **No** hero image, banner or search box. |
| `IN02` Featured | The `featured` article, otherwise the most recent. Desktop split **7 + 5** columns, 48 px gap. Cover 16:9 on the left, text vertically centred on the right: topic label (eyebrow, accent) → title (H2 48/40/32) → excerpt (max 3 lines) → meta `author · date · reading time` → visual-only "Read the article →". The whole card is **one link**, not two tab stops. AI label under the image. Stacked below 1200. |
| `IN03` Topic filter | `<nav aria-label="Topics">` holding **links** to `?topic=…`. "All" plus 6 topics. Manrope 500 15 px, ink, 32 px gap. Active item: 2 px accent underline 6 px below the text, plus `aria-current="true"`. Mobile: the row scrolls inside its own container with a right-edge fade, and the page never scrolls sideways. No pills, no chips, no counts. |
| `IN04` Grid | 3 / 2 / 1 columns, 32 px column gap, 56 px row gap. Card order: cover 3:2 (`rounded-lg`) → AI label → 16 px → topic label → title (H3 30/28/26, max 3 lines, no ellipsis on desktop) → excerpt (16 px muted, max 2 lines) → meta `date · reading time`. Equal heights in a row. One link per card. **9 cards per page**; the featured article is not repeated on page 1. |
| `IN05` Pagination | Centred: "← Previous", numbers, "Next →". The current page is plain text with `aria-current="page"`. Hidden when there is one page. No infinite scroll, no "load more". |
| `IN06` Empty state | One line of text plus a "View all articles →" link. Never placeholder cards or grey boxes. |
| `IN07` Form | `F1` on `--surface`, anchor `#project-enquiry`, service pre-selected to "Not sure yet". |

---

## 5. P26 — Article (`/insights/[slug]`) · spec A3

Desktop layout (≥1200): a 12-column grid. The **TOC sits in the left gutter (3 columns wide)**, and the **text column is max 720 px in columns 5–10**. Below 1200 the text column is centred at max 720 px.

| Block | Design contract |
|---|---|
| `AR01` Breadcrumbs | `Home › Insights › [Topic]`, captions, muted, 32 px below the header. The topic links to `/insights?topic=…`. |
| `AR02` Header | Max 880 px, left-aligned to the text column. Topic label (accent) → H1 → standfirst (large intro, ink, max 3 sentences). |
| `AR03` Author line | 24 px under the standfirst. Photo 48 px circle **only if a real approved photo exists**, otherwise nothing (no initials, no silhouette). Name (Manrope 600 15) links to `#author` · role (400 14 muted) · "Published · Last reviewed · n min read" (captions). One discreet "Copy link" text button, which uses the native share sheet on mobile. |
| `AR04` Cover | Full content width up to 1320 px. 16:9 desktop, **4:3 mobile** (focal-point crop from the same file). `rounded-lg`. Optional caption, then the AI label, inside `<figcaption>`. `fetchpriority="high"`, never lazy (this is the LCP element). |
| `AR05` Key points | Directly after the cover, in the text column. `--surface`, padding 32 / 24, no border, `rounded-lg`. Heading "In short" Manrope 600 14 uppercase .08em. 3–5 bullets. **Mandatory.** |
| `AR06` TOC | Built from H2s. Desktop: sticky `top: 120px`, Manrope 400 14 muted; active item ink with a 2 px accent left rule plus `aria-current="true"`. `<nav aria-label="Contents">`. Tablet/mobile: a closed "Contents" disclosure after the key points. Hidden when there are fewer than 3 H2s. |
| `AR07` Body | Only the A4 components (section 6). |
| `AR08` Review note | Captions, muted, 1 px line above, 24 px top padding. "Last reviewed by [author] on [date]." plus the regulatory disclaimer when `regulatory: true`. |
| `AR09` Author box | `#author`, max 720, 1 px line above and below, 32 px padding. Optional real photo 96 px. Name in **H3 style (30/28/26)**, role accent Manrope 500 15, bio 16 px, link "How our team works on your project →" to `/about#leadership`. |
| `AR10` Related services | Heading "Related services". 1–2 rows of service link plus one line of description. Never empty. No images. |
| `AR11` Related articles | Heading "More insights". 3 cards identical to `IN04`. Manual picks, then same topic, then any topic. Hidden if none. |
| `AR12` Form | `F1`, `#project-enquiry`, service pre-selected from the first related service. Heading "Discuss Your Project", intro from `C-AR12`. |

The mobile bottom bar (Discuss Project · WhatsApp) appears after the cover scrolls out of view. **Not allowed:** comments, share-count rows, newsletter pop-ups, carousels, full-viewport progress bars, other sticky banners, ads.

---

## 6. Article body components · spec A4

| Component | Rendering |
|---|---|
| Paragraph | Body style, 720 px column |
| H2 / H3 | As in the typography table. No H4 or deeper |
| Bullet / numbered list | 24 px indent, 12 px between items, markers in accent |
| Checklist | Numbered list with **square** markers ("what to prepare" lists) |
| Callout "Important" | 3 px accent left rule, padding 20 / 24, no background, label Manrope 600 14 uppercase, max one per 800 words |
| Pull quote | Cormorant 500 30 / 26 px, ink, **no quote-mark graphics**, 1 px line above and below. Author statements only |
| Table | Full 720 px, Manrope 15, header row Manrope 600 on `--surface`, 1 px line row dividers, no vertical rules, scrolls inside its container on mobile |
| Inline image | 720 px, or "wide" up to 1080 px. Ratio 3:2 or 4:5. Caption, then AI label, in `<figcaption>`. EN and RU alt text |
| Internal link | Ink underline, accent underline on hover. Every article links to ≥1 service page and ≥1 other article |
| External link | Official sources only, same tab, `rel="noopener"`, small "↗" |
| FAQ | Optional, end of body, `Q1` accordion, max 5 questions, **no** `FAQPage` markup |

Forbidden in body content: third-party video embeds, social embeds, GIFs, emoji, coloured text, text in images, stock photos, AI portraits.

---

## 7. Responsive · spec A5

| Width | P25 | P26 |
|---|---|---|
| ≥1200 | Featured 7 + 5; 3-column grid | Sticky TOC on the left; 720 px text column |
| 768–1199 | Featured stacked; 2-column grid | "Contents" disclosure; 720 px column centred |
| ≤767 | 1 column; filter scrolls in its own container | Cover 4:3; body 17 px; tables scroll in their container |
| 320 | No horizontal page scroll; titles wrap, never truncate | Same |

---

## 8. Imagery · spec B1–B3

- **Visual DNA:** warm off-white plaster, pale natural oak, honed beige limestone, warm grey stone, walnut, matte black hardware, soft natural daylight, straight verticals, quiet documentary realism. Every image should look like it came from one shoot.
- **One subject per image, and the subject is the topic.** Fixed motif per topic:

| Topic | Motif |
|---|---|
| Approvals & Permits | Architecture in the process of change (an opened wall, a façade, an early-stage site) |
| Costs & Budgeting | Materials side by side at true scale, top-down or 45° |
| Materials & Finishes | A single material surface in raking daylight |
| Bespoke Joinery | A joinery detail: edge, joint, drawer, hinge, handle |
| Design Ideas | A finished, calm room corner |
| Process & Planning | Tools of work (drawings, sample board, tape) and never readable text |

- **Never in an image:** people, hands, faces, readable text or numbers, logos, stamps or anything resembling an official document, price tags, before/after splits, AI portraits of the author.
- **Grid balance:** in any row of three cards, at least one image must be predominantly light.
- **Exports:** cover 16:9 master at 2000×1125 (AVIF + WebP) with a 4:3 and a 3:2 crop from the same file, and a 1200×800 card crop. Inline images 1600 px long side. OG 1200×630 JPG ≤300 KB. `srcset` 480 / 800 / 1200 / 1600 / 2000.
- **Naming:** `ins-[id]-[cover|inline-01|inline-02]-[subject].avif`, topic defaults `ins-topic-[slug].avif`, listing OG `ins-og-listing.jpg`.

### Launch image slots (16)

| Slot | Use | File |
|---|---|---|
| IN-IMG-01 | P25 Open Graph | `ins-og-listing.jpg` |
| IN-IMG-02…07 | Topic default covers (approvals, costs, materials, joinery, design, process) | `ins-topic-[slug].avif` |
| IN-IMG-08 | INS-001 cover | `ins-001-cover-wall-opening.avif` |
| IN-IMG-09 | INS-002 cover | `ins-002-cover-finish-comparison.avif` |
| IN-IMG-10 | INS-003 cover | `ins-003-cover-drawing-to-room.avif` |
| IN-IMG-11 / 12 | INS-001 inline | `ins-001-inline-01-community-street.avif` / `ins-001-inline-02-open-ceiling.avif` |
| IN-IMG-13 / 14 | INS-002 inline | `ins-002-inline-01-waterproofing.avif` / `ins-002-inline-02-kitchen-detail.avif` |
| IN-IMG-15 / 16 | INS-003 inline | `ins-003-inline-01-drawing-review.avif` / `ins-003-inline-02-workshop.avif` |

Prompts, alt text (EN/RU) and captions for every slot are in spec B3. Do not rewrite them.

---

## 9. AI disclosure label

- Text: **"AI-generated image" / «Изображение создано ИИ»** (Insights wording per `C-AI`).
- HTML text inside `<figcaption>`, directly under the media, after the caption when there is one. It is never baked into the image and never shown only on hover.
- Manrope 400, 12 / 11 px, line height 1.4, tracking .04em, `--muted`, 8 px below the media (4 px below a caption).

---

## 10. Accessibility and performance · spec A9

- WCAG 2.2 AA. One H1, then H2, then H3, in strict order.
- The filter is `<nav aria-label="Topics">` with links, and the TOC is `<nav aria-label="Contents">`. The active state is never shown by colour alone.
- LCP ≤2.5 s mobile p75: the featured cover on P25 and the article cover on P26. Card covers below the fold are lazy-loaded.
