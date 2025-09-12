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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      className="py-24 md:py-32 lg:py-40 bg-gray-50 min-h-screen flex items-center"
      data-testid="section-integration"
    >
      {/* Same container structure as social proof section */}
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative"
        >
          {/* Main Box with same style as social proof section */}
          <div className="bg-gradient-to-br from-white/80 via-teal-50/60 to-cyan-100/50 rounded-3xl shadow-xl overflow-visible backdrop-blur-sm min-h-[500px] relative">

            <div className="p-16 lg:p-24 relative z-20">
              
              {/* Title with specific line breaks and 30% larger font - left aligned */}
              <motion.div
                variants={itemVariants}
                className="text-left mb-20"
              >
                <h2 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                  data-testid="heading-integration-title"
                >
                  Integração<br />
                  com <span className="bg-gradient-to-r from-[#00857F] to-[#2EC9BC] bg-clip-text text-transparent">segurança<br />
                  e agilidade</span>
                </h2>
              </motion.div>

              {/* Integration Points List - positioned like in reference image */}
              <motion.div
                variants={itemVariants}
                className="mt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 w-full">
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
                      className="flex items-start space-x-4"
                      data-testid={`integration-point-${index + 1}`}
                    >
                      {/* Check Icon with button color */}
                      <div className="flex-shrink-0 mt-1">
                        <Check 
                          className="w-8 h-8 text-[#2ec9bc]" 
                          data-testid={`icon-check-${index + 1}`}
                        />
                      </div>

                      {/* Content with 30% larger font */}
                      <p 
                        className="text-xl text-gray-700 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid={`text-integration-${index + 1}`}
                      >
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
          
          {/* Dashboard Chart Image - positioned outside the box to be fully visible and in front */}
          <div className="absolute -top-8 -right-8 lg:-right-16 z-30">
            <img
              src={dashboardChart}
              alt="Dashboard de integração com gráficos e dados"
              className="w-[36rem] lg:w-[42rem] h-auto rounded-2xl shadow-2xl"
              data-testid="img-dashboard-chart"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}