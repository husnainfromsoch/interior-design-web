import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";
import TextBlockAnimation from "@/components/ui/TextBlockAnimation";

const statusStyles = {
  completed: "bg-bv-ink text-bv-background",
  concept: "bg-bv-background text-bv-accent-hover border border-bv-accent-hover",
};

export default async function ProjectsPreview() {
  const t = await getTranslations("ProjectsPreview");
  const tProjects = await getTranslations("Projects");
  const tCommon = await getTranslations("Common");

  return (
    <section id="projects" className="section py-24">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="reveal mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-bv-accent">
              {t("badge")}
            </span>
            <TextBlockAnimation blockColor="#98583F" duration={0.7} stagger={0.08}>
              <h2
 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bv-heading text-[28px] sm:text-[34px]"
 style={{ fontVariationSettings: '"WONK" 0' }}
 >
                {t("title")}
              </h2>
            </TextBlockAnimation>
          </div>
          <p className="max-w-sm text-[17px] text-bv-muted">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal-scale group overflow-hidden rounded-none border border-bv-line/70 bg-bv-background  transition-all duration-300 "
              style={{ "--reveal-delay": `${(i % 2) * 120}ms` } as React.CSSProperties}
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={tProjects(`${project.id}.title`)}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  priority={i === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bv-ink/70 via-bv-ink/0 to-transparent" />
                <span
                  className={`absolute left-4 top-4 rounded-[2px] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider  ${statusStyles[project.status]}`}
                >
                  {project.status === "completed" ? tCommon("statusCompleted") : tCommon("statusConcept")}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-bv-heading text-xl leading-snug sm:text-[22px]">{tProjects(`${project.id}.title`)}</h3>
                  <p className="mt-1.5 text-[13px] uppercase tracking-[0.08em] text-bv-accent">
                    {tProjects(`${project.id}.category`)}
                  </p>
                </div>
                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-flex shrink-0 items-center rounded-[2px] border border-bv-ink/25 px-5 py-2 text-[13px] font-semibold text-bv-ink transition-all duration-200 ease-out hover:border-bv-accent hover:bg-bv-accent hover:text-bv-background active:translate-y-0"
                >
                  {t("viewProject")}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-7 text-[12.5px] italic text-bv-muted">{t("disclaimer")}</p>

        <div className="reveal mt-9">
          <Button href="/portfolio" variant="outline">
            {t("viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}
