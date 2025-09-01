"use client";

import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Wallet, 
  ShieldCheck, 
  Users, 
  CreditCard, 
  Server 
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Segments data for list items
const segmentItems = [
  {
    id: 1,
    icon: ShoppingCart,
    title: "E-commerces e marketplaces",
    description: "Melhore o checkout e reduza o abandono de carrinho com Pix por Biometria."
  },
  {
    id: 2,
    icon: Wallet,
    title: "Carteiras digitais",
    description: "Ofereça Pix por aproximação e uma experiência de pagamento superior."
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Fintechs reguladas",
    description: "Acesse o Open Finance sem lidar com as complexidades de homologações regulatórias."
  },
  {
    id: 4,
    icon: Users,
    title: "Cooperativas de crédito",
    description: "Adicione funcionalidades que reduzem custos e aumentam a satisfação dos cooperados."
  },
  {
    id: 5,
    icon: CreditCard,
    title: "Plataformas de pagamento e BaaS",
    description: "Adicione funcionalidades que reduzem custos e aumentam o atendimento às necessidades dos clientes."
  },
  {
    id: 6,
    icon: Server,
    title: "Plataformas SaaS",
    description: "Ofereça aos seus clientes uma nova forma de pagamento com a agilidade e integração do Open Finance."
  }
];

export default function SegmentsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: listRef, isVisible: listVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white"
      data-testid="section-segments"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Title and Description Column - Left */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -50 }}
            animate={titleVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pr-8"
          >
            {/* Main Title */}
            <h2 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-segments-title"
            >
              Pensado para diferentes{" "}
              <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-500 bg-clip-text text-transparent">
                tipos de negócio
              </span>
            </h2>

            {/* Supporting Description */}
            <p 
              className="text-xl text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="text-segments-description"
            >
              Descubra como o Lina Pay se adapta perfeitamente ao seu modelo de negócio, 
              independentemente do seu setor.
            </p>
          </motion.div>

          {/* Segments List Column - Right */}
          <motion.div
            ref={listRef}
            initial={{ opacity: 0, x: 50 }}
            animate={listVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="space-y-6">
              {segmentItems.map((segment, index) => {
                const IconComponent = segment.icon;
                
                return (
                  <motion.div
                    key={segment.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={listVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + (index * 0.1),
                      ease: "easeOut" 
                    }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-all duration-300 group"
                    data-testid={`item-segment-${index + 1}`}
                  >
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-[var(--lina-cyan)]/30 transition-all duration-300">
                        <IconComponent 
                          className="w-6 h-6 text-white" 
                          data-testid={`icon-segment-${index + 1}`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 
                        className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-800 transition-colors duration-300"
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                        data-testid={`title-segment-${index + 1}`}
                      >
                        {segment.title}
                      </h3>
                      <p 
                        className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid={`description-segment-${index + 1}`}
                      >
                        {segment.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}