import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import DataLinkHeroSection from "@/components/views/data-link/sections/hero-section";
import ValuePropositionSection from "@/components/views/data-link/sections/value-proposition-section";
import SocialProofSection from "@/components/views/data-link/sections/social-proof-section";
import SegmentsSection from "@/components/views/data-link/sections/segments-section";
import ApisSection from "@/components/views/data-link/sections/apis-section";
import IntegrationSection from "@/components/views/data-link/sections/integration-section";
import CtaFormSection from "@/components/views/data-link/sections/cta-form-section";

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
          <IntegrationSection />
          <SegmentsSection />
          <CtaFormSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}