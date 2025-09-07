"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function IntegrationSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();

  // Integration benefits data
  const integrationPoints = [
    {
      icon: FileText,
      title: "API REST com documentação e módulos completos",
      description: "Implementação rápida com SDKs e documentação técnica detalhada para todas as linguagens"
    },
    {
      icon: Shield,
      title: "Segurança de ponta a ponta com certificações bancárias",
      description: "Conformidade total com LGPD, Open Finance e padrões de segurança do setor financeiro"
    },
    {
      icon: Zap,
      title: "Suporte técnico especializado e onboarding acelerado",
      description: "Time dedicado para integração em até 48h com monitoramento contínuo de performance"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
      data-testid="section-integration"
    >
      {/* Background decoration */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-l from-[var(--lina-light)] to-cyan-200 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column - Left */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-integration-title"
            >
              <span className="bg-gradient-to-r from-teal-700 to-cyan-400 bg-clip-text text-transparent">
                Integração com segurança
              </span>
              <br />
              <span className="text-gray-800">
                e agilidade
              </span>
            </h2>

            {/* Integration Points List */}
            <div className="space-y-6">
              {integrationPoints.map((point, index) => {
                const IconComponent = point.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.2 + (index * 0.15),
                      ease: "easeOut" 
                    }}
                    className="flex items-start space-x-4 group"
                    data-testid={`integration-point-${index + 1}`}
                  >
                    {/* Check Icon Background */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[var(--lina-cyan)]/40 transition-all duration-300">
                        <IconComponent 
                          className="w-6 h-6 text-white" 
                          data-testid={`icon-integration-${index + 1}`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-800 transition-colors duration-300"
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                        data-testid={`title-integration-${index + 1}`}
                      >
                        {point.title}
                      </h3>
                      <p 
                        className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid={`description-integration-${index + 1}`}
                      >
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual Column - Right */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={imageVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:pl-8"
          >
            {/* Integration Visual Mockup */}
            <div className="relative bg-gradient-to-br from-white via-[var(--lina-light)] to-cyan-50 rounded-2xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
              {/* Background pattern */}
              <div 
                aria-hidden="true"
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--lina-cyan)] to-transparent opacity-10 rounded-bl-full"
              />
              
              {/* Security Shield Icon */}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                
                {/* Security Features */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      LGPD Compliant
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Open Finance Certified
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Bank-Grade Security
                    </span>
                  </div>
                </div>

                {/* Integration Speed Indicator */}
                <div className="mt-8 p-4 bg-white/70 rounded-xl">
                  <p className="text-2xl font-bold text-[var(--lina-cyan)] mb-1" style={{ fontFamily: 'Lexend, sans-serif' }}>
                    48h
                  </p>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Tempo médio de integração
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}