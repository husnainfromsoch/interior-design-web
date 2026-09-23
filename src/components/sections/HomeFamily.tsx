import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Parallax from "@/components/ui/Parallax";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";
import { HardHat, ClipboardList, Handshake } from "lucide-react";

const roles = [
  { id: "chiefEngineer", Icon: HardHat },
  { id: "projectManagement", Icon: ClipboardList },
  { id: "clientRelations", Icon: Handshake },
] as const;

export default async function HomeFamily() {
  const t = await getTranslations("HomeFamily");

  return (
    <section className="bg-bv-background py-14 md:py-[72px] lg:py-[88px]">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-stretch lg:gap-14 lg:px-8">
        <div className="reveal lg:col-span-7">
          <span className="block font-bv-body text-[12px] font-semibold uppercase tracking-[0.16em] text-bv-accent">
            {t("eyebrow")}
          </span>
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] mt-2.5 font-bv-heading text-[30px] font-medium leading-[1.15] text-bv-ink sm:text-[34px] lg:text-[40px]">
              {t("heading")}
            </h2>
          </TextBlockAnimation>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-bv-muted">{t("body")}</p>

          <ul className="mt-8 divide-y divide-bv-line border-y border-bv-line">
            {roles.map(({ id, Icon }, i) => (
              <li
                key={id}
                className="reveal row-hover group flex items-center gap-4 py-4 sm:gap-5"
                style={{ ["--reveal-delay" as string]: `${150 + i * 110}ms` }}
              >
                <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full border border-bv-field-border/60 bg-bv-surface text-bv-ink transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-bv-accent group-hover:bg-bv-accent group-hover:text-bv-white motion-reduce:transition-none sm:h-[72px] sm:w-[72px]">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bv-heading text-[20px] font-medium leading-[1.2] text-bv-ink sm:text-[22px]">
                    {t(`${id}Title`)}
                  </h3>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/about#leadership"
              className="btn-shine inline-flex h-[48px] items-center gap-2 rounded-[2px] border border-bv-field-border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {t("cta")}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="reveal-clip relative aspect-[4/3] w-full overflow-hidden rounded-none bg-bv-surface  sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <Parallax>
              <Image
                src="/visuals/PHOTO-2025-04-15-12-33-54(5).jpg"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-bv-ink/45 via-bv-ink/0 to-bv-ink/0" />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-3 rounded-[2px] bg-bv-white/95 px-4 py-2.5 backdrop-blur">
              <span className="text-[13px] font-semibold text-bv-ink">{t("badgeLabel")}</span>
              <span aria-hidden="true" className="h-3.5 w-px bg-bv-line" />
              <span className="text-[13px] text-bv-muted">{t("badgeValue")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
