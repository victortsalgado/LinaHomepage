"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";

export default function QuemSomosCtaSection() {
  const { ref, isVisible } = useScrollReveal();

  // Animation variants for the entire section
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonContainerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95 
    },
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
    <section 
      ref={ref}
      className="py-20 lg:py-32 bg-gray-50"
      data-testid="section-quem-somos-cta"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center"
        >
          {/* CTA Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 lg:mb-8"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-cta-title"
          >
            Vamos transformar o futuro juntos?
          </motion.h2>

          {/* CTA Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl leading-relaxed text-gray-600 mb-10 lg:mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-cta-description"
          >
            Seja você uma fintech em busca de inovação, um banco em plena transformação digital ou um talento apaixonado por desafios, a Lina é o seu parceiro ideal. Conheça nossas soluções ou junte-se à nossa equipe.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={buttonContainerVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            {/* Primary Button - Contact Specialist */}
            <motion.div variants={buttonVariants}>
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="button-contact-specialist"
              >
                Fale com um especialista
              </Button>
            </motion.div>

            {/* Secondary Button - Job Opportunities */}
            <motion.div variants={buttonVariants}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="button-job-opportunities"
              >
                Conheça nossas vagas
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}