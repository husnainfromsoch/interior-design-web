import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Parallax from "@/components/ui/Parallax";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

const roles = ["chiefEngineer", "projectManagement", "clientRelations"] as const;

export default async function HomeFamily() {
  const t = await getTranslations("HomeFamily");

  return (
    <section className="bv-flow bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-12 lg:items-stretch lg:gap-14 lg:px-[60px]">
        <div className="reveal lg:col-span-7">
          <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
            <h2 className="font-bv-heading text-[32px] font-medium leading-[1.12] md:text-[40px] lg:text-[48px] text-bv-ink">
              {t("heading")}
            </h2>
          </TextBlockAnimation>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-bv-muted">{t("body")}</p>

          <ul className="mt-8 divide-y divide-bv-line border-y border-bv-line">
            {roles.map((id, i) => (
              <li
                key={id}
                className="reveal py-4 font-bv-body text-[15px] leading-[24px] text-bv-ink"
                style={{ ["--reveal-delay" as string]: `${150 + i * 110}ms` }}
              >
                {t(`${id}Title`)}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/about#leadership"
              className="btn-shine inline-flex h-[48px] items-center gap-2 rounded-sm border border-bv-field-border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {t("cta")}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="reveal-clip relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-bv-surface  sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
