import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ClipboardCheck, FileCheck2, Stamp } from "lucide-react";

const trustPoints = [
  { key: "nocs", Icon: FileCheck2 },
  { key: "compliance", Icon: Stamp },
  { key: "tracking", Icon: ClipboardCheck },
] as const;

export default async function ApprovalsTeaser() {
  const t = await getTranslations("ApprovalsTeaser");
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="reveal-left order-2 lg:order-1">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {t("badge")}
          </span>
          <h2 className="font-serif text-[26px] sm:text-[30px]">{t("title")}</h2>
          <p className="mt-4 max-w-md text-[17px] text-warm-grey">
            {t("body")}
          </p>
          <ul className="mt-8 grid max-w-md grid-cols-1 gap-8 border-t border-stone/60 pt-8 sm:grid-cols-3 sm:gap-6">
            {trustPoints.map(({ key, Icon }, i) => (
              <li
                key={key}
                className={`flex flex-col items-start gap-3 ${
                  i > 0 ? "sm:border-l sm:border-stone/50 sm:pl-6" : ""
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-wood/10">
                  <Icon className="h-5 w-5 text-wood" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="text-[14px] font-semibold leading-tight">
                  {t(`points.${key}.title`)}
                </span>
                <span className="text-[13px] leading-relaxed text-warm-grey">
                  {t(`points.${key}.body`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal-right group relative order-1 aspect-[4/3] overflow-hidden rounded-2xl border border-stone/70 shadow-[0_20px_40px_-20px_rgba(46,42,37,0.35)] lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80"
            alt="Approval documents and permits being reviewed and signed"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
