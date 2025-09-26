"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import RDStationForm from "@/components/ui/RDStationForm";

export default function CtaFormSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  });

  return (
    <section 
      ref={ref}
      className="w-full py-48 md:py-64 lg:py-80 bg-gray-100"
      data-testid="section-cta-form"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        {/* Section Title and Subtitle */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Title */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-[var(--lina-dark)] mb-6"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-cta-title"
          >
            Vamos simplificar e reduzir o custo dos pagamentos?
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-cta-subtitle"
          >
            Fale com um especialista e descubra como o LinaPay pode transformar a experiência de compra dos seus clientes e otimizar sua receita.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Form Title and Subtitle */}
          <div className="text-center mb-8">
            <h3 
              className="text-2xl md:text-3xl font-bold text-[var(--lina-dark)] mb-4"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-form-title"
            >
              Fale com um especialista hoje mesmo.
            </h3>
            <p 
              className="text-lg text-gray-600"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="text-form-subtitle"
            >
              Não se preocupe, seus dados estarão sempre seguros conosco.
            </p>
          </div>

          {/* RD Station Form */}
          <RDStationForm className="w-full utm-hidden" />
        </motion.div>
      </div>
    </section>
  );
}