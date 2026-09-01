import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services | Studio Interiors",
  description: "Residential, commercial, hospitality and turnkey interior design services across the UAE.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Design services across the UAE"
        description="From concept to final styling, we manage every detail of your project."
      />
      <Services />
    </>
  );
}
