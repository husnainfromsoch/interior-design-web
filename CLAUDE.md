@AGENTS.md

# Project: Interior Design Web

Premium interior design marketing site for the UAE market, built on Next.js (App Router).

## Stack
- Next.js 16.3.4 (App Router), React 19.2.8, TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- `next-intl` for i18n — locale-aware routing lives under `src/app/[locale]/`, config in `src/i18n/` (routing.ts, navigation.ts, request.ts), middleware in `src/middleware.ts`, translation strings in `messages/`
- Animation: `gsap` (helper at `src/lib/gsap.ts`) and `framer-motion`
- `lucide-react` for icons, `clsx` / `tailwind-merge` for class composition

## Structure
- `src/app/` — routes; being migrated to locale-scoped routing under `src/app/[locale]/` (legacy top-level pages like `about`, `contact`, `services` still present and being moved/duplicated)
- `src/components/sections/` — page sections (Hero, Services, Testimonials, Process, etc.)
- `src/components/ui/` — reusable UI primitives (Button, PageHeader, nav components)
- `src/data/` — static content/data (nav.ts, projects.ts, services.ts)
- `public/visuals/` — image/visual assets

## Current State (as of 2026-09-03)
The repo is mid-refactor: most existing pages/components are modified, and a parallel `src/app/[locale]/` tree plus several new section/UI components (AboutGallery, ServiceHero, ServiceFAQ, ServiceSpotlight, pill-dropdown-nav, scroll-expansion-hero, slide-tabs, etc.) are untracked/new. This looks like an in-progress internationalization (next-intl) + design overhaul. Check `git status` before assuming a file's role — many components may be duplicated between legacy and locale-scoped trees during the transition.

## Conventions
- Follow `AGENTS.md` at the repo root: this Next.js version may differ from training data — check `node_modules/next/dist/docs/` for current APIs/conventions before writing framework code.
