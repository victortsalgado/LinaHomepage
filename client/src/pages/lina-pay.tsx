import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LinaPayHeroSection from "@/components/views/lina-pay/sections/LinaPayHeroSection";
import SocialProofSection from "@/components/views/lina-pay/sections/SocialProofSection";
import DifferentiatorsSection from "@/components/views/lina-pay/sections/DifferentiatorsSection";
import FeaturesSection from "@/components/views/lina-pay/sections/FeaturesSection";
import IntegrationSection from "@/components/views/lina-pay/sections/IntegrationSection";
import CtaFormSection from "@/components/views/lina-pay/sections/CtaFormSection";





export default function LinaPay(): JSX.Element {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Animated Blur Background */}
      <div className="floating-blur"></div>
      
      {/* Content Layer */}
      <div className="content-layer">
        <Header />
        <main>
          <LinaPayHeroSection />
          <DifferentiatorsSection />
          <SocialProofSection />
          <FeaturesSection />
          <IntegrationSection />
          <CtaFormSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}