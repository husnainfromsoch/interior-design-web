import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Faq, H2, Note, RiseWords, Section, Steps } from "@/components/spec/blocks";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { company, legalLine, whatsappHref } from "@/data/company";
import { faq, pair, sc } from "@/lib/spec";

// Spec §15.18 P21 Contact: K01–K04. No imagery by design, no map, no second form.

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `${locale === "ru" ? "Контакты" : "Contact"} | Bellvero Group`,
    description: sc("C-P21-K01", "body", locale),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "SpecUi" });
  const tForm = await getTranslations({ locale, namespace: "EnquiryForm" });
  const c = (code: string, label: string) => sc(code, label, locale);
  const lines = (["hours", "locations", "meetings"] as const).map((k) => pair(c("C-P21-K02", k)));
  const company_ = legalLine(locale);
  const companyLabel = pair(c("C-P21-K02", "company")).title;
  const prefill = tForm("whatsappPrefill", { topic: tForm("whatsappTopicDefault") });

  const details = (
    <dl className="grid gap-6">
      <div>
        <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-bv-muted">WhatsApp</dt>
        <dd className="m-0 mt-1">
          <a href={whatsappHref(prefill)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-[17px] font-semibold text-bv-ink hover:text-bv-accent">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-bv-accent" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm4.52 11.99c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74 1.47.64 2.05.69 2.78.58.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z" />
            </svg>
            {sc("UI", "cta.whatsapp", locale)}
          </a>
        </dd>
      </div>
      <div>
        <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-bv-muted">{sc("UI", "cta.call", locale)}</dt>
        <dd className="m-0 mt-1">
          <a href={`tel:${company.phoneE164}`} className="inline-flex min-h-[44px] items-center text-[17px] font-semibold text-bv-ink hover:text-bv-accent">
            {company.phoneDisplay}
          </a>
        </dd>
      </div>
      <div>
        <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-bv-muted">Email</dt>
        <dd className="m-0 mt-1">
          <a href={`mailto:${company.email}`} className="inline-flex min-h-[44px] items-center text-[17px] font-semibold text-bv-ink hover:text-bv-accent">
            {company.email}
          </a>
        </dd>
      </div>
      {lines.map((l) => (
        <div key={l.title}>
          <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-bv-muted">{l.title}</dt>
          <dd className="m-0 mt-1 text-[16px] leading-[1.6] text-bv-ink">{l.body}</dd>
        </div>
      ))}
      {company_ && (
        <div>
          <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-bv-muted">{companyLabel}</dt>
          <dd className="m-0 mt-1 text-[16px] leading-[1.6] text-bv-ink">{company_}</dd>
        </div>
      )}
    </dl>
  );

  return (
    <>
      {/* K01: H1 and intro, details left 5 columns, F1 right 7; mobile H1 → intro → form → details */}
      <section className="bv-flow bg-bv-background pb-14 pt-10 md:pb-[72px] lg:pb-[104px] lg:pt-16">
        <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-[60px]">
          <div className="lg:col-span-5">
            <h1 className="font-bv-heading text-[38px] font-medium leading-[1.08] text-bv-ink md:text-[52px] lg:text-[64px]">
              <RiseWords text={c("C-P21-K01", "H1")} start={100} />
            </h1>
            <p className="hero-in mt-6 max-w-[56ch] text-[18px] leading-[1.55] text-bv-muted lg:text-[20px]" style={{ animationDelay: "0.4s" }}>{c("C-P21-K01", "body")}</p>
            <div className="hero-in mt-10 hidden lg:block" style={{ animationDelay: "0.6s" }}>{details}</div>
          </div>
          <div className="hero-in rounded-lg bg-bv-surface px-6 py-8 lg:col-span-7 lg:p-12" style={{ animationDelay: "0.3s" }}>
            <EnquiryForm bare leadSource="P21" />
          </div>
          <div className="lg:hidden">{details}</div>
        </div>
      </section>

      <Section surface>
        <H2>{c("C-P21-K03", "H2")}</H2>
        <Steps steps={[1, 2, 3].map((n) => ({ title: c("C-P21-K03", String(n)) }))} />
        <Note>{c("C-P21-K03", "note")}</Note>
      </Section>

      <Section>
        <Faq heading={t("faq")} items={faq("C-P21-K04", locale)} />
      </Section>
    </>
  );
}
