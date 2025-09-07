"use client";

import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";

export default function JsrSocialProofSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  });


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
      className="w-full bg-gradient-to-br from-[#E0F3F3] to-[#C9E5E5] py-48 md:py-64 lg:py-80"
      data-testid="section-jsr-social-proof"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={sectionVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Main Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Title, Team Avatars, and CTA */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Title with Star */}
              <div>
                <h2 
                  className="text-3xl lg:text-4xl xl:text-5xl font-medium mb-6 flex flex-wrap items-center gap-3"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                  data-testid="heading-jsr-social-proof-title"
                >
                  <span className="text-[#606060]">Resultados</span>
                  <span className="text-[var(--lina-cyan)]">validados</span>
                  <Star 
                    className="w-8 h-8 lg:w-10 lg:h-10 text-[var(--lina-cyan)] fill-current"
                    data-testid="icon-star"
                  />
                  <span className="text-[#606060]">por quem já usa</span>
                </h2>
              </div>

              {/* Team Avatars */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-4"
                data-testid="section-team-avatars"
              >
                <div className="flex -space-x-3">
                  {/* Avatar 1 */}
                  <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Professional 1"
                      className="w-full h-full object-cover"
                      data-testid="img-avatar-1"
                    />
                  </div>
                  {/* Avatar 2 */}
                  <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Professional 2"
                      className="w-full h-full object-cover"
                      data-testid="img-avatar-2"
                    />
                  </div>
                  {/* Avatar 3 */}
                  <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <img
                      src="https://randomuser.me/api/portraits/men/56.jpg"
                      alt="Professional 3"
                      className="w-full h-full object-cover"
                      data-testid="img-avatar-3"
                    />
                  </div>
                </div>
                <p 
                  className="text-sm text-gray-600 ml-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  data-testid="text-team-info"
                >
                  +100 clientes satisfeitos
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <Button
                  size="lg"
                  className="bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                  data-testid="button-jsr-social-proof-cta"
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
            </motion.div>

            {/* Right Column - Testimonial Card */}
            <motion.div 
              variants={itemVariants}
              className="lg:pl-8"
            >
              <Card 
                className="w-full bg-[var(--lina-dark)] text-white rounded-2xl shadow-xl border-0 relative overflow-hidden"
                data-testid="card-jsr-testimonial"
              >
                <CardContent className="p-8 lg:p-10 relative">
                  {/* Quote Icon - Top Right */}
                  <div className="absolute top-6 right-6">
                    <Quote 
                      className="w-10 h-10 text-[var(--lina-cyan)]"
                      data-testid="icon-jsr-quote"
                    />
                  </div>
                  
                  <div className="space-y-6 pr-8">
                    {/* Testimonial Text */}
                    <blockquote 
                      className="text-lg lg:text-xl leading-relaxed font-light"
                      style={{ fontFamily: 'Lexend, sans-serif' }}
                      data-testid="text-jsr-testimonial-quote"
                    >
                      "Estamos com a Lina desde o início do Open Finance e a nossa parceria sempre foi muito forte. Com a Lina, o BRP foi um dos primeiros bancos a obter a certificação funcional na Fase 1 e desde então sempre estivemos muito próximos dos diretores e corpo técnico, que nos dão todo o apoio e suporte necessários. Estamos muito satisfeitos com a parceria."
                    </blockquote>

                    {/* Author Information */}
                    <div className="flex items-center space-x-4 pt-4">
                      {/* Author Avatar */}
                      <div className="w-14 h-14 rounded-full border-2 border-[var(--lina-cyan)] shadow-lg overflow-hidden">
                        <img
                          src="https://randomuser.me/api/portraits/men/68.jpg"
                          alt="Marcelo Bueno"
                          className="w-full h-full object-cover"
                          data-testid="img-author-avatar"
                        />
                      </div>
                      
                      <div className="text-left">
                        <div 
                          className="font-bold text-white text-lg"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          data-testid="text-jsr-testimonial-author"
                        >
                          Marcelo Bueno
                        </div>
                        <div 
                          className="font-light text-gray-300 text-base"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          data-testid="text-jsr-testimonial-role"
                        >
                          Gerente de Controladoria e Compliance, BRP
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}