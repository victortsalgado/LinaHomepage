import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint, Repeat, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoPixBg from "@/assets/Home_Logo_Pix_BG_LinaPay_1756226661320.png";
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
        duration: 0.5,
        staggerChildren: 0.1
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
      className="py-6 bg-gray-900"
      data-testid="section-lina-pay"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Lina Pay Block */}
        <div 
          className="relative rounded-3xl shadow-2xl overflow-hidden min-h-[500px]"
          style={{
            background: `var(--lina-dark)`,
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(0, 239, 207, 0.1) 0%, transparent 40%), 
                              radial-gradient(circle at 80% 80%, rgba(0, 239, 207, 0.05) 0%, transparent 40%),
                              repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px)`
          }}
        >
          <div 
            ref={blockRef}
            className={`p-8 lg:p-12 relative ${blockVisible ? 'scroll-reveal-fade-in' : 'scroll-reveal-hidden'}`}
          >
            {/* Decorative Icons */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-cyan-500/20 rounded-xl border border-cyan-400/30"></div>
            <div className="absolute top-6 right-20 lg:right-32 w-8 h-8 bg-gradient-to-br from-cyan-400/15 to-cyan-500/15 rounded-lg border border-cyan-400/20"></div>
            {/* PIX LINA Pay Logo - Top Right */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
              <img 
                src={logoPixBg} 
                alt="PIX LINA Pay" 
                className="h-16 w-auto lg:h-20 opacity-90"
                data-testid="img-pix-lina-pay-logo"
              />
            </div>
            {/* Icon */}
            <div className="mb-6">
              <div className="w-28 h-28 lg:w-44 lg:h-44">
                <img 
                  src={linaPayGif} 
                  alt="LinaPay Icon" 
                  className="w-full h-full object-cover rounded-xl pl-[0px] pr-[0px] ml-[-41px] mr-[-41px] mt-[-43px] mb-[-43px]"
                  data-testid="img-lina-pay-icon"
                />
              </div>
            </div>

            {/* Title and Description */}
            <div className="mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight font-lexend title-glow"
                data-testid="heading-lina-pay-title"
              >
                Transforme o PIX em motor de vendas, lucratividade e fidelização.
              </h2>
              <p 
                className="text-gray-200 text-lg leading-relaxed font-sans"
                data-testid="text-lina-pay-description"
              >
                Conheça a nova funcionalidade que automatiza pagamentos recorrentes, incluindo valores variáveis, <span className="font-semibold text-white">trazendo benefícios diretos para empresas e consumidores.</span>
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
                          <div className={`absolute inset-3 rounded-[2rem] border border-gray-600 transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                            selection === 'automatico' ? 'bg-white' : 'bg-gray-900'
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
                                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
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
                              className="text-cyan-400 font-lexend font-semibold text-xl lg:text-2xl mb-3"
                            >
                              {activeContent.title}
                            </motion.h3>
                            <motion.p 
                              variants={itemVariants}
                              className="text-gray-300 text-base lg:text-lg mb-6 font-sans italic"
                            >
                              {activeContent.subtitle}
                            </motion.p>
                            <motion.ul 
                              variants={itemVariants}
                              className="space-y-4"
                            >
                              {activeContent.benefits.map((benefit, index) => (
                                <motion.li 
                                  key={index} 
                                  variants={itemVariants}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle2 size={20} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-200 text-base lg:text-lg leading-relaxed font-sans">
                                    {benefit}
                                  </span>
                                </motion.li>
                              ))}
                            </motion.ul>
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
                className="border-2 border-cyan-400 text-cyan-400 bg-transparent px-8 py-3 rounded-full font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200 flex items-center gap-2"
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