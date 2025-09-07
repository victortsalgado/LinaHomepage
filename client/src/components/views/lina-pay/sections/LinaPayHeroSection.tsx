"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { motion } from "framer-motion";

// Animated smartphone interaction visualization
const SmartphoneInteraction = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Smartphone mockup container */}
      <motion.div
        className="relative w-80 h-96 bg-gray-100 rounded-3xl border-8 border-gray-300 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Screen */}
        <div className="w-full h-full bg-white relative">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 py-2 bg-gray-50">
            <div className="text-xs font-medium text-gray-800">9:41</div>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-green-500 rounded-full"></div>
              <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          {/* Payment interface */}
          <div className="p-6 space-y-6">
            <div className="text-center">
              <motion.h3
                className="text-lg font-semibold text-gray-800 mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Pagamento Seguro
              </motion.h3>
              <motion.p
                className="text-sm text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Confirme com sua biometria
              </motion.p>
            </div>
            
            {/* Payment amount */}
            <motion.div
              className="bg-[var(--lina-cyan)]/10 rounded-2xl p-4 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="text-2xl font-bold text-[var(--lina-cyan)]">R$ 149,90</div>
              <div className="text-sm text-gray-600">Pagamento via PIX</div>
            </motion.div>
            
            {/* Biometric placeholder */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="w-16 h-16 rounded-full bg-[var(--lina-cyan)]/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[var(--lina-cyan)] animate-pulse"></div>
              </div>
            </motion.div>
            
            {/* Success animation */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center text-green-600 text-sm font-medium"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <div className="w-4 h-4 rounded-full bg-green-600 mr-2"></div>
                Pagamento confirmado
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements around the phone */}
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
      </motion.div>
    </div>
  );
};

export default function LinaPayHeroSection() {
  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('cta-form-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Background Elements */}
      <div 
        aria-hidden
        className="fixed inset-0 pointer-events-none isolate overflow-hidden"
      >
        <div className="floating-ball" />
        <div className="floating-ball-2" />
        <div className="floating-ball-3" />
      </div>

      <main className="overflow-hidden bg-white">
        <section>
          <div className="relative pt-24 md:pt-36">
            {/* Background Gradient */}
            <div 
              aria-hidden 
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,rgb(255,255,255)_75%)]" 
            />
            
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                {/* Left Column - Content */}
                <div className="text-center lg:text-left">
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Heading
                      level="h1"
                      size="lg"
                      className="mt-8 max-w-4xl mx-auto lg:mx-0 text-balance text-gray-900"
                      gradientWords={['reduza custos']}
                      data-testid="heading-linapay-hero-title"
                    >
                      Transforme a experiência de compra e reduza custos com meios de pagamento
                    </Heading>
                  </motion.div>
                  
                  {/* Description */}
                  <motion.p
                    className="mx-auto lg:mx-0 mt-6 max-w-2xl text-balance text-lg text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="text-linapay-hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Com o Pix por Biometria, você elimina fricções no checkout e reduz custos com cartões e boletos, ao mesmo tempo em que oferece uma jornada de pagamento segura e inovadora.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-8 flex justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <Button
                      variant="light-bg"
                      size="lg"
                      onClick={handleScrollToCTA}
                      className="group px-10 text-lg font-bold"
                      data-testid="button-linapay-cta"
                    >
                      <span className="mr-2">Falar com um especialista</span>
                      <div className="overflow-hidden w-5">
                        <div className="flex w-10 -translate-x-1/2 duration-300 ease-in-out group-hover:translate-x-0">
                          <ArrowRight className="w-5 h-5" />
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Button>
                  </motion.div>

                  {/* Key benefits highlight */}
                  <motion.div
                    className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full" />
                      <span>Menor custo do mercado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full" />
                      <span>Pagamento instantâneo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full" />
                      <span>Integração rápida</span>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Visual Element */}
                <motion.div
                  className="relative h-[500px] lg:h-[600px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  <SmartphoneInteraction />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}