import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import MidCta from "@/components/sections/MidCta";

export const metadata: Metadata = {
  title: "Services | G.A.G Interiors Dubai",
  description: "Interior design, approvals, renovation, fit-out, custom kitchens, wardrobes and joinery services across the UAE.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Transforming to reflect your unique style"
        description="Design, approvals, renovation, fit-out, custom kitchens, wardrobes, joinery and materials — one coordinated team, from first drawing to final handover."
      />
      <Services />
      <Testimonials />
      <Pricing />
      <MidCta />
    </>
  );
}
