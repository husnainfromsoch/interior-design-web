import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import EnquiryForm from "@/components/ui/EnquiryForm";
import SocialIcons from "@/components/ui/SocialIcons";
import { formCopy } from "@/components/final/formCopy";
import { Faq, H3, Section, SplitHero } from "@/components/spec/blocks";
import { getSiteSettings } from "@/cms/data";
import { legalLine, whatsappHref } from "@/lib/contact";
import { block, g, meta, val } from "@/lib/final";
import { pageMetadata } from "@/lib/seo";
import { faq, pair, sc } from "@/lib/spec";

// P21 Contact (Final Changes Sheet, P21): K01 hero, K02 details with the social icon row
// (G4), K03 "What happens next", then the FAQ as built and form F1, which omits its own
// "What happens next" here because K03 replaces it (G5).

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(meta("P21", locale), "/contact", locale);
}

const label = (line: string) => line.slice(0, line.indexOf(": "));

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "SpecUi" });
  const hero = block("P21", "K01", locale);
  const details = block("P21", "K02", locale);
  const next = block("P21", "K03", locale);
  const { contact, legal } = await getSiteSettings(locale);
  const company = legalLine(legal, locale);
  const row = "grid gap-1 border-b border-bv-line py-4 sm:grid-cols-[200px_1fr] sm:gap-6";

  return (
    <>
      <SplitHero title={val(hero[0])} body={<p>{val(hero[1])}</p>} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* K02 Contact details */}
          <div>
          <dl className="border-t border-bv-line">
            <div className={row}>
              <dt className="t-small text-bv-muted">{label(details[0])}</dt>
              <dd className="t-body m-0 flex flex-wrap gap-x-6 text-bv-ink">
                <a href={`tel:${contact.phoneE164}`} className="transition-colors duration-200 hover:text-bv-accent">
                  {contact.phoneDisplay}
                </a>
                <a
                  href={whatsappHref(contact.whatsappNumber, g("f1", "WhatsApp prefilled text", locale))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bv-accent transition-colors duration-200 hover:text-bv-accent-hover"
                >
                  WhatsApp
                </a>
              </dd>
            </div>
            <div className={row}>
              <dt className="t-small text-bv-muted">{label(details[1])}</dt>
              <dd className="t-body m-0 text-bv-ink">
                <a href={`mailto:${contact.email}`} className="transition-colors duration-200 hover:text-bv-accent">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className={row}>
              <dt className="t-small text-bv-muted">{label(details[2])}</dt>
              <dd className="t-body m-0 text-bv-ink">{val(details[2])}</dd>
            </div>
            <div className={row}>
              <dt className="t-small text-bv-muted">{label(details[4])}</dt>
              <dd className="t-body m-0 text-bv-ink">{val(details[4])}</dd>
            </div>
            {company && (
              <div className={row}>
                <dt className="t-small text-bv-muted">{pair(sc("C-P21-K02", "company", locale)).title}</dt>
                <dd className="t-body m-0 text-bv-ink">{company}</dd>
              </div>
            )}
          </dl>
          <SocialIcons className="-ml-3 mt-3" />
          </div>

          {/* K03 What Happens Next */}
          <div>
            <H3>{val(next[0])}</H3>
            <ol className="mt-5 border-t border-bv-line">
              {next.slice(1, 4).map((line) => (
                <li key={line} className="grid grid-cols-[48px_1fr] items-baseline border-b border-bv-line py-4">
                  <span className="t-number text-bv-accent">{line.slice(0, 2)}</span>
                  <span className="t-body text-bv-ink">{line.slice(3)}</span>
                </li>
              ))}
            </ol>
            <p className="t-body mt-5 text-bv-muted">{val(next[4])}</p>
          </div>
        </div>
      </Section>

      <Section>
        <Faq heading={t("faq")} items={faq("C-P21-K04", locale)} />
      </Section>

      {/* K04 */}
      <EnquiryForm copy={formCopy(locale)} leadSource="P21" hideNext />
    </>
  );
}
