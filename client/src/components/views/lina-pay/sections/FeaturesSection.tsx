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

        {/* Auto-sliding Carousel */}
        <motion.div 
          className="features-slider"
          style={{
            '--width': '380px',
            '--height': '280px',
            '--quantity': featureCards.length.toString()
          } as React.CSSProperties}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          data-testid="carousel-features"
        >
          <div className="list">
            {featureCards.map((card, index) => {
              const IconComponent = card.icon;
              
              return (
                <div
                  key={card.id}
                  className="item"
                  style={{ '--position': (index + 1).toString() } as React.CSSProperties}
                  data-testid={`slide-feature-${index + 1}`}
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full transition-all duration-300 hover:shadow-2xl hover:border-[var(--lina-cyan)]/50">
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-xl flex items-center justify-center shadow-md">
                          <IconComponent 
                            className="w-7 h-7 text-white" 
                            data-testid={`icon-feature-${index + 1}`}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 
                        className="text-xl font-bold text-gray-900 mb-4 leading-tight"
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                        data-testid={`title-feature-${index + 1}`}
                      >
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p 
                        className="text-gray-600 leading-relaxed flex-1"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid={`description-feature-${index + 1}`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <p 
            className="text-gray-500 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-carousel-instructions"
          >
            Passe o mouse sobre os cards para pausar a animação
          </p>
        </motion.div>
      </div>
    </section>
  );
}