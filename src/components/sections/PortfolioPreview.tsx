import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const statusStyles = {
  completed: "bg-charcoal text-ivory",
  concept: "bg-ivory text-wood-dark border border-wood-dark",
};

const statusLabel = {
  completed: "Completed",
  concept: "Design Concept",
};

export default function PortfolioPreview() {
  return (
    <section className="bg-beige py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wood">Selected Work</p>
            <h2 className="mt-4 font-serif text-[34px] text-charcoal">Recent projects across the UAE</h2>
          </div>
          <Link href="/portfolio" className="text-sm tracking-wide text-charcoal underline underline-offset-4 hover:text-wood">
            View full portfolio
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal-scale group overflow-hidden rounded-xl border border-stone/70 bg-ivory shadow-[0_2px_10px_-4px_rgba(46,42,37,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-wood/40 hover:shadow-[0_16px_32px_-16px_rgba(46,42,37,0.25)]"
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span
                  className={`absolute left-3.5 top-3.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-sm ${statusStyles[project.status]}`}
                >
                  {statusLabel[project.status]}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-wood">{project.category}</p>
                <h3 className="mt-2 font-serif text-lg text-charcoal">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
