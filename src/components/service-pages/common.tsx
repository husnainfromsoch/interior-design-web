import { getTranslations } from "next-intl/server";
import EnquiryForm from "@/components/ui/EnquiryForm";
import FromInsights from "@/components/sections/FromInsights";
import { Faq, PrimaryButton, RelatedLinks, Section } from "@/components/spec/blocks";
import { faq, pair, payShort, sc } from "@/lib/spec";
import { getServicePage, serviceHref, serviceTitle, type ServiceSlug } from "@/data/servicePages";

export type ServicePageProps = { locale: string };

/** CTA target: every hero CTA scrolls to F1 on the current page (spec §14.1). */
export const FORM_ANCHOR = "#project-enquiry";

/**
 * Q1 FAQ. `withPayment` appends the payment question answered with PAY-SHORT verbatim,
 * which spec §14.6 requires in the FAQ of the renovation pages.
 */
export async function FaqSection({
  code,
  locale,
  withPayment,
  cta,
}: {
  code: string;
  locale: string;
  withPayment?: boolean;
  /** Optional button under the FAQ heading, reusing the page's own hero CTA copy. */
  cta?: { label: string; href: string };
}) {
  const t = await getTranslations({ locale, namespace: "SpecUi" });
  const list = faq(code, locale);
  if (withPayment) list.push({ q: pair(sc("C-P01-H07", "Q7", locale)).title, a: payShort(locale) });
  return (
    <Section>
      <Faq
        heading={t("faq")}
        items={list}
        aside={cta && <PrimaryButton href={cta.href} variant="outline">{cta.label}</PrimaryButton>}
      />
    </Section>
  );
}

/** F1 closing the page, with the service preselected and optional related links after it. */
export async function ClosingForm({
  slug,
  locale,
  heading,
  related,
}: {
  slug: ServiceSlug;
  locale: string;
  heading?: string;
  related?: ServiceSlug[];
}) {
  const t = await getTranslations({ locale, namespace: "SpecUi" });
  const page = getServicePage(slug)!;
  return (
    <>
      {/* Insights spec A1: one "From Insights" link after the FAQ and before the form */}
      <FromInsights serviceSlug={slug} />
      <EnquiryForm defaultService={page.formService} topic={serviceTitle(slug, locale)} heading={heading} leadSource={page.page} framed />
      {related && related.length > 0 && (
        <RelatedLinks
          heading={t("related")}
          links={related.map((s) => ({ label: serviceTitle(s, locale), href: serviceHref(s) }))}
        />
      )}
    </>
  );
}
