import Hero from "@/components/sections/Hero";
import AboutStats from "@/components/sections/AboutStats";
import CapabilityStrip from "@/components/sections/CapabilityStrip";
import Services from "@/components/sections/Services";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import MidCta from "@/components/sections/MidCta";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import GalleryStrip from "@/components/sections/GalleryStrip";
import Testimonials from "@/components/sections/Testimonials";
import Risks from "@/components/sections/Risks";
import MaterialsTeaser from "@/components/sections/MaterialsTeaser";
import ApprovalsTeaser from "@/components/sections/ApprovalsTeaser";
import AboutTeaser from "@/components/sections/AboutTeaser";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStats />
      <CapabilityStrip />
      <Services limit={3} />
      <ProjectsPreview />
      <MidCta />
      <WhyUs />
      <Process />
      <GalleryStrip />
      <Testimonials />
      <Risks />
      <MaterialsTeaser />
      <ApprovalsTeaser />
      <AboutTeaser />
      <FinalCta />
    </>
  );
}
