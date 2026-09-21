import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { caseStudies } from "@/data/caseStudies";
import Parallax from "@/components/ui/Parallax";
import ProjectsIndexList from "./ProjectsIndexList";

export default async function HomeCaseStudies() {
  const t = await getTranslations("HomeCaseStudies");

  const [featured, ...rest] = caseStudies;
  const featuredTags = t(featured.roleKey).split(" · ");
  const listItems = rest.map((c, i) => ({
    id: c.id,
    href: "/portfolio",
    image: c.image,
    title: t(c.titleKey),
    tags: t(c.roleKey).split(" · "),
    num: String(i + 2).padStart(2, "0"),
  }));

  return (
    <section className="bg-bv-background py-14 md:py-[72px] lg:py-[104px]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[var(--font-bv-heading)] text-[32px] font-medium leading-[1.12] text-bv-ink sm:text-[40px] lg:text-[48px]">
              {t("heading")}
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="btn-shine hidden h-[48px] shrink-0 items-center gap-2 rounded-full border border-bv-field-border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:inline-flex"
          >
            {t("allProjects")}
          </Link>
        </div>

        {/* Featured project — the image is left to speak; the caption sits quietly below it */}
        <Link href="/portfolio" className="reveal group mt-12 block lg:mt-16">
          <div className="reveal-clip relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-bv-surface sm:aspect-[21/9]">
            <Parallax distance={6}>
            <Image
              src={featured.image}
              alt={t(featured.titleKey)}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
            </Parallax>
          </div>
          <div className="mt-6 flex flex-col gap-4 border-t border-bv-line pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-[var(--font-bv-body)] text-[14px] font-semibold tracking-[0.1em] text-bv-accent">
                01
              </span>
              <h3 className="mt-2 font-[var(--font-bv-heading)] text-[28px] font-medium leading-[1.15] text-bv-ink transition-colors duration-200 group-hover:text-bv-accent sm:text-[38px] lg:text-[44px]">
                {t(featured.titleKey)}
              </h3>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-[14px] text-bv-muted sm:justify-end sm:text-right">
              {featuredTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </Link>

        {/* Remaining projects — a quiet index; hover reveals the image */}
        <div className="mt-4">
          <ProjectsIndexList items={listItems} />
        </div>

        <div className="reveal mt-10 sm:hidden">
          <Link
            href="/portfolio"
            className="inline-flex h-[48px] items-center gap-2 rounded-full border border-bv-field-border px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-bv-ink transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-bv-ink hover:bg-bv-ink hover:text-bv-white active:translate-y-0 active:duration-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {t("allProjects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
