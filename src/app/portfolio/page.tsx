import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PortfolioPreview from "@/components/sections/PortfolioPreview";

export const metadata: Metadata = {
  title: "Portfolio | Studio Interiors",
  description: "Explore residential, commercial and hospitality interior design projects across Dubai and the UAE.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Portfolio"
        title="Projects across Dubai and the UAE"
      />
      <PortfolioPreview />
    </>
  );
}
