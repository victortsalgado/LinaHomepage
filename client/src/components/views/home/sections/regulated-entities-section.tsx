import { Button } from "@/components/ui/button";
import { Shield, Code, Smartphone, BarChart, Headphones, Settings } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function RegulatedEntitiesSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: visualRef, isVisible: visualVisible } = useScrollReveal<HTMLDivElement>();
  
  const [animateBars, setAnimateBars] = useState(false);

  // Features list with corresponding icons
  const features = [
    {
      icon: Shield,
      title: "Gestão de Consentimentos",
      description: "Governança e rastreabilidade total de todo o ciclo."
    },
    {
      icon: Code,
      title: "Plataforma de APIs (Fases 1 a 4)",
      description: "Integração completa e conforme o Bacen."
    },
    {
      icon: Smartphone,
      title: "Jornada Sem Redirecionamento (JSR)",
      description: "Experiência de usuário superior e segura."
    },
    {
      icon: BarChart,
      title: "Monitoração ativa e contínua",
      description: "Indicadores em tempo real e resposta a instabilidades."
    },
    {
      icon: Headphones,
      title: "Consultoria técnica e suporte 24x7",
      description: "Especialistas para homologação e produção."
    }
  ];

  // Generate bars with varying heights for visual representation
  const dataVisualizationBars = [
    { height: 30, delay: 0.1 },
    { height: 45, delay: 0.2 },
    { height: 60, delay: 0.3 },
    { height: 85, delay: 0.4 },
    { height: 75, delay: 0.5 },
    { height: 95, delay: 0.6 },
    { height: 120, delay: 0.7 },
    { height: 110, delay: 0.8 },
    { height: 140, delay: 0.9 },
    { height: 160, delay: 1.0 },
    { height: 150, delay: 1.1 },
    { height: 170, delay: 1.2 }
  ];

  // Start bar animation when visual becomes visible
  useEffect(() => {
    if (visualVisible && !animateBars) {
      setAnimateBars(true);
    }
  }, [visualVisible, animateBars]);

  return (
    <section 
      ref={sectionRef}
      className="py-48 md:py-64 lg:py-80 bg-white/40 text-lina-dark relative overflow-hidden"
      data-testid="section-regulated-entities"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full blur-3xl" style={{ background: 'var(--lina-cyan)' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full blur-2xl" style={{ background: 'var(--lina-cyan)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full blur-3xl opacity-3" style={{ background: 'var(--lina-cyan)' }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column (Left) */}
          <div 
            ref={contentRef}
            className={`space-y-8 ${contentVisible ? 'scroll-reveal-slide-right' : 'scroll-reveal-hidden'}`}
          >
            {/* Main Title - Two Lines */}
            <div className="text-left">
              <h2 
                className="text-4xl lg:text-5xl font-bold leading-tight font-lexend text-lina-dark"
                data-testid="heading-regulated-entities-title"
              >
                Infraestrutura & Conectividade
              </h2>
              <h3 
                className="text-2xl lg:text-3xl font-medium leading-tight font-lexend text-lina-dark mt-2"
                data-testid="subheading-regulated-entities-subtitle"
              >
                Soluções de conformidade para entidades reguladas
              </h3>
            </div>
            
            {/* Content Sections */}
            <div className="space-y-6">
              {/* First Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-left"
              >
                <p 
                  className="text-lg text-gray-700 leading-relaxed mb-4"
                  data-testid="text-regulated-entities-tech"
                >
                  Tecnologia 100% proprietária com foco em performance e conformidade regulatória.
                </p>
                <p 
                  className="text-lg text-gray-700 leading-relaxed"
                  data-testid="text-regulated-entities-certification"
                >
                  Certificamos e homologamos mais de 50 instituições financeiras no Open Finance Brasil, com módulos e serviços sob medida para:
                </p>
              </motion.div>
              
              {/* Second Subtitle - Bullet Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contentVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-left"
              >
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#2ec9bc] mr-3 text-xl font-bold">•</span>
                    <span>Transmissores e Receptores de Dados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2ec9bc] mr-3 text-xl font-bold">•</span>
                    <span>Detentores de Contas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2ec9bc] mr-3 text-xl font-bold">•</span>
                    <span>Iniciadores de Pagamentos - ITP</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            {/* CTA Button */}
            <Button 
              variant="light-bg"
              className="px-8 font-semibold"
              data-testid="button-learn-more"
            >
              Saiba mais
            </Button>
          </div>
          
          {/* Visual Column (Right) - Animated Data Visualization */}
          <div 
            ref={visualRef}
            className={`relative hidden lg:block ${visualVisible ? 'scroll-reveal-slide-left' : 'scroll-reveal-hidden'}`}
            data-testid="visualization-data-growth"
          >
            <div className="relative h-80 flex items-end justify-center space-x-2 p-6">
              {/* Background grid for tech feel */}
              <div className="absolute inset-0 opacity-15">
                <div className="h-full w-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 102, 102, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 102, 102, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* Animated bars representing growth from sandbox to scale */}
              {dataVisualizationBars.map((bar, index) => (
                <motion.div
                  key={index}
                  className="relative flex-1 max-w-4 rounded-t-lg border border-gray-300"
                  style={{ 
                    background: index % 3 === 0 ? '#006666' : 
                               index % 3 === 1 ? '#008080' : 
                               '#0a5d5d',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                  initial={{ height: 0, opacity: 0.7 }}
                  animate={animateBars ? { 
                    height: bar.height, 
                    opacity: 1 
                  } : {}}
                  transition={{ 
                    delay: bar.delay, 
                    duration: 0.8, 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  data-testid={`bar-growth-${index}`}
                >
                  {/* Subtle shadow effect for highlighted bars */}
                  {index % 3 === 0 && (
                    <motion.div
                      className="absolute inset-0 rounded-t-lg"
                      style={{ 
                        background: '#004d4d',
                        boxShadow: '0 4px 12px rgba(0, 102, 102, 0.3)'
                      }}
                      initial={{ opacity: 0 }}
                      animate={animateBars ? { opacity: 0.8 } : {}}
                      transition={{ delay: bar.delay + 0.5, duration: 0.5 }}
                    />
                  )}
                </motion.div>
              ))}
              
              {/* Growth arrow overlay */}
              <motion.div
                className="absolute top-4 right-4 flex items-center space-x-2"
                initial={{ opacity: 0, y: -10 }}
                animate={animateBars ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <div className="text-sm font-medium text-teal-700">
                  Do Sandbox à Escala
                </div>
                <motion.div
                  animate={animateBars ? { 
                    y: [0, -5, 0],
                    opacity: [0.7, 1, 0.7]
                  } : {}}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    delay: 2
                  }}
                  className="text-teal-700"
                >
                  ↗
                </motion.div>
              </motion.div>
            </div>
            
            {/* Tech labels for context */}
            <div className="absolute -bottom-3 left-0 right-0 flex text-xs text-gray-600">
              <span className="ml-44">Sandbox</span>
              <span className="flex-1 text-center">Produção</span>
              <span className="mr-44">Escala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}