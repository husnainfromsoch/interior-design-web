import { Fragment, type ReactNode } from "react";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { Faq, FactsStrip, H2, H3, ImageSlot, MediaFigure, PrimaryButton, RelatedLinks, Rich, Section, SplitHero } from "@/components/spec/blocks";
import { getMedia } from "@/data/media";
import { doc, linkHref, type Doc, type DocBlock, type DocSection } from "@/lib/final";
import { formCopy } from "./formCopy";

// Service page layout. Every page built from the final copy uses the same parts in the
// order of the copy: hero, facts strip, sections, "From our projects" case cards, FAQ
// accordion, final CTA followed by form F1, and the related services row. Page-specific
// blocks are added through `after`, `inside` and `beforeFaq`. The look is the pre-sheet
// design (owner decision 2026-10-07): reveals, heading sweep, rounded surfaces.

const RELATED_HEADING = { en: "Related services", ru: "Связанные услуги" };

/** One row of the page column: a thin line above (not on the first row). */
export const ROW = "border-t border-bv-line py-12 first:border-t-0 md:py-16 lg:py-20";

const isFaq = (s: DocSection) => s.blocks.length > 0 && s.blocks.every((b) => b.t === "faq");
const isCases = (s: DocSection) => s.blocks.some((b) => b.t === "case");
const isFinalCta = (s: DocSection, d: Doc) => s === d.sections.at(-1) && s.blocks.some((b) => b.t === "button");

/** Table that turns into labelled blocks on mobile (no horizontal scroll at 375 px). */
function DocTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <table className="reveal w-full border-collapse border-t border-bv-line text-left">
      <thead className="hidden sm:table-header-group">
        <tr>
          {head.map((h) => (
            <th key={h} scope="col" className="t-small border-b border-bv-line py-3 pr-6 align-top text-bv-muted last:pr-0">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="block border-b border-bv-line py-4 sm:table-row sm:py-0">
            {row.map((cell, j) => (
              <td key={j} className="t-body block py-1 text-bv-ink sm:table-cell sm:py-4 sm:pr-6 sm:align-top sm:last:pr-0">
                {j > 0 && <span className="t-small block text-bv-muted sm:hidden">{head[j]}</span>}
                {j === 0 ? <strong className="font-semibold">{cell}</strong> : <Rich text={cell} />}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Block({ block }: { block: DocBlock }) {
  switch (block.t) {
    case "p":
      return (
        <p className="reveal t-body text-bv-ink">
          <Rich text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="t-body list-disc space-y-2 pl-5 text-bv-ink marker:text-bv-accent">
          {block.items.map((it, i) => (
            <li key={i} className="reveal" style={{ ["--reveal-delay" as string]: `${Math.min(i, 8) * 50}ms` }}>
              <Rich text={it} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      // Numbered lists are visible steps: number in the Number style, text beside it.
      return (
        <ol className="border-t border-bv-line">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="reveal row-hover grid grid-cols-[48px_1fr] items-baseline gap-x-4 border-b border-bv-line py-4 sm:grid-cols-[64px_1fr]"
              style={{ ["--reveal-delay" as string]: `${Math.min(i, 8) * 70}ms` }}
            >
              <span className="t-number text-bv-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="t-body text-bv-ink">
                <Rich text={it} />
              </span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return <DocTable head={block.head} rows={block.rows} />;
    case "button":
      return (
        <div className="reveal pt-2">
          <PrimaryButton>{block.text}</PrimaryButton>
        </div>
      );
    default:
      return null;
  }
}

/** One "####" section: H2 on the left (sticky on desktop), body in a column of at most 760 px, a thin line above. */
export function TextSection({ section, heading, children }: { section: DocSection; heading?: string; children?: ReactNode }) {
  return (
    <section className={ROW}>
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[128px]">
            <H2>{heading ?? section.heading}</H2>
          </div>
        </div>
        <div className="max-w-[760px] space-y-5 lg:col-span-7 lg:pt-2">
          {section.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
          {children}
        </div>
      </div>
    </section>
  );
}

/** "From our projects": case cards shown as text until the company's own photos are uploaded. */
export function CaseSection({ section, heading }: { section: DocSection; heading?: string }) {
  const cases = section.blocks.filter((b): b is Extract<DocBlock, { t: "case" }> => b.t === "case");
  return (
    <section className={ROW}>
      <H2>{heading ?? section.heading}</H2>
      <div className={`mt-8 grid gap-x-8 gap-y-8 lg:mt-10 ${cases.length > 1 ? "lg:grid-cols-2" : ""}`}>
        {cases.map((c, i) => (
          <article
            key={c.title}
            className="reveal relative row-span-4 grid grid-rows-subgrid gap-y-4 overflow-hidden rounded-lg bg-bv-surface p-6 sm:p-8 lg:p-10"
            style={{ ["--reveal-delay" as string]: `${(i % 2) * 120}ms` }}
          >
            <span aria-hidden="true" className="reveal-line absolute left-0 top-0 h-[3px] w-full bg-bv-accent" style={{ ["--reveal-delay" as string]: "250ms" }} />
            <H3>{c.title}</H3>
            {c.rows.map((r) => (
              <div key={r.label} className="border-t border-bv-line pt-4">
                <p className="t-eyebrow text-bv-muted">{r.label}</p>
                <p className="t-body mt-2 text-bv-ink">
                  <Rich text={r.text} />
                </p>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export type DocPageProps = {
  /** Page code in the final copy, e.g. "P05" */
  page: string;
  locale: string;
  /** Hero image slot (company photo or AI image); text-only hero without one */
  heroImage?: string;
  /** Hero button label when the copy gives none (P02) */
  heroButton?: string;
  /** Extra blocks placed directly after the section with this 1-based number */
  after?: Record<number, ReactNode>;
  /** Extra block placed inside the section with this 1-based number, under its text */
  inside?: Record<number, ReactNode>;
  /** Blocks placed directly above the FAQ (concept card, warranty badge, palette images) */
  beforeFaq?: ReactNode;
  /** Blocks between the FAQ and the final CTA ("From Insights" link) */
  afterFaq?: ReactNode;
  /** Up to two inline image slots: after the 3rd section and directly before "From our projects" */
  inlineImages?: [string?, string?];
  /** Legal and policy pages: text-only hero and no inline image positions */
  plain?: boolean;
  /** F1 service value preselected in the form */
  formService?: string;
  leadSource?: string;
};

export default async function DocPage({
  page,
  locale,
  heroImage,
  heroButton,
  after,
  inside,
  beforeFaq,
  afterFaq,
  inlineImages,
  plain,
  formService,
  leadSource,
}: DocPageProps) {
  const d = doc(page, locale);
  const lang = locale === "ru" ? "ru" : "en";
  const button = d.button ?? heroButton;
  const [imageA, imageB] = (inlineImages ?? []).map((id) => (id ? getMedia(id, locale) : null));
  const final = d.sections.find((s) => isFinalCta(s, d));

  // Up to two inline images per page. A position without an assigned slot shows a
  // temporary photo until the final image is supplied.
  const inlineImage = (asset: ReturnType<typeof getMedia>, name: string) =>
    plain ? null : (
    <div className="pb-12 md:pb-16 lg:pb-20">
      {asset ? (
        <MediaFigure asset={asset} ratio="16:9" sizes="(min-width: 1320px) 1200px, 100vw" />
      ) : (
        <ImageSlot label={`${page} ${name}`} ratio="16:9" locale={locale} />
      )}
    </div>
  );

  return (
    <>
      {d.h1 && (
        <SplitHero
          title={d.h1}
          body={d.intro.length > 0 ? d.intro.map((p, i) => <p key={i}>{p}</p>) : undefined}
          cta={button ? { label: button } : undefined}
          underButton={d.underButton}
          media={heroImage ? getMedia(heroImage, locale) : null}
          slot={heroImage || plain ? undefined : `${page} hero`}
          locale={locale}
        />
      )}
      <FactsStrip facts={d.facts} />

      <div className="bg-bv-background">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          {d.sections.map((s, i) => {
            const n = i + 1;
            if (s === final) return null;
            const extra = after?.[n];
            if (isFaq(s)) {
              return (
                <Fragment key={n}>
                  {beforeFaq}
                  <section className={ROW}>
                    <Faq
                      heading={s.heading}
                      items={s.blocks.map((b) => (b.t === "faq" ? { q: b.q, a: <Rich text={b.a} /> } : { q: "", a: null }))}
                    />
                  </section>
                  {afterFaq}
                  {extra}
                </Fragment>
              );
            }
            if (isCases(s)) {
              return (
                <Fragment key={n}>
                  {inlineImage(imageB, "inline image 2")}
                  <CaseSection section={s} />
                  {extra}
                </Fragment>
              );
            }
            return (
              <Fragment key={n}>
                <TextSection section={s}>{inside?.[n]}</TextSection>
                {n === 3 && inlineImage(imageA, "inline image 1")}
                {extra}
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* Final CTA: heading, text and button, then form F1 without its own H2 and intro (G13). */}
      {final && (
        <Section surface>
          <H2>{final.heading}</H2>
          <div className="mt-6 max-w-[760px] space-y-5 [&_p]:text-[18px] lg:[&_p]:text-[20px]">
            {final.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
        </Section>
      )}
      <EnquiryForm copy={formCopy(locale)} defaultService={formService} leadSource={leadSource ?? page} noHeading={Boolean(final)} />

      <RelatedLinks heading={RELATED_HEADING[lang]} links={d.related.map((label) => ({ label, href: linkHref(label) }))} />
    </>
  );
}
