import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint, Repeat } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoPixBg from "@/assets/Home_Logo_Pix_BG_LinaPay_1756226661320.png";
import linaPayGif from "@/assets/LinaPay_1756690950351.gif";

export default function LinaPaySection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: blockRef, isVisible: blockVisible } = useScrollReveal<HTMLDivElement>();
  const [selection, setSelection] = useState<'automatico' | 'biometria'>('automatico');

  const contentData = {
    automatico: {
      title: "Pix Automático",
      description: "Ideal para pagamentos recorrentes com valor variável. O pagamento ocorre automaticamente se estiver dentro dos limites definidos pelo cliente. É o DDA turbinado, com muito mais liberdade."
    },
    biometria: {
      title: "Pix Biometria", 
      description: "Pagamentos são autorizados com biometria, direto no check-out. Traz segurança e conveniência para o e-commerce, impulsionando a adoção do PIX, sem quebras na jornada."
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-6 bg-gray-900"
      data-testid="section-lina-pay"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Lina Pay Block */}
        <div 
          className="relative rounded-3xl shadow-2xl overflow-hidden min-h-[500px] circuit-texture"
          style={{
            background: `var(--lina-dark)`
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

            {/* Dynamic Content Area */}
            <div className="relative mb-8">
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
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative bg-white/8 backdrop-blur-lg border border-cyan-400/30 p-8 rounded-2xl shadow-inner"
                  data-testid={`content-pix-${selection}`}
                >
                  {/* Holographic Spotlight Effect */}
                  <div 
                    className="absolute inset-0 -z-10 spotlight-effect"
                    style={{
                      background: `radial-gradient(ellipse 120% 80% at center, rgba(0, 239, 207, 0.1) 0%, transparent 60%)`
                    }}
                  ></div>
                  <div className="text-center">
                    <h3 className="text-cyan-400 font-lexend font-semibold text-2xl mb-4">
                      {contentData[selection].title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed font-sans max-w-2xl mx-auto">
                      {contentData[selection].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Button 
                className="btn-lina-light"
                data-testid="button-learn-lina-pay"
              >
                <span>Conheça o Lina Pay</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}