import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About G.A.G Interiors | Interior Renovation & Fit-Out Dubai",
  description:
    "G.A.G Interiors is a full-cycle interior renovation, fit-out and custom joinery company in the UAE, coordinating design, approvals, execution and custom furniture under one team.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About G.A.G Interiors"
        title="A coordinated team, not a contractor list"
        description="G.A.G Interiors is a full-cycle interior renovation, fit-out and custom joinery company in the UAE, providing coordinated support from design, technical drawings and approvals to renovation, finishing materials, custom furniture, installation and handover."
      />
      <section className="mx-auto max-w-3xl px-6 py-24 text-warm-grey lg:px-8">
        <p className="leading-relaxed">
          Full studio story, team profiles and project approach will be added
          here once brand content and reference material are provided.
        </p>
      </section>
    </>
  );
}
