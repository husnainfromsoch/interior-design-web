import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { caseStudies } from "@/data/caseStudies";
import ProjectsBentoGrid from "./ProjectsBentoGrid";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

export default async function HomeCaseStudies() {
  const t = await getTranslations("HomeCaseStudies");
  const statusConcept = t("statusConcept");

  const items = caseStudies.map((c, i) => ({
    id: c.id,
    href: "/portfolio",
    image: c.image,
    title: t(c.titleKey),
    tags: t(c.roleKey).split(" · "),
    num: String(i + 1).padStart(2, "0"),
    badge: statusConcept,
  }));

  return (
    <section className="bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 block font-bv-body text-[13px] font-semibold uppercase tracking-[0.14em] text-bv-accent">
              {t("statusConcept")}
            </span>
            <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[52px]">
                {t("heading")}
              </h2>
            </TextBlockAnimation>
          </div>
          <Link
            href="/projects"
            className="btn-shine hidden h-[48px] shrink-0 items-center gap-2 rounded-[2px] border border-bv-field-border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:inline-flex"
          >
            {t("allProjects")}
          </Link>
        </div>
      </div>

      {/* Asymmetric bento grid — one tall lead tile, two stacked, one wide close; simple stagger-in on scroll */}
      <div className="mx-auto mt-12 w-full max-w-[1320px] px-4 sm:px-6 lg:mt-16 lg:px-8">
        <ProjectsBentoGrid items={items} />
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1320px] px-4 sm:hidden sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex h-[48px] items-center gap-2 rounded-[2px] border border-bv-field-border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          {t("allProjects")}
        </Link>
      </div>
    </section>
  );
}
