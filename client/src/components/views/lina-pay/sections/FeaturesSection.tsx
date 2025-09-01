"use client";

import { motion } from "framer-motion";
import { 
  Fingerprint, 
  Nfc, 
  Zap, 
  CalendarClock, 
  Repeat, 
  Bot 
} from "lucide-react";

// Features cards data
const featureCards = [
  {
    id: 1,
    icon: Fingerprint,
    title: "Pix por biometria",
    description: "Pagamentos autorizados com um toque direto no checkout. Segurança e fluidez para o seu e-commerce."
  },
  {
    id: 2,
    icon: Nfc,
    title: "Pix por aproximação",
    description: "Permite pagamentos presenciais com a simples aproximação do celular, sem precisar de cartões."
  },
  {
    id: 3,
    icon: Zap,
    title: "Pix instantâneo",
    description: "Pagamento é confirmado imediatamente para a conta de destino, sem intermediários."
  },
  {
    id: 4,
    icon: CalendarClock,
    title: "Pix agendado",
    description: "Agende pagamentos futuros de forma simples, debitando automaticamente na data escolhida."
  },
  {
    id: 5,
    icon: Repeat,
    title: "Pix recorrente",
    description: "Automatize cobranças com valor fixo, como assinaturas, garantindo previsibilidade de caixa."
  },
  {
    id: 6,
    icon: Bot,
    title: "Pix automático",
    description: "Pagamentos inteligentes iniciados por eventos e gatilhos pré-definidos pelo cliente."
  }
];

export default function FeaturesSection() {
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
    <section className="py-20 bg-gray-50" data-testid="section-features">
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
            className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-features-title"
          >
            Funcionalidades que resolvem problemas reais
          </h2>
        </motion.div>

        {/* Features Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            
            return (
              <motion.div
                key={card.id}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
                variants={cardVariants}
                data-testid={`card-feature-${index + 1}`}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                      <IconComponent 
                        className="w-7 h-7 text-white" 
                        data-testid={`icon-feature-${index + 1}`}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-800 transition-colors duration-300"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid={`title-feature-${index + 1}`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid={`description-feature-${index + 1}`}
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