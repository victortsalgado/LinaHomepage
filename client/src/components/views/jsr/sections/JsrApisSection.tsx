"use client";

import { motion } from "framer-motion";
import { Fingerprint, Nfc, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// JSR APIs cards data
const apiCards = [
  {
    id: 1,
    icon: Fingerprint,
    title: "Pix por biometria",
    description: "Checkout com pagamento por FaceID ou digital, sem a necessidade de senhas e sem redirecionamento."
  },
  {
    id: 2,
    icon: Nfc,
    title: "Pix por aproximação no varejo físico",
    description: "Cliente paga em maquininhas, como se fosse um cartão, mas utilizando o saldo em conta."
  },
  {
    id: 3,
    icon: Zap,
    title: "Pix à vista, agendado, recorrente e automático",
    description: "Pronto para todas as modalidades de pagamentos via Pix, com liberdade contratual."
  }
];

export default function JsrApisSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  // Animation variants for staggered card reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="py-48 md:py-64 lg:py-80 bg-white" 
      data-testid="section-jsr-apis"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-jsr-apis-title"
          >
            APIs construídas para facilitar a sua operação
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={sectionVisible ? "visible" : "hidden"}
          data-testid="grid-jsr-apis"
        >
          {apiCards.map((card, index) => {
            const IconComponent = card.icon;
            
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                data-testid={`card-jsr-api-${index + 1}`}
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full transition-all duration-300 hover:shadow-2xl hover:border-[var(--lina-cyan)]/50">
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-xl flex items-center justify-center shadow-md">
                        <IconComponent 
                          className="w-7 h-7 text-white" 
                          data-testid={`icon-jsr-api-${index + 1}`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-xl font-bold text-gray-900 mb-4 leading-tight"
                      style={{ fontFamily: 'Lexend, sans-serif' }}
                      data-testid={`title-jsr-api-${index + 1}`}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-gray-600 leading-relaxed flex-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      data-testid={`description-jsr-api-${index + 1}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}