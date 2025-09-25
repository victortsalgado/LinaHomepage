"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const integrationFeatures = [
  "APIs completas e documentadas",
  "Compatível com VTEX, Shopify, frameworks e mais",
  "Suporte técnico direto com o time de desenvolvedores e time de produto",
  "Homologado no Open Finance e 100% LGPD compliance",
  "Integração e período de testes para desenvolvedores em dias",
];

export default function IntegrationSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: mockupRef, isVisible: mockupVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="w-full h-[787px] rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(251,250,250,1)_0%,rgba(152,216,211,1)_100%)] relative"
      data-testid="section-integration"
    >
      <div className="grid lg:grid-cols-2 items-center h-full px-6 lg:px-[294px] pt-[157px]">
        {/* Content Column - Left */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: -50 }}
          animate={contentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="w-[552px] h-[535px] bg-white rounded-2xl border-0 shadow-xl">
            <CardContent className="p-10">
              <h2 
                className="[font-family:'Lexend',Helvetica] font-medium text-5xl leading-[56px] mb-8"
                data-testid="heading-integration-title"
              >
                <span className="text-[#003a38]">
                  Integre rápido, escale
                </span>
                <span className="text-[#0ab5aa]"> sem limites</span>
              </h2>

              
            </CardContent>
          </Card>
        </motion.div>

        {/* Visual Column - Right */}
        <motion.div
          ref={mockupRef}
          initial={{ opacity: 0, x: 50 }}
          animate={mockupVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          {/* Smartphone Mockup */}
          <div className="relative" data-testid="mockup-smartphone">
            <img
              className="w-[277px] h-[562px] object-cover drop-shadow-2xl"
              alt="Smartphone mockup showing PIX por Biometria interface"
              src="/figmaAssets/mockup01-1.png"
              data-testid="img-smartphone-mockup"
            />
            
            {/* Floating elements for enhanced visual appeal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mockupVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#0ab5aa] to-[#07f4e2] rounded-full flex items-center justify-center shadow-lg"
              data-testid="floating-element-security"
            >
              <span className="text-white text-2xl">🔒</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mockupVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#07f4e2] to-[#0ab5aa] rounded-full flex items-center justify-center shadow-lg"
              data-testid="floating-element-speed"
            >
              <span className="text-white text-lg">⚡</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}