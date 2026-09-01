import Placeholder from "@/components/ui/Placeholder";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <div key={project.title} className="reveal">
              <Placeholder className="mb-4 aspect-[3/4]" status={project.status} variant={((i % 4) + 1) as 1 | 2 | 3 | 4} />
              <h3 className="text-[17px] font-medium">{project.title}</h3>
              <p className="text-[13px] text-warm-grey">{project.category}</p>
            </div>
          ))}
        </div>

        <p className="reveal mt-7 text-[12.5px] italic text-warm-grey">
          Design concepts are AI-generated visualisations, clearly labelled and never shown as completed work.
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
