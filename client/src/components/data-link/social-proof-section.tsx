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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[var(--lina-light)] to-cyan-200 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-social-proof-title"
          >
            Veja o impacto do DataLink na prática
          </motion.h2>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Client Logos Grid */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 
                className="text-xl font-semibold text-gray-700 mb-8"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="heading-trusted-by"
              >
                Empresas que confiam na Lina
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    variants={logoVariants}
                    className="group relative cursor-pointer"
                    data-testid={`logo-${testimonial.id}`}
                    onClick={() => setCurrentTestimonial(testimonial)}
                  >
                    <img
                      src={testimonial.logoSrc}
                      alt={`Logo ${testimonial.author}`}
                      className={`h-12 md:h-16 w-auto object-contain transition-all duration-500 ease-in-out transform hover:scale-110 ${
                        currentTestimonial.id === testimonial.id 
                          ? 'grayscale-0' 
                          : 'grayscale hover:grayscale-0'
                      }`}
                    />
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                    {/* Active indicator */}
                    {currentTestimonial.id === testimonial.id && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[var(--lina-cyan)] rounded-full" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div 
              variants={itemVariants}
              className="lg:pl-8"
            >
              <div 
                className="relative bg-gradient-to-br from-white via-[var(--lina-light)] to-cyan-50 rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden"
                data-testid="card-testimonial"
              >
                {/* Background pattern */}
                <div 
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--lina-cyan)] to-transparent opacity-10 rounded-bl-full"
                />
                
                {/* Quote icon */}
                <div className="relative z-10">
                  <Quote 
                    className="w-8 h-8 text-[var(--lina-cyan)] mb-6" 
                    data-testid="icon-quote"
                  />
                  
                  {/* Dynamic Testimonial Content with Animation */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {/* Testimonial text */}
                      <blockquote 
                        className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="text-testimonial-quote"
                      >
                        "{currentTestimonial.text}"
                      </blockquote>
                      
                      {/* Author information */}
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 rounded-full flex items-center justify-center">
                          <span 
                            className="text-white font-bold text-lg"
                            style={{ fontFamily: 'Lexend, sans-serif' }}
                          >
                            {currentTestimonial.initials}
                          </span>
                        </div>
                        <div className="text-left">
                          <p 
                            className="font-semibold text-gray-900 text-lg"
                            style={{ fontFamily: 'Lexend, sans-serif' }}
                            data-testid="text-author-name"
                          >
                            {currentTestimonial.author}
                          </p>
                          <p 
                            className="text-gray-600"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            data-testid="text-author-company"
                          >
                            {currentTestimonial.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}