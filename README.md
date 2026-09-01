# Studio Interiors — Luxury Interior Design (UAE)

A premium interior design marketing site targeting Dubai/UAE clients, built with Next.js (App Router), TypeScript and Tailwind CSS. Ready for deployment on Vercel.

## Status

This is the initial scaffold: design tokens (charcoal / beige / gold palette), layout, header/footer, and homepage sections (hero, services, portfolio preview, about teaser, testimonials, CTA) plus stub pages for About, Services, Portfolio and Contact.

**Next step:** replace placeholder copy, imagery and layout with an exact 1:1 match once client-provided snapshot references are available.

## Structure

```
src/
  app/                # routes (/, /about, /services, /portfolio, /contact)
  components/
    layout/            # Header, Footer
    sections/          # Hero, Services, PortfolioPreview, Testimonials, ContactForm, etc.
    ui/                # shared UI primitives (PageHeader)
  data/                # static content (nav links, services, projects, testimonials)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run lint
```

## Deploy

Push this repo to GitHub and import it into [Vercel](https://vercel.com/new) — zero extra configuration required (standard Next.js App Router project).
