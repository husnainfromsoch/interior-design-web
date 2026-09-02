import { getTranslations } from "next-intl/server";
import type { ServiceFocusArea } from "@/data/services";

export default async function ServiceFocusAreas({
  heading,
  eyebrow,
  areas,
  problems,
}: {
  heading: string;
  eyebrow: string;
  areas: ServiceFocusArea[];
  problems?: string[];
}) {
  const t = await getTranslations("ServiceDetail");
  return (
    <section className="bg-beige py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal mx-auto mb-14 max-w-xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
            {eyebrow}
          </span>
          <h2 className="font-serif text-[28px] leading-snug sm:text-[34px]">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className="reveal-scale rounded-2xl border border-stone/70 bg-ivory p-7 shadow-[0_2px_10px_-4px_rgba(46,42,37,0.08)]"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-wood/10 font-serif text-sm text-wood">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-[16px] font-semibold">{area.title}</h3>
              <p className="text-sm leading-relaxed text-warm-grey">{area.body}</p>
            </div>
          ))}
        </div>

        {problems && problems.length > 0 && (
          <div className="reveal mt-16 rounded-2xl border border-stone/70 bg-ivory p-8 sm:p-10">
            <h3 className="mb-6 font-serif text-[20px]">{t("commonProblems")}</h3>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-2.5 text-sm text-warm-grey">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-wood" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
