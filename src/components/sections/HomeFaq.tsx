import { getTranslations } from "next-intl/server";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

const questions = ["existingDesign", "individualWork", "location", "budget", "remote", "afterEnquiry", "payment"] as const;

export default async function HomeFaq() {
  const t = await getTranslations("HomeFaq");

  return (
    <section className="bg-bv-background py-16 md:py-[96px] lg:py-[128px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: sticky intro + contact card */}
          <div className="reveal lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="block font-bv-body text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
                {t("eyebrow")}
              </span>
              <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
                <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] mt-3 font-bv-heading text-[34px] font-medium leading-[1.1] text-bv-ink sm:text-[42px] lg:text-[52px]">
                  {t("heading")}
                </h2>
              </TextBlockAnimation>

              <div className="mt-10 overflow-hidden rounded-none bg-bv-ink p-7 text-bv-white sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bv-white/10 text-bv-white">
                  <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-bv-heading text-[24px] font-medium leading-[1.2] sm:text-[26px]">
                  {t("ctaHeading")}
                </h3>
                <p className="mt-2 max-w-sm text-[15px] leading-[1.6] text-bv-white/70">{t("ctaBody")}</p>
                <a
                  href="#project-enquiry"
                  className="btn-shine group/cta mt-7 inline-flex h-[50px] items-center gap-2 rounded-[2px] bg-bv-white px-6 text-[13px] font-semibold uppercase tracking-[0.06em] text-bv-ink transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-bv-accent hover:text-bv-white active:scale-[0.98] motion-reduce:transition-none"
                >
                  {t("ctaButton")}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5 motion-reduce:transition-none" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: numbered hairline accordion */}
          <div className="lg:col-span-7">
            <div className="border-t border-bv-line">
              {questions.map((q, i) => (
                <details
                  key={q}
                  name="home-faq"
                  className="reveal group border-b border-bv-line"
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                >
                  <summary className="flex cursor-pointer list-none items-start gap-5 py-6 sm:gap-8 sm:py-7 [&::-webkit-details-marker]:hidden">
                    <span
                      aria-hidden="true"
                      className="w-8 flex-none pt-1 font-bv-heading text-[15px] text-bv-muted transition-colors duration-300 group-open:text-bv-accent"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-bv-heading text-[19px] font-medium leading-[1.3] text-bv-ink transition-colors duration-200 group-hover:text-bv-accent sm:text-[23px]">
                      {t(`${q}Q`)}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-bv-field-border/50 text-bv-ink transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-45 group-open:border-bv-accent group-open:bg-bv-accent group-open:text-bv-white motion-reduce:transition-none"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="pb-8 pl-[52px] pr-4 text-[16px] leading-[1.7] text-bv-muted sm:pl-[64px] sm:pr-16 sm:text-[17px]">
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
