import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrialHero from "@/components/views/trial/TrialHero";
import TrialSection from "@/components/views/trial/TrialSection";
import TrialSection2 from "@/components/views/trial/TrialSection2";

export default function Trial() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Animated Blur Background */}
      <div className="floating-blur"></div>
      
      {/* Content Layer */}
      <div className="content-layer">
        <Header />
        <main>
          <TrialHero />
          <TrialSection />
          <TrialSection2 />
        </main>
        <Footer />
      </div>
    </div>
  );
}