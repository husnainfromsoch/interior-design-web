import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";
import type { ServiceStat } from "@/data/services";

export default async function ServiceOverview({
  image,
  secondaryImage,
  title,
  highlights,
  stats,
  ctaLabel,
}: {
  image: string;
  secondaryImage?: string;
  title: string;
  highlights: { title: string; body: string }[];
  stats?: ServiceStat[];
  ctaLabel?: string;
}) {
  const t = await getTranslations("ServiceDetail");
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-8">
        <div className="reveal-left lg:sticky lg:top-28 lg:self-start">
          <div className="relative">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-none border border-bv-line/70 ">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>
            {secondaryImage && (
              <div className="absolute -bottom-10 -right-6 hidden aspect-[4/5] w-[45%] overflow-hidden rounded-none border-4 border-bv-background  sm:block">
                <Image
                  src={secondaryImage}
                  alt={`${title} detail`}
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <div className="mt-16 sm:mt-14">
            <Button href="/contact">{ctaLabel ?? t("getQuote")}</Button>
          </div>
        </div>

        <div className="reveal-right">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {t("whatsIncluded")}
          </span>
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] max-w-lg font-bv-heading text-[24px] leading-snug sm:text-[28px]">
              {t("overviewHeading")}
            </h2>
          </TextBlockAnimation>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((point, i) => (
              <div
                key={point.title}
                className="reveal-scale rounded-none border border-bv-line/70 bg-bv-background p-6  transition-all duration-200 hover:border-bv-accent/40 "
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-bv-accent/10 font-bv-heading text-sm text-bv-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-1.5 text-[16px] font-semibold">{point.title}</h3>
                <p className="text-sm leading-relaxed text-bv-muted">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
