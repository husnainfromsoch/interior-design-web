import Link from "next/link";
import Placeholder from "@/components/ui/Placeholder";
import { projects } from "@/data/projects";

export default function PortfolioPreview() {
  return (
    <section className="bg-beige py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
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
            <div key={project.title} className="group overflow-hidden rounded border border-stone bg-ivory">
              <Placeholder
                className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                status={project.status}
                variant={((i % 4) + 1) as 1 | 2 | 3 | 4}
              />
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
