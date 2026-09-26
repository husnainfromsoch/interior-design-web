import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Body, CtaButton, H2, MediaFigure, PrimaryButton, ProjectCards, RiseWords, Section, TextLink, TextSplit } from "@/components/spec/blocks";
import EnquiryForm from "@/components/ui/EnquiryForm";
import CountUp from "@/components/ui/CountUp";
import PlanDrawing from "@/components/ui/PlanDrawing";
import { company, hasLegalLine } from "@/data/company";
import { getMedia, getMediaList } from "@/data/media";
import { linkText, pair, sc } from "@/lib/spec";

// Spec §15.17 P20 Our Story: A01–A07. No names, no portraits, no AI faces. The
// experience table (A03b) publishes only complete rows; there are none yet, so only its
// mandatory introductory line shows. The contracting-entity block (A04b) is complete or
// hidden: never square-bracket placeholders.

/** Previous-employer projects: a row is published only when role, period and responsibility are filled. */
const EXPERIENCE_ROWS: { project: string; employer: string; role: string; period: string; responsibility: string }[] = [];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `${locale === "ru" ? "О компании" : "Our Story"} | Bellvero Group`,
    description: sc("C-P20-A01", "body", locale),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = (code: string, label: string) => sc(code, label, locale);
  const ru = locale === "ru";
  const heroImage = getMedia("BV-IMG-95", locale);
  const production = getMediaList(["BV-IMG-96", "BV-IMG-97", "BV-IMG-98"], locale);
  const columns = c("C-P20-A03b", "table columns").split(" · ");
  const story1 = c("C-P20-A02", "body 1");
  const foundedYear = Number(story1.match(/\b(19|20)\d{2}\b/)?.[0]) || null;
  const rows = EXPERIENCE_ROWS.filter((r) => r.role && r.period && r.responsibility);
  // A03c: short statement with an accent rule, rendered inside the A03b block.
  const a03c = (
    <div className="border-l-2 border-bv-accent pl-6 lg:pl-10">
      <Body lead>{c("C-P20-A03c", "body")}</Body>
    </div>
  );

  const legal = hasLegalLine()
    ? (ru
        ? `Bellvero Group работает как ${company.legal.entityName}, лицензия № ${company.legal.licenceNumber}, выдана ${company.legal.issuingAuthority}.`
        : `Bellvero Group operates as ${company.legal.entityName}, licence no. ${company.legal.licenceNumber}, issued by ${company.legal.issuingAuthority}.`) +
      (company.legal.activities[ru ? "ru" : "en"]
        ? ru
          ? ` Виды деятельности по лицензии: ${company.legal.activities.ru}.`
          : ` The licensed activities are ${company.legal.activities.en}.`
        : "") +
      (ru ? " Договоры, счета и гарантийные документы оформляются на это наименование." : " Contracts, invoices and warranty documents are issued in this name.")
    : null;

  return (
    <>
      {/* A01: full-width intro with one 8:5 image; no people */}
      <section className="bv-flow bg-bv-background pb-14 pt-10 md:pb-[72px] lg:pb-[104px] lg:pt-16">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <h1 className="font-bv-heading text-[38px] font-medium leading-[1.08] text-bv-ink md:text-[52px] lg:col-span-7 lg:text-[64px]">
              <RiseWords text={c("C-P20-A01", "H1")} start={100} />
            </h1>
            <p className="hero-in max-w-[60ch] text-[18px] leading-[1.55] text-bv-muted lg:col-span-5 lg:pb-3 lg:text-[20px]" style={{ animationDelay: "0.45s" }}>
              {c("C-P20-A01", "body")}
            </p>
          </div>
          {heroImage && <MediaFigure asset={heroImage} priority ratio="8:5" className="mt-10" sizes="100vw" />}
        </div>
      </section>

      <Section surface>
        {/* A02: heading with a self-drawing plan sketch and the founding year; story on the right */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[128px]">
              <H2>{c("C-P20-A02", "H2")}</H2>
              <span aria-hidden="true" className="reveal-line mt-6 block h-px w-16 bg-bv-accent" />
              <div className="reveal relative mt-10 max-w-[300px] pb-14 sm:max-w-[440px] lg:mt-14 lg:pb-20">
                <PlanDrawing className="w-full" />
                {foundedYear && (
                  <p
                    aria-hidden="true"
                    className="year-outline pointer-events-none absolute bottom-0 right-0 font-bv-heading text-[80px] sm:text-[104px] font-medium leading-none md:text-[128px] lg:text-[152px]"
                  >
                    <CountUp from={foundedYear - 26} to={foundedYear} />
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <Body lead>
              {foundedYear ? (
                <>
                  {story1.split(String(foundedYear))[0]}
                  <span className="text-bv-accent">{foundedYear}</span>
                  {story1.split(String(foundedYear)).slice(1).join(String(foundedYear))}
                </>
              ) : (
                story1
              )}
            </Body>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-14 lg:gap-10">
              {[c("C-P20-A02", "body 2"), c("C-P20-A02", "body 3")].map((text, i) => (
                <div key={i} className="reveal group relative border-t border-bv-line pt-6" style={{ ["--reveal-delay" as string]: `${120 + i * 120}ms` }}>
                  <span
                    aria-hidden="true"
                    className="reveal-line absolute -top-px left-0 block h-[2px] w-12 bg-bv-accent transition-[width] duration-700 group-hover:w-full"
                    style={{ ["--reveal-delay" as string]: `${300 + i * 120}ms` }}
                  />
                  <p className="text-[16px] leading-[1.7] text-bv-ink lg:text-[17px]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* A03: anchor #leadership; role title, heading, body; separated by 1 px lines */}
      <Section id="leadership">
        <H2>{c("C-P20-A03", "H2")}</H2>
        <div className="mt-8 lg:mt-12">
          {[1, 2, 3].map((n) => {
            const { title, body } = pair(c("C-P20-A03", `profile ${n}`));
            const firstStop = body.indexOf(". ");
            return (
              <article key={n} className="reveal group relative grid gap-3 border-t border-bv-line py-8 lg:grid-cols-12 lg:gap-12 lg:py-12" style={{ ["--reveal-delay" as string]: `${(n - 1) * 90}ms` }}>
                <span aria-hidden="true" className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-bv-accent transition-transform duration-700 group-hover:scale-x-100" />
                <p className="text-[14px] font-semibold uppercase leading-5 tracking-[0.1em] text-bv-accent lg:col-span-4 lg:pt-2">{title}</p>
                <div className="lg:col-span-8">
                  <h3 className="font-bv-heading text-[28px] font-medium leading-[1.25] text-bv-ink lg:text-[34px]">{body.slice(0, firstStop + 1)}</h3>
                  <p className="mt-4 text-[17px] leading-[1.65] text-bv-ink">{body.slice(firstStop + 2)}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* A03b: on --surface directly after A03. The intro line is body size (spec). A03c
          follows inside the same block, in the right column, so neither stands alone as a
          half-empty band: under the intro while the table is empty, after it otherwise. */}
      <Section surface>
        <TextSplit heading={c("C-P20-A03b", "H2")}>
          <Body>{c("C-P20-A03b", "intro")}</Body>
          {rows.length === 0 && a03c}
        </TextSplit>
        {rows.length > 0 && (
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-[16px]">
              <thead>
                <tr className="border-b border-bv-line">
                  {columns.map((col) => (
                    <th key={col} scope="col" className="py-3 pr-4 text-[14px] font-semibold text-bv-muted">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.project} className="border-b border-bv-line">
                    {[r.project, r.employer, r.role, r.period, r.responsibility].map((v, i) => (
                      <td key={i} className="py-3 pr-4 text-bv-ink">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {rows.length > 0 && (
          <div className="mt-10 grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7 lg:col-start-6">{a03c}</div>
          </div>
        )}
      </Section>

      {/* A04: production, WIDE + two DETAIL images; CTAs to P08 and P21 */}
      <Section>
        <H2>{c("C-P20-A04", "H2")}</H2>
        <Body className="mt-6">{c("C-P20-A04", "body")}</Body>
        {production.length > 0 && (
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:mt-10">
            {production.map((m, i) => (
              <MediaFigure key={m.id} asset={m} ratio={i === 0 ? "21:9" : "4:3"} className={i === 0 ? "md:col-span-2" : undefined} />
            ))}
          </div>
        )}
        <div className="reveal mt-10 flex flex-wrap items-center gap-6">
          <PrimaryButton href="/services/bespoke-joinery">{linkText(sc("UI", "cta.explore_joinery", locale))}</PrimaryButton>
          <TextLink href="/contact#project-enquiry">{sc("UI", "cta.workshop_visit", locale)}</TextLink>
        </div>
      </Section>

      {legal && (
        <Section compact>
          <div className="max-w-[720px] rounded-lg bg-bv-surface px-6 py-6 lg:px-8 lg:py-8">
            <h2 className="font-bv-heading text-[26px] font-medium leading-[1.2] text-bv-ink lg:text-[30px]">{c("C-P20-A04b", "H2")}</h2>
            <p className="mt-3 text-[16px] leading-[1.65] text-bv-ink lg:text-[17px]">{legal}</p>
          </div>
        </Section>
      )}

      <Section surface>
        <TextSplit heading={c("C-P20-A05", "H2")}>
          <Body lead>{c("C-P20-A05", "body")}</Body>
          <CtaButton href="/process" className="pt-3">
            {c("C-P01-H05", "Link")}
          </CtaButton>
        </TextSplit>
      </Section>

      <Section>
        <H2>{sc("C-P01-H03", "H2", locale)}</H2>
        <ProjectCards slugs={["coastal-villa-concept", "business-district-office-concept"]} locale={locale} />
      </Section>

      {/* A07: one brand still-life image, then F1 */}
      {getMedia("BV-IMG-99", locale) && (
        <Section compact>
          <MediaFigure asset={getMedia("BV-IMG-99", locale)} ratio="21:9" sizes="100vw" />
        </Section>
      )}
      <EnquiryForm leadSource="P20" />
    </>
  );
}
