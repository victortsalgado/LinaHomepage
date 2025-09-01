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
      style={{ background: 'var(--lina-dark)' }}
      className="py-20 text-white relative overflow-hidden circuit-texture"
      data-testid="section-regulated-entities"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full blur-3xl" style={{ background: 'var(--lina-cyan)' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full blur-2xl" style={{ background: 'var(--lina-cyan)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full blur-3xl opacity-5" style={{ background: 'var(--lina-cyan)' }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column (Left) */}
          <div 
            ref={contentRef}
            className={`space-y-8 ${contentVisible ? 'scroll-reveal-slide-right' : 'scroll-reveal-hidden'}`}
          >
            {/* Main Title */}
            <h2 
              className="text-4xl lg:text-5xl font-bold leading-tight font-lexend title-glow"
              data-testid="heading-regulated-entities-title"
            >
              Open Finance e Insurance, do sandbox à escala.
            </h2>
            
            {/* Description */}
            <p 
              className="text-xl text-gray-300 leading-relaxed"
              data-testid="text-regulated-entities-description"
            >
              A única infraestrutura no Brasil capaz de levar sua operação Open do sandbox à escala, com segurança e conformidade inigualáveis.
            </p>
            
            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={contentVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  data-testid={`card-regulated-feature-${index}`}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--lina-cyan)' }}
                  >
                    <feature.icon 
                      className="text-lina-dark" 
                      size={20} 
                      style={{ color: 'var(--lina-dark)' }}
                    />
                  </div>
                  <div>
                    <h4 
                      className="font-semibold mb-1 text-white"
                      data-testid={`text-regulated-feature-title-${index}`}
                    >
                      {feature.title}
                    </h4>
                    <p 
                      className="text-gray-300 text-sm"
                      data-testid={`text-regulated-feature-description-${index}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button 
              className="text-lina-dark px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              style={{ background: 'var(--lina-cyan)' }}
              data-testid="button-learn-more"
            >
              Saiba mais
            </Button>
          </div>
          
          {/* Visual Column (Right) - Animated Data Visualization */}
          <div 
            ref={visualRef}
            className={`relative ${visualVisible ? 'scroll-reveal-slide-left' : 'scroll-reveal-hidden'}`}
            data-testid="visualization-data-growth"
          >
            <div className="relative h-80 flex items-end justify-center space-x-2 p-6">
              {/* Background grid for tech feel */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 239, 207, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 239, 207, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              {/* Animated bars representing growth from sandbox to scale */}
              {dataVisualizationBars.map((bar, index) => (
                <motion.div
                  key={index}
                  className="relative flex-1 max-w-4 rounded-t-lg"
                  style={{ 
                    background: index % 3 === 0 ? 'var(--lina-cyan)' : 
                               index % 3 === 1 ? 'rgba(0, 239, 207, 0.7)' : 
                               'rgba(0, 239, 207, 0.4)'
                  }}
                  initial={{ height: 0, opacity: 0.6 }}
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
                  {/* Subtle glow effect for highlighted bars */}
                  {index % 3 === 0 && (
                    <motion.div
                      className="absolute inset-0 rounded-t-lg blur-sm"
                      style={{ background: 'var(--lina-cyan)' }}
                      initial={{ opacity: 0 }}
                      animate={animateBars ? { opacity: 0.3 } : {}}
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
                <div className="text-sm font-medium" style={{ color: 'var(--lina-cyan)' }}>
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
                  style={{ color: 'var(--lina-cyan)' }}
                >
                  ↗
                </motion.div>
              </motion.div>
            </div>
            
            {/* Tech labels for context */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 px-6">
              <span>Sandbox</span>
              <span>Produção</span>
              <span>Escala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}