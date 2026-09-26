import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";
import { Eyebrow } from "@/components/spec/blocks";
import { company, whatsappHref } from "@/data/company";
import { sc } from "@/lib/spec";

const questions = ["existingDesign", "individualWork", "location", "budget", "remote", "afterEnquiry", "payment"] as const;

export default async function HomeFaq() {
  const t = await getTranslations("HomeFaq");
  const tFooter = await getTranslations("Footer");
  const tForm = await getTranslations("EnquiryForm");
  const locale = await getLocale();

  const contacts = [
    { label: tFooter("phoneLabel"), value: company.phoneDisplay, href: `tel:${company.phoneE164}` },
    {
      label: tFooter("whatsappLabel"),
      value: company.phoneDisplay,
      href: whatsappHref(tForm("whatsappPrefill", { topic: tForm("whatsappTopicDefault") })),
      external: true,
    },
    { label: tFooter("emailLabel"), value: company.email, href: `mailto:${company.email}` },
  ];

  return (
    <section className="bv-flow bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-8 lg:px-[60px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: sticky intro + contact card, so the column carries the section instead of a lone heading */}
          <div className="reveal lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>{t("eyebrow")}</Eyebrow>
              <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
                <h2 className="mt-4 font-bv-heading text-[32px] font-medium leading-[1.12] md:text-[40px] lg:text-[48px] text-bv-ink">
                  {t("heading")}
                </h2>
              </TextBlockAnimation>

              <div className="mt-10 rounded-lg bg-bv-surface p-7 sm:p-9">
                <p className="font-bv-heading text-[24px] font-medium leading-[1.2] text-bv-ink sm:text-[28px]">
                  {t("ctaHeading")}
                </p>
                <p className="mt-3 max-w-[40ch] text-[16px] leading-[1.65] text-bv-muted">{t("ctaBody")}</p>

                <a
                  href="#project-enquiry"
                  className="btn-shine group mt-7 inline-flex h-[52px] items-center gap-3 rounded-sm bg-bv-accent px-7 text-[14px] font-semibold tracking-[0.02em] text-bv-white transition-colors duration-200 hover:bg-bv-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink"
                >
                  {t("ctaButton")}
                  <ArrowRight aria-hidden="true" strokeWidth={2} className="arrow-nudge h-4 w-4" />
                </a>

                <dl className="mt-8 border-t border-bv-line">
                  {contacts.map((c) => (
                    <div key={c.label} className="flex items-center justify-between gap-4 border-b border-bv-line py-1">
                      <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-bv-muted">{c.label}</dt>
                      <dd className="min-w-0 text-right [overflow-wrap:anywhere]">
                        <a
                          href={c.href}
                          {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="inline-flex min-h-11 items-center text-[15px] font-medium text-bv-ink transition-colors duration-200 hover:text-bv-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bv-ink"
                        >
                          {c.value}
                        </a>
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[14px] leading-[1.6] text-bv-muted">{sc("C-FOOTER", "Working hours", locale)}</p>
              </div>
            </div>
          </div>

          {/* Right: numbered hairline accordion; the first answer starts open so the list reads as content, not a menu */}
          <div className="lg:col-span-7">
            <div className="border-t border-bv-line">
              {questions.map((q, i) => (
                <details
                  key={q}
                  name="home-faq"
                  open={i === 0}
                  className="reveal group border-b border-bv-line"
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                >
                  <summary className="flex cursor-pointer list-none items-start gap-5 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bv-ink sm:gap-8 sm:py-7 [&::-webkit-details-marker]:hidden">
                    <span
                      aria-hidden="true"
                      className="w-8 flex-none pt-1.5 font-bv-heading text-[15px] text-bv-muted transition-colors duration-300 group-open:text-bv-accent"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-bv-heading text-[20px] font-medium leading-[1.3] text-bv-ink transition-colors duration-200 group-hover:text-bv-accent sm:text-[24px]">
                      {t(`${q}Q`)}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-sm border border-bv-field-border/50 text-bv-ink transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-bv-ink group-open:border-bv-accent group-open:bg-bv-accent group-open:text-bv-white motion-reduce:transition-none"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="max-w-[62ch] pb-8 pl-[52px] pr-4 text-[16px] leading-[1.7] text-bv-muted sm:pl-[64px] sm:pr-16 sm:text-[17px]">
                    {t(`${q}A`)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
