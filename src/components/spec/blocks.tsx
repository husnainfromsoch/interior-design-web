import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cssRatio, getMedia, type MediaAsset } from "@/data/media";
import { conceptScope, conceptTitle, getConcept, type ConceptSlug } from "@/data/concepts";
import { linkText } from "@/lib/spec";
import { g, runs } from "@/lib/final";

// Shared page blocks, Final Changes Sheet v3.0. Text uses only the nine D2 styles
// (.t-h1 … .t-number in globals.css). Radius: rounded-lg = 0 px (images, cards, sections),
// rounded-sm = 2 px (buttons, fields). Motion: one fade per <Section> (.bv-fade), nothing
// else. No decorative icons: arrow and plus/minus only. Spacing: major sections
// 104/72/56 px, compact 64/48/40 px.

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

/** Every primary button scrolls to the enquiry form on the same page (G13). */
export const FORM_ANCHOR = "#project-enquiry";

export function Section({
  id,
  surface,
  compact,
  className,
  children,
}: {
  id?: string;
  surface?: boolean;
  compact?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cx(
        // bv-flow: two neighbouring sections on the same background share one gap (globals.css)
        "bv-flow bv-fade",
        surface ? "bg-bv-surface" : "bg-bv-background",
        compact ? "py-10 sm:py-12 lg:py-16" : "py-14 sm:py-[72px] lg:py-[104px]",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">{children}</div>
    </section>
  );
}

/** Copy string with its inline markup: **bold** and [Link text] (Changes Sheet G8). */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {runs(text).map((r, i) =>
        r.href ? (
          <Link key={i} href={r.href} className="text-bv-accent underline underline-offset-4 transition-colors duration-200 hover:text-bv-accent-hover">
            {r.text}
          </Link>
        ) : r.bold ? (
          <strong key={i} className="font-semibold">
            {r.text}
          </strong>
        ) : (
          <Fragment key={i}>{r.text}</Fragment>
        )
      )}
    </>
  );
}

export function Eyebrow({ children, className, light }: { children: ReactNode; className?: string; light?: boolean }) {
  return <p className={cx("t-eyebrow", light ? "text-bv-background" : "text-bv-accent", className)}>{children}</p>;
}

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cx("t-h2", className)}>{children}</h2>;
}

export function H3({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cx("t-h3", className)}>{children}</h3>;
}

export function Intro({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx("t-body mt-4 max-w-[760px] text-bv-muted", className)}>{children}</p>;
}

export function Body({ children, className }: { children: ReactNode; className?: string; lead?: boolean }) {
  return <p className={cx("t-body max-w-[760px] text-bv-ink", className)}>{children}</p>;
}

export function Note({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx("t-body mt-8 max-w-[760px] border-l-2 border-bv-accent pl-4 text-bv-muted", className)}>{children}</p>;
}

/** Heading on the left, text on the right. */
export function TextSplit({ heading, children, aside }: { heading: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <H2>{heading}</H2>
        {aside}
      </div>
      <div className="space-y-5 lg:col-span-7">{children}</div>
    </div>
  );
}

/** Facts strip: one row of 3–5 facts in the Small style, thin lines above and below. */
export function FactsStrip({ facts }: { facts: string[] }) {
  if (facts.length === 0) return null;
  return (
    <div className="bv-flow bg-bv-background">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
        <ul className="flex flex-col border-y border-bv-line py-2 lg:flex-row lg:py-0">
          {facts.map((f, i) => (
            <li key={i} className={cx("t-small flex-1 py-2 text-bv-ink lg:px-6 lg:py-5 lg:first:pl-0 lg:last:pr-0", i > 0 && "lg:border-l lg:border-bv-line")}>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Image with its caption (D10). The caption is the asset's own visible text
 * ("AI-generated image" or "Bellvero Group project, {community}"); `alt` stays separate.
 * No asset → nothing is rendered, so the block falls back to its text-only version.
 */
export function MediaFigure({
  asset,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  ratio,
  contain,
  className,
}: {
  asset: MediaAsset | null;
  sizes?: string;
  priority?: boolean;
  ratio?: string;
  contain?: boolean;
  className?: string;
}) {
  if (!asset) return null;
  const fitContain = contain ?? asset.isDrawing;
  return (
    <figure className={cx("m-0", className)}>
      <div
        className={cx("relative w-full overflow-hidden rounded-lg", fitContain ? "border border-bv-line bg-bv-surface" : "bg-bv-surface")}
        style={{ aspectRatio: cssRatio(ratio ?? asset.ratio) }}
      >
        <Image src={asset.src} alt={asset.alt} fill sizes={sizes} priority={priority} className={fitContain ? "object-contain p-4" : "object-cover"} />
      </div>
      <figcaption className="t-caption mt-2">{asset.caption}</figcaption>
    </figure>
  );
}

type ButtonVariant = "primary" | "outline" | "light";

const BUTTON_BASE = "t-button inline-flex h-[52px] items-center justify-center gap-3 rounded-sm px-7 transition-colors duration-200";
const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-bv-accent text-bv-white hover:bg-bv-accent-hover",
  outline: "border border-bv-field-border text-bv-ink hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white",
  light: "bg-bv-background text-bv-ink hover:bg-bv-white",
};

export function PrimaryButton({
  href = FORM_ANCHOR,
  children,
  variant = "primary",
  className,
}: {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const content = (
    <>
      {typeof children === "string" ? linkText(children) : children}
      <ArrowRight aria-hidden="true" strokeWidth={2} className="h-4 w-4 flex-none" />
    </>
  );
  const cls = cx(BUTTON_BASE, BUTTON_VARIANTS[variant], className);
  // A same-page anchor is a plain <a>, so it scrolls instead of navigating.
  return href.startsWith("#") ? (
    <a href={href} className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

/** A standalone secondary call to action: an outline button. */
export function CtaButton({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <PrimaryButton href={href} variant="outline">
        {children}
      </PrimaryButton>
    </div>
  );
}

/** Text link in the Small style with a plain arrow. */
export function TextLink({ href, children, className, arrow = true }: { href: string; children: ReactNode; className?: string; arrow?: boolean }) {
  return (
    <Link
      href={href}
      className={cx("t-small inline-flex min-h-[44px] items-center gap-2 text-bv-accent transition-colors duration-200 hover:text-bv-accent-hover", className)}
    >
      <span>{typeof children === "string" ? linkText(children) : children}</span>
      {arrow && <ArrowRight aria-hidden="true" strokeWidth={2} className="h-4 w-4 flex-none" />}
    </Link>
  );
}

/**
 * Page hero (Changes Sheet section 3): H1, intro, button, "under the button" text.
 * Image on the right when the page has one; otherwise the text-only hero.
 */
export function SplitHero({
  eyebrow,
  title,
  body,
  cta,
  underButton,
  media,
  contain,
  xl,
}: {
  eyebrow?: string;
  title: string;
  body?: ReactNode;
  cta?: { label: string; href?: string };
  underButton?: string | null;
  media?: MediaAsset | null;
  contain?: boolean;
  /** Home and About use the larger H1 size set. */
  xl?: boolean;
}) {
  return (
    <section className="bv-flow bg-bv-background pb-14 pt-10 sm:pb-[72px] lg:pb-[104px] lg:pt-16">
      <div className={cx("mx-auto grid w-full max-w-[1320px] items-center gap-8 px-4 sm:px-8 lg:gap-12 lg:px-[60px]", media && "lg:grid-cols-2")}>
        <div className={cx(!media && "max-w-[960px]")}>
          {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
          <h1 className={xl ? "t-h1-xl" : "t-h1"}>{title}</h1>
          {body && <div className="t-body mt-6 max-w-[760px] space-y-4 text-bv-muted">{body}</div>}
          {cta && (
            <div className="mt-8">
              <PrimaryButton href={cta.href}>{cta.label}</PrimaryButton>
            </div>
          )}
          {underButton && <p className="t-caption mt-3 max-w-[560px]">{underButton}</p>}
        </div>
        {media && <MediaFigure asset={media} priority ratio="8:5" contain={contain} sizes="(min-width: 1024px) 50vw, 100vw" />}
      </div>
    </section>
  );
}

/** Scope list: two or three columns, ruled items, no icons. */
export function ScopeList({
  items,
  columns = 2,
  numbered,
}: {
  items: { title: string; body?: string }[];
  columns?: 2 | 3;
  numbered?: boolean;
}) {
  const titleOnly = items.every((it) => !it.body);
  return (
    <ul className={cx("mt-8 grid gap-x-12 lg:mt-10", columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2")}>
      {items.map((it, i) => (
        <li key={i} className="border-t border-bv-line py-5">
          {numbered && (
            <span aria-hidden="true" className="t-number mb-2 block text-bv-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          {titleOnly ? <p className="t-body text-bv-ink">{it.title}</p> : <h3 className="t-h3">{it.title}</h3>}
          {it.body && <p className="t-body mt-2 text-bv-muted">{it.body}</p>}
        </li>
      ))}
    </ul>
  );
}

const ROW_COLS: Record<number, string> = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-3" };

/**
 * Numbered steps, all visible at once (D6: no sliders). `horizontal` sets them as a row
 * on desktop and a list on mobile. Numbers use the Number style (G14).
 */
export function Steps({
  steps,
  horizontal,
  className,
}: {
  steps: { title: string; body?: ReactNode }[];
  horizontal?: boolean;
  className?: string;
}) {
  if (horizontal) {
    return (
      <ol className={cx("grid gap-x-8 sm:grid-cols-2", ROW_COLS[steps.length] ?? "lg:grid-cols-4", className ?? "mt-8 lg:mt-12")}>
        {steps.map((s, i) => (
          <li key={i} className="border-t border-bv-line py-6">
            <span className="t-number block text-bv-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="t-h3 mt-3">{s.title}</h3>
            {s.body && <p className="t-body mt-2 text-bv-muted">{s.body}</p>}
          </li>
        ))}
      </ol>
    );
  }
  const withBody = steps.some((s) => s.body);
  return (
    <ol className={cx("border-t border-bv-line", className ?? "mt-8 lg:mt-10")}>
      {steps.map((s, i) => (
        <li
          key={i}
          className={cx(
            "grid gap-x-6 gap-y-2 border-b border-bv-line py-5 lg:py-6",
            withBody ? "sm:grid-cols-[56px_1fr] lg:grid-cols-[72px_minmax(0,5fr)_minmax(0,7fr)] lg:items-baseline" : "grid-cols-[48px_1fr] items-baseline sm:grid-cols-[72px_1fr]"
          )}
        >
          <span className="t-number text-bv-accent">{String(i + 1).padStart(2, "0")}</span>
          {withBody ? <h3 className="t-h3">{s.title}</h3> : <p className="t-body text-bv-ink">{s.title}</p>}
          {s.body && <p className="t-body text-bv-muted sm:col-start-2 lg:col-start-3">{s.body}</p>}
        </li>
      ))}
    </ol>
  );
}

/** Process section: heading (and an optional aside) on the left, steps on the right. */
export function ProcessSplit({
  heading,
  steps,
  aside,
}: {
  heading: string;
  steps: { title: string; body?: string }[];
  aside?: ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-5">
        <H2>{heading}</H2>
        {aside && <div className="mt-8">{aside}</div>}
      </div>
      <Steps steps={steps} className="lg:col-span-7" />
    </div>
  );
}

/** Text block on --surface. */
export function SurfaceBlock({ heading, children, id }: { heading?: string; children: ReactNode; id?: string }) {
  return (
    <div id={id} className="max-w-[760px] rounded-lg bg-bv-surface px-6 py-6 lg:px-8 lg:py-8">
      {heading && <H3>{heading}</H3>}
      <div className={cx("t-body text-bv-ink", heading && "mt-3")}>{children}</div>
    </div>
  );
}

/**
 * FAQ accordion: native details/summary, all closed by default, answers always in the DOM.
 * Keyboard: Enter/Space on the question; aria-expanded is mirrored by DetailsA11y (D15).
 */
export function Faq({ heading, items, aside }: { heading: string; items: { q: string; a: ReactNode }[]; aside?: ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <H2>{heading}</H2>
        {aside && <div className="mt-8">{aside}</div>}
      </div>
      <div className="border-t border-bv-line lg:col-span-8">
        {items.map((it, i) => (
          <details key={i} className="group border-b border-bv-line">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-bv-ink transition-colors duration-200 hover:text-bv-accent lg:py-6 [&::-webkit-details-marker]:hidden">
              <span className="t-h3 text-inherit">{it.q}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-2 h-5 w-5 flex-none text-bv-accent" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14" />
                <path d="M12 5v14" className="group-open:hidden" />
              </svg>
            </summary>
            <div className="t-body max-w-[760px] pb-7 pr-10 text-bv-muted">{it.a}</div>
          </details>
        ))}
      </div>
    </div>
  );
}

/** A full-width linked call-to-action band on --ink. */
export function CtaBand({ href, text, eyebrow }: { href: string; text: string; eyebrow?: string }) {
  return (
    <Link href={href} className="flex items-center justify-between gap-6 rounded-lg bg-bv-ink px-6 py-8 text-bv-background transition-colors duration-200 hover:bg-bv-accent-hover sm:px-10 lg:px-14 lg:py-12">
      <span>
        {eyebrow && <span className="t-eyebrow mb-3 block text-bv-background">{eyebrow}</span>}
        <span className="t-h3 block text-bv-background">{linkText(text)}</span>
      </span>
      <ArrowRight aria-hidden="true" strokeWidth={1.5} className="h-6 w-6 flex-none" />
    </Link>
  );
}

// Warranty badge texts (Changes Sheet P05 #4, P06 #2, P08–P10 #2), linking to /warranty.
const WARRANTY_BADGE = {
  renovation: { en: "36-month renovation warranty", ru: "Гарантия 36 месяцев на ремонт" },
  joinery: { en: "48-month furniture warranty", ru: "Гарантия 48 месяцев на мебель" },
};

/** Sits inside a page column (DocPage `beforeFaq`), so it brings no container of its own. */
export function WarrantyStrip({ kind, locale }: { kind: "renovation" | "joinery"; locale: string }) {
  return (
    <div className="pb-10 sm:pb-12 lg:pb-16">
      <CtaBand href="/warranty" text={WARRANTY_BADGE[kind][locale === "ru" ? "ru" : "en"]} />
    </div>
  );
}

/**
 * Concept project card (D10): image with the caption "Concept project · AI-generated image"
 * when an AI image exists; otherwise the text-only card with the name and scope line.
 */
export function ProjectCard({ slug, locale, wide }: { slug: ConceptSlug; locale: string; wide?: boolean; index?: number }) {
  const concept = getConcept(slug);
  if (!concept) return null;
  const media = getMedia(concept.cardImage, locale);
  return (
    <article className="row-span-3 grid grid-rows-subgrid gap-0 border-t border-bv-line pt-5">
      <Link href={`/projects/${concept.slug}`} className="group row-span-2 grid grid-rows-subgrid">
        {media ? (
          <div className="relative mb-5 w-full overflow-hidden rounded-lg bg-bv-surface" style={{ aspectRatio: wide ? "8 / 5" : "4 / 3" }}>
            <Image src={media.src} alt={media.alt} fill sizes={wide ? "100vw" : "(min-width: 640px) 50vw, 100vw"} className="img-zoom object-cover" />
          </div>
        ) : (
          <span />
        )}
        <h3 className="t-h3 flex items-start justify-between gap-4 transition-colors duration-200 group-hover:text-bv-accent">
          <span>{conceptTitle(concept, locale)}</span>
          <ArrowRight aria-hidden="true" strokeWidth={1.5} className="mt-1.5 h-5 w-5 flex-none text-bv-accent" />
        </h3>
      </Link>
      <div>
        <p className="t-body mt-2 text-bv-muted">{conceptScope(concept, locale)}</p>
        {media && <p className="t-caption mt-2">{g("captions", "Concept project card", locale)}</p>}
      </div>
    </article>
  );
}

export function ProjectCards({ slugs, locale }: { slugs: ConceptSlug[]; locale: string }) {
  return (
    <div className="mt-8 grid grid-rows-[auto_auto_auto] gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12">
      {slugs.map((s) => (
        <ProjectCard key={s} slug={s} locale={locale} />
      ))}
    </div>
  );
}

/** Images in a row at equal height, captions beneath; stacked on mobile. Hidden when none exist. */
export function MediaRow({ assets, locale, ratio }: { assets: string[]; locale: string; ratio?: string }) {
  const list = assets.map((id) => getMedia(id, locale)).filter(Boolean) as MediaAsset[];
  if (list.length === 0) return null;
  return (
    <div className={cx("mt-8 grid gap-8 lg:mt-10", list.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
      {list.map((m) => (
        <MediaFigure key={m.id} asset={m} ratio={ratio} sizes="(min-width: 640px) 33vw, 100vw" />
      ))}
    </div>
  );
}

/** Related services: a row of text links (Changes Sheet section 3). */
export function RelatedLinks({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  if (links.length === 0) return null;
  return (
    <Section compact>
      <div className="border-t border-bv-line pt-6">
        <Eyebrow className="text-bv-muted">{heading}</Eyebrow>
        <ul className="mt-2 flex flex-wrap gap-x-8">
          {links.map((l) => (
            <li key={l.href}>
              <TextLink href={l.href}>{l.label}</TextLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/** Text left, media right; without media the text takes the 760 px column. */
export function TextWithMedia({
  heading,
  children,
  media,
  ratio = "4:5",
  contain,
}: {
  heading: string;
  children: ReactNode;
  media: MediaAsset | null;
  ratio?: string;
  contain?: boolean;
}) {
  return (
    <div className={cx("grid gap-8 lg:gap-12", media && "lg:grid-cols-12 lg:items-center")}>
      <div className={cx(media && "lg:col-span-5")}>
        <H2>{heading}</H2>
        <div className="mt-6 space-y-4">{children}</div>
      </div>
      {media && <MediaFigure asset={media} ratio={ratio} contain={contain} sizes="(min-width: 1024px) 45vw, 100vw" className="lg:col-span-6 lg:col-start-7" />}
    </div>
  );
}
