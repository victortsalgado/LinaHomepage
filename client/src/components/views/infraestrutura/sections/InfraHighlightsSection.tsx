"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Headphones } from "lucide-react";

// Since specific certification logos aren't available in assets, we'll use placeholder text for the certifications
// This can be updated when the actual logo files are provided
const certifications = [
  "FIDO Certified",
  "FIDO2", 
  "OpenID Certified",
  "Banco Central do Brasil",
  "SUSEP"
];

// Highlight card component
const HighlightCard = ({ 
  icon: Icon,
  title, 
  description, 
  certifications = [],
  delay = 0 
}: { 
  icon: any;
  title: string; 
  description: string; 
  certifications?: string[];
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
      data-testid={`highlight-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
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
        data-testid={`highlight-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {title}
      </h3>

      {/* Description */}
      <p 
        className="text-gray-300 text-lg leading-relaxed mb-6"
        style={{ fontFamily: 'Inter, sans-serif' }}
        data-testid={`highlight-description-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {description}
      </p>

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="border-t border-gray-700 pt-6">
          <h4 className="text-[var(--lina-cyan)] text-sm font-semibold mb-4 uppercase tracking-wider">
            Certificações
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2 text-center"
                data-testid={`certification-${cert.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="text-gray-300 text-xs font-medium">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function InfraHighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const highlights = [
    {
      icon: Shield,
      title: "Infraestrutura EXCLUSIVA para o Open",
      description: "Única no Brasil 100% dedicada a Open Finance e Open Insurance, desenhada para instituições que lideram o mercado.",
      certifications: [],
    },
    {
      icon: Award,
      title: "Homologada e certificada",
      description: "Tecnologia 100% proprietária, em total conformidade com Banco Central, Susep e padrões internacionais de segurança.",
      certifications: certifications,
    },
    {
      icon: Headphones,
      title: "Suporte de alto nível",
      description: "O maior time especializado do setor, disponível 24x7 para garantir uma operação estável, suporte ágil e atendimento aos SLAs regulatórios.",
      certifications: [],
    },
  ];

  return (
    <section 
      className="relative bg-[var(--lina-dark)] py-20 overflow-hidden"
      data-testid="infrastructure-highlights-section"
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
            data-testid="highlights-section-title"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Por que escolher a
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-300 bg-clip-text text-transparent">
              infraestrutura LINA
            </span>
          </h2>
          <p 
            className="text-gray-400 text-xl max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Três pilares fundamentais que garantem a superioridade da nossa solução
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={highlight.title}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
              certifications={highlight.certifications}
              delay={0.2 + (index * 0.2)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}