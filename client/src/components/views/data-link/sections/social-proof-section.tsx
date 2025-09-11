"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

// Import company logos
import brasilprevLogo from "@/assets/brasilprev.png";
import safraLogo from "@/assets/safra.png";
import sicoobLogo from "@/assets/sicoob.png";
import stoneLogo from "@/assets/stone.png";
import cloudwalkLogo from "@/assets/cloudwalk.png";

export default function SocialProofSection() {
  // Testimonials data structure
  const testimonials = [
    {
      id: 'brasilprev',
      logoSrc: brasilprevLogo,
      text: "O DataLink da Lina nos permitiu otimizar processos e acessar dados cruciais do Open Finance com segurança e agilidade.",
      author: "Executivo BrasilPrev",
      role: "Diretor de Inovação",
      initials: "EB"
    },
    {
      id: 'safra',
      logoSrc: safraLogo,
      text: "A solução da Lina é robusta e nos trouxe uma vantagem competitiva significativa na integração de dados bancários, essencial para o Safra.",
      author: "Gerente de Produtos Safra",
      role: "Gerente de Produtos",
      initials: "GP"
    },
    {
      id: 'sicoob',
      logoSrc: sicoobLogo,
      text: "Com o DataLink, conseguimos uma visão 360º dos nossos cooperados, impulsionando a oferta de produtos personalizados no Sicoob.",
      author: "Analista Sênior Sicoob",
      role: "Analista de Dados",
      initials: "AS"
    },
    {
      id: 'stone',
      logoSrc: stoneLogo,
      text: "A flexibilidade e a eficiência do DataLink foram cruciais para a Stone, permitindo inovar em nossos serviços financeiros com rapidez.",
      author: "Product Owner Stone",
      role: "Product Owner",
      initials: "PO"
    },
    {
      id: 'cloudwalk',
      logoSrc: cloudwalkLogo,
      text: "O DataLink otimizou nossa coleta de dados e aprimorou a experiência de nossos clientes, consolidando a Cloudwalk no mercado.",
      author: "Especialista em TI Cloudwalk",
      role: "Especialista em TI",
      initials: "ET"
    }
  ];

  // State for current testimonial
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-48 md:py-64 lg:py-80 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div 
        aria-hidden="true"
        className="absolute inset-0"
      >
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-[var(--lina-cyan)]/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-300/10 to-cyan-300/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-[92rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Enhanced Section Title */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="inline-flex items-center justify-center w-full mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[var(--lina-cyan)] to-transparent rounded-full"></div>
              <div className="mx-4 px-6 py-2 bg-gradient-to-r from-[var(--lina-cyan)]/10 to-teal-100/50 rounded-full border border-[var(--lina-cyan)]/20">
                <span className="text-sm font-semibold text-[var(--lina-cyan)] uppercase tracking-wider">
                  Casos de Sucesso
                </span>
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[var(--lina-cyan)] to-transparent rounded-full"></div>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-[var(--lina-cyan)] bg-clip-text text-transparent mb-4"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-social-proof-title"
            >
              Veja o impacto do DataLink na prática
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empresas líderes já transformaram seus negócios com nossa tecnologia de Open Finance
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Enhanced Client Logos Grid */}
            <motion.div variants={itemVariants} className="lg:pr-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
                <div className="text-center mb-10">
                  <h3 
                    className="text-2xl font-bold text-gray-800 mb-3"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-trusted-by"
                  >
                    Empresas que confiam na Lina
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      variants={logoVariants}
                      className="relative w-full isolate"
                      data-testid={`logo-${testimonial.id}`}
                      onClick={() => setCurrentTestimonial(testimonial)}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`group relative p-6 rounded-xl cursor-pointer transition-all duration-500 transform hover:-translate-y-1 hover:z-10 overflow-hidden ${
                        currentTestimonial.id === testimonial.id 
                          ? 'bg-gradient-to-br from-white to-[var(--lina-cyan)]/5 border-2 border-[var(--lina-cyan)]/40 shadow-xl shadow-[var(--lina-cyan)]/20' 
                          : 'bg-white border-2 border-gray-100 hover:border-[var(--lina-cyan)]/30 hover:shadow-lg hover:shadow-xl'
                      }`}>
                        
                        {/* Background glow for selected state */}
                        {currentTestimonial.id === testimonial.id && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--lina-cyan)]/10 to-teal-100/30 opacity-50 pointer-events-none" />
                        )}
                        
                        {/* Logo container */}
                        <div className="relative z-10 h-14 md:h-16 flex items-center justify-center">
                          <img
                            src={testimonial.logoSrc}
                            alt={`Logo ${testimonial.author}`}
                            className={`h-full w-auto object-contain transition-all duration-500 ${
                              currentTestimonial.id === testimonial.id 
                                ? 'grayscale-0 brightness-100' 
                                : 'grayscale-[0.3] group-hover:grayscale-0 group-hover:brightness-110'
                            }`}
                          />
                        </div>
                        
                        {/* Active indicator */}
                        {currentTestimonial.id === testimonial.id && (
                          <div className="absolute top-2 right-2 w-3 h-3 bg-[var(--lina-cyan)] rounded-full animate-pulse">
                            <div className="absolute inset-0 w-3 h-3 bg-[var(--lina-cyan)] rounded-full animate-ping opacity-75"></div>
                          </div>
                        )}
                        
                        {/* Hover shine effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-700 pointer-events-none" />
                      </div>
                      
                      {/* Enhanced outer glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--lina-cyan)]/20 to-teal-400/20 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-500 italic">
                    Clique em um logo para ver o depoimento
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Testimonial Card */}
            <motion.div 
              variants={itemVariants}
              className="lg:pl-8"
            >
              <div 
                className="relative bg-gradient-to-br from-white via-cyan-50/30 to-white rounded-3xl p-10 shadow-2xl border border-[var(--lina-cyan)]/20 overflow-hidden backdrop-blur-sm"
                data-testid="card-testimonial"
              >
                {/* Enhanced background patterns */}
                <div 
                  aria-hidden="true"
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[var(--lina-cyan)]/15 via-teal-200/10 to-transparent opacity-60 rounded-bl-[3rem]" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-300/10 to-transparent opacity-40 rounded-tr-[2rem]" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[var(--lina-cyan)]/5 to-teal-300/5 rounded-full blur-3xl" />
                </div>
                
                {/* Quote icon with enhanced styling */}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 rounded-2xl mb-8 shadow-lg">
                    <Quote 
                      className="w-8 h-8 text-white" 
                      data-testid="icon-quote"
                    />
                  </div>
                  
                  {/* Dynamic Testimonial Content with Enhanced Animation */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {/* Testimonial text with better styling */}
                      <blockquote 
                        className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="text-testimonial-quote"
                      >
                        "{currentTestimonial.text}"
                      </blockquote>
                      
                      {/* Enhanced author information */}
                      <div className="flex items-center space-x-5">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 rounded-2xl flex items-center justify-center shadow-lg">
                            <span 
                              className="text-white font-bold text-xl"
                              style={{ fontFamily: 'Lexend, sans-serif' }}
                            >
                              {currentTestimonial.initials}
                            </span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="text-left">
                          <p 
                            className="font-bold text-gray-900 text-xl mb-1"
                            style={{ fontFamily: 'Lexend, sans-serif' }}
                            data-testid="text-author-name"
                          >
                            {currentTestimonial.author}
                          </p>
                          <p 
                            className="text-gray-600 text-base"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            data-testid="text-author-company"
                          >
                            {currentTestimonial.role}
                          </p>
                          <div className="mt-2 flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--lina-cyan)]/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}