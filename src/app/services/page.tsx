import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services | G.A.G Interiors Dubai",
  description: "Interior design, approvals, renovation, fit-out, custom kitchens, wardrobes and joinery services across the UAE.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="The full-cycle workflow, explained"
        description="Design, approvals, renovation, fit-out, custom kitchens, wardrobes, joinery and materials — one coordinated team."
      />
      <Services />
    </>
  );
}
