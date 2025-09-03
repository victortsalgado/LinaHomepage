"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Optimized WebP images for better performance
const fintechInnovationImage = "/assets/generated_images/Fintech_innovation_infrastructure_visualization_95bfa7ab.webp";
const businessGrowthImage = "/assets/generated_images/3D_business_growth_visualization_676e1f0e.webp";
const securityComplianceImage = "/assets/generated_images/3D_security_compliance_visualization_053fa71b.webp";

interface Slide {
  id: number;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  priority: boolean; // Para otimização de LCP
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Estrutura de dados otimizada para CMS
  const slides: Slide[] = [
    {
      id: 0,
      badge: "Novidade: PIX Automático Disponível",
      title: "A infraestrutura completa para Iniciação de Pagamentos e Open Finance.",
      description: "Conecte-se a dados financeiros em tempo real, automatize pagamentos e crie produtos inovadores com uma única API, homologada pelo Banco Central.",
      buttonText: "Conheça nossas soluções",
      imageSrc: fintechInnovationImage,
      imageAlt: "Infraestrutura de pagamentos e Open Finance da Lina",
      priority: true, // Primeiro slide tem prioridade para LCP
    },
    {
      id: 1,
      badge: "Resultados Comprovados",
      title: "Transforme dados em novas fontes de receita e oportunidades de negócio.",
      description: "Acelere seus resultados com nossa plataforma de crescimento. Automação inteligente, análises preditivas e integração completa em uma única solução.",
      buttonText: "Veja os cases de sucesso",
      imageSrc: businessGrowthImage,
      imageAlt: "Crescimento empresarial e automação inteligente",
      priority: false, // Lazy loading para otimização
    },
    {
      id: 2,
      badge: "Exclusivo: Arquitetura de Segurança",
      title: "Segurança e Compliance de Nível Bancário para sua operação.",
      description: "Proteja seus dados e transações com nossa infraestrutura certificada. Conformidade total com LGPD e regulamentações do Banco Central.",
      buttonText: "Saiba mais sobre segurança",
      imageSrc: securityComplianceImage,
      imageAlt: "Segurança e compliance de nível bancário",
      priority: false, // Lazy loading para otimização
    }
  ];

  // Auto-play do carrossel a cada 8 segundos - apenas para desktop
  useEffect(() => {
    
    // Verificar se está no desktop antes de iniciar o carrossel
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktop) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Para mobile, sempre usar o primeiro slide
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const currentSlideData = isMobile ? slides[0] : slides[currentSlide];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Variantes de animação para Framer Motion - apenas para desktop
  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
      filter: 'blur(8px)',
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 50 : -50,
      filter: 'blur(8px)',
    }),
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 0.9,
      rotateY: 15,
    },
    center: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotateY: -15,
    },
  };

  // Componente de conteúdo otimizado para mobile
  const StaticContent = () => (
    <div className="h-full flex flex-col justify-center">
      {/* Badge */}
      <div
        className="hover:bg-[var(--lina-cyan)]/20 bg-[var(--lina-cyan)]/10 border-[var(--lina-cyan)]/30 group mx-auto lg:mx-0 flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-[var(--lina-cyan)]/10 transition-all duration-300 backdrop-blur-sm"
        data-testid="announcement-badge"
      >
        <span className="font-light text-sm text-[var(--lina-cyan)]">
          {currentSlideData.badge}
        </span>
        <div className="bg-[var(--lina-cyan)]/20 group-hover:bg-[var(--lina-cyan)]/30 size-6 overflow-hidden rounded-full duration-500">
          <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
            <span className="flex size-6">
              <ArrowRight className="m-auto size-3 text-[var(--lina-cyan)]" />
            </span>
            <span className="flex size-6">
              <ArrowRight className="m-auto size-3 text-[var(--lina-cyan)]" />
            </span>
          </div>
        </div>
      </div>
      
      {/* Title */}
      <h1
        className="mt-8 max-w-4xl mx-auto lg:mx-0 text-balance text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground min-h-[120px] md:min-h-[160px] lg:min-h-[200px] flex items-center"
        style={{ fontFamily: 'Lexend, sans-serif' }}
        data-testid="heading-hero-title"
      >
        {currentSlideData.title}
      </h1>
      
      {/* Description */}
      <p
        className="mx-auto lg:mx-0 mt-6 max-w-2xl text-balance text-lg text-muted-foreground leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
        data-testid="text-hero-description"
      >
        {currentSlideData.description}
      </p>

      {/* CTA Button */}
      <div className="mt-8 flex justify-center lg:justify-start">
        <Button
          variant="light-bg"
          size="lg"
          className=" rounded-lg px-8 font-semibold shadow-lg shadow-[var(--lina-cyan)]/25 hover:shadow-xl hover:shadow-[var(--lina-cyan)]/30"
          data-testid="button-cta"
        >
          <span>{currentSlideData.buttonText}</span>
        </Button>
      </div>
    </div>
  );

  // Componente animado para desktop
  const AnimatedContent = () => (
    <AnimatePresence mode="wait" custom={currentSlide}>
      <motion.div
        key={currentSlide}
        custom={currentSlide}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ 
          duration: 0.6, 
          type: 'spring', 
          bounce: 0.2,
        }}
        className="h-full flex flex-col justify-center"
      >
        {/* Badge */}
        <motion.div
          className="hover:bg-[var(--lina-cyan)]/20 bg-[var(--lina-cyan)]/10 border-[var(--lina-cyan)]/30 group mx-auto lg:mx-0 flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-[var(--lina-cyan)]/10 transition-all duration-300 backdrop-blur-sm"
          data-testid="announcement-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="font-light text-sm text-[var(--lina-cyan)]">
            {currentSlideData.badge}
          </span>
          <div className="bg-[var(--lina-cyan)]/20 group-hover:bg-[var(--lina-cyan)]/30 size-6 overflow-hidden rounded-full duration-500">
            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
              <span className="flex size-6">
                <ArrowRight className="m-auto size-3 text-[var(--lina-cyan)]" />
              </span>
              <span className="flex size-6">
                <ArrowRight className="m-auto size-3 text-[var(--lina-cyan)]" />
              </span>
            </div>
          </div>
        </motion.div>
        
        {/* Title */}
        <motion.h1
          className="mt-8 max-w-4xl mx-auto lg:mx-0 text-balance text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground min-h-[120px] md:min-h-[160px] lg:min-h-[200px] flex items-center"
          style={{ fontFamily: 'Lexend, sans-serif' }}
          data-testid="heading-hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {currentSlideData.title}
        </motion.h1>
        
        {/* Description */}
        <motion.p
          className="mx-auto lg:mx-0 mt-6 max-w-2xl text-balance text-lg text-muted-foreground leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
          data-testid="text-hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {currentSlideData.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-8 flex justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button
            variant="light-bg"
            size="lg"
            className=" rounded-lg px-8 font-semibold shadow-lg shadow-[var(--lina-cyan)]/25 hover:shadow-xl hover:shadow-[var(--lina-cyan)]/30"
            data-testid="button-cta"
          >
            <span>{currentSlideData.buttonText}</span>
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

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

      <main className="overflow-hidden bg-background">
        <section>
          <div className="relative pt-24 md:pt-36">
            {/* Background Gradient */}
            <div 
              aria-hidden 
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" 
            />
            
            <div className="mx-auto max-w-7xl px-6">
              <div 
                className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]"
              >
                {/* Left Column - Content */}
                <div className="text-center lg:text-left min-h-[500px] md:min-h-[550px] flex flex-col justify-center">
                  {/* Mobile: Conteúdo estático sem animações para performance */}
                  <div className="md:hidden">
                    <StaticContent />
                  </div>

                  {/* Desktop: Conteúdo animado com carrossel */}
                  <div className="hidden md:block flex flex-col justify-between h-full">
                    <AnimatedContent />
                    
                    {/* Carousel Indicators - apenas no desktop */}
                    <motion.div 
                      className="flex justify-center items-center gap-3 mt-12"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    >
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`h-2 rounded-full transition-all duration-500 ${
                            index === currentSlide 
                              ? 'w-12 bg-[var(--lina-cyan)]' 
                              : 'w-2 bg-gray-400 dark:bg-gray-600 hover:bg-[var(--lina-cyan)]/50'
                          }`}
                          data-testid={`carousel-indicator-${index}`}
                          aria-label={`Ir para slide ${index + 1}`}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
                
                {/* Right Column - Image */}
                {/* Mobile: Imagem estática otimizada para LCP */}
                <div className="md:hidden relative h-[400px] w-full">
                  <img
                    src={slides[0].imageSrc}
                    alt={slides[0].imageAlt}
                    className="w-full h-auto max-w-2xl mx-auto object-contain filter drop-shadow-2xl"
                    loading="eager"
                    fetchpriority="high"
                    data-testid="hero-image-mobile-static"
                  />
                </div>

                {/* Desktop: Carrossel animado */}
                <div className="hidden md:block relative h-[600px] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ 
                        duration: 0.8, 
                        type: 'spring', 
                        bounce: 0.1,
                        delay: 0.2
                      }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={currentSlideData.imageSrc}
                        alt={currentSlideData.imageAlt}
                        className="w-full h-auto max-w-2xl object-contain filter drop-shadow-2xl"
                        loading={currentSlideData.priority ? "eager" : "lazy"}
                        {...(currentSlideData.priority && { fetchpriority: "high" })}
                        data-testid={`hero-image-${currentSlideData.id}`}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}