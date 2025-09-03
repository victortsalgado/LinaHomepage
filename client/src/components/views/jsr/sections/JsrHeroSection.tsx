"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Fingerprint, Nfc, CheckCircle } from "lucide-react";

// JSR Payment Animation Component
const JsrPaymentAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main smartphone mockup */}
      <motion.div
        className="relative w-80 h-96 bg-gray-900 rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Screen */}
        <div className="w-full h-full bg-white relative">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
            <div className="text-sm font-medium text-gray-800">9:41</div>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-green-500 rounded-full"></div>
              <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          {/* App Interface */}
          <div className="p-6 space-y-6">
            {/* App header */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Café Premium
              </h3>
              <p className="text-sm text-gray-600">
                Pagamento Instantâneo
              </p>
            </motion.div>
            
            {/* Payment amount */}
            <motion.div
              className="bg-[var(--lina-cyan)]/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="text-3xl font-bold text-[var(--lina-cyan)] mb-2">R$ 12,50</div>
              <div className="text-sm text-gray-600">PIX por Aproximação</div>
            </motion.div>
            
            {/* Biometric + NFC demonstration */}
            <motion.div
              className="flex justify-center items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              {/* Fingerprint animation */}
              <motion.div
                className="w-16 h-16 rounded-full bg-[var(--lina-cyan)]/20 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  backgroundColor: ["rgba(0, 239, 207, 0.2)", "rgba(0, 239, 207, 0.4)", "rgba(0, 239, 207, 0.2)"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Fingerprint className="w-8 h-8 text-[var(--lina-cyan)]" />
              </motion.div>
              
              <div className="text-2xl text-gray-400">+</div>
              
              {/* NFC animation */}
              <motion.div
                className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  backgroundColor: ["rgba(20, 184, 166, 0.2)", "rgba(20, 184, 166, 0.4)", "rgba(20, 184, 166, 0.2)"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Nfc className="w-8 h-8 text-teal-500" />
              </motion.div>
            </motion.div>
            
            {/* Success confirmation */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center text-green-600 text-base font-medium"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Sem redirecionamento!
              </motion.div>
              <p className="text-xs text-gray-500 mt-1">
                Pagamento confirmado instantaneamente
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* NFC waves animation */}
        <motion.div
          className="absolute -top-8 -right-8 w-20 h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-[var(--lina-cyan)] rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut"
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <Nfc className="w-6 h-6 text-[var(--lina-cyan)]" />
          </div>
        </motion.div>
        
        {/* Floating elements for extra dynamism */}
        <motion.div
          className="absolute -top-4 -left-4 w-6 h-6 bg-[var(--lina-cyan)] rounded-full opacity-60"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-6 -right-6 w-8 h-8 bg-teal-400 rounded-full opacity-40"
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  );
};

export default function JsrHeroSection() {
  const handleScrollToForm = () => {
    const formSection = document.querySelector('[data-testid="section-cta-form"]');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="bg-white py-20 lg:py-24"
      data-testid="section-jsr-hero"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:pr-8"
          >
            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-jsr-hero-title"
            >
              A nova era do Pix já começou —{" "}
              <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 bg-clip-text text-transparent">
                e sua instituição precisa estar pronta
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="text-jsr-hero-description"
            >
              Antecipe-se à obrigatoriedade de 2026. Com a infraestrutura JSR da Lina, 
              sua instituição entra em produção rapidamente, oferecendo pagamentos por 
              biometria e aproximação sem fricção.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              data-testid="button-jsr-hero-cta"
            >
              <Button
                onClick={handleScrollToForm}
                size="lg"
                className="bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90 text-[var(--lina-dark)] font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: 'Lexend, sans-serif' }}
              >
                Fale com um especialista
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>

            {/* Supporting badge */}
            <motion.div
              variants={itemVariants}
              className="mt-8 inline-flex items-center gap-3 bg-[var(--lina-cyan)]/10 rounded-full px-4 py-2"
              data-testid="badge-jsr-hero-urgency"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span 
                className="text-sm font-medium text-gray-700"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Obrigatório a partir de 2026
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - JSR Payment Visualization */}
          <motion.div
            className="lg:pl-8 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            data-testid="visual-jsr-hero-animation"
          >
            <JsrPaymentAnimation />
          </motion.div>
        </div>

        {/* Bottom highlight bar */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <Fingerprint className="w-5 h-5 text-[var(--lina-cyan)]" />
            <span 
              className="text-sm font-medium text-gray-700"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Biometria
            </span>
          </div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Nfc className="w-5 h-5 text-teal-500" />
            <span 
              className="text-sm font-medium text-gray-700"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Aproximação
            </span>
          </div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span 
              className="text-sm font-medium text-gray-700"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Sem Redirecionamento
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}