import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InfraHeroSection from "@/components/views/infraestrutura/sections/InfraHeroSection.tsx";
import InfraSocialProofSection from "@/components/views/infraestrutura/sections/InfraSocialProofSection.tsx";

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
        </main>
        <Footer />
      </div>
    </div>
  );
}