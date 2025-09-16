import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InfraHeroSection from "@/components/views/infraestrutura/sections/InfraHeroSection.tsx";
import InfraSocialProofSection from "@/components/views/infraestrutura/sections/InfraSocialProofSection.tsx";
import InfraHighlightsSection from "@/components/views/infraestrutura/sections/InfraHighlightsSection.tsx";
import InfraCoreComponentsSection from "@/components/views/infraestrutura/sections/InfraCoreComponentsSection.tsx";
import InfraMarketLeadersSection from "@/components/views/infraestrutura/sections/InfraMarketLeadersSection.tsx";

export default function InfraestruturaEConectividade(): JSX.Element {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Animated Blur Background */}
      <div className="floating-blur"></div>
      
      {/* Content Layer */}
      <div className="content-layer">
        <Header />
        <main>
          <InfraHeroSection />
          <InfraSocialProofSection />
          <InfraHighlightsSection />
          <InfraCoreComponentsSection />
          <InfraMarketLeadersSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}