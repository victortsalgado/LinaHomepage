"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const integrationFeatures = [
  "APIs completas e documentadas",
  "Suporte técnico direto com o time de desenvolvedores e time de produto",
  "Homologado no Open Finance e 100% LGPD compliance",
  "Integração e período de testes para desenvolvedores em dias",
];

export default function IntegrationSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-[linear-gradient(0deg,rgba(251,250,250,1)_0%,rgba(152,216,211,1)_100%)] min-h-screen flex items-center"
      data-testid="section-integration"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="bg-white rounded-3xl border-0 shadow-xl overflow-hidden backdrop-blur-sm">
            <CardContent className="p-16 lg:p-24">
              <div className="max-w-2xl">
                <h2 
                  className="[font-family:'Lexend',Helvetica] font-medium text-4xl md:text-5xl leading-[1.1] mb-8"
                  data-testid="heading-integration-title"
                >
                  <span className="text-[#003a38]">
                    Integre rápido,<br />
                    escale
                  </span>
                  <span className="text-[#0ab5aa]"> sem limites</span>
                </h2>

                <div className="space-y-6">
                  {integrationFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2 + (index * 0.1),
                        ease: "easeOut" 
                      }}
                      className="flex items-start gap-4"
                      data-testid={`integration-feature-${index + 1}`}
                    >
                      <img
                        className="w-4 h-4 mt-1 flex-shrink-0"
                        alt="Check"
                        src="/figmaAssets/check.svg"
                        data-testid={`icon-check-${index + 1}`}
                      />
                      <p 
                        className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-lg leading-relaxed"
                        data-testid={`text-feature-${index + 1}`}
                      >
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}