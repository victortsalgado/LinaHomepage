"use client";

import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";

export default function JsrSocialProofSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  });

  // Client logos for social proof slider
  const clientLogos = [
    {
      name: "BRASILPREV",
      logo: "/figmaAssets/client.png"
    },
    {
      name: "BRASILCAP", 
      logo: "/figmaAssets/client-1.png"
    },
    {
      name: "BRP",
      logo: "/figmaAssets/client-2.png"
    },
    {
      name: "BRB",
      logo: "/figmaAssets/client.png"
    },
    {
      name: "Iugu",
      logo: "/figmaAssets/client-1.png"
    },
    {
      name: "SEMEAR",
      logo: "/figmaAssets/client-2.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      ref={sectionRef}
      className="w-full bg-gray-50 py-16 lg:py-24"
      data-testid="section-jsr-social-proof"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={sectionVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Title */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <h2 
              className="text-3xl lg:text-4xl xl:text-5xl font-medium mb-6"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-jsr-social-proof-title"
            >
              <span className="text-[#606060]">Resultados </span>
              <span className="text-[var(--lina-cyan)]">validados </span>
              <span className="text-[#606060]">por quem já usa</span>
            </h2>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <Card 
              className="max-w-4xl w-full bg-[#003a38] text-white rounded-2xl shadow-lg border-0"
              data-testid="card-jsr-testimonial"
            >
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-12 h-12 bg-[var(--lina-cyan)] rounded-full flex items-center justify-center">
                      <Quote 
                        className="w-6 h-6 text-[#003a38]"
                        data-testid="icon-jsr-quote"
                      />
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote 
                    className="text-lg lg:text-xl leading-relaxed font-light text-center lg:text-left"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="text-jsr-testimonial-quote"
                  >
                    "Estamos com a Lina desde o início do Open Finance e a nossa parceria sempre foi muito forte. Com a Lina, o BRP foi um dos primeiros bancos a obter a certificação funcional na Fase 1 e desde então sempre estivemos muito próximos dos diretores e corpo técnico, que nos dão todo o apoio e suporte necessários. Estamos muito satisfeitos com a parceria."
                  </blockquote>

                  {/* Author */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="text-center lg:text-left">
                      <div 
                        className="font-bold text-white text-lg"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="text-jsr-testimonial-author"
                      >
                        Marcelo Bueno
                      </div>
                      <div 
                        className="font-light text-gray-300 text-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="text-jsr-testimonial-role"
                      >
                        BRP
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Client Logos */}
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden"
            data-testid="section-jsr-client-logos"
          >
            <InfiniteSlider
              duration={25}
              gap={80}
              className="py-8"
            >
              {clientLogos.map((client, index) => (
                <div 
                  key={`${client.name}-${index}`} 
                  className="flex items-center justify-center min-w-[180px]"
                  data-testid={`logo-jsr-client-${index}`}
                >
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 ease-in-out opacity-70 hover:opacity-100 cursor-pointer"
                    data-testid={`img-jsr-logo-${client.name.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
              ))}
            </InfiniteSlider>
            
            {/* Gradient overlays for fade in/out effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}