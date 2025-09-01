"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, 
  Wallet, 
  ShieldCheck, 
  Users, 
  CreditCard, 
  Server 
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Segments data
const segments = [
  {
    id: 1,
    icon: ShoppingCart,
    title: "E-commerces e marketplaces",
    description: "Melhore o checkout e reduza o abandono de carrinho com Pix por Biometria.",
    tagSize: "text-lg px-6 py-3",
    position: "top-0 left-8"
  },
  {
    id: 2,
    icon: Wallet,
    title: "Carteiras digitais",
    description: "Ofereça Pix por aproximação e uma experiência de pagamento superior.",
    tagSize: "text-base px-5 py-2",
    position: "top-16 right-4"
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Fintechs reguladas",
    description: "Acesse o Open Finance sem lidar com as complexidades de homologações regulatórias.",
    tagSize: "text-sm px-4 py-2",
    position: "top-32 left-16"
  },
  {
    id: 4,
    icon: Users,
    title: "Cooperativas de crédito",
    description: "Adicione funcionalidades que reduzem custos e aumentam a satisfação dos cooperados.",
    tagSize: "text-base px-5 py-3",
    position: "top-48 right-8"
  },
  {
    id: 5,
    icon: CreditCard,
    title: "Plataformas de pagamento e BaaS",
    description: "Adicione funcionalidades que reduzem custos e aumentam o atendimento às necessidades dos clientes.",
    tagSize: "text-lg px-6 py-3",
    position: "top-64 left-4"
  },
  {
    id: 6,
    icon: Server,
    title: "Plataformas SaaS",
    description: "Ofereça aos seus clientes uma nova forma de pagamento com a agilidade e integração do Open Finance.",
    tagSize: "text-sm px-4 py-2",
    position: "top-80 right-12"
  }
];

export default function SegmentsCloudSection() {
  const [activeSegment, setActiveSegment] = useState(1);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: cloudRef, isVisible: cloudVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: panelRef, isVisible: panelVisible } = useScrollReveal<HTMLDivElement>();

  const activeSegmentData = segments.find(segment => segment.id === activeSegment);

  return (
    <section 
      ref={sectionRef}
      className="py-20"
      style={{ backgroundColor: 'var(--lina-dark)' }}
      data-testid="section-segments-cloud"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Title and Tags Cloud */}
          <motion.div
            ref={cloudRef}
            initial={{ opacity: 0, x: -50 }}
            animate={cloudVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pr-8"
          >
            {/* Section Title */}
            <div className="mb-12">
              <h2 
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: 'Lexend, sans-serif' }}
                data-testid="heading-segments-cloud-title"
              >
                Pensado para diferentes{" "}
                <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-300 bg-clip-text text-transparent">
                  tipos de negócio
                </span>
              </h2>

              <div className="flex items-center gap-4">
                <p 
                  className="text-lg text-gray-300 font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  data-testid="text-segments-cloud-subtitle"
                >
                  Veja como aplicamos no seu setor
                </p>
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </div>

            {/* Interactive Tags Cloud */}
            <div className="relative h-96">
              {segments.map((segment, index) => {
                const isActive = activeSegment === segment.id;
                
                return (
                  <motion.button
                    key={segment.id}
                    onClick={() => setActiveSegment(segment.id)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={cloudVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.3 + (index * 0.1),
                      ease: "easeOut" 
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      absolute ${segment.position} ${segment.tagSize} rounded-full font-medium transition-all duration-300 cursor-pointer
                      ${isActive 
                        ? 'bg-[var(--lina-cyan)] text-[var(--lina-dark)] shadow-lg shadow-[var(--lina-cyan)]/40' 
                        : 'border-2 border-[var(--lina-cyan)] text-[var(--lina-cyan)] bg-transparent hover:bg-[var(--lina-cyan)]/10'
                      }
                    `}
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid={`tag-segment-${index + 1}`}
                  >
                    {segment.title}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Dynamic Content Panel */}
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, x: 50 }}
            animate={panelVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:pl-8"
          >
            <AnimatePresence mode="wait">
              {activeSegmentData && (
                <motion.div
                  key={activeSegment}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
                  data-testid="panel-segment-content"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <activeSegmentData.icon 
                        className="w-8 h-8 text-white" 
                        data-testid={`icon-panel-segment-${activeSegment}`}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid={`title-panel-segment-${activeSegment}`}
                  >
                    {activeSegmentData.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-lg text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid={`description-panel-segment-${activeSegment}`}
                  >
                    {activeSegmentData.description}
                  </p>

                  {/* Visual accent */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full"></div>
                    <div className="w-4 h-2 bg-gradient-to-r from-[var(--lina-cyan)] to-transparent rounded-full"></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}