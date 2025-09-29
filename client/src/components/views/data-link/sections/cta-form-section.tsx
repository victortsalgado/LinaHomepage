"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import AnimatedForm from "@/components/ui/AnimatedForm";

export default function CtaFormSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  });

  return (
    <section 
      ref={ref}
      className="w-full py-48 md:py-64 lg:py-80 bg-white"
      data-testid="section-cta-form"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        {/* Section Title and Subtitle */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
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
            <span className="font-normal">Vamos juntos transformar </span>
            <span className="font-bold bg-gradient-to-r from-[#00857F] to-[#2EC9BC] bg-clip-text text-transparent">complexidade em agilidade?</span>
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-cta-subtitle"
          >
            Nossa infraestrutura de Open Finance já impulsiona os maiores players do mercado. 
            Fale com um especialista e descubra o potencial para o seu negócio.
          </p>
        </motion.div>

        {/* Animated Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <AnimatedForm className="w-full" tags={["lina-website", "data-link-form"]} />
        </motion.div>
      </div>
    </section>
  );
}