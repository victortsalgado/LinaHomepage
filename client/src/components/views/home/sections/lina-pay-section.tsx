import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint, Repeat, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import linaPayGif from "@/assets/LinaPay_1756690950351.gif";

export default function LinaPaySection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: blockRef, isVisible: blockVisible } = useScrollReveal<HTMLDivElement>();
  const [selection, setSelection] = useState<'automatico' | 'biometria'>('automatico');
  const [hasAutoToggled, setHasAutoToggled] = useState(false);

  // Animation variants for elegant cascading effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.0,
        staggerChildren: 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Auto-toggle when section becomes visible
  useEffect(() => {
    if (sectionVisible && !hasAutoToggled) {
      const timer = setTimeout(() => {
        setSelection('biometria');
        setHasAutoToggled(true);
        
        // Toggle back to automatico after showing biometria
        setTimeout(() => {
          setSelection('automatico');
        }, 2500);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [sectionVisible, hasAutoToggled]);

  const contentData = [
    {
      id: 'automatico',
      title: "Cobranças Inteligentes, Receita Previsível",
      subtitle: "O DDA turbinado, com muito mais liberdade.",
      benefits: [
        "Reduz a inadimplência em cobranças recorrentes.",
        "Garante o fluxo de caixa com pagamentos automáticos.",
        "Oferece mais liberdade que o débito automático tradicional."
      ],
      imageSrc: null,
      imageAlt: "PIX Automático - Pagamentos recorrentes automatizados"
    },
    {
      id: 'biometria',
      title: "Checkout em 1 Toque, Sem Fricção",
      subtitle: "Aumente sua conversão no e-commerce com pagamentos por biometria.",
      benefits: [
        "Elimina a necessidade de senhas e redirecionamentos para outros apps.",
        "Aumenta a conversão com uma experiência de checkout sem atritos.",
        "Garante segurança máxima com autenticação biométrica certificada."
      ],
      imageSrc: null,
      imageAlt: "PIX Biometria - Autenticação biométrica para pagamentos"
    }
  ];

  const activeContent = contentData.find(item => item.id === selection) || contentData[0];

  return (
    <section 
      ref={sectionRef}
      className="py-48 md:py-64 lg:py-80 min-h-screen flex items-center"
      style={{ backgroundColor: '#D0F5F2' }}
      data-testid="section-lina-pay"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        {/* Lina Pay Block */}
        <div 
          className="relative rounded-3xl shadow-2xl overflow-hidden min-h-[500px]"
          style={{
            backgroundColor: 'rgba(56, 204, 191, 0.2)'
          }}
        >
          <div 
            ref={blockRef}
            className={`p-8 lg:p-12 relative ${blockVisible ? 'scroll-reveal-fade-in' : 'scroll-reveal-hidden'}`}
          >
            
            

            {/* Title and Description */}
            <div className="mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight font-lexend title-glow"
                data-testid="heading-lina-pay-title"
              >
                Transforme o PIX em motor de vendas, lucratividade e fidelização.
              </h2>
              <p 
                className="text-gray-800 text-lg leading-relaxed font-sans"
                data-testid="text-lina-pay-description"
              >
                Conheça a nova funcionalidade que automatiza pagamentos recorrentes, incluindo valores variáveis, <span className="font-semibold text-black">trazendo benefícios diretos para empresas e consumidores.</span>
              </p>
            </div>
            
            {/* Toggle Selector */}
            <div className="flex justify-center mb-8">
              <label className="switch-button" htmlFor="switch" data-testid="switch-pix-selector">
                <div className="switch-outer">
                  <input 
                    id="switch"
                    type="checkbox" 
                    checked={selection === 'biometria'}
                    onChange={(e) => setSelection(e.target.checked ? 'biometria' : 'automatico')}
                  />
                  <div className="button">
                    <span className="button-toggle"></span>
                    <span className="button-indicator">
                      {selection === 'automatico' ? (
                        <Fingerprint size={14} className="text-cyan-400" />
                      ) : (
                        <Repeat size={14} className="text-cyan-400" />
                      )}
                    </span>
                  </div>
                </div>
              </label>
            </div>

            {/* Interactive Stage - Dynamic Content Area */}
            <div className="relative mb-8 min-h-[300px] lg:min-h-[400px]">
              {/* Glow Effect Behind Content */}
              <div 
                className="absolute inset-0 -z-10"
                style={{
                  background: `radial-gradient(ellipse at center, rgba(0, 239, 207, 0.1) 0%, transparent 70%)`
                }}
              ></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selection}
                  className="relative w-full h-full"
                  data-testid={`stage-pix-${selection}`}
                >
                  {/* Fixed Left-Right Layout */}
                  <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
                    
                    {/* Smartphone Mockup - FIXED LEFT */}
                    <div className="relative z-20 flex justify-center lg:justify-start flex-shrink-0">
                      <div className="smartphone-mockup">
                        {/* Smartphone Frame */}
                        <div className="w-48 h-96 lg:w-56 lg:h-[28rem] bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[2.5rem] shadow-2xl border-4 border-gray-700 relative overflow-hidden">
                          {/* Dynamic Screen with Color Transition */}
                          <div className={`absolute inset-3 rounded-[2rem] border border-gray-600 transition-all duration-1000 ease-out ${
                            selection === 'automatico' ? 'bg-white' : 'bg-black'
                          }`}>
                            {/* Notch */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-black rounded-full"></div>
                            {/* Dynamic Screen Content */}
                            <div className="flex items-center justify-center h-full">
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={selection}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
                                  className="text-center"
                                >
                                  {selection === 'automatico' ? (
                                    <Repeat size={32} className="text-black mx-auto mb-3" />
                                  ) : (
                                    <Fingerprint size={32} className="text-white mx-auto mb-3" />
                                  )}
                                  <p className={`text-sm font-medium px-4 ${
                                    selection === 'automatico' ? 'text-black' : 'text-white'
                                  }`}>
                                    {selection === 'automatico' ? 'PIX Automático' : 'PIX Biometria'}
                                  </p>
                                </motion.div>
                              </AnimatePresence>
                            </div>
                          </div>
                          {/* Camera */}
                          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Text Panel - FIXED RIGHT */}
                    <div className="relative z-10 flex-1">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`text-${selection}`}
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="backdrop-blur-xl bg-white/8 border border-cyan-400/30 p-6 lg:p-8 rounded-2xl shadow-2xl h-96 lg:h-[28rem] flex flex-col justify-start"
                        >
                          <div className="pt-4 lg:pt-8">
                            <motion.h3 
                              variants={itemVariants}
                              className="text-cyan-600 font-lexend font-semibold text-xl lg:text-2xl mb-3"
                            >
                              {activeContent.title}
                            </motion.h3>
                            <motion.p 
                              variants={itemVariants}
                              className="text-gray-700 text-base lg:text-lg mb-6 font-sans italic"
                            >
                              {activeContent.subtitle}
                            </motion.p>
                            <div>
                              {activeContent.benefits.map((benefit, index) => (
                                <motion.li 
                                  key={index} 
                                  variants={itemVariants}
                                  className="flex items-start gap-3 mb-4"
                                >
                                  <CheckCircle2 size={20} className="text-cyan-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-800 text-base lg:text-lg leading-relaxed font-sans">
                                    {benefit}
                                  </span>
                                </motion.li>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Button 
                variant="dark-bg"
                className="px-8 py-3 flex items-center gap-2"
                data-testid="button-learn-lina-pay"
              >
                Conheça o Lina Pay
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}