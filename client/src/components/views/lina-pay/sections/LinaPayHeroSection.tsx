"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { motion } from "framer-motion";
import pixBiometriaApp from "@assets/telas-lp (1)_1757687529438.gif";


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

                  
                </div>

                {/* Right Column - Visual Element */}
                <motion.div
                  className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  <div className="relative max-w-md mx-auto">
                    <img
                      src={pixBiometriaApp}
                      alt="App Pix por Biometria - Interface de pagamento"
                      className="w-full h-auto max-h-[500px] object-contain drop-shadow-2xl"
                      data-testid="img-pix-biometria-app"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}