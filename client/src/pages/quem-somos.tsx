import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import QuemSomosHeroSection from "@/components/views/quem-somos/sections/QuemSomosHeroSection";
import ValuesSection from "@/components/views/quem-somos/sections/ValuesSection";
import TimelineSection from "@/components/views/quem-somos/sections/TimelineSection";

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <QuemSomosHeroSection />
        <ValuesSection />
        <TimelineSection />
        {/* Additional sections can be added here */}
      </main>
      <Footer />
    </div>
  );
}