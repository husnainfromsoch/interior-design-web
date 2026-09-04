import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";

export default async function AboutStats() {
  const t = await getTranslations("AboutStats");
  const stats = [
    { value: 150, suffix: "+", label: t("stat1") },
    { value: 98, suffix: "%", label: t("stat2") },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="reveal-left">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {t("badge")}
          </span>
          <h2 className="font-serif text-[26px] leading-snug sm:text-[32px]">
            {t("titlePlain")} <span className="italic text-wood">{t("titleItalic")}</span>.
          </h2>
          <p className="mt-4 max-w-md text-[17px] text-warm-grey">
            {t("body")}
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              {t("cta")}
            </Button>
          </div>
          <div className="mt-10 flex gap-10 border-t border-stone pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-[32px] text-wood">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-[13px] uppercase tracking-[0.06em] text-warm-grey">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="/visuals/PHOTO-2025-04-15-12-21-20.jpg"
                alt="Wood flooring with balcony view"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="/visuals/PHOTO-2025-04-15-12-21-23.jpg"
                alt="Entrance flooring detail"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-10">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="/visuals/PHOTO-2025-04-15-12-21-47.jpg"
                alt="Outdoor patio tiling with garden edge"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)]">
              <Image
                src="/visuals/PHOTO-2025-04-15-12-21-49.jpg"
                alt="Pool patio walkway with paver detailing"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
