import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrialSection from "@/components/views/trial/TrialSection";

// Seção com margem reduzida - criando um wrapper que sobrescreve o padding
function TrialSectionReduced() {
  return (
    <div className="-mt-32 md:-mt-40 lg:-mt-48">
      <TrialSection />
    </div>
  );
}

export default function Trial() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Animated Blur Background */}
      <div className="floating-blur"></div>
      
      {/* Content Layer */}
      <div className="content-layer">
        <Header />
        <main>
          <TrialSection />
          <TrialSectionReduced />
        </main>
        <Footer />
      </div>
    </div>
  );
}