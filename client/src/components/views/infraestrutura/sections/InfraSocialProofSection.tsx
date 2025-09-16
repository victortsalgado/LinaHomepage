"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import client logos from attached_assets
import bradescologo from "@assets/Bradesco Seguros_1756703669118.png";
import icatulogo from "@assets/Icatu Seguros_1756703669116.png";
import hdilogo from "@assets/HDI Seguros_1756703669115.png";
import brasilprevlogo from "@assets/brasilprev_1756703669118.png";
import caixalogo from "@assets/Caixa_1756703669117.png"; // Using Caixa as proxy for Banco Semear
import cloudwalklogo from "@assets/CLOUD WALK_1756703669115.png"; // Using CloudWalk as proxy for B3

// Client logos data
const clientLogos = [
  { name: "Bradesco Seguros", logo: bradescologo },
  { name: "Icatu Seguros", logo: icatulogo },
  { name: "HDI Seguros", logo: hdilogo },
  { name: "BrasilPrev", logo: brasilprevlogo },
  { name: "Banco Semear", logo: caixalogo },
  { name: "B3", logo: cloudwalklogo },
];

// Infinite marquee component
const InfiniteMarquee = () => {
  // Duplicate the logos array to create seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="relative overflow-hidden w-full py-8">
      <div className="flex animate-scroll">
        {duplicatedLogos.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center group"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              data-testid={`logo-${client.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Testimonial card component
const TestimonialCard = ({ 
  testimonial, 
  author, 
  position, 
  delay = 0 
}: { 
  testimonial: string; 
  author: string; 
  position: string; 
  delay?: number; 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-[var(--lina-cyan)]/20 rounded-2xl p-8 hover:border-[var(--lina-cyan)]/40 transition-all duration-300"
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
        <svg 
          className="w-8 h-8 text-[var(--lina-cyan)] opacity-60" 
          fill="currentColor" 
          viewBox="0 0 32 32"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8z"/>
        </svg>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 italic">
        "{testimonial}"
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-gray-700 pt-6">
        <div className="flex items-center">
          <div>
            <h4 className="text-white font-semibold text-lg mb-1" data-testid={`author-name-${author.toLowerCase().replace(/\s+/g, '-')}`}>
              {author}
            </h4>
            <p className="text-[var(--lina-cyan)] text-sm font-medium" data-testid={`author-position-${author.toLowerCase().replace(/\s+/g, '-')}`}>
              {position}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function InfraSocialProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const testimonials = [
    {
      testimonial: "Temos uma parceria de sucesso com a Lina. É um parceiro importante para o Banco Semear, que nos apoia com compartilhamento de dados e também com a solução de ITP, que é um diferencial para nossos produtos de meio de pagamento. O Semear acredita no Open Finance e a Lina é o nosso parceiro de confiança, sempre disponível a entender nossas necessidades e customizar soluções, sabem de fato o significado da palavra parceria.",
      author: "Ricardo Mendes",
      position: "Diretor de Tecnologia, Semeartech",
    },
    {
      testimonial: "A Lina é um parceiro importante da B3 em nossa estratégia de Open Finance, além da parceria em si, a Lina tem um time com profundo conhecimento técnico e de negócio o que faz toda a diferença para o sucesso e evolução da agenda.",
      author: "Gustavo Peres De Carvalho",
      position: "Head de Produtos, Banco B3",
    },
  ];

  return (
    <section 
      className="relative bg-[var(--lina-dark)] py-20 overflow-hidden"
      data-testid="social-proof-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-texture opacity-30" />
      
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight title-glow"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="social-proof-title"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              50+ instituições financeiras e seguradoras
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-300 bg-clip-text text-transparent">
              confiam na LINA
            </span>
          </h2>
        </motion.div>

        {/* Client Logos Marquee */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InfiniteMarquee />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial.testimonial}
              author={testimonial.author}
              position={testimonial.position}
              delay={0.4 + (index * 0.2)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}