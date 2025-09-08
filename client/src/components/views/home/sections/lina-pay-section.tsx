import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { ArrowRight, Repeat, Fingerprint, CreditCard, Zap, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";
import linaPay from '@assets/linapay mockup_1757211256291.gif';

export default function LinaPaySection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: blockRef, isVisible: blockVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: listRef, isVisible: listVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: phoneRef, isVisible: phoneVisible } = useScrollReveal<HTMLDivElement>();

  // PIX features data based on the provided image
  const pixFeatures = [
    {
      id: 'automatico',
      icon: <Repeat size={24} className="text-white" />,
      title: "Pix Automático",
      description: "Automatize cobranças recorrentes e reduza custos e inadimplência"
    },
    {
      id: 'inteligente',
      icon: <Zap size={24} className="text-white" />,
      title: "Pix Inteligente", 
      description: "Simplifique o cashin de contas digitais e impulsione a ativação!"
    },
    {
      id: 'id',
      icon: <Fingerprint size={24} className="text-white" />,
      title: "Pix ID",
      description: "Dê adeus ao QR Code e ao Copia&Cola. Chegou a vez do Pix Biometria!"
    },
    {
      id: 'aproximacao',
      icon: <CreditCard size={24} className="text-white" />,
      title: "Pix Aproximação",
      description: "Vincule contas e habilite o Pix por aproximação na carteira digital!"
    },
    {
      id: 'manager',
      icon: <Shield size={24} className="text-white" />,
      title: "Pix Manager",
      description: "EXCLUSIVO: gerencie e controle cobranças com a flexibilidade do Open!"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 min-h-screen flex items-center"
      style={{ backgroundColor: '#D0F5F2' }}
      data-testid="section-lina-pay"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        {/* Lina Pay Block */}
        <div 
          className="relative rounded-3xl shadow-2xl overflow-hidden min-h-[500px]"
          style={{
            backgroundColor: '#009391'
          }}
        >
          <div 
            ref={blockRef}
            className={`p-16 lg:p-24 relative ${blockVisible ? 'scroll-reveal-fade-in' : 'scroll-reveal-hidden'}`}
          >
            
            {/* Title */}
            <div className="mb-12">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-lexend font-bold leading-tight text-gray-800 mb-6 max-w-lg"
                data-testid="heading-lina-pay-title"
              >
                Pix no checkout sem QR Code: <br />isso é <span className="bg-gradient-to-r from-[#00857F] to-[#2EC9BC] bg-clip-text text-transparent">Open Finance!</span>
              </h2>
            </div>
            
            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              
              {/* Left Side - PIX Features */}
              <div 
                ref={listRef}
                className={`space-y-6 ${listVisible ? 'scroll-reveal-slide-right' : 'scroll-reveal-hidden'}`}
              >
                {pixFeatures.map((feature, index) => (
                  <motion.div 
                    key={feature.id}
                    className="flex items-start space-x-4 bg-white/30 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={listVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    whileHover={{ y: -2 }}
                    data-testid={`feature-${feature.id}`}
                  >
                    <div className="w-10 h-10 bg-[#2ec9bc] rounded-lg flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-lina-dark text-[20px]">
                        {feature.title}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Saiba Mais Button */}
                <div className="pt-4">
                  <Button 
                    variant="light-bg"
                    className="px-6 py-2 font-normal"
                    data-testid="button-saiba-mais"
                  >
                    Saiba mais
                  </Button>
                </div>
              </div>
              
              {/* Right Side - Phone and Box */}
              <div 
                ref={phoneRef}
                className={`flex flex-col order-2 lg:order-none ${phoneVisible ? 'scroll-reveal-slide-left' : 'scroll-reveal-hidden'}`}
              >
                
                {/* Phone Container with Background */}
                <div 
                  className="relative rounded-3xl py-16 px-8 shadow-xl w-full max-w-lg mx-auto flex-1 flex flex-col justify-center min-h-[600px] mt-[-69px] mb-[-69px] ml-[55.0156px] mr-[55.0156px] pt-[103px] pb-[103px]"
                  style={{ backgroundColor: '#009391' }}
                >
                  {/* LinaPay GIF/Animation */}
                  <div className="flex justify-center mb-6">
                    <img 
                      src={linaPay}
                      alt="LinaPay PIX por Biometria mockup"
                      className="w-64 h-[500px] rounded-[2.5rem] shadow-2xl object-cover"
                      data-testid="img-linapay-mockup"
                    />
                  </div>
                  
                  {/* Description Text - Inside the box, below phone */}
                  <div className="text-center px-4">
                    <p className="text-white text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      A solução que transforma a experiência do cliente e traz inúmeras vantagens para e-commerces, marketplaces, plataformas de pagamento e provedores de serviços.
                    </p>
                  </div>
                </div>
                
              </div>
              
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}