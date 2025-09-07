import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { ArrowRight, Repeat, Fingerprint, CreditCard, Zap, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function LinaPaySection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: blockRef, isVisible: blockVisible } = useScrollReveal<HTMLDivElement>();

  // PIX features data based on the provided image
  const pixFeatures = [
    {
      id: 'automatico',
      icon: <Repeat size={24} className="text-[#00F4E2]" />,
      title: "Pix Automático",
      description: "Automatize cobranças recorrentes e reduza custos e inadimplência"
    },
    {
      id: 'inteligente',
      icon: <Zap size={24} className="text-[#00F4E2]" />,
      title: "Pix Inteligente", 
      description: "Simplifique o cashin de contas digitais e impulsione a ativação!"
    },
    {
      id: 'id',
      icon: <Fingerprint size={24} className="text-[#00F4E2]" />,
      title: "Pix ID",
      description: "Dê adeus ao QR Code e ao Copia&Cola. Chegou a vez do Pix Biometria!"
    },
    {
      id: 'aproximacao',
      icon: <CreditCard size={24} className="text-[#00F4E2]" />,
      title: "Pix Aproximação",
      description: "Vincule contas e habilite o Pix por aproximação na carteira digital!"
    },
    {
      id: 'manager',
      icon: <Shield size={24} className="text-[#00F4E2]" />,
      title: "Pix Manager",
      description: "EXCLUSIVO: gerencie e controle cobranças com a flexibilidade do Open!"
    }
  ];

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
            
            {/* Title */}
            <div className="mb-12">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-lexend font-bold leading-tight text-gray-800 mb-6"
                data-testid="heading-lina-pay-title"
              >
                Pix no checkout sem QR Code: <br />isso é <span className="bg-gradient-to-r from-[#00857F] to-[#2EC9BC] bg-clip-text text-transparent">Open Finance!</span>
              </h2>
            </div>
            
            {/* Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              
              {/* Left Side - PIX Features */}
              <div className="space-y-6">
                {pixFeatures.map((feature, index) => (
                  <div 
                    key={feature.id}
                    className="flex items-start gap-4 py-3"
                    data-testid={`feature-${feature.id}`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00F4E2' }}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-1" style={{ fontFamily: 'Lexend, sans-serif' }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
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
              <div className="flex flex-col order-2 lg:order-none">
                
                {/* Phone Container with Green Background - Full Height */}
                <div 
                  className="relative rounded-3xl p-8 shadow-xl w-full max-w-lg mx-auto flex-1 flex flex-col justify-center"
                  style={{ backgroundColor: '#00CDC2' }}
                >
                  {/* LINA PAY Label */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 mb-6 text-center">
                    <span className="font-bold text-gray-800 text-lg" style={{ fontFamily: 'Lexend, sans-serif' }}>LINA PAY</span>
                  </div>
                  
                  {/* Smartphone Mockup */}
                  <div className="flex justify-center mb-6">
                    <div className="w-48 h-96 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[2.5rem] shadow-2xl border-4 border-gray-700 relative overflow-hidden">
                      {/* Screen */}
                      <div className="absolute inset-3 rounded-[2rem] border border-gray-600 bg-white">
                        {/* Notch */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-black rounded-full"></div>
                        
                        {/* Screen Content */}
                        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                          <div className="bg-gray-100 rounded-xl p-4 mb-4 w-full">
                            <div className="text-xs text-gray-600 mb-2">CHECKOUT</div>
                            <div className="text-sm font-medium text-gray-800 mb-2">Item do produto</div>
                            <div className="text-lg font-bold text-gray-800">R$ 149,90</div>
                          </div>
                          
                          {/* Biometric Circle */}
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                          </div>
                          
                          {/* Action Text */}
                          <div className="text-xs text-gray-600 mb-2">Use a face ou digital</div>
                          <div className="text-xs text-gray-600 mb-4">para realizar?</div>
                          
                          {/* Button */}
                          <div className="bg-blue-500 text-white text-xs px-4 py-2 rounded-lg">
                            Confirmar
                          </div>
                          <div className="text-xs text-blue-500 mt-2">Que legal! Já realizado!</div>
                        </div>
                      </div>
                      
                      {/* Camera */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Description Text - Inside the green box, below phone */}
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