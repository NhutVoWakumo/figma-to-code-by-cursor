import CaseStudiesSection from "@/components/CaseStudiesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoBanner />
      <ServicesSection />
      <CtaSection />
      <CaseStudiesSection />
      <WorkingProcessSection />
      <Footer />
    </div>
  );
}
