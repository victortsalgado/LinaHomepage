"use client";

import { motion } from "framer-motion";
import { Heading } from "@/components/ui/Heading";
import { 
  Fingerprint, 
  Wallet, 
  DollarSign, 
  TrendingUp, 
  Zap, 
  ShieldCheck 
} from "lucide-react";

// Differentiators cards data for LinaPay
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
    <section className="pt-32 pb-48 md:pt-40 md:pb-64 lg:pt-48 lg:pb-80" style={{ backgroundColor: 'var(--lina-dark)' }} data-testid="section-differentiators">
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading
            level="h2"
            size="lg"
            className="text-white max-w-4xl mx-auto"
            gradientWords={['Lina Pay']}
            data-testid="heading-differentiators-title"
          >
            O que torna o Lina Pay diferente?
          </Heading>
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
                className="group relative rounded-2xl p-8 border border-gray-300/20 hover:border-[var(--lina-cyan)]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[var(--lina-cyan)]/20 bg-gradient-to-br from-[#00b6ac]/20 to-teal-500/20 backdrop-blur-sm"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                data-testid={`card-differentiator-${index + 1}`}
              >
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
                    className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-gray-200 transition-colors duration-300"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid={`title-differentiator-${index + 1}`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid={`description-differentiator-${index + 1}`}
                  >
                    {card.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}