"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function SolutionSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      className="bg-white py-20 lg:py-24"
      data-testid="section-solution"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -50 }}
            animate={textVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pr-8"
          >
            {/* Title */}
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-solution-title"
            >
              A solução ideal para ativar o{" "}
              <span className="bg-gradient-to-r from-teal-700 to-cyan-400 bg-clip-text text-transparent">
                Pix por aproximação sem travar o roadmap
              </span>
            </h2>

            {/* Description */}
            <p
              className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="text-solution-description"
            >
              Com a infraestrutura JSR da Lina, instituições financeiras que precisam 
              implementar o Pix por aproximação (NFC) não precisam se preocupar com o 
              desenvolvimento e homologação da tecnologia. A Lina oferece a infraestrutura 
              pronta e certificada para processar os pagamentos, permitindo que as equipes 
              se concentrem no que é mais importante: o cliente.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="button-solution-cta"
            >
              Descubra como funciona
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="ml-2"
              >
                →
              </motion.div>
            </Button>
          </motion.div>

          {/* Right Column - Reference Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={imageVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:pl-8 flex justify-center"
            data-testid="visual-solution-image"
          >
            <div className="relative">
              <img
                src="/figmaAssets/womanjsr-2.png"
                alt="Mulher de óculos analisando interface JSR"
                className="w-full h-auto max-w-md lg:max-w-lg rounded-2xl shadow-lg"
                data-testid="img-solution-reference"
              />
              
              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--lina-cyan)] rounded-full opacity-60"
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
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-teal-400 rounded-full opacity-40"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}