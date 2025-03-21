import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Logo Section Placeholder */}
      <div className="flex justify-center items-center gap-10 py-16 px-[100px]">
        <div className="h-16 w-32 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Logo 1</span>
        </div>
        <div className="h-16 w-32 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Logo 2</span>
        </div>
        <div className="h-16 w-32 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Logo 3</span>
        </div>
        <div className="h-16 w-32 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Logo 4</span>
        </div>
        <div className="h-16 w-32 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Logo 5</span>
        </div>
        <div className="h-16 w-32 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Logo 6</span>
        </div>
      </div>

      <ServicesSection />

      <CTASection />

      {/* Case studies section placeholder */}
      <section className="my-24">
        <SectionHeading
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          className="mb-16"
        />

        <div className="px-[100px]">
          <div className="bg-darkGreen rounded-card text-white p-16">
            {/* Case study cards would go here */}
            <div className="text-center py-10">
              <span className="text-gray-400">
                Case studies content placeholder
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
