"use client";

import { motion } from "framer-motion";

export default function QuemSomosHeroSection() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
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
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--lina-dark) 0%, #1a4f4d 50%, var(--lina-dark) 100%)`
      }}
      data-testid="section-quem-somos-hero"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[var(--lina-cyan)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[var(--lina-cyan)] rounded-full blur-2xl"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-quem-somos-title"
          >
            <span className="block">Somos a ponte que conecta</span>
            <span className="block">
              empresas ao universo de{" "}
              <span className="bg-gradient-to-r from-teal-700 to-cyan-400 bg-clip-text text-transparent">
                oportunidades
              </span>
            </span>
            <span className="block">do Open Finance.</span>
          </motion.h1>

          {/* Supporting Description */}
          <motion.div
            variants={descriptionVariants}
            className="max-w-4xl mx-auto space-y-6"
          >
            <p
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="text-quem-somos-description"
            >
              Nossa tecnologia revoluciona a forma como bancos, pessoas e empresas 
              compartilham dados e informações financeiras, gerando inovação e 
              criando oportunidades únicas.
            </p>
            
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[var(--lina-cyan)] font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="text-quem-somos-mission"
            >
              Simplificamos a complexidade para que nossos parceiros possam focar no crescimento.
            </p>
          </motion.div>

          {/* Animated connection visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              delay: 1.2
            }}
            className="flex justify-center items-center mt-16"
          >
            <div className="relative">
              {/* Connection dots */}
              <div className="flex items-center space-x-8">
                <motion.div
                  className="w-4 h-4 bg-[var(--lina-cyan)] rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="w-2 h-2 bg-teal-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                />
                <motion.div
                  className="w-3 h-3 bg-[var(--lina-cyan)] rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                />
                <motion.div
                  className="w-2 h-2 bg-teal-300 rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9
                  }}
                />
                <motion.div
                  className="w-5 h-5 bg-[var(--lina-cyan)] rounded-full"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                  }}
                />
              </div>
              
              {/* Connecting lines */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--lina-cyan)] to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-6 h-10 border-2 border-[var(--lina-cyan)] rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-[var(--lina-cyan)] rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}