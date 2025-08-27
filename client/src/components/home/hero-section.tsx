import { ArrowRight, Database, CreditCard, Shield, Smartphone, TrendingUp, Building2, Zap, BarChart3, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Definir slides com conteúdo único
  const slides = [
    {
      id: 0,
      badge: "Novidade: PIX Automático Disponível",
      title: "Soluções Financeiras Inteligentes para o Seu Negócio",
      description: "Plataforma completa de pagamentos PIX, Open Finance e gestão de dados empresariais. Conecte, automatize e acelere seus processos financeiros com tecnologia de ponta.",
      buttonText: "Falar com Especialista",
      timelineData: [
        {
          id: 1,
          title: "Data Link",
          date: "2024",
          content: "Integração completa com Open Finance para dados bancários e de investimento em tempo real.",
          category: "Dados",
          icon: Database,
          relatedIds: [2, 3],
          status: "completed" as const,
          energy: 100,
        },
        {
          id: 2,
          title: "Lina Pay",
          date: "2024",
          content: "PIX Automático e PIX Biometria para pagamentos inovadores e seguros.",
          category: "Pagamentos",
          icon: CreditCard,
          relatedIds: [1, 4],
          status: "completed" as const,
          energy: 95,
        },
        {
          id: 3,
          title: "Open Finance",
          date: "2024",
          content: "Plataforma completa para entidades reguladas com conformidade total do Bacen.",
          category: "Regulamentação",
          icon: Shield,
          relatedIds: [1, 5],
          status: "in-progress" as const,
          energy: 80,
        },
        {
          id: 4,
          title: "JSR",
          date: "2024",
          content: "Jornada Sem Redirecionamento com biometria FIDO2 para experiência superior.",
          category: "Experiência",
          icon: Smartphone,
          relatedIds: [2, 5],
          status: "in-progress" as const,
          energy: 75,
        },
        {
          id: 5,
          title: "Analytics",
          date: "2024",
          content: "Insights avançados e monitoramento em tempo real para tomada de decisões.",
          category: "Inteligência",
          icon: TrendingUp,
          relatedIds: [3, 4],
          status: "pending" as const,
          energy: 60,
        },
      ]
    },
    {
      id: 1,
      badge: "Destaque: Crescimento 300% em 2024",
      title: "Transforme sua Empresa com Tecnologia Financeira Avançada",
      description: "Acelere seus resultados com nossa plataforma de crescimento empresarial. Automação inteligente, análises preditivas e integração completa em uma única solução.",
      buttonText: "Ver Cases de Sucesso",
      timelineData: [
        {
          id: 1,
          title: "Growth Hub",
          date: "2024",
          content: "Central de crescimento com métricas em tempo real e insights acionáveis para sua empresa.",
          category: "Crescimento",
          icon: TrendingUp,
          relatedIds: [2, 3],
          status: "completed" as const,
          energy: 100,
        },
        {
          id: 2,
          title: "Smart Automation",
          date: "2024",
          content: "Automação inteligente de processos financeiros e operacionais para máxima eficiência.",
          category: "Automação",
          icon: Zap,
          relatedIds: [1, 4],
          status: "completed" as const,
          energy: 90,
        },
        {
          id: 3,
          title: "Enterprise Suite",
          date: "2024",
          content: "Suite completa para grandes empresas com governança e compliance avançados.",
          category: "Enterprise",
          icon: Building2,
          relatedIds: [1, 5],
          status: "in-progress" as const,
          energy: 85,
        },
        {
          id: 4,
          title: "Analytics Pro",
          date: "2024",
          content: "Business Intelligence avançado com predições e recomendações baseadas em IA.",
          category: "Analytics",
          icon: BarChart3,
          relatedIds: [2, 5],
          status: "in-progress" as const,
          energy: 80,
        },
        {
          id: 5,
          title: "Team Connect",
          date: "2024",
          content: "Colaboração entre equipes com workflows personalizados e gestão centralizada.",
          category: "Colaboração",
          icon: Users,
          relatedIds: [3, 4],
          status: "pending" as const,
          energy: 70,
        },
      ]
    },
    {
      id: 2,
      badge: "Exclusivo: Nova Arquitetura de Segurança",
      title: "Segurança e Compliance de Nível Bancário",
      description: "Proteja seus dados e transações com nossa infraestrutura de segurança certificada. Conformidade total com LGPD, PCI-DSS e regulamentações do Banco Central.",
      buttonText: "Conhecer Segurança",
      timelineData: [
        {
          id: 1,
          title: "Security Core",
          date: "2024",
          content: "Núcleo de segurança com criptografia de ponta e autenticação multifator avançada.",
          category: "Segurança",
          icon: Shield,
          relatedIds: [2, 3],
          status: "completed" as const,
          energy: 100,
        },
        {
          id: 2,
          title: "Compliance Hub",
          date: "2024",
          content: "Central de compliance com monitoramento contínuo e relatórios automáticos.",
          category: "Compliance",
          icon: Database,
          relatedIds: [1, 4],
          status: "completed" as const,
          energy: 95,
        },
        {
          id: 3,
          title: "Fraud Detection",
          date: "2024",
          content: "Detecção de fraudes em tempo real com machine learning e análise comportamental.",
          category: "Proteção",
          icon: Smartphone,
          relatedIds: [1, 5],
          status: "in-progress" as const,
          energy: 85,
        },
        {
          id: 4,
          title: "Audit Trail",
          date: "2024",
          content: "Rastreabilidade completa com logs imutáveis e auditoria automatizada.",
          category: "Auditoria",
          icon: BarChart3,
          relatedIds: [2, 5],
          status: "in-progress" as const,
          energy: 80,
        },
        {
          id: 5,
          title: "Risk Management",
          date: "2024",
          content: "Gestão de riscos com scoring dinâmico e alertas preditivos inteligentes.",
          category: "Gestão de Risco",
          icon: TrendingUp,
          relatedIds: [3, 4],
          status: "pending" as const,
          energy: 75,
        },
      ]
    }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Muda a cada 6 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Simple Floating Ball Background */}
      <div 
        aria-hidden
        className="fixed inset-0 pointer-events-none isolate overflow-hidden"
      >
        <div className="floating-ball" />
      </div>
      <main className="overflow-hidden bg-background dark:bg-background">
        <section>
          <div className="relative pt-24 md:pt-36">
            {/* Background Image for Dark Mode */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <div 
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block w-full h-full opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 216, 0.1) 0%, transparent 50%)',
                }}
              />
            </AnimatedGroup>
            
            {/* Radial gradient overlay */}
            <div 
              aria-hidden 
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" 
            />
            
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="text-center lg:text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -20, filter: 'blur(12px)' }}
                      transition={{ 
                        duration: 0.8, 
                        type: 'spring', 
                        bounce: 0.3,
                        staggerChildren: 0.1,
                        delayChildren: 0.1
                      }}
                    >
                      {/* Announcement Badge */}
                      <motion.a
                        href="#link"
                        className="hover:bg-[#00F0D8]/20 dark:hover:bg-[#00F0D8]/10 bg-[#00F0D8]/10 border-[#00F0D8]/30 group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-[#00F0D8]/10 transition-all duration-300 backdrop-blur-sm"
                        data-testid="announcement-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5, type: 'spring', bounce: 0.4 }}
                      >
                        <span className="font-medium text-sm text-[#009999]">{currentSlideData.badge}</span>
                        <span className="block h-4 w-0.5 border-l border-[#00F0D8]/50 bg-[#00F0D8]/50 pl-[0px] pr-[0px] ml-[1px] mr-[1px]"></span>

                        <div className="bg-[#00F0D8]/20 group-hover:bg-[#00F0D8]/30 size-6 overflow-hidden rounded-full duration-500">
                          <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                            <span className="flex size-6">
                              <ArrowRight className="m-auto size-3 text-[#00F0D8]" />
                            </span>
                            <span className="flex size-6">
                              <ArrowRight className="m-auto size-3 text-[#00F0D8]" />
                            </span>
                          </div>
                        </div>
                      </motion.a>
                      
                      {/* Main Heading */}
                      <motion.h1
                        className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold text-foreground"
                        data-testid="heading-hero-title"
                        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ delay: 0.3, duration: 0.8, type: 'spring', bounce: 0.2 }}
                      >
                        {currentSlideData.title}
                      </motion.h1>
                      
                      {/* Description */}
                      <motion.p
                        className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground"
                        data-testid="text-hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        {currentSlideData.description}
                      </motion.p>

                      {/* Action Buttons */}
                      <motion.div
                        className="mt-12 flex flex-col items-start justify-start gap-2 md:flex-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                      >
                        <Button
                          size="lg"
                          variant="ghost"
                          className="group h-10.5 rounded-xl px-5 border border-muted-foreground/20 hover:border-[#00F0D8]/50 hover:bg-[#00F0D8]/5 transition-all duration-300"
                          data-testid="button-request-demo"
                        >
                          <span className="text-nowrap mr-2">{currentSlideData.buttonText}</span>
                          <div className="overflow-hidden w-4">
                            <div className="flex w-8 -translate-x-1/2 duration-300 ease-in-out group-hover:translate-x-0">
                              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[#00F0D8] transition-colors duration-300" />
                              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[#00F0D8] transition-colors duration-300" />
                            </div>
                          </div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel Controls */}
                  <motion.div 
                    className="flex justify-center lg:justify-start items-center gap-4 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevSlide}
                        className="p-2 rounded-full border border-muted-foreground/20 hover:border-[#00F0D8]/50 hover:bg-[#00F0D8]/5 transition-all duration-300 group"
                        data-testid="carousel-prev"
                      >
                        <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-[#00F0D8] transition-colors duration-300" />
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="p-2 rounded-full border border-muted-foreground/20 hover:border-[#00F0D8]/50 hover:bg-[#00F0D8]/5 transition-all duration-300 group"
                        data-testid="carousel-next"
                      >
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[#00F0D8] transition-colors duration-300" />
                      </button>
                    </div>

                    {/* Indicators */}
                    <div className="flex items-center gap-2">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                              ? 'w-8 bg-[#00F0D8]' 
                              : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                          data-testid={`carousel-indicator-${index}`}
                        />
                      ))}
                    </div>

                    {/* Slide Counter */}
                    <div className="text-sm text-muted-foreground">
                      {currentSlide + 1} / {slides.length}
                    </div>
                  </motion.div>
                </div>
                
                {/* Right Column - Orbital Animation */}
                <div className="hidden lg:block h-[800px] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                      transition={{ 
                        duration: 1, 
                        type: 'spring', 
                        bounce: 0.2,
                        delay: 0.3
                      }}
                      className="w-full h-full"
                    >
                      <RadialOrbitalTimeline timelineData={currentSlideData.timelineData} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Hero Image/Dashboard Preview */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: 'blur(12px)',
                    y: 12,
                  },
                  visible: {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.3,
                      duration: 1.5,
                    },
                  },
                },
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="group inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 hover:shadow-2xl hover:shadow-[#00F0D8]/10 transition-all duration-500 hover:scale-[1.02]">
                  {/* Dashboard Image - Dark Mode */}
                  <div 
                    className="bg-background aspect-[15/8] relative hidden rounded-2xl dark:block bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
                    data-testid="dashboard-preview-dark"
                  >
                    <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500 group-hover:animate-pulse"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 group-hover:animate-pulse"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 group-hover:animate-pulse"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gradient-to-r from-[#00F0D8] via-[#00F0D8]/80 to-transparent rounded w-3/4 group-hover:from-[#00F0D8] group-hover:via-[#00F0D8] group-hover:to-[#00F0D8]/30 transition-all duration-500"></div>
                        <div className="h-3 bg-zinc-700 rounded w-1/2 group-hover:bg-zinc-600 transition-all duration-300"></div>
                        <div className="h-3 bg-zinc-700 rounded w-2/3 group-hover:bg-zinc-600 transition-all duration-300"></div>
                        <div className="mt-6 grid grid-cols-3 gap-4">
                          <div className="h-16 bg-zinc-700 rounded group-hover:bg-zinc-600 group-hover:scale-105 transition-all duration-300"></div>
                          <div className="h-16 bg-zinc-700 rounded group-hover:bg-zinc-600 group-hover:scale-105 transition-all duration-300 delay-75"></div>
                          <div className="h-16 bg-zinc-700 rounded group-hover:bg-zinc-600 group-hover:scale-105 transition-all duration-300 delay-150"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard Image - Light Mode */}
                  <div 
                    className="z-2 border-border/25 aspect-[15/8] relative rounded-2xl border dark:hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
                    data-testid="dashboard-preview-light"
                  >
                    <div className="absolute inset-4 rounded-xl bg-white shadow-inner p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500 group-hover:animate-pulse"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 group-hover:animate-pulse"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 group-hover:animate-pulse"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gradient-to-r from-[#00F0D8] via-[#00F0D8]/80 to-transparent rounded w-3/4 group-hover:from-[#00F0D8] group-hover:via-[#00F0D8] group-hover:to-[#00F0D8]/30 transition-all duration-500"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2 group-hover:bg-gray-300 transition-all duration-300"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3 group-hover:bg-gray-300 transition-all duration-300"></div>
                        <div className="mt-6 grid grid-cols-3 gap-4">
                          <div className="h-16 bg-gray-100 rounded border group-hover:bg-gray-50 group-hover:scale-105 group-hover:shadow-md transition-all duration-300"></div>
                          <div className="h-16 bg-gray-100 rounded border group-hover:bg-gray-50 group-hover:scale-105 group-hover:shadow-md transition-all duration-300 delay-75"></div>
                          <div className="h-16 bg-gray-100 rounded border group-hover:bg-gray-50 group-hover:scale-105 group-hover:shadow-md transition-all duration-300 delay-150"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}