---
name: project-dev-workflow
description: Use when running, building, linting, or navigating this interior-design-web Next.js site — covers dev commands, i18n structure, and the current mid-refactor layout.
---

# Interior Design Web — Dev Workflow

Premium interior design marketing site for the UAE market, built on Next.js (App Router).

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint

## Before writing framework code
This project pins a Next.js version that may differ from training data. Check `node_modules/next/dist/docs/` for current APIs/conventions before writing routing, data-fetching, or config code. See root `AGENTS.md` for details.

## Structure
- `src/app/` — routes; being migrated to locale-scoped routing under `src/app/[locale]/` (legacy top-level pages like `about`, `contact`, `services` still exist and are being moved/duplicated)
- `src/i18n/` — next-intl config (routing.ts, navigation.ts, request.ts); `src/middleware.ts` handles locale routing; `messages/` holds translation strings
- `src/components/sections/` — page sections (Hero, Services, Testimonials, Process, etc.)
- `src/components/ui/` — reusable UI primitives (Button, PageHeader, nav components)
- `src/data/` — static content/data (nav.ts, projects.ts, services.ts)
- `public/visuals/` — image/visual assets
- Animation: `gsap` (helper at `src/lib/gsap.ts`) and `framer-motion`

## Current state caveat
The repo is mid-refactor toward next-intl i18n plus a design overhaul. A parallel `src/app/[locale]/` tree and several new components exist alongside legacy, untranslated pages/components. Run `git status` before assuming which version of a file/component is authoritative — many are duplicated between legacy and locale-scoped trees during the transition.
