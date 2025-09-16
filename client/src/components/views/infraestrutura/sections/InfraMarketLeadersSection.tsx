"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

// Logo component with animation
const LogoCard = ({ 
  name, 
  delay = 0 
}: { 
  name: string; 
  delay?: number; 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 flex items-center justify-center hover:shadow-2xl hover:shadow-[var(--lina-cyan)]/10 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: "easeOut"
      }}
      data-testid={`logo-card-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Placeholder for logo - in real implementation, these would be actual logo images */}
      <div className="text-center">
        <div 
          className="text-2xl font-bold text-gray-800 mb-2"
          style={{ fontFamily: 'Lexend, sans-serif' }}
        >
          {name}
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 rounded-full mx-auto" />
      </div>
    </motion.div>
  );
};

// Testimonial component
const TestimonialCard = ({ 
  text, 
  author, 
  role, 
  delay = 0 
}: { 
  text: string; 
  author: string; 
  role: string; 
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
      data-testid={`testimonial-card-${author.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-400 rounded-2xl flex items-center justify-center shadow-lg">
          <Quote className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Testimonial Text */}
      <blockquote 
        className="text-gray-300 text-lg leading-relaxed mb-8"
        style={{ fontFamily: 'Inter, sans-serif' }}
        data-testid={`testimonial-text-${author.toLowerCase().replace(/\s+/g, '-')}`}
      >
        "{text}"
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-gray-700 pt-6">
        <div 
          className="text-white text-xl font-bold mb-2"
          style={{ fontFamily: 'Lexend, sans-serif' }}
          data-testid={`testimonial-author-${author.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {author}
        </div>
        <div 
          className="text-[var(--lina-cyan)] text-lg font-medium"
          style={{ fontFamily: 'Inter, sans-serif' }}
          data-testid={`testimonial-role-${author.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {role}
        </div>
      </div>
    </motion.div>
  );
};

export default function InfraMarketLeadersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const marketLeaders = [
    "RTM",
    "Mastercard", 
    "B3",
    "TecBan"
  ];

  const testimonials = [
    {
      text: "A RTM atua há mais de 20 anos como o Hub integrador do mercado financeiro brasileiro, conectando mais de 700 instituições financeiras ao SPB e ao PIX. No Open Finance, escolhemos a LINA como parceiro estratégico, pois confiamos nas soluções tecnológicas e na expertise e capacidade do time da LINA para suportar um serviço de tamanha complexidade, atendendo o nível de exigência do mercado brasileiro.",
      author: "Marcio Castro",
      role: "CEO da RTM"
    },
    {
      text: "O open finance no Brasil vem crescendo muito e o mercado aqui tem suas particularidades. Trazer soluções de fora exigiria uma 'tropicalização' grande, então achamos mais adequado firmar uma parceria estratégica com a LINA.",
      author: "Marcelo Tangioni",
      role: "Presidente da Mastercard Brasil"
    }
  ];

  return (
    <section 
      className="relative bg-white py-20 overflow-hidden"
      data-testid="infrastructure-market-leaders-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
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
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="market-leaders-section-title"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              A solução de Infraestrutura & Conectividade
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-500 bg-clip-text text-transparent">
              recomendada por quem tem experiência de mercado!
            </span>
          </h2>
          
          <p 
            className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="market-leaders-description"
          >
            Quando o assunto é infraestrutura regulatória, robustez, segurança e confiabilidade são premissas fundamentais e inegociáveis. Por isso, nossa solução foi escolhida pelas principais infraestruturas do mercado financeiro brasileiro.
          </p>
        </motion.div>

        {/* Market Leaders Logos Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {marketLeaders.map((leader, index) => (
              <LogoCard
                key={leader}
                name={leader}
                delay={0.4 + (index * 0.1)}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="testimonials-title"
          >
            <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-500 bg-clip-text text-transparent">
              O que nossos parceiros dizem
            </span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                text={testimonial.text}
                author={testimonial.author}
                role={testimonial.role}
                delay={0.8 + (index * 0.2)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}