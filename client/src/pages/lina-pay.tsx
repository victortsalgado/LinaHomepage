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

            {/* Footer */}
            <footer className="w-full h-[232px] bg-[#003a38] shadow-[4px_4px_8px_#0ab5aa1a] relative">
              <div className="text-center pt-[141px]">
                <p className="[font-family:'Lexend',Helvetica] font-normal text-[#527572] text-base leading-6">
                  © 2025 Lina Open X<br />
                  Todos os direitos reservados.
                </p>

                <div className="w-[60px] h-[19px] mx-auto mt-4 relative overflow-hidden">
                  <img
                    className="w-0.5 absolute h-[19px] top-0 left-[18px]"
                    alt="Vector"
                    src="/figmaAssets/vector.svg"
                  />
                  <img
                    className="w-[15px] absolute h-[19px] top-0 left-[45px]"
                    alt="Vector"
                    src="/figmaAssets/vector-1.svg"
                  />
                  <img
                    className="w-3 absolute h-[19px] top-0 left-0"
                    alt="Vector"
                    src="/figmaAssets/vector-3.svg"
                  />
                  <img
                    className="w-[15px] absolute h-[19px] top-0 left-[26px]"
                    alt="Vector"
                    src="/figmaAssets/vector-2.svg"
                  />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}