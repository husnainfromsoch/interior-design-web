# BELLVERO GROUP: WEBSITE LAYOUT AND PHOTO SPEC (compact)

Languages: EN (root) and RU (`/ru/`), identical structure. Market: Dubai and Abu Dhabi.
All photos and video are AI-generated and labelled. Portfolio = 4 concept projects. Rule: a block with a missing image is hidden (no empty frames).

---

## 1. Sitemap (24 pages x 2 languages)

| ID | URL | Page |
|---|---|---|
| P01 | `/` | Home |
| P02 | `/services` | Services |
| P03 | `/services/interior-design` | Interior Design |
| P04 | `/services/landscape-design` | Landscape Design |
| P05 | `/services/villa-renovation` | Villa Renovation |
| P06 | `/services/apartment-renovation` | Apartment Renovation |
| P07 | `/services/commercial-fit-out` | Commercial Fit-Out |
| P08 | `/services/bespoke-joinery` | Bespoke Joinery |
| P09 | `/services/custom-kitchens` | Custom Kitchens |
| P10 | `/services/wardrobes` | Wardrobes and Dressing Rooms |
| P11 | `/services/approvals` | Approvals and NOCs |
| P12 | `/services/mep-hvac` | MEP and HVAC |
| P13 | `/services/materials-procurement` | Materials and Procurement |
| P14 | `/projects` | Concept Projects |
| P15-18 | `/projects/{coastal-villa, garden-villa, tower-residence, business-district-office}-concept` | Concept project pages |
| P19 | `/process` | Our Process |
| P20 | `/about` | Our Story |
| P21 | `/contact` | Contact |
| P22 | `/warranty` | Warranty |
| P23 | `/privacy` | Privacy |
| P24 | `/cookies` | Cookie settings |

Anchors: `#project-enquiry` (form, every commercial page), `#fees` (P03), `#residential-renovation` (P02), `#capabilities` (P08), `#leadership` (P20), `#design-only` / `#build-from-your-design` / `#bespoke-joinery` (P19).

## 2. Header and footer

**Header (desktop, 88 px, sticky, bg #F7F4EE):** wordmark left (BELLVERO / GROUP) | Services, Projects, Our Process, About, Contact | EN/RU switcher | button "Discuss Your Project" (52 px).
Services dropdown (click): Interior & Landscape (P03, P04) / Villa & Apartment Renovation (P05, P06) / Commercial Fit-Out (P07) / Bespoke Joinery & Furniture (P08-10) / Specialist (P11-13) / All Services.
**Mobile (<1100 px, 72 px):** wordmark, language switch, Menu button; full-screen panel with expandable groups, CTA pinned at bottom.
**Footer:** wordmark + line "Interior design, renovation and bespoke joinery. A family-led business serving Dubai and Abu Dhabi." | Explore links | Contact (phone, WhatsApp, email, Mon-Fri 9:00-18:00 UAE) | Visits ("Meetings at your property or another agreed location. Production visits by appointment.") | bottom row: (c) year Bellvero Group, Warranty, Privacy, Cookie Settings, legal entity line (entity, licence no., authority; block hidden until supplied).
**Mobile bottom bar** (after first screen): "Discuss Project" + "WhatsApp"; hides when keyboard/menu/form visible. Desktop: at most one plain text WhatsApp link.

## 3. Design system

- Colours: bg #F7F4EE, surface #EBE4D9, ink #332E2B, muted #685F57, accent #98583F (hover #804733), line #D8CEC1, field border #81766A, error #A32626.
- Fonts: Cormorant Garamond Medium (headings), Manrope (body 17/16, buttons 14). H1 home 80/62/42 px (RU 72/56/38); inner H1 64/52/38; H2 48/40/32.
- Grid: container 1320 px, 12 columns (8 tablet, 4 mobile). Section padding 104/72/56 px. Split = 6+6 columns, 48 px gap.
- Images: radius 0; buttons/fields radius 2; no shadows, no popularity badges. Hover: image scale 1.025 only. Project cards: 2 columns, equal height in a row, whole card is one link.
- No: scroll hijacking, splash screens, entry pop-ups, marquees, custom cursors, testimonials, counters, ratings.

## 4. Standard block layouts

- **Service hero:** text left / image right (8:5), 48 px gap; H1, 3-4 line intro, CTA. Mobile: text, CTA, image.
- **Text + evidence:** text left, image right (4:5 photo or drawing `contain`).
- **Scope list:** two columns, no cards.
- **FAQ:** max 960 px accordion, all answers in DOM.
- **Related projects:** two 4:3 cards.
- **Form F1:** surface bg; intro left (5 cols), form right (6 cols).
- **Policy pages:** single column, max 800 px.

## 5. Shared components

**Form F1** ("Tell Us About Your Project"): Name*, Phone/WhatsApp*, Email, Service (preselected per page), Location (Dubai / Abu Dhabi / Other), Project details. Buttons "Send Enquiry" and "WhatsApp Us" equal weight. Success shown in place. No upload, no budget field.
**Engineering strip (P05, P06, P07, above FAQ):** heading "Engineering Experience From Large-Scale Construction", one paragraph, link to `/about#leadership`. Text only.
**Payment block:** "How Payment Is Arranged" (schedule agreed before work, recorded in contract). Used in Home FAQ #7, P19, renovation FAQs.
**Warranty strips:** renovation pages (P05-07) "3-year renovation workmanship warranty"; joinery pages (P08-10) "4-year warranty on our bespoke joinery manufacture and installation". Link to P22.
**Gallery:** 2 columns of 4:3 + one wide frame; lightbox with counter; caption and AI label always visible.

## 6. Photo and video rules

**Label** under every AI image/video (HTML text inside figcaption, 12/11 px, muted, never hover-only). Caption goes first, label second.
- Concept project material: "Concept project . AI-generated visualization"
- Other images: "AI-generated image"
- Drawings: "Illustrative drawing . AI-generated image"
- Video: "AI-generated video"

**Style (all images):** warm off-white plaster, pale oak (walnut only as accent), honed beige limestone, warm-grey stone, muted terracotta accent, matte-black hardware, linen/wool textiles. Soft natural daylight, warm-neutral, straight verticals, no people, no text, no logos.

**Formats:** hero 8:5 (1920x1200) + separate 4:5 mobile (1200x1500); cards/details 4:3 (1600x1200); side images 4:5 (1200x1500); wide 16:9 (2400x1350); drawings `contain`, 2000 px; OG 1200x630.
**Hero images:** left third (desktop) / lower third (mobile) kept calm and darker for white text (contrast 4.5:1).
**Drawings:** no readable text, numbers, stamps, signatures, licence numbers, or authority marks; never described as a real client's documentation.
**Projects (visual worlds):** CP-01 Coastal Villa (light from right, mid-morning), CP-02 Garden Villa (light from left, late afternoon), CP-03 Tower Residence (apartment, hazy exterior), CP-04 Office, CP-05 Landscape terrace, CP-06 Production workshop (concept, no location named), CP-07 Studio (drawings, samples). One frame never mixes two worlds.
**Files:** AVIF/WebP + JPEG; hero poster <=200 KB (mobile 120 KB), not lazy-loaded; rest lazy. Every image has EN and RU alt text.

## 7. Pages

Legend: `IMG-nn` = image slot; ratio in brackets. "Poster" = first-screen image.

### P01 Home
| Block | Content | Image |
|---|---|---|
| Hero | Full-bleed, height ~100 svh (620-880 px). Eyebrow "BELLVERO GROUP", H1 "Interior Design, Renovation & Bespoke Joinery", one line, one button "Discuss Your Project". Left-side dark gradient, pause button bottom right. | IMG-01 poster (16:9) + IMG-02 mobile (4:5): villa living room, sofa, oak joinery wall, glazing on right. VID-01 (7 s loop, slow dolly forward) + VID-02 mobile (6 s). AI label bottom-left. |
| Four directions | H2 "Explore Our Services"; 2x2 text grid numbered 01-04: Interior & Landscape Design; Villa & Apartment Renovation; Commercial Fit-Out; Bespoke Joinery & Furniture. Link "All Services". | none |
| Concept projects | H2 "Concept Projects"; 2x2 cards (name, scope line, caption, label); link "All Projects". | IMG-03 Coastal Villa dining (4:3), IMG-04 Tower Residence living+kitchen, IMG-05 Garden Villa terrace opening, IMG-06 Office open plan |
| One team | Split: text left, image right. H2 "One Team. One Responsibility." 4 items: Defined Scope, Approved Changes, Regular Updates, Site Supervision. | IMG-07 (4:5): drawing, scale rule, samples on studio table |
| Five stages | Vertical list 1-5: Brief, Design & Planning, Scope & Preparation, Works & Production, Inspection & Handover. Link to P19. | none |
| Family-led | Split: text left, image right. H2 "Family-Led. Personally Involved." Story (business began 2021, two brothers), three role lines (no names), link to `/about#leadership`. | IMG-08 (4:5): oak cabinet door with black handle on workshop bench |
| FAQ | 7 questions (existing design, single orders, locations, budget, remote follow-up, what happens after enquiry, payment) | none |
| Form | F1 | none |

### P02 Services
| Block | Content | Image |
|---|---|---|
| Hero | H1 "Design, Renovation & Bespoke Joinery" | IMG-09 (8:5): stair hall with oak treads, left half calm |
| Four rows | Image 40% / text 60%, alternating (left, right, left, right): Interior & Landscape Design; Villa & Apartment Renovation; Commercial Fit-Out; Bespoke Joinery & Furniture | IMG-10 terrace threshold (CP-02), IMG-11 apartment corridor wardrobes, IMG-12 glazed meeting room, IMG-13 stone-to-oak joinery detail (all 4:3) |
| Specialist services | 3 text columns: Approvals & NOCs, MEP & HVAC, Materials & Procurement | none |
| FAQ (3) + Form | link to design fees | none |

### P03 Interior Design
| Block | Content | Image |
|---|---|---|
| Hero | H1 "Interior Design for the Way You Live and Work" | IMG-14 (8:5) living volume in depth |
| From idea to interior | Three images in a row with captions Layout / Materials / Realisation | IMG-15 floor plan drawing, IMG-16 material palette flat lay, IMG-17 finished living room |
| Package contents | 12-item list, two columns + note | none |
| Sample drawing set | Button opens viewer (modal / full-screen on mobile), 6 views, counter "3 of 6", zoom, no download, no form | IMG-18 layout, 19 lighting/ceiling, 20 wall elevation, 21 joinery detail, 22 finishes schedule, 23 room visualisation (all `contain`) |
| Fees (`#fees`) | Two equal cards: **Full Interior Design** from AED 250/m2 excl. VAT (262.50 incl.); **Design & Procurement** from AED 310/m2 excl. VAT (325.50 incl.). Feature lists, CTAs. Note under both. | none |
| Review process | Text + drawing | IMG-24 layout with scale rule and pencil |
| Related concepts | Two cards (P15, P17) | reuse IMG-03, IMG-04 |
| FAQ (5) + Form | | none |

### P04 Landscape Design
Hero (IMG-25 terrace, pergola, late afternoon, 8:5) / Triptych "Plan the Whole Outdoor Experience": IMG-26 site plan drawing, IMG-27 outdoor materials, IMG-28 lounge under pergola / Scope list (6) / "A Proposal for Your Site" (individually quoted, no rate) / 4-step process / FAQ (3) / Form.

### P05 Villa Renovation
| Block | Content | Image |
|---|---|---|
| Hero | H1 "Villa Renovation in Dubai & Abu Dhabi" | IMG-29 (8:5) whole living volume |
| Concept projects | Two cards (P15, P16) | reuse IMG-03, IMG-05 |
| Renovation around your priorities | Text + 6-item list + image right | IMG-30 plaster/shadow-gap/limestone junction |
| A project you can follow | Full-width text | none |
| Scope and changes | 3 items: Scope, Specifications, Changes | none |
| Engineering strip | above FAQ | none |
| Joinery coordinated | Two images side by side + CTA to P08 | IMG-31 installed wardrobe run (4:3), IMG-32 wardrobe carcass in workshop (4:5) |
| Process + warranty | 5 stages, 3-year strip | none |
| FAQ (5) + Form ("Let's Discuss Your Villa") | | none |

### P06 Apartment Renovation
Hero (IMG-33 living/dining along sightline, anchor of Tower Residence) / Featured concept: wide card to P17 (IMG-34 kitchen, 8:5) / "Make Better Use of Your Space" (6-item list) / "Planned Around the Building" (access, deliveries, shared areas, approvals) + IMG-35 protected corridor / "Finishes and Storage": gallery IMG-36 open wardrobe bay, IMG-37 oak vanity with stone top, IMG-38 oak-plaster-tile junction / Engineering strip / FAQ (4) / Warranty strip + Form.

### P07 Commercial Fit-Out
Hero (IMG-39 open-plan office) / Featured wide card to P18 (IMG-40, 16:9) / "From the Brief to a Working Space" (6 rows) / "Planning Around Your Operations" (text) / Gallery IMG-41 meeting room, IMG-42 reception counter, IMG-43 storage/acoustic junction / Engineering strip / FAQ (4) / Form + links to P11-13. Office fit-out only; retail assessed individually.

### P08 Bespoke Joinery
Hero (IMG-44 full oak joinery wall, left third calm) / Three modules: Kitchens, Wardrobes, Fitted & Individual Pieces / Materials and details (`#capabilities`): IMG-45 drawer construction, IMG-46 stone-to-timber junction, IMG-47 hardware + LED (all 4:3, same distance) / Our production: text left + IMG-48 assembly bay (4:5); own production of cabinets, glass and stone, upholstery sourced, visits by appointment, no location named / 6-step process / Joinery warranty strip / FAQ (4) / Form.

### P09 Custom Kitchens
Hero (IMG-49 kitchen run + island) / "Start with How You Use the Kitchen": drawing IMG-50 + built kitchen IMG-51 / 6 detail items in 3x2 grid / Gallery IMG-52 galley kitchen, IMG-53 open drawer, IMG-54 worktop junction, IMG-55 plinth/appliance detail / 6-step process / Quote text block / FAQ (4) / Warranty strip + Form.

### P10 Wardrobes
Hero (IMG-56 walk-in dressing room) / 5-item scope list / "Inside and Out": identical framing pair IMG-57 closed, IMG-58 open (captions "Closed", "Open: internal layout and fittings"; hide block if either missing) / Our production text (link P08) / 6-step process / FAQ (4) / Warranty strip + Form.

### P11 Approvals and NOCs
Documentary page, no interior photos. Split hero: text left, drawing right on surface bg (IMG-59, general arrangement drawing, no stamp/emblem) / "The Route Depends on Where Your Property Is": 4-row table (mainland villa, villa in master community, apartment/office in building, Abu Dhabi) / Why settled before design (2 paragraphs) / What usually requires a permit (two columns + disclaimer) / What we do (4 items) / Engineering coordination line / What to share / Related concepts (IMG-03, IMG-06) / FAQ (6) / Form. No promises on approval or dates; no authority names or logos.

### P12 MEP and HVAC
Split hero with IMG-59-style drawing IMG-60 (services coordination drawing) / 4 scope items (electrical, plumbing, HVAC, coordination) / "Resolve Conflicts Before Installation" / 5-step process / FAQ (3) / Form.

### P13 Materials and Procurement
Hero (IMG-61 selection table, anchor of studio world) / "What We Take Off Your Hands": Selection, Comparison, Specification, Coordination + category list / Two purchasing routes (A: through Bellvero, B: direct from supplier) / Defined procurement scope / Palettes: IMG-62 Coastal Villa, IMG-63 Tower Residence, IMG-64 Office (4:3, captioned by project) / FAQ (4) / Form.

### P14 Concept Projects
H1 + two-sentence statement that these are AI visualisations of scope, not delivered work / 2x2 grid of cards (IMG-03..06) / CTA "Discuss a Similar Project".

### P15-P18 Concept project template
Breadcrumb / H1 + scope line + cover (8:5, mobile 4:5) with concept label under it / Overview (2 short paragraphs) / Scope illustrated (4-6 bullets) / Plan (drawing, `contain`) / Materials (one flat lay) / Gallery / Related concepts (2 cards + service links) / Form "Discuss a Similar Project". No areas, budgets, dates, addresses, or "Completed".

| Page | Cover | Plan | Materials | Gallery |
|---|---|---|---|---|
| P15 Coastal Villa | IMG-65 terrace looking into glazing | IMG-66 ground floor plan | IMG-67 | IMG-68 living, 69 dining/kitchen, 70 stair hall (16:9), 71 island detail, 72 bedroom joinery |
| P16 Garden Villa | IMG-73 living room open to garden (anchor) | IMG-74 | IMG-75 interior + terrace materials | IMG-76 living, 77 facade panorama (16:9), 78 island detail, 79 threshold detail |
| P17 Tower Residence | IMG-80 | IMG-81 | IMG-82 | IMG-83 living, 84 kitchen (16:9), 85 corridor storage, 86 stone return |
| P18 Business District Office | IMG-87 entrance/reception | IMG-88 office plan | IMG-89 | IMG-90 open plan (16:9), 91 meeting room, 92 reception detail |

Minimum 4 published images for a page to go live.

### P19 Our Process
Split hero (IMG-93 working desk with drawings and samples, 8:5) / Ten stages 01-10 (numbers left, text right): Brief & Initial Budget; Site Review & Survey; Concept & Layout; Design & Technical Coordination; Scope, Quotation & Agreement; Approvals & Preparation; Construction & Engineering; Production & Procurement; Installation & Completion; Inspection & Handover / Three routes (`#design-only`, `#build-from-your-design`, `#bespoke-joinery`) / "Decisions You Can Follow" text + IMG-94 (4:5) clipboard checklist on drawing / Payment block / Form.

### P20 Our Story
| Block | Content | Image |
|---|---|---|
| Hero | H1 "A Family Business. A Shared Standard." | IMG-95 finished oak unit wrapped for dispatch |
| Two founders | 3 paragraphs (2021 start of family business; engineering and PM backgrounds; client relations partner) | none |
| Leadership (`#leadership`) | Three stacked role profiles, no names, no portraits: Co-Founder & Chief Engineer; Co-Founder & Head of Project Management (18 years); Partner & Head of Client Relations | none |
| Experience behind Bellvero | Surface bg; intro that these projects were delivered by previous employers; table: Project, Employer, Role, Period, Responsibility (incomplete rows hidden); row of up to 4 real photos (4:3) of the towers | REAL-01..04: real company-supplied photos, no AI label, hidden until supplied and rights-cleared |
| How this works on your project | short text | none |
| Production | Text, 2 CTAs (P08, P21) | IMG-96 production floor (16:9), IMG-97 hinge detail, IMG-98 stone/glass detail, VID-03 (6 s slow lateral slide) |
| Who you contract with | Legal entity, licence, authority (single source; hidden until complete) | none |
| What you can expect | 4-line block | none |
| Concept projects | Two cards | IMG-03, IMG-06 |
| Brand composition + Form | | IMG-99 still life (oak, stone, linen, black handle) |

### P21 Contact (no images)
H1 + intro; contact details left (5 cols), Form F1 right (7 cols). Contact lines: WhatsApp, phone, email, hours, locations, meetings, company details. "What Happens Next" 3 steps + note (first discussion and first renovation visit are free). FAQ (3).

### P22 Warranty
Intro / two columns: 36 months renovation workmanship, 48 months own cabinetry / Products and use (sourced products carry their own terms) / How to contact + CTA. No images.

### P23 Privacy / P24 Cookies
Single column, no images. P23 sections: who we are, data provided, use, providers, retention, choices, external services, changes. P24: list of tools installed + consent dialog "Your Privacy Choices" with three equal buttons (Accept All, Reject Optional, Settings); categories Necessary / Analytics / Marketing. Persistent "Cookie Settings" link in footer.

### System states
404 page with links to Services, Projects, Contact. Gallery load error: neutral box "Images could not be loaded. Try again." Video blocked: poster stays. Staging bar "Preview: test enquiries".

## 8. Global rules

- Every commercial page ends: Form, then footer. One H1 per page. Only P01 has a full-height hero.
- No personal names anywhere; roles only. No reviews, awards, counters, or client names.
- Never publish: fabricated licences/stamps, AI shown as delivered work or real people, placeholders in square brackets.
- Video: no audio, pause button, poster replaces video with reduced motion, loads after first paint.
- OG image: 1200x630 per page (hero re-cropped); default IMG-100 (plaster wall, oak edge, stone ledge, left kept empty).

## 9. Image slot totals
100 images (IMG-01..100) + 3 videos (VID-01..03) + 4 optional real photos (REAL-01..04).
