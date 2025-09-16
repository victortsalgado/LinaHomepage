import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InfraHeroSection from "@/components/views/infraestrutura/sections/InfraHeroSection.tsx";

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
        </main>
        <Footer />
      </div>
    </div>
  );
}