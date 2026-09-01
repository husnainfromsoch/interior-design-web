import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PortfolioPreview from "@/components/sections/PortfolioPreview";

export const metadata: Metadata = {
  title: "Projects | G.A.G Interiors Dubai",
  description: "Completed renovation, fit-out and joinery projects and design concepts across Dubai and the UAE.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Projects"
        title="Completed works and design concepts"
      />
      <PortfolioPreview />
    </>
  );
}
