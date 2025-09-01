import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import DataLinkHeroSection from "@/components/data-link/hero-section";
import ValuePropositionSection from "@/components/data-link/value-proposition-section";
import SocialProofSection from "@/components/data-link/social-proof-section";
import ApisSection from "@/components/data-link/apis-section";

export default function DataLink(): JSX.Element {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Animated Blur Background */}
      <div className="floating-blur"></div>
      
      {/* Content Layer */}
      <div className="content-layer">
        <Header />
        <main>
          <DataLinkHeroSection />
          <SocialProofSection />
          <ValuePropositionSection />
          <ApisSection />
          {/* Other sections can be added here later */}
        </main>
        <Footer />
      </div>
    </div>
  );
}