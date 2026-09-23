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

## Reference specifications (source-of-truth docs, not yet fully implemented)

Three long-form specs live at the repo root and describe the target build in far more depth than this file. **Read the relevant one before building a page/section it covers** — do not re-derive copy, media prompts, or page structure from scratch when a spec already defines it.

- `Bellvero_Website_Technical_Specification_EN_1.md`-equivalent content (pasted into chat, not yet saved as a file in this repo — ask the user to drop it in if you need to re-consult it) — the full 32-section site spec: sitemap (P01–P24), design system tokens, copy (EN/RU) for every page, AI media production cards (100 images + 3 videos), CMS model, SEO/analytics/accessibility/performance requirements.
- `INSIGHTS-SPEC.md` — condensed build reference for the Insights section (P25 listing, P26 article). Already implemented (see below).
- `DESIGN-clay.md` — an unrelated Clay.com-style design system reference; do not use for this project's aesthetic unless explicitly asked to borrow that look.

**Known conflict:** the full site spec's design tokens (`--bg #F7F4EE`, `--accent #98583F`, Cormorant Garamond + Manrope) do **not** match this repo's actual implemented palette documented in `DESIGN.md` (ivory/charcoal/wood, Fraunces + Instrument Sans). Treat `DESIGN.md` as the real, current design system; treat the full spec's design-system section as an aspirational reference only until the user confirms a rebrand of the visual language itself.

## Page inventory vs. spec (as of 2026-09-23)

The full spec defines 26 page types (P01–P24 core + P25–P26 Insights). All 26 have a corresponding route already scaffolded under `src/app/[locale]/`:

| Spec page | Route |
|---|---|
| P01 Home | `page.tsx` |
| P02 Services catalogue | `services/page.tsx` |
| P03–P13 (11 individual services) | `services/[slug]/page.tsx` (dynamic, driven by `src/data/services.ts`) |
| P14 Concept projects catalogue | `projects/page.tsx` **and/or** `portfolio/page.tsx` — duplicate; needs reconciliation |
| P15–P18 (4 concept project detail pages) | `portfolio/[slug]/page.tsx` (dynamic) |
| P19 Our Process | `process/page.tsx` |
| P20 About | `about/page.tsx` |
| P21 Contact | `contact/page.tsx` |
| P22 Warranty | `warranty/page.tsx` |
| P23 Privacy | `privacy/page.tsx` |
| P24 Cookies | `cookies/page.tsx` |
| P25 Insights listing | `insights/page.tsx` |
| P26 Insights article | `insights/[slug]/page.tsx` |

**Structurally: 26/26 page templates exist. Zero missing routes.** What is *not* verified is content-level fidelity to the spec: exact EN/RU copy per section, the full 100-image/3-video AI media library, and per-page SEO/JSON-LD/analytics wiring — those are large, separate content/media production tasks the spec breaks out in Parts B and C, not routing work.

**Outstanding cleanup:** `projects/` and `portfolio/` appear to duplicate the same P14–P18 role — confirm with the user which is canonical before deleting either.

## Current State (as of 2026-09-03)
The repo is mid-refactor: most existing pages/components are modified, and a parallel `src/app/[locale]/` tree plus several new section/UI components (AboutGallery, ServiceHero, ServiceFAQ, ServiceSpotlight, pill-dropdown-nav, scroll-expansion-hero, slide-tabs, etc.) are untracked/new. This looks like an in-progress internationalization (next-intl) + design overhaul. Check `git status` before assuming a file's role — many components may be duplicated between legacy and locale-scoped trees during the transition.

## Conventions
- Follow `AGENTS.md` at the repo root: this Next.js version may differ from training data — check `node_modules/next/dist/docs/` for current APIs/conventions before writing framework code.
