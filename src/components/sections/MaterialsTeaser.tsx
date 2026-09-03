import { getTranslations } from "next-intl/server";
import { BadgeCheck, ShieldCheck, Truck } from "lucide-react";

const swatches = ["#C9C2B6", "#8B6F52", "#D9C7A6", "#2E2A25"];

const trustPillars = [
  { key: "sourced", Icon: ShieldCheck },
  { key: "quality", Icon: BadgeCheck },
  { key: "delivery", Icon: Truck },
] as const;

export default async function MaterialsTeaser() {
  const t = await getTranslations("MaterialsTeaser");
  return (
    <section className="bg-beige py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-stretch gap-14 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="reveal-left group relative min-h-[420px] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)] lg:min-h-0">
          <video
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            src="/videos/Materials.mp4"
            poster="/images/imgi_24_61f3245393d53d502b2dec6b_Hranowsky_Whitworth-620.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Stone, wood and finish samples being selected"
          />
        </div>
        <div className="reveal-right">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {t("badge")}
          </span>
          <h2 className="font-serif text-[26px] sm:text-[30px]">{t("title")}</h2>
          <p className="mt-4 max-w-md text-[17px] text-warm-grey">
            {t("body")}
          </p>
          <div className="my-6 flex gap-3">
            {swatches.map((color) => (
              <div
                key={color}
                className="h-[34px] w-[34px] rounded-full border-2 border-ivory shadow-[0_2px_8px_-2px_rgba(46,42,37,0.3)] ring-1 ring-stone/60 transition-transform duration-200 hover:scale-110"
                style={{ background: color }}
              />
            ))}
          </div>
          <ul className="mt-8 grid max-w-md grid-cols-1 gap-6 border-t border-stone/60 pt-7 sm:grid-cols-3">
            {trustPillars.map(({ key, Icon }) => (
              <li key={key} className="flex flex-col items-start gap-2">
                <Icon className="h-6 w-6 text-wood" strokeWidth={1.5} aria-hidden />
                <span className="text-[14px] font-semibold leading-tight">
                  {t(`trust.${key}.title`)}
                </span>
                <span className="text-[13px] leading-snug text-warm-grey">
                  {t(`trust.${key}.body`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
