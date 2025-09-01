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
import SegmentsSection from "@/components/views/lina-pay/sections/SegmentsSection";





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

            {/* Segments Section */}
            <SegmentsSection />

            {/* Final CTA Section */}
            <section
              id="cta-form-section"
              className="w-full h-[587px] rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(152,216,211,1)_100%)] relative"
            >
              <div className="text-center px-[444px] pt-[249px]">
                <h2 className="[font-family:'Lexend',Helvetica] font-medium text-[#606060] text-[40px] leading-[56px] mb-8">
                  Vamos simplificar e reduzir o custo dos pagamentos?
                </h2>

                <p className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base leading-6 mb-10">
                  Fale com um de nossos especialistas e comece agora a oferecer o
                  Pix com menos atrito, mais segurança e o menor custo do mercado.
                </p>

                <Button className="w-[319px] h-auto px-8 py-4 bg-[#0ab5aa] rounded-[80px] [font-family:'Lexend',Helvetica] font-bold text-white text-base">
                  Solicitar demonstração
                </Button>
              </div>
            </section>

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