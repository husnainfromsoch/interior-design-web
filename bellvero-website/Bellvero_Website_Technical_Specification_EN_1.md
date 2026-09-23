# BELLVERO GROUP — WEBSITE TECHNICAL SPECIFICATION

**Version:** 1.0 · **Date:** 18.09.2026 · **Status:** Complete and ready for build
**Recipients:** Web developer · AI content creator · Content manager
**Languages of the website:** English (default) and Russian
**Primary markets:** Dubai and Abu Dhabi, United Arab Emirates

---

## 1. Document Purpose and Status

This document is the complete and only technical specification required to build the Bellvero Group website from scratch. It contains the sitemap, the URL structure, every page, every section, the full EN and RU copy, the design system, the media production cards with ready-to-use AI generation prompts, the CMS model, the SEO, analytics, accessibility, performance and security requirements, and the acceptance criteria.

A developer who has never seen any earlier Bellvero material can build the entire site from this document alone. No other document needs to be opened.

**How the document is organised**

| Part | Sections | Audience |
|---|---|---|
| Foundation | 1–14 | Developer, designer, content manager |
| Page and section build | 15–16 | Developer |
| Website copy EN / RU | 17 | Developer, content manager, translator |
| AI media production | 18–19 | AI content creator |
| Systems and delivery | 20–30 | Developer, DevOps |
| Production control | 31–32 | Content manager, project owner |

**Rules of precedence**

1. A requirement written in this document is binding.
2. Where a section gives an exact string of copy, that string is published verbatim, in both languages.
3. Where a value is written in square brackets, for example `[LEGAL ENTITY NAME]`, it is a value the company must supply. Square-bracket placeholders must never appear on the public site. A block whose placeholder is unfilled is not published.
4. The developer does not invent facts, prices, timelines, guarantees, addresses, permits, client names or project data. Anything not stated here is requested from the company.

**Media policy in one paragraph**

All photographic and video content on this website is generated with AI and is permanent production content, not a placeholder. Every AI image and every AI video carries a visible AI disclosure label rendered as HTML text. Portfolio material is published as concept projects, never as documentary evidence of completed work. Exactly one category of media is not AI-generated: photographs of buildings delivered by the founders' previous employers in the legacy-experience block, which are uploaded as real files under the rules in section 15.18.

---

## 2. Project Assumptions

These decisions were made to complete this specification. They are binding unless the company states otherwise in writing.

| # | Assumption | Rationale |
|---|---|---|
| A1 | The portfolio consists of four **concept projects** with neutral names and no real addresses, districts, unit numbers, areas, budgets, durations or completion dates. | AI-generated imagery cannot be presented as documentary proof of a delivered project. Concept framing is honest and still demonstrates capability. |
| A2 | Concept project names are: Coastal Villa, Garden Villa, Tower Residence, Business District Office. | Neutral, descriptive, not traceable to a real property. |
| A3 | The production facility is described in text without naming an emirate or address, and is illustrated with AI concept imagery labelled as such. | Avoids presenting AI imagery as a photograph of a specific real facility. |
| A4 | Technical drawings, plans and documentation views are AI-generated illustrations labelled as AI, described as illustrative drawing types, never as a real client's project documentation. | Permitted by the owner. The wording limits in section 10.4 prevent the illustration from reading as a forged document. |
| A5 | No personal names appear anywhere on the website, in file names, in the CMS or in this document. Roles only: Founder, Engineering Lead, Project Management Lead, Client Relations, Content Manager, Website Administrator. | Owner instruction. |
| A6 | No portraits of real or AI people are published. Leadership profiles are text plus role. About and team blocks use architecture, materials and craft compositions. | Owner instruction. |
| A7 | Technology stack: statically generated front end (Next.js App Router, SSG/ISR) on a CDN host, with a headless CMS (Sanity, Payload or Strapi), serverless form endpoint, and self-hosted fonts and media. | Fastest route to the Core Web Vitals targets in section 26 with the CMS model in section 22. Any equivalent stack that meets sections 21–30 is acceptable. |
| A8 | Analytics: GA4 with Consent Mode v2, loaded only after consent. Cookie consent handled by a first-party CMP that meets section 24. | Meets the consent requirements without third-party tracking before consent. |
| A9 | Enquiry notifications are delivered to a messenger (WhatsApp Business API or Telegram bot) plus email, to at least two recipients. | Required by section 20.4. |
| A10 | Prices, VAT handling, warranty periods, working hours, service scope and geography are carried over exactly as supplied by the company: 250 and 310 AED/m² excluding VAT, 36 and 48 month warranties, Monday–Friday 09:00–18:00 UAE time, Dubai and Abu Dhabi. | Company-confirmed commercial facts. |
| A11 | Image generation tool of record: Midjourney (current v7 parameters given; the creator verifies the current version at generation time). Universal prompts are provided for any other engine. Video generation: Veo, Kling, Runway or Luma, image-to-video. | Gives the creator concrete parameters without locking the project to one vendor. |
| A12 | Media IDs are renumbered as `BV-IMG-XX` and `BV-VID-XX`. Section 32 maps every media slot of the source material to its new ID or records why it no longer exists. | Traceability. |
| A13 | Legacy-experience photographs are real photographs supplied by the company, uploaded through the CMS, and published only where the company holds the rights. The block is hidden until they are supplied. | These images depict real buildings; AI generation of them would fabricate evidence. |
| A14 | The site launches with EN as the default language at `/` and RU at `/ru/`. | Simplest correct structure for hreflang and canonical rules in section 23. |

---

## 3. Business and Website Goals

**Primary goal.** Convert a qualified visitor into a direct enquiry through the enquiry form or WhatsApp, on any page, within one screen of scrolling from any section.

**Secondary goals**

1. Explain the four service directions clearly enough that a visitor self-selects the right one in under thirty seconds.
2. Demonstrate technical competence, not adjectives: coordination, approvals routing, defined scope, change control, warranty.
3. Present the company's capability through concept projects, transparently labelled, without overstating delivery history.
4. Serve English-speaking and Russian-speaking audiences with identical structure and equal depth of content.
5. Support paid traffic: every advertised service has a complete, self-sufficient landing page with its own enquiry form.

**Measured outcomes**

| Metric | Target |
|---|---|
| Enquiry submissions (form + WhatsApp click-through) | Primary conversion, tracked per page and per language |
| Mobile LCP | ≤ 2.5 s at the 75th percentile of real user loads |
| Enquiry form completion rate | Tracked; form has six fields, two mandatory |
| First response time to a new enquiry | Internal operational target of 15 minutes during working hours, never published on the site |

---

## 4. Brand Positioning

**Positioning statement.** Bellvero Group applies the engineering discipline of large-scale construction to private homes and commercial interiors. Design, technical coordination, approvals, renovation and bespoke joinery are delivered by one team under one agreed scope.

**Origin and structure.** A family-led business that began in 2021. The engineering direction is led by a founder who held chief engineer positions with UAE contracting companies on large residential, commercial and public buildings. Project management is led by a founder with eighteen years in construction, including projects in several countries. A third partner is responsible for client relations. The company operates its own production for cabinet furniture, glass and stone work.

**Tone of voice**

- Factual, calm, specific. Mechanisms and process, not adjectives.
- The words "luxury" and "premium" are not repeated in every block; quality is shown through detail, documentation and process.
- No superlatives, no rankings, no claims of exclusivity, no counters, no star ratings, no testimonials.
- Never claim that small contractors lack engineering discipline, and never derive a quality guarantee from the business being family-led.

**Claims that must never be published**

- That the legal entity was registered in 2021 (the family business began in 2021; the entity registration date is a separate, company-supplied fact).
- Years of individual experience beyond what section 17 states, ages, building storey counts, developer names as employers, awards, certificates, client counts, number of machines or headcount.
- Daily personal inspection of every site by a founder.
- Any statement that 100% of all furniture is produced in-house. Upholstered furniture is sourced from suppliers.

---

## 5. Target Audience

| Segment | Situation | What they need from the site | Primary pages |
|---|---|---|---|
| Villa owner, Dubai or Abu Dhabi | Full renovation or a staged upgrade of a family home | Proof of coordination and control, clear scope and change rules, warranty, approvals competence | `/services/villa-renovation`, `/process`, `/projects` |
| Apartment owner | Renovation inside a managed building | Handling of building rules, access, deliveries, protection of shared areas | `/services/apartment-renovation` |
| Commercial tenant or business owner | Office fit-out | Approvals, programme around operations, furniture procurement | `/services/commercial-fit-out` |
| Owner with an existing design | Has drawings from another designer, needs execution or joinery only | Explicit confirmation that the company builds from a supplied design | Every service page, `/process#build-from-your-design` |
| Joinery-only buyer | One kitchen, one wardrobe set, individual pieces | Manufacturing capability, materials, process from brief to installation, warranty | `/services/bespoke-joinery`, `/services/custom-kitchens`, `/services/wardrobes` |
| Design-only buyer | Wants a design package to take to their own contractor | Deliverables list, fees, revision process | `/services/interior-design` |

**Languages.** The Russian version serves Russian-speaking residents and buyers; the English version serves UAE residents, international buyers and Russian speakers who prefer English. Structure is identical in both; only the copy differs. Language is chosen by the visitor in the switcher. No IP-based or browser-language redirect.

---

## 6. Sitemap and URL Structure

**Language routing.** English is the default language and is served from the root. Russian is served under `/ru/`. Every page exists in both languages. Total: 24 page types, 48 localised URLs, plus the 404 template.

| ID | EN URL | RU URL | EN title | RU title |
|---|---|---|---|---|
| P01 | `/` | `/ru/` | Home | Главная |
| P02 | `/services` | `/ru/services` | Services | Услуги |
| P03 | `/services/interior-design` | `/ru/services/interior-design` | Interior Design | Дизайн интерьера |
| P04 | `/services/landscape-design` | `/ru/services/landscape-design` | Landscape Design | Ландшафтный дизайн |
| P05 | `/services/villa-renovation` | `/ru/services/villa-renovation` | Villa Renovation | Ремонт вилл |
| P06 | `/services/apartment-renovation` | `/ru/services/apartment-renovation` | Apartment Renovation | Ремонт квартир |
| P07 | `/services/commercial-fit-out` | `/ru/services/commercial-fit-out` | Commercial Fit-Out | Коммерческая отделка |
| P08 | `/services/bespoke-joinery` | `/ru/services/bespoke-joinery` | Bespoke Joinery & Furniture | Столярные изделия и мебель |
| P09 | `/services/custom-kitchens` | `/ru/services/custom-kitchens` | Custom Kitchens | Кухни на заказ |
| P10 | `/services/wardrobes` | `/ru/services/wardrobes` | Wardrobes & Dressing Rooms | Шкафы и гардеробные |
| P11 | `/services/approvals` | `/ru/services/approvals` | Approvals & NOCs | Согласования и NOC |
| P12 | `/services/mep-hvac` | `/ru/services/mep-hvac` | MEP & HVAC | Инженерные системы |
| P13 | `/services/materials-procurement` | `/ru/services/materials-procurement` | Materials & Procurement | Материалы и комплектация |
| P14 | `/projects` | `/ru/projects` | Concept Projects | Концептуальные проекты |
| P15 | `/projects/coastal-villa-concept` | `/ru/projects/coastal-villa-concept` | Coastal Villa — Concept Project | Вилла у воды — концептуальный проект |
| P16 | `/projects/garden-villa-concept` | `/ru/projects/garden-villa-concept` | Garden Villa — Concept Project | Вилла с садом — концептуальный проект |
| P17 | `/projects/tower-residence-concept` | `/ru/projects/tower-residence-concept` | Tower Residence — Concept Project | Квартира в башне — концептуальный проект |
| P18 | `/projects/business-district-office-concept` | `/ru/projects/business-district-office-concept` | Business District Office — Concept Project | Офис в деловом районе — концептуальный проект |
| P19 | `/process` | `/ru/process` | Our Process | Как мы работаем |
| P20 | `/about` | `/ru/about` | Our Story | О компании |
| P21 | `/contact` | `/ru/contact` | Contact | Контакты |
| P22 | `/warranty` | `/ru/warranty` | Warranty & Aftercare | Гарантия и поддержка |
| P23 | `/privacy` | `/ru/privacy` | Privacy Notice | Обработка персональных данных |
| P24 | `/cookies` | `/ru/cookies` | Cookie Settings | Настройки cookie |

**URL rules**

1. Lowercase, hyphen-separated, no trailing slash, no uppercase, no query parameters in canonical URLs.
2. URL slugs are identical in both languages. Only the `/ru/` prefix differs. This keeps the hreflang pairing trivial and prevents duplicate-content drift.
3. No thin geographic landing pages such as `/kitchens-dubai` or `/kitchens-abu-dhabi`. Geography is expressed inside page copy.
4. No intermediate empty category pages for grouping headings. Groups live in `/services` and in the header dropdown.
5. No "thank you" page. Successful submission is rendered inside the form. A thank-you URL must not be used as the only conversion signal.
6. One host only: HTTPS, one canonical variant of `www` or non-`www`, with a permanent redirect from the other.

**Named anchors.** These anchors are permanent and are linked from other pages. Each has `scroll-margin-top: 104px` on desktop and `88px` on mobile.

| Anchor | Page | Target |
|---|---|---|
| `#project-enquiry` | every commercial page | Enquiry form F1 |
| `#fees` | P03 | Design packages and fees |
| `#residential-renovation` | P02 | Renovation group in the services catalogue |
| `#capabilities` | P08 | Joinery capability block |
| `#leadership` | P20 | Leadership roles block |
| `#design-only` | P19 | Route: design only |
| `#build-from-your-design` | P19 | Route: build from your design |
| `#bespoke-joinery` | P19 | Route: bespoke joinery |

Internal block IDs used in this document (H01, D04, F1 and similar) are build references. They are never printed on the website.

---

## 7. Navigation

### 7.1 Header

**Desktop, viewport ≥ 1100 px**

- Height 88 px, sticky, background `#F7F4EE`, 1 px bottom border `#D8CEC1`, no layout shift when it becomes sticky.
- Left: wordmark inside a 196 × 44 px area, linking to the localised home page.
- Centre: Services · Projects · Our Process · About · Contact. Item style Manrope 500, 14 px, line height 20 px, gap 24 px.
- Right: language switcher `EN / RU`, then the primary button "Discuss Your Project", height 52 px, horizontal padding 20 px.
- If the row does not fit, switch to the compact menu. Never shrink the font below 14 px.

**Services dropdown**

- Opens on click and on keyboard activation, not on hover alone. The disclosure button is separate from the link.
- Four groups: Interior & Landscape Design (P03, P04) · Villa & Apartment Renovation (P05, P06) · Commercial Fit-Out (P07) · Bespoke Joinery & Furniture (P08, P09, P10).
- Below the groups: Specialist Services (P11, P12, P13) and "All Services" → P02.
- `Escape` closes the panel and returns focus to the trigger. `aria-expanded` and `aria-controls` are set correctly.

**Mobile, viewport < 1100 px**

- Height 72 px, wordmark area 154 × 36 px, language switcher and "Menu" button, both with 44 × 44 px hit areas.
- Full-screen panel on `#F7F4EE`, vertical navigation with expandable groups, scrollable list, primary CTA pinned at the bottom of the panel.
- Focus is trapped inside the panel, the page behind does not scroll, the panel closes with the button and with `Escape`, and focus returns to the trigger.

**Behaviour rules**

- The wordmark always links to the localised home page.
- The language switcher keeps the current page and any hash. It never sends the visitor to the home page and never switches to a different project.
- No forced redirect based on IP address or browser language.

### 7.2 Footer

Single footer on every page, background `#F7F4EE`, top border 1 px `#D8CEC1`, vertical padding 72 px desktop and 56 px mobile.

- Wordmark, then the positioning line (section 17.2).
- Column "Explore": Services, Projects, Our Process, Our Story, Contact.
- Column "Contact": verified phone, WhatsApp, verified email, working hours line.
- Column "Visits": meeting policy line.
- Bottom row: `© {current year} Bellvero Group`, Warranty, Privacy Notice, Cookie Settings, and the legal entity line `[LEGAL ENTITY NAME] · Licence no. [LICENCE NUMBER] · [ISSUING AUTHORITY]`.

Rules: if the company has no social accounts, no social icons are rendered. If there is no office, no office address and no map are rendered. The legal entity values are stored once in the CMS and rendered on `/about`, `/contact` and in the footer from that single source.

---

## 8. Design System

### 8.1 Colour tokens

| Token | HEX | Use |
|---|---|---|
| `--bg` | `#F7F4EE` | Main warm off-white page background |
| `--surface` | `#EBE4D9` | Forms, distinct sections, quiet blocks |
| `--ink` | `#332E2B` | Headings and body text |
| `--muted` | `#685F57` | Captions, secondary text, AI disclosure labels |
| `--accent` | `#98583F` | Primary buttons, role titles, rare accents |
| `--accent-hover` | `#804733` | Hover and pressed state of primary buttons |
| `--line` | `#D8CEC1` | 1 px dividers |
| `--field-border` | `#81766A` | Form field borders on light background |
| `--white` | `#FFFFFF` | Text on accent, text over media |
| `--focus` | `#332E2B` | Focus ring on light background |
| `--error` | `#A32626` | Error text and icon |
| `--success` | `#315C48` | Success text |

Contrast, verified: ink on background ≈ 12.21:1; white on accent ≈ 5.52:1; white on accent-hover ≈ 7.32:1; accent on background ≈ 5.03:1. Text over imagery and video is verified separately against the actual pixels behind it, in every frame of a video loop.

Forbidden: mustard as a permanent accent, gold gradients, green primary form buttons, a permanently pulsing green WhatsApp circle.

### 8.2 Typography

Cormorant Garamond Medium 500 for large headings. Manrope 400 for body, 500 for labels and navigation, 600 for buttons. Both language versions use the same families; Cyrillic is never substituted with a system font. Self-hosted WOFF2, `font-display: swap`, Latin and Cyrillic subsets only, metric-compatible fallback declared, no hidden text before fonts load. Keep the OFL licence files in the repository.

| Style | Desktop ≥ 1200 | Tablet 768–1199 | Mobile ≤ 767 | Line height |
|---|---|---|---|---|
| Home H1 EN | 80 px | 62 px | 42 px | 1.03 / mobile 1.08 |
| Home H1 RU | 72 px | 56 px | 38 px | 1.06 / 1.1 |
| Inner page H1 | 64 px | 52 px | 38 px | 1.08 |
| H2 | 48 px | 40 px | 32 px | 1.12 |
| H3 / project title | 30 px | 28 px | 26 px | 1.18 |
| Large intro | 20 px | 19 px | 18 px | 1.55 |
| Body | 17 px | 17 px | 16 px | 1.65 |
| Buttons | 14 px | 14 px | 15 px | 1.3 |
| Captions | 14 px | 14 px | 13 px | 1.5 |
| Eyebrow | 12 px | 12 px | 11 px | 1.4, tracking .12em |

Intermediate sizes use `clamp()` without jumps. At 320 px H1 may drop to 34 px; body stays at 16 px. Headings are never set in artificial uppercase and never below weight 500. Body line length 64–72 characters on desktop, natural width on mobile. Russian text is never truncated and never receives hard `<br>` outside a specifically tested hero.

**Wordmark.** Until a final logo file is supplied: Manrope 500, uppercase `BELLVERO`, tracking .14em, with the second line `GROUP` at 10–11 px, tracking .22em. When the logo SVG is supplied it replaces the text wordmark at the same optical size and is never stretched.

### 8.3 Grid, spacing and components

- Content max width 1320 px. Outer gutters: 60 px at 1440, 40 px at 1024, 32 px at 768, 20 px at 390/360, 16 px at 320.
- Columns: desktop 12 with 32 px gap; tablet 8 with 24 px gap; mobile 4 with 16 px gap.
- Section rhythm: 104 / 72 / 56 px vertical padding for major sections; 64 / 48 / 40 px for compact sections. Heading to intro 16 px; intro to content 32–40 px.
- Split layout: 6 + 6 columns, 48 px gap. The image side is defined per section in this document and is not alternated mechanically.
- Project grid: two columns, 32 px gap, 48 px row gap. At a 1320 px container each card is 644 px wide and a 4:3 image is 483 px tall. One column on mobile. Card heights are equal within a row — this is a hard requirement.
- Image corner radius 0. Fields and buttons radius 2 px. No card shadows, no large capsules, no decorative badges.
- Primary button height 52 px on desktop and mobile, padding 20–24 px. Secondary is a text link with a small arrow and an underline on hover. Minimum hit area 44 × 44 px. Disabled state is visually distinct and explains why where relevant.
- A project card is a single link wrapping image and title. It is never split into three tab stops.
- Hover: image scale 1.025 only. Captions and AI disclosure labels are always visible and never revealed on hover.
- Transitions 150–250 ms. Section entrance: opacity plus a maximum 12 px translate over 350 ms, once. All content is readable with JavaScript disabled and with animations disabled.
- Forbidden interactions: scroll hijacking, custom dot cursors, infinite marquees, loading splash screens, modal pop-ups on entry.

### 8.4 Standard section compositions

Unless a section in part 15 states otherwise, these apply:

- **Service hero.** Padding below header 64 px desktop, 40 px mobile. Text and image in two halves of the container, 48 px gap. H1, intro of no more than three or four lines, CTA with 24 px offset. Image 8:5, `object-fit: cover`, focal point from the CMS. Mobile order: text → CTA → image, 32 px gap. Inner pages never use a 100vh hero.
- **Text plus evidence.** Heading and text left, image or drawing right, 6 + 6 columns. Photo 4:5 or drawing `contain`. Mobile order: heading → text → media.
- **Service scope list.** Two text columns on desktop, one on mobile. Item titles Manrope 600 18 px, explanations 17 px, 24 px between items. No individual background cards.
- **FAQ.** Max width 960 px, row min-height 64 px, padding 16–20 px, question 18/16 px, answer 17/16 px, thin divider, plus/minus icon 24 px with a 44 px hit area.
- **Related projects.** Two 4:3 cards on desktop, one column on mobile, never more than two outside the catalogue and the home page.
- **Enquiry form F1.** Background `--surface`, inner padding 64 px desktop and 24 px mobile, intro 5 columns left and form 6 columns right with one column gap. Mobile: intro above form. No background video.
- **Policy pages.** Single column max 800 px, top padding 64 / 40 px, H2 30/26 px, body 17/16 px, tables collapse into sequential blocks on mobile.

---

## 9. Global AI Visual DNA

Every image and every video on this website must read as one continuous visual system: the same world, the same light, the same materials, photographed by the same person with the same camera. The global rules below apply to every asset. They do not replace the individual prompt of a media slot; each slot in sections 18 and 19 carries its own complete prompt.

**Overall direction:** premium contemporary interiors, understated luxury, architectural editorial photography, realistic Dubai setting, calm and believable, never staged advertising.

**Core material palette**

| Element | Specification |
|---|---|
| Walls | Warm off-white mineral plaster, fine matte texture, soft light falloff |
| Timber | Pale natural oak as the primary species; selected walnut only as an accent on doors, panels or drawer fronts |
| Stone | Honed beige limestone floors; warm grey natural stone for worktops, thresholds and bathroom surfaces |
| Accent colour | Muted terracotta, used sparingly in textiles, ceramics or a single upholstered piece |
| Metal | Matte black metal for hardware, slim profiles and frames; no chrome, no polished brass |
| Textiles | Restrained natural fabrics: linen, wool, cotton, in sand, bone, clay and warm grey |
| Glass | Clear low-iron glass, matte or fluted glass as an accent, physically correct refraction |

**Light** Soft natural daylight, warm-neutral white balance, believable sun direction, gentle contrast, subtle shadows, no blown highlights, no artificial rim lights.

**Composition** Calm, minimal clutter, natural proportions, straight architectural verticals, generous negative space, one clear subject per frame.

### 9.1 Global Image Style Prompt

Prepend or merge this paragraph into every image prompt, adapted to the specific slot. It is never used alone.

```
Photorealistic architectural interior photography, contemporary understated luxury residential design in Dubai, warm off-white mineral plaster walls, pale natural oak joinery with selected walnut accents, honed beige limestone flooring, warm grey natural stone surfaces, muted terracotta textile accents, matte black metal hardware, restrained natural linen and wool fabrics, soft natural daylight with believable sun direction, warm-neutral white balance, full-frame camera look, straight architectural verticals, realistic perspective, natural exposure with restrained dynamic range, physically accurate material textures at correct real-world scale, subtle surface imperfections, natural soft shadows, physically correct reflections, calm editorial composition with generous negative space, no people, no text, no logos
```

### 9.2 Global Video Style Prompt

```
Photorealistic architectural interior cinematography, contemporary understated luxury residential interior in Dubai, warm off-white plaster walls, pale natural oak joinery, honed beige limestone floor, warm grey stone surfaces, muted terracotta textile accents, matte black metal details, soft natural daylight from large windows, warm-neutral locked white balance, 24 fps cinematic motion, full-frame 35 to 50 mm lens look, camera height 1.5 meters, one single slow continuous controlled camera movement with slow ease-in and ease-out, realistic natural motion blur, completely stable architecture and furniture, stable materials and reflections, stable exposure, only minimal natural ambient movement such as gentle curtain drift, no cuts, no zoom, no orbit, no people, no text, no logos
```

### 9.3 Global Negative Prompt

This is the base negative prompt for every asset. Each media slot in sections 18 and 19 extends it with scene-specific exclusions. It is never used unextended.

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people unless explicitly requested
```

### 9.4 Global Colour-Grading Direction

- Warm-neutral white balance, approximately 5200–5600 K in appearance. Never cool blue, never green, never an artificial orange teal grade.
- Highlights hold detail; no clipped windows unless a deliberate soft bloom is described in the slot.
- Shadows stay open and warm, never crushed to black; deepest shadow value approximately equivalent to `#332E2B`.
- Saturation restrained: terracotta reads muted, timber reads natural, stone reads warm grey-beige.
- Final grade must sit comfortably on the `#F7F4EE` page background. An asset that looks cold or green against that background is rejected.
- Consistency check: place three finished assets side by side at 100% width; if one reads noticeably warmer, cooler or more contrasted than the others, it is regenerated or regraded.

### 9.5 Material Consistency Rules

1. One oak tone across the entire site: pale, warm, straight-grained, matte finish. No orange oak, no grey-washed oak, no high-gloss finishes.
2. Walnut is an accent only and never becomes the dominant timber in a frame.
3. Limestone flooring is honed, large format, warm beige, with soft natural veining and a visible but restrained joint pattern at correct real-world scale.
4. Worktops and vanity surfaces are warm grey natural stone with quiet veining. No dramatic book-matched marble, no black granite, no white Carrara clichés.
5. All metal hardware in one finish family: matte black. Hardware proportions are physically plausible and consistent between rooms.
6. Textile colours stay inside sand, bone, clay, warm grey and muted terracotta.
7. Texture scale must match reality: plaster grain, timber pore, stone veining and fabric weave are sized as they would appear at the stated camera distance.
8. The same material combination appears across a project's assets; a project does not change its floor, its joinery colour or its hardware between frames.

### 9.6 Lighting Consistency Rules

1. Daylight is the primary source in every interior frame. Artificial fixtures are on only where the slot says so, and always as a warm, low-intensity secondary source.
2. Within one project, the daylight direction is fixed. If the Project Continuity Sheet states daylight from the right, every frame of that project has daylight from the right.
3. Time of day within one project is fixed. Mid-morning and late afternoon are the two permitted moods; a project uses one of them.
4. Shadows are soft-edged, directional and physically consistent with the stated window position. Multiple contradictory shadow directions are a rejection.
5. No visible artificial light sources placed for effect, no rim lighting, no studio flash look, no light spill without a source.
6. Contrast is restrained. Bright window areas retain some structure; interiors do not go dark to compensate.

### 9.7 Composition Rules

1. Camera height 1.4–1.6 m for interiors, 1.1–1.3 m for seated-scale detail scenes, unless the slot specifies otherwise.
2. Verticals are strictly vertical. One or two degrees of tilt is a rejection.
3. Predominant focal length 35–50 mm full-frame equivalent for rooms, 70–85 mm for joinery and material details.
4. One subject per frame. Secondary elements support it, never compete with it.
5. Leave the safe area stated in the slot free of visual detail so website text and buttons stay legible.
6. No ultra-wide distortion, no fisheye, no forced symmetry unless the slot asks for it.
7. Styling is minimal: at most two or three restrained objects per room frame.
8. Every frame must look like it was taken by a person standing in a real room, not assembled from parts.

### 9.8 Desktop and Mobile Cropping Rules

1. Each slot states a desktop ratio and a mobile ratio. The mobile version is generated or re-framed as a separate asset. Squeezing or letterboxing a desktop frame into a vertical format is forbidden.
2. When a mobile crop is required, the same subject, same materials, same light and same project continuity apply; only the framing changes.
3. Focal points `focal_desktop` and `focal_mobile` are set in the CMS for every asset used with `object-fit: cover`.
4. Safe areas: on hero slots the left third on desktop and the lower third on mobile must remain calm and slightly darker so that white text and a button stay readable.
5. Nothing essential to the composition sits within 8% of any frame edge, because cover cropping at intermediate widths removes it.
6. Every image element in the markup declares `width` and `height` or `aspect-ratio` to prevent layout shift.

### 9.9 Project Visual ID System

Every media asset belongs to exactly one Project Visual ID. The ID defines a single coherent fictional space or subject world, described in a Project Continuity Sheet in section 12.

| Project Visual ID | Subject world | Used by |
|---|---|---|
| `CP-01` | Coastal Villa concept — two-storey family villa interior | Home, Services, Villa Renovation, Interior Design, Joinery, Kitchens, Wardrobes, P15 |
| `CP-02` | Garden Villa concept — single-storey villa with garden relationship | Villa Renovation, Landscape, P16 |
| `CP-03` | Tower Residence concept — apartment in a high-rise | Home, Apartment Renovation, Kitchens, Wardrobes, P17 |
| `CP-04` | Business District Office concept — commercial workspace | Home, Commercial Fit-Out, P18 |
| `CP-05` | Landscape concept — terrace, planting and outdoor living | Landscape Design |
| `CP-06` | Production concept — cabinet making, glass and stone workshop scenes | Joinery, About, Villa Renovation |
| `CP-07` | Studio concept — drawings, material samples, documentation scenes | Interior Design, Approvals, MEP, Process, Materials |

An asset never mixes two Project Visual IDs in one frame.

### 9.10 Reference Image Rules

1. For each Project Visual ID, the first approved asset becomes the **anchor image** of that project. Its file is stored in the CMS field `style_reference` and is referenced by every later asset of the same project.
2. Later assets are generated with the anchor image supplied as a style or image reference, then adjusted by the slot prompt.
3. Reference images used for generation are always assets this project produced. No third-party photographs, no competitor imagery, no copyrighted interior photography, no downloaded reference from another studio's website.
4. If an engine supports character or style weights, use the lowest weight that preserves the material palette without copying the anchor composition.
5. Every asset records its reference images in the CMS field `reference_images`.

### 9.11 Seed and Style Reference Rules

1. Record the seed of every approved generation in the CMS field `seed`. Without it a frame cannot be reproduced or revised later.
2. Within one Project Visual ID, keep a stable style reference (Midjourney `--sref` or the engine equivalent) recorded in `style_reference`.
3. Variations of one approved frame are generated from the recorded seed with small prompt deltas, not from scratch.
4. When the engine version changes, re-approve the anchor image of each project before generating further assets, because seeds are not portable between versions.
5. The `generation_tool`, `generation_prompt`, `negative_prompt`, `seed` and `style_reference` fields are mandatory for every published asset. An asset without them fails acceptance.

---

## 10. AI Disclosure Policy

### 10.1 What must be labelled

Every AI-generated image and every AI-generated video published on this website carries a visible disclosure label. There are no exceptions for decorative, background, hero or thumbnail use.

| Case | EN label | RU label |
|---|---|---|
| Concept project material | `Concept project · AI-generated visualization` | `Концептуальный проект · AI-визуализация` |
| Regular AI image | `AI-generated image` | `Изображение создано с помощью ИИ` |
| AI video | `AI-generated video` | `Видео создано с помощью ИИ` |
| AI illustrative drawing | `Illustrative drawing · AI-generated image` | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |

The label is stored in the CMS fields `ai_disclosure_en` and `ai_disclosure_ru` and rendered automatically from them. A hard-coded label in a template is a defect.

### 10.2 Rendering rules

1. The label is HTML text. It is never baked into the image file and never burned into a video.
2. It sits directly below the media, or directly beside it in layouts where the caption sits beside the frame.
3. It appears on desktop and on mobile, in hero blocks, in cards, in galleries, in the lightbox, in modal views and in full-screen view.
4. It is never hidden on hover, never revealed only on hover, never collapsed behind an icon or tooltip.
5. Where a media element has both a caption and a disclosure, the caption comes first and the disclosure follows on its own line.
6. The label is inside the same figure element as the media and is programmatically associated with it, so screen readers announce them together.

### 10.3 Label styling

| Property | Specification |
|---|---|
| Position | Directly under the media; in split heroes, under the media column. In the hero of P01, top-aligned to the bottom-left of the media area, inside the content container |
| Font family | Manrope |
| Font weight | 400 |
| Font size | 12 px desktop, 11 px mobile |
| Line height | 1.4 |
| Letter spacing | .04em |
| Colour | `--muted` `#685F57` on light backgrounds; `rgba(255,255,255,.78)` over dark media |
| Background | None on light backgrounds. Over media, a 1 px shadow-free scrim `rgba(51,46,43,.35)` with 6 px horizontal and 3 px vertical padding, only where contrast would otherwise fall below 4.5:1 |
| Spacing | 8 px below the media, or 4 px below the caption when a caption is present |
| Mobile behaviour | Wraps to two lines if required; never truncated, never replaced by an ellipsis |
| Accessibility | Rendered inside `<figcaption>`; contrast ≥ 4.5:1 against its own background in every state |

The label must be clearly readable and must not compete visually with the caption or the heading.

### 10.4 What AI must never produce

AI generation is used for interiors, exteriors, furniture compositions, material compositions, concept projects, atmospheric brand imagery, hero images, project cards, service images, decorative images, illustrative drawings and video.

AI is never used to produce:

- licences, permits, certificates, official documents, contracts or stamps;
- anything presented as a real client's project documentation;
- anything presented as a photograph of a real employee, founder or client;
- anything presented as documentary evidence of work actually performed;
- imagery of a specific real building, development or facility presented as the company's own.

**Wording limits that keep illustrative drawings honest.** Drawing and documentation imagery is permitted, labelled as AI, and described only as an illustration of the type of documentation a project includes. Copy must never say "our own documentation", "a page from a real project", "client details removed", or name an authority, a licence number, a permit number or a project address on or beside such an image. The drawing must not contain a title block that imitates an authority stamp, an approval signature, a licence number or a company seal.

### 10.5 Honesty rules for copy around AI media

1. Concept project pages state in the first screen that the project is a concept, in both languages.
2. Service pages may use AI imagery as an illustration of the service. They must not state or imply that the pictured space was delivered by the company.
3. No invented client names, addresses, villa or apartment numbers, areas, budgets, timelines, completion dates, results, reviews, client problems, or facts about projects that do not exist.
4. Status words such as "Completed" or "Delivered" are never applied to AI concept material.
5. Where a real, company-supplied asset exists and is published, it carries no AI disclosure and is stored with `asset_type: real_photo`.

---

## 11. Media Formats and Optimization

### 11.1 Slot types

| Type | Website export | Desktop ratio | Mobile ratio | Use |
|---|---|---|---|---|
| `V-HOME` | 1920 × 1080 plus 1080 × 1350 | 16:9 | 4:5 | Home hero media |
| `H-SERVICE` | 1920 × 1200 plus 1200 × 1500 | 8:5 | 4:5 | Service page hero |
| `H-CASE` | 2400 × 1500 plus 1200 × 1500 | 8:5 | 4:5 | Concept project cover |
| `CARD-PROJECT` | 1600 × 1200 | 4:3 | 4:3 | Project cards in grids |
| `SPLIT` | 1200 × 1500 | 4:5 | 4:5 | Vertical image beside text |
| `DETAIL` | 1600 × 1200 | 4:3 | 4:3 | Close material and hardware views |
| `WIDE` | 2400 × 1350 | 16:9 | 4:3 crop | Panoramic frame inside a project |
| `PLAN` | 2000 px long side | native | native | Drawing views, `object-fit: contain` with padding |
| `MOOD` | 1600 × 1200 | 4:3 | 4:3 | Material composition |
| `OG` | 1200 × 630 | 1.91:1 | — | Link preview image |

### 11.2 Generation and export

1. Generate at the highest resolution the engine offers, then upscale to at least 1.5× the export width before downscaling to the export size. Never upscale a low-resolution output directly to the export size.
2. Deliver AVIF and WebP with a JPEG fallback. Responsive `srcset` widths: 400, 800, 1200, 1600, 2400.
3. Weight guidance: ordinary card 80–180 KB, large hero 200–350 KB. Check for visible compression artefacts rather than chasing the number.
4. Drawing views are the exception: line legibility beats the weight target; tune compression per asset.
5. Hero poster: WebP or AVIF, ≤ 200 KB desktop and ≤ 120 KB mobile, `fetchpriority="high"`, never lazy-loaded.
6. Everything below the first screen is lazy-loaded. The LCP image is never lazy-loaded.
7. Video: WebM plus MP4 (H.264), no audio track, ≤ 3 MB desktop, ≤ 1.5 MB mobile, `preload="none"`, source injected by script after first paint.

### 11.3 File naming

```
bv-[project-visual-id]-[subject]-[view]-[type]-[NN]
```

`type` is one of `ai`, `aivideo`, `plan`, `real`. Examples: `bv-cp01-living-wide-ai-01`, `bv-cp03-kitchen-detail-ai-02`, `bv-cp07-lighting-plan-ai-01`, `bv-home-hero-aivideo-desktop`.

No personal names, no client names, no unit numbers, no addresses in any file name. File names are lowercase, hyphenated, ASCII only.

---

## 12. Project Continuity System

Every asset belonging to a Project Visual ID must read as a different view of one physically existing space. Each frame of a project is generated from the anchor image and the continuity sheet below, never as an independent interior.

**How to use a continuity sheet**

1. Generate the anchor image listed in the sheet first and approve it against section 18's acceptance criteria.
2. Store it as `style_reference` for that project.
3. Generate every further asset of that project with the anchor as reference, the slot prompt, and the sheet's fixed elements restated in the prompt.
4. Any frame that contradicts the sheet is rejected, whatever its quality.

### 12.1 `CP-01` — Coastal Villa Concept

| Field | Value |
|---|---|
| Project Visual ID | `CP-01` |
| Project type | Two-storey contemporary family villa, concept |
| Architectural language | Rectilinear contemporary Gulf architecture, deep reveals, flush detailing, no cornices, no mouldings |
| Room geometry | Open-plan living and dining volume 12 × 7 m, connected by a wide 2.4 m opening to a stair hall; kitchen in line with the dining area |
| Ceiling height | 3.2 m ground floor, flat plastered ceiling with a 40 mm shadow gap at the wall junction |
| Window shape | Floor-to-ceiling glazing, 2.9 m high, slim matte black frames, 1.6 m wide panels |
| Window position | Full-height glazing along the right-hand wall of the main volume; a single tall window on the stair landing |
| Exterior view | Calm planted terrace, low horizon, pale sky, occasional palm silhouette, never a city skyline |
| Daylight direction | From the right, soft and diffuse |
| Time of day | Mid-morning |
| Wall finish | Warm off-white mineral plaster, fine matte texture |
| Floor material | Honed beige limestone, 900 × 900 mm format, 3 mm joints |
| Timber species | Pale natural oak |
| Timber tone | Warm, light, straight grain, matte lacquer |
| Stone type | Warm grey natural stone for worktops and the fireplace bench |
| Stone tone | Warm grey with quiet soft veining |
| Metal finish | Matte black |
| Doors | Full-height flush oak doors, 2.6 m, concealed frames, matte black lever handles |
| Cabinetry | Floor-to-ceiling oak joinery wall in the living area; handleless kitchen fronts with a 15 mm shadow-gap grip |
| Handles | Matte black slim bar handles, 160 mm centres, on wardrobe and vanity fronts only |
| Lighting fixtures | Recessed 50 mm ceiling spots, one linear matte black pendant over the dining table, concealed cove light in the joinery |
| Furniture | Low bone-coloured linen sofa, oak coffee table, terracotta ceramic vessel, oak dining table with six wool-upholstered chairs |
| Textiles | Linen curtains in sand tone, wool rug in warm grey, one muted terracotta cushion |
| Accessories | Maximum three per frame: a ceramic vessel, a stack of two books, a single dried branch |
| Colour temperature | Warm-neutral, approximately 5400 K appearance |
| Style reference | Anchor image `BV-IMG-01` |
| Seed | Recorded at approval of `BV-IMG-01`, reused for all `CP-01` assets |
| Reference images | `BV-IMG-01` plus the most recently approved `CP-01` frame of the same room |
| Must remain unchanged | Glazing on the right wall, ceiling height and shadow gap, limestone floor format, oak tone, matte black hardware, terracotta as the only accent colour, mid-morning light from the right |

### 12.2 `CP-02` — Garden Villa Concept

| Field | Value |
|---|---|
| Project Visual ID | `CP-02` |
| Project type | Single-storey villa with a direct garden relationship, concept |
| Architectural language | Horizontal contemporary villa, deep roof overhang, long sliding glazed openings |
| Room geometry | Living room 9 × 6 m opening onto a shaded terrace through a 4 m sliding glazed wall |
| Ceiling height | 3.0 m, plastered ceiling with an exposed pale oak beam rhythm at 1.2 m centres |
| Window shape | Sliding glazed panels, 2.7 m high, slim matte black frames |
| Window position | Along the left-hand wall, opening to the garden |
| Exterior view | Shaded terrace, mature planting, gravel and stone paving, no pool unless the slot requests it |
| Daylight direction | From the left, warm and lower in angle |
| Time of day | Late afternoon |
| Wall finish | Warm off-white plaster with a slightly coarser hand-applied texture than `CP-01` |
| Floor material | Warm beige limestone, 600 × 1200 mm format, continuing to the terrace paving |
| Timber species | Pale oak with selected walnut accents on cabinet fronts |
| Timber tone | Warm pale oak; walnut medium brown, matte |
| Stone type | Warm grey stone for the kitchen island and the terrace threshold |
| Stone tone | Warm grey, matte honed |
| Metal finish | Matte black |
| Doors | Flush oak doors 2.4 m with matte black hardware |
| Cabinetry | Low oak sideboard, built-in walnut-fronted storage in the dining area |
| Handles | Recessed finger pulls; matte black bar handles on walnut fronts |
| Lighting fixtures | Recessed spots, two matte black wall sconces, one linen shade floor lamp |
| Furniture | Deep sand-coloured sofa, oak side tables, woven lounge chairs on the terrace, oak dining table |
| Textiles | Heavy linen curtains, flatweave wool rug in clay tone |
| Accessories | Maximum three: ceramic bowl, olive-toned planted pot, folded throw |
| Colour temperature | Warm-neutral, approximately 5200 K appearance |
| Style reference | Anchor image `BV-IMG-73` |
| Seed | Recorded at approval of `BV-IMG-73` |
| Reference images | `BV-IMG-73` plus the latest approved `CP-02` frame |
| Must remain unchanged | Sliding glazed wall on the left, oak beam ceiling rhythm, 600 × 1200 limestone format, late afternoon light from the left, walnut used only as an accent |

### 12.3 `CP-03` — Tower Residence Concept

| Field | Value |
|---|---|
| Project Visual ID | `CP-03` |
| Project type | Apartment in a contemporary high-rise, concept |
| Architectural language | Compact contemporary apartment, flush detailing, full-height joinery, no skirting profile beyond a 20 mm shadow gap |
| Room geometry | Open living and dining 7 × 5 m, galley kitchen 4.2 m long on the rear wall, corridor with full-height wardrobes |
| Ceiling height | 2.8 m, flat plastered ceiling with a recessed linear light channel |
| Window shape | Continuous glazing 2.5 m high with slim matte black mullions every 1.5 m |
| Window position | Along the far wall of the living area, facing the viewer's front-left |
| Exterior view | Soft daylight haze, indistinct low-contrast distant buildings, never a recognisable skyline or landmark |
| Daylight direction | From the front-left, diffuse and even |
| Time of day | Mid-morning, slightly overcast |
| Wall finish | Warm off-white plaster, very fine texture |
| Floor material | Honed beige limestone-look large format tile, 800 × 800 mm |
| Timber species | Pale oak, straight grain |
| Timber tone | Warm pale, matte |
| Stone type | Warm grey stone worktop and full-height splashback in the kitchen |
| Stone tone | Warm grey with fine veining |
| Metal finish | Matte black |
| Doors | Flush full-height oak doors, concealed hinges |
| Cabinetry | Handleless kitchen with oak base units and off-white upper units; full-height oak wardrobes in the corridor with integrated LED |
| Handles | None visible in the kitchen; slim matte black pulls on wardrobes |
| Lighting fixtures | Recessed spots, linear cove lighting, one matte black pendant above the dining end |
| Furniture | Compact bone linen sofa, oak dining table with four chairs, low oak media unit |
| Textiles | Sheer linen curtain layer, warm grey wool rug |
| Accessories | Maximum two per frame |
| Colour temperature | Warm-neutral, approximately 5500 K appearance |
| Style reference | Anchor image `BV-IMG-33` |
| Seed | Recorded at approval of `BV-IMG-33` |
| Reference images | `BV-IMG-33` plus the latest approved `CP-03` frame |
| Must remain unchanged | Ceiling height 2.8 m, continuous glazing with matte black mullions, 800 × 800 floor format, handleless kitchen, hazy indistinct exterior |

### 12.4 `CP-04` — Business District Office Concept

| Field | Value |
|---|---|
| Project Visual ID | `CP-04` |
| Project type | Commercial office fit-out, concept |
| Architectural language | Contemporary workspace, exposed flush ceiling plane with linear lighting, glazed meeting enclosures |
| Room geometry | Open plan 16 × 9 m with a glazed meeting room 5 × 4 m and a reception counter near the entrance |
| Ceiling height | 3.0 m to the finished ceiling, with a 2.9 m glazed partition head height |
| Window shape | Full-height perimeter glazing with slim matte black frames |
| Window position | Along the left-hand wall of the open plan |
| Exterior view | Soft daylight haze, no recognisable buildings |
| Daylight direction | From the left |
| Time of day | Mid-morning |
| Wall finish | Warm off-white plaster; one oak-panelled feature wall behind reception |
| Floor material | Warm grey large-format porcelain with a matte finish; wool loop carpet tiles in the meeting room |
| Timber species | Pale oak |
| Timber tone | Warm pale, matte |
| Stone type | Warm grey stone reception counter top |
| Stone tone | Warm grey, honed |
| Metal finish | Matte black |
| Doors | Full-height glazed doors with matte black frames and slim vertical pulls |
| Cabinetry | Oak storage wall with flush fronts, reception counter in oak with a stone top |
| Handles | Slim matte black vertical pulls |
| Lighting fixtures | Recessed linear luminaires in a regular rhythm, one matte black pendant over the meeting table |
| Furniture | Oak-topped desks with matte black legs, wool-upholstered task chairs in warm grey, meeting table in oak, low lounge seating in bone linen |
| Textiles | Warm grey acoustic panels, wool carpet tile |
| Accessories | Maximum two per frame, never personal items, never screens showing content |
| Colour temperature | Warm-neutral, approximately 5500 K appearance |
| Style reference | Anchor image `BV-IMG-39` |
| Seed | Recorded at approval of `BV-IMG-39` |
| Reference images | `BV-IMG-39` plus the latest approved `CP-04` frame |
| Must remain unchanged | Perimeter glazing on the left, glazed meeting enclosure, oak feature wall at reception, matte black frames, empty screens, no branding of any kind |

### 12.5 `CP-05` — Landscape Concept

| Field | Value |
|---|---|
| Project Visual ID | `CP-05` |
| Project type | Residential outdoor space, concept |
| Architectural language | Contemporary terrace architecture attached to the `CP-02` villa language |
| Room geometry | Terrace 12 × 6 m with a shaded pergola zone, a dining zone and a planted border |
| Ceiling height | Pergola underside at 2.8 m, slatted oak-toned timber |
| Window shape | The villa's sliding glazed wall seen from outside |
| Window position | Villa facade on the left of the frame |
| Exterior view | Mature Mediterranean-Gulf planting, olive and frangipani forms, ornamental grasses |
| Daylight direction | Low warm light from the right |
| Time of day | Late afternoon, one hour before sunset |
| Wall finish | Warm off-white plaster boundary wall |
| Floor material | Warm beige stone paving, 600 × 1200 mm, with 40 mm gravel joints at the planting edge |
| Timber species | Weathered-resistant timber decking in a warm neutral tone |
| Timber tone | Warm grey-beige, matte |
| Stone type | Warm beige limestone paving and a stone bench |
| Stone tone | Warm beige, slightly textured |
| Metal finish | Matte black for outdoor lighting and pergola fixings |
| Doors | Sliding glazed doors of the villa |
| Cabinetry | Built-in stone seating with linen cushions |
| Handles | Not applicable |
| Lighting fixtures | Matte black low-level path lights and discreet uplights on planting |
| Furniture | Woven lounge chairs, timber dining table with six chairs, low stone table |
| Textiles | Off-white outdoor linen cushions, one muted terracotta throw |
| Accessories | Ceramic planters in clay and sand tones |
| Colour temperature | Warm, approximately 5000 K appearance |
| Style reference | Anchor image `BV-IMG-25` |
| Seed | Recorded at approval of `BV-IMG-25` |
| Reference images | `BV-IMG-25` plus the latest approved `CP-05` frame |
| Must remain unchanged | Pergola geometry, paving format, planting palette, late afternoon light from the right, terracotta as the only accent colour |

### 12.6 `CP-06` — Production Concept

| Field | Value |
|---|---|
| Project Visual ID | `CP-06` |
| Project type | Cabinet-making, glass and stone production environment, concept |
| Architectural language | Clean industrial workshop, white-painted blockwork walls, exposed steel roof structure, high clerestory openings |
| Room geometry | Working floor 20 × 12 m with benches along the left side and machinery in the centre |
| Ceiling height | 6 m to the underside of the steel structure |
| Window shape | High clerestory windows, 1.8 m tall, in a regular rhythm |
| Window position | High on the right-hand wall |
| Exterior view | Bright neutral sky through clerestory glazing only, no landscape, no buildings |
| Daylight direction | High and from the right, mixed with neutral overhead work lighting |
| Time of day | Mid-morning |
| Wall finish | White painted blockwork, lightly worn |
| Floor material | Sealed warm grey concrete with subtle use marks |
| Timber species | Pale oak panels, veneered boards, oak offcuts |
| Timber tone | Warm pale, unfinished and finished samples side by side |
| Stone type | Warm grey stone slabs on an A-frame rack |
| Stone tone | Warm grey, honed and raw edges |
| Metal finish | Matte black and raw machine steel |
| Doors | Industrial sliding door, closed |
| Cabinetry | Cabinet carcasses in progress, drawer boxes, door fronts stacked on felt-lined trolleys |
| Handles | Matte black handles in labelled trays, no visible text on labels |
| Lighting fixtures | Linear industrial LED battens, neutral tone |
| Furniture | Solid work benches, clamping table, tool wall with hand tools |
| Textiles | Felt protection blankets in grey |
| Accessories | Clamps, pencils, a roll of protective film, no visible writing |
| Colour temperature | Neutral-warm, approximately 5200 K appearance |
| Style reference | Anchor image `BV-IMG-48` |
| Seed | Recorded at approval of `BV-IMG-48` |
| Reference images | `BV-IMG-48` plus the latest approved `CP-06` frame |
| Must remain unchanged | Wall and floor finish, clerestory position, machinery layout, absence of people's faces, absence of any readable text, brand or logo |

### 12.7 `CP-07` — Studio Concept

| Field | Value |
|---|---|
| Project Visual ID | `CP-07` |
| Project type | Design studio documentation and material selection environment, concept |
| Architectural language | Calm studio interior, plastered walls, large north-facing window |
| Room geometry | Studio 6 × 5 m with a 2.4 × 1.1 m oak work table in the centre |
| Ceiling height | 3.0 m |
| Window shape | Large steel-framed window, 2.4 m high, divided into three panes |
| Window position | Left of the work table |
| Exterior view | Soft indistinct daylight, no visible detail |
| Daylight direction | From the left, soft and even |
| Time of day | Mid-morning, overcast |
| Wall finish | Warm off-white plaster |
| Floor material | Honed beige limestone |
| Timber species | Pale oak table top |
| Timber tone | Warm pale, matte oil finish |
| Stone type | Warm grey and beige stone samples, 150 × 150 mm tiles and offcuts |
| Stone tone | Warm grey, warm beige |
| Metal finish | Matte black drawing instruments and hardware samples |
| Doors | Out of frame |
| Cabinetry | Low oak plan chest against the rear wall |
| Handles | Matte black recessed pulls |
| Lighting fixtures | One matte black adjustable task lamp, off |
| Furniture | Oak work table, two oak chairs |
| Textiles | Linen, wool and bouclé swatches in sand, bone, clay and warm grey |
| Accessories | Scale rule, pencil, tape measure, timber and stone samples, printed drawing sheets with fine generic linework and no readable text |
| Colour temperature | Neutral-warm, approximately 5600 K appearance |
| Style reference | Anchor image `BV-IMG-61` |
| Seed | Recorded at approval of `BV-IMG-61` |
| Reference images | `BV-IMG-61` plus the latest approved `CP-07` frame |
| Must remain unchanged | Window position and light direction, oak table tone, sample palette, complete absence of readable text, numbers, stamps, signatures or logos on any drawing in frame |

---

## 13. CMS Media Structure

Every image and every video is a CMS record with the following fields. All fields are editable by the Content Manager role; none of them contains a person's name.

| Field | Type | Required | Notes |
|---|---|---|---|
| `asset_id` | string | yes | `BV-IMG-XX` or `BV-VID-XX` |
| `project_visual_id` | enum | yes | `CP-01` … `CP-07`, or `BRAND` for brand-level assets |
| `page_id` | enum | yes | `P01` … `P24`, or `GLOBAL` |
| `section_id` | string | yes | Section reference from part 15 |
| `asset_type` | enum | yes | `ai_illustration`, `ai_concept_project`, `ai_drawing_illustration`, `ai_video`, `real_photo` |
| `generation_tool` | string | yes for AI | Engine and version used |
| `generation_prompt` | text | yes for AI | Exact prompt used |
| `negative_prompt` | text | yes for AI | Exact negative prompt used |
| `seed` | string | yes for AI | Seed or engine equivalent |
| `style_reference` | reference | yes for AI | Anchor asset of the project |
| `reference_images` | reference list | yes for AI | Assets supplied as references |
| `aspect_ratio_desktop` | string | yes | e.g. `16:9` |
| `aspect_ratio_mobile` | string | yes | e.g. `4:5` |
| `generation_resolution` | string | yes for AI | Native output resolution before export |
| `export_dimensions` | string | yes | Final export size |
| `focal_point_desktop` | x/y | yes for cover slots | Percentage coordinates |
| `focal_point_mobile` | x/y | yes for cover slots | Percentage coordinates |
| `safe_area` | string | yes for hero slots | Region reserved for text and CTA |
| `alt_en` | string | yes | Descriptive, never a keyword list |
| `alt_ru` | string | yes | A real translation, not a copy of EN |
| `caption_en` | string | where a caption is specified | Rendered above the disclosure |
| `caption_ru` | string | where a caption is specified | |
| `ai_disclosure_en` | string | yes for AI | From section 10.1 |
| `ai_disclosure_ru` | string | yes for AI | From section 10.1 |
| `concept_disclosure_en` | string | for concept project assets | `Concept project · AI-generated visualization` |
| `concept_disclosure_ru` | string | for concept project assets | `Концептуальный проект · AI-визуализация` |
| `poster` | reference | yes for video | Poster frame asset |
| `filename` | string | yes | Section 11.3 convention |
| `publication_status` | enum | yes | `draft`, `review`, `published`, `retired` |
| `version` | integer | yes | Incremented on every regeneration |
| `created_at` | datetime | yes | System |
| `updated_at` | datetime | yes | System |

**Rules**

1. No field stores a designer, photographer, author or employee name. Attribution at the asset level is by role only, and is not published.
2. An asset without `alt_en`, `alt_ru`, `ai_disclosure_en` and `ai_disclosure_ru` cannot reach `published`.
3. An asset with `asset_type: real_photo` must have `publication_permission` set to true by the Website Administrator before it can be published; this is the only permission flag in the model and it exists because real photographs carry rights.
4. If a required asset of a block is missing or not `published`, the block is hidden entirely. Empty frames, grey boxes, placeholder icons and "coming soon" states are forbidden on the public site.
5. Deleting an asset never leaves a broken reference; the block hides automatically.

---

## 14. Shared Website Components

### 14.1 Enquiry form `F1`

Anchor `#project-enquiry`, `scroll-margin-top` 104 px desktop and 88 px mobile. Every header and hero CTA scrolls to this form on the current page. On system pages the CTA links to the localised `/contact#project-enquiry`.

| Field | Status | Behaviour |
|---|---|---|
| Name | required | `autocomplete="name"`, max 100 characters, Unicode letters, hyphen and space allowed |
| Phone / WhatsApp | required | `type="tel"`, international country-code selector, `autocomplete="tel"`, no UAE-only restriction, normalised server-side without losing the original string |
| Email | optional | `autocomplete="email"` |
| Service | optional | Pre-selected to the page's service, changeable. Values: Design, Landscape, Villa, Apartment, Commercial, Kitchens, Wardrobes, Joinery, Approvals, MEP, Procurement, Not sure yet |
| Location | optional | Dubai / Abu Dhabi / Other |
| Project details | optional | Max 2000 characters |

**Construction rules**

1. Labels sit above the fields, never to the left and never inside the field. Labels remain visible when the field has content.
2. Required fields carry no asterisk. Optional fields carry the text marker `Optional` / `Необязательно`, Manrope 400, 13 px, line height 20 px, colour `#6B625B`, placed to the right of the label.
3. Six fields, two of them required. No budget, deadline, area, document upload or account registration is requested. File upload is not part of this build.
4. Mobile: one column, labels 16 px, inputs 52 px tall, body text 16 px so iOS does not zoom. Desktop: form column max 560 px; Name and Phone may sit side by side only where the width allows.
5. The primary submit button and the WhatsApp button have equal visual weight. WhatsApp is not a secondary fallback.
6. Idempotency key per submission; a retry after a network timeout never creates a duplicate record.
7. Success is rendered in place, only after durable server acceptance. The analytics event fires exactly once.

States: `idle` → `validating` → `submitting` → `success` or `error`. Copy for every state is in section 17.4.

### 14.2 WhatsApp and phone

- WhatsApp link: `https://wa.me/[E164_DIGITS]?text=[prefilled]`. The prefilled text is in section 17.4. The URL never contains form content or the visitor's phone number.
- Phone link: `tel:[E164]`. The number is displayed in international format.
- A WhatsApp click is tracked as an outbound conversion intent. It is never reported as a delivered message or a captured lead.
- Mobile: a compact bottom bar, 52–56 px tall, with "Discuss Project" and "WhatsApp", appearing after the first screen. It hides when the keyboard is open, when the menu is open and when the enquiry form is in view. It respects the safe-area inset and never covers the cookie banner.
- Desktop: at most one floating text WhatsApp link, with no sound, no auto-expansion and no pulsing animation.

### 14.3 FAQ component `Q1`

`details`/`summary` or an accessible accordion. Heading row hit area 44 px, `aria-expanded` and `aria-controls` set, answer text present in the DOM at all times. Default state closed; multiple items may be open at once. Opening does not trigger a horizontal animation. FAQ content is written per page and never duplicated mechanically between pages.

### 14.4 Gallery component `G1`

Two 4:3 columns plus one wide frame per the section brief; one column on mobile. Clicking opens a lightbox. Caption and AI disclosure remain visible in the grid and inside the lightbox. Keyboard: `Escape` closes, arrow keys navigate, focus is trapped while open and returns to the trigger on close. Counter format `3 of 8` / `3 из 8`. Drawing views open `contain` with zoom. Image load error shows a neutral surface with `Image unavailable` / `Изображение недоступно`, never a broken icon, and is logged.

### 14.5 Engineering credibility strip `ENG-SHORT`

Reusable text strip placed on P05, P06 and P07, directly below the control and responsibility section and above the FAQ. Background `--surface`, max width 720 px, padding 32 px desktop and 24 px mobile, no icons, no portrait, no image. Heading 24/32 Cormorant Garamond Medium, body 17/28 Manrope. Copy in section 17.5. It must not state years of experience, ages, building storey counts or developer names.

### 14.6 Payment terms block `PAY-SHORT`

Reusable text, identical wherever it appears: home FAQ, P19 and the FAQ of renovation pages. Copy in section 17.5. Percentages, number of instalments, stage-acceptance linkage and escrow arrangements are not published until the company confirms them in writing; until then only the supplied text is published, in all three locations, with no variant wording.

### 14.7 Warranty strips

- Renovation pages P05, P06, P07: `3-year renovation workmanship warranty` / `3 года гарантии на качество ремонтных работ`, linking to P22.
- Joinery pages P08, P09, P10: `4-year warranty on our bespoke joinery manufacture and installation` / `4 года гарантии на изготовление и монтаж нашей корпусной мебели`, linking to P22.

### 14.8 Media figure component

Every image and video on the site is rendered through one component so that the disclosure rules cannot be bypassed:

```html
<figure class="media">
  <picture><!-- responsive sources, width/height set --></picture>
  <figcaption>
    <span class="media-caption">{caption_xx}</span>
    <span class="media-disclosure">{ai_disclosure_xx}</span>
  </figcaption>
</figure>
```

Rules: the caption element is omitted when the asset has no caption; the disclosure element is never omitted for an AI asset; both elements are inside `figcaption` so assistive technology associates them with the media; the component is used in heroes, cards, galleries, lightboxes and modal views.

### 14.9 Acceptance criteria for every shared block

- EN and RU copy match section 17 exactly.
- No empty media slots; a block with a missing asset is hidden.
- Every CTA leads to the stated destination and preserves the current language.
- No horizontal scroll at 360 px width.
- All content readable without hover.
- Every AI asset renders its disclosure label in both languages' versions of the page.

---

## 15. Detailed Specification for Every Page

**How to read this part.** Sections 15.1 to 15.24 specify every page and, inside each page, every section in build order. Each row gives the section's internal ID, its construction and behaviour, its media assets and the copy reference. The full text of every copy reference is in section 17; the full production card of every media asset is in section 18 for images and section 19 for videos. Section 16 restates the section-level rules that apply across pages.

Ordering rules that apply to every page: sections are built in the order listed; the block order is identical in EN and RU; every commercial page ends with the enquiry form `F1` followed by the footer.

### 15.1 P01 — Home `/`

**Purpose.** Introduce the company, let the visitor choose a direction, establish credibility, and capture an enquiry. Entry sources: brand search, referral, general advertising.

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `H01` Hero | Full-bleed media area. Desktop: height `clamp(620px, calc(100svh - 88px), 880px)`, text block in the left 7 of 12 columns, max width 780 px, 80 px bottom offset. Mobile: `min-height: calc(100svh - 72px)`, text in the lower area with 20 px side padding and 90 px bottom offset. Eyebrow, H1, supporting line, one primary button linking to `#project-enquiry`. Poster image is the LCP element; the video loads after first paint. Accessible pause/play control 44 × 44 px, bottom right, with its own accessible name. Scrim: gradient from `rgba(51,46,43,.60)` at the text side to transparent; verify 4.5:1 against the real pixels in every video frame. No second CTA, no counters, no ratings, no prices over the media. | `BV-IMG-01` poster desktop, `BV-IMG-02` poster mobile, `BV-VID-01` desktop video, `BV-VID-02` mobile video. AI disclosure label sits at the bottom-left of the media area inside the content container, per section 10.3. | `C-P01-H01` |
| `H02` Four directions | Background `--bg`. H2, then a 2 × 2 grid of text items, each with a number 01–04, a title, one sentence naming both ways of working, and links. One column on mobile, never a slider. Below the grid a text link to `/services`. No images in this section — deliberate, so the visitor reaches the portfolio faster. | none | `C-P01-H02` |
| `H03` Concept projects | H2, then four `CARD-PROJECT` items in a 2 × 2 grid, one column on mobile. Each card is one link wrapping image and title. Below the image: project name (H3), then the scope line (Manrope 14 px, `--muted`), then the caption and AI disclosure. Concept disclosure is mandatory on every card. CTA below the grid to `/projects`. A project whose cover asset is not published is omitted and the grid closes up. | `BV-IMG-03` (CP-01), `BV-IMG-04` (CP-03), `BV-IMG-05` (CP-02), `BV-IMG-06` (CP-04) | `C-P01-H03` |
| `H04` One team, one responsibility | Split: text left 6 columns, image right 6 columns, 48 px gap. H2, body, then four items in a 2 × 2 text grid with titles Manrope 600 18 px. Mobile: heading → body → items → image. If the image asset is unpublished the block renders as a full-width text block, which is a correct state. | `BV-IMG-07` (CP-07) | `C-P01-H04` |
| `H05` Five stages | H2, then a vertical numbered list 1–5, each item with a title and one sentence. No carousel, no hidden steps, no click to reveal. Text link to `/process`. | none | `C-P01-H05` |
| `H06` Family-led, personally involved | Split: text left, image right 4:5. H2, body, then three role lines (Manrope 15/24) separated by 1 px `--line` dividers, then a text link to `/about#leadership`. No portraits, no names. | `BV-IMG-08` (CP-06) | `C-P01-H06` |
| `H07` FAQ | `Q1` component, seven questions. Question 7 uses the `PAY-SHORT` text verbatim. | none | `C-P01-H07` |
| `H08` Enquiry form | `F1` on `--surface`, standard copy, no additional image. | none | `C-F1` |

**Page acceptance.** Hero renders poster, H1 and CTA before the video loads; pause control works; four directions present; concept disclosure visible on all four project cards; no reviews, counters or star ratings anywhere; 2021 is stated only as the start of the family business; every CTA resolves and preserves language.

### 15.2 P02 — Services `/services`

**Purpose.** Let the visitor choose a specific service. Entry: header menu and home page.

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `S01` Hero | Split service hero per section 8.4. H1, intro, primary CTA to `#project-enquiry`. | `BV-IMG-09` (CP-01) | `C-P02-S01` |
| `S02` Four editorial rows | Four rows, each image 40% and text 60%, 48 px gap, media 4:3, no fixed min-height. Image side alternates as listed: row 1 image left, row 2 image right, row 3 image left, row 4 image right. Mobile: image above text. Each row carries a title, one sentence and its links. Row 4 links carry the joinery anchor `#capabilities` where relevant. | `BV-IMG-10` (CP-02), `BV-IMG-11` (CP-03), `BV-IMG-12` (CP-04), `BV-IMG-13` (CP-01) | `C-P02-S02` |
| `S03` Specialist services | H2, one-line intro, three text-link columns to `/services/approvals`, `/services/mep-hvac`, `/services/materials-procurement`. One column on mobile. | none | `C-P02-S03` |
| `S04` FAQ | `Q1`, three questions. | none | `C-P02-S04` |
| `S05` Enquiry form | `F1`. Fees are not shown on this page; a text link points to `/services/interior-design#fees`. | none | `C-F1` |

### 15.3 P03 — Interior Design `/services/interior-design`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `D01` Hero | Service hero. Eyebrow, H1, intro, CTA with the service preselected as Design. | `BV-IMG-14` (CP-01) | `C-P03-D01` |
| `D02` From idea to defined interior | Three images in a row at equal height, captions beneath each, AI disclosure beneath each caption; vertical stack on mobile. Body text above the row. All three assets belong to the same Project Visual ID; if any of the three is unpublished the whole block is hidden. | `BV-IMG-15` drawing, `BV-IMG-16` materials, `BV-IMG-17` interior | `C-P03-D02` |
| `D03` What the design package includes | H2, then a twelve-item list in two columns on desktop and one on mobile, followed by the scope note. | none | `C-P03-D03` |
| `D03a` Sample drawing set viewer | Secondary-style button directly below the list. Opens an in-page viewer: modal on desktop, full-screen route on mobile. Six illustrative drawing views in a fixed order: layout, lighting and ceiling, wall elevation, joinery detail, finishes schedule, room visualisation. Arrow keys and buttons navigate, `Escape` closes, focus returns to the trigger, pinch and wheel zoom supported, counter `3 of 6` / `3 из 6`. Each view carries its caption and its AI disclosure inside the viewer. No form, no registration, no email gate. No file download of any kind. Analytics event `sample_package_open` with the source page; it is a content view, not a lead. | `BV-IMG-18` … `BV-IMG-23` | `C-P03-D03a` |
| `D04` Design services and fees | Anchor `#fees`. Two equal cards, light background, 1 px border, no popularity flags and no discounts. Each card: title, rate, description, feature list, CTA passing a package parameter to `F1`. Two columns desktop, one mobile. Common note beneath both cards. Rates are stored as `net_amount` and `tax_rate`; the VAT-inclusive total is calculated, never hand-duplicated. | none | `C-P03-D04` |
| `D05` Review process | Text plus drawing view, drawing `contain`. | `BV-IMG-24` | `C-P03-D05` |
| `D06` Related concept projects | Two `CARD-PROJECT` items linking to P15 and P17, with concept disclosure. | reuse `BV-IMG-03`, `BV-IMG-04` | `C-P03-D06` |
| `D07` FAQ | `Q1`, five questions. | none | `C-P03-D07` |
| `D08` Enquiry form | `F1`, then related links to P04, P13, P05. | none | `C-F1` |

**Page acceptance.** Only two fee cards exist; the VAT-inclusive totals are rendered at the same font size as the net rates; no legacy price points appear anywhere; the sample viewer opens without a form and contains no downloadable file.

### 15.4 P04 — Landscape Design `/services/landscape-design`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `L01` Hero | Service hero with an eyebrow that names the concept status. | `BV-IMG-25` (CP-05) | `C-P04-L01` |
| `L02` Plan the whole outdoor experience | Three images in a row, captions and disclosures beneath each, stacked on mobile. All three from `CP-05`. | `BV-IMG-26` drawing, `BV-IMG-27` materials, `BV-IMG-28` terrace | `C-P04-L02` |
| `L03` Scope | Two-column scope list, six items, plus the technical note. | none | `C-P04-L03` |
| `L04` A proposal for your site | Text block on `--surface`, max 720 px. Landscape is quoted individually; no published rate. | none | `C-P04-L04` |
| `L05` Process | Four-step horizontal list on desktop, vertical on mobile, plus the implementation note. | none | `C-P04-L05` |
| `L06` FAQ | `Q1`, three questions. | none | `C-P04-L06` |
| `L07` Enquiry form | `F1`, related links to P05 and P13. | none | `C-F1` |

### 15.5 P05 — Villa Renovation `/services/villa-renovation`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `V01` Hero | Service hero, CTA with Villa preselected. | `BV-IMG-29` (CP-01) | `C-P05-V01` |
| `V02` Concept projects | Two `CARD-PROJECT` items at equal height linking to P15 and P16, with concept disclosure. | reuse `BV-IMG-03`, `BV-IMG-05` | `C-P05-V02` |
| `V03` Renovation around your priorities | Text plus six-item scope list in two columns, one supporting image 4:3 on the right, plus the works note. | `BV-IMG-30` (CP-01) | `C-P05-V03` |
| `V04` A project you can follow | Full-width text block, no image. | none | `C-P05-V04` |
| `V05` Scope and changes | Text plus a three-item list: Scope, Specifications, Changes. No separate small-print legal block. | none | `C-P05-V05` |
| `ENG` Engineering strip | `ENG-SHORT` per section 14.5, placed here, above the FAQ. | none | `C-ENG-SHORT` |
| `V06` Joinery coordinated with the build | Two images side by side: installed joinery 4:3 and production 4:5. Both carry captions and disclosures. CTA to `/services/bespoke-joinery`. | `BV-IMG-31` (CP-01), `BV-IMG-32` (CP-06) | `C-P05-V06` |
| `V07` Process and warranty | Compact five-stage list linking to `/process`, followed by the renovation warranty strip linking to `/warranty`. | none | `C-P05-V07` |
| `V08` FAQ | `Q1`, five questions. | none | `C-P05-V08` |
| `V09` Enquiry form | `F1` with the villa-specific heading. | none | `C-F1` |

### 15.6 P06 — Apartment Renovation `/services/apartment-renovation`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `A01` Hero | Service hero, CTA with Apartment preselected. | `BV-IMG-33` (CP-03) | `C-P06-A01` |
| `A02` Featured concept project | Wide card 8:5 with the scope line and a link to P17. | `BV-IMG-34` (CP-03) | `C-P06-A02` |
| `A03` Make better use of your space | Text plus six-item scope list. | none | `C-P06-A03` |
| `A04` Planned around the building | Four items: access and working hours, deliveries and waste, shared areas, approvals. One supporting image. | `BV-IMG-35` (CP-03) | `C-P06-A04` |
| `A05` Scope, changes and your manager | Compact text block. | none | `C-P06-A05` |
| `A06` Finishes and storage | `G1` gallery with three frames from `CP-03`, links to P09 and P10. | `BV-IMG-36`, `BV-IMG-37`, `BV-IMG-38` | `C-P06-A06` |
| `ENG` Engineering strip | `ENG-SHORT`, identical wording to P05 and P07. | none | `C-ENG-SHORT` |
| `A07` FAQ | `Q1`, four questions. | none | `C-P06-A07` |
| `A08` Warranty and form | Renovation warranty strip, then `F1`. | none | `C-F1` |

### 15.7 P07 — Commercial Fit-Out `/services/commercial-fit-out`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `C01` Hero | Service hero, CTA with Commercial preselected. | `BV-IMG-39` (CP-04) | `C-P07-C01` |
| `C02` Featured concept project | Full-width `WIDE` card with the scope line, linking to P18. | `BV-IMG-40` (CP-04) | `C-P07-C02` |
| `C03` From the brief to a working space | Six-row text list plus the scope note. | none | `C-P07-C03` |
| `C04` Planning around your operations | Text block, no image. | none | `C-P07-C04` |
| `C05` Workspace details | `G1` gallery, three frames from `CP-04`. | `BV-IMG-41`, `BV-IMG-42`, `BV-IMG-43` | `C-P07-C05` |
| `ENG` Engineering strip | `ENG-SHORT`, not shortened on this page. | none | `C-ENG-SHORT` |
| `C06` FAQ | `Q1`, four questions. | none | `C-P07-C06` |
| `C07` Enquiry form | `F1`, related links to P11, P12, P13. | none | `C-F1` |

### 15.8 P08 — Bespoke Joinery `/services/bespoke-joinery`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `J01` Hero | Service hero, CTA with Joinery preselected. | `BV-IMG-44` (CP-01) | `C-P08-J01` |
| `J02` Choose the piece your project needs | Three editorial modules linking to P09, P10 and the `#capabilities` anchor. | none | `C-P08-J02` |
| `J03` Materials and details | Anchor `#capabilities`. Three `DETAIL` images in a row at consistent distance, each with caption and disclosure. Two are shown if a third is unpublished; frames are never duplicated to fill the row. | `BV-IMG-45`, `BV-IMG-46`, `BV-IMG-47` | `C-P08-J03` |
| `J04` Our production | Split: text left, production image right 4:5. States own production of cabinet furniture, glass and stone work, sourced upholstered furniture, and visits by appointment. No location is named. | `BV-IMG-48` (CP-06) | `C-P08-J04` |
| `J05` From brief to installation | Six-step vertical list plus the measurement note. | none | `C-P08-J05` |
| `J06` Warranty | Joinery warranty strip linking to `/warranty`. | none | `C-P08-J06` |
| `J07` FAQ | `Q1`, four questions. | none | `C-P08-J07` |
| `J08` Enquiry form | `F1`, related links to P09, P10, P13. | none | `C-F1` |

### 15.9 P09 — Custom Kitchens `/services/custom-kitchens`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `K01` Hero | Service hero, CTA with Kitchens preselected. | `BV-IMG-49` (CP-01) | `C-P09-K01` |
| `K02` Start with how you use the kitchen | Text plus a pair: drawing view `contain` and the matching interior 4:3, both from the same project world. | `BV-IMG-50` drawing, `BV-IMG-51` interior | `C-P09-K02` |
| `K03` The details that shape the result | Six text items in a 3 × 2 grid, plus the materials note. No prices per metre, no brand claims, no moisture-resistance claims. | none | `C-P09-K03` |
| `K04` Kitchen gallery | `G1`, four frames: general view, open storage, worktop junction, installation detail. Consistent height and colour across the four. | `BV-IMG-52`, `BV-IMG-53`, `BV-IMG-54`, `BV-IMG-55` | `C-P09-K04` |
| `K05` Your kitchen, step by step | Six-step list adapted from `J05`. | none | `C-P09-K05` |
| `K06` A quote based on your kitchen | Text block on `--surface`. | none | `C-P09-K06` |
| `K07` FAQ | `Q1`, four questions. | none | `C-P09-K07` |
| `K08` Warranty and form | Joinery warranty strip, then `F1`, related links to P10 and P13. | none | `C-F1` |

### 15.10 P10 — Wardrobes and Dressing Rooms `/services/wardrobes`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `W01` Hero | Service hero, CTA with Wardrobes preselected. | `BV-IMG-56` (CP-01) | `C-P10-W01` |
| `W02` A place for what matters | Text plus a five-item scope list and the inclusion note. | none | `C-P10-W02` |
| `W03` Inside and out | Two images of the same unit, closed and open, identical framing, captions `Closed` and `Open — internal layout and fittings`. If either is unpublished the block is hidden; a single frame does not communicate the point. | `BV-IMG-57`, `BV-IMG-58` | `C-P10-W03` |
| `W04` Our production | Text block identical in content to `J04`, with a link to P08. | none | `C-P10-W04` |
| `W05` Process | Six-step list. | none | `C-P10-W05` |
| `W06` FAQ | `Q1`, four questions. | none | `C-P10-W06` |
| `W07` Warranty and form | Joinery warranty strip, then `F1`. | none | `C-F1` |

### 15.11 P11 — Approvals and NOCs `/services/approvals`

**Construction note.** This page is documentary in character. It carries no interior gallery. It is never shortened during build.

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `N01` Hero | Split hero, text left, drawing view right, `object-fit: contain` on `--surface`, never cropped. | `BV-IMG-59` drawing | `C-P11-N01` |
| `N02` The route depends on where your property is | H2, intro, then a four-row table on desktop and four stacked blocks on mobile, text only, no logos and no icons. Row order is fixed: mainland villa, villa in a master community, apartment or office in a building, property in Abu Dhabi. Closing line beneath the table. | none | `C-P11-N02` |
| `N02a` Why this is settled before the design | Text block, two paragraphs. | none | `C-P11-N02a` |
| `N02b` What usually requires a permit | Two text columns: usually requires approval, usually does not but is checked. Mandatory disclaimer line beneath, at body size, never in small print or a footnote. | none | `C-P11-N02b` |
| `N03` What we do | Four-item list. | none | `C-P11-N03` |
| `N03a` Engineering coordination | One-line block linking to `/about#leadership`. No years of experience, no ages, no storey counts, no claim that having an engineering lead guarantees approval. | none | `C-P11-N03a` |
| `N04` What to share with us | Short text block. Property ownership documents are never requested in a public form. | none | `C-P11-N04` |
| `N05` Related concept projects | Two `CARD-PROJECT` items linking to P15 and P18. | reuse `BV-IMG-03`, `BV-IMG-06` | `C-P11-N05` |
| `N06` FAQ | `Q1`, six questions. | none | `C-P11-N06` |
| `N07` Enquiry form | `F1`, related links to P12, P05, P07. | none | `C-F1` |

**Page acceptance.** The company's fee is separated from authority charges. There is no promise to obtain a permit or to obtain it by a date. No authority or community management names appear until the company supplies them in writing. No authority logos or emblems anywhere. No fee amounts and no review durations are published.

### 15.12 P12 — MEP and HVAC `/services/mep-hvac`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `E01` Hero | Split hero, text left, coordination drawing view right, `contain`. The page sells design, installation and upgrades, never routine air-conditioning servicing. | `BV-IMG-60` drawing | `C-P12-E01` |
| `E02` Scope | Four items: electrical, plumbing, HVAC, coordination. | none | `C-P12-E02` |
| `E03` Resolve conflicts before installation | Text block. | none | `C-P12-E03` |
| `E04` Process | Five-step list. Specific tests are not promised on the website. | none | `C-P12-E04` |
| `E05` FAQ | `Q1`, three questions. | none | `C-P12-E05` |
| `E06` Enquiry form | `F1`, related links to P11, P07, P05. | none | `C-F1` |

### 15.13 P13 — Materials and Procurement `/services/materials-procurement`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `M01` Hero | Service hero with a material composition image. | `BV-IMG-61` (CP-07) | `C-P13-M01` |
| `M02` What we take off your hands | Four text items in the fixed order Selection, Comparison, Specification, Coordination, then the joint-working line, and only then the list of possible categories. No savings claims of any kind. | none | `C-P13-M02` |
| `M03` Two purchasing routes | Two text columns A and B plus the responsibility note. | none | `C-P13-M03` |
| `M04` A defined procurement scope | Text block on `--surface`. | none | `C-P13-M04` |
| `M05` Material palettes | Three `MOOD` images in a row, each captioned with the concept project it belongs to, each with disclosure. No colour swatch circles that do nothing. No material switcher in version 1. | `BV-IMG-62`, `BV-IMG-63`, `BV-IMG-64` | `C-P13-M05` |
| `M06` FAQ | `Q1`, four questions. | none | `C-P13-M06` |
| `M07` Enquiry form | `F1`. | none | `C-F1` |

### 15.14 P14 — Concept Projects `/projects`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `G01` Intro | H1 and a two-sentence intro that states plainly that these are concept projects illustrating scope and capability. No large hero image above the grid. | none | `C-P14-G01` |
| `G02` Grid | Two columns, 32 px gap, 48 px row gap, one column on mobile. Four cards. Each card: image, project name, scope line, caption, concept disclosure. Image and title are one link. Equal image height within a row is mandatory. Colour consistency across all four is checked at full width. Filters and search are not built for four projects; if the catalogue ever exceeds eight, add filter buttons with `aria-pressed` and a `?type=` query parameter, and never create separate thin filter URLs. | reuse `BV-IMG-03`, `BV-IMG-04`, `BV-IMG-05`, `BV-IMG-06` | `C-P14-G02` |
| `G03` CTA | Text link block with the primary CTA to `#project-enquiry` on `/contact`. | none | `C-P14-G03` |

**Empty state** (technical only, not a design state): `Concept projects are being prepared. Contact us to discuss relevant examples.` / `Материалы концептуальных проектов готовятся. Свяжитесь с нами, чтобы обсудить подходящие примеры.`

### 15.15 Concept project template — P15 to P18

All four project pages use one template. No invented areas, budgets, durations, client names, addresses or completion dates. No status word such as "Completed". No before-and-after block: a before state cannot exist for a concept project, and inventing one is forbidden.

| Order | Section | Construction and behaviour | Media | Copy |
|---|---|---|---|---|
| 1 | `CS01` Breadcrumb | `Projects` → `/projects`, then the current page title. | none | `C-CS01` |
| 2 | `CS02` Title and cover | H1, then a line with the concept type and the scope illustrated, then the cover image `H-CASE` with a separate mobile crop. The concept disclosure appears directly beneath the cover, above the fold on mobile. | per page | per page |
| 3 | `CS03` Project overview | Two short paragraphs describing what the concept demonstrates, written as capability, never as delivery history. | none | per page |
| 4 | `CS04` Scope illustrated | Four to six bullet items naming the work the concept represents. | none | per page |
| 5 | `CS05` Plan and design | Drawing view `contain` plus, where specified, one further view. Caption plus AI disclosure. If the asset is unpublished, the whole section is hidden. | per page | per page |
| 6 | `CS06` Materials | One `MOOD` composition of that project's palette only. Never a palette borrowed from another project. | per page | per page |
| 7 | `CS07` Gallery | `G1`: two room views, one `WIDE` frame, and two details, to a maximum of twelve frames. Consistent light and colour across the set. Minimum four published assets for the page to be published. | per page | per page |
| 8 | `CS08` Related projects | Two `CARD-PROJECT` items plus contextual service links. | reuse | per page |
| 9 | `CS09` Enquiry form | `F1` with the project context passed to the form and the heading "Discuss a Similar Project". | none | `C-F1` |

**Optional CMS fields for these pages:** `property_type` and `concept_status` are mandatory; `area`, `year`, `duration` and `budget` do not exist for concept projects and must not be rendered. Empty dashes are never displayed.

#### 15.15.1 P15 — Coastal Villa Concept `/projects/coastal-villa-concept`

| Section | Media | Copy |
|---|---|---|
| `CS02` cover | `BV-IMG-65` (CP-01) | `C-P15-CS02` |
| `CS03` overview | none | `C-P15-CS03` |
| `CS04` scope | none | `C-P15-CS04` |
| `CS05` plan | `BV-IMG-66` drawing | `C-P15-CS05` |
| `CS06` materials | `BV-IMG-67` mood | `C-P15-CS06` |
| `CS07` gallery | `BV-IMG-68`, `BV-IMG-69`, `BV-IMG-70` (WIDE), `BV-IMG-71`, `BV-IMG-72` | `C-P15-CS07` |
| `CS08` related | reuse `BV-IMG-04`, `BV-IMG-05`; service links to P05, P03, P08 | `C-CS08` |

#### 15.15.2 P16 — Garden Villa Concept `/projects/garden-villa-concept`

| Section | Media | Copy |
|---|---|---|
| `CS02` cover | `BV-IMG-73` (CP-02, anchor image of the project) | `C-P16-CS02` |
| `CS03` overview | none | `C-P16-CS03` |
| `CS04` scope | none | `C-P16-CS04` |
| `CS05` plan | `BV-IMG-74` drawing | `C-P16-CS05` |
| `CS06` materials | `BV-IMG-75` mood | `C-P16-CS06` |
| `CS07` gallery | `BV-IMG-76`, `BV-IMG-77` (WIDE), `BV-IMG-78`, `BV-IMG-79` | `C-P16-CS07` |
| `CS08` related | reuse `BV-IMG-03`, `BV-IMG-06`; service links to P05, P04, P08 | `C-CS08` |

#### 15.15.3 P17 — Tower Residence Concept `/projects/tower-residence-concept`

| Section | Media | Copy |
|---|---|---|
| `CS02` cover | `BV-IMG-80` (CP-03) | `C-P17-CS02` |
| `CS03` overview | none | `C-P17-CS03` |
| `CS04` scope | none | `C-P17-CS04` |
| `CS05` plan | `BV-IMG-81` drawing | `C-P17-CS05` |
| `CS06` materials | `BV-IMG-82` mood | `C-P17-CS06` |
| `CS07` gallery | `BV-IMG-83`, `BV-IMG-84` (WIDE), `BV-IMG-85`, `BV-IMG-86` | `C-P17-CS07` |
| `CS08` related | reuse `BV-IMG-03`, `BV-IMG-05`; service links to P06, P03, P09 | `C-CS08` |

#### 15.15.4 P18 — Business District Office Concept `/projects/business-district-office-concept`

| Section | Media | Copy |
|---|---|---|
| `CS02` cover | `BV-IMG-87` (CP-04) | `C-P18-CS02` |
| `CS03` overview | none | `C-P18-CS03` |
| `CS04` scope | none | `C-P18-CS04` |
| `CS05` plan | `BV-IMG-88` drawing | `C-P18-CS05` |
| `CS06` materials | `BV-IMG-89` mood | `C-P18-CS06` |
| `CS07` gallery | `BV-IMG-90` (WIDE), `BV-IMG-91`, `BV-IMG-92` | `C-P18-CS07` |
| `CS08` related | reuse `BV-IMG-04`, `BV-IMG-05`; service links to P07, P11, P13 | `C-CS08` |

### 15.16 P19 — Our Process `/process`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `PR01` Hero | Split hero, text left, studio image right 8:5, CTA to `#project-enquiry`. | `BV-IMG-93` (CP-07) | `C-P19-PR01` |
| `PR02` Ten stages | Vertical sequence 01–10. Desktop: numbers and titles in the left column, text in the right. Mobile: one column. All stages visible without clicking or animation. Explanatory note beneath the list. Never present the whole contractual relationship as starting only at stage 05. | none | `C-P19-PR02` |
| `PR03` Three routes | Three text columns on desktop, sequential blocks on mobile, with the permanent anchors `#design-only`, `#build-from-your-design`, `#bespoke-joinery`. Anchors are not renamed without updating every inbound link. | none | `C-P19-PR03` |
| `PR04` Decisions you can follow | Text plus one vertical image 4:5. | `BV-IMG-94` (CP-07) | `C-P19-PR04` |
| `PR04a` How payment is arranged | Text block on `--surface`, max 720 px, directly below `PR04`. Uses `PAY-SHORT` verbatim plus the permitted additional line. | none | `C-PAY-SHORT` |
| `PR05` Enquiry form | `F1`. No duplicated FAQ on this page. | none | `C-F1` |

### 15.17 P20 — Our Story `/about`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `A01` Hero | Full-width intro with one image 8:5. No people, no portraits. | `BV-IMG-95` (CP-06) | `C-P20-A01` |
| `A02` Two founders, one standard of work | Text block, three paragraphs. States the 2021 start of the family business, the engineering and project management backgrounds by role, and the client relations partner. Never claims that the legal entity was registered in 2021. | none | `C-P20-A02` |
| `A03` Leadership | Anchor `#leadership`. Three role profiles stacked, each with a role title in Manrope 500 14/20 `--accent`, a heading in Cormorant Garamond Medium 28/36, and body text 17/28, separated by 1 px `--line` dividers with 48 px desktop and 32 px mobile spacing. No names, no portraits, no AI faces. Presentation order inside each profile is fixed: current responsibility, then relevant background, then what it means for the client's project. | none | `C-P20-A03` |
| `A03b` Experience behind Bellvero | Block on `--surface` directly after `A03`. Mandatory introductory line at body size stating that these projects were delivered by the founders' previous employers. Then a text table with the columns Project, Employer, Role, Period, Responsibility. A row is published only when role, period and responsibility are filled; unfilled rows are hidden rather than showing a dash. Photographs of these buildings may be published **only** as real photographs supplied by the company with `asset_type: real_photo` and `publication_permission: true`, displayed as a row of up to four 4:3 images beneath the table with a factual caption naming the building and the employer. AI generation of these buildings is forbidden. If no rights-cleared photographs exist, the image row is hidden and the table stands alone. | `REAL-01` … `REAL-04` (company-supplied) | `C-P20-A03b` |
| `A03c` How this works on your project | Short text block. No promise of daily founder attendance. | none | `C-P20-A03c` |
| `A04` Production | H2, text, one `WIDE` image and two `DETAIL` images, plus an optional production video. States own production of cabinet furniture, glass and stone work, sourced upholstered furniture, and visits by appointment. No location is named. Two CTAs: to P08 and to P21. | `BV-IMG-96`, `BV-IMG-97`, `BV-IMG-98`, `BV-VID-03` | `C-P20-A04` |
| `A04b` Who you are contracting with | Block on `--surface`, text only: legal entity name, licence number, issuing authority, licensed activities, and the statement that contracts, invoices and warranty documents are issued in this name. Values come from one CMS record and are rendered on `/about`, `/contact` and in the footer. Square-bracket placeholders are forbidden in the public build: the block is either complete or hidden. No authority logos, no emirate emblems, no image of a licence. | none | `C-P20-A04b` |
| `A05` What you can expect | Four-line text block linking to `/process`. | none | `C-P20-A05` |
| `A06` Concept projects | Two `CARD-PROJECT` items. | reuse `BV-IMG-03`, `BV-IMG-06` | `C-P20-A06` |
| `A07` Brand composition and form | One brand still-life image, then `F1`. | `BV-IMG-99` (BRAND) | `C-F1` |

### 15.18 P21 — Contact `/contact`

This page carries no imagery by design: no atmospheric hero, no map of an office that does not exist.

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `K01` Intro and form | H1 and a short intro, with contact details in the left 5 columns and `F1` in the right 7 columns. Mobile order: H1 → short intro → form → contact details. | none | `C-P21-K01` |
| `K02` Contact lines | WhatsApp with icon and text, phone with `tel:` in international format, email with `mailto:`, working hours, project locations, meetings policy, company details line. Empty or non-working links are never rendered. | none | `C-P21-K02` |
| `K03` What happens next | Three numbered steps plus the note on complimentary first discussion and initial renovation site visit. | none | `C-P21-K03` |
| `K04` FAQ | `Q1`, three questions. No second full form after the first. | none | `C-P21-K04` |

### 15.19 P22 — Warranty and Aftercare `/warranty`

| Section | Construction and behaviour | Media | Copy |
|---|---|---|---|
| `WA01` Intro | H1 and a two-sentence intro. | none | `C-P22-WA01` |
| `WA02` Cover periods | Two text columns without images: 36 months renovation workmanship, 48 months bespoke cabinetry. | none | `C-P22-WA02` |
| `WA03` Products and use | Text block. No blanket moisture exclusion for bathrooms and waterproofing. | none | `C-P22-WA03` |
| `WA04` How to contact us | Text block plus a CTA to `/contact` with the aftercare reason preselected. No promise of a 24-hour fix. | none | `C-P22-WA04` |

### 15.20 P23 — Privacy Notice `/privacy`

Single column, max 800 px, top padding 64 / 40 px, H2 30/26 px, body 17/16 px, anchored table of contents, no hero image. Sections: who processes the data, information you provide, how it is used, service providers, retention, your choices and requests, external services, changes, last updated date. Copy `C-P23`. Before publication the legal entity, contact email, registered address, processor list and retention periods must be supplied; unused sections are deleted rather than published with brackets. Marketing subscription is not part of this build and consent for it is not collected.

### 15.21 P24 — Cookie Settings `/cookies`

H1, explanatory text, and a public list of every tool actually installed with name, provider, purpose, category, duration and a link to its policy. A row appears only after the tool is installed. Copy `C-P24`.

**Consent dialog.** Title `Your Privacy Choices` / `Ваши настройки конфиденциальности`. Three buttons of equal accessibility and equal visual weight: Accept All, Reject Optional, Settings. The reject option is never rendered in pale, low-contrast text. On mobile the buttons stack vertically, the banner never covers the enquiry form permanently and is always dismissible. Categories: Necessary — always active, Analytics, Marketing; the last two are off until the visitor chooses. A persistent `Cookie Settings` link sits in the footer. Technically: no optional pixels, advertising iframes or external video players load before consent; the hero video is self-hosted; changing consent stops further sending immediately; the consent record never contains enquiry content.

### 15.22 System pages and states

| Case | Behaviour | Copy |
|---|---|---|
| 404 | H1, one explanatory sentence, three links: Services, Projects, Contact. Server returns HTTP 404. Never mask as 200 and never redirect all errors to the home page. | `C-404` |
| Gallery load error | Neutral surface with the message and a Retry button; surrounding text stays readable; the failure is logged. | `C-ERR-GALLERY` |
| Video error or blocked autoplay | Poster remains, no error message to the visitor. If the visitor pressed play and it failed, show the video-unavailable line. | `C-ERR-VIDEO` |
| CMS draft | Draft content is never served publicly. If a published page is withdrawn, choose 404, 410 or a redirect by the real reason; never substitute another project. | — |
| Missing optional field | Hidden together with its label. No `0`, `N/A` or "coming soon" in public content. | — |
| Form session expiry or network loss | Return the button to its idle state, keep the entered values, never claim receipt. | `C-F1` |
| Staging environment | A visible bar reading `Preview — test enquiries` / `Предпросмотр — тестовые обращения`, absent in production. | — |
| Print and sharing | Project pages print legibly with no sticky header overlapping text. Copying a URL yields the canonical localised address with no temporary tokens and no visitor data. | — |

### 15.23 Global page rules

1. Every commercial page ends with `F1` and the footer, in that order.
2. Every page has exactly one `H1`.
3. Heading levels descend without skipping. Section headings are `H2`; items inside a section are `H3`.
4. Every page has its own `title`, `meta description`, canonical URL, hreflang pair and Open Graph set, per section 23.
5. Every CTA preserves the current language.
6. No page uses a 100vh hero except P01.
7. No modal appears on page entry except the cookie dialog required by section 24.

## 16. Detailed Specification for Every Section — cross-page rules

These rules govern section construction everywhere and are not repeated per page.

| Rule | Specification |
|---|---|
| Section spacing | 104 / 72 / 56 px vertical padding for major sections, 64 / 48 / 40 px for compact sections |
| Heading rhythm | Heading → intro 16 px; intro → content 32–40 px |
| Media placement | Image side is defined per section in part 15 and is never alternated mechanically |
| Card rows | Equal height within a row; content decides the height, not a fixed value |
| Lists | Two columns on desktop, one on mobile; 24 px between items; no per-item background cards |
| Quotes and claims | No testimonials, no counters, no ratings, no awards, no "No.1" claims anywhere on the site |
| Empty media | Block hides; no placeholder, no grey box, no icon |
| Anchor offset | `scroll-margin-top` 104 px desktop, 88 px mobile on every anchored section |
| Language parity | Section order and section count are identical in EN and RU |
| Disclosure | Every AI asset renders caption and disclosure per section 10, in every context including lightbox |

---

## 17. Complete EN and RU Website Copy

Every string below is published verbatim. Where a string contains square brackets, the company supplies the value. Russian copy is written as natural Russian, not as a mirrored translation of the English syntax; both versions carry the same facts at the same depth.

### 17.1 Interface microcopy pack

| Key | EN | RU |
|---|---|---|
| `nav.services` | Services | Услуги |
| `nav.projects` | Projects | Проекты |
| `nav.process` | Our Process | Как мы работаем |
| `nav.about` | About | О компании |
| `nav.contact` | Contact | Контакты |
| `nav.all_services` | All Services | Все услуги |
| `nav.specialist` | Specialist Services | Специализированные услуги |
| `nav.menu_open` | Menu | Меню |
| `nav.menu_close` | Close | Закрыть |
| `nav.lang` | EN / RU | EN / RU |
| `cta.primary` | Discuss Your Project | Обсудить проект |
| `cta.whatsapp` | WhatsApp Us | Написать в WhatsApp |
| `cta.call` | Call Us | Позвонить |
| `cta.all_projects` | All Projects | Все проекты |
| `cta.similar_project` | Discuss a Similar Project | Обсудить похожий проект |
| `cta.sample_package` | View a Sample Drawing Set | Посмотреть пример комплекта чертежей |
| `cta.meet_leadership` | How our team works on your project | Как наша команда работает над вашим проектом |
| `cta.explore_joinery` | Explore Bespoke Joinery | Подробнее о мебели на заказ |
| `cta.workshop_visit` | Request a Production Visit | Обсудить посещение производства |
| `cta.aftercare` | Contact Aftercare | Обратиться по гарантии |
| `label.optional` | Optional | Необязательно |
| `label.status_concept` | Concept project | Концептуальный проект |
| `gallery.counter` | {n} of {total} | {n} из {total} |
| `gallery.close` | Close gallery | Закрыть галерею |
| `gallery.prev` | Previous image | Предыдущее изображение |
| `gallery.next` | Next image | Следующее изображение |
| `video.pause` | Pause video | Приостановить видео |
| `video.play` | Play video | Воспроизвести видео |
| `video.unavailable` | Video is unavailable. | Видео недоступно. |
| `image.unavailable` | Image unavailable | Изображение недоступно |
| `error.retry` | Retry | Повторить |
| `faq.expand` | Show answer | Показать ответ |
| `faq.collapse` | Hide answer | Скрыть ответ |
| `breadcrumb.projects` | Projects | Проекты |
| `footer.rights` | © {year} Bellvero Group | © {year} Bellvero Group |
| `footer.cookie_settings` | Cookie Settings | Настройки cookie |
| `footer.privacy` | Privacy Notice | Обработка персональных данных |
| `footer.warranty` | Warranty | Гарантия |
| `a11y.skip` | Skip to main content | Перейти к основному содержанию |
| `a11y.lang_switch` | Switch language to Russian / English | Переключить язык на английский / русский |
| `a11y.logo` | Bellvero Group — home | Bellvero Group — на главную |

### 17.2 Shared copy — `C-FOOTER`

| Element | EN | RU |
|---|---|---|
| Footer line | Interior design, renovation and bespoke joinery. A family-led business serving Dubai and Abu Dhabi. | Дизайн интерьера, ремонт и мебель на заказ. Семейный бизнес с проектами в Дубае и Абу-Даби. |
| Contact heading | Contact | Связаться |
| Working hours | Monday–Friday, 9:00–18:00 (UAE time) | Понедельник–пятница, 9:00–18:00, время ОАЭ |
| Visits heading | Visits | Встречи |
| Visits line | Meetings at your property or another agreed location. Production visits by appointment. | Встречи на вашем объекте или в другом согласованном месте. Посещение производства — по договорённости. |
| Company line | [LEGAL ENTITY NAME] · Licence no. [LICENCE NUMBER] · [ISSUING AUTHORITY] | [ЮРИДИЧЕСКОЕ ЛИЦО] · Лицензия № [НОМЕР] · [ОРГАН ВЫДАЧИ] |

### 17.3 Enquiry form copy — `C-F1`

| Element | EN | RU |
|---|---|---|
| Heading | Tell Us About Your Project | Расскажите о вашем проекте |
| Body | Share your plans. Our client relations manager will contact you to understand the brief and agree the next step. | Расскажите о ваших планах. Менеджер по работе с клиентами свяжется с вами, чтобы уточнить задачу и согласовать следующий шаг. |
| Field: name | Name | Имя |
| Field: phone | Phone / WhatsApp | Телефон / WhatsApp |
| Field: email | Email | Email |
| Field: service | Service | Услуга |
| Field: location | Location | Местоположение |
| Field: details | Project details | О проекте |
| Placeholder: details | Property, location and what you would like to change | Объект, район и что вы хотите изменить |
| Service options | Design · Landscape · Villa · Apartment · Commercial · Kitchens · Wardrobes · Joinery · Approvals · MEP · Procurement · Not sure yet | Дизайн · Ландшафт · Вилла · Квартира · Коммерческий объект · Кухни · Шкафы · Мебель · Согласования · Инженерные системы · Комплектация · Пока не знаю |
| Location options | Dubai · Abu Dhabi · Other | Дубай · Абу-Даби · Другое |
| Submit | Send Enquiry | Отправить запрос |
| Secondary | WhatsApp Us | Написать в WhatsApp |
| Privacy line | We use these details to respond to your enquiry. Read our Privacy Notice. | Используем эти данные для ответа на обращение. Подробнее — в политике обработки данных. |
| Validation: name | Please enter your name. | Укажите имя. |
| Validation: phone | Enter a valid phone number with country code. | Укажите корректный номер с кодом страны. |
| Validation: email | Check your email address. | Проверьте email. |
| Sending | Sending… | Отправляем… |
| Success | Thank you. Your enquiry has been received. We will contact you shortly — if your message arrives outside working hours, we will reply at the start of the next working day. | Спасибо. Ваш запрос получен. Мы свяжемся с вами в ближайшее время. Если сообщение отправлено вне рабочих часов, ответим в начале следующего рабочего дня. |
| Error | We couldn't send your enquiry. Your details are still here. Please try again or contact us on WhatsApp. | Не удалось отправить запрос. Введённые данные сохранены. Повторите попытку или напишите в WhatsApp. |
| Rate limit | Please wait a moment before trying again. | Подождите немного и повторите попытку. |
| WhatsApp prefill | Hello Bellvero Group, I would like to discuss [service/project]. | Здравствуйте, Bellvero Group. Хочу обсудить [услугу/проект]. |

### 17.4 Shared blocks

**`C-ENG-SHORT`**

| Element | EN | RU |
|---|---|---|
| Heading | Engineering Experience From Large-Scale Construction | Инженерный опыт крупного строительства |
| Body | Our technical direction is led by a co-founder who has held chief engineer positions with UAE contracting companies on large residential, commercial and public buildings. The same approach to technical review and coordination is applied to your property. | Техническое направление возглавляет сооснователь компании, занимавший должность главного инженера в подрядных компаниях ОАЭ на крупных жилых, коммерческих и общественных объектах. Тот же подход к технической проверке и координации применяется к вашему объекту. |
| Link | How our team works on your project → | Как наша команда работает над вашим проектом → |

**`C-PAY-SHORT`**

| Element | EN | RU |
|---|---|---|
| Heading | How Payment Is Arranged | Как устроен порядок оплаты |
| Body | The payment schedule is agreed before work begins and is recorded in the contract. It sets out the initial payment, the payments that follow and the conditions for each. Manufacturing and material purchases may be scheduled as separate payments. | График оплаты согласовывается до начала работ и фиксируется в договоре. В нём указываются аванс, последующие платежи и условия их внесения. Для изготовления мебели и закупки материалов могут предусматриваться отдельные платежи. |
| Additional line | Additional works are quoted and approved before they start, and are invoiced according to the same agreement. | Дополнительные работы рассчитываются и согласовываются до начала и оплачиваются по тому же договору. |

**Warranty strips**

| Element | EN | RU |
|---|---|---|
| Renovation strip | 3-year renovation workmanship warranty | 3 года гарантии на качество ремонтных работ |
| Joinery strip | 4-year warranty on our bespoke joinery manufacture and installation | 4 года гарантии на изготовление и монтаж нашей корпусной мебели |

**System messages**

| Key | EN | RU |
|---|---|---|
| `C-404` heading | This Page Could Not Be Found | Страница не найдена |
| `C-404` body | The address may have changed. Explore our services or projects, or contact us about your enquiry. | Возможно, адрес изменился. Перейдите к услугам или проектам либо свяжитесь с нами. |
| `C-ERR-GALLERY` | Images could not be loaded. Try again. | Не удалось загрузить изображения. Попробуйте ещё раз. |
| `C-ERR-VIDEO` | Video is unavailable. | Видео недоступно. |

### 17.5 P01 — Home

**`C-P01-H01`**

| Element | EN | RU |
|---|---|---|
| Eyebrow | BELLVERO GROUP | BELLVERO GROUP |
| H1 | Interior Design, Renovation & Bespoke Joinery | Дизайн интерьера, ремонт и мебель на заказ |
| Body | Thoughtful spaces for living and working. Design, approvals, renovation and custom-made furniture, coordinated by one team in Dubai and Abu Dhabi. | Продуманные пространства для жизни и работы. Дизайн, согласования, ремонт и мебель на заказ — с единой координацией в Дубае и Абу-Даби. |
| CTA | Discuss Your Project | Обсудить проект |

**`C-P01-H02`**

| Element | EN | RU |
|---|---|---|
| H2 | Explore Our Services | Наши направления |
| 01 title | Interior & Landscape Design | Дизайн интерьера и ландшафта |
| 01 line | A design project on its own, or developed as the basis for the renovation that follows. | Дизайн-проект отдельно или как основа для последующей реализации. |
| 01 links | Interior Design → · Landscape Design → | Дизайн интерьера → · Ландшафт → |
| 02 title | Villa & Apartment Renovation | Ремонт вилл и квартир |
| 02 line | A complete renovation with design and approvals, or delivery of a design you already have. | Комплексный ремонт с дизайном и согласованиями или реализация вашего готового проекта. |
| 02 links | Villas → · Apartments → | Виллы → · Квартиры → |
| 03 title | Commercial Fit-Out | Коммерческая отделка |
| 03 line | A workspace developed from scratch, or fit-out from your existing drawings and approvals. | Разработка проекта помещения или отделка по предоставленным чертежам и согласованиям. |
| 03 links | Explore Commercial Fit-Out → | Подробнее → |
| 04 title | Bespoke Joinery & Furniture | Столярные изделия и мебель |
| 04 line | A single kitchen or wardrobe, or the full set of joinery for a property. | Отдельная кухня или гардеробная либо весь комплекс мебели для объекта. |
| 04 links | Explore Joinery → | Подробнее → |
| Footer link | All Services → | Все услуги → |

**`C-P01-H03`**

| Element | EN | RU |
|---|---|---|
| H2 | Concept Projects | Концептуальные проекты |
| Intro | Concept projects that show how we plan, coordinate and detail a space, and the scope our team covers. | Концептуальные проекты показывают, как мы планируем, координируем и прорабатываем пространство, и какой объём работ берёт на себя команда. |
| Card 1 title | Coastal Villa | Вилла у воды |
| Card 1 scope | Interior Design · Approvals · Complete Renovation · Bespoke Joinery | Дизайн · Согласования · Комплексный ремонт · Мебель на заказ |
| Card 2 title | Tower Residence | Квартира в башне |
| Card 2 scope | Interior Design · Approvals · Complete Renovation · Bespoke Joinery | Дизайн · Согласования · Комплексный ремонт · Мебель на заказ |
| Card 3 title | Garden Villa | Вилла с садом |
| Card 3 scope | Renovation · Landscape · Selected Bespoke Joinery | Ремонт · Ландшафт · Отдельные элементы мебели |
| Card 4 title | Business District Office | Офис в деловом районе |
| Card 4 scope | Approvals · Office Fit-Out · Furniture Procurement | Согласования · Отделка офиса · Закупка мебели |
| CTA | All Projects → | Все проекты → |

**`C-P01-H04`**

| Element | EN | RU |
|---|---|---|
| H2 | One Team. One Responsibility. | Одна команда. Единая ответственность. |
| Body | Design decisions, site works and joinery are coordinated around one agreed scope, with a project manager as your main point of contact. | Дизайн, работы на объекте и мебель координируются в рамках согласованного объёма. Основной контакт по проекту — ваш проектный менеджер. |
| Item 1 | Defined Scope — Works, specifications and exclusions are clarified before execution. | Согласованный объём — До начала реализации определяем работы, спецификации и исключения. |
| Item 2 | Approved Changes — Additional work starts after you approve the revised scope and cost. | Согласованные изменения — Дополнительные работы начинаются после вашего подтверждения состава и стоимости. |
| Item 3 | Regular Updates — Photos, videos and written updates keep you informed as work progresses. | Регулярные отчёты — Фото, видео и письменные обновления помогают следить за ходом работ. |
| Item 4 | Site Supervision — Your foreman oversees day-to-day execution, with issues recorded and followed through. | Контроль на объекте — Прораб контролирует выполнение работ, замечания фиксируются и отрабатываются. |

**`C-P01-H05`**

| Element | EN | RU |
|---|---|---|
| H2 | From First Conversation to Handover | От первого разговора до сдачи объекта |
| 1 | Your Brief — We discuss the property, your priorities and the intended budget. | Ваша задача — Обсуждаем объект, приоритеты и предполагаемый бюджет. |
| 2 | Design & Planning — We develop the required design or review your existing project. | Дизайн и планирование — Разрабатываем необходимый дизайн или изучаем ваш готовый проект. |
| 3 | Scope & Preparation — We coordinate documentation, the quotation and required approvals. | Смета и подготовка — Координируем документацию, смету и необходимые согласования. |
| 4 | Works & Production — Site works, procurement and manufacturing are planned together. | Работы и изготовление — Работы на объекте, закупки и изготовление планируются совместно. |
| 5 | Inspection & Handover — We inspect the completed scope and confirm the handover and warranty details. | Проверка и передача — Проверяем выполненный объём, оформляем передачу и гарантийные условия. |
| Link | Our Process → | Как мы работаем → |

**`C-P01-H06`**

| Element | EN | RU |
|---|---|---|
| H2 | Family-Led. Personally Involved. | Семейный бизнес. Личное участие. |
| Body | Our family business began in 2021, started by two brothers who came from large-scale construction. One has held chief engineer positions with UAE contracting companies on major residential, commercial and public buildings; the other has managed construction projects across several countries. Today they lead the engineering and project management of Bellvero Group, alongside a third partner responsible for client relations. Our own production makes bespoke cabinetry, glass and stone work. | Наша семейная история в бизнесе началась в 2021 году: её начали два брата, пришедшие из большого строительства. Один занимал должность главного инженера в подрядных компаниях ОАЭ на крупных жилых, коммерческих и общественных объектах, второй управлял строительными проектами в нескольких странах. Сегодня они возглавляют инженерное направление и управление проектами Bellvero Group вместе с третьим партнёром, отвечающим за работу с клиентами. На собственном производстве изготавливаем корпусную мебель, выполняем работы со стеклом и камнем. |
| Role line 1 | Co-Founder & Chief Engineer | Сооснователь и главный инженер |
| Role line 2 | Co-Founder & Head of Project Management | Сооснователь и руководитель управления проектами |
| Role line 3 | Partner & Head of Client Relations | Партнёр и руководитель по работе с клиентами |
| Link | How our team works on your project → | Как наша команда работает над вашим проектом → |

**`C-P01-H07`** — FAQ

| # | EN question and answer | RU вопрос и ответ |
|---|---|---|
| 1 | Can I start with an existing design? — Yes. We can review your drawings and specifications and discuss renovation or joinery based on your designer's project. | Можно обратиться с готовым дизайном? — Да. Изучим чертежи и спецификации и обсудим ремонт или изготовление мебели по проекту вашего дизайнера. |
| 2 | Do you take on individual areas of work? — Yes. Alongside complete projects, we undertake individual rooms, joinery orders and specialist services. | Вы принимаете отдельные заказы? — Да. Помимо комплексных проектов, выполняем работы в отдельных помещениях, мебельные заказы и специализированные услуги. |
| 3 | Where do you work? — Our main project locations are Dubai and Abu Dhabi. Contact us to discuss your property. | Где вы работаете? — Основные направления — Дубай и Абу-Даби. Свяжитесь с нами, чтобы обсудить ваш объект. |
| 4 | How is the budget established? — We clarify the scope and specifications, then prepare a proposal. Any additional work requires your approval before it proceeds. | Как определяется бюджет? — Уточняем объём и спецификации, затем готовим предложение. Дополнительные работы выполняются после вашего подтверждения. |
| 5 | Can I follow the project remotely? — Your project manager shares photos, videos and written updates in a dedicated project group. The communication arrangements are agreed at the start. | Можно следить за проектом дистанционно? — Проектный менеджер отправляет фото, видео и письменные обновления в рабочую группу. Порядок коммуникации согласовываем в начале. |
| 6 | What happens after I enquire? — Our client relations manager contacts you to discuss your plans. For renovation projects, we then arrange an initial site visit. The first discussion and initial renovation visit are complimentary. | Что происходит после обращения? — Менеджер по работе с клиентами связывается с вами для обсуждения планов. Для ремонта затем согласовываем ознакомительный выезд. Первичное обсуждение и ознакомительный выезд по ремонту — без оплаты. |
| 7 | How is payment arranged? — `C-PAY-SHORT` body, verbatim. | Как устроен порядок оплаты? — текст `C-PAY-SHORT`, дословно. |

### 17.6 P02 — Services

| Ref | EN | RU |
|---|---|---|
| `C-P02-S01` H1 | Design, Renovation & Bespoke Joinery | Дизайн, ремонт и мебель на заказ |
| `C-P02-S01` body | Choose a complete project or the expertise you need for one part of it. We work with homes and commercial spaces in Dubai and Abu Dhabi. | Выберите комплексный проект или отдельное направление. Работаем с жилыми и коммерческими пространствами в Дубае и Абу-Даби. |
| `C-P02-S02` row 1 | Interior & Landscape Design — From the layout and material palette to visualisations and working drawings, we shape spaces around their use and character. | Дизайн интерьера и ландшафта — От планировки и палитры материалов до визуализаций и рабочих чертежей: разрабатываем пространства с учётом их назначения и характера. |
| `C-P02-S02` row 2 | Villa & Apartment Renovation — Complete renovations and individual upgrades, including work from a design you already have. | Ремонт вилл и квартир — Комплексный ремонт и отдельные работы, в том числе по вашему готовому дизайн-проекту. |
| `C-P02-S02` row 3 | Commercial Fit-Out — Office renovation and commercial spaces, with approvals, execution and furnishing coordinated to the agreed brief. | Коммерческая отделка — Ремонт офисов и коммерческих помещений с координацией согласований, работ и меблировки по согласованной задаче. |
| `C-P02-S02` row 4 | Bespoke Joinery & Furniture — Made-to-measure kitchens, wardrobes and furniture, with glass and stone details coordinated through our own production. | Столярные изделия и мебель на заказ — Кухни, шкафы и мебель по индивидуальным размерам с согласованными деталями из стекла и камня на нашем производстве. |
| `C-P02-S03` H2 | Specialist Services | Специализированные услуги |
| `C-P02-S03` intro | Available separately or as part of a wider project. | Можно заказать отдельно или в составе комплексного проекта. |
| `C-P02-S03` item 1 | Approvals & NOCs — Drawings, submission preparation and coordination with the relevant approving parties. | Согласования и NOC — Чертежи, подготовка подачи и взаимодействие с согласующими сторонами. |
| `C-P02-S03` item 2 | MEP & HVAC — Engineering design and installation aligned with the needs of the property. | Инженерные системы — Проектирование и монтаж с учётом требований объекта. |
| `C-P02-S03` item 3 | Materials & Procurement — Material selection and purchasing coordination across the agreed project scope. | Материалы и комплектация — Подбор материалов и сопровождение закупок в рамках согласованного проекта. |
| `C-P02-S04` Q1 | Can I combine services? — Yes. We can prepare a coordinated proposal covering the services you need. | Можно объединить услуги? — Да. Подготовим единое предложение по необходимым вам направлениям. |
| `C-P02-S04` Q2 | Can you work with another designer? — Yes. We review the supplied project before agreeing the scope of execution or manufacturing. | Работаете с другим дизайнером? — Да. Изучаем предоставленный проект до согласования объёма реализации или изготовления. |
| `C-P02-S04` Q3 | I'm not sure where to start. — Send a short description and any available plan. We will help identify the next step. | Я пока не знаю, с чего начать. — Пришлите краткое описание и имеющийся план. Поможем определить следующий шаг. |
| `C-P02-S05` link | Design Scope & Fees → | Состав и стоимость дизайна → |

### 17.7 P03 — Interior Design

| Ref | EN | RU |
|---|---|---|
| `C-P03-D01` eyebrow | Dubai & Abu Dhabi | Дубай и Абу-Даби |
| `C-P03-D01` H1 | Interior Design for the Way You Live and Work | Дизайн интерьера для жизни и работы |
| `C-P03-D01` body | Layouts, materials, visualisations and working drawings developed together, with the practical demands of implementation in mind. | Планировки, материалы, визуализации и рабочие чертежи разрабатываются совместно — с учётом будущей реализации. |
| `C-P03-D01` CTA | Discuss Your Interior | Обсудить интерьер |
| `C-P03-D02` H2 | From an Idea to a Defined Interior | От идеи к проработанному интерьеру |
| `C-P03-D02` body | A design project connects the use of the space with the finishes, furniture and technical details needed to realise it. | Дизайн-проект связывает организацию пространства с отделкой, мебелью и техническими деталями, необходимыми для реализации. |
| `C-P03-D02` captions | Layout · Materials · Realisation | Планировка · Материалы · Реализация |
| `C-P03-D03` H2 | What Your Design Project Includes | Состав дизайн-проекта |
| `C-P03-D03` list | Brief & measured base · Layout and furniture arrangement · Concept and material palette · 3D visualisations of agreed rooms · Demolition and proposed partitions, where applicable · Floor finishes and setting-out · Reflected ceiling plan and lighting layout · Switches, sockets and electrical points · Plumbing fixture layout · Wall elevations and relevant interior details · Design drawings for bespoke joinery · Finishes, furniture, lighting and sanitaryware schedules | Задача и обмерная основа · Планировка и расстановка мебели · Концепция и палитра материалов · 3D-визуализации согласованных помещений · Демонтаж и новые перегородки, где применимо · План полов и раскладки покрытий · План потолков и размещения освещения · Выключатели, розетки и электрические точки · Расстановка сантехнического оборудования · Развёртки стен и необходимые интерьерные узлы · Дизайнерские чертежи встроенной мебели · Спецификации отделки, мебели, освещения и сантехники |
| `C-P03-D03` note | The drawing register is agreed for your project. Specialist engineering calculations, structural design, authority submissions and manufacturing drawings are identified separately where required. | Перечень чертежей согласовывается для вашего проекта. Специальные инженерные расчёты, конструктивные решения, документация для согласований и производственные чертежи определяются отдельно при необходимости. |
| `C-P03-D03a` button | View a Sample Drawing Set | Посмотреть пример комплекта чертежей |
| `C-P03-D03a` note | An illustration of the drawing types a design package contains: layout, lighting and ceiling, wall elevation, joinery detail, finishes schedule and a room visualisation. The drawing register for your project is agreed in the proposal. | Иллюстрация того, какие типы чертежей входят в дизайн-проект: планировка, освещение и потолки, развёртка стены, узел мебели, спецификация и визуализация помещения. Перечень чертежей вашего проекта фиксируется в предложении. |
| `C-P03-D04` H2 | Design Services & Fees | Программы и стоимость дизайна |
| `C-P03-D04` card A | Full Interior Design — From AED 250/m², excluding VAT (AED 262.50/m² including VAT) — A complete interior design package with visualisations, working drawings and specifications for the agreed scope. Layouts and concept · 2–4 views per agreed visualised room · Interior working drawings · Specifications · Two design revision rounds across the agreed stages · PDF and DWG deliverables. | Полный дизайн-проект — От 250 AED/м² без VAT (262.50 AED/м² с VAT) — Полный дизайн интерьера с визуализациями, рабочими чертежами и спецификациями по согласованному составу. Планировка и концепция · 2–4 ракурса на согласованное визуализируемое помещение · Рабочие чертежи интерьера · Спецификации · Два раунда изменений дизайна на согласованных этапах · Выдача PDF и DWG. |
| `C-P03-D04` card A CTA | Discuss Full Design | Обсудить полный дизайн |
| `C-P03-D04` card B | Interior Design & Procurement — From AED 310/m², excluding VAT (AED 325.50/m² including VAT) — The full design package, with material and furniture sourcing, supplier coordination and order tracking within an agreed procurement scope. Everything in Full Interior Design, plus supplier quotations · samples and alternatives · purchasing schedule · order and delivery coordination · discrepancy follow-up. | Дизайн и комплектация — От 310 AED/м² без VAT (325.50 AED/м² с VAT) — Полный дизайн-проект с подбором материалов и мебели, взаимодействием с поставщиками и отслеживанием заказов по согласованному составу комплектации. Всё из полного дизайн-проекта, плюс предложения поставщиков · образцы и замены · ведомость закупок · координация заказов и поставок · сопровождение выявленных несоответствий. |
| `C-P03-D04` card B CTA | Discuss Design & Procurement | Обсудить дизайн и комплектацию |
| `C-P03-D04` note | Fees are based on the agreed design area and scope. Individual rooms are quoted separately. Furniture, materials, construction, delivery and installation are not included in the design fee unless expressly listed. Post-design site support is offered separately. | Стоимость определяется по согласованной площади и составу проекта. Отдельные помещения рассчитываются индивидуально. Мебель, материалы, ремонт, доставка и монтаж не входят в стоимость дизайна, если прямо не указано иное. Сопровождение после выдачи проекта предлагается отдельно. |
| `C-P03-D05` H2 | A Clear Review Process | Понятный порядок согласования |
| `C-P03-D05` body | Each revision round is one consolidated set of comments. We agree the rooms and views before visualisation begins. Changes to an approved brief or additional scope are quoted separately; correcting our own errors does not use your revision allowance. | Раунд изменений — единый список комментариев. Перечень помещений и ракурсов согласовываем до визуализации. Изменение утверждённой задачи или дополнительный объём рассчитываются отдельно; исправление наших ошибок не расходует ваши раунды правок. |
| `C-P03-D06` H2 | Design in Concept | Дизайн в концепциях |
| `C-P03-D07` Q1 | Can I order design without renovation? — Yes. We provide a design-only service. You can take the agreed documentation to your chosen contractor. | Можно заказать только дизайн? — Да. Можно получить дизайн-проект и передать согласованную документацию выбранному подрядчику. |
| `C-P03-D07` Q2 | What files will I receive? — The agreed design package is delivered as PDF and DWG files. The deliverable register is defined in the proposal. | Какие файлы я получу? — Согласованный комплект передаём в PDF и DWG. Перечень выдаваемых материалов фиксируется в предложении. |
| `C-P03-D07` Q3 | Does the fee include approvals? — Approval preparation and submissions can be commissioned separately or included as a defined additional scope. | Согласования входят в цену? — Подготовку и сопровождение согласований можно заказать отдельно или включить в предложение определённым дополнительным объёмом. |
| `C-P03-D07` Q4 | Do you support the project after design delivery? — Yes. Post-design support is agreed separately, including the required consultations and site involvement. | Есть сопровождение после выдачи проекта? — Да. Сопровождение согласовываем отдельно, с определением консультаций и участия на объекте. |
| `C-P03-D07` Q5 | How is the design area measured? — We use the agreed area of the rooms included in the design brief, recorded on the project plan. | Какая площадь используется для расчёта? — Согласованная площадь помещений, включённых в задание и отмеченных на плане проекта. |

### 17.8 P04 — Landscape Design

| Ref | EN | RU |
|---|---|---|
| `C-P04-L01` eyebrow | Landscape Design Concept | Концепция ландшафтного дизайна |
| `C-P04-L01` H1 | Outdoor Spaces Designed Around Your Home | Ландшафт как продолжение вашего дома |
| `C-P04-L01` body | Gardens, terraces and outdoor living areas developed around the architecture, your lifestyle and the conditions of the site. | Сады, террасы и пространства для отдыха с учётом архитектуры дома, вашего образа жизни и особенностей участка. |
| `C-P04-L01` CTA | Discuss Your Landscape | Обсудить ландшафт |
| `C-P04-L02` H2 | Plan the Whole Outdoor Experience | Продумать пространство целиком |
| `C-P04-L02` body | We begin with how you want to use the space, then coordinate the layout, planting, finishes and lighting. | Начинаем с того, как вы хотите использовать территорию, затем согласовываем планировку, озеленение, покрытия и освещение. |
| `C-P04-L03` list | Zoning & circulation · Planting palette · Paving & finishes · Lighting concept · Outdoor furniture · Coordinated technical documentation | Зонирование и маршруты · Подбор растений · Покрытия и отделка · Концепция освещения · Уличная мебель · Согласованная техническая документация |
| `C-P04-L03` note | Pools, pergolas, level changes and specialist systems are developed to a separately defined technical scope where required. | Бассейны, перголы, перепады уровней и специальные системы прорабатываются по отдельно определённому техническому составу, где это требуется. |
| `C-P04-L04` H2 | A Proposal for Your Site | Предложение под ваш участок |
| `C-P04-L04` body | Landscape design is quoted individually. The fee reflects the design area, complexity, required documentation and specialist coordination. | Ландшафтный дизайн рассчитываем индивидуально. Стоимость зависит от проектируемой площади, сложности, состава документации и специальной координации. |
| `C-P04-L05` steps | Site & brief → Concept → Design & materials → Documentation | Участок и задача → Концепция → Проработка и материалы → Документация |
| `C-P04-L05` note | Implementation can be discussed as a separate or combined scope. | Реализацию можно обсудить отдельно или в составе комплексного заказа. |
| `C-P04-L06` Q1 | Do you design existing gardens? — Yes. We assess what can be retained and what should change as part of the brief. | Проектируете обновление существующего сада? — Да. При обсуждении определяем, что сохранить и что изменить. |
| `C-P04-L06` Q2 | Can the landscape be developed with the villa interior? — Yes. We can coordinate the relationship between indoor and outdoor spaces. | Можно объединить ландшафт с интерьером виллы? — Да. Можем согласовать связь внутренних и наружных пространств. |
| `C-P04-L06` Q3 | Are plants and construction included in the design fee? — No. Design, supplies and implementation are priced as defined scopes. | Растения и работы включены в стоимость дизайна? — Нет. Дизайн, поставки и реализация рассчитываются по определённым составам. |

### 17.9 P05 — Villa Renovation

| Ref | EN | RU |
|---|---|---|
| `C-P05-V01` H1 | Villa Renovation in Dubai & Abu Dhabi | Ремонт вилл в Дубае и Абу-Даби |
| `C-P05-V01` body | From a complete transformation to carefully considered upgrades — design, approvals, renovation and bespoke joinery coordinated by one team. | От полного преображения до обновления отдельных пространств — дизайн, согласования, ремонт и мебель на заказ с единой координацией. |
| `C-P05-V02` H2 | Villa Concept Projects | Концептуальные проекты вилл |
| `C-P05-V03` H2 | Renovation Around Your Priorities | Ремонт с учётом ваших задач |
| `C-P05-V03` body | Renovate the entire villa or focus on the spaces that need attention. The scope is defined around your property, priorities and budget. | Обновите виллу целиком или отдельные помещения. Определяем состав работ с учётом объекта, приоритетов и бюджета. |
| `C-P05-V03` list | Layouts & design · Kitchens & bathrooms · Interior finishes · MEP & HVAC · Bespoke furniture · Outdoor and building works | Планировка и дизайн · Кухни и санузлы · Внутренняя отделка · Инженерные системы · Мебель на заказ · Наружные и строительные работы |
| `C-P05-V03` note | Façade works are offered as part of a wider project. Extensions, pools and other changes are assessed against the site and required approvals. | Фасадные работы выполняем в составе комплексного проекта. Пристройки, бассейны и другие изменения рассматриваем с учётом объекта и необходимых согласований. |
| `C-P05-V04` H2 | A Project You Can Follow | Проект, за которым удобно следить |
| `C-P05-V04` body | Your project manager coordinates decisions and communication. The foreman oversees the site. Photos, videos and written updates are shared daily or every few days, depending on the stage of work. | Проектный менеджер координирует решения и коммуникацию. Прораб контролирует объект. Фото, видео и письменные обновления направляем ежедневно или раз в несколько дней в зависимости от этапа. |
| `C-P05-V05` H2 | Scope and Changes, Clearly Agreed | Понятный объём и согласованные изменения |
| `C-P05-V05` body | We prepare the quotation around agreed works and specifications. Additional work proceeds only after you approve its scope and cost. Any effect on the schedule is discussed before approval. | Смета строится на согласованных работах и спецификациях. Дополнительный объём выполняем только после подтверждения состава и стоимости. Влияние на график обсуждаем до согласования. |
| `C-P05-V05` list | Scope · Specifications · Changes | Объём · Спецификации · Изменения |
| `C-P05-V06` H2 | Bespoke Joinery, Coordinated with the Build | Мебель, согласованная с ремонтом |
| `C-P05-V06` body | Our own production supports kitchens, wardrobes and fitted furniture, with glass and stone details developed alongside the interior. | На собственном производстве выполняем кухни, шкафы и встроенную мебель, согласуя детали из стекла и камня с интерьером. |
| `C-P05-V08` Q1 | Can you build from my designer's project? — Yes. We review the drawings, specifications and approval status before agreeing the work. | Реализуете проект моего дизайнера? — Да. Изучаем чертежи, спецификации и статус согласований до определения работ. |
| `C-P05-V08` Q2 | Is the initial site visit charged? — The first renovation consultation and initial site visit in Dubai or Abu Dhabi are complimentary. | Первичный выезд платный? — Первичное обсуждение ремонта и ознакомительный выезд в Дубае или Абу-Даби — без оплаты. |
| `C-P05-V08` Q3 | Can I stay in the villa during renovation? — This depends on the work, safe access and the availability of essential services. We discuss it when planning the sequence. | Можно жить на вилле во время ремонта? — Это зависит от работ, безопасного доступа и сохранения необходимых коммуникаций. Обсуждаем вопрос при планировании последовательности. |
| `C-P05-V08` Q4 | How long will it take? — The programme depends on the agreed scope, approvals, design readiness and material lead times. We establish a project-specific schedule. | Сколько длится ремонт? — График зависит от объёма, согласований, готовности дизайна и поставок. Составляем его для конкретного проекта. |
| `C-P05-V08` Q5 | Do you obtain every permit yourselves? — We prepare and coordinate the relevant submissions within the agreed service. Approval decisions remain with the responsible authorities and community management. | Вы получаете все разрешения самостоятельно? — Готовим и сопровождаем необходимые подачи в согласованном объёме услуг. Решения принимают соответствующие органы и управляющие организации. |
| `C-P05-V09` form heading | Let's Discuss Your Villa | Обсудим вашу виллу |

### 17.10 P06 — Apartment Renovation

| Ref | EN | RU |
|---|---|---|
| `C-P06-A01` H1 | Apartment Renovation in Dubai & Abu Dhabi | Ремонт квартир в Дубае и Абу-Даби |
| `C-P06-A01` body | Thoughtful layouts, updated finishes and bespoke furniture, with works coordinated around your building's requirements. | Продуманная планировка, новая отделка и мебель на заказ — с организацией работ по требованиям вашего здания. |
| `C-P06-A02` H2 | A Complete Apartment Concept | Концепция комплексного обновления квартиры |
| `C-P06-A03` H2 | Make Better Use of Your Space | Использовать пространство продуманно |
| `C-P06-A03` body | We can renovate the whole apartment or selected rooms, working with your existing design or developing a new one. | Можем обновить квартиру целиком или отдельные помещения, работая по вашему дизайну или разрабатывая новый. |
| `C-P06-A03` list | Layouts · Kitchens and bathrooms · Finishes · Lighting and services · Storage · Furniture | Планировка · Кухни и санузлы · Отделка · Освещение и инженерия · Хранение · Мебель |
| `C-P06-A04` H2 | Planned Around the Building | С учётом требований здания |
| `C-P06-A04` items | Access & working hours — Coordinate access and the permitted work schedule. · Deliveries & waste — Plan material deliveries and waste removal. · Shared areas — Plan protection of shared routes within the agreed scope. · Approvals — Prepare the required documents for the proposed changes. | Допуски и часы работ — Согласовать доступ и разрешённый график. · Доставка и вывоз — Спланировать доставку материалов и вывоз отходов. · Общие зоны — Предусмотреть защиту общих зон по согласованному объёму. · Согласования — Подготовить документы для планируемых изменений. |
| `C-P06-A05` body | Your project manager keeps decisions, progress updates and changes in one communication channel. | Проектный менеджер объединяет решения, отчёты и изменения в одном канале коммуникации. |
| `C-P06-A06` H2 | Finishes and Storage That Work Together | Отделка и хранение в едином решении |
| `C-P06-A07` Q1 | Can you renovate only a bathroom or kitchen? — Yes. We assess the room and any connected technical work before defining the scope. | Можно отремонтировать только санузел или кухню? — Да. Оцениваем помещение и связанные инженерные работы до определения состава. |
| `C-P06-A07` Q2 | Will I need to move out? — It depends on the extent of work, access and essential services. Major works may require temporary accommodation. | Потребуется переезд? — Зависит от масштаба, доступа и коммуникаций. При значительных работах может потребоваться временное жильё. |
| `C-P06-A07` Q3 | Can you work on a recently handed-over apartment? — Yes. We review the existing finishes, building requirements and the changes you want. | Работаете в недавно сданной квартире? — Да. Изучаем существующую отделку, требования здания и желаемые изменения. |
| `C-P06-A07` Q4 | Are approvals and furniture included? — They can be included as defined parts of the proposal; the exact scope is agreed before work. | Согласования и мебель входят в заказ? — Их можно включить отдельными определёнными частями предложения; точный объём согласовывается до работ. |

### 17.11 P07 — Commercial Fit-Out

| Ref | EN | RU |
|---|---|---|
| `C-P07-C01` H1 | Commercial Fit-Out for the Way Your Business Works | Коммерческий интерьер под задачи бизнеса |
| `C-P07-C01` body | Office renovation and commercial spaces in Dubai and Abu Dhabi, with design coordination, approvals, fit-out and furnishing matched to your brief. | Ремонт офисов и коммерческих помещений в Дубае и Абу-Даби: координация дизайна, согласования, отделка и меблировка под вашу задачу. |
| `C-P07-C01` CTA | Discuss Your Commercial Project | Обсудить коммерческий проект |
| `C-P07-C02` H2 | Business District Office Concept | Концепция офиса в деловом районе |
| `C-P07-C02` body | A concept showing approvals coordination, fit-out works and office furniture procurement handled as one scope. | Концепция показывает, как согласования, отделочные работы и закупка офисной мебели ведутся в едином объёме. |
| `C-P07-C03` H2 | From the Brief to a Working Space | От задачи к готовому рабочему пространству |
| `C-P07-C03` list | Layout review · Technical coordination · Approval documentation · Interior fit-out · Office furniture · Inspection and handover | Анализ планировки · Техническая координация · Документация для согласований · Отделочные работы · Офисная мебель · Проверка и передача |
| `C-P07-C03` note | Our commercial work covers office renovation. Retail and other commercial projects are assessed individually against their operational and technical requirements. | Коммерческое направление охватывает ремонт офисов. Магазины и другие коммерческие проекты рассматриваем индивидуально с учётом эксплуатационных и технических требований. |
| `C-P07-C04` H2 | Planning Around Your Operations | С учётом работы вашей компании |
| `C-P07-C04` body | We discuss access, deliveries, the sequence of works and any constraints around ongoing operations. The programme is built around the agreed scope and dependencies. | Обсуждаем доступ, поставки, последовательность работ и ограничения действующего бизнеса. График строится на согласованном объёме и зависимостях. |
| `C-P07-C05` H2 | Workspace Details | Детали рабочего пространства |
| `C-P07-C06` Q1 | Can you work from our existing design? — Yes. We review the design and technical information and agree the execution scope. | Работаете по нашему дизайну? — Да. Изучаем дизайн и технические материалы, затем согласовываем объём реализации. |
| `C-P07-C06` Q2 | Can you source office furniture? — Yes. We can procure office furniture and coordinate bespoke elements where specified. | Можете закупить офисную мебель? — Да. Можем организовать закупку офисной мебели и индивидуальные элементы, предусмотренные проектом. |
| `C-P07-C06` Q3 | Do you only work with offices? — Office fit-out is our defined commercial offer. Other property types are reviewed individually before we confirm scope and feasibility. | Вы работаете только с офисами? — Отделка офисов — наше определённое коммерческое предложение. Другие типы помещений оцениваем индивидуально перед подтверждением состава и возможности выполнения. |
| `C-P07-C06` Q4 | What do you need for an initial discussion? — The property location, available plans, intended use and the work you are considering. | Что нужно для первого обсуждения? — Местоположение, имеющиеся планы, назначение помещения и предполагаемые работы. |

### 17.12 P08 — Bespoke Joinery

| Ref | EN | RU |
|---|---|---|
| `C-P08-J01` H1 | Bespoke Joinery, Made for Your Space | Мебель, созданная под ваше пространство |
| `C-P08-J01` body | Kitchens, wardrobes and fitted furniture, with coordinated glass and stone work from our own production. | Кухни, шкафы и встроенная мебель с согласованными работами по стеклу и камню на нашем собственном производстве. |
| `C-P08-J01` CTA | Discuss Your Joinery | Обсудить мебель |
| `C-P08-J02` H2 | Choose the Piece Your Project Needs | Выберите, что нужно вашему проекту |
| `C-P08-J02` items | Kitchens — Cabinetry, storage and worktops planned together. · Wardrobes & Dressing Rooms — Storage shaped around your belongings and routine. · Fitted & Individual Pieces — Wall panels, TV units, vanities, shelving and project-specific furniture. | Кухни — Корпуса, хранение и столешницы в едином решении. · Шкафы и гардеробные — Хранение под ваши вещи и повседневные привычки. · Встроенная мебель и отдельные изделия — Стеновые панели, ТВ-зоны, тумбы, стеллажи и индивидуальные изделия. |
| `C-P08-J03` H2 | Materials and Details, Considered Together | Материалы и детали в едином решении |
| `C-P08-J03` body | We select construction, finishes and fittings around the design, intended use and budget. We can work from your designer's drawings or develop the joinery brief with you. | Подбираем конструкцию, отделку и фурнитуру под дизайн, условия эксплуатации и бюджет. Работаем по чертежам вашего дизайнера или прорабатываем задачу вместе с вами. |
| `C-P08-J04` H2 | Our Production | Наше производство |
| `C-P08-J04` body | Our own production covers cabinet furniture, glass and stone work. Upholstered furniture is sourced from selected suppliers. Production visits can be arranged by appointment. | Собственное производство охватывает корпусную мебель, работы со стеклом и камнем. Мягкую мебель закупаем у выбранных поставщиков. Посещение производства организуем по договорённости. |
| `C-P08-J05` H2 | From Brief to Installation | От задачи до монтажа |
| `C-P08-J05` steps | Brief and available dimensions · Preliminary proposal · Agreement and technical survey · Drawings and samples · Production · Installation and handover | Задача и исходные размеры · Предварительное предложение · Договор и технический замер · Чертежи и образцы · Изготовление · Монтаж и передача |
| `C-P08-J05` note | Technical measurements are taken after the agreement and before final manufacturing drawings are approved. If site findings change the scope or price, we agree the adjustment before production. | Технический замер выполняем после договора и до утверждения окончательных производственных чертежей. Если условия объекта меняют состав или стоимость, согласовываем корректировку до изготовления. |
| `C-P08-J07` Q1 | Can I order one item? — Yes. Individual joinery orders are assessed against the dimensions, material and installation requirements. | Можно заказать одно изделие? — Да. Рассматриваем отдельные заказы с учётом размеров, материалов и требований к монтажу. |
| `C-P08-J07` Q2 | Are manufacturing drawings included? — The required manufacturing drawings for the agreed joinery order are included and approved before production. | Производственные чертежи включены? — Необходимые производственные чертежи по согласованному мебельному заказу включены и утверждаются до изготовления. |
| `C-P08-J07` Q3 | Can you make furniture from supplied drawings? — Yes. We review and adapt the documentation to the agreed manufacturing and installation requirements. | Изготавливаете по готовым чертежам? — Да. Изучаем и уточняем документацию с учётом согласованных требований к изготовлению и монтажу. |
| `C-P08-J07` Q4 | Is every material covered by the same warranty? — No. Our workmanship cover and the applicable material, hardware and equipment terms are stated separately. | На всё действует одинаковая гарантия? — Нет. Гарантию на нашу работу и условия на материалы, фурнитуру и оборудование указываем отдельно. |

### 17.13 P09 — Custom Kitchens

| Ref | EN | RU |
|---|---|---|
| `C-P09-K01` H1 | A Kitchen Designed Around Your Everyday Life | Кухня, продуманная под вашу жизнь |
| `C-P09-K01` body | Made-to-measure cabinetry, practical storage and coordinated finishes, manufactured and installed for your space. | Мебель по индивидуальным размерам, удобное хранение и согласованные материалы — с изготовлением и монтажом под ваше пространство. |
| `C-P09-K01` CTA | Discuss Your Kitchen | Обсудить кухню |
| `C-P09-K02` H2 | Start with How You Use the Kitchen | Начинаем с того, как вы пользуетесь кухней |
| `C-P09-K02` body | We discuss cooking, storage, appliances and movement before finalising the layout and appearance. | Обсуждаем приготовление еды, хранение, технику и перемещение до окончательного выбора планировки и внешнего вида. |
| `C-P09-K03` H2 | The Details That Shape the Result | Детали, из которых складывается результат |
| `C-P09-K03` items | Cabinet construction · Front finishes · Worktops · Storage & hardware · Appliances · Lighting & installation | Конструкция корпусов · Отделка фасадов · Столешницы · Хранение и фурнитура · Техника · Свет и монтаж |
| `C-P09-K03` note | Materials and fittings are selected for the design, use and budget. Appliance models and dimensions are coordinated before production. | Материалы и фурнитуру выбираем с учётом дизайна, эксплуатации и бюджета. Модели и размеры техники согласовываем до производства. |
| `C-P09-K04` H2 | Kitchen Details | Детали кухни |
| `C-P09-K05` H2 | Your Kitchen, Step by Step | Этапы заказа кухни |
| `C-P09-K06` H2 | A Quote Based on Your Kitchen | Расчёт под вашу кухню |
| `C-P09-K06` body | The quotation reflects the layout, cabinet sizes, fronts, worktops, fittings and installation conditions. Appliances and additional site works are identified separately. | Смета учитывает планировку, размеры, фасады, столешницы, фурнитуру и условия монтажа. Техника и дополнительные работы на объекте указываются отдельно. |
| `C-P09-K07` Q1 | When do you take exact measurements? — After the agreement, before final manufacturing drawings and production. | Когда выполняется точный замер? — После заключения договора, до окончательного утверждения производственных чертежей и изготовления. |
| `C-P09-K07` Q2 | Can I use my own appliances? — Yes. We need their exact models and installation dimensions before the drawings are approved. | Можно использовать свою технику? — Да. До утверждения чертежей нужны точные модели и монтажные размеры. |
| `C-P09-K07` Q3 | Do you remove the old kitchen? — Removal and associated site works can be included when specifically agreed in the quotation. | Демонтируете старую кухню? — Демонтаж и связанные работы можно включить, если они отдельно согласованы в смете. |
| `C-P09-K07` Q4 | How long does production take? — The programme is agreed after confirming the drawings, materials, hardware and site readiness. | Какой срок изготовления? — График согласовывается после определения чертежей, материалов, фурнитуры и готовности объекта. |

### 17.14 P10 — Wardrobes and Dressing Rooms

| Ref | EN | RU |
|---|---|---|
| `C-P10-W01` H1 | Storage Designed Around You | Хранение, продуманное под вас |
| `C-P10-W01` body | Made-to-measure wardrobes and dressing rooms, planned around your belongings, space and daily routine. | Шкафы и гардеробные по индивидуальным размерам — под ваши вещи, пространство и повседневные привычки. |
| `C-P10-W01` CTA | Discuss Your Storage | Обсудить систему хранения |
| `C-P10-W02` H2 | A Place for What Matters | Место для каждой вещи |
| `C-P10-W02` body | We define hanging space, shelves, drawers and specialist storage before coordinating doors, finishes and lighting. | Сначала определяем секции для одежды, полки, ящики и специальное хранение, затем согласовываем двери, отделку и освещение. |
| `C-P10-W02` list | Open dressing rooms · Fitted wardrobes · Hinged or sliding doors · Drawers and accessories · Integrated lighting | Открытые гардеробные · Встроенные шкафы · Распашные или раздвижные двери · Ящики и аксессуары · Встроенный свет |
| `C-P10-W02` note | Not every type is automatically included in an order; the composition is agreed for your project. | Не все типы автоматически входят в каждый заказ; состав согласовывается под ваш проект. |
| `C-P10-W03` H2 | Inside and Out | Снаружи и внутри |
| `C-P10-W03` captions | Closed · Open — internal layout and fittings | Закрыто · Открыто — наполнение и фурнитура |
| `C-P10-W06` Q1 | Can you work with a niche or sloping ceiling? — We assess the site and develop the design around the measured constraints. | Работаете с нишами и наклонными потолками? — Оцениваем объект и разрабатываем решение с учётом измеренных ограничений. |
| `C-P10-W06` Q2 | Can the internal layout be customised? — Yes. Sections, drawers and accessories are agreed around your storage needs. | Можно изменить внутреннее наполнение? — Да. Секции, ящики и аксессуары согласовываем под ваши задачи хранения. |
| `C-P10-W06` Q3 | Are lighting and accessories included? — Only the lighting and accessories listed in the agreed specification are included. | Освещение и аксессуары входят? — Включены позиции, перечисленные в согласованной спецификации. |
| `C-P10-W06` Q4 | Can you manufacture from my designer's drawings? — Yes. We review the drawings, take the technical measurements after agreement and prepare the manufacturing documentation. | Изготовите по чертежам моего дизайнера? — Да. Изучим чертежи, после договора выполним технический замер и подготовим производственную документацию. |

### 17.15 P11 — Approvals and NOCs

| Ref | EN | RU |
|---|---|---|
| `C-P11-N01` H1 | Approvals & NOCs for Your Project | Согласования и NOC для вашего проекта |
| `C-P11-N01` body | Preparation of the required drawings and documents, with submission support and coordination for renovation and fit-out projects. | Подготовка необходимых чертежей и документов, сопровождение подачи и координация согласований для ремонта и отделки. |
| `C-P11-N01` CTA | Discuss Your Approvals | Обсудить согласования |
| `C-P11-N02` H2 | The Route Depends on Where Your Property Is | Маршрут зависит от того, где находится ваш объект |
| `C-P11-N02` intro | Approval in Dubai is not one process. Which authority issues the permit, which drawing format is accepted and whether a community No Objection Certificate comes first are all decided by the location of the property, not by the type of work. Identifying the correct route is the first thing we do, and it is done before design work begins. | Согласование в Дубае — это не одна процедура. Какой орган выдаёт разрешение, в каком формате принимаются чертежи и нужен ли сначала NOC от управляющей компании сообщества — определяется расположением объекта, а не видом работ. Определение правильного маршрута — первое, что мы делаем, и делается это до начала проектирования. |
| `C-P11-N02` row 1 | Independent villa, Dubai mainland. The building permit is issued by the municipality through the Build in Dubai platform. There is no master-developer layer. | Отдельная вилла на материковой части Дубая. Разрешение выдаёт муниципалитет через платформу Build in Dubai. Слоя управляющей компании нет. |
| `C-P11-N02` row 2 | Villa in a master community. The community's own No Objection Certificate comes first and is reviewed against the community's design guidelines. The building permit follows, from the authority with jurisdiction over that community. | Вилла в мастер-сообществе. Сначала NOC управляющей компании, который проверяется по дизайн-регламенту сообщества. Разрешение на строительство выдаётся после этого органом, в чьей юрисдикции находится сообщество. |
| `C-P11-N02` row 3 | Apartment or office in a building. Building management approval comes first. A fit-out permit follows from the authority responsible for that zone; in some Dubai zones this is not the municipality. | Квартира или офис в здании. Сначала согласование управляющей компании здания. Затем разрешение на отделочные работы от органа, отвечающего за эту зону; в отдельных зонах Дубая это не муниципалитет. |
| `C-P11-N02` row 4 | Property in Abu Dhabi. A different emirate, a different system: permits are handled by the responsible department through the TAMM portal. | Объект в Абу-Даби. Другой эмират и другая система: разрешения оформляются профильным департаментом на портале TAMM. |
| `C-P11-N02` closing | We confirm the applicable route for your specific property before quoting the approvals scope. | Применимый маршрут для вашего конкретного объекта мы подтверждаем до расчёта стоимости согласований. |
| `C-P11-N02a` H2 | Why This Is Settled Before the Design, Not After | Почему это решается до дизайна, а не после |
| `C-P11-N02a` body 1 | Approval requirements shape the design itself. External changes, structural openings, extensions, pool additions, changes to mechanical, electrical and plumbing loads — each carries its own requirement, and in a master community the external appearance is reviewed against guidelines written for that community. A design developed without these constraints in mind is redrawn later, and redrawing costs time on a project that has already started. | Требования согласований влияют на сам дизайн. Изменения фасада, проёмы в конструкциях, пристройки, бассейн, изменение нагрузок инженерных систем — у каждого пункта свои требования, а в мастер-сообществе внешний вид проверяется по регламенту, написанному для этого сообщества. Дизайн, разработанный без учёта этих ограничений, переделывается позже, а переделка стоит времени на уже начатом проекте. |
| `C-P11-N02a` body 2 | Drawing format matters as much as content. Authorities do not share a submission format, and a set prepared for one authority can be rejected by another without its content being assessed. Establishing the route first is what prevents this. | Формат чертежей важен не меньше содержания. У разных органов разные требования к подаче, и комплект, подготовленный для одного, может быть отклонён другим без рассмотрения по существу. Именно поэтому маршрут определяется первым. |
| `C-P11-N02b` H2 | What Usually Requires a Permit | Какие работы обычно требуют разрешения |
| `C-P11-N02b` column 1 | Usually requires approval: removing or adding walls and changes to layout; work affecting structure; extensions and additions to built-up area; changes to the external appearance, including windows, cladding and roof elements; pools, canopies and permanent outdoor structures; relocation of drainage and water points; changes to electrical load or distribution; modification of HVAC ducting and equipment. | Обычно требует согласования: снос и возведение стен, изменение планировки; работы, затрагивающие конструкции; пристройки и увеличение застроенной площади; изменение внешнего вида, включая окна, облицовку и элементы кровли; бассейны, навесы и постоянные наружные конструкции; перенос точек водоснабжения и канализации; изменение электрической нагрузки и распределения; изменение воздуховодов и оборудования вентиляции и кондиционирования. |
| `C-P11-N02b` column 2 | Usually does not, but check: painting, replacing floor and wall finishes, replacing fixtures without relocating services, furniture and non-structural false ceilings. The community or building management may still require notification even where no authority permit applies. | Обычно не требует, но проверяется: покраска, замена напольных и настенных покрытий, замена сантехнических приборов без переноса коммуникаций, мебель и неконструктивные подвесные потолки. Управляющая компания сообщества или здания может требовать уведомления даже там, где разрешение органа не нужно. |
| `C-P11-N02b` disclaimer | This is a general guide, not a determination for your property. The requirements depend on the property, the responsible parties and the actual scope of works. | Это общий ориентир, а не заключение по вашему объекту. Требования зависят от объекта, отвечающих за него организаций и фактического состава работ. |
| `C-P11-N03` H2 | What We Do | Что делаем мы |
| `C-P11-N03` items | Review the proposed works and confirm the applicable route · Prepare the required drawings in the format the authority accepts · Coordinate submissions and respond to comments · Track status and keep you informed | Изучаем планируемые работы и подтверждаем применимый маршрут · Готовим необходимые чертежи в формате, принимаемом органом · Подаём документы и отрабатываем замечания · Отслеживаем статус и информируем вас |
| `C-P11-N03a` line | Approvals are coordinated by our engineering lead, a co-founder who has held chief engineer positions with UAE contracting companies on large residential, commercial and public buildings. | Согласования координирует руководитель инженерного направления — сооснователь компании, занимавший должность главного инженера в подрядных компаниях ОАЭ на крупных жилых, коммерческих и общественных объектах. |
| `C-P11-N04` H2 | What to Share with Us | Что подготовить для обсуждения |
| `C-P11-N04` body | Property location, available plans, a description of the changes and any existing approvals. We will confirm further documents after reviewing the case. | Местоположение, имеющиеся планы, описание изменений и уже полученные согласования. Дополнительные документы уточним после изучения задачи. |
| `C-P11-N06` Q1 | Can I order this service without renovation? — Yes. Drawings and approval support can be commissioned separately. | Можно заказать отдельно от ремонта? — Да. Подготовку документации и сопровождение согласований можно заказать отдельно. |
| `C-P11-N06` Q2 | Are authority fees included? — Our service fee, authority charges and any deposits are identified separately in the proposal. | Сборы включены? — Стоимость наших услуг, сборы и возможные депозиты указываются в предложении отдельно. |
| `C-P11-N06` Q3 | Can you guarantee approval by a fixed date? — No. Decisions and review periods depend on the approving parties and the completeness and scope of the application. | Гарантируете разрешение к определённой дате? — Нет. Решение и сроки рассмотрения зависят от согласующих сторон, полноты и содержания заявки. |
| `C-P11-N06` Q4 | Can you continue an existing application? — We can review its current status and advise what is required before confirming involvement. | Можете продолжить начатую заявку? — Изучим её статус и определим необходимые действия до подтверждения участия. |
| `C-P11-N06` Q5 | Does my villa need a permit for interior work only? — It depends on what the work touches. Layout changes, structural openings and changes to services usually require approval; finishes alone usually do not. Your community or building management may require notification either way. We confirm this for your property before any work is planned. | Нужно ли разрешение, если работы только внутренние? — Зависит от того, что затрагивается. Изменение планировки, проёмы в конструкциях и изменения инженерных систем обычно требуют согласования; только отделка — обычно нет. Уведомление управляющей компании может потребоваться в любом случае. Мы подтверждаем это по вашему объекту до планирования работ. |
| `C-P11-N06` Q6 | Why do you ask about the community before quoting? — Because the community determines the route. The authority, the required documents and the accepted drawing format differ, and quoting before this is confirmed would not be accurate. | Почему вы спрашиваете о сообществе до расчёта стоимости? — Потому что сообщество определяет маршрут. Орган, состав документов и принимаемый формат чертежей различаются, и расчёт до подтверждения маршрута не был бы достоверным. |

### 17.16 P12 — MEP and HVAC · P13 — Materials and Procurement

| Ref | EN | RU |
|---|---|---|
| `C-P12-E01` H1 | Engineering Systems That Support the Interior | Инженерные системы для продуманного интерьера |
| `C-P12-E01` body | MEP and HVAC design, installation and coordination for residential and commercial projects. | Проектирование, монтаж и координация инженерных систем для жилых и коммерческих проектов. |
| `C-P12-E01` CTA | Discuss Your Engineering Scope | Обсудить инженерные работы |
| `C-P12-E02` items | Electrical — Power and lighting requirements coordinated with the layout. · Plumbing — Water supply and drainage requirements for the agreed works. · HVAC — Air conditioning and ventilation planned around use and spatial constraints. · Coordination — Drawings, ceilings, furniture and installation requirements reviewed together. | Электрика — Электропитание и освещение с учётом планировки. · Сантехника — Водоснабжение и водоотведение в рамках согласованных работ. · Климатические системы — Кондиционирование и вентиляция с учётом эксплуатации и ограничений пространства. · Координация — Совместная проверка чертежей, потолков, мебели и требований к монтажу. |
| `C-P12-E03` H2 | Resolve Conflicts Before Installation | Уточнить несоответствия до монтажа |
| `C-P12-E03` body | We review the relationship between engineering routes and the interior, so decisions on ceilings, access and equipment can be made before the relevant works. | Сопоставляем инженерные трассы с интерьером, чтобы решения по потолкам, доступу и оборудованию принимались до соответствующих работ. |
| `C-P12-E04` steps | Brief and survey · Design · Coordination and required approvals · Installation · Checks and handover | Задача и обследование · Проектирование · Координация и согласования · Монтаж · Проверки и передача |
| `C-P12-E05` Q1 | Can I order design only or installation only? — Both can be discussed as separate scopes, subject to the available documentation and site requirements. | Можно заказать только проектирование или монтаж? — Оба формата можно обсудить отдельно с учётом документации и требований объекта. |
| `C-P12-E05` Q2 | Do you provide routine AC servicing? — This page covers project design, installation and upgrades. Routine servicing is not part of the offer shown here. | Вы обслуживаете кондиционеры? — Здесь представлены проектирование, монтаж и модернизация. Регулярное обслуживание не входит в предложение этой страницы. |
| `C-P12-E05` Q3 | Can existing systems be retained? — We assess their condition, capacity and compatibility with the proposed changes before confirming the solution. | Можно сохранить существующие системы? — Оцениваем состояние, возможности и совместимость с изменениями до подтверждения решения. |
| `C-P13-M01` H1 | Materials and Procurement, Coordinated | Материалы и комплектация с единой координацией |
| `C-P13-M01` body | Finishes, furniture, lighting and equipment selected around your design, budget and project requirements. | Отделка, мебель, освещение и оборудование с учётом дизайна, бюджета и требований проекта. |
| `C-P13-M01` CTA | Discuss Procurement | Обсудить комплектацию |
| `C-P13-M02` H2 | What We Take Off Your Hands | Какие задачи берёт на себя команда |
| `C-P13-M02` item 1 | Selection. We shortlist materials, furniture and equipment that match the approved design, the intended budget and the project programme. | Подбор. Отбираем материалы, мебель и оборудование, которые соответствуют утверждённому дизайну, предполагаемому бюджету и графику проекта. |
| `C-P13-M02` item 2 | Comparison. We request and compare supplier quotations for the specified items, so the choice is made on comparable terms. | Сравнение предложений. Запрашиваем и сравниваем предложения поставщиков по выбранным позициям, чтобы решение принималось на сопоставимых условиях. |
| `C-P13-M02` item 3 | Specification. Dimensions, finishes and technical parameters are agreed and recorded before an order is placed. | Согласование спецификаций. До размещения заказа фиксируем размеры, отделку и технические параметры. |
| `C-P13-M02` item 4 | Coordination. Orders, delivery dates and site readiness are coordinated with the works programme, and discrepancies are followed up. | Координация. Увязываем заказы, сроки поставки и готовность объекта с графиком работ, отрабатываем выявленные несоответствия. |
| `C-P13-M02` line | Your designer and procurement specialist work on this together, so the specification, the purchase and the installation date stay connected. | Эту работу совместно ведут дизайнер и специалист по закупкам — чтобы спецификация, покупка и дата монтажа оставались связанными. |
| `C-P13-M02` categories | Finishes · Sanitaryware · Lighting · Loose and fitted furniture · Appliances · Curtains, textiles and decor. This is the possible scope, not an automatic inclusion of every category in every order. | Отделка · Сантехника · Свет · Готовая и встроенная мебель · Техника · Шторы, текстиль и декор. Это возможный охват, а не автоматическое включение каждой категории в любой заказ. |
| `C-P13-M03` H2 | Two Purchasing Routes | Два способа закупки |
| `C-P13-M03` A | Supply through Bellvero — you approve our proposal for the specified goods. | Поставка через Bellvero — вы утверждаете наше предложение на конкретные товары. |
| `C-P13-M03` B | Direct supplier purchase — you pay the supplier while we provide the agreed coordination service. | Прямая покупка у поставщика — вы оплачиваете поставщику, а мы выполняем согласованное сопровождение. |
| `C-P13-M03` note | The seller, payment route and responsibility for each order are identified before purchase. | До покупки определяем продавца, порядок оплаты и ответственность по каждому заказу. |
| `C-P13-M04` H2 | A Defined Procurement Scope | Определённый состав комплектации |
| `C-P13-M04` body | Categories, responsibilities and the support period are agreed in the proposal. Goods, shipping, storage and installation are priced separately unless expressly included. | Категории, ответственность и период сопровождения согласовываем в предложении. Товары, перевозка, хранение и монтаж оплачиваются отдельно, если прямо не включены. |
| `C-P13-M05` H2 | Material Palettes | Палитры материалов |
| `C-P13-M06` Q1 | Can I use procurement without your design service? — Yes. We review the available design and specifications and define the procurement scope. | Можно заказать комплектацию без вашего дизайна? — Да. Изучаем имеющийся дизайн и спецификации и определяем состав комплектации. |
| `C-P13-M06` Q2 | Are goods included in the design-and-procurement fee? — No. The service fee and the cost of goods are separate unless your proposal expressly states otherwise. | Товары входят в цену дизайна с комплектацией? — Нет. Стоимость услуги и товаров разделены, если в предложении прямо не указано иное. |
| `C-P13-M06` Q3 | What if an item becomes unavailable? — We identify alternatives for your approval and explain any price or timing difference before ordering. | Что если позиция исчезла из продажи? — Предложим замены и объясним разницу в цене или сроках до заказа. |
| `C-P13-M06` Q4 | Who follows up on delivery discrepancies? — Our team provides the agreed coordination and follows up with the seller according to the purchasing arrangement. | Кто занимается несоответствиями при поставке? — Команда выполняет согласованное сопровождение и взаимодействует с продавцом по выбранной схеме закупки. |

### 17.17 P14 — Concept Projects and the four project pages

| Ref | EN | RU |
|---|---|---|
| `C-P14-G01` H1 | Concept Projects | Концептуальные проекты |
| `C-P14-G01` intro | These are concept projects, created to show how we plan a space, coordinate the technical side and detail the joinery. They are AI-generated visualisations of the scope our team covers, not photographs of delivered properties. | Это концептуальные проекты: они показывают, как мы планируем пространство, координируем техническую часть и прорабатываем мебель. Это AI-визуализации того объёма работ, который берёт на себя команда, а не фотографии сданных объектов. |
| `C-P14-G03` CTA | Discuss a Similar Project | Обсудить похожий проект |
| `C-CS08` H2 | Related Concepts | Связанные концепции |
| `C-P15-CS02` H1 | Coastal Villa — Concept Project | Вилла у воды — концептуальный проект |
| `C-P15-CS02` scope line | Concept · Interior Design · Approvals · Complete Renovation · Bespoke Joinery | Концепция · Дизайн · Согласования · Комплексный ремонт · Мебель на заказ |
| `C-P15-CS03` overview | A concept for a two-storey family villa, developed to show how a complete project is coordinated: interior design, the approvals route, renovation works, final finishes and fitted furniture inside one agreed scope. The concept demonstrates the decisions our team takes and the level of detail we work to. | Концепция двухэтажной семейной виллы: показывает, как координируется комплексный проект — дизайн интерьера, маршрут согласований, ремонтные работы, чистовая отделка и встроенная мебель в рамках одного согласованного объёма. Концепция демонстрирует, какие решения принимает команда и с какой степенью детализации мы работаем. |
| `C-P15-CS04` scope | Interior design · Approval coordination · Renovation works · Installation of final finishes and fittings · Bespoke cabinet furniture and installation | Дизайн интерьера · Сопровождение согласований · Ремонтные работы · Монтаж чистовой отделки и элементов интерьера · Корпусная мебель и установка |
| `C-P15-CS05` caption | Concept layout | Планировка концепции |
| `C-P15-CS06` caption | Material palette of this concept | Палитра материалов концепции |
| `C-P15-CS07` H2 | Concept Gallery | Галерея концепции |
| `C-P16-CS02` H1 | Garden Villa — Concept Project | Вилла с садом — концептуальный проект |
| `C-P16-CS02` scope line | Concept · Renovation · Landscape · Selected Bespoke Joinery | Концепция · Ремонт · Ландшафт · Отдельные элементы мебели |
| `C-P16-CS03` overview | A single-storey villa concept built around the relationship between the interior and the garden. It shows how renovation, outdoor design and selected joinery elements are coordinated when the living space opens directly onto a terrace. | Концепция одноэтажной виллы, построенная вокруг связи интерьера и сада. Показывает, как координируются ремонт, наружное пространство и отдельные элементы мебели, когда жилая зона напрямую выходит на террасу. |
| `C-P16-CS04` scope | Renovation works · Interior finishes · Terrace and planting concept · Selected cabinet furniture | Ремонтные работы · Внутренняя отделка · Концепция террасы и озеленения · Отдельные элементы корпусной мебели |
| `C-P17-CS02` H1 | Tower Residence — Concept Project | Квартира в башне — концептуальный проект |
| `C-P17-CS02` scope line | Concept · Interior Design · Approvals · Complete Renovation · Bespoke Joinery | Концепция · Дизайн · Согласования · Комплексный ремонт · Мебель на заказ |
| `C-P17-CS03` overview | An apartment concept developed around the constraints of a managed building: access, deliveries, protection of shared areas and the approval documents a change of layout requires. It shows a complete apartment scope from design to fitted furniture. | Концепция квартиры, выстроенная вокруг ограничений управляемого здания: доступ, поставки, защита общих зон и документы, которые требуются при изменении планировки. Показывает полный объём работ по квартире — от дизайна до встроенной мебели. |
| `C-P17-CS04` scope | Interior design · Approval coordination · Complete renovation · Final finishes and fittings · Cabinet furniture installation | Дизайн интерьера · Сопровождение согласований · Комплексный ремонт · Чистовая отделка и элементы интерьера · Установка корпусной мебели |
| `C-P18-CS02` H1 | Business District Office — Concept Project | Офис в деловом районе — концептуальный проект |
| `C-P18-CS02` scope line | Concept · Approvals · Office Fit-Out · Furniture Procurement | Концепция · Согласования · Отделка офиса · Закупка мебели |
| `C-P18-CS03` overview | A workspace concept showing how an office fit-out is planned around the way a business operates: approval documentation, the sequence of works, the finishes and the procurement of office furniture as one coordinated scope. | Концепция рабочего пространства: показывает, как отделка офиса планируется с учётом работы компании — документация для согласований, последовательность работ, отделка и закупка офисной мебели в едином координируемом объёме. |
| `C-P18-CS04` scope | Approval documentation · Fit-out works · Interior finishes · Office furniture procurement · Inspection and handover | Документация для согласований · Отделочные работы · Внутренняя отделка · Закупка офисной мебели · Проверка и передача |

### 17.18 P19 — Our Process

| Ref | EN | RU |
|---|---|---|
| `C-P19-PR01` H1 | From the First Conversation to Handover | От первого разговора до передачи объекта |
| `C-P19-PR01` body | A clear sequence, a dedicated project manager and agreed decisions at each stage. The route is adapted to your property and the services you commission. | Понятная последовательность, выделенный проджект-менеджер и согласованные решения на каждом этапе. Порядок зависит от объекта и выбранных услуг. |
| `C-P19-PR02` 01 | Brief & Initial Budget. We discuss the property, your priorities, the intended scope and an initial budget direction. | Задача и предварительный бюджет. Обсуждаем объект, приоритеты, предполагаемые работы и ориентир по бюджету. |
| `C-P19-PR02` 02 | Site Review & Survey. We review existing conditions and arrange the measurements required for the agreed stage. | Осмотр и обмеры. Изучаем существующее состояние и организуем замеры, необходимые для согласованного этапа. |
| `C-P19-PR02` 03 | Concept & Layout. We develop the agreed design direction, layouts and material palette, or review your existing design. | Концепция и планировка. Разрабатываем согласованную концепцию, планировки и палитру материалов либо изучаем ваш готовый дизайн. |
| `C-P19-PR02` 04 | Design & Technical Coordination. We coordinate design drawings, services, specifications and the requirements of the next project stages. | Проектирование и техническая координация. Увязываем дизайн, инженерные решения, спецификации и требования следующих этапов. |
| `C-P19-PR02` 05 | Scope, Quotation & Agreement. The scope, exclusions, responsibilities, programme and commercial terms are recorded before the relevant work begins. | Объём, смета и договорённости. До начала соответствующих работ фиксируем состав, исключения, ответственность, график и коммерческие условия. |
| `C-P19-PR02` 06 | Approvals & Preparation. We prepare and coordinate the required submissions within the agreed scope and plan site access and mobilisation. | Согласования и подготовка. В рамках согласованного объёма готовим и сопровождаем необходимые подачи, планируем доступ и начало работ. |
| `C-P19-PR02` 07 | Construction & Engineering. Site works and engineering installations follow the agreed documentation, with site supervision and progress reporting. | Строительные и инженерные работы. Работы выполняются по согласованной документации, с контролем на объекте и отчётами о ходе реализации. |
| `C-P19-PR02` 08 | Production & Procurement. Joinery is manufactured and agreed materials and products are procured in coordination with the site programme. | Производство и комплектация. Изготавливаем мебель и закупаем согласованные материалы и изделия, увязывая поставки с графиком объекта. |
| `C-P19-PR02` 09 | Installation & Completion. We coordinate final installations, finishing details and the preparation of the property for inspection. | Монтаж и завершение. Координируем установку, завершающую отделку и подготовку объекта к проверке. |
| `C-P19-PR02` 10 | Inspection & Handover. We inspect the agreed works, record outstanding items and arrange handover with the relevant project and warranty information. | Проверка и передача. Проверяем согласованные работы, фиксируем замечания и организуем передачу объекта с необходимой проектной и гарантийной информацией. |
| `C-P19-PR02` note | Some stages overlap. Production and procurement can run alongside site works, while quality checks continue throughout. Exact technical measurements for standalone joinery follow the agreement and precede production. | Некоторые этапы идут параллельно. Производство и закупки могут совпадать с работами на объекте, а контроль качества ведётся на протяжении реализации. Точные технические замеры для отдельного заказа мебели выполняются после договора и до изготовления. |
| `C-P19-PR03` route 1 | Design Only — Brief, agreed design stages, review rounds and delivery of the design package. Support after delivery is commissioned separately. | Только дизайн — Задача, согласованные этапы проектирования, раунды изменений и передача проекта. Сопровождение после выдачи заказывается отдельно. |
| `C-P19-PR03` route 2 | Build from Your Design — We review your drawings and existing approvals, agree the implementation scope and coordinate the works. | Реализация вашего дизайна — Изучаем чертежи и имеющиеся разрешения, согласовываем состав реализации и организуем работы. |
| `C-P19-PR03` route 3 | Bespoke Joinery — Brief and quotation, agreement, technical survey, drawings and samples, production and installation. | Мебель на заказ — Задача и предложение, договор, технический замер, чертежи и образцы, производство и монтаж. |
| `C-P19-PR04` H2 | Decisions You Can Follow | Решения, которые понятны вам |
| `C-P19-PR04` body | Your project manager coordinates communication. The site foreman oversees the works. Photos, videos and written updates are shared in the project group daily or every few days, according to the agreed reporting rhythm. Additional works begin only after approval of their scope and cost; any programme impact is discussed. | Проджект-менеджер координирует общение, прораб контролирует работы на объекте. Фото, видео и письменные отчёты отправляются в рабочую группу ежедневно или раз в несколько дней — по согласованному графику. Дополнительные работы начинаются только после подтверждения состава и стоимости; влияние на сроки обсуждается отдельно. |

### 17.19 P20 — Our Story

| Ref | EN | RU |
|---|---|---|
| `C-P20-A01` H1 | A Family Business. A Shared Standard. | Семейный бизнес. Общий стандарт работы. |
| `C-P20-A01` body | Bellvero Group brings design, engineering, project delivery and bespoke joinery together for homes and commercial spaces in Dubai and Abu Dhabi. | Bellvero Group объединяет дизайн, инженерные решения, реализацию и мебель на заказ для жилых и коммерческих пространств в Дубае и Абу-Даби. |
| `C-P20-A02` H2 | Two Founders, One Standard of Work | Два основателя и общий стандарт работы |
| `C-P20-A02` body 1 | In 2021 two brothers started their own renovation and construction business. Today that work continues as Bellvero Group. | В 2021 году два брата начали собственный бизнес в сфере ремонта и строительства. Сегодня эта работа продолжается под именем Bellvero Group. |
| `C-P20-A02` body 2 | Each of them brought an established career into it. One had spent his working life as an engineer on large construction sites in the UAE, holding chief engineer positions with contracting companies. The other had managed construction projects in several countries. A third partner is responsible for client relations. | Каждый пришёл в него со сложившейся профессией. Один работал инженером на крупных стройках ОАЭ и занимал должность главного инженера в подрядных компаниях. Второй управлял строительными проектами в нескольких странах. Третий партнёр отвечает за работу с клиентами. |
| `C-P20-A02` body 3 | That background shapes how we work. An interior is a connected project: the design has to be technically buildable, the works have to follow an agreed scope, and the furniture has to fit the space it was made for. Keeping those decisions connected is the reason the family stays directly involved rather than delegating the project and stepping away. | Этот опыт определяет и то, как мы работаем. Интерьер — связанный проект: дизайн должен быть технически реализуемым, работы — соответствовать согласованному объёму, а мебель — подходить пространству, для которого она создана. Именно поэтому владельцы участвуют в проектах лично, а не передают их и отходят в сторону. |
| `C-P20-A03` H2 | Leadership | Руководство |
| `C-P20-A03` profile 1 | Co-Founder & Chief Engineer — Leads the technical direction of Bellvero Group. Before the family business, held chief engineer positions with UAE contracting companies on large residential, commercial and public buildings in Dubai and Abu Dhabi. On a private project that experience is applied where mistakes are expensive to correct: checking that the design can actually be built in your property, coordinating mechanical, electrical and plumbing works with the interior, and reviewing the technical decisions before works proceed. | Сооснователь и главный инженер — Отвечает за техническое направление Bellvero Group. До семейного бизнеса занимал должность главного инженера в подрядных компаниях ОАЭ на крупных жилых, коммерческих и общественных объектах Дубая и Абу-Даби. В частном проекте этот опыт применяется там, где ошибки дорого исправлять: проверка того, что дизайн действительно реализуем на вашем объекте, увязка инженерных систем с интерьером и техническая проверка решений до начала работ. |
| `C-P20-A03` profile 2 | Co-Founder & Head of Project Management — Leads project management, with eighteen years of experience in construction, including work as a project manager on projects in several countries. At Bellvero Group leads the project managers: how the programme is planned, how site teams, production and suppliers are coordinated, and how issues raised on site are resolved and reported back to you. | Сооснователь и руководитель управления проектами — Руководит управлением проектами, имеет 18 лет опыта в строительстве, включая работу проджект-менеджером на проектах в нескольких странах. В Bellvero Group руководит проджект-менеджерами: планирование графика, координация бригад, производства и поставщиков, решение вопросов на объекте и отчётность перед вами. |
| `C-P20-A03` profile 3 | Partner & Head of Client Relations — Represents the owners in client relations. Takes the first conversation, establishes your priorities and the likely scope of work, and hands the brief to the designers, engineers and project managers. The role is to keep the communication between you and the team consistent: that what was discussed at the start is what appears in the proposal, and that you always know who is responsible for the next step. | Партнёр и руководитель по работе с клиентами — Представляет сторону владельцев в работе с клиентами. Проводит первое обсуждение, выясняет приоритеты и предполагаемый состав работ и передаёт задачу дизайнерам, инженерам и проджект-менеджерам. Задача роли — сохранять понятную коммуникацию между вами и командой: чтобы обсуждённое в начале соответствовало подготовленному предложению и чтобы всегда было ясно, кто отвечает за следующий шаг. |
| `C-P20-A03b` H2 | The Experience Behind Bellvero | Опыт, стоящий за Bellvero |
| `C-P20-A03b` intro | The experience the founders bring to Bellvero. These projects were delivered by their previous employers. | Опыт, с которым основатели пришли в Bellvero. Эти объекты выполнены их прежними работодателями. |
| `C-P20-A03b` table columns | Project · Employer · Role · Period · Responsibility | Проект · Работодатель · Должность · Период · Ответственность |
| `C-P20-A03c` body | In practice this means the technical review of your design before works start, coordination between the interior and the engineering systems, and a defined set of stages that the founders check. Your day-to-day contact remains your project manager. | На практике это означает техническую проверку вашего проекта до начала работ, увязку интерьера с инженерными системами и определённый перечень этапов, которые проверяют основатели. Ежедневное общение остаётся за вашим проджект-менеджером. |
| `C-P20-A04` H2 | Made for the Project | Производство под проект |
| `C-P20-A04` body | Our own production makes bespoke cabinetry, with glass and stone work also carried out by our team. Upholstered furniture and other selected products are sourced to suit the agreed design. Production visits can be arranged by appointment. | На собственном производстве изготавливаем корпусную мебель; работы со стеклом и камнем также выполняет наша команда. Мягкую мебель и другие выбранные изделия закупаем под согласованный дизайн. Посещение производства возможно по предварительной договорённости. |
| `C-P20-A04b` H2 | Who You Are Contracting With | С кем вы заключаете договор |
| `C-P20-A04b` body | Bellvero Group operates as [LEGAL ENTITY NAME], licence no. [LICENCE NUMBER], issued by [ISSUING AUTHORITY]. The licensed activities are [ACTIVITIES]. Contracts, invoices and warranty documents are issued in this name. | Bellvero Group работает как [ЮРИДИЧЕСКОЕ ЛИЦО], лицензия № [НОМЕР ЛИЦЕНЗИИ], выдана [ОРГАН ВЫДАЧИ]. Виды деятельности по лицензии: [ДЕЯТЕЛЬНОСТЬ]. Договоры, счета и гарантийные документы оформляются на это наименование. |
| `C-P20-A05` H2 | What You Can Expect | Что важно в нашей работе |
| `C-P20-A05` body | A defined scope. Decisions recorded before changes proceed. Coordinated design and execution. Progress updates and a clear route to handover. | Определённый состав работ. Зафиксированные решения до начала изменений. Согласованность дизайна и реализации. Отчёты о ходе работ и понятный порядок передачи объекта. |

### 17.20 P21 — Contact · P22 — Warranty

| Ref | EN | RU |
|---|---|---|
| `C-P21-K01` H1 | Tell Us About Your Project | Расскажите о вашем проекте |
| `C-P21-K01` body | A home, a workspace or a bespoke furniture commission — share what you are planning, and our client relations manager will help define the next step. | Жилой интерьер, рабочее пространство или мебель на заказ — расскажите о своей задаче, и наш менеджер по работе с клиентами поможет определить следующий шаг. |
| `C-P21-K02` hours | Working Hours — Monday–Friday, 9:00–18:00, UAE time | Часы работы — Понедельник–пятница, 9:00–18:00, время ОАЭ |
| `C-P21-K02` locations | Project Locations — Dubai & Abu Dhabi. Other locations by arrangement. | География проектов — Дубай и Абу-Даби. Другие эмираты — по согласованию. |
| `C-P21-K02` meetings | Meetings — At your property or another agreed location. Production visits by appointment. | Встречи — На вашем объекте или в другом согласованном месте. Производство — по предварительной договорённости. |
| `C-P21-K02` company | Company Details — [LEGAL ENTITY NAME] · Licence no. [LICENCE NUMBER] · [ISSUING AUTHORITY] | Реквизиты компании — [ЮРИДИЧЕСКОЕ ЛИЦО] · Лицензия № [НОМЕР] · [ОРГАН ВЫДАЧИ] |
| `C-P21-K03` H2 | What Happens Next | Что будет дальше |
| `C-P21-K03` 1 | We review your enquiry and contact you during working hours. | Изучаем обращение и связываемся в рабочее время. |
| `C-P21-K03` 2 | We discuss your priorities, design direction and the work you are considering. | Обсуждаем приоритеты, пожелания к дизайну и предполагаемые работы. |
| `C-P21-K03` 3 | Where relevant, we arrange an initial site visit and outline the next steps. | При необходимости согласовываем первичный выезд и дальнейшие шаги. |
| `C-P21-K03` note | The initial discussion and first renovation site visit in Dubai or Abu Dhabi are complimentary. Design work, technical surveys and other commissioned services are agreed separately. | Первичное обсуждение и первый осмотр объекта ремонта в Дубае или Абу-Даби проводятся без оплаты. Проектирование, технические замеры и другие заказываемые услуги согласовываются отдельно. |
| `C-P21-K04` Q1 | Do I need drawings before contacting you? — No. Photos, a floor plan or a short description are useful if available, but you can start with a conversation. | Нужны чертежи для первого обращения? — Нет. Если есть фотографии, план или краткое описание — они помогут, но начать можно с разговора. |
| `C-P21-K04` Q2 | Can we meet online? — Yes. We can begin remotely and arrange a site meeting when needed. | Можно начать онлайн? — Да. Первое обсуждение можно провести дистанционно, а встречу на объекте организовать при необходимости. |
| `C-P21-K04` Q3 | Can I visit the production? — Yes, by prior arrangement so the relevant team can meet you. | Можно приехать на производство? — Да, по предварительной договорённости, чтобы вас встретили нужные специалисты. |
| `C-P22-WA01` H1 | Warranty & Aftercare | Гарантия и обращения после сдачи |
| `C-P22-WA01` body | Clear responsibility after handover. Your project documents identify the work covered, the warranty period and the relevant product warranties. | Понятная ответственность после передачи объекта. В документах проекта указываются покрываемые работы, гарантийный срок и применимые гарантии на изделия. |
| `C-P22-WA02` col 1 | 36 Months — Renovation Workmanship. Covers defects attributable to our workmanship within the agreed renovation scope, from documented handover of the relevant works. | 36 месяцев — выполненные ремонтные работы. На дефекты, связанные с качеством выполненных нами работ в согласованном объёме ремонта, с документально оформленной передачи соответствующих работ. |
| `C-P22-WA02` col 2 | 48 Months — Our Bespoke Cabinetry. Covers manufacturing and installation defects in cabinetry made and installed by Bellvero, from documented handover of the relevant items. | 48 месяцев — наша корпусная мебель. На производственные и монтажные дефекты корпусной мебели, изготовленной и установленной Bellvero, с документально оформленной передачи соответствующих изделий. |
| `C-P22-WA02` note | Engineering systems, glass and stone are classified in the contract according to the actual works and items. | Инженерные системы, стекло и камень классифицируются в договоре по фактическим работам и изделиям. |
| `C-P22-WA03` H2 | Products and Use | Изделия и эксплуатация |
| `C-P22-WA03` body | Appliances, hardware, upholstered furniture and other sourced products carry the warranty terms stated for those products. Normal wear, maintenance needs and damage caused by misuse or third-party alterations are assessed separately. The cause of a reported defect is reviewed before a decision is made. These terms do not remove any mandatory customer rights. | Для техники, фурнитуры, мягкой мебели и других закупаемых изделий действуют указанные для них гарантийные условия. Естественный износ, необходимость обслуживания и повреждения из-за неправильной эксплуатации или изменений третьими лицами рассматриваются отдельно. До принятия решения устанавливается причина заявленного дефекта. Эти условия не отменяют обязательные права заказчика. |
| `C-P22-WA04` H2 | How to Contact Us | Как обратиться |
| `C-P22-WA04` body | Contact Bellvero with your project reference, a description and photos or video where possible. We record the issue, review the available information and agree the appropriate inspection or next step. Please avoid altering the affected area before assessment unless urgent action is needed for safety or to prevent further damage. | Обратитесь в Bellvero: укажите проект, опишите проблему и по возможности приложите фото или видео. Мы зарегистрируем обращение, изучим информацию и согласуем осмотр или дальнейшие действия. По возможности не изменяйте проблемный участок до оценки, кроме срочных мер для безопасности и предотвращения дальнейшего ущерба. |

### 17.21 P23 — Privacy Notice `C-P23` · P24 — Cookies `C-P24`

| Section | EN | RU |
|---|---|---|
| Who we are | This website is operated by [LEGAL ENTITY], trading as Bellvero Group. Contact: [CONTACT EMAIL]. Registered address: [LEGAL ADDRESS]. | Сайт принадлежит [ЮРИДИЧЕСКОЕ ЛИЦО], работающему под брендом Bellvero Group. Контакт: [CONTACT EMAIL]. Юридический адрес: [ЮРИДИЧЕСКИЙ АДРЕС]. |
| Information you provide | When you enquire, we receive the information you submit, such as your name, phone number, optional email, project type, location and message. Information you send later through email or messaging may include project documents and images. | При обращении получаем указанные вами имя, телефон, необязательный email, тип проекта, местоположение и сообщение. В дальнейшей переписке по почте или в мессенджере вы можете передавать проектные документы и изображения. |
| How we use it | We use enquiry information to respond, discuss your project, prepare relevant proposals and manage the relationship. We also use necessary technical information to operate and secure the website. Optional analytics and advertising technologies operate according to your choices. | Используем сведения из обращения, чтобы ответить, обсудить проект, подготовить предложение и вести взаимодействие. Необходимые технические данные используются для работы и защиты сайта. Необязательные инструменты аналитики и рекламы работают с учётом вашего выбора. |
| Service providers | Authorised hosting, communication and enquiry-management providers may process information for these purposes. The providers used by this website and any relevant international processing arrangements are listed here: [ACTUAL PROVIDERS AND LOCATIONS]. | Уполномоченные поставщики хостинга, связи и систем учёта обращений могут обрабатывать сведения для этих задач. Используемые поставщики и сведения о международной обработке перечислены здесь: [ФАКТИЧЕСКИЕ ПОСТАВЩИКИ И ГЕОГРАФИЯ]. |
| Retention | We keep information for the period necessary for the stated purpose and applicable record-keeping requirements. Enquiry, project and technical retention periods are described here: [APPROVED RETENTION SCHEDULE]. | Храним данные в течение срока, необходимого для указанной цели и применимых требований к учёту. Сроки хранения обращений, проектных и технических данных: [УТВЕРЖДЁННЫЙ ПОРЯДОК ХРАНЕНИЯ]. |
| Your choices | You can change optional cookie choices through Cookie Settings. Contact [CONTACT EMAIL] to ask about your information, request correction or deletion, or raise a privacy concern. We assess requests under the requirements that apply to your circumstances. | Необязательные cookies можно настроить через «Настройки cookie». Для вопросов о данных, исправления, удаления или обращения по конфиденциальности напишите на [CONTACT EMAIL]. Запрос рассматривается с учётом применимых к вашей ситуации требований. |
| External services | Following a WhatsApp, telephone, email or other external-service link may involve that service's own processing practices. Please review the relevant service's privacy information. | Переход в WhatsApp, почтовое приложение или другой внешний сервис может сопровождаться обработкой данных этим сервисом. Ознакомьтесь с его правилами конфиденциальности. |
| Changes | We update this notice when our website or processing arrangements change. The current revision date appears above. | Обновляем политику при изменении сайта или порядка обработки данных. Дата действующей редакции указана выше. |
| `C-P24` intro | We use necessary technologies to operate and protect this website. With your permission, we also use analytics to understand website use and marketing technologies to measure campaigns and support relevant advertising. You can accept, reject or change optional categories below. | Используем необходимые технологии для работы и защиты сайта. С вашего разрешения применяем аналитику для понимания использования сайта и рекламные технологии для измерения кампаний и показа подходящей рекламы. Необязательные категории можно принять, отклонить или изменить ниже. |
| `C-P24` dialog | Your Privacy Choices — Allow optional analytics and advertising technologies? Necessary website functions remain available if you decline. Accept All · Reject Optional · Settings · Save Choices | Ваши настройки конфиденциальности — Разрешить необязательные технологии аналитики и рекламы? При отказе необходимые функции сайта останутся доступны. Принять все · Отклонить необязательные · Настроить · Сохранить выбор |
| `C-P24` categories | Necessary — always active · Analytics · Marketing | Необходимые — всегда активны · Аналитика · Реклама |

---

## 18. AI Image Production Card for Every Image

**How to use this part.** Every image slot on the website has one card. The card is complete: it defines the frame, the camera, the materials, the prompt, the negative prompt, the copy that sits around the image and the criteria for accepting it. Generate in this order: the anchor image of each Project Visual ID first (`BV-IMG-01` for `CP-01`, `BV-IMG-73` for `CP-02`, `BV-IMG-33` for `CP-03`, `BV-IMG-39` for `CP-04`, `BV-IMG-25` for `CP-05`, `BV-IMG-48` for `CP-06`, `BV-IMG-61` for `CP-07`), then every other asset of that project with the anchor supplied as a reference.

In the Midjourney parameter strings, `[seed]` is replaced with the seed recorded for that project and `[sref]` with the style reference of that project's anchor image. Do not start generating a project's assets before its anchor is approved.

Every card assumes the Global AI Visual DNA in section 9, the continuity sheet of its project in section 12, and the export rules in section 11. Where a mobile crop is listed, it is generated as a separate frame of the same space, never squeezed from the desktop version.

#### BV-IMG-01 — Home hero — main living volume (anchor image of CP-01)

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-01` |
| Project Visual ID | `CP-01` |
| Page | P01 Home `/` |
| Section | `H01` Hero |
| Purpose | LCP poster of the home page hero and the anchor image that fixes the visual identity of the Coastal Villa concept. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 16:9 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2048 × 1152 minimum, upscaled to 3840 × 2160 before export |
| Website export dimensions | 1920 × 1080 desktop |
| Composition | Wide establishing view of the open-plan living volume taken from the doorway. The visual interest sits in the right half of the frame; the left third is a calm plastered wall in soft shadow where the headline and button sit. |
| Main subject | The open living area with a low linen sofa, oak coffee table and the full-height oak joinery wall behind it. |
| Background | Full-height glazing on the right with a calm planted terrace beyond, low horizon, pale sky. |
| Architecture | Rectilinear contemporary volume, 3.2 m flat plastered ceiling with a 40 mm shadow gap at the wall junction, wide 2.4 m opening to the stair hall on the left. |
| Materials | Warm off-white mineral plaster, pale oak joinery, honed beige limestone floor in 900 mm format, warm grey stone fireplace bench, matte black slim hardware. |
| Main colors | Warm off-white, beige limestone, pale oak. |
| Accent colors | One muted terracotta ceramic vessel on the coffee table. |
| Lighting | Soft diffuse daylight from the full-height glazing on the right; interior lighting off; open warm shadows. |
| Time of day | Mid-morning. |
| Camera position | Standing in the doorway on the left side of the room, square to the far wall. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Straight-on with a slight leftward bias so the glazing runs into depth |
| Depth of field | Deep, f/8 equivalent, everything from 1.5 m to the far wall in focus |
| Focal point | The junction of the oak joinery wall and the seating group, right of centre. |
| Safe area for website text and CTA | the left third of the frame on desktop and the lower 40 per cent on mobile |
| Props and styling | Two books on the coffee table, one terracotta vessel, one folded wool throw on the sofa arm. Nothing else. |
| Elements that must not appear | No people, no television screen content, no visible cables, no clutter, no city skyline, no pool, no text of any kind, no branded objects. |
| Recommended Midjourney parameters | --ar 16:9 --style raw --stylize 200 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Open-plan villa living room with fitted oak joinery and full-height glazing |
| RU alt text | Гостиная виллы с встроенной мебелью из дуба и панорамным остеклением |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-living-wide-ai-01` |
| CMS fields | `asset_id` BV-IMG-01 · `project_visual_id` CP-01 · `page_id` P01 · `section_id` H01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 16:9 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1080 desktop · `focal_point_desktop` 62% / 52% · `focal_point_mobile` 55% / 40% · `safe_area` the left third of the frame on desktop and the lower 40 per cent on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The left third is genuinely calm and slightly darker so white text reaches 4.5:1 over it; the mobile crop is a separate frame, not a squeeze; this image is approved before any other CP-01 asset is generated. |

**Full Midjourney prompt**

```
Photorealistic wide establishing photograph of a contemporary open-plan villa living room in Dubai, shot from the doorway. A low bone-coloured linen sofa sits on a warm grey wool rug in front of a full-height pale oak joinery wall with a concealed cove light; an oak coffee table carries one muted terracotta ceramic vessel and two books; floor-to-ceiling glazing with slim matte black frames runs along the right wall and opens to a calm planted terrace; the left third of the room is an empty plastered wall in soft shadow; a 2.4 metre opening leads to a stair hall on the far left. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Straight-on with a slight leftward bias so the glazing runs into depth, Deep, f/8 equivalent, everything from 1.5 m to the far wall in focus, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 16:9 --style raw --stylize 200 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic wide establishing photograph of a contemporary open-plan villa living room in Dubai, shot from the doorway. A low bone-coloured linen sofa sits on a warm grey wool rug in front of a full-height pale oak joinery wall with a concealed cove light; an oak coffee table carries one muted terracotta ceramic vessel and two books; floor-to-ceiling glazing with slim matte black frames runs along the right wall and opens to a calm planted terrace; the left third of the room is an empty plastered wall in soft shadow; a 2.4 metre opening leads to a stair hall on the far left. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Straight-on with a slight leftward bias so the glazing runs into depth, Deep, f/8 equivalent, everything from 1.5 m to the far wall in focus. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left third of the frame on desktop and the lower 40 per cent on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no television screen content, no visible cables, no city skyline, no swimming pool, no decorative clutter, no additional sofas, no pattern on the rug
```

#### BV-IMG-02 — Home hero — mobile crop of the living volume

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-02` |
| Project Visual ID | `CP-01` |
| Page | P01 Home `/` |
| Section | `H01` Hero |
| Purpose | Vertical poster for the mobile hero, reframed from the same space. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 1536 × 1920 minimum, upscaled before export |
| Website export dimensions | 1080 × 1350 mobile |
| Composition | Vertical reframing of the same living volume, closer to the seating group, with the lower third kept calm for the headline and button. |
| Main subject | The seating group and the oak joinery wall behind it, vertically framed. |
| Background | A vertical slice of the full-height glazing on the right with the planted terrace beyond. |
| Architecture | Same volume, ceiling edge visible at the top of the frame with its 40 mm shadow gap. |
| Materials | Identical to BV-IMG-01: plaster, pale oak, beige limestone, warm grey stone, matte black. |
| Main colors | Warm off-white, beige, pale oak. |
| Accent colors | The same terracotta ceramic vessel. |
| Lighting | Same daylight from the right, same intensity and direction as BV-IMG-01. |
| Time of day | Mid-morning. |
| Camera position | Two metres closer to the seating group than BV-IMG-01, same wall alignment. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Straight-on, vertical format |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The sofa back and the joinery wall behind it. |
| Safe area for website text and CTA | the lower 40 per cent of the frame |
| Props and styling | Identical styling to BV-IMG-01, seen from closer. |
| Elements that must not appear | No people, no new furniture that does not exist in BV-IMG-01, no different rug, no text. |
| Recommended Midjourney parameters | --ar 4:5 --style raw --stylize 200 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Villa living room with oak joinery, vertical view |
| RU alt text | Гостиная виллы с дубовой мебелью, вертикальный кадр |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-living-wide-ai-02-mobile` |
| CMS fields | `asset_id` BV-IMG-02 · `project_visual_id` CP-01 · `page_id` P01 · `section_id` H01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1080 × 1350 mobile · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 45% · `safe_area` the lower 40 per cent of the frame · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Furniture, rug, accessories and light direction are identical to BV-IMG-01; the lower third holds white text at 4.5:1. |

**Full Midjourney prompt**

```
Photorealistic vertical architectural photograph of the same contemporary villa living room, framed portrait. The low bone linen sofa and warm grey wool rug occupy the middle of the frame, the pale oak joinery wall with concealed cove lighting rises behind, a vertical slice of full-height glazing with a slim matte black frame is visible on the right, the plastered ceiling edge with its shadow gap closes the top of the frame and the limestone floor fills the calm lower third. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, Straight-on, vertical format, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:5 --style raw --stylize 200 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic vertical architectural photograph of the same contemporary villa living room, framed portrait. The low bone linen sofa and warm grey wool rug occupy the middle of the frame, the pale oak joinery wall with concealed cove lighting rises behind, a vertical slice of full-height glazing with a slim matte black frame is visible on the right, the plastered ceiling edge with its shadow gap closes the top of the frame and the limestone floor fills the calm lower third. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, Straight-on, vertical format, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the lower 40 per cent of the frame free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no additional furniture, no changed rug pattern, no new accessories, no skyline, no text
```

#### BV-IMG-03 — Concept project card — Coastal Villa

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-03` |
| Project Visual ID | `CP-01` |
| Page | P01 Home, P14 Projects, P05, P11, P20 |
| Section | `H03` / `G02` / card reuse |
| Purpose | Card image representing the Coastal Villa concept in every project grid. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Three-quarter view of the dining end of the living volume from the opposite corner to BV-IMG-01, so the visitor sees a different part of the same space. |
| Main subject | Oak dining table with six wool-upholstered chairs and the linear matte black pendant above it. |
| Background | The oak joinery wall on the left and the full-height glazing on the right, seen at an angle. |
| Architecture | Same volume and ceiling, corner of the room visible. |
| Materials | Plaster, pale oak, limestone, warm grey stone, matte black. |
| Main colors | Warm off-white, oak, beige. |
| Accent colors | Terracotta ceramic bowl at the centre of the table. |
| Lighting | Daylight from the right, slightly stronger falloff into the left corner. |
| Time of day | Mid-morning. |
| Camera position | Diagonally opposite corner of the living volume, 45 degrees to the glazing. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 45 mm full-frame equivalent |
| Viewing angle | 45-degree three-quarter view |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The dining table and pendant. |
| Safe area for website text and CTA | none required; the card carries no overlaid text |
| Props and styling | One terracotta bowl, one linen runner. Nothing else on the table. |
| Elements that must not appear | No people, no place settings, no flowers, no status badge, no text, no overlay of any kind. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Dining area with oak table and linear pendant in a villa concept interior |
| RU alt text | Обеденная зона с дубовым столом и линейным светильником в концепции виллы |
| EN caption | Coastal Villa — concept |
| RU caption | Вилла у воды — концепция |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp01-dining-card-ai-01` |
| CMS fields | `asset_id` BV-IMG-03 · `project_visual_id` CP-01 · `page_id` P01 · `section_id` H03 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required; the card carries no overlaid text · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Reads as the same space as BV-IMG-01 at a glance; survives a 4:3 crop at 644 px and at 320 px without losing the table; colour matches the other three project cards. |

**Full Midjourney prompt**

```
Photorealistic three-quarter architectural photograph of the dining end of a contemporary villa living volume, taken from the opposite corner. A pale oak dining table with six warm grey wool-upholstered chairs sits under a slim linear matte black pendant; a terracotta ceramic bowl and a linen runner are the only objects on the table; the full-height glazing runs away to the right, the oak joinery wall closes the left of the frame. Camera on a tripod at 1.5 m height, 45 mm full-frame equivalent, 45-degree three-quarter view, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic three-quarter architectural photograph of the dining end of a contemporary villa living volume, taken from the opposite corner. A pale oak dining table with six warm grey wool-upholstered chairs sits under a slim linear matte black pendant; a terracotta ceramic bowl and a linen runner are the only objects on the table; the full-height glazing runs away to the right, the oak joinery wall closes the left of the frame. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 45 mm full-frame equivalent at 1.5 m height, 45-degree three-quarter view, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required; the card carries no overlaid text free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no place settings, no flowers, no glassware, no people, no badge, no overlay, no text
```

#### BV-IMG-04 — Concept project card — Tower Residence

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-04` |
| Project Visual ID | `CP-03` |
| Page | P01 Home, P14 Projects, P03, P18 |
| Section | `H03` / `G02` / card reuse |
| Purpose | Card image representing the Tower Residence concept in every project grid. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Three-quarter view of the apartment living area with the galley kitchen visible in the background. |
| Main subject | Compact bone linen sofa and low oak media unit, with the handleless kitchen run behind. |
| Background | Continuous glazing at the front left with a hazy, indistinct exterior. |
| Architecture | 2.8 m ceiling with a recessed linear light channel, flush detailing, 20 mm shadow gap at the floor. |
| Materials | Fine plaster, pale oak, beige large-format tile, warm grey stone worktop, matte black profiles. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | One muted terracotta cushion. |
| Lighting | Diffuse daylight from the front left, even and soft. |
| Time of day | Mid-morning, slightly overcast. |
| Camera position | Corner of the living area opposite the kitchen. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | 45-degree three-quarter view |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The sofa and the kitchen run behind it. |
| Safe area for website text and CTA | none required |
| Props and styling | One terracotta cushion, one ceramic cup on the media unit. |
| Elements that must not appear | No people, no recognisable skyline, no landmark buildings, no badge, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Apartment living area with a galley kitchen behind, concept interior |
| RU alt text | Жилая зона квартиры с кухней на заднем плане, концепция интерьера |
| EN caption | Tower Residence — concept |
| RU caption | Квартира в башне — концепция |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp03-living-card-ai-01` |
| CMS fields | `asset_id` BV-IMG-04 · `project_visual_id` CP-03 · `page_id` P01 · `section_id` H03 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 52% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Exterior is an indistinct haze with no identifiable building; colour temperature matches the other three cards. |

**Full Midjourney prompt**

```
Photorealistic three-quarter architectural photograph of a compact contemporary apartment living area. A bone-coloured linen sofa with one muted terracotta cushion faces a low pale oak media unit; behind it a handleless galley kitchen with oak base units, off-white upper units and a warm grey stone worktop runs along the rear wall; continuous glazing with slim matte black mullions fills the front left and shows only a soft daylight haze outside. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, 45-degree three-quarter view, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic three-quarter architectural photograph of a compact contemporary apartment living area. A bone-coloured linen sofa with one muted terracotta cushion faces a low pale oak media unit; behind it a handleless galley kitchen with oak base units, off-white upper units and a warm grey stone worktop runs along the rear wall; continuous glazing with slim matte black mullions fills the front left and shows only a soft daylight haze outside. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, 45-degree three-quarter view, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no recognisable skyline, no landmark towers, no people, no badge, no text, no clutter on the worktop
```

#### BV-IMG-05 — Concept project card — Garden Villa

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-05` |
| Project Visual ID | `CP-02` |
| Page | P01 Home, P14 Projects, P05, P17 |
| Section | `H03` / `G02` / card reuse |
| Purpose | Card image representing the Garden Villa concept in every project grid. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | View across the living room towards the open sliding glazed wall and the shaded terrace beyond. |
| Main subject | Deep sand-coloured sofa with the garden opening behind it. |
| Background | Shaded terrace with mature planting seen through the open sliding wall. |
| Architecture | 3.0 m ceiling with a pale oak beam rhythm at 1.2 m centres, deep roof overhang outside. |
| Materials | Hand-applied plaster, pale oak with walnut accents, beige limestone in 600 × 1200 format continuing outside. |
| Main colors | Warm off-white, sand, pale oak, green planting. |
| Accent colors | Clay-toned flatweave rug. |
| Lighting | Low warm late-afternoon daylight entering from the left through the sliding wall. |
| Time of day | Late afternoon. |
| Camera position | Back corner of the living room looking towards the garden opening. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Slight three-quarter towards the opening |
| Depth of field | Deep, f/8 equivalent, planting outside still legible |
| Focal point | The threshold where the limestone floor meets the terrace paving. |
| Safe area for website text and CTA | none required |
| Props and styling | One folded throw, one ceramic bowl, one planted pot on the terrace. |
| Elements that must not appear | No people, no pool, no barbecue, no outdoor umbrella, no badge, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Villa living room opening onto a shaded garden terrace, concept interior |
| RU alt text | Гостиная виллы с выходом на затенённую садовую террасу, концепция интерьера |
| EN caption | Garden Villa — concept |
| RU caption | Вилла с садом — концепция |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp02-living-card-ai-01` |
| CMS fields | `asset_id` BV-IMG-05 · `project_visual_id` CP-02 · `page_id` P01 · `section_id` H03 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 55% / 55% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Interior and terrace floor materials match across the threshold; late afternoon light direction matches every other CP-02 asset. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a single-storey villa living room in late afternoon, looking towards an open sliding glazed wall. A deep sand-coloured sofa sits on a clay-toned flatweave rug, a pale oak beam rhythm crosses the plastered ceiling, and the beige limestone floor runs continuously out to a shaded terrace with mature planting, a timber pergola and warm low sunlight raking in from the left. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Slight three-quarter towards the opening, Deep, f/8 equivalent, planting outside still legible, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a single-storey villa living room in late afternoon, looking towards an open sliding glazed wall. A deep sand-coloured sofa sits on a clay-toned flatweave rug, a pale oak beam rhythm crosses the plastered ceiling, and the beige limestone floor runs continuously out to a shaded terrace with mature planting, a timber pergola and warm low sunlight raking in from the left. Materials and finishes: warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Slight three-quarter towards the opening, Deep, f/8 equivalent, planting outside still legible. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no swimming pool, no barbecue, no parasol, no people, no badge, no text
```

#### BV-IMG-06 — Concept project card — Business District Office

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-06` |
| Project Visual ID | `CP-04` |
| Page | P01 Home, P14 Projects, P11, P20 |
| Section | `H03` / `G02` / card reuse |
| Purpose | Card image representing the office concept in every project grid. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | View along the open-plan workspace with the glazed meeting enclosure on the right and the perimeter glazing on the left. |
| Main subject | Rows of oak-topped desks with matte black legs and warm grey task chairs. |
| Background | Glazed meeting enclosure with an oak-topped table inside, empty and unoccupied. |
| Architecture | 3.0 m ceiling with recessed linear luminaires in a regular rhythm, 2.9 m glazed partition head height. |
| Materials | Plaster, oak desk tops, warm grey porcelain floor, matte black frames, wool acoustic panels. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | One muted terracotta wool panel on the far wall. |
| Lighting | Even daylight from the perimeter glazing on the left, ceiling luminaires softly on. |
| Time of day | Mid-morning. |
| Camera position | Standing at the end of the desk run, looking along the space. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | One-point perspective along the desk run |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The third desk along the run. |
| Safe area for website text and CTA | none required |
| Props and styling | Empty desks with closed matte black monitor arms, one ceramic cup, no paper. |
| Elements that must not appear | No people, no branding, no visible screen content, no personal items, no badge, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Open-plan office with oak desks and a glazed meeting room, concept interior |
| RU alt text | Офис открытой планировки с дубовыми столами и стеклянной переговорной, концепция интерьера |
| EN caption | Business District Office — concept |
| RU caption | Офис в деловом районе — концепция |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp04-openplan-card-ai-01` |
| CMS fields | `asset_id` BV-IMG-06 · `project_visual_id` CP-04 · `page_id` P01 · `section_id` H03 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Screens are blank and unbranded; the space reads as commercial rather than domestic; colour matches the other three cards. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a contemporary open-plan office, looking along a run of pale oak desks with matte black legs and warm grey wool task chairs. A glazed meeting enclosure with slim matte black frames stands on the right with an empty oak table inside, perimeter glazing on the left brings even daylight, recessed linear luminaires run across the plastered ceiling, and the floor is warm grey large-format matte porcelain. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, One-point perspective along the desk run, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a contemporary open-plan office, looking along a run of pale oak desks with matte black legs and warm grey wool task chairs. A glazed meeting enclosure with slim matte black frames stands on the right with an empty oak table inside, perimeter glazing on the left brings even daylight, recessed linear luminaires run across the plastered ceiling, and the floor is warm grey large-format matte porcelain. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, One-point perspective along the desk run, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no screen content, no branding, no paperwork, no cables on the floor, no badge, no text
```

#### BV-IMG-07 — Coordination and control image

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-07` |
| Project Visual ID | `CP-07` |
| Page | P01 Home |
| Section | `H04` One team, one responsibility |
| Purpose | Visual support for the coordination and responsibility block, showing decisions being recorded rather than a posed scene. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 1536 × 1920 minimum |
| Website export dimensions | 1200 × 1500 |
| Composition | Vertical mid-distance view across a studio work table where a drawing is laid out with a scale rule, a pencil and two material samples on top of it. |
| Main subject | The drawing sheet and the instruments resting on it, mid-work. |
| Background | Plastered studio wall and the edge of a low oak plan chest, softly out of focus. |
| Architecture | Calm studio interior with a large steel-framed window to the left. |
| Materials | Pale oak table with a matte oil finish, warm off-white paper, stone and timber samples, matte black instruments. |
| Main colors | Warm off-white, oak, warm grey. |
| Accent colors | One clay-toned fabric swatch. |
| Lighting | Soft even daylight from the left, gentle directional shadow from the scale rule. |
| Time of day | Mid-morning, overcast. |
| Camera position | Standing at the long side of the table, looking down at 35 degrees. |
| Camera height | 1.4 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | High three-quarter looking down at the sheet |
| Depth of field | Moderate, f/4 equivalent, sheet sharp, background soft |
| Focal point | The scale rule where it crosses the drawing. |
| Safe area for website text and CTA | none required |
| Props and styling | Scale rule, pencil, tape measure, two stone samples, one timber sample, one fabric swatch. |
| Elements that must not appear | No people's faces, no readable text or numbers on the drawing, no stamps, no signatures, no logos, no laptop screen content. |
| Recommended Midjourney parameters | --ar 4:5 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Architectural drawing, scale rule and material samples on a studio table |
| RU alt text | Чертёж, масштабная линейка и образцы материалов на столе студии |
| EN caption | Project coordination and material selection |
| RU caption | Координация проекта и подбор материалов |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-desk-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-07 · `project_visual_id` CP-07 · `page_id` P01 · `section_id` H04 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1200 × 1500 · `focal_point_desktop` 50% / 55% · `focal_point_mobile` 50% / 55% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No character on the drawing is readable as text or a number anywhere in the frame, including at full zoom. |

**Full Midjourney prompt**

```
Photorealistic close working photograph of an architectural drawing laid out on a pale oak studio table, seen from above at an angle. A matte black scale rule and a pencil rest across the sheet, a tape measure sits at the edge, two warm grey stone samples and a pale oak timber sample are placed beside a clay-toned fabric swatch, and the line work on the sheet is fine and generic with no readable text or numbers. Camera on a tripod at 1.4 m height, 50 mm full-frame equivalent, High three-quarter looking down at the sheet, Moderate, f/4 equivalent, sheet sharp, background soft, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:5 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close working photograph of an architectural drawing laid out on a pale oak studio table, seen from above at an angle. A matte black scale rule and a pencil rest across the sheet, a tape measure sits at the edge, two warm grey stone samples and a pale oak timber sample are placed beside a clay-toned fabric swatch, and the line work on the sheet is fine and generic with no readable text or numbers. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.4 m height, High three-quarter looking down at the sheet, Moderate, f/4 equivalent, sheet sharp, background soft. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no dimensions, no title block, no stamp, no signature, no logo, no hands, no faces, no laptop screen
```

#### BV-IMG-08 — Craft and production detail for the family-led block

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-08` |
| Project Visual ID | `CP-06` |
| Page | P01 Home |
| Section | `H06` Family-led, personally involved |
| Purpose | Vertical image beside the family-led text: craft rather than people. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 1536 × 1920 minimum |
| Website export dimensions | 1200 × 1500 |
| Composition | Vertical close view of a finished oak cabinet door being checked on a felt-covered bench, hands not in frame. |
| Main subject | The oak door front with a matte black bar handle fitted, resting at a slight angle on grey felt. |
| Background | Workshop bench, tool wall out of focus behind. |
| Architecture | Workshop interior with white blockwork walls and high clerestory daylight. |
| Materials | Pale oak with visible fine grain, matte black hardware, grey felt blanket, raw steel bench frame. |
| Main colors | Pale oak, warm grey, off-white. |
| Accent colors | Matte black handle. |
| Lighting | High daylight from the clerestory on the right with a neutral overhead LED fill; raking light across the door face. |
| Time of day | Mid-morning. |
| Camera position | Standing at the bench, looking down the length of the door. |
| Camera height | 1.4 m |
| Lens or focal-length equivalent | 70 mm full-frame equivalent |
| Viewing angle | Low-angle raking view along the surface |
| Depth of field | Shallow to moderate, f/2.8 equivalent, handle and near edge sharp |
| Focal point | The handle fixing and the door edge. |
| Safe area for website text and CTA | none required |
| Props and styling | Grey felt blanket, one clamp at the far edge, nothing else. |
| Elements that must not appear | No faces, no full figures, no machinery brand marks, no readable labels, no text. |
| Recommended Midjourney parameters | --ar 4:5 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Finished oak cabinet door with a matte black handle on a workshop bench |
| RU alt text | Готовый дубовый фасад с чёрной ручкой на верстаке в цеху |
| EN caption | Cabinet front prepared for installation |
| RU caption | Фасад, подготовленный к монтажу |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp06-door-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-08 · `project_visual_id` CP-06 · `page_id` P01 · `section_id` H06 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1200 × 1500 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Oak tone matches every CP-01 joinery asset; hardware is the same matte black family used across the site; no readable label anywhere. |

**Full Midjourney prompt**

```
Photorealistic close workshop photograph of a finished pale oak cabinet door resting at a slight angle on a grey felt blanket over a steel workbench. A slim matte black bar handle is fitted to the door, raking daylight from a high clerestory window reveals the fine oak grain and the crisp machined edge, a single clamp sits at the far end of the bench and the tool wall behind falls softly out of focus. Camera on a tripod at 1.4 m height, 70 mm full-frame equivalent, Low-angle raking view along the surface, Shallow to moderate, f/2.8 equivalent, handle and near edge sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:5 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close workshop photograph of a finished pale oak cabinet door resting at a slight angle on a grey felt blanket over a steel workbench. A slim matte black bar handle is fitted to the door, raking daylight from a high clerestory window reveals the fine oak grain and the crisp machined edge, a single clamp sits at the far end of the bench and the tool wall behind falls softly out of focus. Materials and finishes: white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance. Camera: 70 mm full-frame equivalent at 1.4 m height, Low-angle raking view along the surface, Shallow to moderate, f/2.8 equivalent, handle and near edge sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no faces, no full human figures, no brand marks, no readable labels, no stickers, no text
```

#### BV-IMG-09 — Services catalogue hero — stair hall and passage

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-09` |
| Project Visual ID | `CP-01` |
| Page | P02 Services |
| Section | `S01` Hero |
| Purpose | Hero of the services catalogue: interior architecture rather than furnishing. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | View from the living volume into the stair hall through the 2.4 m opening, the stair rising on the right, a strong vertical line of the door reveal dividing the frame. |
| Main subject | The stair with its oak treads and matte black slim balustrade, seen through the wide opening. |
| Background | Tall stair-landing window throwing a soft pool of light onto the limestone floor. |
| Architecture | Full-height flush oak door held open, 40 mm ceiling shadow gap, deep plastered reveal. |
| Materials | Plaster, pale oak treads, beige limestone, matte black balustrade. |
| Main colors | Warm off-white, oak, beige. |
| Accent colors | None; this frame is deliberately material-quiet. |
| Lighting | Daylight from the landing window above right, one soft shaft across the floor. |
| Time of day | Mid-morning. |
| Camera position | In the living volume, two metres back from the opening, square to it. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Straight-on through the opening |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The third stair tread where the light lands. |
| Safe area for website text and CTA | the left half of the desktop frame, where the H1 and intro sit |
| Props and styling | None. The frame is architectural. |
| Elements that must not appear | No sofa or soft furnishing as the main subject, no people, no plants, no text, no exterior skyline. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Stair hall with oak treads and a matte black balustrade in a villa concept |
| RU alt text | Лестничный холл с дубовыми ступенями и чёрным ограждением в концепции виллы |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-stair-hero-ai-01` |
| CMS fields | `asset_id` BV-IMG-09 · `project_visual_id` CP-01 · `page_id` P02 · `section_id` S01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 62% / 50% · `focal_point_mobile` 50% / 45% · `safe_area` the left half of the desktop frame, where the H1 and intro sit · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Reads as interior architecture, not as a furniture photograph; left half calm enough for H1 and intro; mobile crop generated separately. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph looking from an open-plan villa living space through a wide 2.4 metre opening into a stair hall. A pale oak stair with a slim matte black balustrade rises on the right, a tall landing window throws one soft shaft of daylight across the honed beige limestone floor, a full-height flush oak door stands open in a deep plastered reveal, and the left half of the frame is a calm plastered wall. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, Straight-on through the opening, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph looking from an open-plan villa living space through a wide 2.4 metre opening into a stair hall. A pale oak stair with a slim matte black balustrade rises on the right, a tall landing window throws one soft shaft of daylight across the honed beige limestone floor, a full-height flush oak door stands open in a deep plastered reveal, and the left half of the frame is a calm plastered wall. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, Straight-on through the opening, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left half of the desktop frame, where the H1 and intro sit free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no sofa as main subject, no plants, no people, no skyline, no artwork, no text
```

#### BV-IMG-10 — Services row 1 — design direction

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-10` |
| Project Visual ID | `CP-02` |
| Page | P02 Services |
| Section | `S02` row 1 |
| Purpose | Editorial row image for Interior and Landscape Design. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Interior seen from the terrace side, framed by the open sliding glazed wall, showing the relationship between inside and outside. |
| Main subject | The threshold between terrace paving and interior limestone, with the living room beyond. |
| Background | Living room interior in soft shade, oak beams visible. |
| Architecture | Deep roof overhang above, sliding glazed panels with slim matte black frames. |
| Materials | Beige limestone paving and floor, oak beams, plaster, warm grey stone. |
| Main colors | Warm beige, sand, pale oak. |
| Accent colors | Planting green in the near foreground, out of focus. |
| Lighting | Late afternoon light from behind the camera, long soft shadows across the paving. |
| Time of day | Late afternoon. |
| Camera position | On the terrace, three metres from the opening. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Straight-on into the opening |
| Depth of field | Deep, f/8 equivalent with a soft foreground leaf edge |
| Focal point | The threshold line between paving and interior floor. |
| Safe area for website text and CTA | none required |
| Props and styling | One ceramic planter at the frame edge. |
| Elements that must not appear | No people, no pool, no furniture blocking the threshold, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Villa interior seen from the terrace through an open sliding glazed wall |
| RU alt text | Интерьер виллы, видимый с террасы через открытую раздвижную стену |
| EN caption | Interior and landscape planned together — concept |
| RU caption | Интерьер и ландшафт, продуманные вместе — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp02-threshold-row-ai-01` |
| CMS fields | `asset_id` BV-IMG-10 · `project_visual_id` CP-02 · `page_id` P02 · `section_id` S02-1 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 55% · `focal_point_mobile` 50% / 55% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Floor material is continuous across the threshold; light direction matches all CP-02 assets. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph taken from a shaded terrace looking into a single-storey villa through an open sliding glazed wall. Warm beige limestone paving runs across the threshold and continues as the interior floor, a deep roof overhang shades the top of the frame, pale oak ceiling beams are visible inside, low late-afternoon sunlight rakes across the paving from behind the camera and a ceramic planter with soft green planting sits at the edge of the frame. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Straight-on into the opening, Deep, f/8 equivalent with a soft foreground leaf edge, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph taken from a shaded terrace looking into a single-storey villa through an open sliding glazed wall. Warm beige limestone paving runs across the threshold and continues as the interior floor, a deep roof overhang shades the top of the frame, pale oak ceiling beams are visible inside, low late-afternoon sunlight rakes across the paving from behind the camera and a ceramic planter with soft green planting sits at the edge of the frame. Materials and finishes: warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Straight-on into the opening, Deep, f/8 equivalent with a soft foreground leaf edge. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no pool, no people, no parasol, no garden furniture in the threshold, no text
```

#### BV-IMG-11 — Services row 2 — renovation

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-11` |
| Project Visual ID | `CP-03` |
| Page | P02 Services |
| Section | `S02` row 2 |
| Purpose | Editorial row image for Villa and Apartment Renovation. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Apartment corridor view towards the living area, full-height oak wardrobes running down the left side. |
| Main subject | The corridor joinery run and the light at its end. |
| Background | Living area with the sofa partly visible, glazing beyond. |
| Architecture | 2.8 m ceiling with a recessed linear light channel running the length of the corridor. |
| Materials | Fine plaster, pale oak fronts, beige large-format floor tile, matte black slim pulls. |
| Main colors | Warm off-white, pale oak. |
| Accent colors | None in this frame. |
| Lighting | Daylight pulling through from the living area, recessed channel softly lit. |
| Time of day | Mid-morning. |
| Camera position | At the entrance end of the corridor, centred. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | One-point perspective down the corridor |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The end of the wardrobe run where it meets the living area. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No people, no shoes or personal belongings, no open doors, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Apartment corridor with full-height fitted wardrobes |
| RU alt text | Коридор квартиры со встроенными шкафами во всю высоту |
| EN caption | Apartment renovation — concept |
| RU caption | Ремонт квартиры — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp03-corridor-row-ai-01` |
| CMS fields | `asset_id` BV-IMG-11 · `project_visual_id` CP-03 · `page_id` P02 · `section_id` S02-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Perspective lines are straight; oak tone and pull hardware match every CP-03 asset. |

**Full Midjourney prompt**

```
Photorealistic one-point-perspective photograph down an apartment corridor. Full-height pale oak wardrobe fronts with slim matte black pulls run along the left wall, a recessed linear light channel follows the plastered ceiling, honed beige large-format floor tiles lead towards a bright living area at the end of the corridor where daylight enters from continuous glazing. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, One-point perspective down the corridor, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic one-point-perspective photograph down an apartment corridor. Full-height pale oak wardrobe fronts with slim matte black pulls run along the left wall, a recessed linear light channel follows the plastered ceiling, honed beige large-format floor tiles lead towards a bright living area at the end of the corridor where daylight enters from continuous glazing. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, One-point perspective down the corridor, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no shoes, no personal belongings, no open doors, no text, no clutter
```

#### BV-IMG-12 — Services row 3 — commercial fit-out

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-12` |
| Project Visual ID | `CP-04` |
| Page | P02 Services |
| Section | `S02` row 3 |
| Purpose | Editorial row image for Commercial Fit-Out. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Interior of the glazed meeting enclosure seen from the open plan, with the oak table and the acoustic panelling behind. |
| Main subject | The meeting table under its matte black pendant, seen through the glazed partition. |
| Background | Open-plan desks softly out of focus in the foreground edge. |
| Architecture | 2.9 m glazed partition with slim matte black frames, flush ceiling plane with linear luminaires. |
| Materials | Glass, oak table, warm grey wool carpet and acoustic panels, matte black frames. |
| Main colors | Warm grey, pale oak, off-white. |
| Accent colors | One muted terracotta acoustic panel. |
| Lighting | Daylight from the perimeter on the left passing through the glass, luminaires softly on. |
| Time of day | Mid-morning. |
| Camera position | In the open plan, one metre from the partition, slightly to the left of the door. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Slight three-quarter through the glazing |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The centre of the meeting table. |
| Safe area for website text and CTA | none required |
| Props and styling | Empty table, one ceramic carafe, no paper, no devices. |
| Elements that must not appear | No people, no screen content, no branding, no whiteboard writing, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Glazed meeting room with an oak table inside an office concept |
| RU alt text | Стеклянная переговорная с дубовым столом в концепции офиса |
| EN caption | Commercial fit-out — concept |
| RU caption | Коммерческая отделка — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp04-meeting-row-ai-01` |
| CMS fields | `asset_id` BV-IMG-12 · `project_visual_id` CP-04 · `page_id` P02 · `section_id` S02-3 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Glass reflections are physically plausible and free of artefacts; no writing or branding anywhere. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a glazed meeting enclosure inside a contemporary office, seen from the open-plan area. A pale oak meeting table sits under a slim matte black pendant on warm grey wool carpet, the rear wall carries warm grey acoustic panels with one muted terracotta panel, slim matte black glazing frames divide the view, and daylight from the perimeter glazing passes through the glass with a clean, physically correct reflection. Camera on a tripod at 1.55 m height, 40 mm full-frame equivalent, Slight three-quarter through the glazing, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a glazed meeting enclosure inside a contemporary office, seen from the open-plan area. A pale oak meeting table sits under a slim matte black pendant on warm grey wool carpet, the rear wall carries warm grey acoustic panels with one muted terracotta panel, slim matte black glazing frames divide the view, and daylight from the perimeter glazing passes through the glass with a clean, physically correct reflection. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.55 m height, Slight three-quarter through the glazing, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no screen content, no writing on glass, no branding, no paper, no text
```

#### BV-IMG-13 — Services row 4 — joinery detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-13` |
| Project Visual ID | `CP-01` |
| Page | P02 Services |
| Section | `S02` row 4 |
| Purpose | Editorial row image for Bespoke Joinery and Furniture, close enough to read craftsmanship. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of the junction where a warm grey stone worktop meets an oak cabinet carcass, with a matte black shadow-gap grip above. |
| Main subject | The stone-to-timber junction and the machined edge detail. |
| Background | Plastered wall softly out of focus behind. |
| Architecture | Not visible beyond the cabinet run. |
| Materials | Warm grey honed stone with a 20 mm edge, pale oak with visible pore structure, matte black grip profile. |
| Main colors | Warm grey, pale oak. |
| Accent colors | None. |
| Lighting | Raking side daylight from the right revealing edge quality and surface texture. |
| Time of day | Mid-morning. |
| Camera position | Half a metre from the cabinet run, slightly above the worktop line. |
| Camera height | 1.2 m |
| Lens or focal-length equivalent | 85 mm full-frame equivalent |
| Viewing angle | Slight angle along the run so the edge reads |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The stone edge where it meets the oak front. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No kitchen accessories, no food, no hands, no brand marks, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Stone worktop meeting an oak cabinet front, close detail |
| RU alt text | Стык каменной столешницы и дубового фасада, крупная деталь |
| EN caption | Bespoke joinery detail — concept |
| RU caption | Деталь мебели на заказ — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-joinery-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-13 · `project_visual_id` CP-01 · `page_id` P02 · `section_id` S02-4 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Material scale is physically correct at this distance; edges are crisp without artificial sharpening; no synthetic plastic sheen on the oak. |

**Full Midjourney prompt**

```
Photorealistic close detail photograph of bespoke joinery: a honed warm grey stone worktop with a crisp 20 millimetre edge meets a pale oak cabinet carcass, a slim matte black shadow-gap grip profile runs above the drawer front, raking daylight from the right reveals the oak pore structure, the fine stone veining and the precision of the machined edge. Camera on a tripod at 1.2 m height, 85 mm full-frame equivalent, Slight angle along the run so the edge reads, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close detail photograph of bespoke joinery: a honed warm grey stone worktop with a crisp 20 millimetre edge meets a pale oak cabinet carcass, a slim matte black shadow-gap grip profile runs above the drawer front, raking daylight from the right reveals the oak pore structure, the fine stone veining and the precision of the machined edge. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 85 mm full-frame equivalent at 1.2 m height, Slight angle along the run so the edge reads, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no kitchen accessories, no food, no hands, no brand marks, no text, no reflections of a room
```

#### BV-IMG-14 — Interior design hero — living volume in design detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-14` |
| Project Visual ID | `CP-01` |
| Page | P03 Interior Design |
| Section | `D01` Hero |
| Purpose | Hero of the interior design service page. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | View along the living volume through the opening into the dining end, layered depth from foreground joinery to the far glazing. |
| Main subject | The layered depth of the space: joinery wall, seating, dining beyond. |
| Background | Full-height glazing at the far end with the terrace beyond. |
| Architecture | Same volume as BV-IMG-01, seen from the opposite side so the visitor recognises the space. |
| Materials | Plaster, pale oak, beige limestone, warm grey stone, matte black. |
| Main colors | Warm off-white, oak, beige. |
| Accent colors | Terracotta vessel visible in the middle distance. |
| Lighting | Daylight from the right, one soft shaft across the floor in the middle distance. |
| Time of day | Mid-morning. |
| Camera position | At the stair-hall opening looking back into the living volume. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | One-point perspective with depth through the room |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The seating group in the middle distance. |
| Safe area for website text and CTA | the left half on desktop, the lower third on mobile |
| Props and styling | Terracotta vessel, two books, one throw. |
| Elements that must not appear | No people, no additional furniture, no artwork, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Villa living volume with layered depth from joinery to dining area |
| RU alt text | Жилое пространство виллы с глубиной от мебельной стены до обеденной зоны |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-living-hero-ai-02` |
| CMS fields | `asset_id` BV-IMG-14 · `project_visual_id` CP-01 · `page_id` P03 · `section_id` D01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 58% / 50% · `focal_point_mobile` 50% / 45% · `safe_area` the left half on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Recognisably the same room as BV-IMG-01 with identical furniture and materials; left half calm enough for the H1. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph looking along a contemporary villa living volume from the stair-hall opening. A pale oak joinery wall runs down the left, the low bone linen sofa and oak coffee table sit in the middle distance on a warm grey rug, the dining table and its linear matte black pendant are visible beyond, and full-height glazing along the right wall drops one soft shaft of daylight onto the honed beige limestone floor. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, One-point perspective with depth through the room, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph looking along a contemporary villa living volume from the stair-hall opening. A pale oak joinery wall runs down the left, the low bone linen sofa and oak coffee table sit in the middle distance on a warm grey rug, the dining table and its linear matte black pendant are visible beyond, and full-height glazing along the right wall drops one soft shaft of daylight onto the honed beige limestone floor. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, One-point perspective with depth through the room, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left half on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no artwork on the walls, no extra furniture, no clutter, no text
```

#### BV-IMG-15 — Design triptych 1 of 3 — layout drawing

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-15` |
| Project Visual ID | `CP-07` |
| Page | P03 Interior Design |
| Section | `D02` triptych |
| Purpose | Illustrative layout drawing showing furniture arrangement, first panel of the layout–materials–result sequence. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` |
| Composition | Flat top-down view of a single drawing sheet with generous white margin, sheet filling roughly 85 per cent of the frame. |
| Main subject | A residential floor plan with room outlines, wall poché, door swings and simple furniture blocks. |
| Background | Warm off-white paper with a very subtle texture. |
| Architecture | The drawn plan itself: an open living volume, a kitchen run, a stair, bedrooms. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey lines. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet, no hotspot, a very faint paper shadow at one edge. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet, centred and square. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Perfectly flat top-down, no keystone |
| Depth of field | Deep, f/8 equivalent, whole sheet sharp |
| Focal point | The centre of the plan. |
| Safe area for website text and CTA | none required |
| Props and styling | None. The sheet alone. |
| Elements that must not appear | No readable text, no numbers, no dimension figures, no title block, no stamp, no signature, no logo, no north point with lettering, no client name. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative floor plan showing layout and furniture arrangement |
| RU alt text | Иллюстративный план с планировкой и расстановкой мебели |
| EN caption | Layout |
| RU caption | Планировка |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-layout-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-15 · `project_visual_id` CP-07 · `page_id` P03 · `section_id` D02-1 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Zoom to 100 per cent reveals no glyph that reads as a letter or a number; line weights stay legible at the displayed size on a phone; no element resembles an authority stamp or an approval signature. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of a single architectural floor plan sheet lying on a pale oak table. The plan shows an open living volume, a kitchen run, a stair and bedrooms, drawn with fine consistent line weights, solid wall poché, quarter-circle door swings and simple furniture blocks; the sheet has a generous margin and carries no text, no numbers and no title block of any kind. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Perfectly flat top-down, no keystone, Deep, f/8 equivalent, whole sheet sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of a single architectural floor plan sheet lying on a pale oak table. The plan shows an open living volume, a kitchen run, a stair and bedrooms, drawn with fine consistent line weights, solid wall poché, quarter-circle door swings and simple furniture blocks; the sheet has a generous margin and carries no text, no numbers and no title block of any kind. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Perfectly flat top-down, no keystone, Deep, f/8 equivalent, whole sheet sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no dimension strings, no title block, no stamp, no signature, no logo, no lettering, no annotation
```

#### BV-IMG-16 — Design triptych 2 of 3 — material palette

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-16` |
| Project Visual ID | `CP-07` |
| Page | P03 Interior Design |
| Section | `D02` triptych |
| Purpose | Material composition of the Coastal Villa concept, second panel of the sequence. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Flat lay from directly above: samples slightly overlapping, arranged with intent, generous space around the group. |
| Main subject | The material set: limestone tile, oak veneer board, warm grey stone offcut, linen and wool swatches, a matte black handle sample. |
| Background | Pale oak table surface. |
| Architecture | Not applicable. |
| Materials | Honed beige limestone, pale oak, warm grey stone, linen in sand and bone, wool in warm grey, one terracotta ceramic tile, matte black hardware. |
| Main colors | Beige, sand, bone, pale oak. |
| Accent colors | One muted terracotta ceramic tile. |
| Lighting | Soft indirect daylight from the left, no flash, gentle shadows under the sample edges. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the arrangement. |
| Camera height | 1.3 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Top-down, square |
| Depth of field | Moderate, f/5.6 equivalent, all samples sharp |
| Focal point | The overlap of the stone and oak samples at the centre. |
| Safe area for website text and CTA | none required |
| Props and styling | Samples only; no tools, no supplier cards, no labels. |
| Elements that must not appear | No supplier branding, no printed labels, no price tags, no text, no hands. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Material palette with limestone, oak, stone and fabric samples |
| RU alt text | Палитра материалов: известняк, дуб, камень и образцы тканей |
| EN caption | Materials |
| RU caption | Материалы |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-materials-mood-ai-01` |
| CMS fields | `asset_id` BV-IMG-16 · `project_visual_id` CP-07 · `page_id` P03 · `section_id` D02-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Every material in the palette also appears in the CP-01 interior assets; texture scale is correct; no label or text anywhere. |

**Full Midjourney prompt**

```
Photorealistic top-down flat-lay photograph of an interior material palette arranged on a pale oak table: a honed beige limestone tile, a pale oak veneer board, a warm grey stone offcut with quiet veining, folded linen swatches in sand and bone, a warm grey wool swatch, one muted terracotta ceramic tile and a matte black bar handle, slightly overlapping with clear space around the group, lit by soft indirect daylight from the left. Camera on a tripod at 1.3 m above the table height, 50 mm full-frame equivalent, Top-down, square, Moderate, f/5.6 equivalent, all samples sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic top-down flat-lay photograph of an interior material palette arranged on a pale oak table: a honed beige limestone tile, a pale oak veneer board, a warm grey stone offcut with quiet veining, folded linen swatches in sand and bone, a warm grey wool swatch, one muted terracotta ceramic tile and a matte black bar handle, slightly overlapping with clear space around the group, lit by soft indirect daylight from the left. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.3 m above the table height, Top-down, square, Moderate, f/5.6 equivalent, all samples sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no supplier labels, no printed cards, no price tags, no hands, no text, no plastic sample holders
```

#### BV-IMG-17 — Design triptych 3 of 3 — the realised room

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-17` |
| Project Visual ID | `CP-01` |
| Page | P03 Interior Design |
| Section | `D02` triptych |
| Purpose | The interior that corresponds to the layout and the palette, third panel of the sequence. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Frame taken from a viewpoint close to the drawing's living-room position, so plan, materials and space read as one story. |
| Main subject | The seating group against the oak joinery wall, seen square-on. |
| Background | Glazing edge on the right, terrace light spilling in. |
| Architecture | Same living volume, ceiling shadow gap visible. |
| Materials | Plaster, pale oak, limestone, warm grey stone, matte black. |
| Main colors | Warm off-white, oak, beige. |
| Accent colors | The terracotta vessel from the palette. |
| Lighting | Daylight from the right, matching every other CP-01 asset. |
| Time of day | Mid-morning. |
| Camera position | Centred on the seating group, four metres back. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Square-on to the joinery wall |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The centre of the joinery wall behind the sofa. |
| Safe area for website text and CTA | none required |
| Props and styling | Terracotta vessel, two books, wool throw. |
| Elements that must not appear | No people, no new materials that are absent from BV-IMG-16, no artwork, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Completed living room corresponding to the layout and material palette shown |
| RU alt text | Гостиная, соответствующая показанной планировке и палитре материалов |
| EN caption | Realisation |
| RU caption | Реализация |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-living-wide-ai-03` |
| CMS fields | `asset_id` BV-IMG-17 · `project_visual_id` CP-01 · `page_id` P03 · `section_id` D02-3 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Every material visible here appears in BV-IMG-16; the furniture matches BV-IMG-01 exactly; the viewpoint plausibly corresponds to the plan in BV-IMG-15. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a villa living room shot square-on to the full-height pale oak joinery wall. The bone linen sofa sits centred on a warm grey wool rug with a muted terracotta ceramic vessel on the oak coffee table, a concealed cove light washes the joinery, honed beige limestone runs across the floor and daylight enters from the full-height glazing at the right edge of the frame. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Square-on to the joinery wall, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a villa living room shot square-on to the full-height pale oak joinery wall. The bone linen sofa sits centred on a warm grey wool rug with a muted terracotta ceramic vessel on the oak coffee table, a concealed cove light washes the joinery, honed beige limestone runs across the floor and daylight enters from the full-height glazing at the right edge of the frame. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Square-on to the joinery wall, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no artwork, no new materials, no people, no clutter, no text
```

#### BV-IMG-18 — Sample drawing set 1 of 6 — layout

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-18` |
| Project Visual ID | `CP-07` |
| Page | P03 Interior Design |
| Section | `D03a` sample viewer |
| Purpose | First view in the illustrative drawing set: the layout sheet. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` with padding |
| Composition | Flat top-down view of one drawing sheet with a generous margin, the sheet filling about 85 per cent of the frame. |
| Main subject | A residential layout plan with wall poché, door swings and furniture blocks. |
| Background | Warm off-white paper with a subtle texture. |
| Architecture | The drawn apartment or villa plan, open living volume with a kitchen run. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey line work. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet, no hotspot, a faint shadow at one paper edge. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet, centred and square. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down with no keystone distortion |
| Depth of field | Deep, f/8 equivalent, whole sheet sharp |
| Focal point | The centre of the plan. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone on a pale oak table edge. |
| Elements that must not appear | No readable text, no numbers, no dimension figures, no title block, no stamp, no signature, no logo, no client name, no authority name. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative layout drawing from a design package |
| RU alt text | Иллюстративный чертёж планировки из состава дизайн-проекта |
| EN caption | Layout |
| RU caption | Планировка |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-sample-layout-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-18 · `project_visual_id` CP-07 · `page_id` P03 · `section_id` D03a-1 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` with padding · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No glyph reads as a letter or a number at 100 per cent zoom; nothing resembles an authority stamp, an approval signature or a licence number; line weights stay legible on a phone. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of an architectural layout sheet on a pale oak table, showing an open living volume, kitchen run, bathrooms and bedrooms with fine consistent line weights, solid wall poché, quarter-circle door swings and simple furniture blocks, with a generous blank margin and no text or numbers anywhere. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of an architectural layout sheet on a pale oak table, showing an open living volume, kitchen run, bathrooms and bedrooms with fine consistent line weights, solid wall poché, quarter-circle door swings and simple furniture blocks, with a generous blank margin and no text or numbers anywhere. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no dimension strings, no title block, no stamp, no signature, no logo, no lettering, no annotation, no revision cloud
```

#### BV-IMG-19 — Sample drawing set 2 of 6 — lighting and ceiling

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-19` |
| Project Visual ID | `CP-07` |
| Page | P03 Interior Design |
| Section | `D03a` sample viewer |
| Purpose | Second view: reflected ceiling and lighting layout. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` with padding |
| Composition | Flat top-down view of one drawing sheet with a generous margin, the sheet filling about 85 per cent of the frame. |
| Main subject | A reflected ceiling plan with luminaire symbols, cove lines and ceiling level changes. |
| Background | Warm off-white paper with a subtle texture. |
| Architecture | The ceiling plane of the same dwelling, with linear cove lines and recessed downlight symbols. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey line work. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet, no hotspot, a faint shadow at one paper edge. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet, centred and square. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down with no keystone distortion |
| Depth of field | Deep, f/8 equivalent, whole sheet sharp |
| Focal point | The luminaire grid over the living area. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone on a pale oak table edge. |
| Elements that must not appear | No readable text, no numbers, no dimension figures, no title block, no stamp, no signature, no logo, no client name, no authority name. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative reflected ceiling and lighting layout |
| RU alt text | Иллюстративный план потолков и освещения |
| EN caption | Lighting and ceiling layout |
| RU caption | План потолков и освещения |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-sample-rcp-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-19 · `project_visual_id` CP-07 · `page_id` P03 · `section_id` D03a-2 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` with padding · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No glyph reads as a letter or a number at 100 per cent zoom; nothing resembles an authority stamp, an approval signature or a licence number; line weights stay legible on a phone. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of a reflected ceiling and lighting layout sheet on a pale oak table, drawn with light grey room outlines, small circular recessed luminaire symbols in a regular rhythm, linear cove-light lines along the joinery and a hatched ceiling level change over the dining area, in fine consistent line weights with no text, no numbers and no legend. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of a reflected ceiling and lighting layout sheet on a pale oak table, drawn with light grey room outlines, small circular recessed luminaire symbols in a regular rhythm, linear cove-light lines along the joinery and a hatched ceiling level change over the dining area, in fine consistent line weights with no text, no numbers and no legend. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no dimension strings, no title block, no stamp, no signature, no logo, no lettering, no annotation, no revision cloud
```

#### BV-IMG-20 — Sample drawing set 3 of 6 — wall elevation

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-20` |
| Project Visual ID | `CP-07` |
| Page | P03 Interior Design |
| Section | `D03a` sample viewer |
| Purpose | Third view: an interior wall elevation. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` with padding |
| Composition | Flat top-down view of one drawing sheet with a generous margin, the sheet filling about 85 per cent of the frame. |
| Main subject | An elevation of a joinery wall with door openings and shelf divisions. |
| Background | Warm off-white paper with a subtle texture. |
| Architecture | The flat elevation of a full-height joinery wall with a recessed television niche. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey line work. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet, no hotspot, a faint shadow at one paper edge. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet, centred and square. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down with no keystone distortion |
| Depth of field | Deep, f/8 equivalent, whole sheet sharp |
| Focal point | The centre of the elevation. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone on a pale oak table edge. |
| Elements that must not appear | No readable text, no numbers, no dimension figures, no title block, no stamp, no signature, no logo, no client name, no authority name. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative wall elevation of a joinery wall |
| RU alt text | Иллюстративная развёртка стены с мебельной стенкой |
| EN caption | Wall elevation |
| RU caption | Развёртка стены |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-sample-elevation-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-20 · `project_visual_id` CP-07 · `page_id` P03 · `section_id` D03a-3 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` with padding · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No glyph reads as a letter or a number at 100 per cent zoom; nothing resembles an authority stamp, an approval signature or a licence number; line weights stay legible on a phone. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of an interior wall elevation sheet on a pale oak table, showing a full-height joinery wall in flat elevation with door divisions, a recessed niche, a plinth line and thin projection lines, drawn with fine consistent line weights and a light hatch on the wall section, with no text, no numbers and no dimension figures. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of an interior wall elevation sheet on a pale oak table, showing a full-height joinery wall in flat elevation with door divisions, a recessed niche, a plinth line and thin projection lines, drawn with fine consistent line weights and a light hatch on the wall section, with no text, no numbers and no dimension figures. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no dimension strings, no title block, no stamp, no signature, no logo, no lettering, no annotation, no revision cloud
```

#### BV-IMG-21 — Sample drawing set 4 of 6 — joinery detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-21` |
| Project Visual ID | `CP-07` |
| Page | P03 Interior Design |
| Section | `D03a` sample viewer |
| Purpose | Fourth view: a manufacturing-level joinery detail. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` with padding |
| Composition | Flat top-down view of one drawing sheet with a generous margin, the sheet filling about 85 per cent of the frame. |
| Main subject | A section detail through a cabinet carcass, worktop and shadow-gap grip. |
| Background | Warm off-white paper with a subtle texture. |
| Architecture | Cross-section of a cabinet with carcass panels, a stone worktop slab and a grip profile. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey line work. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet, no hotspot, a faint shadow at one paper edge. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet, centred and square. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down with no keystone distortion |
| Depth of field | Deep, f/8 equivalent, whole sheet sharp |
| Focal point | The junction of worktop and carcass in the section. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone on a pale oak table edge. |
| Elements that must not appear | No readable text, no numbers, no dimension figures, no title block, no stamp, no signature, no logo, no client name, no authority name. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative joinery section detail |
| RU alt text | Иллюстративный узел корпусной мебели |
| EN caption | Joinery detail |
| RU caption | Узел мебели |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-sample-joinery-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-21 · `project_visual_id` CP-07 · `page_id` P03 · `section_id` D03a-4 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` with padding · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No glyph reads as a letter or a number at 100 per cent zoom; nothing resembles an authority stamp, an approval signature or a licence number; line weights stay legible on a phone. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of a joinery section detail sheet on a pale oak table, showing a cross-section through a cabinet carcass with hatched panel material, a stone worktop slab in solid poché, a shadow-gap grip profile, a hinge and a levelling foot, drawn at large scale with fine consistent line weights and no text, numbers or callouts. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of a joinery section detail sheet on a pale oak table, showing a cross-section through a cabinet carcass with hatched panel material, a stone worktop slab in solid poché, a shadow-gap grip profile, a hinge and a levelling foot, drawn at large scale with fine consistent line weights and no text, numbers or callouts. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no dimension strings, no title block, no stamp, no signature, no logo, no lettering, no annotation, no revision cloud
```

#### BV-IMG-22 — Sample drawing set 5 of 6 — finishes schedule sheet

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-22` |
| Project Visual ID | `CP-07` |
| Page | P03 Interior Design |
| Section | `D03a` sample viewer |
| Purpose | Fifth view: the visual character of a finishes schedule, without readable content. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` with padding |
| Composition | Flat top-down view of one drawing sheet with a generous margin, the sheet filling about 85 per cent of the frame. |
| Main subject | A schedule sheet laid out as a grid of small material reference squares. |
| Background | Warm off-white paper with a subtle texture. |
| Architecture | Not architectural: a tabular sheet with a grid of blank reference cells and small hatched material squares. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey line work. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet, no hotspot, a faint shadow at one paper edge. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet, centred and square. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down with no keystone distortion |
| Depth of field | Deep, f/8 equivalent, whole sheet sharp |
| Focal point | The upper-left group of material squares. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone on a pale oak table edge. |
| Elements that must not appear | No readable text, no numbers, no dimension figures, no title block, no stamp, no signature, no logo, no client name, no authority name. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative finishes schedule sheet |
| RU alt text | Иллюстративный лист спецификации отделки |
| EN caption | Finishes schedule |
| RU caption | Спецификация отделки |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-sample-schedule-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-22 · `project_visual_id` CP-07 · `page_id` P03 · `section_id` D03a-5 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` with padding · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No glyph reads as a letter or a number at 100 per cent zoom; nothing resembles an authority stamp, an approval signature or a licence number; line weights stay legible on a phone. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of a finishes schedule sheet on a pale oak table, laid out as a clean grid of blank rectangular cells with small hatched and toned material reference squares in the left column, ruled with fine consistent line weights, deliberately containing no readable text, no numbers, no codes and no logos. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of a finishes schedule sheet on a pale oak table, laid out as a clean grid of blank rectangular cells with small hatched and toned material reference squares in the left column, ruled with fine consistent line weights, deliberately containing no readable text, no numbers, no codes and no logos. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no dimension strings, no title block, no stamp, no signature, no logo, no lettering, no annotation, no revision cloud
```

#### BV-IMG-23 — Sample drawing set 6 of 6 — room visualisation

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-23` |
| Project Visual ID | `CP-07` |
| Page | P03 Interior Design |
| Section | `D03a` sample viewer |
| Purpose | Sixth view: a room visualisation as it appears inside a design package. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` with padding |
| Composition | Flat top-down view of one printed visualisation sheet with a wide blank margin; the printed image occupies the centre 70 per cent. |
| Main subject | A printed interior visualisation of the living volume on a sheet. |
| Background | Warm off-white paper with a subtle texture. |
| Architecture | The printed image shows the CP-01 living room from the seating group viewpoint. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey line work. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet, no hotspot, a faint shadow at one paper edge. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet, centred and square. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down with no keystone distortion |
| Depth of field | Deep, f/8 equivalent, whole sheet sharp |
| Focal point | The printed visualisation itself. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone on a pale oak table edge. |
| Elements that must not appear | No readable text, no numbers, no dimension figures, no title block, no stamp, no signature, no logo, no client name, no authority name. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative room visualisation from a design package |
| RU alt text | Иллюстративная визуализация помещения из состава дизайн-проекта |
| EN caption | Room visualisation |
| RU caption | Визуализация помещения |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-sample-visual-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-23 · `project_visual_id` CP-07 · `page_id` P03 · `section_id` D03a-6 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` with padding · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No glyph reads as a letter or a number at 100 per cent zoom; nothing resembles an authority stamp, an approval signature or a licence number; line weights stay legible on a phone. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of a printed interior visualisation sheet lying on a pale oak table: the printed image shows a contemporary villa living room with a pale oak joinery wall, a bone linen sofa, honed beige limestone flooring and daylight from full-height glazing on the right, reproduced with a slight paper texture and a generous blank margin, with no text, no numbers and no logo anywhere on the sheet. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of a printed interior visualisation sheet lying on a pale oak table: the printed image shows a contemporary villa living room with a pale oak joinery wall, a bone linen sofa, honed beige limestone flooring and daylight from full-height glazing on the right, reproduced with a slight paper texture and a generous blank margin, with no text, no numbers and no logo anywhere on the sheet. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no dimension strings, no title block, no stamp, no signature, no logo, no lettering, no annotation, no revision cloud
```

#### BV-IMG-24 — Review process drawing

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-24` |
| Project Visual ID | `CP-07` |
| Page | P03 Interior Design |
| Section | `D05` Review process |
| Purpose | Supporting drawing view beside the revision-round explanation. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` with padding |
| Composition | Flat top-down view of one drawing sheet with a generous margin, the sheet filling about 85 per cent of the frame. |
| Main subject | A layout sheet with a pencil and a scale rule resting on it, as during a review. |
| Background | Warm off-white paper with a subtle texture. |
| Architecture | The same layout language as the other drawing views. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey line work. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet, no hotspot, a faint shadow at one paper edge. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet, centred and square. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down with no keystone distortion |
| Depth of field | Deep, f/8 equivalent, whole sheet sharp |
| Focal point | The pencil where it crosses the plan. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone on a pale oak table edge. |
| Elements that must not appear | No readable text, no numbers, no dimension figures, no title block, no stamp, no signature, no logo, no client name, no authority name. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Layout drawing with a scale rule during a design review |
| RU alt text | Чертёж планировки с масштабной линейкой во время согласования |
| EN caption | Design review |
| RU caption | Согласование проекта |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-review-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-24 · `project_visual_id` CP-07 · `page_id` P03 · `section_id` D05 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` with padding · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No glyph reads as a letter or a number at 100 per cent zoom; nothing resembles an authority stamp, an approval signature or a licence number; line weights stay legible on a phone. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of an architectural layout sheet on a pale oak table with a matte black scale rule and a pencil resting across it during a review, the plan drawn in fine consistent line weights with wall poché and door swings, soft daylight from the left casting a gentle shadow from the rule, and no text, numbers or annotation anywhere on the sheet. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of an architectural layout sheet on a pale oak table with a matte black scale rule and a pencil resting across it during a review, the plan drawn in fine consistent line weights with wall poché and door swings, soft daylight from the left casting a gentle shadow from the rule, and no text, numbers or annotation anywhere on the sheet. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down with no keystone distortion, Deep, f/8 equivalent, whole sheet sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no dimension strings, no title block, no stamp, no signature, no logo, no lettering, no annotation, no revision cloud
```

#### BV-IMG-25 — Landscape hero — terrace at late afternoon (anchor image of CP-05)

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-25` |
| Project Visual ID | `CP-05` |
| Page | P04 Landscape Design |
| Section | `L01` Hero |
| Purpose | Hero of the landscape page and anchor image of the landscape concept world. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | Wide view along the terrace with the villa facade on the left, the pergola zone in the middle distance and planting closing the right edge. |
| Main subject | The shaded terrace with its dining and lounge zones. |
| Background | Planted border, off-white boundary wall, soft evening sky. |
| Architecture | Contemporary villa facade with a sliding glazed wall, slatted timber pergola at 2.8 m. |
| Materials | Warm beige limestone paving in 600 × 1200 format with gravel joints, timber pergola, stone bench, matte black fixtures. |
| Main colors | Warm beige, sand, green planting. |
| Accent colors | One muted terracotta outdoor throw on the lounge chair. |
| Lighting | Low warm sunlight from the right, long soft shadows from the pergola slats across the paving. |
| Time of day | Late afternoon, one hour before sunset. |
| Camera position | At the far end of the terrace, looking back towards the villa. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Slight three-quarter along the terrace |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The dining table under the pergola. |
| Safe area for website text and CTA | the left third on desktop, the lower third on mobile |
| Props and styling | Timber dining table with six chairs, two woven lounge chairs, one ceramic planter, one terracotta throw. |
| Elements that must not appear | No people, no swimming pool, no barbecue, no string lights, no parasol, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Villa terrace with pergola, planting and outdoor dining in late afternoon light |
| RU alt text | Терраса виллы с перголой, озеленением и обеденной зоной в свете заката |
| EN caption | Landscape concept |
| RU caption | Концепция ландшафта |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp05-terrace-hero-ai-01` |
| CMS fields | `asset_id` BV-IMG-25 · `project_visual_id` CP-05 · `page_id` P04 · `section_id` L01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 58% / 55% · `focal_point_mobile` 50% / 45% · `safe_area` the left third on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Approved before any other CP-05 asset; paving format, pergola geometry and planting palette become fixed from this frame; the left third stays calm enough for the H1. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a contemporary villa terrace in late afternoon. Warm beige limestone paving with gravel joints runs the length of the terrace, a slatted timber pergola casts long soft shadow lines, a timber dining table with six chairs sits beneath it and two woven lounge chairs face mature Mediterranean and Gulf planting; the villa facade with its sliding glazed wall closes the left of the frame, and low warm sunlight rakes in from the right. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, Slight three-quarter along the terrace, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm beige limestone paving in 600 by 1200 format with gravel joints at the planting edge, off-white plaster boundary wall, slatted timber pergola, mature Mediterranean and Gulf planting with olive and ornamental grasses, matte black outdoor fixtures, low warm late-afternoon light from the right, warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a contemporary villa terrace in late afternoon. Warm beige limestone paving with gravel joints runs the length of the terrace, a slatted timber pergola casts long soft shadow lines, a timber dining table with six chairs sits beneath it and two woven lounge chairs face mature Mediterranean and Gulf planting; the villa facade with its sliding glazed wall closes the left of the frame, and low warm sunlight rakes in from the right. Materials and finishes: warm beige limestone paving in 600 by 1200 format with gravel joints at the planting edge, off-white plaster boundary wall, slatted timber pergola, mature Mediterranean and Gulf planting with olive and ornamental grasses, matte black outdoor fixtures, low warm late-afternoon light from the right, warm white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, Slight three-quarter along the terrace, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left third on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no swimming pool, no barbecue, no string lights, no parasol, no people, no text, no tropical resort styling
```

#### BV-IMG-26 — Landscape triptych 1 of 3 — zoning plan

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-26` |
| Project Visual ID | `CP-07` |
| Page | P04 Landscape Design |
| Section | `L02` triptych |
| Purpose | Illustrative site plan showing zoning and circulation for the landscape concept. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` |
| Composition | Flat top-down view of one site plan sheet with a generous margin. |
| Main subject | A garden site plan with terrace, planting beds, paths and a seating zone. |
| Background | Warm off-white paper with a subtle texture. |
| Architecture | The villa footprint drawn in solid poché with the terrace attached. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey lines. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down, no keystone |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The terrace zone of the plan. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone. |
| Elements that must not appear | No readable text, no numbers, no plant names, no north-point lettering, no title block, no stamp, no logo. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative landscape site plan with zoning and circulation |
| RU alt text | Иллюстративный план участка с зонированием и маршрутами |
| EN caption | Zoning plan — concept |
| RU caption | План зонирования — концепция |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-landscape-zoning-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-26 · `project_visual_id` CP-07 · `page_id` P04 · `section_id` L02-1 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No glyph reads as text or a number; the villa footprint is consistent with the CP-02 and CP-05 geometry. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of a landscape site plan sheet on a pale oak table, showing a villa footprint in solid poché, an attached terrace with a paving grid, planting beds indicated by fine organic hatching, circulation paths and a seating zone, drawn in consistent fine line weights with a generous blank margin and no text, numbers or plant labels. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down, no keystone, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of a landscape site plan sheet on a pale oak table, showing a villa footprint in solid poché, an attached terrace with a paving grid, planting beds indicated by fine organic hatching, circulation paths and a seating zone, drawn in consistent fine line weights with a generous blank margin and no text, numbers or plant labels. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down, no keystone, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no plant labels, no title block, no stamp, no signature, no logo, no lettering
```

#### BV-IMG-27 — Landscape triptych 2 of 3 — outdoor material palette

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-27` |
| Project Visual ID | `CP-05` |
| Page | P04 Landscape Design |
| Section | `L02` triptych |
| Purpose | Material composition for the landscape concept. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Top-down flat lay of outdoor materials on a stone surface, samples slightly overlapping with clear space around them. |
| Main subject | Paving stone sample, timber decking offcut, gravel, a planting sprig and an outdoor fabric swatch. |
| Background | Warm beige stone bench surface. |
| Architecture | Not applicable. |
| Materials | Warm beige limestone paving sample, warm grey-beige decking timber, pale gravel, olive-toned planting, off-white outdoor linen, matte black fixing. |
| Main colors | Warm beige, sand, grey-green. |
| Accent colors | One muted terracotta ceramic tile. |
| Lighting | Outdoor open shade, soft and even, which renders stone and timber honestly. |
| Time of day | Late afternoon, in shade. |
| Camera position | Directly above the arrangement. |
| Camera height | 1.2 m above the bench |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Top-down, square |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The overlap of the paving sample and the timber offcut. |
| Safe area for website text and CTA | none required |
| Props and styling | Samples only. |
| Elements that must not appear | No supplier labels, no printed cards, no hands, no text, no plastic packaging. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Outdoor material palette with paving stone, timber, gravel and planting |
| RU alt text | Палитра наружных материалов: камень, дерево, гравий и растения |
| EN caption | Outdoor material palette — concept |
| RU caption | Палитра наружных материалов — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp05-materials-mood-ai-01` |
| CMS fields | `asset_id` BV-IMG-27 · `project_visual_id` CP-05 · `page_id` P04 · `section_id` L02-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Every material appears in BV-IMG-25 or BV-IMG-28; open-shade lighting, no direct sun on the samples. |

**Full Midjourney prompt**

```
Photorealistic top-down flat-lay photograph of an outdoor material palette arranged on a warm beige stone bench in open shade: a limestone paving sample with a lightly textured surface, a warm grey-beige timber decking offcut, a small pile of pale gravel, an olive-toned planting sprig, an off-white outdoor linen swatch, a muted terracotta ceramic tile and a matte black fixing, slightly overlapping with clear space around the group. Camera on a tripod at 1.2 m above the bench height, 50 mm full-frame equivalent, Top-down, square, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm beige limestone paving in 600 by 1200 format with gravel joints at the planting edge, off-white plaster boundary wall, slatted timber pergola, mature Mediterranean and Gulf planting with olive and ornamental grasses, matte black outdoor fixtures, low warm late-afternoon light from the right, warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic top-down flat-lay photograph of an outdoor material palette arranged on a warm beige stone bench in open shade: a limestone paving sample with a lightly textured surface, a warm grey-beige timber decking offcut, a small pile of pale gravel, an olive-toned planting sprig, an off-white outdoor linen swatch, a muted terracotta ceramic tile and a matte black fixing, slightly overlapping with clear space around the group. Materials and finishes: warm beige limestone paving in 600 by 1200 format with gravel joints at the planting edge, off-white plaster boundary wall, slatted timber pergola, mature Mediterranean and Gulf planting with olive and ornamental grasses, matte black outdoor fixtures, low warm late-afternoon light from the right, warm white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the bench height, Top-down, square, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no supplier labels, no packaging, no hands, no text, no bright saturated flowers
```

#### BV-IMG-28 — Landscape triptych 3 of 3 — proposed terrace view

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-28` |
| Project Visual ID | `CP-05` |
| Page | P04 Landscape Design |
| Section | `L02` triptych |
| Purpose | Third panel of the landscape sequence: the proposed outdoor living space. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Closer view of the lounge zone under the pergola, planting in the foreground edge. |
| Main subject | Two woven lounge chairs and the stone bench under the pergola. |
| Background | Planted border and the off-white boundary wall. |
| Architecture | Slatted timber pergola overhead, stone bench built into the boundary wall. |
| Materials | Limestone paving, timber pergola, stone bench, off-white outdoor linen cushions. |
| Main colors | Warm beige, sand, green. |
| Accent colors | Muted terracotta throw. |
| Lighting | Low warm light from the right, pergola shadow lines across the paving and the bench. |
| Time of day | Late afternoon. |
| Camera position | On the terrace, three metres from the lounge group, slightly off-axis. |
| Camera height | 1.45 m |
| Lens or focal-length equivalent | 45 mm full-frame equivalent |
| Viewing angle | Three-quarter towards the bench |
| Depth of field | Moderate, f/5.6 equivalent with a soft foreground leaf |
| Focal point | The cushion line on the stone bench. |
| Safe area for website text and CTA | none required |
| Props and styling | Two lounge chairs, one terracotta throw, one ceramic planter, one low timber table. |
| Elements that must not appear | No people, no pool, no fire pit, no decorative lanterns, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Shaded terrace lounge with stone bench and planting |
| RU alt text | Затенённая зона отдыха на террасе со скамьёй и озеленением |
| EN caption | Proposed terrace — concept |
| RU caption | Предложенная терраса — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp05-terrace-lounge-ai-01` |
| CMS fields | `asset_id` BV-IMG-28 · `project_visual_id` CP-05 · `page_id` P04 · `section_id` L02-3 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 55% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Paving, pergola and planting match BV-IMG-25 exactly; the same late-afternoon light direction. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a shaded terrace lounge zone in late afternoon: two woven lounge chairs face a stone bench built into an off-white plaster boundary wall with off-white outdoor linen cushions and one muted terracotta throw, a slatted timber pergola casts crisp shadow lines across warm beige limestone paving, and mature planting softens the foreground edge of the frame. Camera on a tripod at 1.45 m height, 45 mm full-frame equivalent, Three-quarter towards the bench, Moderate, f/5.6 equivalent with a soft foreground leaf, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm beige limestone paving in 600 by 1200 format with gravel joints at the planting edge, off-white plaster boundary wall, slatted timber pergola, mature Mediterranean and Gulf planting with olive and ornamental grasses, matte black outdoor fixtures, low warm late-afternoon light from the right, warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a shaded terrace lounge zone in late afternoon: two woven lounge chairs face a stone bench built into an off-white plaster boundary wall with off-white outdoor linen cushions and one muted terracotta throw, a slatted timber pergola casts crisp shadow lines across warm beige limestone paving, and mature planting softens the foreground edge of the frame. Materials and finishes: warm beige limestone paving in 600 by 1200 format with gravel joints at the planting edge, off-white plaster boundary wall, slatted timber pergola, mature Mediterranean and Gulf planting with olive and ornamental grasses, matte black outdoor fixtures, low warm late-afternoon light from the right, warm white balance. Camera: 45 mm full-frame equivalent at 1.45 m height, Three-quarter towards the bench, Moderate, f/5.6 equivalent with a soft foreground leaf. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no pool, no fire pit, no lanterns, no people, no text, no resort styling
```

#### BV-IMG-29 — Villa renovation hero — family living room

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-29` |
| Project Visual ID | `CP-01` |
| Page | P05 Villa Renovation |
| Section | `V01` Hero |
| Purpose | Hero of the main paid-traffic landing page for villa renovation: a generous whole-room view. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | Whole-room view from the stair-hall side showing ceiling, floor and both wall planes, so the visitor can judge scale. |
| Main subject | The full living volume with the seating group and the dining end in one frame. |
| Background | Full-height glazing on the right, terrace beyond, ceiling plane visible at the top of the frame. |
| Architecture | 3.2 m ceiling with its shadow gap, full-height door reveal at the left edge. |
| Materials | Plaster, pale oak joinery, beige limestone, warm grey stone, matte black. |
| Main colors | Warm off-white, oak, beige. |
| Accent colors | Terracotta vessel on the coffee table. |
| Lighting | Daylight from the right with a gentle falloff to the left wall. |
| Time of day | Mid-morning. |
| Camera position | At the stair-hall opening, slightly left of centre. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Wide straight-on with both wall planes visible |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The seating group. |
| Safe area for website text and CTA | the left half on desktop, the lower third on mobile |
| Props and styling | Terracotta vessel, two books, wool throw, one dried branch on the dining table. |
| Elements that must not appear | No people, no renders of unbuilt elements, no pool, no exterior skyline, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Whole-room view of a renovated villa living space |
| RU alt text | Общий вид жилого пространства виллы после ремонта |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-living-hero-ai-03` |
| CMS fields | `asset_id` BV-IMG-29 · `project_visual_id` CP-01 · `page_id` P05 · `section_id` V01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 60% / 50% · `focal_point_mobile` 50% / 45% · `safe_area` the left half on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The room reads at full scale rather than as a detail; identical furniture and materials to BV-IMG-01; left half calm for the H1. |

**Full Midjourney prompt**

```
Photorealistic wide architectural photograph of a contemporary villa living volume showing the whole room: the plastered ceiling with its 40 millimetre shadow gap, the pale oak joinery wall, the bone linen sofa on a warm grey rug, the oak dining table with six chairs beyond, honed beige limestone flooring throughout and full-height glazing along the right wall opening to a planted terrace. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, Wide straight-on with both wall planes visible, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic wide architectural photograph of a contemporary villa living volume showing the whole room: the plastered ceiling with its 40 millimetre shadow gap, the pale oak joinery wall, the bone linen sofa on a warm grey rug, the oak dining table with six chairs beyond, honed beige limestone flooring throughout and full-height glazing along the right wall opening to a planted terrace. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, Wide straight-on with both wall planes visible, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left half on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no pool, no skyline, no artwork, no extra furniture, no text
```

#### BV-IMG-30 — Villa finishing detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-30` |
| Project Visual ID | `CP-01` |
| Page | P05 Villa Renovation |
| Section | `V03` Scope |
| Purpose | Evidence of finishing quality beside the scope list. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Mid-close view of the junction between a plastered wall, the shadow gap at floor level and the limestone floor, with a door reveal entering the frame. |
| Main subject | The straightness and flatness of the finishing work. |
| Background | Plastered wall receding into soft light. |
| Architecture | 20 mm shadow gap in place of a skirting, deep plastered door reveal. |
| Materials | Warm off-white plaster, honed beige limestone, matte black door lever at the frame edge. |
| Main colors | Warm off-white, beige. |
| Accent colors | None. |
| Lighting | Raking daylight from the right revealing plaster flatness and the straightness of the shadow gap line. |
| Time of day | Mid-morning. |
| Camera position | One metre from the wall, camera low. |
| Camera height | 1.1 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Along the wall so the shadow gap runs into depth |
| Depth of field | Moderate, f/4 equivalent |
| Focal point | The shadow gap line where it meets the door reveal. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No furniture, no people, no dust, no tools, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Detail of plaster, shadow gap and limestone floor junction |
| RU alt text | Деталь стыка штукатурки, теневого зазора и известнякового пола |
| EN caption | Finishing detail — concept |
| RU caption | Деталь отделки — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-finish-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-30 · `project_visual_id` CP-01 · `page_id` P05 · `section_id` V03 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 55% · `focal_point_mobile` 50% / 55% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The shadow gap is perfectly straight with no waviness; plaster texture is fine and not plastic; floor format matches the CP-01 sheet. |

**Full Midjourney prompt**

```
Photorealistic close architectural detail of finishing quality in a villa: a warm off-white plastered wall meets a honed beige limestone floor through a precise 20 millimetre shadow gap that runs straight into depth, a deep plastered door reveal with a matte black lever handle enters the right of the frame, and raking daylight reveals the flatness of the plaster and the crispness of the line. Camera on a tripod at 1.1 m height, 50 mm full-frame equivalent, Along the wall so the shadow gap runs into depth, Moderate, f/4 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close architectural detail of finishing quality in a villa: a warm off-white plastered wall meets a honed beige limestone floor through a precise 20 millimetre shadow gap that runs straight into depth, a deep plastered door reveal with a matte black lever handle enters the right of the frame, and raking daylight reveals the flatness of the plaster and the crispness of the line. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 50 mm full-frame equivalent at 1.1 m height, Along the wall so the shadow gap runs into depth, Moderate, f/4 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no furniture, no tools, no dust, no people, no skirting board, no text
```

#### BV-IMG-31 — Installed joinery in the villa

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-31` |
| Project Visual ID | `CP-01` |
| Page | P05 Villa Renovation |
| Section | `V06` Joinery pair, left frame |
| Purpose | First half of the made-here, installed-there pair: joinery in place. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Three-quarter view of a full-height oak wardrobe run in a bedroom, doors closed, integrated lighting off. |
| Main subject | The wardrobe run with its precise reveals and matte black pulls. |
| Background | Plastered bedroom wall and a slice of window light at the right edge. |
| Architecture | Ceiling shadow gap continues above the joinery; the run is scribed to the wall. |
| Materials | Pale oak fronts, matte black slim pulls at 160 mm centres, beige limestone floor. |
| Main colors | Pale oak, warm off-white. |
| Accent colors | None. |
| Lighting | Soft daylight from the right, gentle gradient across the fronts. |
| Time of day | Mid-morning. |
| Camera position | Three metres from the run, angled 20 degrees. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 45 mm full-frame equivalent |
| Viewing angle | Slight three-quarter so the reveals read |
| Depth of field | Deep, f/7.1 equivalent |
| Focal point | The pull on the third door. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No people, no clothing, no mirrors showing the room, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Fitted oak wardrobe run installed in a villa bedroom |
| RU alt text | Встроенные дубовые шкафы в спальне виллы |
| EN caption | Fitted joinery — concept |
| RU caption | Встроенная мебель — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-wardrobe-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-31 · `project_visual_id` CP-01 · `page_id` P05 · `section_id` V06-1 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Reveals are even along the whole run; oak tone matches BV-IMG-32 so the pair reads as one story. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a full-height fitted wardrobe run in a villa bedroom: pale oak fronts with slim matte black bar pulls, precise even reveals between doors, the run scribed neatly to the plastered wall and continuing to the ceiling shadow gap, honed beige limestone flooring below and soft daylight entering from the right. Camera on a tripod at 1.5 m height, 45 mm full-frame equivalent, Slight three-quarter so the reveals read, Deep, f/7.1 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a full-height fitted wardrobe run in a villa bedroom: pale oak fronts with slim matte black bar pulls, precise even reveals between doors, the run scribed neatly to the plastered wall and continuing to the ceiling shadow gap, honed beige limestone flooring below and soft daylight entering from the right. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 45 mm full-frame equivalent at 1.5 m height, Slight three-quarter so the reveals read, Deep, f/7.1 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no clothing, no mirrors reflecting a room, no people, no clutter, no text
```

#### BV-IMG-32 — Production counterpart of the installed joinery

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-32` |
| Project Visual ID | `CP-06` |
| Page | P05 Villa Renovation |
| Section | `V06` Joinery pair, right frame |
| Purpose | Second half of the pair: the same category of work being made. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 1536 × 1920 minimum |
| Website export dimensions | 1200 × 1500 |
| Composition | Vertical view of a wardrobe carcass on a bench with a door front resting beside it, hands not in frame. |
| Main subject | The carcass and door front mid-assembly. |
| Background | Workshop bench and tool wall softly out of focus. |
| Architecture | Workshop interior, clerestory daylight from the right. |
| Materials | Pale oak carcass panels, matte black hardware in a tray, grey felt, raw steel bench. |
| Main colors | Pale oak, warm grey, off-white. |
| Accent colors | Matte black hardware. |
| Lighting | High clerestory daylight from the right with neutral LED fill. |
| Time of day | Mid-morning. |
| Camera position | At the bench, slightly above the carcass. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Three-quarter down the length of the carcass |
| Depth of field | Moderate, f/4 equivalent |
| Focal point | The hinge plate on the carcass edge. |
| Safe area for website text and CTA | none required |
| Props and styling | Hardware tray, one clamp, grey felt. |
| Elements that must not appear | No faces, no full figures, no readable labels, no machinery brand marks, no text. |
| Recommended Midjourney parameters | --ar 4:5 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Wardrobe carcass and door front during assembly in the workshop |
| RU alt text | Корпус шкафа и фасад в процессе сборки в цеху |
| EN caption | Production — concept |
| RU caption | Производство — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp06-wardrobe-assembly-ai-01` |
| CMS fields | `asset_id` BV-IMG-32 · `project_visual_id` CP-06 · `page_id` P05 · `section_id` V06-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1200 × 1500 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The oak is visibly the same species and tone as BV-IMG-31; hardware matches; no readable text anywhere. |

**Full Midjourney prompt**

```
Photorealistic workshop photograph of a pale oak wardrobe carcass standing on a steel bench with a matching door front resting on grey felt beside it, hinge plates fitted, a small tray of matte black hardware and a single clamp nearby, high clerestory daylight from the right raking across the oak and revealing the machined panel edges, the tool wall behind softly out of focus. Camera on a tripod at 1.5 m height, 50 mm full-frame equivalent, Three-quarter down the length of the carcass, Moderate, f/4 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:5 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic workshop photograph of a pale oak wardrobe carcass standing on a steel bench with a matching door front resting on grey felt beside it, hinge plates fitted, a small tray of matte black hardware and a single clamp nearby, high clerestory daylight from the right raking across the oak and revealing the machined panel edges, the tool wall behind softly out of focus. Materials and finishes: white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.5 m height, Three-quarter down the length of the carcass, Moderate, f/4 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no faces, no figures, no readable labels, no brand marks, no stickers, no text
```

#### BV-IMG-33 — Apartment renovation hero — living area (anchor image of CP-03)

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-33` |
| Project Visual ID | `CP-03` |
| Page | P06 Apartment Renovation |
| Section | `A01` Hero |
| Purpose | Hero of the apartment landing page and anchor image of the Tower Residence concept. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | View along the longest sightline of the apartment, from the corridor end through the living area to the glazing. |
| Main subject | The living and dining space with the kitchen run on the right. |
| Background | Continuous glazing with a hazy, indistinct exterior. |
| Architecture | 2.8 m ceiling with a recessed linear light channel, flush detailing, 20 mm floor shadow gap. |
| Materials | Fine plaster, pale oak, beige large-format tile, warm grey stone worktop and splashback, matte black mullions. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | One terracotta cushion on the sofa. |
| Lighting | Even diffuse daylight from the front left; no hard shadows. |
| Time of day | Mid-morning, slightly overcast. |
| Camera position | At the corridor end, centred on the sightline. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | One-point perspective along the apartment |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The dining table in the middle distance. |
| Safe area for website text and CTA | the left half on desktop, the lower third on mobile |
| Props and styling | One terracotta cushion, one ceramic bowl on the dining table. |
| Elements that must not appear | No people, no recognisable skyline, no landmark, no clutter on the worktop, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Apartment living and dining area with a galley kitchen |
| RU alt text | Жилая и обеденная зона квартиры с кухней |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp03-living-hero-ai-01` |
| CMS fields | `asset_id` BV-IMG-33 · `project_visual_id` CP-03 · `page_id` P06 · `section_id` A01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 45% · `safe_area` the left half on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Approved before any other CP-03 asset; the exterior is an indistinct haze; ceiling height reads as apartment scale, not villa scale. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph looking along the longest sightline of a contemporary apartment: a compact bone linen sofa with one muted terracotta cushion sits left, a handleless galley kitchen with pale oak base units and a warm grey stone worktop and splashback runs along the right, an oak dining table with four chairs stands in the middle distance, continuous glazing with slim matte black mullions closes the view with a soft daylight haze outside, and a recessed linear light channel follows the plastered ceiling. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, One-point perspective along the apartment, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph looking along the longest sightline of a contemporary apartment: a compact bone linen sofa with one muted terracotta cushion sits left, a handleless galley kitchen with pale oak base units and a warm grey stone worktop and splashback runs along the right, an oak dining table with four chairs stands in the middle distance, continuous glazing with slim matte black mullions closes the view with a soft daylight haze outside, and a recessed linear light channel follows the plastered ceiling. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, One-point perspective along the apartment, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left half on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no recognisable skyline, no landmark buildings, no people, no worktop clutter, no appliances on display, no text
```

#### BV-IMG-34 — Featured apartment concept — kitchen and dining

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-34` |
| Project Visual ID | `CP-03` |
| Page | P06 Apartment Renovation |
| Section | `A02` Featured card |
| Purpose | Wide featured card linking to the Tower Residence concept page. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 |
| Composition | Three-quarter view of the kitchen run with the dining table in the foreground edge. |
| Main subject | The handleless kitchen with its stone splashback. |
| Background | Glazing on the left with soft haze, corridor opening on the right. |
| Architecture | Same apartment, 2.8 m ceiling, recessed channel lighting. |
| Materials | Pale oak base units, off-white upper units, warm grey stone worktop and splashback, matte black tapware. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | One terracotta ceramic bowl. |
| Lighting | Diffuse daylight from the left, under-cabinet lighting softly on. |
| Time of day | Mid-morning. |
| Camera position | At the dining end, two metres from the kitchen run. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Three-quarter along the run |
| Depth of field | Deep, f/7.1 equivalent |
| Focal point | The junction of worktop and splashback. |
| Safe area for website text and CTA | none required |
| Props and styling | One ceramic bowl, one oak chopping board. Nothing else on the worktop. |
| Elements that must not appear | No small appliances on display, no food, no people, no branded packaging, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Handleless kitchen with stone splashback in an apartment concept |
| RU alt text | Кухня без ручек с каменным фартуком в концепции квартиры |
| EN caption | Tower Residence — concept |
| RU caption | Квартира в башне — концепция |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp03-kitchen-wide-ai-01` |
| CMS fields | `asset_id` BV-IMG-34 · `project_visual_id` CP-03 · `page_id` P06 · `section_id` A02 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1920 × 1200 · `focal_point_desktop` 52% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Different frame from BV-IMG-33 while clearly the same apartment; worktop and splashback are one continuous material. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a handleless galley kitchen in a contemporary apartment: pale oak base units with a shadow-gap grip, off-white upper units, a warm grey stone worktop continuing as a full-height splashback, a matte black tap, under-cabinet lighting softly on, an oak dining table with a terracotta ceramic bowl in the foreground and diffuse daylight entering from continuous glazing on the left. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Three-quarter along the run, Deep, f/7.1 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a handleless galley kitchen in a contemporary apartment: pale oak base units with a shadow-gap grip, off-white upper units, a warm grey stone worktop continuing as a full-height splashback, a matte black tap, under-cabinet lighting softly on, an oak dining table with a terracotta ceramic bowl in the foreground and diffuse daylight entering from continuous glazing on the left. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Three-quarter along the run, Deep, f/7.1 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no small appliances, no food, no packaging, no people, no clutter, no text
```

#### BV-IMG-35 — Building constraints — protected shared route

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-35` |
| Project Visual ID | `CP-03` |
| Page | P06 Apartment Renovation |
| Section | `A04` Planned around the building |
| Purpose | Illustrates planning around building rules: protection of shared areas during works. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | View along a residential corridor and lift lobby with protective floor covering and corner protection neatly installed. |
| Main subject | The protected route: floor covering, corner guards, a closed apartment door. |
| Background | Lift doors at the end of the corridor, softly lit. |
| Architecture | Neutral contemporary building corridor, plastered walls, recessed ceiling lights. |
| Materials | Grey protective floor covering taped at the edges, cardboard corner guards, brushed lift doors, plaster walls. |
| Main colors | Warm grey, off-white. |
| Accent colors | None. |
| Lighting | Even artificial corridor lighting with a neutral tone, slightly cooler than interior scenes but corrected to warm-neutral. |
| Time of day | Not applicable, interior corridor. |
| Camera position | At one end of the corridor, centred. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | One-point perspective along the corridor |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The corner guard at the mid-point of the corridor. |
| Safe area for website text and CTA | none required |
| Props and styling | Protective covering, corner guards, one closed toolbox against the wall. |
| Elements that must not appear | No people, no building name, no unit numbers, no signage, no rubbish, no visible mess, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Protected corridor and lift lobby during apartment renovation works |
| RU alt text | Защищённый коридор и лифтовой холл во время ремонта квартиры |
| EN caption | Protection of shared areas — concept |
| RU caption | Защита общих зон — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp03-protection-ai-01` |
| CMS fields | `asset_id` BV-IMG-35 · `project_visual_id` CP-03 · `page_id` P06 · `section_id` A04 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Reads as organised and clean rather than as a building site; no signage or numbering visible anywhere. |

**Full Midjourney prompt**

```
Photorealistic documentary-style photograph of a residential building corridor prepared for renovation works: grey protective covering is taped neatly across the floor, cardboard corner guards protect the wall returns, a closed apartment door sits on the right, brushed metal lift doors close the far end, one closed toolbox stands against the wall and the corridor is lit evenly by recessed ceiling lights. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, One-point perspective along the corridor, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic documentary-style photograph of a residential building corridor prepared for renovation works: grey protective covering is taped neatly across the floor, cardboard corner guards protect the wall returns, a closed apartment door sits on the right, brushed metal lift doors close the far end, one closed toolbox stands against the wall and the corridor is lit evenly by recessed ceiling lights. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, One-point perspective along the corridor, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no signage, no unit numbers, no rubbish, no dust, no exposed cables, no text
```

#### BV-IMG-36 — Apartment gallery 1 — corridor wardrobes

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-36` |
| Project Visual ID | `CP-03` |
| Page | P06 Apartment Renovation |
| Section | `A06` Gallery |
| Purpose | Storage detail in the apartment concept. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Wardrobe run seen at an angle with one door open to show the interior fittings and integrated lighting. |
| Main subject | The open bay: oak-lined interior, matte black rail, integrated LED. |
| Background | Corridor wall and floor tile receding. |
| Architecture | Full-height joinery to the plastered ceiling with a flush shadow gap. |
| Materials | Pale oak inside and out, matte black rail and pulls, warm grey felt-lined drawer. |
| Main colors | Pale oak, warm off-white. |
| Accent colors | Integrated warm LED glow. |
| Lighting | Corridor daylight from the living area plus the integrated wardrobe light. |
| Time of day | Mid-morning. |
| Camera position | Two metres from the run, angled towards the open bay. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Three-quarter into the open bay |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The rail and the shelf edge inside the open bay. |
| Safe area for website text and CTA | none required |
| Props and styling | Three neutral garment shapes on the rail, one folded wool item on a shelf. |
| Elements that must not appear | No personal belongings, no branded clothing, no shoes, no people, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Fitted wardrobe with one bay open showing rail, shelves and lighting |
| RU alt text | Встроенный шкаф с открытой секцией: штанга, полки и подсветка |
| EN caption | Storage detail — concept |
| RU caption | Деталь системы хранения — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp03-wardrobe-open-ai-01` |
| CMS fields | `asset_id` BV-IMG-36 · `project_visual_id` CP-03 · `page_id` P06 · `section_id` A06-1 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Interior fittings are physically plausible and correctly scaled; LED glow is warm and does not shift the white balance of the frame. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a full-height fitted wardrobe run in an apartment corridor with one bay open: the interior is lined in pale oak with a matte black hanging rail, an integrated warm LED strip washes the shelves, a felt-lined drawer is partly visible, three neutral garments hang on the rail and the closed fronts alongside show even reveals and slim matte black pulls. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Three-quarter into the open bay, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a full-height fitted wardrobe run in an apartment corridor with one bay open: the interior is lined in pale oak with a matte black hanging rail, an integrated warm LED strip washes the shelves, a felt-lined drawer is partly visible, three neutral garments hang on the rail and the closed fronts alongside show even reveals and slim matte black pulls. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Three-quarter into the open bay, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no branded clothing, no shoes, no personal items, no people, no clutter, no text
```

#### BV-IMG-37 — Apartment gallery 2 — bathroom stone detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-37` |
| Project Visual ID | `CP-03` |
| Page | P06 Apartment Renovation |
| Section | `A06` Gallery |
| Purpose | Finishes detail in the apartment concept. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of a wall-hung oak vanity with a warm grey stone top and an integrated basin, matte black tapware above. |
| Main subject | The vanity and the stone-to-oak junction. |
| Background | Warm grey stone wall panel behind, softly lit. |
| Architecture | Wall-hung unit with a shadow gap beneath, mirror edge entering the top of the frame. |
| Materials | Pale oak vanity, warm grey stone top and wall, matte black tap, clear glass. |
| Main colors | Warm grey, pale oak. |
| Accent colors | None. |
| Lighting | Soft daylight from the left plus a concealed mirror light, gentle gradient on the stone. |
| Time of day | Mid-morning. |
| Camera position | One metre from the vanity, slightly above the stone top. |
| Camera height | 1.3 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Slight three-quarter along the vanity |
| Depth of field | Moderate, f/4 equivalent |
| Focal point | The junction of the stone top and the oak carcass. |
| Safe area for website text and CTA | none required |
| Props and styling | One ceramic dish, one folded linen towel. |
| Elements that must not appear | No toiletries, no branded bottles, no people or reflections of people, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Oak vanity with a stone top and matte black tapware |
| RU alt text | Дубовая тумба с каменной столешницей и чёрным смесителем |
| EN caption | Finishes detail — concept |
| RU caption | Деталь отделки — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp03-vanity-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-37 · `project_visual_id` CP-03 · `page_id` P06 · `section_id` A06-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Mirror and stone reflections are physically correct with no artefacts; stone tone matches the kitchen worktop of BV-IMG-34. |

**Full Midjourney prompt**

```
Photorealistic close interior photograph of a wall-hung pale oak vanity in a contemporary bathroom: a warm grey stone top with an integrated basin sits on the oak carcass with a crisp junction, a matte black wall-mounted tap rises from a warm grey stone wall panel behind, a shadow gap runs beneath the unit, a ceramic dish and a folded linen towel are the only objects, and soft daylight from the left grades gently across the stone. Camera on a tripod at 1.3 m height, 50 mm full-frame equivalent, Slight three-quarter along the vanity, Moderate, f/4 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close interior photograph of a wall-hung pale oak vanity in a contemporary bathroom: a warm grey stone top with an integrated basin sits on the oak carcass with a crisp junction, a matte black wall-mounted tap rises from a warm grey stone wall panel behind, a shadow gap runs beneath the unit, a ceramic dish and a folded linen towel are the only objects, and soft daylight from the left grades gently across the stone. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 50 mm full-frame equivalent at 1.3 m height, Slight three-quarter along the vanity, Moderate, f/4 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no toiletries, no branded bottles, no towels with patterns, no people, no reflections of people, no text
```

#### BV-IMG-38 — Apartment gallery 3 — material junction

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-38` |
| Project Visual ID | `CP-03` |
| Page | P06 Apartment Renovation |
| Section | `A06` Gallery |
| Purpose | Close material evidence tying finishes and storage together. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Very close view of the point where the oak wardrobe run meets the plastered wall and the floor tile, with the 20 mm shadow gap running through. |
| Main subject | The scribe and shadow-gap detail at the end of the joinery run. |
| Background | Floor tile receding out of focus. |
| Architecture | Flush junction with no trim or beading. |
| Materials | Pale oak end panel, warm off-white plaster, honed beige large-format tile. |
| Main colors | Pale oak, warm off-white, beige. |
| Accent colors | None. |
| Lighting | Raking daylight from the front left grazing the oak end grain and the plaster. |
| Time of day | Mid-morning. |
| Camera position | Half a metre from the junction, camera low. |
| Camera height | 0.9 m |
| Lens or focal-length equivalent | 70 mm full-frame equivalent |
| Viewing angle | Low angle along the shadow gap |
| Depth of field | Shallow to moderate, f/3.2 equivalent |
| Focal point | The scribe line where oak meets plaster. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No skirting board, no visible sealant bead, no dust, no tools, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Detail where fitted oak joinery meets the plaster wall and floor |
| RU alt text | Деталь примыкания встроенной мебели к стене и полу |
| EN caption | Material junction — concept |
| RU caption | Стык материалов — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp03-junction-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-38 · `project_visual_id` CP-03 · `page_id` P06 · `section_id` A06-3 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 55% · `focal_point_mobile` 50% / 55% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Texture scale is correct at this magnification; no synthetic sheen on the oak; the gap line is straight. |

**Full Midjourney prompt**

```
Photorealistic macro-scale architectural detail of the end of a fitted oak joinery run meeting a warm off-white plastered wall and a honed beige large-format floor tile: the oak end panel is scribed tightly to the wall, a precise 20 millimetre shadow gap runs along the floor line, there is no skirting or beading, and raking daylight grazes the oak pore structure and the fine plaster texture. Camera on a tripod at 0.9 m height, 70 mm full-frame equivalent, Low angle along the shadow gap, Shallow to moderate, f/3.2 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic macro-scale architectural detail of the end of a fitted oak joinery run meeting a warm off-white plastered wall and a honed beige large-format floor tile: the oak end panel is scribed tightly to the wall, a precise 20 millimetre shadow gap runs along the floor line, there is no skirting or beading, and raking daylight grazes the oak pore structure and the fine plaster texture. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 70 mm full-frame equivalent at 0.9 m height, Low angle along the shadow gap, Shallow to moderate, f/3.2 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no skirting board, no beading, no sealant bead, no dust, no tools, no text
```

#### BV-IMG-39 — Commercial hero — open-plan workspace (anchor image of CP-04)

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-39` |
| Project Visual ID | `CP-04` |
| Page | P07 Commercial Fit-Out |
| Section | `C01` Hero |
| Purpose | Hero of the commercial page and anchor image of the office concept world. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | Wide view of the open plan including the ceiling plane and the floor line, because in a commercial interior those show the fit-out itself. |
| Main subject | The workspace as a whole: desk run, meeting enclosure, storage wall. |
| Background | Perimeter glazing on the left with soft daylight haze. |
| Architecture | 3.0 m ceiling with recessed linear luminaires in a regular rhythm, 2.9 m glazed partitions. |
| Materials | Plaster, oak panelled feature wall, warm grey porcelain floor, wool carpet, matte black frames. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | One muted terracotta acoustic panel. |
| Lighting | Even daylight from the left, luminaires softly on, blinds set so the windows are not blown out. |
| Time of day | Mid-morning. |
| Camera position | At the reception end, looking down the length of the open plan. |
| Camera height | 1.6 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Wide one-point perspective |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The meeting enclosure in the middle distance. |
| Safe area for website text and CTA | the left half on desktop, the lower third on mobile |
| Props and styling | Empty desks, closed monitor arms, one ceramic cup. |
| Elements that must not appear | No people, no branding, no screen content, no paperwork, no cables on the floor, no restaurant or clinic elements, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Open-plan office interior with desks, glazed meeting room and linear lighting |
| RU alt text | Офис открытой планировки со столами, стеклянной переговорной и линейным освещением |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp04-openplan-hero-ai-01` |
| CMS fields | `asset_id` BV-IMG-39 · `project_visual_id` CP-04 · `page_id` P07 · `section_id` C01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 45% · `safe_area` the left half on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Approved before any other CP-04 asset; ceiling and floor lines are visible; screens blank; no brand anywhere. |

**Full Midjourney prompt**

```
Photorealistic wide architectural photograph of a contemporary open-plan office fit-out: pale oak desks with matte black legs and warm grey wool task chairs run down the centre, a glazed meeting enclosure with slim matte black frames stands mid-space, an oak panelled feature wall closes the far end, recessed linear luminaires follow the flush plastered ceiling, warm grey large-format porcelain covers the floor and even daylight enters from perimeter glazing on the left. Camera on a tripod at 1.6 m height, 35 mm full-frame equivalent, Wide one-point perspective, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic wide architectural photograph of a contemporary open-plan office fit-out: pale oak desks with matte black legs and warm grey wool task chairs run down the centre, a glazed meeting enclosure with slim matte black frames stands mid-space, an oak panelled feature wall closes the far end, recessed linear luminaires follow the flush plastered ceiling, warm grey large-format porcelain covers the floor and even daylight enters from perimeter glazing on the left. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.6 m height, Wide one-point perspective, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left half on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no branding, no screen content, no paperwork, no floor cables, no retail or clinic fittings, no text
```

#### BV-IMG-40 — Office concept — furniture in place

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-40` |
| Project Visual ID | `CP-04` |
| Page | P07 Commercial Fit-Out |
| Section | `C02` Featured wide card |
| Purpose | Wide card showing procured office furniture installed in the fitted-out space. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 16:9 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1350 minimum |
| Website export dimensions | 2400 × 1350 |
| Composition | Panoramic view across the open plan at desk height, furniture arranged and ready for use. |
| Main subject | The furnished workspace: desks, chairs, a lounge corner and storage. |
| Background | Oak feature wall and the glazed enclosure. |
| Architecture | Same office, seen from the opposite end to BV-IMG-39. |
| Materials | Oak, warm grey porcelain, wool upholstery, matte black metal. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | Muted terracotta wool panel and one terracotta cushion in the lounge corner. |
| Lighting | Even daylight from the right in this frame, matching the fixed window position of the project. |
| Time of day | Mid-morning. |
| Camera position | At the far end of the open plan, looking back towards reception. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Wide panoramic three-quarter |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The lounge seating group. |
| Safe area for website text and CTA | none required |
| Props and styling | Bone linen lounge seating, one terracotta cushion, closed storage, empty desks. |
| Elements that must not appear | No people, no branding, no screen content, no plants with artificial colour, no text. |
| Recommended Midjourney parameters | --ar 16:9 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Furnished open-plan office with desks, storage and a lounge corner |
| RU alt text | Меблированный офис открытой планировки со столами, хранением и лаундж-зоной |
| EN caption | Business District Office — concept |
| RU caption | Офис в деловом районе — концепция |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp04-furniture-wide-ai-01` |
| CMS fields | `asset_id` BV-IMG-40 · `project_visual_id` CP-04 · `page_id` P07 · `section_id` C02 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 16:9 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2400 × 1350 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Same space as BV-IMG-39 with consistent ceiling rhythm and finishes; mobile 4:3 crop keeps the lounge group and at least one desk run. |

**Full Midjourney prompt**

```
Photorealistic panoramic architectural photograph across a furnished contemporary office: pale oak desks with matte black legs and warm grey wool task chairs fill the middle ground, a bone linen lounge seating group with one muted terracotta cushion occupies the near corner, a closed oak storage wall runs along the right, the glazed meeting enclosure and oak reception panelling are visible beyond, and even daylight fills the space from the perimeter glazing. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, Wide panoramic three-quarter, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 16:9 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic panoramic architectural photograph across a furnished contemporary office: pale oak desks with matte black legs and warm grey wool task chairs fill the middle ground, a bone linen lounge seating group with one muted terracotta cushion occupies the near corner, a closed oak storage wall runs along the right, the glazed meeting enclosure and oak reception panelling are visible beyond, and even daylight fills the space from the perimeter glazing. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, Wide panoramic three-quarter, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no branding, no screen content, no artificial plant colour, no text
```

#### BV-IMG-41 — Office detail 1 — meeting room interior

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-41` |
| Project Visual ID | `CP-04` |
| Page | P07 Commercial Fit-Out |
| Section | `C05` Gallery |
| Purpose | Interior view of the meeting enclosure. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Inside the glazed meeting room, looking towards the acoustic wall with the open plan visible through the glass behind the camera position. |
| Main subject | The meeting table, chairs and acoustic panelling. |
| Background | Open plan seen softly through glazing at the frame edge. |
| Architecture | 2.9 m glazed partition, flush ceiling with one linear luminaire. |
| Materials | Oak table, wool carpet, warm grey acoustic panels, matte black frames. |
| Main colors | Warm grey, pale oak. |
| Accent colors | One muted terracotta acoustic panel. |
| Lighting | Daylight filtered through the glazing, luminaire softly on. |
| Time of day | Mid-morning. |
| Camera position | Inside the enclosure, in the corner opposite the panelled wall. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Corner three-quarter |
| Depth of field | Deep, f/7.1 equivalent |
| Focal point | The centre of the meeting table. |
| Safe area for website text and CTA | none required |
| Props and styling | Empty table, one ceramic carafe and two glasses. |
| Elements that must not appear | No people, no writing on glass or walls, no screen content, no branding, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Meeting room with oak table, wool chairs and acoustic panelling |
| RU alt text | Переговорная с дубовым столом, шерстяными креслами и акустическими панелями |
| EN caption | Meeting room — concept |
| RU caption | Переговорная — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp04-meeting-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-41 · `project_visual_id` CP-04 · `page_id` P07 · `section_id` C05-1 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Glass reflections are plausible; acoustic panel texture reads as wool, not foam; matches BV-IMG-39 materials. |

**Full Midjourney prompt**

```
Photorealistic interior photograph inside a glazed office meeting room: a pale oak table with warm grey wool-upholstered chairs sits on wool loop carpet under a slim matte black linear luminaire, the rear wall carries warm grey acoustic panels with one muted terracotta panel, and the open-plan workspace is visible as a soft, correctly reflected presence through the slim-framed glazing. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, Corner three-quarter, Deep, f/7.1 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic interior photograph inside a glazed office meeting room: a pale oak table with warm grey wool-upholstered chairs sits on wool loop carpet under a slim matte black linear luminaire, the rear wall carries warm grey acoustic panels with one muted terracotta panel, and the open-plan workspace is visible as a soft, correctly reflected presence through the slim-framed glazing. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, Corner three-quarter, Deep, f/7.1 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no writing on glass, no whiteboard marks, no screen content, no people, no branding, no text
```

#### BV-IMG-42 — Office detail 2 — reception counter

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-42` |
| Project Visual ID | `CP-04` |
| Page | P07 Commercial Fit-Out |
| Section | `C05` Gallery |
| Purpose | Reception detail showing the fit-out quality of the entrance area. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Three-quarter view of the reception counter against the oak panelled wall, floor line visible. |
| Main subject | The counter: oak carcass with a warm grey stone top and a recessed matte black toe line. |
| Background | Oak panelled feature wall with a fine vertical rhythm. |
| Architecture | Counter set 300 mm off the wall with a shadow gap behind. |
| Materials | Pale oak panelling and counter, warm grey stone top, matte black details, porcelain floor. |
| Main colors | Pale oak, warm grey. |
| Accent colors | None; the terracotta accent stays in the open plan. |
| Lighting | Daylight from the left, one soft highlight along the stone edge. |
| Time of day | Mid-morning. |
| Camera position | Three metres from the counter, angled 30 degrees. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 45 mm full-frame equivalent |
| Viewing angle | Three-quarter to the counter |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The front edge of the stone top. |
| Safe area for website text and CTA | none required |
| Props and styling | One ceramic vessel on the counter. Nothing else. |
| Elements that must not appear | No company name on the wall, no logo, no signage, no people, no visitor book, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Reception counter in oak with a stone top against a panelled wall |
| RU alt text | Стойка ресепшн из дуба с каменной столешницей у панельной стены |
| EN caption | Reception detail — concept |
| RU caption | Деталь зоны ресепшн — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp04-reception-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-42 · `project_visual_id` CP-04 · `page_id` P07 · `section_id` C05-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No brand name anywhere, including on the wall; oak panel rhythm matches BV-IMG-39 and BV-IMG-40. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of an office reception counter: a pale oak carcass with a honed warm grey stone top stands against a pale oak panelled wall with a fine vertical rhythm, a recessed matte black toe line runs beneath, a shadow gap separates the counter from the wall, one ceramic vessel sits on the top and daylight from the left grazes the stone edge. Camera on a tripod at 1.5 m height, 45 mm full-frame equivalent, Three-quarter to the counter, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of an office reception counter: a pale oak carcass with a honed warm grey stone top stands against a pale oak panelled wall with a fine vertical rhythm, a recessed matte black toe line runs beneath, a shadow gap separates the counter from the wall, one ceramic vessel sits on the top and daylight from the left grazes the stone edge. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 45 mm full-frame equivalent at 1.5 m height, Three-quarter to the counter, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no signage, no company name, no logo, no people, no papers, no text on the wall
```

#### BV-IMG-43 — Office detail 3 — storage wall and acoustic panel junction

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-43` |
| Project Visual ID | `CP-04` |
| Page | P07 Commercial Fit-Out |
| Section | `C05` Gallery |
| Purpose | Close evidence of fit-out detailing in the workspace. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of the junction where a flush oak storage wall meets a warm grey acoustic panel, with a slim matte black vertical pull in frame. |
| Main subject | The material junction and the pull. |
| Background | Porcelain floor receding softly. |
| Architecture | Flush storage fronts, 10 mm shadow gap between materials. |
| Materials | Pale oak fronts, warm grey wool acoustic panel, matte black pull, warm grey porcelain floor. |
| Main colors | Pale oak, warm grey. |
| Accent colors | None. |
| Lighting | Soft even daylight from the left with a gentle gradient across the fronts. |
| Time of day | Mid-morning. |
| Camera position | One metre from the junction. |
| Camera height | 1.3 m |
| Lens or focal-length equivalent | 70 mm full-frame equivalent |
| Viewing angle | Slight angle so the shadow gap runs into depth |
| Depth of field | Moderate, f/4 equivalent |
| Focal point | The pull and the adjacent shadow gap. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No labels, no signage, no people, no cables, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Detail of oak storage fronts meeting a wool acoustic panel |
| RU alt text | Деталь стыка дубовых фасадов и акустической панели |
| EN caption | Fit-out detail — concept |
| RU caption | Деталь отделки — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp04-storage-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-43 · `project_visual_id` CP-04 · `page_id` P07 · `section_id` C05-3 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Wool weave and oak pore read at correct scale; gap line is straight; colour matches the other two office details. |

**Full Midjourney prompt**

```
Photorealistic close detail photograph inside an office: a flush pale oak storage wall meets a warm grey wool acoustic panel through a precise 10 millimetre shadow gap, a slim matte black vertical pull runs down one front, the warm grey porcelain floor recedes softly below and even daylight from the left reveals the oak pore structure and the woven texture of the acoustic panel. Camera on a tripod at 1.3 m height, 70 mm full-frame equivalent, Slight angle so the shadow gap runs into depth, Moderate, f/4 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close detail photograph inside an office: a flush pale oak storage wall meets a warm grey wool acoustic panel through a precise 10 millimetre shadow gap, a slim matte black vertical pull runs down one front, the warm grey porcelain floor recedes softly below and even daylight from the left reveals the oak pore structure and the woven texture of the acoustic panel. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 70 mm full-frame equivalent at 1.3 m height, Slight angle so the shadow gap runs into depth, Moderate, f/4 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no labels, no signage, no cables, no people, no text, no plastic sheen
```

#### BV-IMG-44 — Joinery hero — full joinery wall in place

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-44` |
| Project Visual ID | `CP-01` |
| Page | P08 Bespoke Joinery |
| Section | `J01` Hero |
| Purpose | Hero of the joinery page: an entire installed run so that scale and fit are visible. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | Wide frontal view of the full-height oak joinery wall in the living volume with the room's proportions visible around it. |
| Main subject | The complete joinery wall: closed fronts, an open shelf bay, concealed cove lighting. |
| Background | Limestone floor and plastered ceiling framing the run. |
| Architecture | Joinery runs floor to ceiling into the 40 mm shadow gap; scribed to both side walls. |
| Materials | Pale oak fronts and carcass, matte black slim profiles, warm grey stone shelf insert, beige limestone floor. |
| Main colors | Pale oak, warm off-white, beige. |
| Accent colors | One terracotta ceramic vessel on the open shelf. |
| Lighting | Daylight from the right plus the concealed cove light within the joinery. |
| Time of day | Mid-morning. |
| Camera position | Five metres back, square to the joinery wall. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Straight-on, symmetrical |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The open shelf bay at eye level. |
| Safe area for website text and CTA | the left third on desktop, the lower third on mobile |
| Props and styling | One terracotta vessel, two books on the open shelf. |
| Elements that must not appear | No isolated single cabinet against a blank wall, no render look, no supplier catalogue styling, no people, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Full-height bespoke oak joinery wall installed in a living space |
| RU alt text | Мебельная стенка из дуба во всю высоту, установленная в гостиной |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-joinery-hero-ai-01` |
| CMS fields | `asset_id` BV-IMG-44 · `project_visual_id` CP-01 · `page_id` P08 · `section_id` J01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 45% · `safe_area` the left third on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The run reads at full scale with its relationship to the room; reveals are even; left third calm for the H1. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a complete full-height bespoke joinery wall in a villa living volume: pale oak fronts with even reveals run from the honed beige limestone floor into the ceiling shadow gap, one open bay with a warm grey stone shelf carries a terracotta ceramic vessel and two books, a concealed cove light washes the oak from within, and daylight from the right models the surfaces. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Straight-on, symmetrical, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a complete full-height bespoke joinery wall in a villa living volume: pale oak fronts with even reveals run from the honed beige limestone floor into the ceiling shadow gap, one open bay with a warm grey stone shelf carries a terracotta ceramic vessel and two books, a concealed cove light washes the oak from within, and daylight from the right models the surfaces. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Straight-on, symmetrical, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left third on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no single isolated cabinet, no showroom staging, no catalogue styling, no people, no text
```

#### BV-IMG-45 — Joinery capability 1 — drawer construction

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-45` |
| Project Visual ID | `CP-06` |
| Page | P08 Bespoke Joinery |
| Section | `J03` Capabilities |
| Purpose | First of three capability details: carcass and drawer construction. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of an open drawer box seen at a slight angle, runner and joint visible. |
| Main subject | The drawer box: solid oak sides, a visible joint, a matte black runner. |
| Background | Workshop bench softly out of focus. |
| Architecture | Not visible. |
| Materials | Pale oak drawer sides, felt-lined base, matte black runner, raw steel bench. |
| Main colors | Pale oak, warm grey. |
| Accent colors | Matte black runner. |
| Lighting | Side daylight from the clerestory revealing the joint and the edge quality. |
| Time of day | Mid-morning. |
| Camera position | Half a metre from the drawer, slightly above. |
| Camera height | 1.2 m |
| Lens or focal-length equivalent | 85 mm full-frame equivalent |
| Viewing angle | Slight angle along the drawer side |
| Depth of field | Shallow to moderate, f/3.5 equivalent, portrait-mode blur switched off |
| Focal point | The corner joint of the drawer box. |
| Safe area for website text and CTA | none required |
| Props and styling | Felt liner, nothing else. |
| Elements that must not appear | No brand marks on hardware, no labels, no hands, no synthetic background blur, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Open drawer box showing oak construction and runner |
| RU alt text | Открытый ящик: конструкция из дуба и направляющая |
| EN caption | Drawer construction — concept |
| RU caption | Конструкция ящика — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp06-drawer-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-45 · `project_visual_id` CP-06 · `page_id` P08 · `section_id` J03-1 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Joint geometry is physically plausible; runner proportions are correct; no synthetic bokeh. |

**Full Midjourney prompt**

```
Photorealistic close manufacturing photograph of a bespoke drawer box: solid pale oak sides with a crisp visible corner joint, a warm grey felt-lined base, a matte black soft-close runner fixed to the side, standing open on a steel workbench with side daylight raking across the oak grain and revealing the machined edges. Camera on a tripod at 1.2 m height, 85 mm full-frame equivalent, Slight angle along the drawer side, Shallow to moderate, f/3.5 equivalent, portrait-mode blur switched off, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close manufacturing photograph of a bespoke drawer box: solid pale oak sides with a crisp visible corner joint, a warm grey felt-lined base, a matte black soft-close runner fixed to the side, standing open on a steel workbench with side daylight raking across the oak grain and revealing the machined edges. Materials and finishes: white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance. Camera: 85 mm full-frame equivalent at 1.2 m height, Slight angle along the drawer side, Shallow to moderate, f/3.5 equivalent, portrait-mode blur switched off. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no brand marks, no labels, no hands, no artificial background blur, no text, no plastic sheen
```

#### BV-IMG-46 — Joinery capability 2 — stone to timber junction

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-46` |
| Project Visual ID | `CP-01` |
| Page | P08 Bespoke Joinery |
| Section | `J03` Capabilities |
| Purpose | Second capability detail: material junction quality. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of a warm grey stone shelf meeting the oak carcass with a fine reveal, taken at the same distance as the other two capability frames. |
| Main subject | The stone edge, the reveal and the oak end grain. |
| Background | Joinery interior in soft shade. |
| Architecture | Not visible beyond the joinery. |
| Materials | Honed warm grey stone with a 15 mm edge, pale oak, matte black shadow line. |
| Main colors | Warm grey, pale oak. |
| Accent colors | None. |
| Lighting | Raking daylight from the right, revealing the stone's fine veining and the oak pore. |
| Time of day | Mid-morning. |
| Camera position | Half a metre from the junction. |
| Camera height | 1.25 m |
| Lens or focal-length equivalent | 85 mm full-frame equivalent |
| Viewing angle | Slight angle so the edge line runs into depth |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The stone edge where it meets the oak. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No objects on the shelf, no hands, no text, no brand marks. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Stone shelf meeting an oak carcass, close material junction |
| RU alt text | Стык каменной полки и дубового корпуса, крупная деталь |
| EN caption | Material junction — concept |
| RU caption | Стык материалов — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-stone-timber-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-46 · `project_visual_id` CP-01 · `page_id` P08 · `section_id` J03-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Framed at the same distance as BV-IMG-45 and BV-IMG-47 so the three read as a set; veining is quiet, not dramatic. |

**Full Midjourney prompt**

```
Photorealistic close detail of a warm grey honed stone shelf meeting a pale oak joinery carcass: the stone has a crisp fifteen millimetre edge and quiet veining, a fine shadow reveal separates it from the oak, the oak end grain is visible at the carcass edge, and raking daylight from the right models both materials at true scale. Camera on a tripod at 1.25 m height, 85 mm full-frame equivalent, Slight angle so the edge line runs into depth, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close detail of a warm grey honed stone shelf meeting a pale oak joinery carcass: the stone has a crisp fifteen millimetre edge and quiet veining, a fine shadow reveal separates it from the oak, the oak end grain is visible at the carcass edge, and raking daylight from the right models both materials at true scale. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 85 mm full-frame equivalent at 1.25 m height, Slight angle so the edge line runs into depth, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no objects on the shelf, no hands, no brand marks, no text, no exaggerated veining
```

#### BV-IMG-47 — Joinery capability 3 — hardware and integrated light

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-47` |
| Project Visual ID | `CP-01` |
| Page | P08 Bespoke Joinery |
| Section | `J03` Capabilities |
| Purpose | Third capability detail: hardware quality and integrated lighting. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of a matte black bar handle on an oak front with a concealed LED profile washing the surface from above. |
| Main subject | The handle fixing, the reveal and the light gradient on the oak. |
| Background | Adjacent fronts in soft shade. |
| Architecture | Not visible. |
| Materials | Pale oak front, matte black handle and LED profile, warm light. |
| Main colors | Pale oak, matte black. |
| Accent colors | Warm LED glow. |
| Lighting | Integrated warm LED from above with ambient daylight fill from the right. |
| Time of day | Mid-morning. |
| Camera position | Forty centimetres from the front. |
| Camera height | 1.3 m |
| Lens or focal-length equivalent | 85 mm full-frame equivalent |
| Viewing angle | Slight angle along the front |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The handle fixing point. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No fingerprints, no brand marks, no hands, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Matte black handle on an oak front with integrated lighting |
| RU alt text | Чёрная ручка на дубовом фасаде со встроенной подсветкой |
| EN caption | Hardware and integrated lighting — concept |
| RU caption | Фурнитура и встроенная подсветка — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-hardware-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-47 · `project_visual_id` CP-01 · `page_id` P08 · `section_id` J03-3 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · LED colour stays warm and does not tint the oak green or blue; handle proportions are physically plausible. |

**Full Midjourney prompt**

```
Photorealistic close detail of joinery hardware: a slim matte black bar handle fixed to a pale oak door front with a concealed warm LED profile above washing a soft gradient down the surface, precise even reveals between fronts, and ambient daylight from the right keeping the shadow side open and warm. Camera on a tripod at 1.3 m height, 85 mm full-frame equivalent, Slight angle along the front, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close detail of joinery hardware: a slim matte black bar handle fixed to a pale oak door front with a concealed warm LED profile above washing a soft gradient down the surface, precise even reveals between fronts, and ambient daylight from the right keeping the shadow side open and warm. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 85 mm full-frame equivalent at 1.3 m height, Slight angle along the front, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no fingerprints, no brand marks, no hands, no text, no rainbow LED colour
```

#### BV-IMG-48 — Production base — assembly bay (anchor image of CP-06)

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-48` |
| Project Visual ID | `CP-06` |
| Page | P08 Bespoke Joinery |
| Section | `J04` Our production |
| Purpose | Vertical production image beside the production text and anchor image of the production concept world. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 1536 × 1920 minimum |
| Website export dimensions | 1200 × 1500 |
| Composition | Vertical view into an assembly bay: a cabinet carcass clamped on a bench, panels stacked on a felt-lined trolley beside it. |
| Main subject | Work in progress on the bench. |
| Background | Workshop floor and the tool wall receding, clerestory light above. |
| Architecture | Industrial workshop with white blockwork walls, exposed steel structure, clerestory glazing high on the right. |
| Materials | Pale oak panels, sealed warm grey concrete floor, raw steel bench, grey felt, matte black clamps. |
| Main colors | Warm grey, off-white, pale oak. |
| Accent colors | None. |
| Lighting | High daylight from the clerestory on the right with neutral overhead LED battens. |
| Time of day | Mid-morning. |
| Camera position | Standing at the end of the bench, looking along it. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Slight downward three-quarter along the bench |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The clamped carcass corner. |
| Safe area for website text and CTA | none required |
| Props and styling | Clamps, a felt-lined trolley of panels, a hand tool on the bench. |
| Elements that must not appear | No faces, no full figures, no machinery brand names, no readable labels or work orders, no unsafe practice, no text. |
| Recommended Midjourney parameters | --ar 4:5 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Cabinet carcass being assembled on a workshop bench |
| RU alt text | Сборка корпуса мебели на верстаке в цеху |
| EN caption | Production — concept |
| RU caption | Производство — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp06-assembly-split-ai-01` |
| CMS fields | `asset_id` BV-IMG-48 · `project_visual_id` CP-06 · `page_id` P08 · `section_id` J04 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1200 × 1500 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Approved before any other CP-06 asset; the space reads as a working production facility rather than a storage room; no location is identifiable and no signage appears. |

**Full Midjourney prompt**

```
Photorealistic workshop photograph of a cabinet assembly bay: a pale oak carcass stands clamped on a raw steel bench, matching panels rest on a grey felt-lined trolley beside it, a hand tool lies on the bench, white painted blockwork walls and a sealed warm grey concrete floor surround the bay, and high daylight from clerestory glazing on the right mixes with neutral overhead LED battens. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, Slight downward three-quarter along the bench, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:5 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic workshop photograph of a cabinet assembly bay: a pale oak carcass stands clamped on a raw steel bench, matching panels rest on a grey felt-lined trolley beside it, a hand tool lies on the bench, white painted blockwork walls and a sealed warm grey concrete floor surround the bay, and high daylight from clerestory glazing on the right mixes with neutral overhead LED battens. Materials and finishes: white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, Slight downward three-quarter along the bench, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no faces, no figures, no brand names, no readable work orders, no labels, no unsafe practice, no text
```

#### BV-IMG-49 — Kitchen hero — full kitchen run with island

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-49` |
| Project Visual ID | `CP-01` |
| Page | P09 Custom Kitchens |
| Section | `K01` Hero |
| Purpose | Hero of the kitchens page: the whole run and its relationship to the dining area. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | Wide view of the kitchen run with the island in the middle ground and the dining table beyond, all in one frame. |
| Main subject | The kitchen: handleless oak base units, warm grey stone worktop and island. |
| Background | Full-height glazing to the right, dining area beyond the island. |
| Architecture | Same villa volume, 3.2 m ceiling, kitchen in line with the dining end. |
| Materials | Pale oak fronts, warm grey stone worktop with a 20 mm edge, off-white tall units, matte black tap, beige limestone floor. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | One terracotta ceramic bowl on the island. |
| Lighting | Daylight from the right, under-cabinet lighting softly on, no hard specular hotspots on the stone. |
| Time of day | Mid-morning. |
| Camera position | At the dining end, five metres from the run. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Slight three-quarter along the run |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The island edge where it meets the worktop line beyond. |
| Safe area for website text and CTA | the left third on desktop, the lower third on mobile |
| Props and styling | One terracotta bowl, one oak board. Worktops otherwise clear. |
| Elements that must not appear | No utility room or pantry, no bathroom elements, no small appliances on display, no food, no people, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Bespoke kitchen with oak units, stone worktop and island |
| RU alt text | Кухня на заказ с дубовыми фасадами, каменной столешницей и островом |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-kitchen-hero-ai-01` |
| CMS fields | `asset_id` BV-IMG-49 · `project_visual_id` CP-01 · `page_id` P09 · `section_id` K01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 45% · `safe_area` the left third on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Reads as a kitchen, not a utility space; stone and oak match every other CP-01 asset; left third calm for the H1. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a bespoke kitchen in a contemporary villa: a handleless run of pale oak base units with a warm grey honed stone worktop runs along the wall, an island with the same stone top stands in the middle ground with a matte black tap, off-white tall units close the far end, under-cabinet lighting is softly on, honed beige limestone covers the floor and daylight enters from full-height glazing on the right with the dining table visible beyond. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, Slight three-quarter along the run, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a bespoke kitchen in a contemporary villa: a handleless run of pale oak base units with a warm grey honed stone worktop runs along the wall, an island with the same stone top stands in the middle ground with a matte black tap, off-white tall units close the far end, under-cabinet lighting is softly on, honed beige limestone covers the floor and daylight enters from full-height glazing on the right with the dining table visible beyond. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, Slight three-quarter along the run, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left third on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no small appliances on display, no food, no utility room, no bathroom fittings, no people, no text
```

#### BV-IMG-50 — Kitchen planning pair 1 — kitchen layout drawing

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-50` |
| Project Visual ID | `CP-07` |
| Page | P09 Custom Kitchens |
| Section | `K02` Planning pair |
| Purpose | Illustrative kitchen layout drawing paired with the built kitchen frame. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` |
| Composition | Flat top-down view of a kitchen plan sheet with a generous margin. |
| Main subject | A kitchen plan showing cabinet runs, the island and appliance positions as blocks. |
| Background | Warm off-white paper with a subtle texture. |
| Architecture | The drawn kitchen: wall run, island, tall unit bank. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey lines. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down, no keystone |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The island block at the centre of the plan. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone. |
| Elements that must not appear | No readable text, no numbers, no appliance brand names, no dimension figures, no title block, no stamp, no logo. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative kitchen layout drawing with cabinet runs and island |
| RU alt text | Иллюстративный чертёж планировки кухни с расстановкой и островом |
| EN caption | Kitchen layout |
| RU caption | Планировка кухни |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-kitchen-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-50 · `project_visual_id` CP-07 · `page_id` P09 · `section_id` K02-1 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The drawn layout corresponds to the kitchen shown in BV-IMG-51: same island position and same run length; no readable glyphs. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of a kitchen layout sheet on a pale oak table: cabinet runs are drawn as fine rectangles along the walls, an island block sits at the centre, appliance positions are indicated by simple hatched squares, a sink and hob are shown as outlines, and the whole sheet carries consistent fine line weights with a generous margin and no text or numbers. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down, no keystone, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of a kitchen layout sheet on a pale oak table: cabinet runs are drawn as fine rectangles along the walls, an island block sits at the centre, appliance positions are indicated by simple hatched squares, a sink and hob are shown as outlines, and the whole sheet carries consistent fine line weights with a generous margin and no text or numbers. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down, no keystone, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no appliance brands, no dimension strings, no title block, no stamp, no logo, no lettering
```

#### BV-IMG-51 — Kitchen planning pair 2 — the same kitchen built

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-51` |
| Project Visual ID | `CP-01` |
| Page | P09 Custom Kitchens |
| Section | `K02` Planning pair |
| Purpose | The interior that corresponds to the kitchen layout drawing. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | View from the position marked by the plan's entry point: island in the foreground, run behind. |
| Main subject | The island and the wall run in one frame. |
| Background | Tall units and a slice of glazing. |
| Architecture | Same kitchen as BV-IMG-49, seen from a different position. |
| Materials | Pale oak, warm grey stone, off-white tall units, matte black tap. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | One terracotta bowl. |
| Lighting | Daylight from the right, under-cabinet lighting on. |
| Time of day | Mid-morning. |
| Camera position | At the kitchen entry, two metres from the island. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Three-quarter across the island |
| Depth of field | Deep, f/7.1 equivalent |
| Focal point | The island worktop edge. |
| Safe area for website text and CTA | none required |
| Props and styling | One terracotta bowl, one oak board. |
| Elements that must not appear | No food, no appliances on display, no people, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | The same kitchen seen from the entry, island in the foreground |
| RU alt text | Та же кухня от входа: остров на переднем плане |
| EN caption | The same kitchen, built |
| RU caption | Та же кухня в реализации |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-kitchen-wide-ai-02` |
| CMS fields | `asset_id` BV-IMG-51 · `project_visual_id` CP-01 · `page_id` P09 · `section_id` K02-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Island position, run length and appliance positions agree with BV-IMG-50; the kitchen is recognisably the one in BV-IMG-49. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of the same bespoke kitchen seen from the entry point: the island with its warm grey stone top stands in the foreground with a matte black tap, the handleless pale oak run continues along the wall behind with under-cabinet lighting, off-white tall units close the left, honed beige limestone runs underfoot and daylight enters from the glazing on the right. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Three-quarter across the island, Deep, f/7.1 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of the same bespoke kitchen seen from the entry point: the island with its warm grey stone top stands in the foreground with a matte black tap, the handleless pale oak run continues along the wall behind with under-cabinet lighting, off-white tall units close the left, honed beige limestone runs underfoot and daylight enters from the glazing on the right. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Three-quarter across the island, Deep, f/7.1 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no food, no small appliances, no people, no clutter, no text
```

#### BV-IMG-52 — Kitchen gallery 1 — general view

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-52` |
| Project Visual ID | `CP-03` |
| Page | P09 Custom Kitchens |
| Section | `K04` Gallery |
| Purpose | A second kitchen world in the gallery so the page shows range within one visual system. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Straight-on view of the apartment galley kitchen with the stone splashback filling the back plane. |
| Main subject | The galley run with its continuous stone splashback. |
| Background | Glazing edge at the left with soft haze. |
| Architecture | 2.8 m apartment ceiling, recessed channel lighting. |
| Materials | Pale oak base units, off-white uppers, warm grey stone worktop and splashback, matte black tap. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | One terracotta bowl. |
| Lighting | Diffuse daylight from the left, under-cabinet light on. |
| Time of day | Mid-morning. |
| Camera position | Three metres from the run, square on. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Straight-on |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The centre of the splashback. |
| Safe area for website text and CTA | none required |
| Props and styling | One terracotta bowl, one ceramic jug. |
| Elements that must not appear | No food, no appliances on display, no people, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Galley kitchen with continuous stone splashback |
| RU alt text | Кухня с непрерывным каменным фартуком |
| EN caption | Kitchen — concept |
| RU caption | Кухня — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp03-kitchen-general-ai-01` |
| CMS fields | `asset_id` BV-IMG-52 · `project_visual_id` CP-03 · `page_id` P09 · `section_id` K04-1 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Worktop and splashback read as one continuous material with matching veining direction. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a galley kitchen in a contemporary apartment shot straight on: handleless pale oak base units carry a warm grey honed stone worktop that continues as a full-height splashback, off-white upper units sit above with a concealed under-cabinet light, a matte black tap rises at the sink and diffuse daylight enters from the left. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Straight-on, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a galley kitchen in a contemporary apartment shot straight on: handleless pale oak base units carry a warm grey honed stone worktop that continues as a full-height splashback, off-white upper units sit above with a concealed under-cabinet light, a matte black tap rises at the sink and diffuse daylight enters from the left. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Straight-on, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no food, no appliances on display, no people, no clutter, no text
```

#### BV-IMG-53 — Kitchen gallery 2 — open storage

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-53` |
| Project Visual ID | `CP-01` |
| Page | P09 Custom Kitchens |
| Section | `K04` Gallery |
| Purpose | Storage detail with a drawer pulled out to show internal fittings. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | A deep pan drawer pulled fully out, seen slightly from above, with the adjacent fronts in frame. |
| Main subject | The drawer interior: oak dividers, felt lining, matte black runners. |
| Background | Kitchen floor and the base of the run. |
| Architecture | Not visible beyond the run. |
| Materials | Pale oak, warm grey felt, matte black runners, warm grey stone above. |
| Main colors | Pale oak, warm grey. |
| Accent colors | None. |
| Lighting | Daylight from the right plus the under-cabinet light spilling into the drawer. |
| Time of day | Mid-morning. |
| Camera position | One metre from the drawer, looking down at 30 degrees. |
| Camera height | 1.4 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | High three-quarter into the drawer |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The divider junction inside the drawer. |
| Safe area for website text and CTA | none required |
| Props and styling | Two neutral ceramic dishes and one wooden utensil inside the drawer. Nothing personal. |
| Elements that must not appear | No branded packaging, no food, no personal belongings, no hands, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Open kitchen drawer showing oak dividers and felt lining |
| RU alt text | Открытый кухонный ящик с дубовыми разделителями и войлочной подложкой |
| EN caption | Storage detail — concept |
| RU caption | Деталь хранения — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-kitchen-storage-ai-01` |
| CMS fields | `asset_id` BV-IMG-53 · `project_visual_id` CP-01 · `page_id` P09 · `section_id` K04-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 55% · `focal_point_mobile` 50% / 55% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Drawer geometry and runner proportions are physically correct; contents are neutral and impersonal. |

**Full Midjourney prompt**

```
Photorealistic close photograph of a deep kitchen pan drawer pulled fully open: pale oak dividers and a warm grey felt lining organise two neutral ceramic dishes and a wooden utensil, matte black soft-close runners are visible at the sides, the warm grey stone worktop overhangs above and daylight from the right mixes with a soft under-cabinet glow. Camera on a tripod at 1.4 m height, 50 mm full-frame equivalent, High three-quarter into the drawer, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close photograph of a deep kitchen pan drawer pulled fully open: pale oak dividers and a warm grey felt lining organise two neutral ceramic dishes and a wooden utensil, matte black soft-close runners are visible at the sides, the warm grey stone worktop overhangs above and daylight from the right mixes with a soft under-cabinet glow. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 50 mm full-frame equivalent at 1.4 m height, High three-quarter into the drawer, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no branded packaging, no food, no personal items, no hands, no text
```

#### BV-IMG-54 — Kitchen gallery 3 — worktop junction

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-54` |
| Project Visual ID | `CP-01` |
| Page | P09 Custom Kitchens |
| Section | `K04` Gallery |
| Purpose | Close evidence of worktop and splashback detailing. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of the corner where the stone worktop meets the splashback and the oak front below. |
| Main subject | The stone-to-stone junction and the front reveal below. |
| Background | Splashback receding softly. |
| Architecture | Not visible. |
| Materials | Warm grey honed stone, pale oak, matte black grip profile. |
| Main colors | Warm grey, pale oak. |
| Accent colors | None. |
| Lighting | Raking daylight from the right; soft, non-specular reflection on the stone. |
| Time of day | Mid-morning. |
| Camera position | Forty centimetres from the corner. |
| Camera height | 1.15 m |
| Lens or focal-length equivalent | 85 mm full-frame equivalent |
| Viewing angle | Slight angle along the worktop edge |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The seam where worktop meets splashback. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No kitchen items, no water droplets, no fingerprints, no hands, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Close detail of a stone worktop meeting the splashback |
| RU alt text | Крупная деталь стыка каменной столешницы и фартука |
| EN caption | Worktop junction — concept |
| RU caption | Стык столешницы — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-worktop-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-54 · `project_visual_id` CP-01 · `page_id` P09 · `section_id` K04-3 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Stone is honed, never polished to a mirror; the seam is fine and plausible; veining is continuous across the junction. |

**Full Midjourney prompt**

```
Photorealistic macro-scale detail of a kitchen worktop junction: a honed warm grey stone worktop meets its splashback in a fine, tight seam, the twenty millimetre stone edge runs crisply above a pale oak drawer front with a slim matte black grip profile, and raking daylight from the right reveals the quiet veining of the stone and the oak pore structure at true scale. Camera on a tripod at 1.15 m height, 85 mm full-frame equivalent, Slight angle along the worktop edge, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic macro-scale detail of a kitchen worktop junction: a honed warm grey stone worktop meets its splashback in a fine, tight seam, the twenty millimetre stone edge runs crisply above a pale oak drawer front with a slim matte black grip profile, and raking daylight from the right reveals the quiet veining of the stone and the oak pore structure at true scale. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 85 mm full-frame equivalent at 1.15 m height, Slight angle along the worktop edge, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no kitchen items, no water droplets, no fingerprints, no hands, no text, no mirror-like stone polish
```

#### BV-IMG-55 — Kitchen gallery 4 — installation detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-55` |
| Project Visual ID | `CP-03` |
| Page | P09 Custom Kitchens |
| Section | `K04` Gallery |
| Purpose | Installation quality detail: plinth line, appliance edge and floor junction. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Low close view along the base of the kitchen run where the plinth meets the floor tile and an integrated appliance edge. |
| Main subject | The plinth line and the integrated appliance reveal. |
| Background | Floor tile receding out of focus. |
| Architecture | Not visible. |
| Materials | Pale oak fronts, matte black recessed plinth, stainless appliance edge with no branding, beige large-format tile. |
| Main colors | Pale oak, warm grey, beige. |
| Accent colors | None. |
| Lighting | Low raking daylight along the floor. |
| Time of day | Mid-morning. |
| Camera position | Thirty centimetres above the floor, one metre from the run. |
| Camera height | 0.4 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Low angle along the plinth line |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The appliance edge where it meets the oak front. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No appliance branding, no model badges, no cables, no dust, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Plinth line and integrated appliance edge in a fitted kitchen |
| RU alt text | Линия цоколя и кромка встроенной техники в кухне |
| EN caption | Installation detail — concept |
| RU caption | Деталь монтажа — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp03-kitchen-install-ai-01` |
| CMS fields | `asset_id` BV-IMG-55 · `project_visual_id` CP-03 · `page_id` P09 · `section_id` K04-4 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 60% · `focal_point_mobile` 50% / 60% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The appliance carries no brand mark of any kind; the plinth line is straight across the full frame. |

**Full Midjourney prompt**

```
Photorealistic low-angle detail along the base of a fitted kitchen: a recessed matte black plinth runs straight above a honed beige large-format floor tile, a pale oak front sits above with an even reveal, an integrated appliance edge in unbranded stainless steel interrupts the run, and low raking daylight emphasises the straightness of the plinth line. Camera on a tripod at 0.4 m height, 50 mm full-frame equivalent, Low angle along the plinth line, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic low-angle detail along the base of a fitted kitchen: a recessed matte black plinth runs straight above a honed beige large-format floor tile, a pale oak front sits above with an even reveal, an integrated appliance edge in unbranded stainless steel interrupts the run, and low raking daylight emphasises the straightness of the plinth line. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 50 mm full-frame equivalent at 0.4 m height, Low angle along the plinth line, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no appliance branding, no model badges, no cables, no dust, no text
```

#### BV-IMG-56 — Wardrobe hero — dressing room

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-56` |
| Project Visual ID | `CP-01` |
| Page | P10 Wardrobes |
| Section | `W01` Hero |
| Purpose | Hero of the wardrobes page: a whole dressing room with its ceiling and floor junctions. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | Wide view of a walk-in dressing room with open and closed sections, an island drawer unit in the centre. |
| Main subject | The dressing room as a whole system. |
| Background | Window at the far end with sheer linen filtering the light. |
| Architecture | Full-height joinery on both sides running into the ceiling shadow gap. |
| Materials | Pale oak, warm grey felt-lined drawers, matte black rails and pulls, beige limestone floor. |
| Main colors | Pale oak, warm off-white, warm grey. |
| Accent colors | Integrated warm LED glow in the open sections. |
| Lighting | Daylight from the far window plus integrated joinery lighting. |
| Time of day | Mid-morning. |
| Camera position | At the entrance to the dressing room, centred. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | One-point perspective down the room |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The island drawer unit. |
| Safe area for website text and CTA | the left third on desktop, the lower third on mobile |
| Props and styling | Neutral folded textiles, three plain garments, one leather-toned box. |
| Elements that must not appear | No bathroom fittings of any kind, no branded clothing, no shoes with logos, no people, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 185 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Walk-in dressing room with fitted oak wardrobes and island unit |
| RU alt text | Гардеробная комната со встроенными дубовыми шкафами и островом |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp01-dressing-hero-ai-01` |
| CMS fields | `asset_id` BV-IMG-56 · `project_visual_id` CP-01 · `page_id` P10 · `section_id` W01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 45% · `safe_area` the left third on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No bathroom element appears anywhere in the frame; joinery tone matches BV-IMG-31 and BV-IMG-44. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a bespoke walk-in dressing room: full-height pale oak joinery runs down both sides with open hanging sections, felt-lined drawers and integrated warm LED strips, an oak island drawer unit stands in the centre, honed beige limestone covers the floor, a window with sheer linen at the far end filters soft daylight, and a few neutral garments and folded textiles are arranged sparsely. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, One-point perspective down the room, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 185 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a bespoke walk-in dressing room: full-height pale oak joinery runs down both sides with open hanging sections, felt-lined drawers and integrated warm LED strips, an oak island drawer unit stands in the centre, honed beige limestone covers the floor, a window with sheer linen at the far end filters soft daylight, and a few neutral garments and folded textiles are arranged sparsely. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, One-point perspective down the room, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left third on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no bathroom fittings, no branded clothing, no logo on any item, no people, no clutter, no text
```

#### BV-IMG-57 — Wardrobe pair — closed

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-57` |
| Project Visual ID | `CP-03` |
| Page | P10 Wardrobes |
| Section | `W03` Closed and open |
| Purpose | First half of the closed and open pair, identical framing to BV-IMG-58. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Square-on view of a four-door wardrobe run, all doors closed, framed so the ceiling and floor junctions are both visible. |
| Main subject | The closed fronts and their reveals. |
| Background | Plastered bedroom wall on either side. |
| Architecture | Full-height run into the ceiling shadow gap, 20 mm floor shadow gap below. |
| Materials | Pale oak fronts, matte black pulls, beige large-format floor tile. |
| Main colors | Pale oak, warm off-white. |
| Accent colors | None. |
| Lighting | Even daylight from the left, no hard shadow across the fronts. |
| Time of day | Mid-morning. |
| Camera position | Three metres from the run, centred, square on. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 45 mm full-frame equivalent |
| Viewing angle | Perfectly square-on |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The centre reveal between the second and third doors. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No people, no objects on the floor, no text, no reflections of a room. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Fitted wardrobe run with doors closed |
| RU alt text | Встроенный шкаф с закрытыми дверями |
| EN caption | Closed |
| RU caption | Закрыто |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp03-wardrobe-closed-ai-01` |
| CMS fields | `asset_id` BV-IMG-57 · `project_visual_id` CP-03 · `page_id` P10 · `section_id` W03-1 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Camera position, height, framing and lighting are identical to BV-IMG-58 so that only the doors differ. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a four-door fitted wardrobe run photographed perfectly square-on with all doors closed: pale oak fronts with slim matte black bar pulls, even reveals between each door, the run continuing into the ceiling shadow gap above and a precise floor shadow gap below, lit evenly by daylight from the left. Camera on a tripod at 1.5 m height, 45 mm full-frame equivalent, Perfectly square-on, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a four-door fitted wardrobe run photographed perfectly square-on with all doors closed: pale oak fronts with slim matte black bar pulls, even reveals between each door, the run continuing into the ceiling shadow gap above and a precise floor shadow gap below, lit evenly by daylight from the left. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 45 mm full-frame equivalent at 1.5 m height, Perfectly square-on, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no objects on the floor, no reflections of a room, no text
```

#### BV-IMG-58 — Wardrobe pair — open

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-58` |
| Project Visual ID | `CP-03` |
| Page | P10 Wardrobes |
| Section | `W03` Closed and open |
| Purpose | Second half of the pair: the same unit with doors open. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Identical framing to BV-IMG-57 with all four doors open, revealing hanging sections, shelves, drawers and integrated lighting. |
| Main subject | The internal layout of the same unit. |
| Background | Identical to BV-IMG-57. |
| Architecture | Identical. |
| Materials | Pale oak carcass and shelves, warm grey felt-lined drawers, matte black rails, integrated LED. |
| Main colors | Pale oak, warm grey. |
| Accent colors | Integrated warm LED glow. |
| Lighting | Same daylight from the left, plus the integrated lighting now visible. |
| Time of day | Mid-morning. |
| Camera position | Identical to BV-IMG-57, tripod position unchanged. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 45 mm full-frame equivalent |
| Viewing angle | Perfectly square-on, identical |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The central shelf stack. |
| Safe area for website text and CTA | none required |
| Props and styling | Neutral folded textiles, three plain garments on the rail, one felt-lined drawer partly open. |
| Elements that must not appear | No branded clothing, no personal items, no shoes with logos, no people, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref] |
| EN alt text | The same wardrobe run with doors open, showing shelves, rails and drawers |
| RU alt text | Тот же шкаф с открытыми дверями: полки, штанги и ящики |
| EN caption | Open — internal layout and fittings |
| RU caption | Открыто — наполнение и фурнитура |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp03-wardrobe-open-ai-02` |
| CMS fields | `asset_id` BV-IMG-58 · `project_visual_id` CP-03 · `page_id` P10 · `section_id` W03-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The unit, wall, floor and framing are identical to BV-IMG-57; only the doors and the interior differ. Any visible shift in camera position is a rejection. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of the same four-door fitted wardrobe run from the identical camera position with all doors open: pale oak carcass and adjustable shelves, matte black hanging rails with three plain neutral garments, warm grey felt-lined drawers with one partly open, an integrated warm LED strip along the top rail, and the same even daylight from the left as in the closed frame. Camera on a tripod at 1.5 m height, 45 mm full-frame equivalent, Perfectly square-on, identical, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of the same four-door fitted wardrobe run from the identical camera position with all doors open: pale oak carcass and adjustable shelves, matte black hanging rails with three plain neutral garments, warm grey felt-lined drawers with one partly open, an integrated warm LED strip along the top rail, and the same even daylight from the left as in the closed frame. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 45 mm full-frame equivalent at 1.5 m height, Perfectly square-on, identical, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no branded clothing, no personal items, no people, no text, no change in camera position
```

#### BV-IMG-59 — Approvals hero — general arrangement drawing

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-59` |
| Project Visual ID | `CP-07` |
| Page | P11 Approvals |
| Section | `N01` Hero |
| Purpose | Documentary hero for the approvals page: a drawing, presented as an illustration of the drawing type prepared for a submission. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 1600 × 1200, displayed `contain` on `--surface` |
| Composition | Flat view of a general arrangement drawing sheet with its border visible and a wide blank margin; never cropped. |
| Main subject | A general arrangement plan of a dwelling with walls, openings and a simple grid. |
| Background | Warm off-white paper on the `--surface` colour. |
| Architecture | The drawn dwelling: rooms, openings, a stair, a terrace outline. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey lines. |
| Accent colors | None. |
| Lighting | Even soft daylight, no hotspot. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down with the full sheet border in frame |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The centre of the plan. |
| Safe area for website text and CTA | the left half of the split hero is occupied by text, so the drawing sits in the right half |
| Props and styling | The sheet alone. |
| Elements that must not appear | No authority name, no emblem, no stamp, no approval box, no signature, no licence number, no readable text or numbers, no logo. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative general arrangement drawing of a dwelling |
| RU alt text | Иллюстративный общий чертёж планировки жилого объекта |
| EN caption | Illustrative submission drawing |
| RU caption | Иллюстративный чертёж для подачи |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-approval-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-59 · `project_visual_id` CP-07 · `page_id` P11 · `section_id` N01 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200, displayed `contain` on `--surface` · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` the left half of the split hero is occupied by text, so the drawing sits in the right half · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Nothing in the frame can be mistaken for an official approval: no stamp, no emblem, no signature, no number. The caption and disclosure label are rendered beneath the image on both language versions. |

**Full Midjourney prompt**

```
Photorealistic flat photograph of a general arrangement architectural drawing sheet: room outlines, wall poché, door and window openings, a stair and a terrace outline are drawn in fine consistent line weights inside a simple drawing border with a wide blank margin, on warm off-white paper with a subtle texture and no text, numbers, stamp, emblem or signature anywhere. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down with the full sheet border in frame, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat photograph of a general arrangement architectural drawing sheet: room outlines, wall poché, door and window openings, a stair and a terrace outline are drawn in fine consistent line weights inside a simple drawing border with a wide blank margin, on warm off-white paper with a subtle texture and no text, numbers, stamp, emblem or signature anywhere. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down with the full sheet border in frame, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left half of the split hero is occupied by text, so the drawing sits in the right half free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no authority emblem, no stamp, no approval box, no signature, no licence number, no readable text, no numbers, no logo, no revision cloud
```

#### BV-IMG-60 — MEP hero — services coordination drawing

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-60` |
| Project Visual ID | `CP-07` |
| Page | P12 MEP and HVAC |
| Section | `E01` Hero |
| Purpose | Documentary hero for the engineering services page. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 1600 × 1200, displayed `contain` on `--surface` |
| Composition | Flat view of a services coordination drawing with ceiling grid, duct runs and pipe routes overlaid on a faint architectural background. |
| Main subject | A coordination drawing showing ducts, pipe routes and luminaire positions. |
| Background | Warm off-white paper. |
| Architecture | The faint architectural plan underneath the services overlay. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey and mid-grey line work. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The duct run crossing the ceiling grid. |
| Safe area for website text and CTA | the drawing occupies the right half of the split hero |
| Props and styling | The sheet alone. |
| Elements that must not appear | No equipment brand names, no readable text or numbers, no title block, no stamp, no logo. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Illustrative services coordination drawing with ducts and luminaire positions |
| RU alt text | Иллюстративный координационный чертёж инженерных систем с воздуховодами и точками света |
| EN caption | Illustrative services coordination drawing |
| RU caption | Иллюстративный координационный чертёж инженерных систем |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-mep-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-60 · `project_visual_id` CP-07 · `page_id` P12 · `section_id` E01 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200, displayed `contain` on `--surface` · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` the drawing occupies the right half of the split hero · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Reads as a coordination drawing rather than decoration; no brand names; no readable glyphs; line weights legible on a phone. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of a mechanical and electrical services coordination drawing: a faint architectural plan sits beneath an overlay of duct runs drawn as double lines, pipe routes as single weighted lines, circular luminaire symbols on a ceiling grid and small equipment blocks, all in consistent fine line weights on warm off-white paper with a generous margin and no text, numbers or labels. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of a mechanical and electrical services coordination drawing: a faint architectural plan sits beneath an overlay of duct runs drawn as double lines, pipe routes as single weighted lines, circular luminaire symbols on a ceiling grid and small equipment blocks, all in consistent fine line weights on warm off-white paper with a generous margin and no text, numbers or labels. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the drawing occupies the right half of the split hero free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no equipment brand names, no readable text, no numbers, no legend, no title block, no stamp, no logo
```

#### BV-IMG-61 — Materials hero — selection table (anchor image of CP-07)

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-61` |
| Project Visual ID | `CP-07` |
| Page | P13 Materials and Procurement |
| Section | `M01` Hero |
| Purpose | Hero of the procurement page and anchor image of the studio concept world. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | View across the studio work table at a low angle, samples arranged as they are during a real selection meeting, the window light falling from the left. |
| Main subject | The full selection set spread across the oak table. |
| Background | Plastered studio wall and the low oak plan chest, softly out of focus. |
| Architecture | Studio interior with a large steel-framed window on the left. |
| Materials | Stone offcuts, timber veneers, tile, paint cards without printing, linen and wool swatches, a matte black handle sample, a tape measure and a pencil. |
| Main colors | Warm off-white, sand, bone, pale oak. |
| Accent colors | One muted terracotta ceramic tile. |
| Lighting | Soft indirect daylight from the left, no flash, gentle shadows under the samples. |
| Time of day | Mid-morning, overcast. |
| Camera position | At the end of the table, camera low and looking across the arrangement. |
| Camera height | 1.2 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Low three-quarter across the table |
| Depth of field | Moderate, f/4 equivalent, near samples sharp and the far edge softening |
| Focal point | The stone and timber samples at the centre of the table. |
| Safe area for website text and CTA | the left third on desktop, the lower third on mobile |
| Props and styling | Tape measure, pencil, scale rule, a folded linen swatch set. |
| Elements that must not appear | No supplier branding, no printed labels or codes, no catalogue pages, no hands, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Material samples arranged on a studio table during a selection |
| RU alt text | Образцы материалов, разложенные на столе студии во время подбора |
| EN caption | Material selection |
| RU caption | Подбор материалов |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-materials-hero-ai-01` |
| CMS fields | `asset_id` BV-IMG-61 · `project_visual_id` CP-07 · `page_id` P13 · `section_id` M01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 55% · `focal_point_mobile` 50% / 45% · `safe_area` the left third on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Approved before any other CP-07 asset; every material in the set corresponds to the palette used in the interior projects; no printed label is legible anywhere. |

**Full Midjourney prompt**

```
Photorealistic photograph across a design studio work table during a material selection: honed stone offcuts, pale oak and walnut veneer samples, a beige limestone tile, unprinted paint cards, folded linen and wool swatches in sand, bone and warm grey, one muted terracotta ceramic tile, a matte black handle sample, a tape measure and a pencil are arranged with intent but not over-styled, lit by soft indirect daylight from a large steel-framed window on the left. Camera on a tripod at 1.2 m height, 40 mm full-frame equivalent, Low three-quarter across the table, Moderate, f/4 equivalent, near samples sharp and the far edge softening, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic photograph across a design studio work table during a material selection: honed stone offcuts, pale oak and walnut veneer samples, a beige limestone tile, unprinted paint cards, folded linen and wool swatches in sand, bone and warm grey, one muted terracotta ceramic tile, a matte black handle sample, a tape measure and a pencil are arranged with intent but not over-styled, lit by soft indirect daylight from a large steel-framed window on the left. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 40 mm full-frame equivalent at 1.2 m height, Low three-quarter across the table, Moderate, f/4 equivalent, near samples sharp and the far edge softening. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left third on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no supplier branding, no printed labels, no codes, no catalogue pages, no hands, no text
```

#### BV-IMG-62 — Material palette — Coastal Villa concept

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-62` |
| Project Visual ID | `CP-07` |
| Page | P13 Materials and Procurement |
| Section | `M05` Palettes |
| Purpose | Palette composition tied to the Coastal Villa concept. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Top-down flat lay of the CP-01 palette only, samples slightly overlapping with clear space around the group. |
| Main subject | Limestone, pale oak, warm grey stone, bone linen, warm grey wool, matte black hardware, terracotta ceramic. |
| Background | Pale oak table surface. |
| Architecture | Not applicable. |
| Materials | Exactly the materials used in the Coastal Villa concept. |
| Main colors | Beige, bone, pale oak. |
| Accent colors | Muted terracotta ceramic tile. |
| Lighting | Soft indirect daylight from the left. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the arrangement. |
| Camera height | 1.3 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Top-down, square |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The centre overlap of stone and oak. |
| Safe area for website text and CTA | none required |
| Props and styling | Samples only. |
| Elements that must not appear | No supplier labels, no text, no hands, no materials that do not appear in the Coastal Villa assets. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Material palette of the coastal villa concept |
| RU alt text | Палитра материалов концепции виллы у воды |
| EN caption | Coastal Villa — material palette |
| RU caption | Вилла у воды — палитра материалов |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-palette-cp01-ai-01` |
| CMS fields | `asset_id` BV-IMG-62 · `project_visual_id` CP-07 · `page_id` P13 · `section_id` M05-1 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Every sample corresponds to a material visible in the CP-01 interior assets; no extra material is introduced. |

**Full Midjourney prompt**

```
Photorealistic top-down flat-lay photograph of the material palette of a coastal villa concept: a honed beige limestone floor tile, a pale oak veneer sample, a warm grey stone worktop offcut, folded bone linen, a warm grey wool swatch, a matte black bar handle and one muted terracotta ceramic tile, arranged with slight overlaps on a pale oak table and lit by soft indirect daylight from the left. Camera on a tripod at 1.3 m above the table height, 50 mm full-frame equivalent, Top-down, square, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic top-down flat-lay photograph of the material palette of a coastal villa concept: a honed beige limestone floor tile, a pale oak veneer sample, a warm grey stone worktop offcut, folded bone linen, a warm grey wool swatch, a matte black bar handle and one muted terracotta ceramic tile, arranged with slight overlaps on a pale oak table and lit by soft indirect daylight from the left. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.3 m above the table height, Top-down, square, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no supplier labels, no text, no hands, no unrelated materials, no plastic sample holders
```

#### BV-IMG-63 — Material palette — Tower Residence concept

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-63` |
| Project Visual ID | `CP-07` |
| Page | P13 Materials and Procurement |
| Section | `M05` Palettes |
| Purpose | Palette composition tied to the Tower Residence concept. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Top-down flat lay of the CP-03 palette, arranged in the same visual language as the other two palettes. |
| Main subject | Large-format beige tile, pale oak, warm grey stone with fine veining, sheer linen, warm grey wool, matte black pull. |
| Background | Pale oak table surface. |
| Architecture | Not applicable. |
| Materials | Exactly the materials used in the Tower Residence concept. |
| Main colors | Beige, warm grey, pale oak. |
| Accent colors | One muted terracotta textile square. |
| Lighting | Soft indirect daylight from the left. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the arrangement. |
| Camera height | 1.3 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Top-down, square |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The stone sample at the centre. |
| Safe area for website text and CTA | none required |
| Props and styling | Samples only. |
| Elements that must not appear | No labels, no text, no hands, no materials absent from the Tower Residence assets. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Material palette of the tower residence concept |
| RU alt text | Палитра материалов концепции квартиры в башне |
| EN caption | Tower Residence — material palette |
| RU caption | Квартира в башне — палитра материалов |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-palette-cp03-ai-01` |
| CMS fields | `asset_id` BV-IMG-63 · `project_visual_id` CP-07 · `page_id` P13 · `section_id` M05-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Composition style and lighting match BV-IMG-62 and BV-IMG-64 so the three read as one set. |

**Full Midjourney prompt**

```
Photorealistic top-down flat-lay photograph of the material palette of a tower residence concept: a honed beige large-format floor tile, a pale oak veneer sample, a warm grey stone worktop offcut with fine veining, a sheer linen swatch, a warm grey wool swatch, a slim matte black pull and one muted terracotta textile square, arranged with slight overlaps on a pale oak table in soft indirect daylight from the left. Camera on a tripod at 1.3 m above the table height, 50 mm full-frame equivalent, Top-down, square, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic top-down flat-lay photograph of the material palette of a tower residence concept: a honed beige large-format floor tile, a pale oak veneer sample, a warm grey stone worktop offcut with fine veining, a sheer linen swatch, a warm grey wool swatch, a slim matte black pull and one muted terracotta textile square, arranged with slight overlaps on a pale oak table in soft indirect daylight from the left. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.3 m above the table height, Top-down, square, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no labels, no text, no hands, no unrelated materials, no glossy surfaces
```

#### BV-IMG-64 — Material palette — Business District Office concept

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-64` |
| Project Visual ID | `CP-07` |
| Page | P13 Materials and Procurement |
| Section | `M05` Palettes |
| Purpose | Palette composition tied to the office concept. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Top-down flat lay of the CP-04 palette in the same arrangement language as the other palettes. |
| Main subject | Warm grey porcelain tile, oak veneer, wool loop carpet square, warm grey acoustic felt, matte black frame profile, stone counter offcut. |
| Background | Pale oak table surface. |
| Architecture | Not applicable. |
| Materials | Exactly the materials used in the office concept. |
| Main colors | Warm grey, pale oak, off-white. |
| Accent colors | One muted terracotta acoustic felt square. |
| Lighting | Soft indirect daylight from the left. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the arrangement. |
| Camera height | 1.3 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Top-down, square |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The carpet and felt overlap. |
| Safe area for website text and CTA | none required |
| Props and styling | Samples only. |
| Elements that must not appear | No labels, no text, no hands, no domestic materials that do not belong to the office concept. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Material palette of the business district office concept |
| RU alt text | Палитра материалов концепции офиса в деловом районе |
| EN caption | Business District Office — material palette |
| RU caption | Офис в деловом районе — палитра материалов |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-palette-cp04-ai-01` |
| CMS fields | `asset_id` BV-IMG-64 · `project_visual_id` CP-07 · `page_id` P13 · `section_id` M05-3 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Materials correspond to the office assets only; arrangement and light match the other two palettes. |

**Full Midjourney prompt**

```
Photorealistic top-down flat-lay photograph of the material palette of a commercial office concept: a warm grey matte porcelain floor tile, a pale oak veneer sample, a wool loop carpet square, a warm grey acoustic felt panel sample with one muted terracotta square beside it, a matte black glazing frame profile offcut and a warm grey stone counter offcut, arranged with slight overlaps on a pale oak table in soft indirect daylight. Camera on a tripod at 1.3 m above the table height, 50 mm full-frame equivalent, Top-down, square, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic top-down flat-lay photograph of the material palette of a commercial office concept: a warm grey matte porcelain floor tile, a pale oak veneer sample, a wool loop carpet square, a warm grey acoustic felt panel sample with one muted terracotta square beside it, a matte black glazing frame profile offcut and a warm grey stone counter offcut, arranged with slight overlaps on a pale oak table in soft indirect daylight. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.3 m above the table height, Top-down, square, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no labels, no text, no hands, no domestic fabrics, no glossy laminate
```

#### BV-IMG-65 — Coastal Villa cover

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-65` |
| Project Visual ID | `CP-01` |
| Page | P15 Coastal Villa Concept |
| Section | `CS02` Cover |
| Purpose | Cover image of the Coastal Villa concept page, a different view from the catalogue card. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 2400 × 1500 desktop, 1200 × 1500 mobile |
| Composition | Wide establishing view from the terrace side looking into the villa through the full-height glazing, interior and exterior both legible. |
| Main subject | The villa's glazed elevation with the living volume visible inside. |
| Background | Planted terrace in the foreground, pale sky above the roof line. |
| Architecture | Rectilinear facade, deep reveal above the glazing, flush detailing. |
| Materials | Plaster facade, matte black glazing frames, beige limestone paving, pale oak visible inside. |
| Main colors | Warm off-white, beige, green planting. |
| Accent colors | None outside; the terracotta accent stays indoors. |
| Lighting | Mid-morning daylight from the right, soft shadow under the reveal, interior legible through the glass. |
| Time of day | Mid-morning. |
| Camera position | On the terrace, eight metres from the glazing, slightly off-axis. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Slight three-quarter to the facade |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The living volume seen through the glazing. |
| Safe area for website text and CTA | none required; the H1 sits above the image |
| Props and styling | Two planted pots on the terrace. |
| Elements that must not appear | No people, no pool, no cars, no neighbouring villas, no street, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Villa glazed elevation seen from the terrace with the living space inside |
| RU alt text | Остеклённый фасад виллы с террасы, интерьер виден внутри |
| EN caption | Coastal Villa — concept |
| RU caption | Вилла у воды — концепция |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp01-cover-wide-ai-01` |
| CMS fields | `asset_id` BV-IMG-65 · `project_visual_id` CP-01 · `page_id` P15 · `section_id` CS02 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 2400 × 1500 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required; the H1 sits above the image · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The interior visible through the glass matches the CP-01 interior assets exactly; reflections in the glazing are physically plausible. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a contemporary villa seen from its planted terrace: full-height glazing with slim matte black frames reveals the pale oak joinery and linen seating of the living volume inside, a deep plastered reveal shades the glass, beige limestone paving runs towards the camera between low planting and mid-morning daylight rakes in from the right under a pale sky. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, Slight three-quarter to the facade, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a contemporary villa seen from its planted terrace: full-height glazing with slim matte black frames reveals the pale oak joinery and linen seating of the living volume inside, a deep plastered reveal shades the glass, beige limestone paving runs towards the camera between low planting and mid-morning daylight rakes in from the right under a pale sky. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, Slight three-quarter to the facade, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required; the H1 sits above the image free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no pool, no cars, no neighbouring buildings, no street, no text
```

#### BV-IMG-66 — Coastal Villa — concept layout drawing

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-66` |
| Project Visual ID | `CP-07` |
| Page | P15 Coastal Villa Concept |
| Section | `CS05` Plan and design |
| Purpose | Layout drawing of the Coastal Villa concept. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` |
| Composition | Flat top-down view of a two-storey villa ground floor plan with a generous margin. |
| Main subject | The ground floor plan: living volume, kitchen, stair hall, terrace outline. |
| Background | Warm off-white paper. |
| Architecture | The CP-01 geometry: 12 by 7 metre living volume, stair hall, terrace. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey lines. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The living volume on the plan. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone. |
| Elements that must not appear | No readable text, no numbers, no room names, no title block, no stamp, no logo, no address. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Concept ground floor plan of the coastal villa |
| RU alt text | План первого этажа концепции виллы у воды |
| EN caption | Concept layout |
| RU caption | Планировка концепции |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-cp01-layout-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-66 · `project_visual_id` CP-07 · `page_id` P15 · `section_id` CS05 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Furniture blocks correspond to the arrangement seen in the CP-01 interior assets; no readable glyphs. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of a villa ground floor plan sheet: an open living volume with a kitchen run, a stair hall, secondary rooms and an attached terrace are drawn with fine consistent line weights, solid wall poché, quarter-circle door swings and simple furniture blocks that match the arrangement of the concept interior, with a generous blank margin and no text or numbers. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of a villa ground floor plan sheet: an open living volume with a kitchen run, a stair hall, secondary rooms and an attached terrace are drawn with fine consistent line weights, solid wall poché, quarter-circle door swings and simple furniture blocks that match the arrangement of the concept interior, with a generous blank margin and no text or numbers. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no room names, no title block, no stamp, no logo, no address, no lettering
```

#### BV-IMG-67 — Coastal Villa — material palette

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-67` |
| Project Visual ID | `CP-07` |
| Page | P15 Coastal Villa Concept |
| Section | `CS06` Materials |
| Purpose | Palette composition on the concept project page. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Top-down flat lay, shot slightly tighter than BV-IMG-62 so the page does not repeat an identical frame. |
| Main subject | The Coastal Villa materials at close range. |
| Background | Pale oak table surface. |
| Architecture | Not applicable. |
| Materials | Limestone, pale oak, warm grey stone, bone linen, warm grey wool, matte black hardware, terracotta ceramic. |
| Main colors | Beige, bone, pale oak. |
| Accent colors | Muted terracotta ceramic. |
| Lighting | Soft indirect daylight from the left. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above, closer than BV-IMG-62. |
| Camera height | 1.0 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Top-down, square |
| Depth of field | Moderate, f/4.5 equivalent |
| Focal point | The stone edge against the oak veneer. |
| Safe area for website text and CTA | none required |
| Props and styling | Samples only. |
| Elements that must not appear | No labels, no text, no hands, no additional materials. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Close view of the coastal villa concept material palette |
| RU alt text | Крупный план палитры материалов концепции виллы у воды |
| EN caption | Materials of this concept |
| RU caption | Материалы концепции |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-cp01-materials-mood-ai-02` |
| CMS fields | `asset_id` BV-IMG-67 · `project_visual_id` CP-07 · `page_id` P15 · `section_id` CS06 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Not an identical frame to BV-IMG-62; same materials, closer framing; texture scale correct at this magnification. |

**Full Midjourney prompt**

```
Photorealistic close top-down flat-lay of the coastal villa material palette: a honed beige limestone tile edge, pale oak veneer with visible grain, a warm grey stone offcut with quiet veining, folded bone linen, a warm grey wool swatch, a matte black bar handle and a muted terracotta ceramic tile, framed close so the textures dominate, in soft indirect daylight from the left. Camera on a tripod at 1.0 m above the table height, 50 mm full-frame equivalent, Top-down, square, Moderate, f/4.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close top-down flat-lay of the coastal villa material palette: a honed beige limestone tile edge, pale oak veneer with visible grain, a warm grey stone offcut with quiet veining, folded bone linen, a warm grey wool swatch, a matte black bar handle and a muted terracotta ceramic tile, framed close so the textures dominate, in soft indirect daylight from the left. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.0 m above the table height, Top-down, square, Moderate, f/4.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no labels, no text, no hands, no extra materials, no props
```

#### BV-IMG-68 — Coastal Villa gallery 1 — living room

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-68` |
| Project Visual ID | `CP-01` |
| Page | P15 Coastal Villa Concept |
| Section | `CS07` Gallery |
| Purpose | First gallery frame: room view. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Three-quarter view of the living area from the glazing side, looking back at the joinery wall and the stair-hall opening. |
| Main subject | The seating group seen from the opposite side to BV-IMG-01. |
| Background | Joinery wall, stair-hall opening beyond. |
| Architecture | Same volume, ceiling shadow gap and door reveal visible. |
| Materials | Plaster, pale oak, limestone, warm grey wool, matte black. |
| Main colors | Warm off-white, oak, beige. |
| Accent colors | Terracotta vessel. |
| Lighting | Daylight from behind the camera, the glazing out of frame to the right. |
| Time of day | Mid-morning. |
| Camera position | Beside the glazing, four metres from the sofa. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 45 mm full-frame equivalent |
| Viewing angle | Three-quarter across the seating group |
| Depth of field | Deep, f/7.1 equivalent |
| Focal point | The sofa and the joinery wall behind it. |
| Safe area for website text and CTA | none required |
| Props and styling | Terracotta vessel, two books, wool throw. |
| Elements that must not appear | No people, no new furniture, no artwork, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Living area of the coastal villa concept seen from the window side |
| RU alt text | Гостиная концепции виллы у воды со стороны окна |
| EN caption | Living area |
| RU caption | Гостиная |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp01-living-gallery-ai-01` |
| CMS fields | `asset_id` BV-IMG-68 · `project_visual_id` CP-01 · `page_id` P15 · `section_id` CS07-1 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Furniture positions agree with BV-IMG-01 seen from the opposite direction; light direction reversed correctly rather than arbitrarily. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a villa living area seen from the window side: the bone linen sofa sits on a warm grey wool rug facing an oak coffee table with a muted terracotta vessel, the full-height pale oak joinery wall runs behind, the wide opening to the stair hall is visible beyond and daylight enters from behind the camera across the honed beige limestone floor. Camera on a tripod at 1.5 m height, 45 mm full-frame equivalent, Three-quarter across the seating group, Deep, f/7.1 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a villa living area seen from the window side: the bone linen sofa sits on a warm grey wool rug facing an oak coffee table with a muted terracotta vessel, the full-height pale oak joinery wall runs behind, the wide opening to the stair hall is visible beyond and daylight enters from behind the camera across the honed beige limestone floor. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 45 mm full-frame equivalent at 1.5 m height, Three-quarter across the seating group, Deep, f/7.1 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no new furniture, no artwork, no clutter, no text
```

#### BV-IMG-69 — Coastal Villa gallery 2 — dining and kitchen

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-69` |
| Project Visual ID | `CP-01` |
| Page | P15 Coastal Villa Concept |
| Section | `CS07` Gallery |
| Purpose | Second gallery frame: room view of the dining and kitchen end. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | View across the dining table towards the kitchen run, glazing on the right. |
| Main subject | Dining table, pendant and the kitchen run beyond. |
| Background | Kitchen run with its stone worktop and off-white tall units. |
| Architecture | Same volume, kitchen in line with the dining area. |
| Materials | Oak, warm grey stone, off-white units, limestone floor, matte black pendant. |
| Main colors | Warm off-white, oak, warm grey. |
| Accent colors | Terracotta bowl on the table. |
| Lighting | Daylight from the right, under-cabinet light on in the kitchen. |
| Time of day | Mid-morning. |
| Camera position | At the living end, five metres from the table. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Straight-on along the room axis |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The pendant above the table. |
| Safe area for website text and CTA | none required |
| Props and styling | Terracotta bowl, linen runner, one oak board on the worktop. |
| Elements that must not appear | No people, no food, no place settings, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Dining area and kitchen in the coastal villa concept |
| RU alt text | Обеденная зона и кухня в концепции виллы у воды |
| EN caption | Dining and kitchen |
| RU caption | Обеденная зона и кухня |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp01-dining-gallery-ai-01` |
| CMS fields | `asset_id` BV-IMG-69 · `project_visual_id` CP-01 · `page_id` P15 · `section_id` CS07-2 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The kitchen is the same one shown in BV-IMG-49 and BV-IMG-51, from a further viewpoint. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph looking across the dining end of a villa living volume towards the kitchen: an oak dining table with six warm grey wool chairs sits under a slim linear matte black pendant with a terracotta bowl and a linen runner on top, and beyond it the handleless pale oak kitchen run with its warm grey stone worktop and off-white tall units is lit by a soft under-cabinet glow, with daylight entering from the glazing on the right. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Straight-on along the room axis, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph looking across the dining end of a villa living volume towards the kitchen: an oak dining table with six warm grey wool chairs sits under a slim linear matte black pendant with a terracotta bowl and a linen runner on top, and beyond it the handleless pale oak kitchen run with its warm grey stone worktop and off-white tall units is lit by a soft under-cabinet glow, with daylight entering from the glazing on the right. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Straight-on along the room axis, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no food, no place settings, no clutter, no text
```

#### BV-IMG-70 — Coastal Villa gallery 3 — stair hall, wide frame

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-70` |
| Project Visual ID | `CP-01` |
| Page | P15 Coastal Villa Concept |
| Section | `CS07` Gallery, WIDE frame |
| Purpose | Panoramic frame that changes the rhythm of the gallery. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 16:9 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1350 minimum |
| Website export dimensions | 2400 × 1350 |
| Composition | Panoramic view of the stair hall with the stair on the right, the landing window light on the floor and the opening to the living volume on the left. |
| Main subject | The stair hall as a spatial moment. |
| Background | Living volume glimpsed through the opening. |
| Architecture | Stair with oak treads and a slim matte black balustrade, tall landing window. |
| Materials | Plaster, pale oak treads, beige limestone, matte black. |
| Main colors | Warm off-white, oak, beige. |
| Accent colors | None. |
| Lighting | Daylight from the landing window, one soft shaft across the floor. |
| Time of day | Mid-morning. |
| Camera position | In the hall, centred, four metres from the first tread. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Panoramic straight-on |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The stair's first three treads. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No people, no plants, no artwork, no text. |
| Recommended Midjourney parameters | --ar 16:9 --style raw --stylize 185 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Stair hall of the coastal villa concept with daylight from the landing window |
| RU alt text | Лестничный холл концепции виллы у воды со светом из окна на площадке |
| EN caption | Stair hall |
| RU caption | Лестничный холл |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp01-stair-wide-ai-01` |
| CMS fields | `asset_id` BV-IMG-70 · `project_visual_id` CP-01 · `page_id` P15 · `section_id` CS07-3 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 16:9 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2400 × 1350 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Same stair geometry and balustrade as BV-IMG-09; mobile 4:3 crop keeps the stair and the light shaft. |

**Full Midjourney prompt**

```
Photorealistic panoramic architectural photograph of a villa stair hall: a pale oak stair with a slim matte black balustrade rises on the right, a tall landing window drops one soft shaft of daylight onto the honed beige limestone floor, the wide opening to the living volume shows the joinery wall beyond on the left, and the plastered surfaces hold a gentle tonal gradient. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, Panoramic straight-on, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 16:9 --style raw --stylize 185 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic panoramic architectural photograph of a villa stair hall: a pale oak stair with a slim matte black balustrade rises on the right, a tall landing window drops one soft shaft of daylight onto the honed beige limestone floor, the wide opening to the living volume shows the joinery wall beyond on the left, and the plastered surfaces hold a gentle tonal gradient. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, Panoramic straight-on, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no plants, no artwork, no text, no handrail clutter
```

#### BV-IMG-71 — Coastal Villa gallery 4 — kitchen detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-71` |
| Project Visual ID | `CP-01` |
| Page | P15 Coastal Villa Concept |
| Section | `CS07` Gallery, detail |
| Purpose | Detail frame breaking the rhythm of room views. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of the island edge where the stone meets the oak panel and the matte black tap rises behind. |
| Main subject | The island's stone edge and the oak side panel. |
| Background | Kitchen run softly out of focus behind. |
| Architecture | Not visible beyond the island. |
| Materials | Warm grey stone, pale oak, matte black tap. |
| Main colors | Warm grey, pale oak. |
| Accent colors | None. |
| Lighting | Daylight from the right grazing the stone edge. |
| Time of day | Mid-morning. |
| Camera position | Half a metre from the island corner. |
| Camera height | 1.1 m |
| Lens or focal-length equivalent | 70 mm full-frame equivalent |
| Viewing angle | Low three-quarter along the island edge |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The mitred stone corner. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No food, no utensils, no hands, no brand marks, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Detail of a kitchen island stone corner and oak panel |
| RU alt text | Деталь угла каменной столешницы острова и дубовой панели |
| EN caption | Island detail |
| RU caption | Деталь острова |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp01-island-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-71 · `project_visual_id` CP-01 · `page_id` P15 · `section_id` CS07-4 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The mitre is physically plausible; stone tone matches BV-IMG-49 and BV-IMG-54. |

**Full Midjourney prompt**

```
Photorealistic close detail of a kitchen island corner: a honed warm grey stone top with a precise mitred corner sits above a pale oak side panel, a matte black tap rises softly out of focus behind, and daylight from the right grazes the stone edge revealing quiet veining and the crispness of the mitre. Camera on a tripod at 1.1 m height, 70 mm full-frame equivalent, Low three-quarter along the island edge, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close detail of a kitchen island corner: a honed warm grey stone top with a precise mitred corner sits above a pale oak side panel, a matte black tap rises softly out of focus behind, and daylight from the right grazes the stone edge revealing quiet veining and the crispness of the mitre. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 70 mm full-frame equivalent at 1.1 m height, Low three-quarter along the island edge, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no food, no utensils, no hands, no brand marks, no text, no water droplets
```

#### BV-IMG-72 — Coastal Villa gallery 5 — bedroom joinery detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-72` |
| Project Visual ID | `CP-01` |
| Page | P15 Coastal Villa Concept |
| Section | `CS07` Gallery, detail |
| Purpose | Second detail frame, showing joinery in a bedroom context. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Mid-close view of an oak headboard panel meeting a bedside niche with an integrated light and a stone shelf. |
| Main subject | The panel, niche and shelf assembly. |
| Background | Plastered bedroom wall and bed linen at the frame edge. |
| Architecture | Full-height oak panelling behind the bed with a recessed niche. |
| Materials | Pale oak panelling, warm grey stone shelf, matte black light profile, bone linen bedding. |
| Main colors | Pale oak, bone, warm grey. |
| Accent colors | One terracotta ceramic cup on the shelf. |
| Lighting | Soft daylight from the left plus the warm niche light. |
| Time of day | Mid-morning. |
| Camera position | One and a half metres from the niche. |
| Camera height | 1.2 m |
| Lens or focal-length equivalent | 70 mm full-frame equivalent |
| Viewing angle | Slight three-quarter into the niche |
| Depth of field | Moderate, f/4 equivalent |
| Focal point | The stone shelf and the light line above it. |
| Safe area for website text and CTA | none required |
| Props and styling | One ceramic cup, one folded linen throw at the frame edge. |
| Elements that must not appear | No people, no personal items, no books with readable covers, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Oak panelling and bedside niche with a stone shelf |
| RU alt text | Дубовые панели и прикроватная ниша с каменной полкой |
| EN caption | Bedroom joinery detail |
| RU caption | Деталь мебели в спальне |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp01-bedroom-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-72 · `project_visual_id` CP-01 · `page_id` P15 · `section_id` CS07-5 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Oak tone and hardware family match every other CP-01 asset; the light line is warm and even. |

**Full Midjourney prompt**

```
Photorealistic close interior photograph of a bedroom joinery detail: full-height pale oak panelling behind the bed meets a recessed bedside niche with a warm grey stone shelf and a concealed warm light line above it, a muted terracotta ceramic cup sits on the shelf, bone linen bedding enters the lower frame edge and soft daylight arrives from the left. Camera on a tripod at 1.2 m height, 70 mm full-frame equivalent, Slight three-quarter into the niche, Moderate, f/4 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close interior photograph of a bedroom joinery detail: full-height pale oak panelling behind the bed meets a recessed bedside niche with a warm grey stone shelf and a concealed warm light line above it, a muted terracotta ceramic cup sits on the shelf, bone linen bedding enters the lower frame edge and soft daylight arrives from the left. Materials and finishes: warm off-white mineral plaster walls, pale natural oak joinery, honed beige limestone floor in 900 mm format with 3 mm joints, warm grey natural stone surfaces, matte black hardware, one muted terracotta textile accent, soft diffuse mid-morning daylight entering through full-height glazing on the right, warm-neutral white balance. Camera: 70 mm full-frame equivalent at 1.2 m height, Slight three-quarter into the niche, Moderate, f/4 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no personal items, no readable book covers, no text, no strong colour
```

#### BV-IMG-73 — Garden Villa cover (anchor image of CP-02)

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-73` |
| Project Visual ID | `CP-02` |
| Page | P16 Garden Villa Concept |
| Section | `CS02` Cover |
| Purpose | Cover of the Garden Villa concept page and anchor image of that project world. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 2400 × 1500 desktop, 1200 × 1500 mobile |
| Composition | Wide interior view of the living room with the sliding glazed wall fully open on the left and the terrace beyond. |
| Main subject | The living room and its direct relationship to the garden. |
| Background | Shaded terrace, pergola and planting seen through the opening. |
| Architecture | 3.0 m ceiling with a pale oak beam rhythm at 1.2 m centres, deep roof overhang outside. |
| Materials | Hand-applied plaster, pale oak with walnut accents, beige limestone in 600 × 1200 format, warm grey stone, matte black. |
| Main colors | Warm off-white, sand, pale oak, green. |
| Accent colors | Clay-toned rug and one terracotta throw. |
| Lighting | Low warm late-afternoon light from the left, long soft shadows across the floor. |
| Time of day | Late afternoon. |
| Camera position | At the rear of the living room, looking towards the opening. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Straight-on towards the glazed wall |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The threshold and the terrace beyond. |
| Safe area for website text and CTA | none required; the H1 sits above the image |
| Props and styling | One ceramic bowl, one folded throw, one planted pot on the terrace. |
| Elements that must not appear | No people, no pool, no barbecue, no parasol, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Villa living room with an open sliding wall to a shaded terrace |
| RU alt text | Гостиная виллы с открытой раздвижной стеной на затенённую террасу |
| EN caption | Garden Villa — concept |
| RU caption | Вилла с садом — концепция |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp02-cover-wide-ai-01` |
| CMS fields | `asset_id` BV-IMG-73 · `project_visual_id` CP-02 · `page_id` P16 · `section_id` CS02 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 2400 × 1500 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 55% · `focal_point_mobile` 50% / 50% · `safe_area` none required; the H1 sits above the image · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Approved before any other CP-02 asset; beam rhythm, floor format and late-afternoon light become fixed from this frame. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a single-storey villa living room with a four-metre sliding glazed wall fully open on the left: a deep sand-coloured sofa sits on a clay-toned flatweave rug, pale oak ceiling beams cross the plastered ceiling at regular centres, warm beige limestone flooring in a long format continues out to a shaded terrace with a slatted pergola and mature planting, and low late-afternoon sunlight rakes across the floor from the left. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, Straight-on towards the glazed wall, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a single-storey villa living room with a four-metre sliding glazed wall fully open on the left: a deep sand-coloured sofa sits on a clay-toned flatweave rug, pale oak ceiling beams cross the plastered ceiling at regular centres, warm beige limestone flooring in a long format continues out to a shaded terrace with a slatted pergola and mature planting, and low late-afternoon sunlight rakes across the floor from the left. Materials and finishes: warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, Straight-on towards the glazed wall, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required; the H1 sits above the image free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no pool, no barbecue, no parasol, no people, no text, no resort styling
```

#### BV-IMG-74 — Garden Villa — concept layout drawing

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-74` |
| Project Visual ID | `CP-07` |
| Page | P16 Garden Villa Concept |
| Section | `CS05` Plan and design |
| Purpose | Layout drawing of the Garden Villa concept including the terrace. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` |
| Composition | Flat top-down view of a single-storey villa plan with the terrace and planting beds included. |
| Main subject | The plan: living room, terrace, bedrooms, planting zones. |
| Background | Warm off-white paper. |
| Architecture | CP-02 geometry: 9 by 6 metre living room, 4 metre sliding opening, terrace. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey lines. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The living room and terrace threshold. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone. |
| Elements that must not appear | No readable text, no numbers, no plant names, no title block, no stamp, no logo. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Concept plan of the garden villa including the terrace |
| RU alt text | План концепции виллы с садом, включая террасу |
| EN caption | Concept layout |
| RU caption | Планировка концепции |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-cp02-layout-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-74 · `project_visual_id` CP-07 · `page_id` P16 · `section_id` CS05 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Terrace geometry agrees with BV-IMG-25 and BV-IMG-73; no readable glyphs anywhere. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of a single-storey villa plan sheet: the living room opens through a wide sliding threshold to a terrace with a paving grid and planting beds shown as fine organic hatching, bedrooms and service rooms sit along the rear, drawn in fine consistent line weights with wall poché, door swings and furniture blocks matching the concept interior, with a generous blank margin and no text or numbers. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of a single-storey villa plan sheet: the living room opens through a wide sliding threshold to a terrace with a paving grid and planting beds shown as fine organic hatching, bedrooms and service rooms sit along the rear, drawn in fine consistent line weights with wall poché, door swings and furniture blocks matching the concept interior, with a generous blank margin and no text or numbers. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no plant labels, no title block, no stamp, no logo, no lettering
```

#### BV-IMG-75 — Garden Villa — material palette

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-75` |
| Project Visual ID | `CP-07` |
| Page | P16 Garden Villa Concept |
| Section | `CS06` Materials |
| Purpose | Palette composition for the Garden Villa concept, interior and outdoor materials together. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Top-down flat lay combining interior and terrace materials, grouped with a small visual gap between the two families. |
| Main subject | Limestone paving and floor tile, pale oak, walnut accent, warm grey stone, outdoor linen, gravel. |
| Background | Pale oak table surface. |
| Architecture | Not applicable. |
| Materials | The CP-02 and CP-05 material families only. |
| Main colors | Warm beige, sand, pale oak, walnut brown. |
| Accent colors | One muted terracotta ceramic tile. |
| Lighting | Soft indirect daylight from the left. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the arrangement. |
| Camera height | 1.3 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Top-down, square |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The junction between the interior and outdoor groups. |
| Safe area for website text and CTA | none required |
| Props and styling | Samples only. |
| Elements that must not appear | No labels, no text, no hands, no materials from other concepts. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Interior and outdoor material palette of the garden villa concept |
| RU alt text | Палитра внутренних и наружных материалов концепции виллы с садом |
| EN caption | Materials of this concept |
| RU caption | Материалы концепции |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-cp02-materials-mood-ai-01` |
| CMS fields | `asset_id` BV-IMG-75 · `project_visual_id` CP-07 · `page_id` P16 · `section_id` CS06 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Both groups correspond to materials visible in the CP-02 and CP-05 assets; the two families are legible as related but distinct. |

**Full Midjourney prompt**

```
Photorealistic top-down flat-lay of a villa concept material palette arranged in two groups on a pale oak table: interior samples of warm beige limestone floor tile, pale oak veneer, a walnut accent panel, warm grey honed stone and heavy linen; and terrace samples of limestone paving with a textured face, warm grey-beige decking timber, pale gravel and off-white outdoor linen, with one muted terracotta ceramic tile between them, lit by soft indirect daylight from the left. Camera on a tripod at 1.3 m above the table height, 50 mm full-frame equivalent, Top-down, square, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic top-down flat-lay of a villa concept material palette arranged in two groups on a pale oak table: interior samples of warm beige limestone floor tile, pale oak veneer, a walnut accent panel, warm grey honed stone and heavy linen; and terrace samples of limestone paving with a textured face, warm grey-beige decking timber, pale gravel and off-white outdoor linen, with one muted terracotta ceramic tile between them, lit by soft indirect daylight from the left. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.3 m above the table height, Top-down, square, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no labels, no text, no hands, no unrelated materials, no plastic trays
```

#### BV-IMG-76 — Garden Villa gallery 1 — living room from the terrace side

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-76` |
| Project Visual ID | `CP-02` |
| Page | P16 Garden Villa Concept |
| Section | `CS07` Gallery |
| Purpose | Room view from the reverse direction to the cover. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | View from just inside the threshold looking into the living room, beams running away from the camera. |
| Main subject | The living room interior with its walnut-fronted storage. |
| Background | Rear wall with built-in walnut storage and a low oak sideboard. |
| Architecture | Oak beam rhythm overhead, 3.0 m ceiling. |
| Materials | Plaster, pale oak, walnut fronts, limestone, warm grey stone. |
| Main colors | Warm off-white, sand, walnut brown. |
| Accent colors | Clay-toned rug. |
| Lighting | Late afternoon light entering from behind the camera, long shadows into the room. |
| Time of day | Late afternoon. |
| Camera position | Just inside the sliding threshold. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Straight-on into the room |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The walnut storage on the rear wall. |
| Safe area for website text and CTA | none required |
| Props and styling | One ceramic bowl, one stack of two books. |
| Elements that must not appear | No people, no television screen content, no new materials, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Garden villa living room with walnut-fronted storage |
| RU alt text | Гостиная виллы с садом со встроенным хранением с фасадами из ореха |
| EN caption | Living room |
| RU caption | Гостиная |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp02-living-gallery-ai-01` |
| CMS fields | `asset_id` BV-IMG-76 · `project_visual_id` CP-02 · `page_id` P16 · `section_id` CS07-1 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Beam rhythm, floor format and furniture match BV-IMG-73 seen from the opposite direction. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph looking into a single-storey villa living room from just inside the open sliding wall: pale oak ceiling beams run away from the camera, built-in walnut-fronted storage and a low pale oak sideboard occupy the rear wall, the sand-coloured sofa sits on a clay-toned rug, warm beige limestone runs underfoot and long late-afternoon shadows stretch into the room from behind the camera. Camera on a tripod at 1.5 m height, 40 mm full-frame equivalent, Straight-on into the room, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph looking into a single-storey villa living room from just inside the open sliding wall: pale oak ceiling beams run away from the camera, built-in walnut-fronted storage and a low pale oak sideboard occupy the rear wall, the sand-coloured sofa sits on a clay-toned rug, warm beige limestone runs underfoot and long late-afternoon shadows stretch into the room from behind the camera. Materials and finishes: warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.5 m height, Straight-on into the room, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no screen content, no new materials, no clutter, no text
```

#### BV-IMG-77 — Garden Villa gallery 2 — terrace and interior, wide frame

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-77` |
| Project Visual ID | `CP-02` |
| Page | P16 Garden Villa Concept |
| Section | `CS07` Gallery, WIDE frame |
| Purpose | Panoramic frame showing the inside-outside relationship in one view. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 16:9 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1350 minimum |
| Website export dimensions | 2400 × 1350 |
| Composition | Panoramic view along the facade from the terrace, half interior through the opening and half terrace. |
| Main subject | The continuity of floor and ceiling planes from inside to outside. |
| Background | Planting and boundary wall at the right end of the frame. |
| Architecture | Deep roof overhang, sliding wall pockets, pergola beyond. |
| Materials | Limestone floor and paving, oak beams, plaster, matte black frames. |
| Main colors | Warm beige, sand, green. |
| Accent colors | One terracotta throw on the terrace seating. |
| Lighting | Low warm light from the right along the facade, pergola shadow lines on the paving. |
| Time of day | Late afternoon. |
| Camera position | On the terrace, five metres from the facade, parallel to it. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Panoramic parallel to the facade |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The open threshold at the centre of the frame. |
| Safe area for website text and CTA | none required |
| Props and styling | Terrace dining table, two lounge chairs, one planted pot. |
| Elements that must not appear | No people, no pool, no barbecue, no lanterns, no text. |
| Recommended Midjourney parameters | --ar 16:9 --style raw --stylize 185 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Villa facade with an open sliding wall and shaded terrace |
| RU alt text | Фасад виллы с открытой раздвижной стеной и затенённой террасой |
| EN caption | Interior and terrace |
| RU caption | Интерьер и терраса |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp02-facade-wide-ai-01` |
| CMS fields | `asset_id` BV-IMG-77 · `project_visual_id` CP-02 · `page_id` P16 · `section_id` CS07-2 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 16:9 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2400 × 1350 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Floor material is visually continuous across the threshold; pergola matches BV-IMG-25; the mobile 4:3 crop keeps the threshold. |

**Full Midjourney prompt**

```
Photorealistic panoramic architectural photograph along the facade of a single-storey villa in late afternoon: the sliding glazed wall stands open at the centre with the living room visible inside, a deep roof overhang shades the threshold, warm beige limestone flows from the interior floor to the terrace paving, a slatted pergola with a dining table stands to the right and low warm sunlight casts long shadow lines across the paving. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, Panoramic parallel to the facade, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 16:9 --style raw --stylize 185 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic panoramic architectural photograph along the facade of a single-storey villa in late afternoon: the sliding glazed wall stands open at the centre with the living room visible inside, a deep roof overhang shades the threshold, warm beige limestone flows from the interior floor to the terrace paving, a slatted pergola with a dining table stands to the right and low warm sunlight casts long shadow lines across the paving. Materials and finishes: warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, Panoramic parallel to the facade, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no pool, no barbecue, no lanterns, no parasol, no text
```

#### BV-IMG-78 — Garden Villa gallery 3 — kitchen island detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-78` |
| Project Visual ID | `CP-02` |
| Page | P16 Garden Villa Concept |
| Section | `CS07` Gallery, detail |
| Purpose | Detail frame in the Garden Villa concept. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of the kitchen island end where a warm grey stone top meets a walnut-fronted base and an oak side panel. |
| Main subject | The stone, walnut and oak junction. |
| Background | Kitchen run softly out of focus. |
| Architecture | Not visible. |
| Materials | Warm grey honed stone, walnut fronts, pale oak panel, matte black recessed pull. |
| Main colors | Warm grey, walnut brown, pale oak. |
| Accent colors | None. |
| Lighting | Late afternoon light from the left grazing the stone edge and the walnut grain. |
| Time of day | Late afternoon. |
| Camera position | Sixty centimetres from the island end. |
| Camera height | 1.15 m |
| Lens or focal-length equivalent | 85 mm full-frame equivalent |
| Viewing angle | Slight angle along the island edge |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The walnut front's recessed pull. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No food, no utensils, no hands, no text, no brand marks. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Kitchen island detail with stone top, walnut front and oak panel |
| RU alt text | Деталь кухонного острова: камень, ореховый фасад и дубовая панель |
| EN caption | Island detail |
| RU caption | Деталь острова |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp02-island-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-78 · `project_visual_id` CP-02 · `page_id` P16 · `section_id` CS07-3 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Walnut stays an accent and does not dominate; stone tone matches the CP-02 sheet. |

**Full Midjourney prompt**

```
Photorealistic close detail of a kitchen island end in a villa: a honed warm grey stone top with a crisp edge sits above a walnut-fronted base cabinet with a recessed matte black finger pull, a pale oak side panel wraps the end of the island, and low late-afternoon light from the left grazes the stone edge and reveals the walnut grain at true scale. Camera on a tripod at 1.15 m height, 85 mm full-frame equivalent, Slight angle along the island edge, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close detail of a kitchen island end in a villa: a honed warm grey stone top with a crisp edge sits above a walnut-fronted base cabinet with a recessed matte black finger pull, a pale oak side panel wraps the end of the island, and low late-afternoon light from the left grazes the stone edge and reveals the walnut grain at true scale. Materials and finishes: warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance. Camera: 85 mm full-frame equivalent at 1.15 m height, Slight angle along the island edge, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no food, no utensils, no hands, no brand marks, no text, no high-gloss finish
```

#### BV-IMG-79 — Garden Villa gallery 4 — terrace threshold detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-79` |
| Project Visual ID | `CP-02` |
| Page | P16 Garden Villa Concept |
| Section | `CS07` Gallery, detail |
| Purpose | Second detail frame: the technical quality of the inside-outside threshold. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Low close view along the recessed track of the sliding wall where interior floor meets terrace paving. |
| Main subject | The flush threshold detail and the drainage slot. |
| Background | Terrace paving receding out of focus. |
| Architecture | Recessed sliding track, flush threshold, slim drainage slot. |
| Materials | Beige limestone floor and paving, matte black track and slot grating. |
| Main colors | Warm beige, matte black. |
| Accent colors | None. |
| Lighting | Low warm light raking along the threshold from the right. |
| Time of day | Late afternoon. |
| Camera position | Thirty centimetres above the floor at the threshold. |
| Camera height | 0.35 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Low angle along the threshold line |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The track and the drainage slot. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No feet, no people, no leaves, no debris, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Flush threshold detail between interior floor and terrace paving |
| RU alt text | Деталь плоского порога между полом интерьера и покрытием террасы |
| EN caption | Threshold detail |
| RU caption | Деталь порога |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp02-threshold-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-79 · `project_visual_id` CP-02 · `page_id` P16 · `section_id` CS07-4 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 55% · `focal_point_mobile` 50% / 55% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Floor joints align across the threshold; the track reads as a real recessed detail rather than a drawn line. |

**Full Midjourney prompt**

```
Photorealistic low-angle detail of a flush terrace threshold: a recessed matte black sliding track sits between a warm beige limestone interior floor and matching terrace paving, a slim matte black drainage slot runs parallel just outside, the joints align across the threshold and low late-afternoon light rakes along the line revealing the stone texture. Camera on a tripod at 0.35 m height, 50 mm full-frame equivalent, Low angle along the threshold line, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic low-angle detail of a flush terrace threshold: a recessed matte black sliding track sits between a warm beige limestone interior floor and matching terrace paving, a slim matte black drainage slot runs parallel just outside, the joints align across the threshold and low late-afternoon light rakes along the line revealing the stone texture. Materials and finishes: warm off-white hand-applied plaster walls, pale oak with selected walnut accents, warm beige limestone floor in 600 by 1200 format continuing out to a shaded terrace, warm grey honed stone surfaces, matte black hardware, low warm late-afternoon daylight from the left through a sliding glazed wall, warm-neutral white balance. Camera: 50 mm full-frame equivalent at 0.35 m height, Low angle along the threshold line, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no feet, no people, no leaves, no debris, no text, no misaligned joints
```

#### BV-IMG-80 — Tower Residence cover

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-80` |
| Project Visual ID | `CP-03` |
| Page | P17 Tower Residence Concept |
| Section | `CS02` Cover |
| Purpose | Cover of the Tower Residence concept page. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 2400 × 1500 desktop, 1200 × 1500 mobile |
| Composition | Wide view of the living area from the kitchen end, glazing filling the right of the frame. |
| Main subject | The whole living and dining space of the apartment. |
| Background | Continuous glazing with soft haze, no identifiable exterior. |
| Architecture | 2.8 m ceiling with the recessed linear channel, flush detailing. |
| Materials | Fine plaster, pale oak, beige large-format tile, warm grey stone, matte black mullions. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | One terracotta cushion. |
| Lighting | Even diffuse daylight from the glazing on the right. |
| Time of day | Mid-morning, slightly overcast. |
| Camera position | At the kitchen end, looking across the living area. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Wide three-quarter |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The seating group. |
| Safe area for website text and CTA | none required; the H1 sits above the image |
| Props and styling | One terracotta cushion, one ceramic bowl, one folded throw. |
| Elements that must not appear | No people, no recognisable skyline, no landmark, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Apartment living and dining area in the tower residence concept |
| RU alt text | Жилая и обеденная зона в концепции квартиры в башне |
| EN caption | Tower Residence — concept |
| RU caption | Квартира в башне — концепция |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp03-cover-wide-ai-01` |
| CMS fields | `asset_id` BV-IMG-80 · `project_visual_id` CP-03 · `page_id` P17 · `section_id` CS02 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 2400 × 1500 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required; the H1 sits above the image · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Same apartment as BV-IMG-33 from a different position; the exterior remains an indistinct haze. |

**Full Midjourney prompt**

```
Photorealistic wide architectural photograph of a contemporary apartment living and dining area seen from the kitchen end: a bone linen sofa with one muted terracotta cushion faces a low pale oak media unit, an oak dining table with four chairs sits beyond, continuous glazing with slim matte black mullions fills the right of the frame with a soft daylight haze outside, and a recessed linear light channel follows the plastered ceiling above honed beige large-format floor tiles. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, Wide three-quarter, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic wide architectural photograph of a contemporary apartment living and dining area seen from the kitchen end: a bone linen sofa with one muted terracotta cushion faces a low pale oak media unit, an oak dining table with four chairs sits beyond, continuous glazing with slim matte black mullions fills the right of the frame with a soft daylight haze outside, and a recessed linear light channel follows the plastered ceiling above honed beige large-format floor tiles. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, Wide three-quarter, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required; the H1 sits above the image free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no recognisable skyline, no landmark, no people, no clutter, no text
```

#### BV-IMG-81 — Tower Residence — concept layout drawing

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-81` |
| Project Visual ID | `CP-07` |
| Page | P17 Tower Residence Concept |
| Section | `CS05` Plan and design |
| Purpose | Layout drawing of the apartment concept. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` |
| Composition | Flat top-down view of an apartment plan with the corridor wardrobes and the galley kitchen shown. |
| Main subject | The apartment plan. |
| Background | Warm off-white paper. |
| Architecture | CP-03 geometry: 7 by 5 metre living area, 4.2 metre kitchen run, corridor storage. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey lines. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The living area of the plan. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone. |
| Elements that must not appear | No readable text, no numbers, no unit number, no building name, no title block, no stamp, no logo. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Concept plan of the tower residence apartment |
| RU alt text | План концепции квартиры в башне |
| EN caption | Concept layout |
| RU caption | Планировка концепции |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-cp03-layout-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-81 · `project_visual_id` CP-07 · `page_id` P17 · `section_id` CS05 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Kitchen run length and corridor storage agree with the CP-03 interior assets; no readable glyphs. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of an apartment plan sheet: an open living and dining area, a galley kitchen run along one wall, a corridor lined with full-height storage and two bedrooms with bathrooms are drawn in fine consistent line weights with wall poché, door swings and simple furniture blocks that match the concept interior, with a generous blank margin and no text, numbers or unit identification. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of an apartment plan sheet: an open living and dining area, a galley kitchen run along one wall, a corridor lined with full-height storage and two bedrooms with bathrooms are drawn in fine consistent line weights with wall poché, door swings and simple furniture blocks that match the concept interior, with a generous blank margin and no text, numbers or unit identification. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no unit number, no building name, no title block, no stamp, no logo
```

#### BV-IMG-82 — Tower Residence — material palette

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-82` |
| Project Visual ID | `CP-07` |
| Page | P17 Tower Residence Concept |
| Section | `CS06` Materials |
| Purpose | Palette composition on the apartment concept page. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Top-down flat lay framed slightly tighter than BV-IMG-63 so the two frames are not identical. |
| Main subject | The apartment materials at close range. |
| Background | Pale oak table surface. |
| Architecture | Not applicable. |
| Materials | Beige large-format tile, pale oak, warm grey stone, sheer linen, warm grey wool, matte black pull. |
| Main colors | Beige, warm grey, pale oak. |
| Accent colors | One muted terracotta textile square. |
| Lighting | Soft indirect daylight from the left. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above, close. |
| Camera height | 1.0 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Top-down, square |
| Depth of field | Moderate, f/4.5 equivalent |
| Focal point | The stone edge against the oak veneer. |
| Safe area for website text and CTA | none required |
| Props and styling | Samples only. |
| Elements that must not appear | No labels, no text, no hands, no extra materials. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Close view of the tower residence material palette |
| RU alt text | Крупный план палитры материалов квартиры в башне |
| EN caption | Materials of this concept |
| RU caption | Материалы концепции |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-cp03-materials-mood-ai-02` |
| CMS fields | `asset_id` BV-IMG-82 · `project_visual_id` CP-07 · `page_id` P17 · `section_id` CS06 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Not identical to BV-IMG-63; same materials at closer range; texture scale correct. |

**Full Midjourney prompt**

```
Photorealistic close top-down flat-lay of an apartment concept material palette: the edge of a honed beige large-format floor tile, pale oak veneer with fine straight grain, a warm grey stone offcut with delicate veining, a sheer linen swatch, a warm grey wool swatch, a slim matte black pull and one muted terracotta textile square, framed close so textures dominate, in soft indirect daylight from the left. Camera on a tripod at 1.0 m above the table height, 50 mm full-frame equivalent, Top-down, square, Moderate, f/4.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close top-down flat-lay of an apartment concept material palette: the edge of a honed beige large-format floor tile, pale oak veneer with fine straight grain, a warm grey stone offcut with delicate veining, a sheer linen swatch, a warm grey wool swatch, a slim matte black pull and one muted terracotta textile square, framed close so textures dominate, in soft indirect daylight from the left. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.0 m above the table height, Top-down, square, Moderate, f/4.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no labels, no text, no hands, no extra materials, no props
```

#### BV-IMG-83 — Tower Residence gallery 1 — living area

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-83` |
| Project Visual ID | `CP-03` |
| Page | P17 Tower Residence Concept |
| Section | `CS07` Gallery |
| Purpose | Room view of the living area from the window side. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Three-quarter view from beside the glazing back towards the corridor opening. |
| Main subject | The seating group with the corridor storage visible beyond. |
| Background | Corridor with full-height wardrobes. |
| Architecture | 2.8 m ceiling with the linear channel running towards the corridor. |
| Materials | Plaster, pale oak, beige tile, warm grey wool. |
| Main colors | Warm off-white, pale oak. |
| Accent colors | Terracotta cushion. |
| Lighting | Daylight from behind the camera, even and soft. |
| Time of day | Mid-morning. |
| Camera position | Beside the glazing, three metres from the sofa. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 45 mm full-frame equivalent |
| Viewing angle | Three-quarter |
| Depth of field | Deep, f/7.1 equivalent |
| Focal point | The sofa and the corridor opening beyond. |
| Safe area for website text and CTA | none required |
| Props and styling | Terracotta cushion, one ceramic bowl, one folded throw. |
| Elements that must not appear | No people, no screen content, no new furniture, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Apartment living area with media unit and corridor storage beyond |
| RU alt text | Жилая зона квартиры с ТВ-зоной и коридорным хранением за ней |
| EN caption | Living area |
| RU caption | Жилая зона |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp03-living-gallery-ai-01` |
| CMS fields | `asset_id` BV-IMG-83 · `project_visual_id` CP-03 · `page_id` P17 · `section_id` CS07-1 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Furniture and finishes agree with BV-IMG-33 and BV-IMG-80; the screen is blank and unbranded. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of an apartment living area from beside the glazing: the bone linen sofa with a muted terracotta cushion sits on a warm grey wool rug facing a low pale oak media unit with a blank, switched-off screen, the recessed ceiling channel leads the eye towards the corridor lined with full-height oak wardrobes and soft daylight fills the room from behind the camera. Camera on a tripod at 1.5 m height, 45 mm full-frame equivalent, Three-quarter, Deep, f/7.1 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of an apartment living area from beside the glazing: the bone linen sofa with a muted terracotta cushion sits on a warm grey wool rug facing a low pale oak media unit with a blank, switched-off screen, the recessed ceiling channel leads the eye towards the corridor lined with full-height oak wardrobes and soft daylight fills the room from behind the camera. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 45 mm full-frame equivalent at 1.5 m height, Three-quarter, Deep, f/7.1 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no screen content, no people, no new furniture, no clutter, no text
```

#### BV-IMG-84 — Tower Residence gallery 2 — kitchen, wide frame

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-84` |
| Project Visual ID | `CP-03` |
| Page | P17 Tower Residence Concept |
| Section | `CS07` Gallery, WIDE frame |
| Purpose | Panoramic frame of the kitchen and dining relationship. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 16:9 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1350 minimum |
| Website export dimensions | 2400 × 1350 |
| Composition | Panoramic view along the kitchen run with the dining table at the right end and the glazing beyond. |
| Main subject | The kitchen run in its full length. |
| Background | Dining area and glazing. |
| Architecture | Apartment ceiling with the linear channel running the length of the frame. |
| Materials | Pale oak, off-white uppers, warm grey stone worktop and splashback, matte black tap. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | Terracotta bowl on the dining table. |
| Lighting | Diffuse daylight from the right, under-cabinet lighting on. |
| Time of day | Mid-morning. |
| Camera position | At the corridor end of the kitchen, parallel to the run. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Panoramic parallel to the run |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The sink area at the centre of the run. |
| Safe area for website text and CTA | none required |
| Props and styling | One ceramic jug, one oak board, one terracotta bowl on the table. |
| Elements that must not appear | No food, no appliances on display, no people, no text. |
| Recommended Midjourney parameters | --ar 16:9 --style raw --stylize 185 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Galley kitchen and dining area in the tower residence concept |
| RU alt text | Кухня и обеденная зона в концепции квартиры в башне |
| EN caption | Kitchen and dining |
| RU caption | Кухня и обеденная зона |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp03-kitchen-wide-ai-02` |
| CMS fields | `asset_id` BV-IMG-84 · `project_visual_id` CP-03 · `page_id` P17 · `section_id` CS07-2 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 16:9 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2400 × 1350 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · The kitchen matches BV-IMG-34 and BV-IMG-52; the mobile 4:3 crop keeps the sink area and part of the dining table. |

**Full Midjourney prompt**

```
Photorealistic panoramic architectural photograph along an apartment galley kitchen: handleless pale oak base units carry a warm grey stone worktop that rises as a full-height splashback, off-white upper units run above with a concealed under-cabinet light, a matte black tap stands at the sink, and the oak dining table with four chairs and a terracotta bowl sits at the right end in front of the glazing. Camera on a tripod at 1.5 m height, 35 mm full-frame equivalent, Panoramic parallel to the run, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 16:9 --style raw --stylize 185 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic panoramic architectural photograph along an apartment galley kitchen: handleless pale oak base units carry a warm grey stone worktop that rises as a full-height splashback, off-white upper units run above with a concealed under-cabinet light, a matte black tap stands at the sink, and the oak dining table with four chairs and a terracotta bowl sits at the right end in front of the glazing. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.5 m height, Panoramic parallel to the run, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no food, no appliances on display, no people, no clutter, no text
```

#### BV-IMG-85 — Tower Residence gallery 3 — corridor storage

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-85` |
| Project Visual ID | `CP-03` |
| Page | P17 Tower Residence Concept |
| Section | `CS07` Gallery, detail |
| Purpose | Detail frame of the corridor joinery. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Angled view along the closed wardrobe run with the linear ceiling channel above. |
| Main subject | The run of closed oak fronts with even reveals. |
| Background | Living area light at the end of the corridor. |
| Architecture | Full-height joinery to the ceiling shadow gap. |
| Materials | Pale oak, matte black pulls, beige tile. |
| Main colors | Pale oak, warm off-white. |
| Accent colors | None. |
| Lighting | Daylight pulling from the living area at the end of the corridor. |
| Time of day | Mid-morning. |
| Camera position | At the bedroom end of the corridor. |
| Camera height | 1.5 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Angled along the run |
| Depth of field | Moderate, f/5.6 equivalent |
| Focal point | The pull on the nearest door. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No people, no belongings, no shoes, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Corridor with full-height oak wardrobe fronts |
| RU alt text | Коридор с дубовыми фасадами шкафов во всю высоту |
| EN caption | Corridor storage |
| RU caption | Хранение в коридоре |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp03-corridor-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-85 · `project_visual_id` CP-03 · `page_id` P17 · `section_id` CS07-3 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Reveal rhythm is consistent; perspective lines are straight; matches BV-IMG-11. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph along a corridor lined with full-height pale oak wardrobe fronts: even reveals run the length of the wall, slim matte black pulls repeat at a regular rhythm, a recessed linear light channel follows the ceiling and daylight from the living area at the end of the corridor grades softly along the oak. Camera on a tripod at 1.5 m height, 50 mm full-frame equivalent, Angled along the run, Moderate, f/5.6 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph along a corridor lined with full-height pale oak wardrobe fronts: even reveals run the length of the wall, slim matte black pulls repeat at a regular rhythm, a recessed linear light channel follows the ceiling and daylight from the living area at the end of the corridor grades softly along the oak. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 50 mm full-frame equivalent at 1.5 m height, Angled along the run, Moderate, f/5.6 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no belongings, no shoes, no clutter, no text
```

#### BV-IMG-86 — Tower Residence gallery 4 — stone and oak detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-86` |
| Project Visual ID | `CP-03` |
| Page | P17 Tower Residence Concept |
| Section | `CS07` Gallery, detail |
| Purpose | Close material frame closing the apartment gallery. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of the worktop return where the stone wraps down the end of the run beside an oak front. |
| Main subject | The stone waterfall return and its mitre. |
| Background | Floor tile out of focus below. |
| Architecture | Not visible. |
| Materials | Warm grey honed stone, pale oak, matte black grip. |
| Main colors | Warm grey, pale oak. |
| Accent colors | None. |
| Lighting | Soft daylight from the left with a gentle gradient down the stone. |
| Time of day | Mid-morning. |
| Camera position | Fifty centimetres from the return. |
| Camera height | 1.05 m |
| Lens or focal-length equivalent | 85 mm full-frame equivalent |
| Viewing angle | Slight angle along the return |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The mitred corner of the stone return. |
| Safe area for website text and CTA | none required |
| Props and styling | None. |
| Elements that must not appear | No objects, no hands, no brand marks, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Stone worktop return with a mitred corner beside an oak front |
| RU alt text | Боковой спуск каменной столешницы с запиленным углом рядом с дубовым фасадом |
| EN caption | Stone detail |
| RU caption | Деталь камня |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp03-stone-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-86 · `project_visual_id` CP-03 · `page_id` P17 · `section_id` CS07-4 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Veining continues around the mitre in a physically plausible way; stone tone matches BV-IMG-34. |

**Full Midjourney prompt**

```
Photorealistic close detail of a kitchen worktop return: honed warm grey stone wraps down the end of the run in a precise mitred waterfall beside a pale oak front with a slim matte black grip profile, the veining continues plausibly around the mitre, and soft daylight from the left grades gently down the stone face. Camera on a tripod at 1.05 m height, 85 mm full-frame equivalent, Slight angle along the return, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close detail of a kitchen worktop return: honed warm grey stone wraps down the end of the run in a precise mitred waterfall beside a pale oak front with a slim matte black grip profile, the veining continues plausibly around the mitre, and soft daylight from the left grades gently down the stone face. Materials and finishes: warm off-white fine plaster walls, pale oak joinery, honed beige large-format floor tile in 800 mm squares, warm grey stone worktop with fine veining, matte black slim profiles, diffuse mid-morning daylight from continuous glazing at the front left, hazy indistinct exterior with no recognisable buildings, warm-neutral white balance. Camera: 85 mm full-frame equivalent at 1.05 m height, Slight angle along the return, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no objects, no hands, no brand marks, no text, no mirror polish
```

#### BV-IMG-87 — Business District Office cover

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-87` |
| Project Visual ID | `CP-04` |
| Page | P18 Business District Office Concept |
| Section | `CS02` Cover |
| Purpose | Cover of the office concept page. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 2400 × 1500 desktop, 1200 × 1500 mobile |
| Composition | Wide view from the reception end across the open plan with the oak feature wall on the left and the glazed enclosure beyond. |
| Main subject | The office entrance sequence and the open plan behind it. |
| Background | Perimeter glazing with soft haze. |
| Architecture | 3.0 m ceiling with linear luminaires, 2.9 m glazed partitions, reception counter set off the panelled wall. |
| Materials | Oak panelling and counter, warm grey stone top, porcelain floor, matte black frames. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | Muted terracotta acoustic panel visible in the open plan. |
| Lighting | Even daylight from the perimeter on the left, luminaires softly on. |
| Time of day | Mid-morning. |
| Camera position | Just inside the entrance, centred on the reception counter. |
| Camera height | 1.6 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Wide one-point perspective past reception |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The reception counter edge. |
| Safe area for website text and CTA | none required; the H1 sits above the image |
| Props and styling | One ceramic vessel on the counter, empty desks beyond. |
| Elements that must not appear | No people, no branding, no signage, no screen content, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Office entrance with reception counter and open-plan workspace beyond |
| RU alt text | Входная зона офиса со стойкой ресепшн и офисом открытой планировки за ней |
| EN caption | Business District Office — concept |
| RU caption | Офис в деловом районе — концепция |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp04-cover-wide-ai-01` |
| CMS fields | `asset_id` BV-IMG-87 · `project_visual_id` CP-04 · `page_id` P18 · `section_id` CS02 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 2400 × 1500 desktop, 1200 × 1500 mobile · `focal_point_desktop` 52% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required; the H1 sits above the image · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Same office as BV-IMG-39 and BV-IMG-40; no brand name appears on the panelled wall or anywhere else. |

**Full Midjourney prompt**

```
Photorealistic wide architectural photograph of a contemporary office entrance: a pale oak reception counter with a warm grey stone top stands in front of an oak panelled wall with a fine vertical rhythm, the open plan with oak desks and warm grey task chairs extends beyond, a glazed meeting enclosure with slim matte black frames sits mid-space, recessed linear luminaires follow the flush ceiling and even daylight enters from the perimeter glazing on the left. Camera on a tripod at 1.6 m height, 35 mm full-frame equivalent, Wide one-point perspective past reception, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 190 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic wide architectural photograph of a contemporary office entrance: a pale oak reception counter with a warm grey stone top stands in front of an oak panelled wall with a fine vertical rhythm, the open plan with oak desks and warm grey task chairs extends beyond, a glazed meeting enclosure with slim matte black frames sits mid-space, recessed linear luminaires follow the flush ceiling and even daylight enters from the perimeter glazing on the left. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.6 m height, Wide one-point perspective past reception, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required; the H1 sits above the image free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no signage, no branding, no screen content, no text, no plants with artificial colour
```

#### BV-IMG-88 — Business District Office — concept layout drawing

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-88` |
| Project Visual ID | `CP-07` |
| Page | P18 Business District Office Concept |
| Section | `CS05` Plan and design |
| Purpose | Layout drawing of the office concept. |
| Asset type | `ai_drawing_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1800 minimum |
| Website export dimensions | 2000 px long side, displayed `contain` |
| Composition | Flat top-down view of an office floor plan with desk clusters, meeting enclosure and reception. |
| Main subject | The office plan. |
| Background | Warm off-white paper. |
| Architecture | CP-04 geometry: 16 by 9 metre open plan, 5 by 4 metre meeting room, reception. |
| Materials | Printed line work on paper. |
| Main colors | Warm off-white paper, graphite grey lines. |
| Accent colors | None. |
| Lighting | Even soft daylight across the sheet. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above the sheet. |
| Camera height | 1.2 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Flat top-down |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The meeting enclosure on the plan. |
| Safe area for website text and CTA | none required |
| Props and styling | The sheet alone. |
| Elements that must not appear | No readable text, no numbers, no company name, no floor number, no title block, no stamp, no logo. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Concept floor plan of the office fit-out |
| RU alt text | План концепции отделки офиса |
| EN caption | Concept layout |
| RU caption | Планировка концепции |
| AI disclosure EN | `Illustrative drawing · AI-generated image` |
| AI disclosure RU | `Иллюстративный чертёж · Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-cp04-layout-plan-ai-01` |
| CMS fields | `asset_id` BV-IMG-88 · `project_visual_id` CP-07 · `page_id` P18 · `section_id` CS05 · `asset_type` ai_drawing_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2000 px long side, displayed `contain` · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Desk and enclosure positions correspond to the CP-04 interior assets; no readable glyphs anywhere. |

**Full Midjourney prompt**

```
Photorealistic flat top-down photograph of an office floor plan sheet: an open-plan area with regular desk clusters drawn as simple rectangles, a glazed meeting enclosure indicated by double lines, a reception counter, a storage wall and service rooms are laid out in fine consistent line weights with wall poché and door swings, on warm off-white paper with a generous margin and no text or numbers. Camera on a tripod at 1.2 m above the table height, 50 mm full-frame equivalent, Flat top-down, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 100 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic flat top-down photograph of an office floor plan sheet: an open-plan area with regular desk clusters drawn as simple rectangles, a glazed meeting enclosure indicated by double lines, a reception counter, a storage wall and service rooms are laid out in fine consistent line weights with wall poché and door swings, on warm off-white paper with a generous margin and no text or numbers. Materials and finishes: clean architectural line drawing printed on warm off-white paper, fine consistent line weights, light hatching and thin dimension lines, no readable text, no numbers, no title block, no stamp, no signature, no logo, evenly lit flat top-down view, subtle paper texture, neutral white balance. Camera: 50 mm full-frame equivalent at 1.2 m above the table height, Flat top-down, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no numbers, no company name, no floor number, no title block, no stamp, no logo
```

#### BV-IMG-89 — Business District Office — material palette

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-89` |
| Project Visual ID | `CP-07` |
| Page | P18 Business District Office Concept |
| Section | `CS06` Materials |
| Purpose | Palette composition on the office concept page. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Top-down flat lay framed tighter than BV-IMG-64 so the frames differ. |
| Main subject | The office materials at close range. |
| Background | Pale oak table surface. |
| Architecture | Not applicable. |
| Materials | Warm grey porcelain, oak veneer, wool loop carpet, acoustic felt, matte black profile, stone offcut. |
| Main colors | Warm grey, pale oak. |
| Accent colors | One muted terracotta felt square. |
| Lighting | Soft indirect daylight from the left. |
| Time of day | Mid-morning, overcast. |
| Camera position | Directly above, close. |
| Camera height | 1.0 m above the table |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Top-down, square |
| Depth of field | Moderate, f/4.5 equivalent |
| Focal point | The carpet and felt textures. |
| Safe area for website text and CTA | none required |
| Props and styling | Samples only. |
| Elements that must not appear | No labels, no text, no hands, no extra materials. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Close view of the office concept material palette |
| RU alt text | Крупный план палитры материалов концепции офиса |
| EN caption | Materials of this concept |
| RU caption | Материалы концепции |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-cp04-materials-mood-ai-02` |
| CMS fields | `asset_id` BV-IMG-89 · `project_visual_id` CP-07 · `page_id` P18 · `section_id` CS06 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Not identical to BV-IMG-64; carpet pile and felt weave read at correct scale. |

**Full Midjourney prompt**

```
Photorealistic close top-down flat-lay of an office concept material palette: a warm grey matte porcelain tile edge, pale oak veneer, a wool loop carpet square with visible pile, a warm grey acoustic felt panel sample with a muted terracotta felt square beside it, a matte black glazing profile offcut and a warm grey stone counter offcut, framed close so the textures dominate, in soft indirect daylight from the left. Camera on a tripod at 1.0 m above the table height, 50 mm full-frame equivalent, Top-down, square, Moderate, f/4.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close top-down flat-lay of an office concept material palette: a warm grey matte porcelain tile edge, pale oak veneer, a wool loop carpet square with visible pile, a warm grey acoustic felt panel sample with a muted terracotta felt square beside it, a matte black glazing profile offcut and a warm grey stone counter offcut, framed close so the textures dominate, in soft indirect daylight from the left. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.0 m above the table height, Top-down, square, Moderate, f/4.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no labels, no text, no hands, no domestic fabrics, no glossy laminate
```

#### BV-IMG-90 — Office gallery 1 — open plan, wide frame

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-90` |
| Project Visual ID | `CP-04` |
| Page | P18 Business District Office Concept |
| Section | `CS07` Gallery, WIDE frame |
| Purpose | Panoramic frame of the workspace. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 16:9 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1350 minimum |
| Website export dimensions | 2400 × 1350 |
| Composition | Panoramic view across the desk clusters with the perimeter glazing running along the left edge. |
| Main subject | The workspace layout and its lighting rhythm. |
| Background | Storage wall and the meeting enclosure at the right end. |
| Architecture | Flush ceiling with regular linear luminaires, 3.0 m height. |
| Materials | Oak, warm grey porcelain, wool upholstery, matte black. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | Terracotta acoustic panel. |
| Lighting | Even daylight from the left with luminaires softly on. |
| Time of day | Mid-morning. |
| Camera position | Mid-space, parallel to the glazing. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Panoramic across the desks |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The second desk cluster. |
| Safe area for website text and CTA | none required |
| Props and styling | Empty desks, closed monitor arms, two ceramic cups. |
| Elements that must not appear | No people, no branding, no screen content, no papers, no text. |
| Recommended Midjourney parameters | --ar 16:9 --style raw --stylize 185 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Panoramic view of the open-plan office concept |
| RU alt text | Панорамный вид офиса открытой планировки в концепции |
| EN caption | Open-plan workspace |
| RU caption | Рабочее пространство |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp04-openplan-wide-ai-02` |
| CMS fields | `asset_id` BV-IMG-90 · `project_visual_id` CP-04 · `page_id` P18 · `section_id` CS07-1 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 16:9 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2400 × 1350 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Luminaire rhythm and desk layout agree with BV-IMG-39; the mobile 4:3 crop keeps one full desk cluster. |

**Full Midjourney prompt**

```
Photorealistic panoramic architectural photograph across an open-plan office: two clusters of pale oak desks with matte black legs and warm grey wool task chairs sit under a regular rhythm of recessed linear luminaires, the perimeter glazing runs along the left edge with a soft daylight haze outside, an oak storage wall and a glazed meeting enclosure close the right end and warm grey porcelain covers the floor. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, Panoramic across the desks, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 16:9 --style raw --stylize 185 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic panoramic architectural photograph across an open-plan office: two clusters of pale oak desks with matte black legs and warm grey wool task chairs sit under a regular rhythm of recessed linear luminaires, the perimeter glazing runs along the left edge with a soft daylight haze outside, an oak storage wall and a glazed meeting enclosure close the right end and warm grey porcelain covers the floor. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, Panoramic across the desks, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no branding, no screen content, no papers, no cables, no text
```

#### BV-IMG-91 — Office gallery 2 — meeting room from the open plan

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-91` |
| Project Visual ID | `CP-04` |
| Page | P18 Business District Office Concept |
| Section | `CS07` Gallery |
| Purpose | Room view of the meeting enclosure in context. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Three-quarter view of the glazed enclosure from the open plan, desks in the near foreground. |
| Main subject | The enclosure and its relationship to the workspace. |
| Background | Oak feature wall beyond the enclosure. |
| Architecture | 2.9 m glazed partition with a full-height glazed door. |
| Materials | Glass, matte black frames, oak, wool carpet. |
| Main colors | Warm grey, pale oak. |
| Accent colors | Terracotta panel visible inside. |
| Lighting | Daylight from the left passing through the glass with correct reflections. |
| Time of day | Mid-morning. |
| Camera position | Two desks back from the enclosure. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Three-quarter to the glazed wall |
| Depth of field | Deep, f/7.1 equivalent |
| Focal point | The glazed door frame. |
| Safe area for website text and CTA | none required |
| Props and styling | Empty meeting table, one carafe. |
| Elements that must not appear | No people, no writing on glass, no branding, no screen content, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Glazed meeting enclosure seen from the open-plan office |
| RU alt text | Стеклянная переговорная, вид из офиса открытой планировки |
| EN caption | Meeting room |
| RU caption | Переговорная |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp04-meeting-gallery-ai-01` |
| CMS fields | `asset_id` BV-IMG-91 · `project_visual_id` CP-04 · `page_id` P18 · `section_id` CS07-2 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Glass reflections contain no artefacts or duplicated geometry; matches BV-IMG-41 interior. |

**Full Midjourney prompt**

```
Photorealistic architectural photograph of a glazed meeting enclosure seen from the open-plan office: slim matte black frames and a full-height glazed door define the volume, inside a pale oak table with warm grey wool chairs sits on wool carpet beneath a linear pendant, an oak panelled wall closes the view beyond and daylight from the left produces clean, physically correct reflections on the glass. Camera on a tripod at 1.55 m height, 40 mm full-frame equivalent, Three-quarter to the glazed wall, Deep, f/7.1 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic architectural photograph of a glazed meeting enclosure seen from the open-plan office: slim matte black frames and a full-height glazed door define the volume, inside a pale oak table with warm grey wool chairs sits on wool carpet beneath a linear pendant, an oak panelled wall closes the view beyond and daylight from the left produces clean, physically correct reflections on the glass. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 40 mm full-frame equivalent at 1.55 m height, Three-quarter to the glazed wall, Deep, f/7.1 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no people, no writing on glass, no branding, no screen content, no text
```

#### BV-IMG-92 — Office gallery 3 — reception detail

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-92` |
| Project Visual ID | `CP-04` |
| Page | P18 Business District Office Concept |
| Section | `CS07` Gallery, detail |
| Purpose | Detail frame closing the office gallery. |
| Asset type | `ai_concept_project` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of the reception counter's stone top meeting the oak carcass with the panelled wall behind. |
| Main subject | The counter edge and the panel rhythm behind it. |
| Background | Oak panelled wall in soft focus. |
| Architecture | Counter with a shadow gap to the wall. |
| Materials | Warm grey stone, pale oak, matte black toe line. |
| Main colors | Warm grey, pale oak. |
| Accent colors | None. |
| Lighting | Daylight from the left grazing the stone edge. |
| Time of day | Mid-morning. |
| Camera position | One metre from the counter corner. |
| Camera height | 1.2 m |
| Lens or focal-length equivalent | 70 mm full-frame equivalent |
| Viewing angle | Slight angle along the counter |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The stone edge above the oak carcass. |
| Safe area for website text and CTA | none required |
| Props and styling | One ceramic vessel at the frame edge. |
| Elements that must not appear | No branding, no signage, no papers, no hands, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Detail of the reception counter stone top and oak carcass |
| RU alt text | Деталь каменной столешницы стойки ресепшн и дубового корпуса |
| EN caption | Reception detail |
| RU caption | Деталь ресепшн |
| AI disclosure EN | `Concept project · AI-generated visualization` |
| AI disclosure RU | `Концептуальный проект · AI-визуализация` |
| Recommended filename | `bv-cp04-reception-gallery-ai-01` |
| CMS fields | `asset_id` BV-IMG-92 · `project_visual_id` CP-04 · `page_id` P18 · `section_id` CS07-3 · `asset_type` ai_concept_project · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No brand mark anywhere; stone and oak match BV-IMG-42. |

**Full Midjourney prompt**

```
Photorealistic close detail of an office reception counter: a honed warm grey stone top with a crisp edge sits above a pale oak carcass with a recessed matte black toe line, the oak panelled wall behind shows a fine vertical rhythm softly out of focus, one ceramic vessel stands at the edge of the frame and daylight from the left grazes the stone. Camera on a tripod at 1.2 m height, 70 mm full-frame equivalent, Slight angle along the counter, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close detail of an office reception counter: a honed warm grey stone top with a crisp edge sits above a pale oak carcass with a recessed matte black toe line, the oak panelled wall behind shows a fine vertical rhythm softly out of focus, one ceramic vessel stands at the edge of the frame and daylight from the left grazes the stone. Materials and finishes: warm off-white plaster walls with one pale oak panelled feature wall, warm grey large-format matte porcelain floor, warm grey wool loop carpet in the meeting enclosure, warm grey stone counter top, matte black frames and hardware, even mid-morning daylight from perimeter glazing on the left, warm-neutral white balance. Camera: 70 mm full-frame equivalent at 1.2 m height, Slight angle along the counter, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no branding, no signage, no papers, no hands, no text
```

#### BV-IMG-93 — Process hero — working desk

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-93` |
| Project Visual ID | `CP-07` |
| Page | P19 Our Process |
| Section | `PR01` Hero |
| Purpose | Hero of the process page: documentation and samples mid-work. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | View across the studio table at a shallow angle with drawings, samples and instruments arranged in a used, mid-work state. |
| Main subject | The working desk in use. |
| Background | Studio wall and plan chest softly out of focus. |
| Architecture | Studio with the steel-framed window on the left. |
| Materials | Oak table, paper drawings, stone and timber samples, matte black instruments, a closed laptop. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | One clay fabric swatch. |
| Lighting | Daylight from the left window, soft directional shadows from the instruments. |
| Time of day | Mid-morning, overcast. |
| Camera position | At the short end of the table, camera low across the surface. |
| Camera height | 1.25 m |
| Lens or focal-length equivalent | 40 mm full-frame equivalent |
| Viewing angle | Shallow angle across the table |
| Depth of field | Moderate, f/4 equivalent, near items sharp |
| Focal point | The scale rule and the drawing beneath it. |
| Safe area for website text and CTA | the left half on desktop, the lower third on mobile |
| Props and styling | Drawings, scale rule, pencil, tape measure, samples, a closed laptop. |
| Elements that must not appear | No faces, no readable text or numbers on any drawing, no branded laptop screen, no logos, no text. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Drawings, instruments and material samples on a studio work table |
| RU alt text | Чертежи, инструменты и образцы материалов на рабочем столе студии |
| EN caption | Project documentation and material samples |
| RU caption | Проектная документация и образцы материалов |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-desk-hero-ai-01` |
| CMS fields | `asset_id` BV-IMG-93 · `project_visual_id` CP-07 · `page_id` P19 · `section_id` PR01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 55% · `focal_point_mobile` 50% / 50% · `safe_area` the left half on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No readable character anywhere on the drawings at full zoom; left half calm enough for the H1. |

**Full Midjourney prompt**

```
Photorealistic photograph across a design studio work table in a used mid-work state: architectural drawings with fine generic line work overlap at slight angles, a matte black scale rule and a pencil rest on top, a tape measure and stone, timber and fabric samples sit alongside, a closed laptop is pushed to one side, and soft daylight from a large steel-framed window on the left casts gentle directional shadows. Camera on a tripod at 1.25 m height, 40 mm full-frame equivalent, Shallow angle across the table, Moderate, f/4 equivalent, near items sharp, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic photograph across a design studio work table in a used mid-work state: architectural drawings with fine generic line work overlap at slight angles, a matte black scale rule and a pencil rest on top, a tape measure and stone, timber and fabric samples sit alongside, a closed laptop is pushed to one side, and soft daylight from a large steel-framed window on the left casts gentle directional shadows. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 40 mm full-frame equivalent at 1.25 m height, Shallow angle across the table, Moderate, f/4 equivalent, near items sharp. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left half on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no faces, no readable text, no numbers, no laptop screen content, no logos, no coffee cups with branding
```

#### BV-IMG-94 — Process — progress reporting and checking

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-94` |
| Project Visual ID | `CP-07` |
| Page | P19 Our Process |
| Section | `PR04` Decisions you can follow |
| Purpose | Vertical image beside the reporting and control text. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 1536 × 1920 minimum |
| Website export dimensions | 1200 × 1500 |
| Composition | Vertical view of a checklist sheet on a clipboard resting on a drawing, a pencil beside it, seen from above at an angle. |
| Main subject | The checklist and the drawing beneath it. |
| Background | Oak table surface. |
| Architecture | Not visible. |
| Materials | Paper, matte black clipboard and pencil, oak table. |
| Main colors | Warm off-white, matte black, pale oak. |
| Accent colors | None. |
| Lighting | Daylight from the left with a soft shadow from the clipboard edge. |
| Time of day | Mid-morning, overcast. |
| Camera position | Standing over the table, looking down at 40 degrees. |
| Camera height | 1.4 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | High three-quarter |
| Depth of field | Moderate, f/4 equivalent |
| Focal point | The checklist rows. |
| Safe area for website text and CTA | none required |
| Props and styling | Clipboard, pencil, drawing, one stone sample at the frame edge. |
| Elements that must not appear | No readable text, no names, no numbers, no signatures, no company stamps, no faces, no phone screens. |
| Recommended Midjourney parameters | --ar 4:5 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Checklist on a clipboard resting on a project drawing |
| RU alt text | Чек-лист на планшете поверх проектного чертежа |
| EN caption | Progress reporting and checking |
| RU caption | Отчётность и проверка |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp07-report-split-ai-01` |
| CMS fields | `asset_id` BV-IMG-94 · `project_visual_id` CP-07 · `page_id` P19 · `section_id` PR04 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1200 × 1500 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Tick boxes and rules are empty; nothing reads as handwriting or a signature; no personal data appears. |

**Full Midjourney prompt**

```
Photorealistic close photograph of a matte black clipboard resting on an architectural drawing on a pale oak table: the clipboard holds a checklist sheet ruled into rows with small empty tick boxes and blank lines that contain no readable writing, a pencil lies alongside, a stone sample sits at the edge of the frame and daylight from the left casts a soft shadow from the clipboard edge. Camera on a tripod at 1.4 m height, 50 mm full-frame equivalent, High three-quarter, Moderate, f/4 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:5 --style raw --stylize 160 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close photograph of a matte black clipboard resting on an architectural drawing on a pale oak table: the clipboard holds a checklist sheet ruled into rows with small empty tick boxes and blank lines that contain no readable writing, a pencil lies alongside, a stone sample sits at the edge of the frame and daylight from the left casts a soft shadow from the clipboard edge. Materials and finishes: warm off-white plaster walls, a pale oak work table with a matte oil finish, honed beige limestone floor, stone and timber samples, linen and wool swatches in sand, bone, clay and warm grey tones, soft even daylight from a large steel-framed window on the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.4 m height, High three-quarter, Moderate, f/4 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no readable text, no handwriting, no names, no numbers, no signature, no stamp, no faces, no phone screen
```

#### BV-IMG-95 — About hero — craft and material composition

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-95` |
| Project Visual ID | `CP-06` |
| Page | P20 Our Story |
| Section | `A01` Hero |
| Purpose | Hero of the about page: work and craft rather than people. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 8:5 |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 2400 × 1500 minimum |
| Website export dimensions | 1920 × 1200 desktop, 1200 × 1500 mobile |
| Composition | Wide view of a finished cabinet unit standing wrapped for dispatch beside a stack of oak panels, workshop depth behind. |
| Main subject | The finished piece at the end of production. |
| Background | Workshop floor with benches and clerestory light receding. |
| Architecture | Industrial workshop, white blockwork, exposed steel structure, clerestory glazing on the right. |
| Materials | Pale oak unit, grey protective wrap partly folded back, warm grey concrete floor, steel benches. |
| Main colors | Warm grey, off-white, pale oak. |
| Accent colors | None. |
| Lighting | High clerestory daylight from the right, neutral LED fill overhead. |
| Time of day | Mid-morning. |
| Camera position | Five metres from the unit, slightly to the left. |
| Camera height | 1.55 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | Three-quarter to the unit with depth into the workshop |
| Depth of field | Deep, f/7.1 equivalent |
| Focal point | The exposed oak face of the unit. |
| Safe area for website text and CTA | the left third on desktop, the lower third on mobile |
| Props and styling | Protective wrap, a felt-lined trolley, stacked panels. |
| Elements that must not appear | No faces, no full figures, no brand names, no readable labels, no text, no address markings. |
| Recommended Midjourney parameters | --ar 8:5 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Finished cabinet unit prepared for dispatch in the production space |
| RU alt text | Готовый мебельный блок, подготовленный к отправке на производстве |
| EN caption | Production — concept |
| RU caption | Производство — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp06-finished-hero-ai-01` |
| CMS fields | `asset_id` BV-IMG-95 · `project_visual_id` CP-06 · `page_id` P20 · `section_id` A01 · `asset_type` ai_illustration · `aspect_ratio_desktop` 8:5 · `aspect_ratio_mobile` 4:5 · `export_dimensions` 1920 × 1200 desktop, 1200 × 1500 mobile · `focal_point_desktop` 55% / 50% · `focal_point_mobile` 50% / 45% · `safe_area` the left third on desktop, the lower third on mobile · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · No person, face or readable label appears; left third calm for the H1; oak tone matches the interior assets. |

**Full Midjourney prompt**

```
Photorealistic workshop photograph of a finished pale oak cabinet unit standing ready for dispatch: a grey protective wrap is folded back to reveal the oak face and a matte black handle, a felt-lined trolley with stacked oak panels stands alongside, white blockwork walls and a sealed warm grey concrete floor recede into the workshop depth and high clerestory daylight from the right models the surfaces. Camera on a tripod at 1.55 m height, 35 mm full-frame equivalent, Three-quarter to the unit with depth into the workshop, Deep, f/7.1 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 8:5 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic workshop photograph of a finished pale oak cabinet unit standing ready for dispatch: a grey protective wrap is folded back to reveal the oak face and a matte black handle, a felt-lined trolley with stacked oak panels stands alongside, white blockwork walls and a sealed warm grey concrete floor recede into the workshop depth and high clerestory daylight from the right models the surfaces. Materials and finishes: white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance. Camera: 35 mm full-frame equivalent at 1.55 m height, Three-quarter to the unit with depth into the workshop, Deep, f/7.1 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the left third on desktop, the lower third on mobile free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no faces, no figures, no brand names, no readable labels, no address markings, no text
```

#### BV-IMG-96 — Production wide view

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-96` |
| Project Visual ID | `CP-06` |
| Page | P20 Our Story |
| Section | `A04` Production |
| Purpose | Wide establishing frame of the production environment and poster frame for the production video. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 16:9 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2400 × 1350 minimum |
| Website export dimensions | 2400 × 1350 |
| Composition | Wide view down the length of the working floor with benches on the left, machinery in the centre and stone slabs racked on the right. |
| Main subject | The production floor as a whole. |
| Background | Clerestory glazing high on the right, steel roof structure above. |
| Architecture | 20 by 12 metre working floor, 6 m to the underside of the steel structure. |
| Materials | White blockwork, warm grey concrete, oak panels, warm grey stone slabs, machine steel. |
| Main colors | Warm grey, off-white, pale oak. |
| Accent colors | None. |
| Lighting | High daylight from the clerestory on the right mixed with neutral LED battens. |
| Time of day | Mid-morning. |
| Camera position | At one end of the working floor, centred. |
| Camera height | 1.6 m |
| Lens or focal-length equivalent | 35 mm full-frame equivalent |
| Viewing angle | One-point perspective down the floor |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The central machine bay. |
| Safe area for website text and CTA | none required |
| Props and styling | Work in progress on the benches, a felt-lined trolley, clamps, an A-frame stone rack. |
| Elements that must not appear | No faces, no full figures, no machine brand names, no readable work orders, no unsafe practice, no text. |
| Recommended Midjourney parameters | --ar 16:9 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Production floor with workbenches, machinery and stone slabs |
| RU alt text | Производственный цех с верстаками, станками и каменными слэбами |
| EN caption | Production — concept |
| RU caption | Производство — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp06-floor-wide-ai-01` |
| CMS fields | `asset_id` BV-IMG-96 · `project_visual_id` CP-06 · `page_id` P20 · `section_id` A04-1 · `asset_type` ai_illustration · `aspect_ratio_desktop` 16:9 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 2400 × 1350 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Reads as a working facility with depth rather than a storage room; no identifiable location, signage or brand; also serves as the poster frame for BV-VID-03. |

**Full Midjourney prompt**

```
Photorealistic wide workshop photograph down the length of a production floor: solid benches with cabinet work in progress line the left, a machine bay occupies the centre, warm grey stone slabs stand on an A-frame rack to the right, white blockwork walls and a sealed warm grey concrete floor define the space, high clerestory daylight enters from the right and neutral LED battens run beneath the exposed steel roof structure. Camera on a tripod at 1.6 m height, 35 mm full-frame equivalent, One-point perspective down the floor, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 16:9 --style raw --stylize 180 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic wide workshop photograph down the length of a production floor: solid benches with cabinet work in progress line the left, a machine bay occupies the centre, warm grey stone slabs stand on an A-frame rack to the right, white blockwork walls and a sealed warm grey concrete floor define the space, high clerestory daylight enters from the right and neutral LED battens run beneath the exposed steel roof structure. Materials and finishes: white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance. Camera: 35 mm full-frame equivalent at 1.6 m height, One-point perspective down the floor, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no faces, no figures, no machine brand names, no readable work orders, no unsafe practice, no text
```

#### BV-IMG-97 — Production detail — cabinetry

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-97` |
| Project Visual ID | `CP-06` |
| Page | P20 Our Story |
| Section | `A04` Production |
| Purpose | Close production detail: cabinet work. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of a hinge being fitted into a machined cup on an oak door front on the bench, hands not in frame. |
| Main subject | The hinge, the machined cup and the oak edge. |
| Background | Bench surface and a stack of panels out of focus. |
| Architecture | Not visible. |
| Materials | Pale oak, matte black hinge, steel bench, grey felt. |
| Main colors | Pale oak, matte black, warm grey. |
| Accent colors | None. |
| Lighting | Side daylight from the clerestory, raking across the door face. |
| Time of day | Mid-morning. |
| Camera position | Forty centimetres from the door edge. |
| Camera height | 1.2 m |
| Lens or focal-length equivalent | 85 mm full-frame equivalent |
| Viewing angle | Slight angle along the door edge |
| Depth of field | Shallow to moderate, f/3.2 equivalent |
| Focal point | The hinge cup. |
| Safe area for website text and CTA | none required |
| Props and styling | One screwdriver on the felt beside the door. |
| Elements that must not appear | No hands, no faces, no tool branding, no readable labels, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Concealed hinge fitted into a machined cup on an oak door |
| RU alt text | Скрытая петля в подготовленном гнезде на дубовом фасаде |
| EN caption | Cabinet assembly — concept |
| RU caption | Сборка мебели — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp06-cabinetry-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-97 · `project_visual_id` CP-06 · `page_id` P20 · `section_id` A04-2 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Hinge geometry and cup diameter are physically plausible; no branding on the hardware. |

**Full Midjourney prompt**

```
Photorealistic close manufacturing detail: a matte black concealed hinge sits in a precisely machined cup on the edge of a pale oak door front resting on grey felt over a steel bench, a screwdriver lies alongside, and raking daylight from a high clerestory reveals the clean machining and the fine oak grain. Camera on a tripod at 1.2 m height, 85 mm full-frame equivalent, Slight angle along the door edge, Shallow to moderate, f/3.2 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close manufacturing detail: a matte black concealed hinge sits in a precisely machined cup on the edge of a pale oak door front resting on grey felt over a steel bench, a screwdriver lies alongside, and raking daylight from a high clerestory reveals the clean machining and the fine oak grain. Materials and finishes: white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance. Camera: 85 mm full-frame equivalent at 1.2 m height, Slight angle along the door edge, Shallow to moderate, f/3.2 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no hands, no faces, no tool branding, no readable labels, no text
```

#### BV-IMG-98 — Production detail — stone and glass

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-98` |
| Project Visual ID | `CP-06` |
| Page | P20 Our Story |
| Section | `A04` Production |
| Purpose | Second production detail: stone and glass work. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Close view of a warm grey stone edge being profiled on a bench, with a clear glass panel resting in a felt-lined rack behind. |
| Main subject | The stone edge profile and the glass panel behind. |
| Background | Felt-lined glass rack, workshop depth out of focus. |
| Architecture | Not visible. |
| Materials | Warm grey honed stone, clear low-iron glass, grey felt, steel bench. |
| Main colors | Warm grey, off-white. |
| Accent colors | None. |
| Lighting | Side daylight showing the stone's honed surface and a clean edge highlight on the glass. |
| Time of day | Mid-morning. |
| Camera position | Half a metre from the stone edge. |
| Camera height | 1.2 m |
| Lens or focal-length equivalent | 70 mm full-frame equivalent |
| Viewing angle | Low angle along the stone edge |
| Depth of field | Shallow to moderate, f/3.5 equivalent |
| Focal point | The profiled stone edge. |
| Safe area for website text and CTA | none required |
| Props and styling | A water spray bottle without labels, a felt pad. |
| Elements that must not appear | No hands, no faces, no brand names, no readable labels, no unsafe practice, no text. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Stone slab with a profiled edge and a glass panel in a rack |
| RU alt text | Каменный слэб с обработанной кромкой и стеклянная панель в стойке |
| EN caption | Stone and glass work — concept |
| RU caption | Работы по камню и стеклу — концепция |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-cp06-stone-detail-ai-01` |
| CMS fields | `asset_id` BV-IMG-98 · `project_visual_id` CP-06 · `page_id` P20 · `section_id` A04-3 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Glass edge reflections are physically correct with no artefacts; stone tone matches the interior worktops. |

**Full Midjourney prompt**

```
Photorealistic close manufacturing detail of stone and glass work: a warm grey honed stone slab rests on a felt-padded steel bench with a freshly profiled edge catching a soft highlight, a clear low-iron glass panel stands in a felt-lined rack behind with a clean polished edge, an unlabelled spray bottle sits nearby and side daylight reveals the true surface texture of both materials. Camera on a tripod at 1.2 m height, 70 mm full-frame equivalent, Low angle along the stone edge, Shallow to moderate, f/3.5 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic close manufacturing detail of stone and glass work: a warm grey honed stone slab rests on a felt-padded steel bench with a freshly profiled edge catching a soft highlight, a clear low-iron glass panel stands in a felt-lined rack behind with a clean polished edge, an unlabelled spray bottle sits nearby and side daylight reveals the true surface texture of both materials. Materials and finishes: white painted blockwork walls with light honest wear, sealed warm grey concrete floor, pale oak panels and cabinet carcasses in progress, warm grey stone slabs on an A-frame rack, raw machine steel and matte black tooling, high daylight from clerestory glazing on the right mixed with neutral overhead LED battens, neutral-warm white balance. Camera: 70 mm full-frame equivalent at 1.2 m height, Low angle along the stone edge, Shallow to moderate, f/3.5 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no hands, no faces, no brand names, no readable labels, no unsafe practice, no text
```

#### BV-IMG-99 — Brand still life

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-99` |
| Project Visual ID | `BRAND` |
| Page | P20 Our Story |
| Section | `A07` Brand composition |
| Purpose | Quiet brand composition closing the about page. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 4:3 |
| Mobile aspect ratio | 4:3 |
| Recommended generation resolution | 2048 × 1536 minimum |
| Website export dimensions | 1600 × 1200 |
| Composition | Still life of the four core materials arranged vertically against a plastered wall: an oak board leaning, a stone offcut, folded linen and a matte black handle on a ledge. |
| Main subject | The material family as a brand statement. |
| Background | Warm off-white plastered wall. |
| Architecture | A simple plaster ledge. |
| Materials | Pale oak, warm grey stone, natural linen, matte black metal. |
| Main colors | Warm off-white, pale oak, warm grey, bone. |
| Accent colors | One muted terracotta ceramic form. |
| Lighting | Soft even daylight from the left, one gentle shadow cast to the right. |
| Time of day | Mid-morning, overcast. |
| Camera position | One and a half metres from the ledge, square on. |
| Camera height | 1.3 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Straight-on, quiet symmetry |
| Depth of field | Moderate, f/4 equivalent |
| Focal point | The stone offcut at the centre. |
| Safe area for website text and CTA | none required |
| Props and styling | Only the four materials and one ceramic form. |
| Elements that must not appear | No branding, no logo, no text, no hands, no additional objects. |
| Recommended Midjourney parameters | --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Still life of oak, stone, linen and matte black hardware |
| RU alt text | Композиция из дуба, камня, льна и чёрной фурнитуры |
| EN caption | Materials we build with |
| RU caption | Материалы, с которыми мы работаем |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-brand-stilllife-ai-01` |
| CMS fields | `asset_id` BV-IMG-99 · `project_visual_id` BRAND · `page_id` P20 · `section_id` A07 · `asset_type` ai_illustration · `aspect_ratio_desktop` 4:3 · `aspect_ratio_mobile` 4:3 · `export_dimensions` 1600 × 1200 · `focal_point_desktop` 50% / 50% · `focal_point_mobile` 50% / 50% · `safe_area` none required · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Composition is calm and unbranded; the four materials match the palette used across every project world. |

**Full Midjourney prompt**

```
Photorealistic still-life photograph against a warm off-white plastered wall: a pale oak board leans against the wall on a simple plaster ledge, a warm grey honed stone offcut stands beside it, folded natural linen in bone and sand lies flat, a matte black bar handle rests in front and one muted terracotta ceramic form sits to the right, lit by soft even daylight from the left that casts a single gentle shadow. Camera on a tripod at 1.3 m height, 50 mm full-frame equivalent, Straight-on, quiet symmetry, Moderate, f/4 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster background, pale oak, warm grey stone, matte black metal and natural linen arranged as a quiet still life, soft even daylight from the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 4:3 --style raw --stylize 170 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic still-life photograph against a warm off-white plastered wall: a pale oak board leans against the wall on a simple plaster ledge, a warm grey honed stone offcut stands beside it, folded natural linen in bone and sand lies flat, a matte black bar handle rests in front and one muted terracotta ceramic form sits to the right, lit by soft even daylight from the left that casts a single gentle shadow. Materials and finishes: warm off-white plaster background, pale oak, warm grey stone, matte black metal and natural linen arranged as a quiet still life, soft even daylight from the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.3 m height, Straight-on, quiet symmetry, Moderate, f/4 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve none required free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no branding, no logo, no text, no hands, no extra objects, no strong colour
```

#### BV-IMG-100 — Default Open Graph image

| Field | Value |
|---|---|
| Asset ID | `BV-IMG-100` |
| Project Visual ID | `BRAND` |
| Page | GLOBAL, all pages |
| Section | SEO / meta |
| Purpose | Fallback link-preview image for policy and utility pages, and for any page without its own hero. |
| Asset type | `ai_illustration` |
| Desktop aspect ratio | 1.91:1 |
| Mobile aspect ratio | 1.91:1 |
| Recommended generation resolution | 2400 × 1256 minimum |
| Website export dimensions | 1200 × 630 |
| Composition | Wide quiet composition: a plastered wall with a pale oak edge entering from the right and a stone ledge across the lower third, deliberately empty in the centre-left where the platform overlays the link title. |
| Main subject | The material palette as an abstract brand frame. |
| Background | Warm off-white plaster. |
| Architecture | A plain wall and ledge. |
| Materials | Plaster, pale oak, warm grey stone. |
| Main colors | Warm off-white, pale oak, warm grey. |
| Accent colors | None. |
| Lighting | Soft even daylight from the left. |
| Time of day | Mid-morning, overcast. |
| Camera position | Two metres from the wall, square on. |
| Camera height | 1.4 m |
| Lens or focal-length equivalent | 50 mm full-frame equivalent |
| Viewing angle | Straight-on |
| Depth of field | Deep, f/8 equivalent |
| Focal point | The oak edge on the right. |
| Safe area for website text and CTA | the centre-left 60 per cent, kept visually empty |
| Props and styling | None. |
| Elements that must not appear | No burned-in text, no wordmark inside the image file, no logo, no objects, no people. |
| Recommended Midjourney parameters | --ar 1.91:1 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref] |
| EN alt text | Bellvero Group brand image with plaster, oak and stone |
| RU alt text | Брендовое изображение Bellvero Group: штукатурка, дуб и камень |
| EN caption |  |
| RU caption |  |
| AI disclosure EN | `AI-generated image` |
| AI disclosure RU | `Изображение создано с помощью ИИ` |
| Recommended filename | `bv-brand-og-default-ai-01` |
| CMS fields | `asset_id` BV-IMG-100 · `project_visual_id` BRAND · `page_id` GLOBAL · `section_id` OG · `asset_type` ai_illustration · `aspect_ratio_desktop` 1.91:1 · `aspect_ratio_mobile` 1.91:1 · `export_dimensions` 1200 × 630 · `focal_point_desktop` 70% / 50% · `focal_point_mobile` 70% / 50% · `safe_area` the centre-left 60 per cent, kept visually empty · plus `generation_tool`, `generation_prompt`, `negative_prompt`, `seed`, `style_reference`, `reference_images`, `generation_resolution`, `alt_en`, `alt_ru`, `caption_en`, `caption_ru`, `ai_disclosure_en`, `ai_disclosure_ru`, `filename`, `publication_status`, `version` |
| Acceptance criteria | No visible CGI or obvious AI appearance · materials read as real at correct scale · architecture and verticals straight · no distorted or duplicated objects · physically correct shadows and reflections · no text, logo or watermark · colour grade consistent with approved assets of the same project · matches the Project Continuity Sheet · exported at the stated dimensions without upscaling artefacts · alt, caption and AI disclosure fields filled in EN and RU · Nothing is burned into the image file; the wordmark, when required, is composited by the build as a separate overlay for the OG variant only; the centre-left stays quiet so the platform's title text remains legible. |

**Full Midjourney prompt**

```
Photorealistic minimal architectural still frame: a warm off-white plastered wall fills the frame, a pale oak panel edge enters from the right with a fine shadow line beside it, a warm grey stone ledge crosses the lower third, and soft even daylight from the left leaves the centre-left area quiet and almost empty. Camera on a tripod at 1.4 m height, 50 mm full-frame equivalent, Straight-on, Deep, f/8 equivalent, natural exposure with restrained dynamic range, straight architectural verticals, realistic perspective, subtle natural surface imperfections, warm off-white plaster background, pale oak, warm grey stone, matte black metal and natural linen arranged as a quiet still life, soft even daylight from the left, neutral-warm white balance, photorealistic architectural editorial photography, full-frame camera look, calm composition, no people, no text, no logos --ar 1.91:1 --style raw --stylize 150 --v 7 --seed [seed] --sref [sref]
```

**Universal image-generation prompt**

```
Generate a photorealistic architectural photograph. Scene: Photorealistic minimal architectural still frame: a warm off-white plastered wall fills the frame, a pale oak panel edge enters from the right with a fine shadow line beside it, a warm grey stone ledge crosses the lower third, and soft even daylight from the left leaves the centre-left area quiet and almost empty. Materials and finishes: warm off-white plaster background, pale oak, warm grey stone, matte black metal and natural linen arranged as a quiet still life, soft even daylight from the left, neutral-warm white balance. Camera: 50 mm full-frame equivalent at 1.4 m height, Straight-on, Deep, f/8 equivalent. Rendering: natural daylight exposure, restrained dynamic range, physically accurate reflections and shadows, correct real-world texture scale, straight verticals, subtle imperfections, no people, no text, no logos. Reserve the centre-left 60 per cent, kept visually empty free of visual detail.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no text, no wordmark, no logo, no objects, no people, no pattern
```

---

## 19. AI Video Production Card for Every Video

**Production workflow, mandatory for every video.** 1. Generate a photorealistic source frame. 2. Check architecture and perspective. 3. Check furniture and fitted elements. 4. Check materials and texture scale. 5. Check light, shadows and reflections. 6. Approve the source image. 7. Use it as the image-to-video reference. 8. Define exactly one controlled camera movement. 9. Generate several variants. 10. Reject every version with AI artefacts. 11. Stabilise. 12. Apply an overall colour grade consistent with section 9.4. 13. Upscale if required. 14. Produce the separate mobile version. 15. Produce the poster frame. 16. Optimise for the web. 17. Check on desktop. 18. Check on a real mobile device. A finished result is never expected from the first generation.

### BV-VID-01 — Home hero video, desktop

| Field | Value |
|---|---|
| Video ID | `BV-VID-01` |
| Project Visual ID | `CP-01` |
| Page | P01 Home `/` |
| Section | `H01` Hero |
| Purpose | Calm ambient movement behind the home page headline; supports the positioning without competing with the text. |
| Duration | 7 seconds, looping |
| Desktop aspect ratio | 16:9 |
| Mobile aspect ratio | Not applicable; the mobile version is `BV-VID-02` |
| Recommended generation resolution | 1920 × 1080, generated from the approved still `BV-IMG-01` |
| Opening frame | Identical to `BV-IMG-01`: wide living volume from the doorway, calm darker left third, glazing on the right |
| Final frame | The same room approximately 40 cm closer, with no change to furniture, materials or light |
| Scene description | The open-plan living volume of the Coastal Villa concept: bone linen sofa on a warm grey rug, oak coffee table with a terracotta vessel, full-height pale oak joinery wall, honed beige limestone floor, full-height glazing on the right with a planted terrace beyond |
| Camera type | Virtual full-frame camera on a dolly |
| Lens | 40 mm full-frame equivalent |
| Camera height | 1.5 m, constant |
| Camera movement | One single slow dolly forward |
| Movement direction | Straight ahead along the room axis |
| Movement distance | Approximately 40 cm across the whole clip |
| Movement speed | Approximately 6 cm per second, constant after the ease-in |
| Start and stop easing | 1 second ease-in, 1 second ease-out, no visible acceleration in between |
| Environmental movement | Only the linen curtain at the right edge drifts very slightly from air movement |
| Elements that must remain static | Walls, ceiling, floor, doors, glazing, furniture, joinery, lighting fixtures, stone, hardware, reflections, architectural lines, material textures |
| Lighting | Constant daylight from the right; no change in intensity or direction across the clip |
| Exposure behavior | Locked; no auto-exposure drift |
| White-balance behavior | Locked warm-neutral; no shift across the clip |
| Safe area for website text | Left third of the frame stays calm and slightly darker for the headline, supporting line and button |
| Loop requirements | Seamless loop: the final frame matches the opening frame closely enough after a 0.5 second cross-dissolve that no jump is visible |
| Poster-frame requirements | `BV-IMG-01`, exported at 200 KB or less, `fetchpriority="high"`, never lazy-loaded; the first video frame must match it |
| Sound direction | No audio track at all |
| Stabilization requirements | Post-stabilise to remove any residual drift; vertical lines must not wobble at any point |
| Compression settings | WebM (VP9) plus MP4 (H.264), tuned to 3 MB or less in total, 24 fps, no audio stream |
| Export settings | 1920 × 1080, 24 fps, `preload="none"`, source injected after first paint |
| Filename | `bv-cp01-home-hero-aivideo-desktop` |
| EN accessible description | Slow forward camera movement through a villa living room with fitted oak joinery and daylight from full-height glazing |
| RU accessible description | Медленное движение камеры вперёд по гостиной виллы со встроенной дубовой мебелью и дневным светом из панорамного остекления |
| AI disclosure EN | `AI-generated video` |
| AI disclosure RU | `Видео создано с помощью ИИ` |
| Acceptance criteria | No flickering, morphing, texture pulsing, moving walls, changing furniture or materials, deformed doors or windows, unstable lighting fixtures, incorrect reflections, geometry changes, exposure shifts, white-balance shifts, artificial zoom, uncontrolled camera movement, incorrect physics, people, text, logos or watermarks; no visible CGI appearance; opening and final frames match; mobile LCP stays at 2.5 s or better at the 75th percentile with the video in place, otherwise the video is removed from the first screen until the cause is fixed |

**Full video-generation prompt**

```
Image-to-video from the approved still. Photorealistic architectural interior cinematography of a contemporary villa living room in Dubai: bone linen sofa on a warm grey wool rug, pale oak joinery wall with concealed cove lighting, oak coffee table with a single muted terracotta ceramic vessel, honed beige limestone floor, full-height glazing with slim matte black frames on the right opening to a planted terrace, warm off-white plaster walls. Soft diffuse mid-morning daylight enters from the right with a warm-neutral locked white balance. Camera at 1.5 metre height with a 40 mm full-frame lens, one single very slow controlled dolly movement forward of approximately 40 centimetres over seven seconds, with a one second ease-in and a one second ease-out. Only the linen curtain at the right edge drifts very slightly. All walls, ceilings, floors, furniture, joinery, hardware, reflections and material textures remain completely stable. 24 fps cinematic motion with realistic natural motion blur, stable exposure, restrained dynamic range, no people, no text, no logos, no cuts, no zoom, no orbit.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no curtain billowing, no moving rug pattern, no shifting joinery reveals, no drifting terrace planting, no lens flare, no cuts
```

### BV-VID-02 — Home hero video, mobile

| Field | Value |
|---|---|
| Video ID | `BV-VID-02` |
| Project Visual ID | `CP-01` |
| Page | P01 Home `/` |
| Section | `H01` Hero, mobile |
| Purpose | Vertical hero motion for phones, generated as a separate frame rather than cropped from the desktop clip. |
| Duration | 6 seconds, looping |
| Desktop aspect ratio | Not applicable |
| Mobile aspect ratio | 4:5 |
| Recommended generation resolution | 1080 × 1350, generated from the approved still `BV-IMG-02` |
| Opening frame | Identical to `BV-IMG-02`: vertical framing of the seating group and joinery wall |
| Final frame | The same view approximately 30 cm closer, everything else unchanged |
| Scene description | Vertical view of the same living volume: sofa, rug, coffee table with terracotta vessel, oak joinery wall behind, vertical slice of glazing at the right, calm limestone floor in the lower third |
| Camera type | Virtual full-frame camera on a dolly |
| Lens | 35 mm full-frame equivalent |
| Camera height | 1.5 m, constant |
| Camera movement | One single slow dolly forward |
| Movement direction | Straight ahead |
| Movement distance | Approximately 30 cm |
| Movement speed | 5 cm per second after the ease-in |
| Start and stop easing | 1 second ease-in, 1 second ease-out |
| Environmental movement | None, or an almost imperceptible curtain drift at the right edge |
| Elements that must remain static | Walls, ceiling, floor, glazing, furniture, joinery, hardware, reflections, textures |
| Lighting | Constant daylight from the right, identical in direction and intensity to `BV-VID-01` |
| Exposure behavior | Locked |
| White-balance behavior | Locked warm-neutral |
| Safe area for website text | Lower 40 per cent of the frame, kept calm for the headline and button |
| Loop requirements | Seamless loop with a 0.5 second cross-dissolve |
| Poster-frame requirements | `BV-IMG-02`, 120 KB or less, `fetchpriority="high"`, never lazy-loaded |
| Sound direction | No audio track |
| Stabilization requirements | Post-stabilise; no wobble on the vertical joinery lines |
| Compression settings | WebM plus MP4, 1.5 MB or less, 24 fps, no audio |
| Export settings | 1080 × 1350, 24 fps, `preload="none"`, loaded only after first paint and never on `Save-Data` or a 2g / slow-2g connection |
| Filename | `bv-cp01-home-hero-aivideo-mobile` |
| EN accessible description | Slow forward movement through a villa living room, vertical framing |
| RU accessible description | Медленное движение вперёд по гостиной виллы, вертикальный кадр |
| AI disclosure EN | `AI-generated video` |
| AI disclosure RU | `Видео создано с помощью ИИ` |
| Acceptance criteria | Same rejection list as `BV-VID-01`; in addition the furniture, rug and accessories must be identical to `BV-VID-01`, and the lower 40 per cent must hold white text at a contrast ratio of at least 4.5:1 in every frame |

**Full video-generation prompt**

```
Image-to-video from the approved vertical still. Photorealistic architectural interior cinematography, vertical 4:5 framing of a contemporary villa living room in Dubai: bone linen sofa on a warm grey wool rug, oak coffee table with one muted terracotta ceramic vessel, full-height pale oak joinery wall with concealed cove lighting behind, honed beige limestone floor filling the calm lower third, a vertical slice of full-height glazing with a slim matte black frame at the right edge, warm off-white plaster walls. Soft diffuse mid-morning daylight from the right, warm-neutral locked white balance. Camera at 1.5 metre height with a 35 mm full-frame lens, one single very slow controlled dolly forward of approximately 30 centimetres over six seconds with a one second ease-in and ease-out. Everything in the room remains completely stable: walls, ceiling, floor, furniture, joinery, hardware, reflections and textures. 24 fps cinematic motion, realistic motion blur, stable exposure, no people, no text, no logos, no cuts, no zoom.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no vertical stretching, no cropped-desktop look, no moving sofa, no shifting rug edges, no cuts
```

### BV-VID-03 — Production concept video

| Field | Value |
|---|---|
| Video ID | `BV-VID-03` |
| Project Visual ID | `CP-06` |
| Page | P20 Our Story `/about`; optional reuse on P08 `/services/bespoke-joinery` |
| Section | `A04` Production |
| Purpose | Quiet ambient motion that supports the production text; it is a concept illustration, never documentary footage of a specific facility. |
| Duration | 6 seconds, looping |
| Desktop aspect ratio | 16:9 |
| Mobile aspect ratio | 4:3 crop generated separately from the same source frame |
| Recommended generation resolution | 1920 × 1080, generated from the approved still `BV-IMG-96` |
| Opening frame | Identical to `BV-IMG-96`: wide view down the production floor |
| Final frame | The same view after a lateral slide of approximately 50 cm to the left, with no change to machinery, benches or materials |
| Scene description | Production floor of the concept workshop: benches with cabinet work in progress on the left, a machine bay in the centre, warm grey stone slabs on an A-frame rack to the right, white blockwork walls, sealed concrete floor, clerestory daylight from the right |
| Camera type | Virtual full-frame camera on a slider |
| Lens | 35 mm full-frame equivalent |
| Camera height | 1.6 m, constant |
| Camera movement | One single slow lateral slider movement |
| Movement direction | Left, parallel to the bench run |
| Movement distance | Approximately 50 cm |
| Movement speed | Approximately 8 cm per second after the ease-in |
| Start and stop easing | 1 second ease-in, 1 second ease-out |
| Environmental movement | Only a very slight drift of fine dust in the clerestory light shaft |
| Elements that must remain static | Walls, floor, benches, machinery, stone slabs, panels, trolleys, tools, shadows, textures |
| Lighting | Constant mixed clerestory daylight and neutral LED battens, no flicker |
| Exposure behavior | Locked |
| White-balance behavior | Locked neutral-warm |
| Safe area for website text | None required; the video sits beside the text, not beneath it |
| Loop requirements | Seamless loop with a 0.5 second cross-dissolve; the slider returns invisibly |
| Poster-frame requirements | `BV-IMG-96`, 200 KB or less on desktop and 120 KB or less on mobile |
| Sound direction | No audio track |
| Stabilization requirements | Post-stabilise; the vertical blockwork joints must not wobble |
| Compression settings | WebM plus MP4, 2.5 MB or less desktop and 1.2 MB or less mobile, 24 fps, no audio |
| Export settings | 1920 × 1080 desktop and 1440 × 1080 mobile, `preload="none"`, loaded after first paint, never on `Save-Data` or 2g / slow-2g |
| Filename | `bv-cp06-production-aivideo-desktop` and `bv-cp06-production-aivideo-mobile` |
| EN accessible description | Slow lateral camera movement across a production floor with workbenches, cabinet work in progress and stone slabs |
| RU accessible description | Медленное боковое движение камеры по производственному цеху с верстаками, мебельными заготовками и каменными слэбами |
| AI disclosure EN | `AI-generated video` |
| AI disclosure RU | `Видео создано с помощью ИИ` |
| Acceptance criteria | Same rejection list as `BV-VID-01`; in addition no person, face or figure may appear, no machine may move, no readable label, work order, brand name or signage may become visible at any point in the clip, and the production text beside it must not claim that the footage documents a specific facility |

**Full video-generation prompt**

```
Image-to-video from the approved still. Photorealistic industrial cinematography of a cabinet-making production floor: solid steel workbenches with pale oak cabinet carcasses in progress along the left, a machine bay in the centre, warm grey stone slabs standing on an A-frame rack to the right, white painted blockwork walls, sealed warm grey concrete floor, exposed steel roof structure with neutral LED battens and high clerestory daylight entering from the right. Camera at 1.6 metre height with a 35 mm full-frame lens, one single very slow controlled lateral slider movement to the left of approximately 50 centimetres over six seconds with a one second ease-in and ease-out. Only fine dust drifts slowly in the light shaft. All benches, machinery, panels, slabs, tools, shadows and textures remain completely stable. 24 fps cinematic motion, realistic motion blur, locked neutral-warm white balance, stable exposure, no people, no text, no logos, no cuts, no zoom.
```

**Negative prompt**

```
no CGI appearance, no 3D render look, no synthetic materials, no artificial HDR, no oversaturation, no excessive sharpness, no warped walls, no curved vertical lines, no distorted furniture, no changing furniture, no duplicated objects, no floating objects, no impossible architecture, no incorrect material scale, no repetitive textures, no plastic-looking wood, no fake stone texture, no physically incorrect shadows, no inconsistent lighting, no distorted reflections, no mirror artifacts, no geometry deformation, no flickering, no morphing, no pulsing textures, no exposure shifts, no white balance shifts, no artificial zoom, no random camera movement, no text, no letters, no logos, no watermark, no people, no faces, no moving machinery, no rotating blades, no sparks, no readable labels, no work orders, no signage, no cuts
```

---

## 20. Forms and Integrations

### 20.1 Enquiry endpoint

- The form posts to a first-party serverless endpoint on the site's own domain. No third-party form widget, no embedded iframe.
- Payload: name, phone, email, service, location, details, page path, page language, referrer, UTM parameters if present, timestamp, idempotency key.
- Server-side validation mirrors client-side validation. The client never decides whether a submission is valid.
- Phone numbers are normalised to E.164 server-side while the original string is stored unchanged.
- Spam control: a honeypot field plus a timing check plus a server-side rate limit per IP and per phone number. No CAPTCHA in version 1; if abuse appears, add an invisible challenge that does not block keyboard users.
- The endpoint returns a durable acceptance identifier. The success state is rendered only after that identifier is received.
- Failures are logged with the reason. A silent loss of an enquiry is a defect of the highest severity.

### 20.2 Notification delivery

- On acceptance, the endpoint sends a message to the responsible recipients through a messenger integration (WhatsApp Business API or Telegram bot) and an email copy.
- Message content: name, phone, selected service, location, page of origin, page language, submission time, and the full text of the project details field.
- At least two recipients are configured so one person's absence does not stop processing.
- Delivery failures are logged and surfaced in a monitoring channel.
- Retry policy: three attempts with exponential backoff, then an alert.

### 20.3 WhatsApp integration

- Link format `https://wa.me/[E164_DIGITS]?text=[URL-encoded prefill]` with the prefill text from section 17.3.
- The link never contains form content, the visitor's phone number or any tracking payload beyond a standard UTM parameter set on the page URL.
- Click tracking fires the `whatsapp_click` event with the page path and language. The event is an intent signal, never reported as a delivered message or captured lead.

### 20.4 Operational requirement carried by the build

The internal target for first contact is 15 minutes during working hours. It is never published on the website. The build supports it by delivering notifications instantly to a messenger, by including everything needed to make the first call in the notification body, and by logging delivery failures.

### 20.5 Enquiry register

Every enquiry is written to a register with: submission timestamp, source page, page language, service, location, and a status field the team updates manually (new, contacted, qualified, proposal, closed). Time of first contact is entered manually. The register is available from day one and does not wait for a CRM.

---

## 21. Responsive Behavior

| Breakpoint | Behaviour |
|---|---|
| ≥ 1440 px | Content max 1320 px, 60 px gutters, 12 columns |
| 1200–1439 px | Fluid container, 12 columns, gutters scale down to 40 px |
| 1100–1199 px | Full navigation still visible; hero and split sections keep the 6 + 6 layout |
| 768–1099 px | Mobile header with full-screen menu panel; splits become single column; galleries become one column plus a wide frame; 8-column grid with 24 px gaps |
| 390–767 px | 4-column grid, 16 px gaps, 20 px gutters; project grid one column; FAQ full width; bottom action bar appears after the first screen |
| 320–389 px | 16 px gutters; H1 may drop to 34 px; body stays at 16 px; no horizontal scroll under any circumstances |

Rules: images and media boxes carry `max-width: 100%`; nothing has a `min-width` wider than the viewport; tables inside content scroll horizontally in their own container rather than forcing the page to scroll; touch targets are at least 44 × 44 px; the mobile crop of every hero is a separate asset, never a squeezed desktop file; `env(safe-area-inset-bottom)` is respected by the bottom action bar and the cookie dialog.

---

## 22. CMS Requirements

**Content types**

| Type | Purpose | Key fields |
|---|---|---|
| Page | One record per page per language | slug, language, title, meta description, OG image reference, sections |
| Section | Ordered blocks inside a page | section id, type, heading, body, list items, CTA label and target, media references |
| Service | The twelve service pages' shared data | name EN/RU, slug, summary, related services, related concepts |
| Concept project | The four concept project pages | name EN/RU, slug, concept type, scope items, overview, media references, related concepts |
| Media asset | Every image and video | full field list in section 13 |
| Global settings | One record | brand name, legal entity, licence number, issuing authority, phone, WhatsApp number, email, working hours, footer text, policy links |
| FAQ item | Reusable question and answer | question EN/RU, answer EN/RU, page assignment |
| Enquiry | Submitted enquiries | as listed in section 20.5 |

**Rules**

1. Legal entity, licence number, issuing authority, phone, WhatsApp and email exist in exactly one record and are rendered from it everywhere. Manual duplication in page copy is forbidden.
2. EN and RU are separate localised fields on the same record, so structure cannot drift between languages.
3. Publishing a page requires: title, meta description, OG image, all mandatory section fields, and every referenced media asset in `published` state.
4. A section whose required media is missing hides itself in the front end automatically.
5. Draft content is never rendered publicly. Preview uses a signed preview route.
6. Editors can reorder sections but cannot delete the enquiry form section from a commercial page.
7. Every media asset is edited through the media model in section 13; images cannot be uploaded ad hoc inside rich text.
8. Rich text is limited to paragraphs, links, bold, lists and headings H2–H4. No inline styles, no arbitrary HTML.
9. Changes are versioned; the previous published version can be restored.
10. Roles: Content Manager (edit and submit), Website Administrator (publish, manage global settings and permissions).

---

## 23. SEO and Structured Data

**Per-page metadata**

- `title`: unique per page and per language, 50–60 characters, brand suffix `— Bellvero Group`.
- `meta description`: unique, 140–160 characters, factual, no superlatives.
- `canonical`: absolute URL of the current language version, without query parameters or trailing slash.
- `robots`: index, follow for all content pages; noindex for preview routes and system pages that must not rank.

**hreflang**

Every page renders the full set on both language versions:

```html
<link rel="alternate" hreflang="en" href="https://[domain]/services/villa-renovation">
<link rel="alternate" hreflang="ru" href="https://[domain]/ru/services/villa-renovation">
<link rel="alternate" hreflang="x-default" href="https://[domain]/services/villa-renovation">
```

Rules: hreflang URLs are absolute, self-referencing and reciprocal; a page with no counterpart is never published in one language only; the language switcher links to the exact counterpart URL, never to the home page.

**Open Graph and Twitter**

- `og:title`, `og:description`, `og:url`, `og:type=website`, `og:locale` (`en_US` or `ru_RU`), `og:image` 1200 × 630.
- Home uses `BV-IMG-01` re-cropped to 1.91:1; each service page uses its own hero re-cropped; each concept project uses its cover re-cropped; policy and utility pages use `BV-IMG-100`.
- `twitter:card=summary_large_image` with the same image.
- OG images are re-cropped deliberately for 1.91:1. Automatic CMS cropping is not acceptable because it cuts the subject.
- No burned-in headline text inside the OG image file. The wordmark may be composited by the build onto the default brand OG image only.

**Structured data (JSON-LD)**

- `Organization` on every page: legal name, URL, logo, contact point, area served Dubai and Abu Dhabi, the same values as the global settings record. Published only once the legal values exist.
- `BreadcrumbList` on every page below the first level.
- `Service` on each service page with `provider` referencing the organization and `areaServed`.
- `FAQPage` may be added where an FAQ exists, with the understanding that rich results for FAQ content are not guaranteed by search engines and are not the reason for the markup.
- No `Review`, `AggregateRating`, `Award` or `Offer` markup. The company publishes no reviews and no ratings, so marking them up would be false.
- Prices are never marked up as tax-inclusive when the published figure is net; if price markup is used, it carries the VAT-inclusive total.

**Technical SEO**

- XML sitemap with both language versions and correct `lastmod`; `robots.txt` references it.
- One canonical host, HTTPS only, permanent redirect from the other host variant.
- No thin geographic or filter URLs.
- 404 returns HTTP 404; removed content returns 404 or 410 by real reason, never a blanket redirect to the home page.
- Images carry descriptive alt text in both languages; alt text is never a keyword list.

---

## 24. Analytics and Cookies

**Analytics**

- GA4 with Consent Mode v2, loaded only after the visitor accepts the analytics category.
- Every event carries `page_language` and `page_path`, so behaviour can be compared between language versions on identical page structures.
- Events: `enquiry_view` (form enters viewport), `enquiry_start` (first field focus), `enquiry_submit` (client submit), `enquiry_success` (durable server acceptance, fires once), `enquiry_error`, `whatsapp_click`, `phone_click`, `sample_package_open`, `gallery_open`, `video_play`, `video_pause`, `language_switch`.
- Conversion definition: `enquiry_success` plus `whatsapp_click`. A page view of a thank-you route is not a conversion signal and no such route exists.
- No analytics fires in the staging environment's production property.

**Cookie consent**

- A first-party consent management layer that stores the choice in a first-party cookie with a documented lifetime.
- Before consent: no analytics, no advertising pixels, no external video players, no external fonts, no third-party iframes. The hero video is self-hosted, so it is unaffected.
- The dialog offers Accept All, Reject Optional and Settings with equal visual weight and equal accessibility; the reject action is never styled as low-contrast text.
- Categories: Necessary (always active), Analytics, Marketing. The last two default to off.
- Consent can be changed at any time through the persistent Cookie Settings link in the footer; withdrawing consent stops further sending immediately.
- The consent record never contains enquiry content.
- Every tool actually installed is listed publicly on `/cookies` with name, provider, purpose, category, duration and policy link; a row appears only after the tool is installed.

---

## 25. Accessibility

Target: WCAG 2.2 level AA.

- Contrast: normal text at least 4.5:1, large text at least 3:1, interactive component boundaries at least 3:1. Text over imagery and video is verified against the real pixels behind it, in every frame of a loop.
- Every interactive element is reachable and operable by keyboard, in a logical order, with a visible focus ring using the `--focus` token at 2 px offset.
- Focus is trapped inside the mobile menu, the gallery lightbox, the sample viewer and the cookie dialog; `Escape` closes each one and returns focus to its trigger.
- Skip link to main content is the first focusable element on every page.
- Landmarks: one `header`, one `nav` with an accessible name, one `main`, one `footer` per page. One `h1` per page and no skipped heading levels.
- Images: meaningful images carry descriptive alt text in the page's language; decorative images carry `alt=""`; a missing alt attribute is a defect. Both `alt_en` and `alt_ru` are mandatory in the CMS.
- Every AI disclosure label sits inside the same `figcaption` as its media so assistive technology announces them together.
- Video: no autoplay with sound (there is no audio track), an accessible pause and play control with its own name, and `prefers-reduced-motion` replaces the video with the poster.
- Motion: all entrance animations respect `prefers-reduced-motion: reduce`; nothing flashes more than three times per second.
- Forms: labels are programmatically associated, errors are announced with `aria-live="polite"`, error text is specific, and error state is not conveyed by colour alone.
- Accordions and disclosures use `aria-expanded` and `aria-controls`; the answer text is present in the DOM at all times.
- Touch targets are at least 44 × 44 px with adequate spacing.
- The site is usable at 200 per cent zoom and with a 320 px viewport without horizontal scrolling.
- Content is readable and the site is navigable with JavaScript disabled, apart from progressive enhancements such as the gallery lightbox, which degrade to plain links to the image.

---

## 26. Performance and Core Web Vitals

**Targets, measured on real mobile users at the 75th percentile**

| Metric | Target |
|---|---|
| Largest Contentful Paint | ≤ 2.5 s |
| Interaction to Next Paint | ≤ 200 ms |
| Cumulative Layout Shift | ≤ 0.1 |
| Time to First Byte | ≤ 0.8 s |
| Total blocking time (lab) | ≤ 200 ms |

**Required techniques**

1. Static generation with CDN delivery; HTML served with a short cache and long-lived immutable assets.
2. The hero poster is the LCP element: preloaded, `fetchpriority="high"`, never lazy-loaded, 200 KB or less on desktop and 120 KB or less on mobile.
3. The hero video uses `preload="none"` and its source is injected after first paint; it never loads on `Save-Data` or on 2g and slow-2g connections.
4. All other media is lazy-loaded with explicit `width`, `height` or `aspect-ratio` to prevent layout shift.
5. Fonts are self-hosted WOFF2, subset to Latin and Cyrillic, `font-display: swap`, with a metric-compatible fallback so the swap does not shift layout. Only the weights actually used are shipped.
6. JavaScript is minimal: no framework bundle for content pages beyond what static generation requires, no animation libraries, no carousel libraries, no icon fonts.
7. No third-party script loads before consent, and none is render-blocking after it.
8. Images are served as AVIF and WebP with a JPEG fallback and a correct `srcset` and `sizes` for every slot.
9. The acceptance gate: if the hero video prevents the LCP target from being met, the video is removed from the first screen until the cause is fixed.

---

## 27. Security and Privacy

- HTTPS everywhere with HSTS; HTTP permanently redirects to HTTPS.
- Security headers: `Content-Security-Policy` (no inline scripts except a nonce-based bootstrap), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` disabling camera, microphone and geolocation, and `X-Frame-Options: DENY` or an equivalent CSP frame-ancestors directive.
- The enquiry endpoint validates and sanitises every field server-side, enforces length limits, and rate-limits by IP and phone.
- Enquiry data is transmitted over TLS, stored with access restricted to the two roles in section 22, and is never written into client-side storage.
- No enquiry content is ever placed in a URL, an analytics event, a WhatsApp prefill or a log line.
- Personal data retention follows the schedule the company approves before launch; the privacy notice publishes it.
- Dependencies are pinned and audited; the build fails on a high-severity advisory in a production dependency.
- Admin access to the CMS requires multi-factor authentication.
- Backups: daily automated backup of the CMS content with a documented restore procedure tested once before launch.

---

## 28. Deployment Requirements

- Environments: production, staging and local. Staging is password-protected and carries `noindex`, plus the visible preview bar from section 15.22.
- Git-based workflow: every change is a pull request; the main branch deploys to production automatically after checks pass.
- CI checks: build, type checks, lint, link check, Lighthouse budget check, and an accessibility smoke test on the home page, one service page and one concept project page.
- Rollback: the previous build can be restored in one action.
- Domain: one canonical host; the second domain variant, if the company owns it, permanently redirects to the canonical host with no indexable copy and no change to the brand spelling.
- Monitoring: uptime checks on the home page and the enquiry endpoint; alerting on endpoint error rate and on notification delivery failures; Core Web Vitals field monitoring.
- The media library and its CMS records are backed up together so an asset's prompt, seed and disclosure text are never separated from the file.

---

## 29. QA Checklist

**Structure and content**

- Every page from section 6 exists in both languages at the exact URL listed.
- Section order on every page matches part 15 exactly, and is identical in EN and RU.
- Every string matches section 17 verbatim; no placeholder text and no square brackets in the public build.
- Every CTA leads to its stated destination and preserves language.
- No page claims delivered projects, completion status, client names, areas, budgets, durations or reviews.

**Media and disclosure**

- Every AI image and video renders its disclosure label in both languages, in grids, heroes, galleries, lightboxes and modal views.
- Concept project material additionally carries the concept label.
- No AI asset is presented as documentary evidence of delivered work, a real facility, real people or a real client document.
- No empty frames, grey boxes or placeholder icons anywhere.
- Card heights are equal within each row; colour and white balance match across assets in one block.
- Drawing views contain no readable text, numbers, stamps, signatures or logos.

**Behaviour**

- Enquiry form: validation messages, sending state, success only after durable acceptance, error state preserving input, rate limit message, no duplicate on retry.
- Notification arrives in the messenger and by email to at least two recipients, with all fields.
- WhatsApp link opens with the correct prefill and no personal data in the URL.
- Mobile bottom bar appears and hides according to the rules in section 14.2.
- Gallery and sample viewer: keyboard navigation, focus trap, focus return, counter, zoom.
- Language switcher keeps the current page and anchor.
- Cookie dialog: three equally weighted options, nothing optional loads before consent, choice can be changed later.

**Technical**

- Mobile LCP at or below 2.5 s at the 75th percentile; CLS at or below 0.1; INP at or below 200 ms.
- No horizontal scroll at 320, 360 and 390 px.
- Contrast verified for text over every hero image and every frame of every video loop.
- hreflang pairs are reciprocal and self-referencing; canonical URLs are correct on all 48 URLs.
- 404 returns HTTP 404; sitemap and robots are correct.
- Site is operable with JavaScript disabled for all content.

---

## 30. Final Acceptance Criteria

The website is accepted when all of the following are true.

1. All 24 page types exist in both languages, at the URLs in section 6, with the section structure of part 15 and the copy of section 17.
2. Every media slot in section 32 is filled by an approved asset generated from its card in sections 18 and 19, with its CMS record complete including prompt, negative prompt, seed and style reference.
3. Every AI asset carries its visible disclosure in both languages, everywhere it appears.
4. No content on the site presents AI material as a photograph of delivered work, a real facility, a real person or a real client document; no fabricated licence, permit, certificate, stamp or signature appears anywhere.
5. No personal names appear anywhere on the site, in file names, in CMS records or in metadata.
6. Prices are published as 250 and 310 AED/m² excluding VAT with the VAT-inclusive totals of 262.50 and 325.50 AED/m² shown at the same size; values are stored as net amount and tax rate and the total is calculated.
7. Warranty periods are published as 36 months for renovation workmanship and 48 months for the company's own cabinetry, with the product and use conditions of section 17.20.
8. The legal entity name, licence number and issuing authority are filled from the single global record and render on `/about`, `/contact` and in the footer; no square-bracket placeholder remains.
9. Contact details are verified and working: phone, WhatsApp and email.
10. The approvals page publishes the route structure without naming specific authorities or community management companies until the company confirms them in writing, and contains no promise to obtain a permit or a date.
11. The payment block publishes only the agreed text until the company confirms the schedule in writing.
12. The enquiry form works end to end, notifications reach at least two recipients instantly, and failures are logged.
13. Core Web Vitals targets in section 26 are met on real mobile traffic; if the hero video prevents this, it is removed from the first screen.
14. Accessibility conformance in section 25 is verified, including keyboard operation, focus management, contrast over media and screen-reader association of disclosure labels.
15. Analytics and consent behave as specified: nothing optional loads before consent, and events carry the page language.
16. Both language versions have been proofread by a native speaker of that language.

---

## 31. AI Asset Generation Checklist

Work through this list for every asset, in order.

**Before generating**

1. Read the Project Continuity Sheet of the asset's Project Visual ID in section 12.
2. Confirm the anchor image of that project is approved. If not, generate and approve it first.
3. Open the asset's card in section 18 or 19 and copy its prompt, parameters and negative prompt.
4. Attach the anchor image and the most recent approved frame of the same room as references.

**While generating**

5. Generate at least four variants at the stated resolution.
6. Reject on the spot any variant with warped verticals, distorted furniture, impossible geometry, duplicated objects, wrong texture scale, plastic-looking timber, fake stone, incorrect reflections or any visible text.
7. Keep the seed of the best variant and record it.

**Refining**

8. Vary from the recorded seed with small prompt deltas rather than starting again.
9. Upscale, then downscale to the export size. Never upscale a low-resolution output directly.
10. Grade to the direction in section 9.4 and compare side by side with two approved assets of the same project.

**Checking against the card**

11. Composition, camera height, lens and angle match the card.
12. Materials, colours and accents match the continuity sheet.
13. Light direction and time of day match the project.
14. The safe area is genuinely calm, and white text over it reaches a contrast ratio of at least 4.5:1.
15. No excluded element from the card appears anywhere in the frame, including at full zoom.

**Preparing for the site**

16. Produce the mobile frame as a separate generation where the card requires one.
17. Export AVIF and WebP with a JPEG fallback at the stated dimensions and weights.
18. Name the file by the convention in section 11.3.
19. Create the CMS record with every field in section 13, including prompt, negative prompt, seed, style reference, references, alt text in both languages, caption and disclosure in both languages.
20. Set the focal points and the safe area.
21. Set `publication_status` to `review`, and only after the acceptance check to `published`.

**For video, additionally**

22. Follow the eighteen-step workflow at the head of section 19.
23. Verify the loop, the poster match, the stabilisation and the file weights.
24. Check the clip on a real phone, not only in a desktop browser.

---

## 32. Media Coverage Matrix

Every media slot on the website, with its page, section, type and production status. `Prompt` and `Negative prompt` are complete for every row in sections 18 and 19. `Desktop` and `Mobile` state whether a separate frame is required for that viewport. `EN disclosure` and `RU disclosure` state the exact label rendered beneath the asset.

Disclosure key: **A** = `AI-generated image` / `Изображение создано с помощью ИИ` · **C** = `Concept project · AI-generated visualization` / `Концептуальный проект · AI-визуализация` · **D** = `Illustrative drawing · AI-generated image` / `Иллюстративный чертёж · Изображение создано с помощью ИИ` · **V** = `AI-generated video` / `Видео создано с помощью ИИ`
| Media ID | Page | Section | Asset type | Prompt | Negative prompt | Desktop | Mobile | EN disclosure | RU disclosure |
|---|---|---|---|---|---|---|---|---|---|
| `BV-IMG-01` | P01 Home `/` | `H01` Hero | ai_illustration | complete | complete | 16:9 | crop | AI-generated image | ИИ-изображение |
| `BV-IMG-02` | P01 Home `/` | `H01` Hero | ai_illustration | complete | complete | 4:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-03` | P01 Home, P14 Projects, P05, P11, P20 | `H03` / `G02` / card reuse | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-04` | P01 Home, P14 Projects, P03, P18 | `H03` / `G02` / card reuse | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-05` | P01 Home, P14 Projects, P05, P17 | `H03` / `G02` / card reuse | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-06` | P01 Home, P14 Projects, P11, P20 | `H03` / `G02` / card reuse | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-07` | P01 Home | `H04` One team, one responsibility | ai_illustration | complete | complete | 4:5 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-08` | P01 Home | `H06` Family-led, personally involved | ai_illustration | complete | complete | 4:5 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-09` | P02 Services | `S01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-10` | P02 Services | `S02` row 1 | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-11` | P02 Services | `S02` row 2 | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-12` | P02 Services | `S02` row 3 | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-13` | P02 Services | `S02` row 4 | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-14` | P03 Interior Design | `D01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-15` | P03 Interior Design | `D02` triptych | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-16` | P03 Interior Design | `D02` triptych | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-17` | P03 Interior Design | `D02` triptych | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-18` | P03 Interior Design | `D03a` sample viewer | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-19` | P03 Interior Design | `D03a` sample viewer | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-20` | P03 Interior Design | `D03a` sample viewer | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-21` | P03 Interior Design | `D03a` sample viewer | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-22` | P03 Interior Design | `D03a` sample viewer | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-23` | P03 Interior Design | `D03a` sample viewer | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-24` | P03 Interior Design | `D05` Review process | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-25` | P04 Landscape Design | `L01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-26` | P04 Landscape Design | `L02` triptych | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-27` | P04 Landscape Design | `L02` triptych | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-28` | P04 Landscape Design | `L02` triptych | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-29` | P05 Villa Renovation | `V01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-30` | P05 Villa Renovation | `V03` Scope | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-31` | P05 Villa Renovation | `V06` Joinery pair, left frame | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-32` | P05 Villa Renovation | `V06` Joinery pair, right frame | ai_illustration | complete | complete | 4:5 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-33` | P06 Apartment Renovation | `A01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-34` | P06 Apartment Renovation | `A02` Featured card | ai_concept_project | complete | complete | 8:5 | crop | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-35` | P06 Apartment Renovation | `A04` Planned around the building | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-36` | P06 Apartment Renovation | `A06` Gallery | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-37` | P06 Apartment Renovation | `A06` Gallery | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-38` | P06 Apartment Renovation | `A06` Gallery | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-39` | P07 Commercial Fit-Out | `C01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-40` | P07 Commercial Fit-Out | `C02` Featured wide card | ai_concept_project | complete | complete | 16:9 | crop | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-41` | P07 Commercial Fit-Out | `C05` Gallery | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-42` | P07 Commercial Fit-Out | `C05` Gallery | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-43` | P07 Commercial Fit-Out | `C05` Gallery | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-44` | P08 Bespoke Joinery | `J01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-45` | P08 Bespoke Joinery | `J03` Capabilities | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-46` | P08 Bespoke Joinery | `J03` Capabilities | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-47` | P08 Bespoke Joinery | `J03` Capabilities | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-48` | P08 Bespoke Joinery | `J04` Our production | ai_illustration | complete | complete | 4:5 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-49` | P09 Custom Kitchens | `K01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-50` | P09 Custom Kitchens | `K02` Planning pair | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-51` | P09 Custom Kitchens | `K02` Planning pair | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-52` | P09 Custom Kitchens | `K04` Gallery | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-53` | P09 Custom Kitchens | `K04` Gallery | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-54` | P09 Custom Kitchens | `K04` Gallery | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-55` | P09 Custom Kitchens | `K04` Gallery | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-56` | P10 Wardrobes | `W01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-57` | P10 Wardrobes | `W03` Closed and open | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-58` | P10 Wardrobes | `W03` Closed and open | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-59` | P11 Approvals | `N01` Hero | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-60` | P12 MEP and HVAC | `E01` Hero | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-61` | P13 Materials and Procurement | `M01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-62` | P13 Materials and Procurement | `M05` Palettes | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-63` | P13 Materials and Procurement | `M05` Palettes | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-64` | P13 Materials and Procurement | `M05` Palettes | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-65` | P15 Coastal Villa Concept | `CS02` Cover | ai_concept_project | complete | complete | 8:5 | separate frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-66` | P15 Coastal Villa Concept | `CS05` Plan and design | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-67` | P15 Coastal Villa Concept | `CS06` Materials | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-68` | P15 Coastal Villa Concept | `CS07` Gallery | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-69` | P15 Coastal Villa Concept | `CS07` Gallery | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-70` | P15 Coastal Villa Concept | `CS07` Gallery, WIDE frame | ai_concept_project | complete | complete | 16:9 | crop | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-71` | P15 Coastal Villa Concept | `CS07` Gallery, detail | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-72` | P15 Coastal Villa Concept | `CS07` Gallery, detail | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-73` | P16 Garden Villa Concept | `CS02` Cover | ai_concept_project | complete | complete | 8:5 | separate frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-74` | P16 Garden Villa Concept | `CS05` Plan and design | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-75` | P16 Garden Villa Concept | `CS06` Materials | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-76` | P16 Garden Villa Concept | `CS07` Gallery | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-77` | P16 Garden Villa Concept | `CS07` Gallery, WIDE frame | ai_concept_project | complete | complete | 16:9 | crop | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-78` | P16 Garden Villa Concept | `CS07` Gallery, detail | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-79` | P16 Garden Villa Concept | `CS07` Gallery, detail | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-80` | P17 Tower Residence Concept | `CS02` Cover | ai_concept_project | complete | complete | 8:5 | separate frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-81` | P17 Tower Residence Concept | `CS05` Plan and design | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-82` | P17 Tower Residence Concept | `CS06` Materials | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-83` | P17 Tower Residence Concept | `CS07` Gallery | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-84` | P17 Tower Residence Concept | `CS07` Gallery, WIDE frame | ai_concept_project | complete | complete | 16:9 | crop | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-85` | P17 Tower Residence Concept | `CS07` Gallery, detail | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-86` | P17 Tower Residence Concept | `CS07` Gallery, detail | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-87` | P18 Business District Office Concept | `CS02` Cover | ai_concept_project | complete | complete | 8:5 | separate frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-88` | P18 Business District Office Concept | `CS05` Plan and design | ai_drawing_illustration | complete | complete | 4:3 | same frame | Illustrative drawing · AI image | Иллюстративный чертёж |
| `BV-IMG-89` | P18 Business District Office Concept | `CS06` Materials | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-90` | P18 Business District Office Concept | `CS07` Gallery, WIDE frame | ai_concept_project | complete | complete | 16:9 | crop | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-91` | P18 Business District Office Concept | `CS07` Gallery | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-92` | P18 Business District Office Concept | `CS07` Gallery, detail | ai_concept_project | complete | complete | 4:3 | same frame | Concept project · AI visualization | Концепт-проект |
| `BV-IMG-93` | P19 Our Process | `PR01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-94` | P19 Our Process | `PR04` Decisions you can follow | ai_illustration | complete | complete | 4:5 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-95` | P20 Our Story | `A01` Hero | ai_illustration | complete | complete | 8:5 | separate frame | AI-generated image | ИИ-изображение |
| `BV-IMG-96` | P20 Our Story | `A04` Production | ai_illustration | complete | complete | 16:9 | crop | AI-generated image | ИИ-изображение |
| `BV-IMG-97` | P20 Our Story | `A04` Production | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-98` | P20 Our Story | `A04` Production | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-99` | P20 Our Story | `A07` Brand composition | ai_illustration | complete | complete | 4:3 | same frame | AI-generated image | ИИ-изображение |
| `BV-IMG-100` | GLOBAL, all pages | SEO / meta | ai_illustration | complete | complete | 1.91:1 | same frame | AI-generated image | ИИ-изображение |
| `BV-VID-01` | P01 Home | `H01` Hero | ai_video | complete | complete | 16:9 | separate clip BV-VID-02 | AI-generated video | Видео создано с помощью ИИ |
| `BV-VID-02` | P01 Home | `H01` Hero, mobile | ai_video | complete | complete | — | 4:5 dedicated clip | AI-generated video | Видео создано с помощью ИИ |
| `BV-VID-03` | P20 Our Story | `A04` Production | ai_video | complete | complete | 16:9 | 4:3 crop from the same source | AI-generated video | Видео создано с помощью ИИ |

**Totals.** 100 image slots and 3 video slots, every one with a complete individual prompt and negative prompt.

### 32.1 Traceability from the source media list

Every media slot of the source material is accounted for below. Nothing was dropped silently.

| Source slot | Status | New media ID | Note |
|---|---|---|---|
| IMG-01 Homepage hero poster | Carried over | `BV-IMG-01`, `BV-IMG-02` | Desktop and a separately generated mobile frame |
| VID-01 Homepage hero video | Carried over | `BV-VID-01`, `BV-VID-02` | Desktop and dedicated mobile clip |
| IMG-02 Project card 1 | Carried over | `BV-IMG-03` | Now a concept project card |
| IMG-03 Project card 2 | Carried over | `BV-IMG-04` | Now a concept project card |
| IMG-04 Project card 3 | Carried over | `BV-IMG-05` | Now a concept project card |
| IMG-05 Project card 4 | Carried over | `BV-IMG-06` | Now a concept project card |
| IMG-06 Site supervision image | Carried over | `BV-IMG-07` | Reframed as documentation and coordination, no people |
| IMG-07 Founder portrait or workshop detail | Carried over in changed form | `BV-IMG-08` | Portrait option removed; craft detail only |
| IMG-08 Services hero | Carried over | `BV-IMG-09` | |
| IMG-09 Services row 1 | Carried over | `BV-IMG-10` | |
| IMG-10 Services row 2 | Carried over | `BV-IMG-11` | |
| IMG-11 Services row 3 | Carried over | `BV-IMG-12` | |
| IMG-12 Services row 4 | Carried over | `BV-IMG-13` | |
| IMG-13 Interior design hero | Carried over | `BV-IMG-14` | |
| IMG-14 Design triptych, layout | Carried over | `BV-IMG-15` | Illustrative drawing, labelled |
| IMG-15 Design triptych, materials | Carried over | `BV-IMG-16` | |
| IMG-16 Design triptych, realisation | Carried over | `BV-IMG-17` | |
| IMG-17 Documentation sample pages | Carried over | `BV-IMG-18` … `BV-IMG-23` | Six illustrative drawing views, labelled, never described as a real project's documentation |
| IMG-18 Landscape hero | Carried over | `BV-IMG-25` | |
| IMG-19 Landscape triptych | Carried over | `BV-IMG-26`, `BV-IMG-27`, `BV-IMG-28` | |
| IMG-20 Villa hero | Carried over | `BV-IMG-29` | |
| IMG-21 Villa project cards | Carried over by reuse | `BV-IMG-03`, `BV-IMG-05` | |
| IMG-22 Villa scope detail | Carried over | `BV-IMG-30` | |
| IMG-23 Villa joinery pair | Carried over | `BV-IMG-31`, `BV-IMG-32` | |
| IMG-24 Apartment hero | Carried over | `BV-IMG-33` | |
| IMG-25 Apartment featured case | Carried over | `BV-IMG-34` | |
| IMG-26 Building constraints | Carried over | `BV-IMG-35` | |
| IMG-27 Commercial hero | Carried over | `BV-IMG-39` | |
| IMG-28 Commercial wide card | Carried over | `BV-IMG-40` | |
| IMG-29 Joinery hero | Carried over | `BV-IMG-44` | |
| IMG-30 Joinery capability details | Carried over | `BV-IMG-45`, `BV-IMG-46`, `BV-IMG-47` | |
| IMG-31 Production image | Carried over | `BV-IMG-48` | Concept production world, no location named |
| IMG-32 Kitchen hero | Carried over | `BV-IMG-49` | |
| IMG-33 Kitchen planning pair | Carried over | `BV-IMG-50`, `BV-IMG-51` | |
| IMG-34 Kitchen gallery | Carried over | `BV-IMG-52` … `BV-IMG-55` | |
| IMG-35 Wardrobe hero | Carried over | `BV-IMG-56` | |
| IMG-36 Wardrobe pair | Carried over | `BV-IMG-57`, `BV-IMG-58` | |
| IMG-37 Approvals hero drawing | Carried over | `BV-IMG-59` | Illustrative drawing, no stamp, emblem or signature |
| IMG-38 MEP hero | Carried over | `BV-IMG-60` | Coordination drawing rather than an equipment photograph |
| IMG-39 Materials hero | Carried over | `BV-IMG-61` | |
| IMG-40 Projects grid | Carried over by reuse | `BV-IMG-03` … `BV-IMG-06` | |
| IMG-41 Case cover | Carried over, one per project | `BV-IMG-65`, `BV-IMG-73`, `BV-IMG-80`, `BV-IMG-87` | |
| IMG-42 Case plan and design | Carried over, one per project | `BV-IMG-66`, `BV-IMG-74`, `BV-IMG-81`, `BV-IMG-88` | |
| IMG-43 Case materials palette | Carried over, one per project | `BV-IMG-67`, `BV-IMG-75`, `BV-IMG-82`, `BV-IMG-89` | |
| IMG-44 Case gallery | Carried over, per project | `BV-IMG-68`–`BV-IMG-72`, `BV-IMG-76`–`BV-IMG-79`, `BV-IMG-83`–`BV-IMG-86`, `BV-IMG-90`–`BV-IMG-92` | |
| IMG-45 Before and after | Removed | — | A before state cannot exist for a concept project, and inventing one would misrepresent the work |
| IMG-46 Process hero desk | Carried over | `BV-IMG-93` | |
| IMG-47 Process control image | Carried over | `BV-IMG-94` | |
| IMG-48 Founder portraits | Removed | — | No portraits are published; the about page uses `BV-IMG-95` and `BV-IMG-99` and text profiles by role |
| IMG-49 Production wide | Carried over | `BV-IMG-96` | Also the poster frame of `BV-VID-03` |
| IMG-50 Production details | Carried over | `BV-IMG-97`, `BV-IMG-98` | |
| IMG-51 Open Graph images | Carried over | `BV-IMG-100` plus per-page re-crops per section 23 | |

**Slots added in this specification:** `BV-IMG-24` design review drawing · `BV-IMG-36`–`BV-IMG-38` apartment gallery · `BV-IMG-41`–`BV-IMG-43` commercial details · `BV-IMG-62`–`BV-IMG-64` material palettes for the procurement page · `BV-IMG-99` brand still life · `BV-VID-03` production concept video.

### 32.2 Non-AI media: the legacy experience block

The only media on this website that is not AI-generated is the optional image row in section `A03b` on `/about`.

| Slot | Rule |
|---|---|
| `REAL-01` … `REAL-04` | Photographs of buildings delivered by the founders' previous employers, supplied by the company. `asset_type: real_photo`, `publication_permission: true` required before publication. Published only where the company holds the rights to the photograph. No AI disclosure label, because the asset is not AI-generated. Caption states the building and the employer factually. AI generation of these buildings is forbidden, because it would fabricate evidence. If no rights-cleared photographs exist, the image row is hidden and the text table stands alone. |

---

*End of specification.*
