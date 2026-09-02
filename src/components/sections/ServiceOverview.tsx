import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import type { ServiceStat } from "@/data/services";

export default async function ServiceOverview({
  image,
  secondaryImage,
  title,
  highlights,
  stats,
}: {
  image: string;
  secondaryImage?: string;
  title: string;
  highlights: { title: string; body: string }[];
  stats?: ServiceStat[];
}) {
  const t = await getTranslations("ServiceDetail");
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-8">
        <div className="reveal-left lg:sticky lg:top-28 lg:self-start">
          <div className="relative">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            {secondaryImage && (
              <div className="absolute -bottom-10 -right-6 hidden aspect-[4/5] w-[45%] overflow-hidden rounded-xl border-4 border-ivory shadow-[0_16px_36px_-14px_rgba(46,42,37,0.4)] sm:block">
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
            <Button href="/contact">{t("getQuote")}</Button>
          </div>
        </div>

        <div className="reveal-right">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {t("whatsIncluded")}
          </span>
          <h2 className="max-w-lg font-serif text-[24px] leading-snug sm:text-[28px]">
            {t("overviewHeading")}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((point, i) => (
              <div
                key={point.title}
                className="reveal-scale rounded-2xl border border-stone/70 bg-ivory p-6 shadow-[0_2px_10px_-4px_rgba(46,42,37,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-wood/40 hover:shadow-[0_16px_32px_-16px_rgba(46,42,37,0.25)]"
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-wood/10 font-serif text-sm text-wood">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-1.5 text-[16px] font-semibold">{point.title}</h3>
                <p className="text-sm leading-relaxed text-warm-grey">{point.body}</p>
              </div>
            ))}
          </div>

          {stats && stats.length > 0 && (
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-stone pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[26px] text-wood sm:text-[30px]">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-[11.5px] uppercase leading-snug tracking-[0.05em] text-warm-grey sm:text-[12px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
