"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function JsrApisSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white" 
      data-testid="section-jsr-apis"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-jsr-apis-title"
          >
            APIs construídas para facilitar a sua operação
          </h2>
        </motion.div>
      </div>
    </section>
  );
}