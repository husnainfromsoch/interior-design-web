import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import AboutTeaser from "@/components/sections/AboutTeaser";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioPreview />
      <AboutTeaser />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
