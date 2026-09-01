import Link from "next/link";
import { projects } from "@/data/projects";

export default function PortfolioPreview() {
  return (
    <section className="bg-beige py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm tracking-[0.3em] text-gold uppercase">
              Selected Work
            </p>
            <h2 className="mt-4 font-serif text-4xl text-charcoal">
              Recent projects across the UAE
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm tracking-wide text-charcoal underline underline-offset-4 hover:text-gold"
          >
            View full portfolio
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-lg border border-beige-dark/60 bg-background"
            >
              <div className="aspect-[4/3] w-full bg-beige-dark/60 transition-transform duration-500 group-hover:scale-105" />
              <div className="p-6">
                <p className="text-xs tracking-widest text-gold uppercase">
                  {project.category} — {project.location}
                </p>
                <h3 className="mt-2 font-serif text-lg text-charcoal">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
