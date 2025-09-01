import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoPixBg from "@/assets/Home_Logo_Pix_BG_LinaPay_1756226661320.png";
import linaPayGif from "@/assets/LinaPay_1756690950351.gif";

type FeatureType = 'automatico' | 'biometria';

export default function LinaPaySection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: blockRef, isVisible: blockVisible } = useScrollReveal<HTMLDivElement>();
  const [activeFeature, setActiveFeature] = useState<FeatureType>('automatico');

  const features = {
    automatico: {
      title: 'Pix Automático',
      description: 'Ideal para pagamentos recorrentes com valor variável. O pagamento ocorre automaticamente se estiver dentro dos limites definidos pelo cliente. É o DDA turbinado, com muito mais liberdade.',
      icon: Zap,
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    biometria: {
      title: 'Pix Biometria',
      description: 'Pagamentos são autorizados com biometria, direto no check-out. Traz segurança e conveniência para o e-commerce, impulsionando a adoção do PIX, sem quebras na jornada.',
      icon: Smartphone,
      gradient: 'from-green-500/20 to-emerald-500/20'
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gray-900"
      data-testid="section-lina-pay"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Digital Stage */}
        <div 
          className="relative rounded-3xl shadow-2xl overflow-hidden min-h-[600px] p-12 lg:p-16"
          style={{
            background: `var(--lina-dark)`,
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(0, 239, 207, 0.1) 0%, transparent 40%), 
                              radial-gradient(circle at 80% 80%, rgba(0, 239, 207, 0.05) 0%, transparent 40%),
                              repeating-radial-gradient(circle at 50% 50%, transparent 0px, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px)`
          }}
        >
          <div 
            ref={blockRef}
            className={`relative ${blockVisible ? 'scroll-reveal-fade-in' : 'scroll-reveal-hidden'}`}
          >
            {/* PIX LINA Pay Logo - Top Right */}
            <div className="absolute top-0 right-0">
              <img 
                src={logoPixBg} 
                alt="PIX LINA Pay" 
                className="h-16 w-auto lg:h-20 opacity-90"
                data-testid="img-pix-lina-pay-logo"
              />
            </div>

            {/* Fixed Content - Title and Description */}
            <div className="text-center mb-12">
              <h2 
                className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight font-lexend"
                data-testid="heading-lina-pay-title"
              >
                Transforme o PIX em motor de vendas, lucratividade e fidelização.
              </h2>
              <p 
                className="text-gray-300 text-lg lg:text-xl leading-relaxed font-sans max-w-4xl mx-auto"
                data-testid="text-lina-pay-description"
              >
                Conheça a nova funcionalidade que automatiza pagamentos recorrentes, incluindo valores variáveis, <span className="font-semibold text-white">trazendo benefícios diretos para empresas e consumidores.</span>
              </p>
            </div>

            {/* Interactive Toggle Buttons */}
            <div className="flex justify-center mb-12">
              <div className="flex bg-gray-800/50 rounded-xl p-2 backdrop-blur-sm">
                <button
                  onClick={() => setActiveFeature('automatico')}
                  className={`px-8 py-4 rounded-lg font-lexend font-semibold transition-all duration-300 ${
                    activeFeature === 'automatico'
                      ? 'bg-cyan-400 text-gray-900 shadow-lg'
                      : 'border border-gray-700 text-gray-400 hover:text-gray-300 hover:border-gray-600'
                  }`}
                  data-testid="button-pix-automatico"
                >
                  Pix Automático
                </button>
                <button
                  onClick={() => setActiveFeature('biometria')}
                  className={`ml-2 px-8 py-4 rounded-lg font-lexend font-semibold transition-all duration-300 ${
                    activeFeature === 'biometria'
                      ? 'bg-cyan-400 text-gray-900 shadow-lg'
                      : 'border border-gray-700 text-gray-400 hover:text-gray-300 hover:border-gray-600'
                  }`}
                  data-testid="button-pix-biometria"
                >
                  Pix Biometria
                </button>
              </div>
            </div>
            {/* Dynamic Content Area - The Illuminated Stage */}
            <div className="relative min-h-[300px] mb-12">
              {/* Spotlight Effect */}
              <div 
                className={`absolute inset-0 -z-10 transition-all duration-500 opacity-30`}
                style={{
                  background: `radial-gradient(ellipse at center, ${features[activeFeature].gradient.replace('/', '/').replace('20', '10')} 0%, transparent 60%)`
                }}
              ></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Visual Area */}
                  <div className="flex justify-center">
                    <div className="relative">
                      {/* Feature Icon/Visual */}
                      <div className={`w-48 h-48 lg:w-64 lg:h-64 rounded-3xl bg-gradient-to-br ${features[activeFeature].gradient} border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm`}>
                        {(() => {
                          const IconComponent = features[activeFeature].icon;
                          return <IconComponent size={80} className="text-cyan-400" />;
                        })()}
                      </div>
                      
                      {/* Animated GIF Overlay */}
                      <div className="absolute -top-6 -right-6">
                        <div className="w-20 h-20">
                          <img 
                            src={linaPayGif} 
                            alt="LinaPay Animation" 
                            className="w-full h-full object-cover rounded-xl"
                            data-testid="img-lina-pay-gif"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-center lg:text-left">
                    <h3 
                      className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-6 font-lexend"
                      data-testid={`heading-${activeFeature}-title`}
                    >
                      {features[activeFeature].title}
                    </h3>
                    <p 
                      className="text-gray-300 text-lg leading-relaxed font-sans"
                      data-testid={`text-${activeFeature}-description`}
                    >
                      {features[activeFeature].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Button */}
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