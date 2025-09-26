"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import AnimatedForm from "@/components/ui/AnimatedForm";

export default function JsrCtaFormSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <section 
      ref={sectionRef}
      className="py-48 md:py-64 lg:py-80 bg-gray-100" 
      data-testid="section-jsr-cta-form"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-20"
        >
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
              style={{ 
                fontFamily: 'Lexend, sans-serif',
                color: 'var(--lina-dark)'
              }}
              data-testid="heading-cta-title"
            >
              Antecipe-se à obrigatoriedade e lidere a nova era do Pix
            </h2>
            
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: 'var(--lina-dark)'
              }}
              data-testid="text-cta-subtitle"
            >
              A JSR será obrigatória em 2026, mas somente quem se antecipar terá vantagem competitiva. 
              Com a infraestrutura JSR da Lina, sua instituição entra em produção rapidamente e 
              começa a colher os frutos da inovação em pagamentos.
            </p>
          </div>

          {/* Animated Form Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                <AnimatedForm className="w-full" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}