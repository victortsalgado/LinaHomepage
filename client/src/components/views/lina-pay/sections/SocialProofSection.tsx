"use client";

import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";
import brasilprevLogo from "@/assets/brasilprev.png";
import bradescoSegurosLogo from "@/assets/bradesco-seguros.png";
import caixaLogo from "@/assets/caixa.png";
import icatuSegurosLogo from "@/assets/icatu-seguros.png";
import hdiSegurosLogo from "@/assets/hdi-seguros.png";
import cloudwalkLogo from "@/assets/cloudwalk.png";

export default function SocialProofSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  });

  // Client logos for social proof
  const clientLogos = [
    {
      name: "BrasilPrev",
      logo: brasilprevLogo
    },
    {
      name: "Bradesco Seguros", 
      logo: bradescoSegurosLogo
    },
    {
      name: "Caixa",
      logo: caixaLogo
    },
    {
      name: "Icatu Seguros",
      logo: icatuSegurosLogo
    },
    {
      name: "HDI Seguros",
      logo: hdiSegurosLogo
    },
    {
      name: "CloudWalk",
      logo: cloudwalkLogo
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
      className="w-full bg-white py-16 lg:py-24"
      data-testid="section-social-proof"
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
              data-testid="heading-social-proof-title"
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
              data-testid="card-testimonial"
            >
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-12 h-12 bg-[var(--lina-cyan)] rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-[#003a38]" />
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote 
                    className="text-lg lg:text-xl leading-relaxed font-light text-center lg:text-left"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="text-testimonial-quote"
                  >
                    "A solução de Pix via Open Finance da Lina foi fundamental para o sucesso da jornada de investimento em previdência via WhatsApp da Brasilprev. Com ela, os clientes podem investir a partir de qualquer banco, de forma simples e segura. A Lina contribuiu diretamente para solucionar o desafio de levar a previdência para cada vez mais brasileiros."
                  </blockquote>

                  {/* Author */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="text-center lg:text-left">
                      <div 
                        className="font-bold text-white text-lg"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="text-testimonial-author"
                      >
                        Leonardo Rainhos
                      </div>
                      <div 
                        className="font-light text-gray-300 text-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="text-testimonial-role"
                      >
                        Gerente de Produtos da Brasilprev
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
            data-testid="section-client-logos"
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
                  data-testid={`logo-client-${index}`}
                >
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 ease-in-out opacity-70 hover:opacity-100 cursor-pointer"
                    data-testid={`img-logo-${client.name.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
              ))}
            </InfiniteSlider>
            
            {/* Gradient overlays for fade in/out effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}