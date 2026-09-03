import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

const statusStyles = {
  completed: "bg-charcoal text-ivory",
  concept: "bg-ivory text-wood-dark border border-wood-dark",
};

export default async function ProjectsPreview() {
  const t = await getTranslations("ProjectsPreview");
  const tProjects = await getTranslations("Projects");
  const tCommon = await getTranslations("Common");

  return (
    <section id="projects" className="section py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
              {t("badge")}
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px]">{t("title")}</h2>
          </div>
          <p className="max-w-sm text-[17px] text-warm-grey">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal-scale group overflow-hidden rounded-2xl border border-stone/70 bg-ivory shadow-[0_8px_24px_-12px_rgba(46,42,37,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_48px_-20px_rgba(46,42,37,0.3)]"
              style={{ "--reveal-delay": `${(i % 2) * 120}ms` } as React.CSSProperties}
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={tProjects(`${project.id}.title`)}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  priority={i === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-soft-black/70 via-soft-black/0 to-transparent" />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-sm ${statusStyles[project.status]}`}
                >
                  {project.status === "completed" ? tCommon("statusCompleted") : tCommon("statusConcept")}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-serif text-xl leading-snug sm:text-[22px]">{tProjects(`${project.id}.title`)}</h3>
                  <p className="mt-1.5 text-[13px] uppercase tracking-[0.08em] text-wood">
                    {tProjects(`${project.id}.category`)}
                  </p>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex shrink-0 items-center rounded-full border border-charcoal/25 px-5 py-2 text-[13px] font-semibold text-charcoal transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-wood hover:bg-wood hover:text-ivory active:translate-y-0"
                >
                  {t("viewProject")}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-7 text-[12.5px] italic text-warm-grey">{t("disclaimer")}</p>

        <div className="reveal mt-9">
          <Button href="/portfolio" variant="outline">
            {t("viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}
