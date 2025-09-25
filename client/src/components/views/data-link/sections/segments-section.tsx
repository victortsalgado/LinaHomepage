"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "@/components/ui/Heading";
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

  // Define colors for each card based on LINA brand - all using the updated color
  const cardColors = [
    'bg-gradient-to-br from-[#00b6ac] to-teal-500', // Card 1 - Updated color
    'bg-gradient-to-br from-[#00b6ac] to-teal-500', // Card 2 - Same gradient
    'bg-gradient-to-br from-[#00b6ac] to-teal-500', // Card 3 - Same gradient
    'bg-gradient-to-br from-[#00b6ac] to-teal-500'  // Card 4 - Same gradient
  ];

  // Get the color for the active card
  const activeCardColor = cardColors[activeTab - 1];

  return (
    <section className="py-48 md:py-64 lg:py-80" style={{ backgroundColor: 'var(--lina-dark)' }} data-testid="section-segments">
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
            className="text-white max-w-4xl mx-auto mb-4"
            gradientWords={['tipos de negócio']}
            data-testid="heading-segments-title"
          >
            Pensado para diferentes tipos de negócio
          </Heading>
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
          className="grid lg:grid-cols-2 gap-20 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Column - Tab Navigation */}
          <div className="space-y-2 group/cards pt-[0px] pb-[0px] mt-[9px] mb-[9px]">
            {segmentTabs.map((segment, index) => {
              const IconComponent = segment.icon;
              const isActive = activeTab === segment.id;


              return (
                <motion.div
                  key={segment.id}
                  onMouseEnter={() => setActiveTab(segment.id)}
                  className={`w-full text-left p-3 rounded-2xl border-2 transition-all duration-500 group/card cursor-pointer hover:bg-gradient-to-br hover:from-[#00b6ac] hover:to-teal-500 ${
                    isActive 
                      ? `border-[#00b6ac]/50 shadow-xl shadow-black/20 scale-105 bg-gradient-to-br from-[#00b6ac] to-teal-500` 
                      : 'border-white/10 hover:border-[#00b6ac]/50'
                  } hover:scale-110 group-hover/cards:[&:not(:hover)]:blur-[2px] group-hover/cards:[&:not(:hover)]:scale-90`}
                  data-testid={`tab-segment-${index + 1}`}
                >
                  <div className="flex items-center gap-4 h-16">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm flex-shrink-0">
                      <IconComponent 
                        className="w-6 h-6 text-white"
                        data-testid={`icon-tab-${index + 1}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex items-center">
                      <h3 
                        className="text-xl md:text-2xl font-bold leading-tight text-white text-left"
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                        data-testid={`title-tab-${index + 1}`}
                      >
                        {segment.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="relative min-h-[500px] flex items-start">
            <AnimatePresence mode="wait">
              {activeSegment && (
                <motion.div
                  key={activeSegment.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-[400px] bg-transparent rounded-3xl p-12 shadow-none border-2 border-[#00b6ac]"
                  data-testid={`content-segment-${activeSegment.id}`}
                >
                  {/* Content Icon */}
                  <div className="mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br from-[#00b6ac] to-teal-500 rounded-3xl flex items-center justify-center shadow-lg`}>
                      <activeSegment.icon 
                        className="w-10 h-10 text-white" 
                        data-testid={`icon-content-${activeSegment.id}`}
                      />
                    </div>
                  </div>

                  {/* Content Title */}
                  <h3 
                    className="text-3xl font-bold text-[#00b6ac] mb-8 leading-tight"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid={`title-content-${activeSegment.id}`}
                  >
                    {activeSegment.title}
                  </h3>

                  {/* Content Description */}
                  <p 
                    className="text-xl text-white leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid={`description-content-${activeSegment.id}`}
                  >
                    {activeSegment.description}
                  </p>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}