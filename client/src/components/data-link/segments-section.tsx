"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  Landmark, 
  Library 
} from "lucide-react";

// Market segments data for tabs
const segmentTabs = [
  {
    id: 1,
    icon: Users,
    title: "Empresas de assessoria financeira e patrimonial",
    description: "Tenha uma visão unificada das finanças dos clientes com dados integrados de contas, cartões, crédito e investimentos."
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Plataformas de investimento",
    description: "Ofereça carteiras consolidadas e recomendações personalizadas conectando contas de investimento e bancárias em mais de 50 instituições."
  },
  {
    id: 3,
    icon: Landmark,
    title: "Plataformas e marketplaces de crédito",
    description: "Automatize a análise de crédito e comprovação de renda com acesso direto a extratos bancários via API."
  },
  {
    id: 4,
    icon: Library,
    title: "Plataformas de contabilidade online",
    description: "Concilie e categorize transações automaticamente com dados bancários padronizados."
  }
];

export default function SegmentsSection() {
  const [activeTab, setActiveTab] = useState(1);

  const activeSegment = segmentTabs.find(segment => segment.id === activeTab);

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--lina-dark)' }} data-testid="section-segments">
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
            className="text-3xl lg:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight mb-4"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-segments-title"
          >
            Feito para resolver dores reais de diferentes segmentos
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-segments-subtitle"
          >
            Veja como aplicamos no seu setor
          </p>
        </motion.div>

        {/* Interactive Tabs Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Column - Tab Navigation */}
          <div className="space-y-4 group/cards">
            {segmentTabs.map((segment, index) => {
              const IconComponent = segment.icon;
              const isActive = activeTab === segment.id;
              
              // Define colors for each card based on LINA brand
              const cardColors = [
                'bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500', // Card 1
                'bg-gradient-to-br from-blue-500 to-blue-600',           // Card 2  
                'bg-gradient-to-br from-emerald-500 to-emerald-600',     // Card 3
                'bg-gradient-to-br from-purple-500 to-purple-600'        // Card 4
              ];
              
              return (
                <motion.button
                  key={segment.id}
                  onClick={() => setActiveTab(segment.id)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-[400ms] group/card cursor-pointer ${cardColors[index]} ${
                    isActive 
                      ? 'border-white/30 shadow-xl shadow-black/20 scale-105' 
                      : 'border-white/10 hover:border-white/30'
                  } hover:scale-110 group-hover/cards:[&:not(:hover)]:blur-[10px] group-hover/cards:[&:not(:hover)]:scale-90`}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`tab-segment-${index + 1}`}
                >
                  <div className="flex items-center justify-center flex-col text-center h-24">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 bg-white/20 backdrop-blur-sm">
                      <IconComponent 
                        className="w-5 h-5 text-white"
                        data-testid={`icon-tab-${index + 1}`}
                      />
                    </div>
                    
                    {/* Tab Title */}
                    <div className="flex-1 flex items-center justify-center">
                      <h3 
                        className="text-xs font-bold leading-tight text-white text-center"
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                        data-testid={`title-tab-${index + 1}`}
                      >
                        {segment.title}
                      </h3>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              {activeSegment && (
                <motion.div
                  key={activeSegment.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full bg-white rounded-2xl p-8 shadow-2xl border border-gray-300/20"
                  data-testid={`content-segment-${activeSegment.id}`}
                >
                  {/* Content Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <activeSegment.icon 
                        className="w-8 h-8 text-white" 
                        data-testid={`icon-content-${activeSegment.id}`}
                      />
                    </div>
                  </div>

                  {/* Content Title */}
                  <h3 
                    className="text-2xl font-bold text-gray-900 mb-6 leading-tight"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid={`title-content-${activeSegment.id}`}
                  >
                    {activeSegment.title}
                  </h3>

                  {/* Content Description */}
                  <p 
                    className="text-lg text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid={`description-content-${activeSegment.id}`}
                  >
                    {activeSegment.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[var(--lina-cyan)]/10 to-teal-100/50 rounded-full" />
                  <div className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-tr from-teal-100/50 to-[var(--lina-cyan)]/10 rounded-full" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}