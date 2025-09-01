"use client";

import { motion } from "framer-motion";
import { Landmark, CreditCard, AreaChart, TrendingUp, UserCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ApisSection() {
  // API cards data as specified in the requirements
  const apiCards = [
    {
      id: "contas",
      icon: Landmark,
      title: "GET/Contas",
      description: "Acesse saldos, extratos e limites de contas de pessoa física e jurídica."
    },
    {
      id: "cartoes",
      icon: CreditCard,
      title: "GET/Cartões",
      description: "Perfeito para análise de risco e recomendação de produtos financeiros."
    },
    {
      id: "credito",
      icon: AreaChart,
      title: "GET/Crédito",
      description: "Informações de empréstimos e financiamentos para modelagem de crédito."
    },
    {
      id: "investimentos",
      icon: TrendingUp,
      title: "GET/Investimentos",
      description: "Dados de posição e extrato de produtos de investimento para carteiras consolidadas."
    },
    {
      id: "cadastral",
      icon: UserCheck,
      title: "GET/Cadastral",
      description: "Validação de dados cadastrais, endereços e contatos para onboarding e compliance."
    }
  ];

  // Animation variants for cascading reveal effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-white" data-testid="section-apis">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Section Title */}
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-apis-title"
          >
            APIs construídas para facilitar a sua operação
          </motion.h2>

          {/* API Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {apiCards.map((api, index) => {
              const IconComponent = api.icon;
              
              return (
                <motion.div
                  key={api.id}
                  variants={cardVariants}
                  className="group relative bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-testid={`card-api-${api.id}`}
                >
                  {/* Card Content */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* API Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center group-hover:from-lina-cyan/10 group-hover:to-lina-cyan/20 transition-all duration-300">
                      <IconComponent 
                        className="w-8 h-8 text-lina-cyan transition-all duration-300 group-hover:scale-110" 
                        data-testid={`icon-${api.id}`}
                      />
                    </div>

                    {/* API Title */}
                    <h3
                      className="text-xl font-semibold text-gray-900 group-hover:text-lina-cyan transition-colors duration-300"
                      style={{ fontFamily: 'Lexend, sans-serif' }}
                      data-testid={`title-${api.id}`}
                    >
                      {api.title}
                    </h3>

                    {/* API Description */}
                    <p
                      className="text-gray-600 leading-relaxed max-w-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      data-testid={`description-${api.id}`}
                    >
                      {api.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lina-cyan/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}