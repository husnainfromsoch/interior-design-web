import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import EnquiryForm from "@/components/ui/EnquiryForm";
import SocialIcons from "@/components/ui/SocialIcons";
import { formCopy } from "@/components/final/formCopy";
import { Faq, H2, Note, RiseWords, Section } from "@/components/spec/blocks";
import { getSiteSettings } from "@/cms/data";
import { legalLine, whatsappHref } from "@/lib/contact";
import { block, g, meta, val } from "@/lib/final";
import { pageMetadata } from "@/lib/seo";
import { faq, pair, sc } from "@/lib/spec";

// P21 Contact (Final Changes Sheet, P21): K01 hero, K02 details with the social icon row
// (G4), K03 "What happens next", then form F1, which omits its own "What happens next"
// here because K03 replaces it (G5), and the FAQ.
// Layout (owner request 2026-10-08, NOT client-approved yet): the details are one row of
// columns under the hero, the steps are ruled rows beside their heading, and the FAQ closes the page above
// the footer. Copy unchanged.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(meta("P21", locale), "/contact", locale);
}

const label = (line: string) => line.slice(0, line.indexOf(": "));
const delay = (ms: number) => ({ ["--reveal-delay" as string]: `${ms}ms` }) as CSSProperties;

const cellLabel = "text-[12px] font-semibold uppercase tracking-[0.14em] text-bv-muted";
const cellValue = "font-bv-heading text-[24px] leading-[1.2] text-bv-ink transition-colors duration-200 hover:text-bv-accent";
const cellText = "max-w-[34ch] text-[16px] leading-[1.6] text-bv-ink";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "SpecUi" });
  const hero = block("P21", "K01", locale);
  const details = block("P21", "K02", locale);
  const next = block("P21", "K03", locale);
  const { contact, legal } = await getSiteSettings(locale);
  const company = legalLine(legal, locale);

  return (
    <>
      {/* K01 hero: heading and intro side by side */}
      <section className="bv-flow bg-bv-background pb-14 pt-10 md:pb-[72px] lg:pb-[104px] lg:pt-16">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h1 className="font-bv-heading text-[42px] font-medium leading-[1.05] text-bv-ink md:text-[62px] lg:text-[80px]">
              <RiseWords text={val(hero[0])} start={100} />
            </h1>
            <p className="hero-in max-w-[480px] text-[18px] leading-[1.55] text-bv-muted lg:pb-3 lg:text-[20px]" style={{ animationDelay: "0.45s" }}>
              {val(hero[1])}
            </p>
          </div>

          {/* K02: one row under a single rule, a column per detail */}
          <dl className="mt-10 grid gap-x-10 gap-y-8 border-t border-bv-line pt-8 sm:grid-cols-2 lg:mt-14 lg:pt-10 xl:grid-cols-[1fr_1.3fr_1fr_1.1fr]">
            <div className="reveal" style={delay(150)}>
              <dt className={cellLabel}>{label(details[0])}</dt>
              <dd className="m-0 mt-4">
                <a href={`tel:${contact.phoneE164}`} className={`group ${cellValue}`}>
                  <span className="link-draw pb-0.5">{contact.phoneDisplay}</span>
                </a>
                <a
                  href={whatsappHref(contact.whatsappNumber, g("f1", "WhatsApp prefilled text", locale))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-2 flex min-h-11 w-fit items-center gap-2 text-[15px] font-semibold text-bv-accent transition-colors duration-200 hover:text-bv-accent-hover"
                >
                  <span className="link-draw pb-0.5">WhatsApp</span>
                  <ArrowUpRight aria-hidden="true" strokeWidth={2} className="arrow-lift h-4 w-4 flex-none" />
                </a>
              </dd>
            </div>
            <div className="reveal" style={delay(240)}>
              <dt className={cellLabel}>{label(details[1])}</dt>
              <dd className="m-0 mt-4">
                <a href={`mailto:${contact.email}`} className={`group ${cellValue}`}>
                  <span className="link-draw pb-0.5">{contact.email}</span>
                </a>
              </dd>
            </div>
            <div className="reveal" style={delay(330)}>
              <dt className={cellLabel}>{label(details[2])}</dt>
              <dd className={`m-0 mt-4 ${cellText}`}>{val(details[2])}</dd>
            </div>
            <div className="reveal" style={delay(420)}>
              <dt className={cellLabel}>{label(details[4])}</dt>
              <dd className={`m-0 mt-4 ${cellText}`}>
                {val(details[4])}
                <SocialIcons className="-ml-3 mt-1" />
              </dd>
            </div>
            {company && (
              <div className="reveal sm:col-span-2 xl:col-span-4" style={delay(510)}>
                <dt className={cellLabel}>{pair(sc("C-P21-K02", "company", locale)).title}</dt>
                <dd className={`m-0 mt-4 ${cellText}`}>{company}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* K03 What Happens Next: heading and note on the left, the steps as ruled rows on the right */}
      <section className="bv-flow bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
        <div className="mx-auto grid w-full max-w-[1320px] gap-8 px-4 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-[60px]">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[128px]">
              <H2>{val(next[0])}</H2>
              <Note className="hidden max-w-[34ch] lg:block">{val(next[4])}</Note>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ol className="border-t border-bv-line">
              {next.slice(1, 4).map((line, i) => (
                <li
                  key={line}
                  className="reveal group relative grid grid-cols-[60px_1fr] items-baseline gap-x-4 border-b border-bv-line py-6 sm:grid-cols-[104px_1fr] lg:grid-cols-[136px_1fr] lg:py-9"
                  style={delay(i * 110)}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-bv-accent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                  <span aria-hidden="true" className="step-numeral font-bv-heading text-[40px] leading-none tabular-nums sm:text-[56px] lg:text-[72px]">
                    {line.slice(0, 2)}
                  </span>
                  <p className="max-w-[32ch] font-bv-heading text-[22px] leading-[1.25] text-bv-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 motion-reduce:transform-none sm:text-[26px] lg:text-[30px]">
                    <span className="sr-only">{line.slice(0, 2)}. </span>
                    {line.slice(3)}
                  </p>
                </li>
              ))}
            </ol>
            <Note className="lg:hidden">{val(next[4])}</Note>
          </div>
        </div>
      </section>

      {/* K04 */}
      <EnquiryForm copy={formCopy(locale)} leadSource="P21" hideNext />

      <Section>
        <Faq heading={t("faq")} items={faq("C-P21-K04", locale)} />
      </Section>
    </>
  );
}
