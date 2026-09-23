import { getTranslations } from "next-intl/server";
import { AlertTriangle, Building2, Home, ShieldCheck, Store } from "lucide-react";
import type { ServiceFocusArea } from "@/data/services";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

const AREA_ICONS = [Home, Building2, Store, Building2];

export default async function ServiceFocusAreas({
  heading,
  eyebrow,
  areas,
  problems,
  mediaVideo,
  mediaCaption,
}: {
  heading: string;
  eyebrow: string;
  areas: ServiceFocusArea[];
  problems?: string[];
  mediaVideo?: string;
  mediaCaption?: string;
}) {
  const t = await getTranslations("ServiceDetail");
  return (
    <section className="relative overflow-hidden bg-bv-surface py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-bv-accent/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="reveal mx-auto mb-14 max-w-xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {eyebrow}
          </span>
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="font-bv-heading text-[28px] leading-snug sm:text-[34px]">{heading}</h2>
          </TextBlockAnimation>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
          <div className="reveal-left space-y-5">
            {areas.map((area, i) => {
              const Icon = AREA_ICONS[i % AREA_ICONS.length];
              return (
                <div
                  key={area.title}
                  className="group relative overflow-hidden rounded-2xl border border-bv-line/70 bg-bv-background p-6 shadow-[0_2px_10px_-4px_rgba(46,42,37,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-bv-accent/40 hover:shadow-[0_16px_32px_-16px_rgba(46,42,37,0.22)] sm:p-7"
                >
                  <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-bv-accent transition-transform duration-300 group-hover:scale-y-100" />
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-bv-accent/10 text-bv-accent transition-colors duration-300 group-hover:bg-bv-accent group-hover:text-bv-background">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="mb-1.5 text-[16px] font-semibold text-bv-ink">{area.title}</h3>
                      <p className="text-sm leading-relaxed text-bv-muted">{area.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {problems && problems.length > 0 ? (
            <div className="reveal-right rounded-2xl border border-bv-ink/10 bg-bv-ink p-8 text-bv-background sm:p-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-bv-accent/15 text-bv-accent">
                  <ShieldCheck size={20} strokeWidth={1.75} />
                </span>
                <h3 className="font-bv-heading text-[20px] text-bv-background">{t("commonProblems")}</h3>
              </div>
              <ul className="space-y-3.5">
                {problems.map((problem, i) => (
                  <li
                    key={problem}
                    className="group flex items-start gap-3 rounded-xl border border-bv-background/10 bg-bv-background/[0.03] px-4 py-3 transition-colors duration-300 hover:border-bv-accent/30 hover:bg-bv-background/[0.06]"
                    style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-bv-accent/15 text-bv-accent">
                      <AlertTriangle size={13} strokeWidth={2} />
                    </span>
                    <span className="text-sm leading-relaxed text-bv-line">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : mediaVideo ? (
            <div className="reveal-right relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-bv-ink/10 shadow-[0_20px_50px_-24px_rgba(46,42,37,0.35)] lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <video
                className="h-full w-full object-cover"
                src={mediaVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/80 via-bv-ink/10 to-transparent" />
              {mediaCaption && (
                <p className="absolute bottom-6 left-6 right-6 text-[13px] leading-relaxed text-bv-background/90">
                  {mediaCaption}
                </p>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
