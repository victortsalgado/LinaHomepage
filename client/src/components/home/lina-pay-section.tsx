import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint, Repeat } from "lucide-react";
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
      title: "Pix Automático",
      description: "Ideal para pagamentos recorrentes com valor variável. O pagamento ocorre automaticamente se estiver dentro dos limites definidos pelo cliente. É o DDA turbinado, com muito mais liberdade.",
      imageSrc: null,
      imageAlt: "PIX Automático - Pagamentos recorrentes automatizados"
    },
    {
      id: 'biometria',
      title: "Pix Biometria",
      description: "Pagamentos são autorizados com biometria, direto no check-out. Traz segurança e conveniência para o e-commerce, impulsionando a adoção do PIX, sem quebras na jornada.",
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
                  {/* Coordinated Animation Layout */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
                    
                    {/* PIX Automático Layout */}
                    {selection === 'automatico' && (
                      <>
                        {/* Image slides in from LEFT */}
                        <motion.div
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -100, opacity: 0 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="flex-1 flex justify-center lg:justify-start"
                        >
                          <div className="w-full max-w-xs lg:max-w-sm">
                            {activeContent.imageSrc ? (
                              <img 
                                src={activeContent.imageSrc}
                                alt={activeContent.imageAlt}
                                className="w-full h-auto rounded-xl shadow-lg border border-cyan-400/20"
                                data-testid={`img-pix-${selection}`}
                              />
                            ) : (
                              <div 
                                className="w-full aspect-square bg-gradient-to-br from-cyan-400/10 to-cyan-600/5 rounded-xl border border-cyan-400/30 flex items-center justify-center"
                                data-testid={`placeholder-pix-${selection}`}
                              >
                                <div className="text-center">
                                  <Repeat size={48} className="text-cyan-400/60 mx-auto mb-2" />
                                  <p className="text-cyan-400/60 text-sm font-medium">
                                    {activeContent.title}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                        
                        {/* Text Panel slides in from RIGHT and overlaps */}
                        <motion.div
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 100, opacity: 0 }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                          className="flex-1 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2 lg:z-10"
                        >
                          <div className="backdrop-blur-lg bg-white/5 border border-cyan-400/20 p-6 lg:p-8 rounded-2xl shadow-2xl">
                            <h3 className="text-cyan-400 font-lexend font-semibold text-2xl lg:text-3xl mb-4">
                              {activeContent.title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-sans">
                              {activeContent.description}
                            </p>
                          </div>
                        </motion.div>
                      </>
                    )}
                    
                    {/* PIX Biometria Layout */}
                    {selection === 'biometria' && (
                      <>
                        {/* Text Panel slides in from LEFT and overlaps */}
                        <motion.div
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -100, opacity: 0 }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                          className="flex-1 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2 lg:z-10"
                        >
                          <div className="backdrop-blur-lg bg-white/5 border border-cyan-400/20 p-6 lg:p-8 rounded-2xl shadow-2xl">
                            <h3 className="text-cyan-400 font-lexend font-semibold text-2xl lg:text-3xl mb-4">
                              {activeContent.title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-sans">
                              {activeContent.description}
                            </p>
                          </div>
                        </motion.div>
                        
                        {/* Image slides in from RIGHT */}
                        <motion.div
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 100, opacity: 0 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="flex-1 flex justify-center lg:justify-end"
                        >
                          <div className="w-full max-w-xs lg:max-w-sm">
                            {activeContent.imageSrc ? (
                              <img 
                                src={activeContent.imageSrc}
                                alt={activeContent.imageAlt}
                                className="w-full h-auto rounded-xl shadow-lg border border-cyan-400/20"
                                data-testid={`img-pix-${selection}`}
                              />
                            ) : (
                              <div 
                                className="w-full aspect-square bg-gradient-to-br from-cyan-400/10 to-cyan-600/5 rounded-xl border border-cyan-400/30 flex items-center justify-center"
                                data-testid={`placeholder-pix-${selection}`}
                              >
                                <div className="text-center">
                                  <Fingerprint size={48} className="text-cyan-400/60 mx-auto mb-2" />
                                  <p className="text-cyan-400/60 text-sm font-medium">
                                    {activeContent.title}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </>
                    )}
                    
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