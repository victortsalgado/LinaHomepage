"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function InfraFinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [, setLocation] = useLocation();

  return (
    <section 
      className="relative bg-gradient-to-br from-[var(--lina-dark)] via-gray-900 to-black py-32 overflow-hidden"
      data-testid="infrastructure-final-cta-section"
    >
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 circuit-texture opacity-30" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--lina-cyan)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-[var(--lina-cyan)]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Icon */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--lina-cyan)] to-teal-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-[var(--lina-cyan)]/25">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 title-glow"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            data-testid="final-cta-title"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Leve sua operação para o
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-300 bg-clip-text text-transparent">
              próximo nível.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            data-testid="final-cta-description"
          >
            Descubra como a infraestrutura da Lina pode destravar novas oportunidades, garantir sua conformidade e escalar sua operação de Open Finance com segurança.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <motion.button
              className="group bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 hover:from-[var(--lina-cyan)]/90 hover:to-teal-400/90 text-white font-bold text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 rounded-full shadow-2xl shadow-[var(--lina-cyan)]/25 hover:shadow-3xl hover:shadow-[var(--lina-cyan)]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden cursor-pointer"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              onClick={() => setLocation('/contato')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 239, 207, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              data-testid="final-cta-button"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <span className="relative flex items-center justify-center gap-4">
                Fale com um especialista
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[var(--lina-cyan)] rounded-full animate-pulse" />
              <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Consulta gratuita
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[var(--lina-cyan)] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Implementação especializada
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[var(--lina-cyan)] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Suporte 24x7
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}