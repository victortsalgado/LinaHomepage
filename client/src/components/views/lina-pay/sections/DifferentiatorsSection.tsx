"use client";

import { motion } from "framer-motion";
import { 
  Fingerprint, 
  Wallet, 
  DollarSign, 
  TrendingUp, 
  Zap, 
  ShieldCheck 
} from "lucide-react";

// Differentiators cards data
const differentiatorCards = [
  {
    id: 1,
    icon: Fingerprint,
    title: "Pix por biometria no e-commerce",
    description: "Checkout com um toque, sem senhas ou redirecionamentos para apps."
  },
  {
    id: 2,
    icon: Wallet,
    title: "Pix por aproximação em carteiras digitais",
    description: "Pagamentos em lojas físicas sem o uso de cartões físicos."
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Menor custo por transação do mercado",
    description: "Custos menores que boletos e cartões, sem intermediários."
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Modelo comercial flexível e escalável",
    description: "Adapte o Lina Pay ao crescimento do seu negócio com condições alinhadas às suas necessidades."
  },
  {
    id: 5,
    icon: Zap,
    title: "Integração simplificada e rápida com APIs",
    description: "Tempo de implementação reduzido com suporte técnico direto e documentação robusta."
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Banco Central certificado no JSR e Open Finance",
    description: "Segurança regulatória e conformidade com o primeiro ITP do Brasil."
  }
];

export default function DifferentiatorsSection() {
  // Animation variants for staggered card reveals
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
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--lina-dark)' }} data-testid="section-differentiators">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="text-3xl lg:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-differentiators-title"
          >
            O que torna o Lina Pay diferente
          </h2>
        </motion.div>

        {/* Differentiators Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {differentiatorCards.map((card, index) => {
            const IconComponent = card.icon;
            
            return (
              <motion.div
                key={card.id}
                className="group relative rounded-2xl p-1 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 transition-all duration-300 hover:shadow-[0px_0px_30px_1px] hover:shadow-[var(--lina-cyan)]/30"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                data-testid={`card-differentiator-${index + 1}`}
              >
                {/* Inner card with white background */}
                <div className="relative bg-white rounded-2xl p-8 h-full transition-all duration-200 hover:scale-[0.98]">
                  {/* Card background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--lina-cyan)]/5 to-teal-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[var(--lina-cyan)]/40 transition-all duration-300">
                        <IconComponent 
                          className="w-7 h-7 text-white" 
                          data-testid={`icon-differentiator-${index + 1}`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-800 transition-colors duration-300"
                      style={{ fontFamily: 'Lexend, sans-serif' }}
                      data-testid={`title-differentiator-${index + 1}`}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      data-testid={`description-differentiator-${index + 1}`}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[var(--lina-cyan)]/10 to-teal-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-tr from-teal-100/50 to-[var(--lina-cyan)]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}