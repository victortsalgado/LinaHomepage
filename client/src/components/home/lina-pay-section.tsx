import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import logoPixBg from "@/assets/Home_Logo_Pix_BG_LinaPay_1756226661320.png";
import linaPayGif from "@/assets/LinaPay_1756690950351.gif";

export default function LinaPaySection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: blockRef, isVisible: blockVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="py-6 bg-white"
      data-testid="section-lina-pay"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Lina Pay Block */}
        <div 
          className="gradient-dark rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm min-h-[500px]"
        >
          <div 
            ref={blockRef}
            className={`p-8 lg:p-12 relative ${blockVisible ? 'scroll-reveal-fade-in' : 'scroll-reveal-hidden'}`}
          >
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
                className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight font-lexend"
                data-testid="heading-lina-pay-title"
              >
                Transforme o PIX em motor de vendas, lucratividade e fidelização.
              </h2>
              <p 
                className="text-white/80 text-lg leading-relaxed font-sans"
                data-testid="text-lina-pay-description"
              >
                Conheça a nova funcionalidade que automatiza pagamentos recorrentes, incluindo valores variáveis, <span className="font-semibold">trazendo benefícios diretos para empresas e consumidores.</span>
              </p>
            </div>
            
            {/* Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* PIX Automático Card */}
              <div 
                className="bg-emerald-700/40 backdrop-blur-sm border border-emerald-600/30 p-6 rounded-2xl"
                data-testid="card-pix-automatico"
              >
                <div className="mb-4">
                  <h3 className="text-white font-lexend font-semibold text-lg mb-2">
                    Pix Automático
                  </h3>
                </div>
                <p 
                  className="text-white/90 text-sm leading-relaxed font-sans"
                  data-testid="text-pix-automatico-description"
                >
                  Ideal para pagamentos recorrentes com valor variável. O pagamento ocorre automaticamente se estiver dentro dos limites definidos pelo cliente. É o DDA turbinado, com muito mais liberdade.
                </p>
                <div className="mt-4 flex items-center text-cyan-300 text-sm">
                  <ArrowRight size={16} className="mr-2" />
                </div>
              </div>
              
              {/* PIX Biometria Card */}
              <div 
                className="bg-emerald-700/40 backdrop-blur-sm border border-emerald-600/30 p-6 rounded-2xl"
                data-testid="card-pix-biometria"
              >
                <div className="mb-4">
                  <h3 className="text-white font-lexend font-semibold text-lg mb-2">
                    Pix Biometria
                  </h3>
                </div>
                <p 
                  className="text-white/90 text-sm leading-relaxed font-sans"
                  data-testid="text-pix-biometria-description"
                >
                  Pagamentos são autorizados com biometria, direto no check-out. Traz segurança e conveniência para o e-commerce, impulsionando a adoção do PIX, sem quebras na jornada.
                </p>
                <div className="mt-4 flex items-center text-cyan-300 text-sm">
                  <ArrowRight size={16} className="mr-2" />
                </div>
              </div>
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