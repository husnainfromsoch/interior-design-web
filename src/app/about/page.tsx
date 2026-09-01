import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About | Studio Interiors",
  description: "Learn about Studio Interiors, a Dubai-based interior design studio serving the UAE.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Designing timeless spaces for the UAE"
        description="Studio Interiors is a Dubai-based design practice creating considered, luxurious spaces for clients across the Emirates."
      />
      <section className="mx-auto max-w-3xl px-6 py-24 text-muted lg:px-10">
        <p className="leading-relaxed">
          Full studio story, team profiles and design philosophy will be
          added here once brand content and reference material are provided.
        </p>
      </section>
    </>
  );
}
