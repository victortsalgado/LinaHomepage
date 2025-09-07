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
      className="py-48 md:py-64 lg:py-80"
      style={{ backgroundColor: 'var(--lina-dark)' }}
      data-testid="section-segments-cloud"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
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
                <span className="bg-gradient-to-r from-[#00857F] to-[#2EC9BC] bg-clip-text text-transparent">
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

            {/* Interactive Tags Cloud with Floating Animation */}
            <div className="relative h-96">
              {/* Background Keywords Layer */}
              <div className="absolute inset-0 pointer-events-none z-0">
                {/* Background keywords positioned organically */}
                <motion.span
                  className="absolute top-8 left-4 text-xs text-white/20 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.2 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 1 }}
                >
                  Checkout sem Fricção
                </motion.span>
                
                <motion.span
                  className="absolute top-20 right-16 text-xs text-white/15 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.15 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 1.2 }}
                >
                  PIX por Biometria
                </motion.span>
                
                <motion.span
                  className="absolute top-36 left-0 text-xs text-white/25 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.25 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 1.4 }}
                >
                  Segurança Bancária
                </motion.span>
                
                <motion.span
                  className="absolute top-56 right-8 text-xs text-white/20 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.2 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 1.6 }}
                >
                  API de Pagamentos
                </motion.span>
                
                <motion.span
                  className="absolute top-72 left-12 text-xs text-white/18 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.18 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 1.8 }}
                >
                  Compliance
                </motion.span>
                
                <motion.span
                  className="absolute top-88 right-20 text-xs text-white/22 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.22 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 2 }}
                >
                  Integração Rápida
                </motion.span>
                
                <motion.span
                  className="absolute top-4 right-32 text-xs text-white/17 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.17 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 2.2 }}
                >
                  NFC
                </motion.span>
                
                <motion.span
                  className="absolute top-28 left-32 text-xs text-white/19 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.19 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 2.4 }}
                >
                  Redução de Custos
                </motion.span>
                
                <motion.span
                  className="absolute top-52 left-24 text-xs text-white/21 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.21 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 2.6 }}
                >
                  White Label
                </motion.span>
                
                <motion.span
                  className="absolute top-76 right-4 text-xs text-white/16 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.16 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 2.8 }}
                >
                  JSR
                </motion.span>
                
                <motion.span
                  className="absolute top-12 left-48 text-xs text-white/23 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.23 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 3 }}
                >
                  Pagamento por Aproximação
                </motion.span>
                
                <motion.span
                  className="absolute top-44 right-28 text-xs text-white/18 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.18 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 3.2 }}
                >
                  Aumento de Conversão
                </motion.span>
                
                <motion.span
                  className="absolute top-68 left-36 text-xs text-white/20 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.2 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 3.4 }}
                >
                  Recorrência
                </motion.span>
                
                <motion.span
                  className="absolute top-84 right-12 text-xs text-white/24 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.24 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 3.6 }}
                >
                  Experiência do Usuário
                </motion.span>
                
                <motion.span
                  className="absolute top-16 left-56 text-xs text-white/19 font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={cloudVisible ? { opacity: 0.19 } : { opacity: 0 }}
                  transition={{ duration: 2, delay: 3.8 }}
                >
                  Automação
                </motion.span>
              </div>

              {segments.map((segment, index) => {
                const isActive = activeSegment === segment.id;
                
                return (
                  <motion.button
                    key={segment.id}
                    onClick={() => setActiveSegment(segment.id)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={cloudVisible ? { 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -8, 0],
                      x: [0, 4, 0],
                      rotate: [0, 1, -1, 0]
                    } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" },
                      scale: { duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" },
                      y: { 
                        duration: 3 + (index * 0.5), 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.8
                      },
                      x: { 
                        duration: 4 + (index * 0.3), 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.6
                      },
                      rotate: { 
                        duration: 6 + (index * 0.4), 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.4
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      absolute ${segment.position} ${segment.tagSize} rounded-full font-medium cursor-pointer backdrop-blur-sm
                      ${isActive 
                        ? 'bg-[var(--lina-cyan)] text-[var(--lina-dark)] shadow-lg shadow-[var(--lina-cyan)]/40 border-2 border-[var(--lina-cyan)]' 
                        : 'border-2 border-[var(--lina-cyan)]/60 text-[var(--lina-cyan)] bg-white/5 hover:bg-[var(--lina-cyan)]/10 hover:border-[var(--lina-cyan)] shadow-md'
                      }
                      transition-colors duration-300
                    `}
                    style={{ 
                      fontFamily: 'Lexend, sans-serif',
                      willChange: 'transform'
                    }}
                    data-testid={`tag-segment-${index + 1}`}
                  >
                    {segment.title}
                  </motion.button>
                );
              })}
              
              {/* Floating particles for extra dynamism */}
              <motion.div
                className="absolute top-12 left-32 w-2 h-2 bg-[var(--lina-cyan)]/30 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-64 right-24 w-3 h-3 bg-teal-400/40 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  x: [0, -8, 0],
                  scale: [1, 0.8, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute top-40 right-8 w-1 h-1 bg-[var(--lina-cyan)]/50 rounded-full"
                animate={{
                  y: [0, -12, 0],
                  x: [0, 6, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
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