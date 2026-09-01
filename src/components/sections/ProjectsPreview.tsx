import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

const statusStyles = {
  completed: "bg-charcoal text-ivory",
  concept: "bg-ivory text-wood-dark border border-wood-dark",
};

const statusLabel = {
  completed: "Completed",
  concept: "Design Concept",
};

export default function ProjectsPreview() {
  return (
    <section id="projects" className="section py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-wood">
              Selected Projects
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px]">Proof, before the pitch.</h2>
          </div>
          <p className="max-w-sm text-[17px] text-warm-grey">
            A sample of completed work and design concepts across Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal-scale group overflow-hidden rounded-2xl border border-stone/70 bg-ivory shadow-[0_8px_24px_-12px_rgba(46,42,37,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_48px_-20px_rgba(46,42,37,0.3)]"
              style={{ "--reveal-delay": `${(i % 2) * 120}ms` } as React.CSSProperties}
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  priority={i === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-soft-black/70 via-soft-black/0 to-transparent" />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-sm ${statusStyles[project.status]}`}
                >
                  {statusLabel[project.status]}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-serif text-xl leading-snug sm:text-[22px]">{project.title}</h3>
                  <p className="mt-1.5 text-[13px] uppercase tracking-[0.08em] text-wood">
                    {project.category}
                  </p>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-charcoal transition-colors hover:text-wood"
                >
                  View Project &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-7 text-[12.5px] italic text-warm-grey">
          Images shown are for illustrative purposes and will be replaced with completed project photography.
        </p>

        <div className="reveal mt-9">
          <Button href="/portfolio" variant="outline">
            View All Projects &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
