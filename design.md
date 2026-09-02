# Design System — Interior Design Web

Reference for the visual language used across the site. Source of truth is [src/app/globals.css](src/app/globals.css) and [src/app/layout.tsx](src/app/layout.tsx) — update this doc when those change.

## Palette

Warm, editorial, earthy-neutral palette (UAE premium interiors positioning). Defined as CSS variables in `:root` and exposed as Tailwind colors via `@theme inline`.

| Token | Hex | Use |
|---|---|---|
| `--ivory` / `--background` | `#F7F3EC` | Page background |
| `--foreground` / `--charcoal` | `#2E2A25` | Primary text |
| `--beige` | `#EDE3D3` | Secondary surface |
| `--taupe` | `#A6927B` | Muted accent |
| `--champagne` | `#D9C7A6` | Highlight / glow accent (used in pulse animations) |
| `--warm-grey` | `#8B857A` | Secondary text |
| `--soft-black` | `#1C1916` | High-contrast dark surface |
| `--stone` | `#C7BFAF` | Border / divider |
| `--wood` | `#7C5A3A` | Warm accent |
| `--wood-dark` | `#5F4429` | Warm accent, darker |

Use as Tailwind utilities: `bg-ivory`, `text-charcoal`, `border-stone`, etc. (mapped via `--color-*` in `@theme inline`).

## Typography

- Headings: **Fraunces** (serif) — `next/font/google`, CSS var `--font-heading` → Tailwind `font-serif`
- Body: **Instrument Sans** — `next/font/google`, CSS var `--font-body` → Tailwind `font-sans`

## Motion

Built with CSS keyframes/transitions (see `globals.css`) plus GSAP (`src/lib/gsap.ts`) and Framer Motion for scripted animation.

- **Reveal-on-scroll**: `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale` classes toggle to `.is-visible`; easing `cubic-bezier(0.22, 1, 0.36, 1)`, 0.7–0.8s, staggered via `--reveal-delay`
- **Ken Burns**: `.kenburns` / `.kenburns-fast` — slow background image scale (24s / 6s, alternate)
- **Hero entrance**: `.hero-in` — fade + translateY, 0.9s
- **Marquee**: `.marquee-track` — 22s linear infinite scroll
- **Process wheel**: `.process-node`, `.process-ring`, `.process-node-glow` — staggered scale-in with pulsing glow, SVG ring fills via `stroke-dashoffset`
- **Capability strip**: `.capability-line`/`.capability-dot`/`.capability-node`/`.capability-runner` — SVG line draw-on plus pulsing nodes and a traveling "runner" dot
- All decorative motion is disabled under `@media (prefers-reduced-motion: reduce)` — preserve this when adding new animations

## Components

- `src/components/ui/` — primitives: `Button`, `PageHeader`, nav (`pill-dropdown-nav`, `slide-tabs`), `scroll-expansion-hero`, `WhatsAppButton`
- `src/components/sections/` — page sections composed from primitives (Hero, Services, Testimonials, Process, About*, Service*, etc.)

## Conventions

- Compose Tailwind classes with `clsx` + `tailwind-merge` (`cn`-style helper) rather than string concatenation
- New animated elements should respect `prefers-reduced-motion` the same way existing `.reveal*`/`.kenburns`/`.process-*` classes do
- The site is mid-migration to `next-intl` locale-scoped routing (`src/app/[locale]/`) — legacy and locale-scoped versions of layout/pages currently coexist; keep design tokens/fonts in sync between both `globals.css`/`layout.tsx` copies until the migration finishes (see [CLAUDE.md](CLAUDE.md))
