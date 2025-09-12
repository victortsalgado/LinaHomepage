"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import company logos
import brasilprevLogo from "@/assets/brasilprev.png";
import safraLogo from "@/assets/safra.png";
import sicoobLogo from "@/assets/sicoob.png";
import stoneLogo from "@/assets/stone.png";
import cloudwalkLogo from "@/assets/cloudwalk.png";

export default function SocialProofSection() {
  // Company logos for the bottom section
  const companyLogos = [
    { name: "BrasilPrev", src: brasilprevLogo },
    { name: "Safra", src: safraLogo },
    { name: "Sicoob", src: sicoobLogo },
    { name: "Stone", src: stoneLogo },
    { name: "Cloudwalk", src: cloudwalkLogo }
  ];

  // Featured testimonial
  const testimonial = {
    text: "Temos uma parceria de sucesso com a Lina. É um parceiro importante para o Banco Semear e nos apoia com compartilhamento de dados e também com geração de ITP, que é um diferencial para nossos produtos de meio de pagamento. O Semear acredita na Open Finance e a Lina é o nosso parceiro de confiança, sempre disponível a entender nossas necessidades e customizar soluções, sabem do fato e significado da palavra parceria.",
    author: "Ricardo Mendes",
    role: "Diretor de Tecnologia, Banco Semear",
    avatar: "/api/placeholder/48/48", // This would be the actual avatar image
    initials: "RM"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main Box with DataLink Home Style */}
          <div className="bg-gradient-to-br from-white/80 via-teal-50/60 to-cyan-100/50 rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm min-h-[500px]">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              {/* Left Column - Content */}
              <motion.div 
                variants={itemVariants}
                className="p-16 lg:p-24"
              >
                <div className="mb-6">
                  <span 
                    className="text-sm font-medium text-[var(--lina-cyan)] mb-2 block"
                    data-testid="text-section-label"
                  >
                    Quem usa, recomenda
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-bold text-gray-800 leading-[1.1] mb-4"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-social-proof-title"
                  >
                    Veja o impacto do <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 bg-clip-text text-transparent">Data Link</span> na prática
                  </h2>
                </div>

                <p 
                  className="text-lg text-gray-700 mb-8 leading-relaxed"
                  data-testid="text-social-proof-description"
                >
                  Descubra como empresas líderes estão transformando seus negócios com nossa solução de Open Finance, otimizando processos e tomando decisões mais inteligentes.
                </p>

                <Button 
                  variant="default"
                  className="bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90 text-white px-6 py-3 rounded-full flex items-center space-x-2 mb-8"
                  data-testid="button-discover-datalink"
                >
                  <span>Descubra como funciona</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                {/* Team Image Placeholder */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                      <div className="text-gray-500 text-center">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        <span className="text-xs">Team</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Testimonial */}
              <motion.div 
                variants={itemVariants}
                className="p-16 lg:p-24"
              >
                <div className="bg-gradient-to-br from-[#2d5a57] to-[#1a3d3a] rounded-2xl p-8 text-white relative overflow-hidden">
                  {/* Large Quote Icon */}
                  <div className="absolute top-4 right-6 opacity-20">
                    <Quote className="w-20 h-20" />
                  </div>
                  
                  <div className="relative z-10">
                    <blockquote 
                      className="text-lg leading-relaxed mb-6"
                      data-testid="text-testimonial-quote"
                    >
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-[var(--lina-cyan)] text-white text-sm font-bold flex items-center justify-center">
                          {testimonial.initials}
                        </div>
                      </div>
                      <div>
                        <p 
                          className="font-bold text-white"
                          data-testid="text-author-name"
                        >
                          {testimonial.author}
                        </p>
                        <p 
                          className="text-white/80 text-sm"
                          data-testid="text-author-role"
                        >
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Company Logos Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
              {companyLogos.map((company) => (
                <div
                  key={company.name}
                  className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                  data-testid={`logo-${company.name.toLowerCase()}`}
                >
                  <img
                    src={company.src}
                    alt={`${company.name} logo`}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}