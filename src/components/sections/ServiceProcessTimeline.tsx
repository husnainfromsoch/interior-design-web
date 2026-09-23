import { getTranslations } from "next-intl/server";
import type { ServiceProcessStep } from "@/data/services";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

export default async function ServiceProcessTimeline({ steps }: { steps: ServiceProcessStep[] }) {
  const t = await getTranslations("ServiceDetail");
  return (
    <section className="bg-bv-background py-24">
      <div className="mx-auto max-w-[820px] px-6 lg:px-8">
        <div className="reveal mx-auto mb-16 max-w-xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {t("howItWorks")}
          </span>
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="font-bv-heading text-[28px] leading-snug sm:text-[34px]">
              {t("processHeading")}
            </h2>
          </TextBlockAnimation>
        </div>

        <ol className="relative border-l border-bv-line/70 pl-10 sm:pl-12">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="reveal-left relative pb-10 last:pb-0"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <span className="absolute -left-[52px] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-bv-accent bg-bv-background font-bv-heading text-[13px] text-bv-accent sm:-left-[60px] sm:h-10 sm:w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[17px] font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-bv-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
