@AGENTS.md

# Project: Interior Design Web (Bellvero Group)

Premium interior design marketing site for the UAE market, built on Next.js (App Router), being rebranded to **Bellvero Group**.

## Stack
- Next.js 16.3.4 (App Router), React 19.2.8, TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- `next-intl` for i18n — locale-aware routing lives under `src/app/[locale]/`, config in `src/i18n/` (routing.ts, navigation.ts, request.ts), middleware in `src/middleware.ts`, translation strings in `messages/`
- Animation: `gsap` (helper at `src/lib/gsap.ts`) and `framer-motion`
- `lucide-react` for icons, `clsx` / `tailwind-merge` for class composition

## Structure
- `src/app/[locale]/` — all live routes (locale-scoped). Legacy top-level duplicates are being retired.
- `src/components/sections/` — page sections (Hero, Services, Testimonials, Process, Insights*, Article*, etc.)
- `src/components/ui/` — reusable UI primitives (Button, PageHeader, nav components)
- `src/data/` — static content/data (nav.ts, services.ts, projects.ts, insights.ts, caseStudies.ts)
- `public/visuals/`, `public/service images/` — image/visual assets

## Source of truth — FINAL spec

**`Bellvero_Insights_Technical_Specification_EN.md` (repo root, v1.0, 22.09.2026) is the FINAL specification.** Everything is built and verified against it. Do not re-derive copy, image prompts, layout sizes or article text: look them up there and use them verbatim. When code and spec disagree, the code is wrong.

Supporting files derived from it:
- **`DESIGN.md`** — design reference (tokens, type scale, P25/P26 block contracts, body components, imagery, AI label). The spec wins over DESIGN.md on any conflict.
- **`.claude/skills/bellvero-insights/SKILL.md`** — the build and verify workflow plus the acceptance checklist. Use it for any Insights work, and run its checklist before calling Insights work done.

The Insights spec (section 0) inherits header/footer, the design system, Visual DNA, AI disclosure, and form `F1` from the main site spec `bellvero-website/Bellvero_Website_Technical_Specification_EN_1.md` (sections 7–14). Consult it only for those inherited parts and for non-Insights pages (P01–P24).

**Design system:** the tokens are already in `src/app/globals.css` as `--bv-*` (Tailwind `bv-*`): `#F7F4EE` bg, `#EBE4D9` surface, `#332E2B` ink, `#685F57` muted, `#98583F` accent, `#D8CEC1` line. Fonts are Cormorant Garamond 500 (headings) and Manrope (body). Do not reintroduce the old ivory/charcoal/wood palette or Fraunces/Instrument Sans, and do not borrow the Clay.com look.

**Client amendment 2026-09-25 — rounded corners (overrides the spec's "radius 0 / 2 px"):** use only `rounded-lg` (`--radius-lg` 20px: images, cards, `#EBE4D9` blocks, media, the enquiry form block) and `rounded-sm` (`--radius-sm` 12px: buttons, fields, dropdowns, switcher, small controls). No other radius values exist in the Tailwind theme. There are no shadows or glows anywhere. Image hover is the `.img-zoom` class (1.03 zoom and darkening, 200 ms, no lift). The pill nav capsule, circled numbers, arrow circles on links, role-line icons and the PM chip were removed as spec-forbidden. Full details are in DESIGN.md section 0.

**Type size trial 2026-09-26 (NOT client-approved yet):** headings render at Cormorant 600 and body paragraphs at Manrope 500, both about 10% larger, through the "Type size trial" block in `src/app/globals.css` (`font-size-adjust`). This deviates from the spec. Do not "fix" it back without asking, and do not treat it as approved.

**Inner-page motion layer 2026-09-26 (owner request, NOT client-approved yet):** the shared blocks in `src/components/spec/blocks.tsx` now carry the homepage motion language: word-rise H1s (`RiseWords`), accent sweep on every `H2`, clip reveal plus scroll parallax on images, staggered reveals, scroll-filled step rails, arrow buttons (`PrimaryButton` variants, `CtaButton`), dark `CtaBand` for standalone CTAs, and `TextSplit` for heading-plus-paragraph sections. Scroll progress bar and route fade are global (`[locale]/layout.tsx`), hidden on Insights articles. This exceeds DESIGN.md §3 "entrance ≤ 12 px / 350 ms". Keep it unless the client rejects it. It still obeys the hard rules: no shadows, only `rounded-lg`/`rounded-sm`, no copy invented, reduced motion switches it off.

**Interaction layer 2026-09-26 (owner request, NOT client-approved yet):** the "Interaction layer" block at the end of `src/app/globals.css` plus `src/components/ui/Magnetic.tsx` (global, `data-magnetic` attribute on filled CTAs). It adds button press feedback (`.press`), header nav underlines, the animated Services dropdown (`.dropdown-panel`, stays out of the tab order when closed), the mobile menu wipe with staggered items, footer column reveals, word-rise on the home and cookies H1s, hero scroll-out and media depth, and a form spinner plus drawn success check. Insights pages were deliberately left untouched (final spec). Custom cursors, marquees, splash screens, glass effects and card lift stay out: DESIGN.md forbids them.

**Honesty rules (spec 0.4 / C5):** no invented statistics, prices, timelines, client stories or quotes, and no AI portraits. Every AI image carries the visible label "AI-generated image" / «Изображение создано ИИ» in `<figcaption>`. Never use an unrelated photo as a stand-in for a spec image slot; if an asset is missing, report it.

## Insights status vs. final spec (verified 2026-09-25)

Structure, UI copy (C1), topics, author, the three launch articles with all spec internal links, SEO/JSON-LD, sitemap, analytics, the `#leadership` and `#fees` anchors, the service-page "From Insights" link, the `C-AR12` form copy and the 3 + 5–10 column article layout all match the spec.

**Only images remain** (spec B3):
1. Covers: all 3 articles still use the same placeholder photo instead of IN-IMG-08/09/10 (`src/data/insights.ts`).
2. Inline images IN-IMG-11…16 are missing from the article bodies.
3. The OG image `ins-og-listing.jpg` (IN-IMG-01) is missing from `public/`.

**Notes on decisions made outside the Insights spec:**
- The spec gives no Russian wording for the "From Insights" label. The site uses «Из раздела «Статьи»» (`messages/ru.json` → `FromInsights.label`), which the owner should confirm.
- `#fees` is the main spec's P03 D04 fee block (`src/components/sections/ServiceFees.tsx`). Service pages have no `F1` form yet, so the fee CTAs link to `/contact#contact-form` and do not pass a package parameter.

## Page inventory vs. spec (as of 2026-09-23)

The full spec defines 26 page types (P01–P24 core + P25–P26 Insights). All 26 have a corresponding route already scaffolded under `src/app/[locale]/`:

| Spec page | Route |
|---|---|
| P01 Home | `page.tsx` |
| P02 Services catalogue | `services/page.tsx` |
| P03–P13 (11 individual services) | `services/[slug]/page.tsx` → one composition per page in `src/components/service-pages/` (registry `src/data/servicePages.ts`) |
| P14 Concept projects catalogue | `projects/page.tsx` (`/portfolio` redirects here) |
| P15–P18 (4 concept project detail pages) | `projects/[slug]/page.tsx` (driven by `src/data/concepts.ts`) |
| P19 Our Process | `process/page.tsx` |
| P20 About | `about/page.tsx` |
| P21 Contact | `contact/page.tsx` |
| P22 Warranty | `warranty/page.tsx` |
| P23 Privacy | `privacy/page.tsx` |
| P24 Cookies | `cookies/page.tsx` |
| P25 Insights listing | `insights/page.tsx` |
| P26 Insights article | `insights/[slug]/page.tsx` |

**Structurally: 26/26 page templates exist. Zero missing routes.** What is *not* verified is content-level fidelity to the spec: exact EN/RU copy per section, the full 100-image/3-video AI media library, and per-page SEO/JSON-LD/analytics wiring — those are large, separate content/media production tasks the spec breaks out in Parts B and C, not routing work.

## Spec build (2026-09-26)

- **Copy comes from the spec, verbatim.** `node scripts/extract-spec.mjs` regenerates `src/data/spec/copy.json` (§17, EN+RU) and `media.json` (§18 image cards). Server code reads it with `sc(code, label, locale)` from `src/lib/spec.ts`. Never import the spec JSON into a client component (148 KB); pass strings as props.
- **Images:** `src/data/media.ts` maps every `BV-IMG-xx` slot. Approved assets go in `APPROVED`; until then slots show a temporary Unsplash photo labelled "Temporary image" (never the AI label). All temporary photos must be replaced before launch.
- **Global settings and navigation live in Payload CMS** (globals `site-settings`, `navigation`; admin at `/admin`). The site reads them only through `src/cms/data.ts` (`getSiteSettings`, `getNavigation`), which fails closed if a value is missing; client components get contact details from `SiteSettingsProvider`. Legal fields stay empty until the client supplies them; every block that needs them hides itself. Initial values (backup/reference) are in `src/cms/seed/data.ts`; the create-only seed (`payload run src/cms/seed/run.ts confirm`) never overwrites and refuses to run on Vercel Production. Roles: Website Administrator (`admin`), Content Manager (`editor`, drafts only), internal `developer`.
- **Enquiries:** `/api/enquiry` stores to Upstash Redis and notifies by Telegram + Resend email after the response. In production without `UPSTASH_*` it returns 503 (never loses an enquiry silently). Env vars are listed in `.env.example`.
- **Consent/analytics:** `bv_consent` first-party cookie (`src/lib/consent.ts`), dialog `ConsentBanner`, GA4 loader `Analytics` (needs `NEXT_PUBLIC_GA_ID`). `NEXT_PUBLIC_STAGING=1` shows the preview bar and disables GA.
- Old service slugs and `/portfolio/*` redirect permanently (`next.config.ts`).
- Messages: add keys with `node scripts/merge-messages.mjs patch.json` (keeps CRLF).
- **No em dashes (owner request 2026-09-26):** no "—" in any visible text. `extract-spec.mjs` runs spec copy through `scripts/no-dash.mjs` (rules plus hand overrides), so "Title — body" is stored as "Title: body" and `pair()` splits on ": " or "? ". Pull-quotes attribute with `> text | Name`, and callouts are `Callout: Important:`. New copy, messages and article text must not use "—".

## Current State (as of 2026-09-03)
The repo is mid-refactor: most existing pages/components are modified, and a parallel `src/app/[locale]/` tree plus several new section/UI components (AboutGallery, ServiceHero, ServiceFAQ, ServiceSpotlight, pill-dropdown-nav, scroll-expansion-hero, slide-tabs, etc.) are untracked/new. This looks like an in-progress internationalization (next-intl) + design overhaul. Check `git status` before assuming a file's role — many components may be duplicated between legacy and locale-scoped trees during the transition.

## Conventions
- Follow `AGENTS.md` at the repo root: this Next.js version may differ from training data — check `node_modules/next/dist/docs/` for current APIs/conventions before writing framework code.
