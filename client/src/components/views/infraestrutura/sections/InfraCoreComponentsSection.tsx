"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Network, Monitor, Clock, Shield } from "lucide-react";

// Core component card
const CoreComponentCard = ({ 
  icon: Icon,
  title, 
  description, 
  delay = 0 
}: { 
  icon: any;
  title: string; 
  description: string; 
  delay?: number; 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-[var(--lina-cyan)]/20 rounded-2xl p-8 hover:border-[var(--lina-cyan)]/40 hover:shadow-2xl hover:shadow-[var(--lina-cyan)]/10 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: "easeOut"
      }}
      data-testid={`core-component-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-400 rounded-2xl flex items-center justify-center shadow-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Title */}
      <h3 
        className="text-2xl font-bold text-white mb-4 leading-tight"
        style={{ fontFamily: 'Lexend, sans-serif' }}
        data-testid={`core-component-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {title}
      </h3>

      {/* Description */}
      <p 
        className="text-gray-300 text-lg leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
        data-testid={`core-component-description-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default function InfraCoreComponentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const coreComponents = [
    {
      icon: CheckCircle,
      title: "Plataforma de Consentimento (CDR)",
      description: "Orquestração do consentimento fim a fim, com fluxos otimizados para maximizar a conversão de clientes e atender aos requisitos regulatórios.",
    },
    {
      icon: Network,
      title: "Gateway de Conectividade",
      description: "Conexão com os principais players do mercado, com tradução de APIs e enriquecimento de dados para otimizar o processo de integração.",
    },
    {
      icon: Monitor,
      title: "Plataforma de Suporte e Monitoramento",
      description: "Acompanhamento em tempo real das conexões e transações, com dashboards e relatórios para uma visão completa da operação.",
    },
    {
      icon: Clock,
      title: "Service Desk 24x7",
      description: "Equipe de especialistas à disposição para suportar necessidades de apoio técnico e operacional, da homologação à produção, incluindo testes FVP.",
    },
    {
      icon: Shield,
      title: "Servidores de Autorização FAPI OP/RP e FIDO",
      description: "Autenticação robusta com certificação e padrões internacionais para proteger dados e acessos sensíveis.",
    },
  ];

  return (
    <section 
      className="relative bg-[var(--lina-dark)] py-20 overflow-hidden"
      data-testid="infrastructure-core-components-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-texture opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-white leading-tight title-glow mb-4"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="core-components-section-title"
          >
            <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-300 bg-clip-text text-transparent">
              Nossa infraestrutura de Open Finance & Insurance
            </span>
          </h2>
        </motion.div>

        {/* Core Components Grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {coreComponents.map((component, index) => (
            <CoreComponentCard
              key={component.title}
              icon={component.icon}
              title={component.title}
              description={component.description}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}