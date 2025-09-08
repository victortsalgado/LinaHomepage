import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrialSection from "@/components/views/trial/TrialSection";

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
          <TrialSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}