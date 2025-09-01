import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LinaPayHeroSection from "@/components/views/lina-pay/sections/LinaPayHeroSection";
import AboutLinaPaySection from "@/components/views/lina-pay/sections/AboutLinaPaySection";
import SocialProofSection from "@/components/views/lina-pay/sections/SocialProofSection";
import DifferentiatorsSection from "@/components/views/lina-pay/sections/DifferentiatorsSection";
import FeaturesSection from "@/components/views/lina-pay/sections/FeaturesSection";
import IntegrationSection from "@/components/views/lina-pay/sections/IntegrationSection";
import SegmentsCloudSection from "@/components/views/lina-pay/sections/SegmentsCloudSection";
import CtaFormSection from "@/components/views/lina-pay/sections/CtaFormSection";





export default function LinaPay(): JSX.Element {
  return (
    <>
      <Header />
      <div className="bg-white grid justify-items-center w-screen">
        <div className="bg-white w-full max-w-[1440px]">
          <div className="relative">
            <LinaPayHeroSection />

            {/* What is Lina Pay Section */}
            <AboutLinaPaySection />

            {/* Social Proof Section */}
            <SocialProofSection />

            {/* Differentiators Section */}
            <DifferentiatorsSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Integration Section */}
            <IntegrationSection />

            {/* Segments Cloud Section */}
            <SegmentsCloudSection />

            {/* CTA Form Section */}
            <CtaFormSection />

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}