"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function BlogHeroSection() {
  const { ref, isVisible } = useScrollReveal();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const dotsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--lina-dark)' }}
      data-testid="section-blog-hero"
    >
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-hero-title"
          >
            Lina Resource Center
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-hero-description"
          >
            A coleção completa de recursos e insights da Lina, em um só lugar - cobrindo uma ampla gama de tópicos que você vai adorar explorar.
          </motion.p>

          {/* Animated Central Visual Element */}
          <motion.div
            variants={circleVariants}
            className="relative flex justify-center items-center mt-16"
          >
            {/* Central Circle */}
            <div 
              className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full border-2 border-[var(--lina-cyan)] flex items-center justify-center"
              data-testid="visual-central-circle"
            >
              {/* Inner Circle */}
              <div 
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[var(--lina-cyan)] flex items-center justify-center"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white" />
              </div>

              {/* Animated Dots around Circle */}
              <motion.div
                variants={dotsVariants}
                className="absolute inset-0"
              >
                {Array.from({ length: 8 }).map((_, index) => {
                  const angle = (index * 45) * Math.PI / 180;
                  const radius = 120; // Distance from center
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={index}
                      variants={dotVariants}
                      className="absolute w-3 h-3 bg-[var(--lina-cyan)] rounded-full"
                      style={{
                        left: `calc(50% + ${x}px - 6px)`,
                        top: `calc(50% + ${y}px - 6px)`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}