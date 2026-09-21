import { getTranslations } from "next-intl/server";
import ResponsibilityGallery from "./ResponsibilityGallery";
import { ClipboardList, ShieldCheck, RefreshCcw, Eye } from "lucide-react";

const items = [
  { id: "scope", Icon: ClipboardList },
  { id: "changes", Icon: ShieldCheck },
  { id: "updates", Icon: RefreshCcw },
  { id: "supervision", Icon: Eye },
] as const;

export default async function HomeResponsibility() {
  const t = await getTranslations("HomeResponsibility");

  return (
    <section className="bg-bv-surface py-16 md:py-[96px] lg:py-[128px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-16">
          <div className="reveal lg:col-span-7 xl:col-span-7">
            <span className="block font-[var(--font-bv-body)] text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
              {t("eyebrow")}
            </span>
            <h2 className="mt-2.5 font-[var(--font-bv-heading)] text-[30px] font-medium leading-[1.15] text-bv-ink sm:text-[34px] lg:text-[52px]">
              {t("heading")}
            </h2>
            <p className="mt-5 max-w-2xl text-[18px] leading-[1.6] text-bv-muted">{t("body")}</p>

            <div className="mt-10 rounded-[24px] border border-bv-line bg-bv-background px-6 sm:px-9">
              <ol>
                {items.map((item, i) => (
                  <li
                    key={item.id}
                    className="reveal row-hover group flex items-center justify-between gap-6 border-b border-bv-line py-7 last:border-b-0"
                    style={{ ["--reveal-delay" as string]: `${200 + i * 110}ms` }}
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-bv-field-border/60 bg-bv-surface text-bv-ink transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-bv-accent group-hover:bg-bv-accent group-hover:text-bv-white motion-reduce:transition-none">
                        <item.Icon className="h-[22px] w-[22px]" strokeWidth={1.6} />
                      </span>

                      <div className="min-w-0">
                        <h3 className="font-[var(--font-bv-heading)] text-[20px] font-medium leading-[1.2] text-bv-ink sm:text-[26px]">
                          {t(`${item.id}Title`)}
                        </h3>
                        <p className="mt-1.5 max-w-lg text-[16px] leading-[1.55] text-bv-muted">
                          {t(`${item.id}Body`)}
                        </p>
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="hidden flex-none select-none font-[var(--font-bv-heading)] text-[52px] font-medium leading-none text-bv-line transition-colors duration-300 group-hover:text-bv-accent/30 sm:block"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ResponsibilityGallery
              note={t("contactNote")}
              slides={[
                { src: "/visuals/PHOTO-2025-04-15-12-21-17(1).jpg", alt: t("imageAlt") },
                { src: "/visuals/PHOTO-2025-04-15-09-20-47(4).jpg", alt: t("imageAlt") },
                { src: "/visuals/PHOTO-2025-04-15-09-20-47(9).jpg", alt: t("imageAlt") },
                { src: "/visuals/PHOTO-2025-04-15-11-32-01.jpg", alt: t("imageAlt") },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
