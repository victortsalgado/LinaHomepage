"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import dashboardChart from "@/assets/grafico-dashboard.png";

export default function IntegrationSection() {
  // Integration benefits data - 6 items to be displayed in 2 columns of 3 each
  const integrationPoints = [
    "APIs REST bem documentadas e modulares",
    "Homologado no Open Finance e 100% LGPD compliant",
    "Suporte técnico direto com time da Lina",
    "Pronto para rodar em apps móveis, plataformas web, sistemas de BI e ERPs",
    "Redução no time-to-market com pacotes personalizáveis por necessidade",
    "Implementação rápida com SDKs para principais linguagens"
  ];

  return (
    <section 
      className="py-48 md:py-64 lg:py-80 bg-gradient-to-br from-white/80 via-teal-50/60 to-cyan-100/50 relative overflow-hidden"
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

      {/* Main Container - Similar to segments section */}
      <div className="bg-white rounded-3xl shadow-xl mx-6 lg:mx-8 relative overflow-visible">
        <div className="container mx-auto px-16 lg:px-24 py-16 lg:py-24 max-w-[92rem] relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Title with specific line breaks */}
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight"
                style={{ fontFamily: 'Lexend, sans-serif' }}
                data-testid="heading-integration-title"
              >
                Integração<br />
                com <span className="bg-gradient-to-r from-[#00857F] to-[#2EC9BC] bg-clip-text text-transparent">segurança<br />
                e agilidade</span>
              </h2>

              {/* Integration Points List - 2 columns of 3 items each */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {integrationPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.1 + (index * 0.1),
                      ease: "easeOut" 
                    }}
                    className="flex items-start space-x-3"
                    data-testid={`integration-point-${index + 1}`}
                  >
                    {/* Check Icon with button color */}
                    <div className="flex-shrink-0 mt-1">
                      <Check 
                        className="w-6 h-6 text-[#2ec9bc]" 
                        data-testid={`icon-check-${index + 1}`}
                      />
                    </div>

                    {/* Content */}
                    <p 
                      className="text-gray-700 leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      data-testid={`text-integration-${index + 1}`}
                    >
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Dashboard Chart extending outside container */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              {/* Dashboard Chart Image - positioned to extend beyond container */}
              <div className="relative lg:ml-8 lg:mr-[-8rem]">
                <img
                  src={dashboardChart}
                  alt="Dashboard de integração com gráficos e dados"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
                  data-testid="img-dashboard-chart"
                />
                
                {/* Optional overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[var(--lina-cyan)]/5 rounded-2xl" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}