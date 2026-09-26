import Image from "next/image";
import { Fragment, type CSSProperties, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cssRatio, getMedia, type MediaAsset } from "@/data/media";
import { conceptScope, conceptTitle, getConcept, type ConceptSlug } from "@/data/concepts";
import { sc, linkText } from "@/lib/spec";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";
import ParallaxInner from "@/components/ui/ParallaxInner";
import ScrollRail from "@/components/ui/ScrollRail";

// Building blocks for spec pages. Spacing follows spec §8.3/§16: major sections
// 104/72/56 px, compact 64/48/40 px; heading → intro 16 px; intro → content 32–40 px.
// Motion (2026-09-26): every block carries the homepage motion language — accent block
// sweep on H2, word-rise on H1, clip reveal + parallax on images, staggered reveals,
// drawn underlines on links. All of it is CSS/JS enhancement over readable static HTML
// and switches off under prefers-reduced-motion. No shadows, only rounded-lg / rounded-sm.

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
const delay = (ms: number) => ({ ["--reveal-delay" as string]: `${ms}ms` }) as CSSProperties;

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
        "bv-flow scroll-mt-[88px] lg:scroll-mt-[104px]",
        surface ? "bg-bv-surface" : "bg-bv-background",
        compact ? "py-10 md:py-12 lg:py-16" : "py-14 md:py-[72px] lg:py-[104px]",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">{children}</div>
    </section>
  );
}

/** Headline split into words that rise out of a mask one after another (server-rendered, CSS-driven). */
export function RiseWords({ text, start = 0, step = 55 }: { text: string; start?: number; step?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word-mask">
            <span className="word-rise" style={{ ["--d" as string]: `${start + i * step}ms` } as CSSProperties}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}

/** Small accent label with a short rule that draws in before it. */
export function Eyebrow({ children, className, light }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p
      className={cx(
        "text-[11px] font-semibold uppercase tracking-[0.14em] lg:text-[12px]",
        light ? "text-bv-white/85" : "text-bv-accent",
        className
      )}
    >
      {children}
    </p>
  );
}

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
      <h2 className={cx("font-bv-heading text-[32px] font-medium leading-[1.12] text-bv-ink md:text-[40px] lg:text-[48px]", className)}>
        {children}
      </h2>
    </TextBlockAnimation>
  );
}

export function Intro({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx("reveal mt-4 max-w-[68ch] text-[18px] leading-[1.55] text-bv-muted lg:text-[20px]", className)} style={delay(120)}>
      {children}
    </p>
  );
}

/** Body paragraph. `lead` sets it as a Cormorant statement, used when a paragraph carries a section alone. */
export function Body({ children, className, lead }: { children: ReactNode; className?: string; lead?: boolean }) {
  return (
    <p
      className={cx(
        "reveal max-w-[68ch]",
        lead
          ? "font-bv-heading text-[24px] font-medium leading-[1.4] text-bv-ink md:text-[27px] lg:text-[30px]"
          : "text-[16px] leading-[1.65] text-bv-ink lg:text-[17px]",
        className
      )}
      style={delay(80)}
    >
      {children}
    </p>
  );
}

export function Note({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx("reveal mt-8 max-w-[72ch] border-l-2 border-bv-accent/60 pl-4 text-[15px] leading-[1.6] text-bv-muted", className)}>
      {children}
    </p>
  );
}

/**
 * Editorial split for text-only sections: heading on the left (sticky on desktop),
 * text on the right. Fills the width instead of leaving half the section empty.
 */
export function TextSplit({ heading, children, aside }: { heading: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-[128px]">
          <H2>{heading}</H2>
          {aside}
        </div>
      </div>
      <div className="space-y-5 lg:col-span-7 lg:pt-2">{children}</div>
    </div>
  );
}

/** Spec §14.8 media figure: caption and disclosure inside figcaption, never hidden. */
export function MediaFigure({
  asset,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  ratio,
  contain,
  className,
  imageClassName,
  revealDelay = 0,
}: {
  asset: MediaAsset | null;
  sizes?: string;
  priority?: boolean;
  ratio?: string;
  contain?: boolean;
  className?: string;
  imageClassName?: string;
  revealDelay?: number;
}) {
  if (!asset) return null;
  // Temporary placeholder photos always fill the frame; only a real drawing is letterboxed.
  const fitContain = !asset.temporary && (contain ?? asset.isDrawing);
  const image = (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cx(fitContain ? "object-contain p-4" : "object-cover img-zoom", imageClassName)}
    />
  );
  return (
    <figure className={cx("m-0", className)}>
      <div
        className={cx(
          "group relative w-full overflow-hidden rounded-lg",
          priority ? "hero-media-in" : "reveal-clip",
          fitContain ? "border border-bv-line bg-bv-surface" : "bg-bv-line/40"
        )}
        style={{ aspectRatio: cssRatio(ratio ?? asset.ratio), ...delay(revealDelay) }}
      >
        {fitContain ? image : <ParallaxInner>{image}</ParallaxInner>}
      </div>
      <figcaption className="mt-2 flex flex-col gap-1">
        {asset.caption && <span className="text-[14px] leading-[1.5] text-bv-ink">{asset.caption}</span>}
        <span className="text-[11px] leading-[1.4] tracking-[0.04em] text-bv-muted lg:text-[12px]">{asset.disclosure}</span>
      </figcaption>
    </figure>
  );
}

type ButtonVariant = "primary" | "outline" | "light";

const BUTTON_BASE =
  "press btn-shine group inline-flex h-[52px] items-center gap-3 rounded-sm px-7 text-[14px] font-semibold tracking-[0.02em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-bv-accent text-bv-white hover:bg-bv-accent-hover focus-visible:outline-bv-ink",
  outline: "border border-bv-field-border text-bv-ink hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white focus-visible:outline-bv-ink",
  light: "bg-bv-background text-bv-ink hover:bg-bv-white focus-visible:outline-bv-white",
};

/** Button with a light sweep and an arrow that moves forward on hover. */
export function PrimaryButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={cx(BUTTON_BASE, BUTTON_VARIANTS[variant], className)} data-magnetic={variant !== "outline" || undefined}>
      {typeof children === "string" ? linkText(children) : children}
      <ArrowRight aria-hidden="true" strokeWidth={2} className="arrow-nudge h-4 w-4" />
    </Link>
  );
}

/** A standalone call to action ("Our Process", "Explore Bespoke Joinery"): an outline button, not bare text. */
export function CtaButton({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <div className={cx("reveal", className)}>
      <PrimaryButton href={href} variant="outline">
        {children}
      </PrimaryButton>
    </div>
  );
}

/** Inline text link (in lists and next to a button). The underline draws in and the arrow nudges on hover. */
export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-bv-accent transition-colors duration-200 hover:text-bv-accent-hover",
        className
      )}
    >
      <span className="link-draw pb-0.5">{linkText(String(children))}</span>
      <ArrowRight aria-hidden="true" strokeWidth={2} className="arrow-nudge h-4 w-4 flex-none" />
    </Link>
  );
}

/** Spec §8.4 service hero: two halves, 48 px gap, image 8:5; mobile text → CTA → image. */
export function SplitHero({
  eyebrow,
  title,
  body,
  cta,
  media,
  contain,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
  media: MediaAsset | null;
  contain?: boolean;
}) {
  return (
    <section className="bv-flow relative overflow-hidden bg-bv-background pb-14 pt-10 md:pb-[72px] lg:pb-[104px] lg:pt-16">
      <div
        className={cx(
          "relative mx-auto grid w-full max-w-[1320px] items-center gap-8 px-4 sm:px-8 lg:gap-12 lg:px-[60px]",
          media && "lg:grid-cols-2"
        )}
      >
        <div>
          {eyebrow && (
            <div className="hero-in" style={{ animationDelay: "0.05s" }}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1 className="mt-4 font-bv-heading text-[38px] font-medium leading-[1.08] text-bv-ink md:text-[52px] lg:text-[64px]">
            <RiseWords text={title} start={100} />
          </h1>
          <p className="hero-in mt-6 max-w-[56ch] text-[18px] leading-[1.55] text-bv-muted lg:text-[20px]" style={{ animationDelay: "0.45s" }}>
            {body}
          </p>
          {cta && (
            <div className="hero-in mt-8" style={{ animationDelay: "0.6s" }}>
              <PrimaryButton href={cta.href}>{cta.label}</PrimaryButton>
            </div>
          )}
        </div>
        {media && <MediaFigure asset={media} priority ratio="8:5" contain={contain} sizes="(min-width: 1024px) 50vw, 100vw" />}
      </div>
    </section>
  );
}

/**
 * Spec §8.4 scope list: two columns desktop, one mobile, no per-item cards.
 * Items reveal in sequence; on hover an accent rule runs along the top line.
 * Title-only lists are set larger, in Cormorant, so a short list still holds the section.
 */
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
    <ul className={cx("mt-8 grid gap-x-12 lg:mt-10", titleOnly ? "gap-y-2" : "gap-y-6", columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2")}>
      {items.map((it, i) => (
        <li key={i} className="reveal group relative border-t border-bv-line pt-5 pb-3" style={delay(i * 70)}>
          <span
            aria-hidden="true"
            className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-bv-accent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          />
          {numbered ? (
            <span aria-hidden="true" className="text-[12px] font-semibold tracking-[0.12em] text-bv-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : (
            <span aria-hidden="true" className="block h-[6px] w-[6px] bg-bv-accent transition-transform duration-500 group-hover:scale-150" />
          )}
          <p
            className={cx(
              "mt-2 text-bv-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5",
              titleOnly ? "font-bv-heading text-[24px] font-medium leading-[1.25] lg:text-[26px]" : "text-[18px] font-semibold leading-[1.4]"
            )}
          >
            {numbered && <span className="sr-only">{i + 1}. </span>}
            {it.title}
          </p>
          {it.body && <p className="mt-2 text-[16px] leading-[1.65] text-bv-muted lg:text-[17px]">{it.body}</p>}
        </li>
      ))}
    </ul>
  );
}

/**
 * Numbered step list. Vertical: an accent rail fills as the reader scrolls down it.
 * Horizontal (desktop): a rail runs across the top and fills as the list enters.
 * Everything visible, nothing to click.
 */
export function Steps({
  steps,
  horizontal,
  className,
}: {
  steps: { title: string; body?: string }[];
  horizontal?: boolean;
  className?: string;
}) {
  if (horizontal) {
    // Six short steps sit in one row on wide screens (two rows of three below that);
    // the scroll rail only runs when every step shares that single row.
    const six = steps.length === 6;
    return (
      <div className={cx("relative", className ?? "mt-8 lg:mt-12")}>
        <ScrollRail horizontal className={cx("absolute inset-x-0 top-0 hidden h-px", six ? "xl:block" : "lg:block")} />
        <ol className={cx("grid gap-6 lg:gap-8", six ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" : "lg:grid-cols-4")}>
          {steps.map((s, i) => (
            <li
              key={i}
              className={cx("reveal group border-t border-bv-line pt-6", six ? "xl:border-t-0 xl:pt-8" : "lg:border-t-0 lg:pt-8")}
              style={delay(i * 110)}
            >
              <span className="font-bv-heading text-[44px] font-medium leading-none text-bv-accent transition-transform duration-500 group-hover:-translate-y-1 lg:text-[52px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-[18px] font-semibold leading-[1.4] text-bv-ink">{s.title}</p>
              {s.body && <p className="mt-1.5 text-[16px] leading-[1.65] text-bv-muted lg:text-[17px]">{s.body}</p>}
            </li>
          ))}
        </ol>
      </div>
    );
  }
  // Vertical timeline: full-width ruled rows, a node on the rail per step. Steps with a
  // body set title and body side by side on desktop so the row uses the whole width.
  const withBody = steps.some((s) => s.body);
  return (
    <div className={cx("relative", className ?? "mt-8 lg:mt-10")}>
      <ScrollRail className="absolute bottom-0 left-[5px] top-0 w-px" />
      <ol>
        {steps.map((s, i) => (
          <li key={i} className="reveal group relative pl-9 sm:pl-12" style={delay(i * 90)}>
            <span
              aria-hidden="true"
              className={cx(
                "absolute left-0 z-10 h-[11px] w-[11px] rounded-full border border-bv-accent bg-bv-background transition-colors duration-300 group-hover:bg-bv-accent",
                withBody ? "top-[34px] lg:top-[42px]" : "top-1/2 -translate-y-1/2"
              )}
            />
            <div
              className={cx(
                "relative grid gap-x-6 gap-y-2 border-b border-bv-line py-5 lg:py-7",
                i === 0 && "border-t",
                withBody
                  ? "sm:grid-cols-[72px_1fr] lg:grid-cols-[88px_minmax(0,5fr)_minmax(0,7fr)] lg:items-baseline"
                  : "grid-cols-[52px_1fr] items-center sm:grid-cols-[88px_1fr]"
              )}
            >
              <span
                aria-hidden="true"
                className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-bv-accent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />
              <span className="font-bv-heading text-[32px] font-medium leading-none text-bv-accent tabular-nums sm:text-[36px] lg:text-[44px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[18px] font-semibold leading-[1.4] text-bv-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 lg:text-[20px]">
                {s.title}
              </p>
              {s.body && (
                <p className="text-[16px] leading-[1.65] text-bv-muted sm:col-start-2 lg:col-start-3 lg:text-[17px]">{s.body}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Process section as an editorial split: heading (and an optional aside such as the
 * quote block or a note) on the left, the step timeline filling the right. Mobile order
 * follows the spec: heading → steps → aside.
 */
export function ProcessSplit({
  heading,
  steps,
  aside,
}: {
  heading: string;
  steps: { title: string; body?: string }[];
  aside?: ReactNode;
}) {
  // Title-only steps with nothing beside them: a vertical timeline would leave the left
  // half empty, so the steps run across the full width under the heading instead.
  if (!aside && !steps.some((s) => s.body)) {
    return (
      <div>
        <H2>{heading}</H2>
        <Steps steps={steps} horizontal className="mt-10 lg:mt-14" />
      </div>
    );
  }
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-10">
      <div className="lg:col-span-5">
        <H2>{heading}</H2>
      </div>
      <Steps steps={steps} className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:mt-2" />
      {aside && <div className="lg:col-span-5 lg:row-start-2 [&>*]:mt-0">{aside}</div>}
    </div>
  );
}

/** Text block on --surface, max 720 px (spec L04, K06, M04, PR04a, ENG-SHORT). */
export function SurfaceBlock({ heading, children, id }: { heading?: string; children: ReactNode; id?: string }) {
  return (
    <div id={id} className="reveal relative max-w-[720px] overflow-hidden rounded-lg bg-bv-surface px-6 py-6 lg:px-8 lg:py-8">
      <span aria-hidden="true" className="reveal-line absolute left-0 top-0 h-[3px] w-full bg-bv-accent" style={delay(250)} />
      {heading && <h3 className="font-bv-heading text-[24px] font-medium leading-[1.33] text-bv-ink">{heading}</h3>}
      <div className={cx("text-[16px] leading-[1.65] text-bv-ink lg:text-[17px]", heading && "mt-3")}>{children}</div>
    </div>
  );
}

/**
 * Spec §14.3 Q1: details/summary, answers always in the DOM, several may be open.
 * Desktop: heading left, questions right, so the block fills the width.
 */
export function Faq({ heading, items, aside }: { heading: string; items: { q: string; a: string }[]; aside?: ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-[128px]">
          <H2>{heading}</H2>
          {aside && <div className="reveal mt-8" style={delay(160)}>{aside}</div>}
        </div>
      </div>
      <div className="border-t border-bv-line lg:col-span-8">
        {items.map((it, i) => (
          <details key={i} className="reveal group relative border-b border-bv-line open:border-bv-accent/50" style={delay(i * 60)}>
            <summary className="row-hover flex min-h-[72px] cursor-pointer list-none items-center gap-4 py-4 text-[16px] font-semibold text-bv-ink transition-colors duration-200 hover:text-bv-accent sm:gap-6 lg:py-6 lg:text-[19px] [&::-webkit-details-marker]:hidden">
              <span
                aria-hidden="true"
                className="w-7 flex-none font-bv-heading text-[20px] font-medium leading-none text-bv-accent/60 tabular-nums transition-colors duration-300 group-open:text-bv-accent sm:w-9 lg:text-[24px]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">{it.q}</span>
              <span
                aria-hidden="true"
                className="flex h-11 w-11 flex-none items-center justify-center rounded-sm border border-bv-line text-[22px] leading-none text-bv-accent transition-colors duration-300 group-open:border-bv-accent group-open:bg-bv-accent group-open:text-bv-white"
              >
                {/* Only the glyph turns; a rotated box would poke past the content edge at 320 px. */}
                <span className="inline-block transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none">+</span>
              </span>
            </summary>
            <p className="faq-answer max-w-[68ch] pb-7 pl-11 pr-14 text-[16px] leading-[1.7] text-bv-muted sm:pl-[60px] lg:text-[17px]">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

/** Spec §14.5 ENG-SHORT, identical wording on P05, P06, P07. Full-width surface block, heading left, text right. */
export function EngStrip({ locale }: { locale: string }) {
  return (
    <Section compact>
      <div className="reveal relative overflow-hidden rounded-lg bg-bv-surface px-6 py-8 md:px-10 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-14 lg:py-14">
        <span aria-hidden="true" className="reveal-line absolute left-0 top-0 h-[3px] w-full bg-bv-accent" style={delay(250)} />
        <h3 className="font-bv-heading text-[28px] font-medium leading-[1.2] text-bv-ink lg:col-span-5 lg:text-[36px]">
          {sc("C-ENG-SHORT", "Heading", locale)}
        </h3>
        <div className="mt-4 lg:col-span-7 lg:mt-0">
          <p className="text-[16px] leading-[1.65] text-bv-ink lg:text-[18px]">{sc("C-ENG-SHORT", "Body", locale)}</p>
          <div className="mt-6">
            <PrimaryButton href="/about#leadership" variant="outline">
              {sc("C-ENG-SHORT", "Link", locale)}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

/**
 * A full-width linked call-to-action band on --ink: large text, accent arrow tile.
 * On hover an accent wash sweeps across and the arrow moves forward.
 */
export function CtaBand({ href, text, eyebrow }: { href: string; text: string; eyebrow?: string }) {
  return (
    <Link
      href={href}
      className="reveal group relative flex items-center justify-between gap-6 overflow-hidden rounded-lg bg-bv-ink px-6 py-8 text-bv-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bv-ink md:px-10 lg:px-14 lg:py-12"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-left scale-x-0 bg-bv-accent/25 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none"
      />
      <span className="relative">
        {eyebrow && <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.14em] text-bv-background/70 lg:text-[12px]">{eyebrow}</span>}
        <span className="block font-bv-heading text-[26px] font-medium leading-[1.2] md:text-[32px] lg:text-[40px]">{linkText(text)}</span>
      </span>
      <span
        aria-hidden="true"
        className="relative flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-bv-accent text-bv-white transition-colors duration-300 group-hover:bg-bv-background group-hover:text-bv-ink lg:h-16 lg:w-16"
      >
        <ArrowRight strokeWidth={1.8} className="arrow-nudge h-6 w-6" />
      </span>
    </Link>
  );
}

/** Spec §14.7 warranty strips, linking to P22. */
export function WarrantyStrip({ kind, locale }: { kind: "renovation" | "joinery"; locale: string }) {
  const text = sc("C-WARRANTY-STRIP", kind === "renovation" ? "Renovation strip" : "Joinery strip", locale);
  // The term the strip opens with ("4-year…", «4 года…») set large as a decorative anchor.
  const term = text.match(/^\d+/)?.[0];
  return (
    <Section compact>
      <Link
        href="/warranty"
        className="reveal group relative grid items-center gap-6 overflow-hidden rounded-lg bg-bv-ink px-6 py-9 text-bv-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bv-ink sm:grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] md:gap-10 md:px-10 md:py-12 lg:gap-14 lg:px-16 lg:py-16"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left scale-x-0 bg-bv-accent/25 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none"
        />
        <span aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-sm border border-bv-background/10 lg:inset-4" />
        {term && (
          <span
            aria-hidden="true"
            className="relative font-bv-heading text-[88px] font-medium leading-[0.8] text-bv-accent sm:border-r sm:border-bv-background/15 sm:pr-8 md:text-[120px] md:pr-10 lg:pr-14 lg:text-[160px]"
          >
            {term}
          </span>
        )}
        <span className="relative">
          <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.14em] text-bv-background/70 lg:mb-4 lg:text-[12px]">
            {sc("UI", "footer.warranty", locale)}
          </span>
          <span className="block max-w-[26ch] font-bv-heading text-[26px] font-medium leading-[1.18] md:text-[34px] lg:text-[44px]">{linkText(text)}</span>
        </span>
        <span
          aria-hidden="true"
          className="relative flex h-14 w-14 flex-none items-center justify-center rounded-sm bg-bv-accent text-bv-white transition-colors duration-300 group-hover:bg-bv-background group-hover:text-bv-ink sm:col-start-2 md:col-start-auto lg:h-[72px] lg:w-[72px]"
        >
          <ArrowRight strokeWidth={1.8} className="arrow-nudge h-6 w-6 lg:h-7 lg:w-7" />
        </span>
      </Link>
    </Section>
  );
}

/** Spec CARD-PROJECT: one link wrapping image and title; scope line, caption, concept disclosure. */
export function ProjectCard({ slug, locale, wide, index = 0 }: { slug: ConceptSlug; locale: string; wide?: boolean; index?: number }) {
  const concept = getConcept(slug);
  if (!concept) return null;
  const media = getMedia(concept.cardImage, locale);
  return (
    <article className="reveal flex h-full flex-col" style={delay((index % 2) * 140)}>
      <Link href={`/projects/${concept.slug}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bv-ink">
        {media && (
          <div
            className="reveal-clip relative w-full overflow-hidden rounded-lg bg-bv-line/40"
            style={{ aspectRatio: wide ? "8 / 5" : "4 / 3", ...delay((index % 2) * 140) }}
          >
            <ParallaxInner strength={4}>
              <Image src={media.src} alt={media.alt} fill sizes={wide ? "100vw" : "(min-width: 768px) 50vw, 100vw"} className="object-cover img-zoom" />
            </ParallaxInner>
          </div>
        )}
        <h3 className="mt-5 flex items-center justify-between gap-4 font-bv-heading text-[26px] font-medium leading-[1.18] text-bv-ink transition-colors group-hover:text-bv-accent md:text-[28px] lg:text-[30px]">
          <span className="link-draw">{conceptTitle(concept, locale)}</span>
          <ArrowRight aria-hidden="true" strokeWidth={1.6} className="arrow-nudge h-6 w-6 flex-none text-bv-accent" />
        </h3>
      </Link>
      <p className="mt-2 text-[14px] leading-[1.5] text-bv-muted">{conceptScope(concept, locale)}</p>
      {media && (
        <p className="mt-2 flex flex-col gap-1">
          {media.caption && <span className="text-[14px] text-bv-ink">{media.caption}</span>}
          <span className="text-[11px] leading-[1.4] tracking-[0.04em] text-bv-muted lg:text-[12px]">{media.disclosure}</span>
        </p>
      )}
    </article>
  );
}

export function ProjectCards({ slugs, locale }: { slugs: ConceptSlug[]; locale: string }) {
  return (
    <div className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-12">
      {slugs.map((s, i) => (
        <ProjectCard key={s} slug={s} locale={locale} index={i} />
      ))}
    </div>
  );
}

/** Images in a row at equal height, captions and disclosures beneath; stacked on mobile. */
export function MediaRow({ assets, locale, ratio }: { assets: string[]; locale: string; ratio?: string }) {
  const list = assets.map((id) => getMedia(id, locale)).filter(Boolean) as MediaAsset[];
  if (list.length === 0) return null;
  return (
    <div className={cx("mt-8 grid gap-8 lg:mt-10", list.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2")}>
      {list.map((m, i) => (
        <MediaFigure key={m.id} asset={m} ratio={ratio} revealDelay={i * 120} sizes="(min-width: 768px) 33vw, 100vw" />
      ))}
    </div>
  );
}

/**
 * Related pages as surface tiles: index, title and an arrow tile. On hover the tile turns
 * ink, the arrow tile fills accent and an accent rule runs along the bottom.
 */
export function RelatedLinks({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <Section compact>
      <div className="flex items-center gap-6">
        <Eyebrow className="flex-none">{heading}</Eyebrow>
        <span aria-hidden="true" className="reveal-line h-px flex-1 bg-bv-line" style={delay(150)} />
      </div>
      <ul className={cx("mt-6 grid gap-4 lg:mt-8 lg:gap-6", links.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2")}>
        {links.map((l, i) => (
          <li key={l.href} className="reveal" style={delay(i * 80)}>
            <Link
              href={l.href}
              className="group relative flex h-full min-h-[148px] flex-col justify-between gap-8 overflow-hidden rounded-lg bg-bv-surface p-6 transition-colors duration-300 hover:bg-bv-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink lg:min-h-[184px] lg:p-8"
            >
              <span className="flex items-start justify-between gap-4">
                <span aria-hidden="true" className="font-bv-heading text-[20px] font-medium leading-none text-bv-accent tabular-nums lg:text-[24px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 flex-none items-center justify-center rounded-sm border border-bv-ink/15 text-bv-accent transition-colors duration-300 group-hover:border-bv-accent group-hover:bg-bv-accent group-hover:text-bv-white"
                >
                  <ArrowRight strokeWidth={1.8} className="arrow-nudge h-5 w-5" />
                </span>
              </span>
              <span className="font-bv-heading text-[26px] font-medium leading-[1.15] text-bv-ink transition-colors duration-300 group-hover:text-bv-background lg:text-[32px]">
                {linkText(l.label)}
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-bv-accent transition-transform duration-500 group-hover:scale-x-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Text left, media right (spec "Text plus evidence"); mobile heading → text → media. */
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
      {media && (
        <MediaFigure
          asset={media}
          ratio={ratio}
          contain={contain}
          revealDelay={120}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="lg:col-span-6 lg:col-start-7"
        />
      )}
    </div>
  );
}
