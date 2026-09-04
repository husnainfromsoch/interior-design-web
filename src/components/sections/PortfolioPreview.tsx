import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { projects, type Project } from "@/data/projects";
import PortfolioParallax from "./PortfolioParallax";

const statusConfig = {
  completed: { icon: CheckCircle2, className: "bg-charcoal text-ivory" },
  concept: { icon: Sparkles, className: "bg-ivory/95 text-wood-dark border border-wood-dark" },
} as const;

function ProjectCard({
  project,
  title,
  category,
  statusLabel,
  delay,
}: {
  project: Project;
  title: string;
  category: string;
  statusLabel: string;
  delay: number;
}) {
  const { icon: StatusIcon, className } = statusConfig[project.status];

  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="reveal-scale group relative block overflow-hidden rounded-2xl border border-stone/70 bg-ivory shadow-[0_8px_24px_-14px_rgba(46,42,37,0.18)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-wood/40 hover:shadow-[0_32px_56px_-20px_rgba(46,42,37,0.32)]"
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-soft-black/60 via-soft-black/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
        <span
          className={`absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider shadow-sm ${className}`}
        >
          <StatusIcon size={12} strokeWidth={2} />
          {statusLabel}
        </span>
      </div>
      <div className="flex items-end justify-between gap-3 p-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-wood">{category}</p>
          <h3 className="mt-2 font-serif text-lg text-charcoal">{title}</h3>
        </div>
        <ArrowUpRight
          size={18}
          strokeWidth={1.75}
          aria-hidden
          className="mb-1 shrink-0 -translate-x-1 translate-y-1 text-wood opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </div>
    </Link>
  );
}

export default async function PortfolioPreview() {
  const t = await getTranslations("PortfolioPreview");
  const tProjects = await getTranslations("Projects");
  const tCommon = await getTranslations("Common");

  const completed = projects.filter((p) => p.status === "completed");
  const concept = projects.filter((p) => p.status === "concept");

  return (
    <section className="relative overflow-hidden bg-beige py-24">
      <PortfolioParallax />

      <div className="relative mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wood">{t("badge")}</p>
          <h2 className="mt-4 font-serif text-[34px] text-charcoal">{t("title")}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-warm-grey">{t("subtitle")}</p>
        </div>

        {completed.length > 0 && (
          <div className="mt-16">
            <div className="reveal mb-7 flex items-center gap-4">
              <h3 className="flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
                <CheckCircle2 size={16} className="text-wood" aria-hidden />
                {t("completedHeading")}
              </h3>
              <span className="h-px flex-1 bg-stone/60" />
              <span className="text-xs text-warm-grey">{completed.length}</span>
            </div>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {completed.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  title={tProjects(`${project.id}.title`)}
                  category={tProjects(`${project.id}.category`)}
                  statusLabel={tCommon("statusCompleted")}
                  delay={i * 90}
                />
              ))}
            </div>
          </div>
        )}

        {concept.length > 0 && (
          <div className="mt-16">
            <div className="reveal mb-7 flex items-center gap-4">
              <h3 className="flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
                <Sparkles size={16} className="text-wood" aria-hidden />
                {t("conceptHeading")}
              </h3>
              <span className="h-px flex-1 bg-stone/60" />
              <span className="text-xs text-warm-grey">{concept.length}</span>
            </div>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {concept.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  title={tProjects(`${project.id}.title`)}
                  category={tProjects(`${project.id}.category`)}
                  statusLabel={tCommon("statusConcept")}
                  delay={i * 90}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
