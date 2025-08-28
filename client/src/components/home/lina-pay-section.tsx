import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function LinaPaySection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section 
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
      data-testid="section-lina-pay"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-800"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-emerald-400 rounded-3xl opacity-20 transform rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-teal-400 rounded-2xl opacity-30 transform -rotate-12"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div 
          ref={headerRef}
          className={`mb-12 ${headerVisible ? 'scroll-reveal-fade-in' : 'scroll-reveal-hidden'}`}
        >
          {/* Icon and Title */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-2"
                data-testid="heading-lina-pay-title"
              >
                Transforme o PIX em motor de vendas, lucratividade e fidelização.
              </h2>
              <p 
                className="text-white/80 text-sm leading-relaxed max-w-2xl"
                data-testid="text-lina-pay-description"
              >
                Conheça a nova funcionalidade automatiza pagamentos recorrentes, incluindo valores variáveis, <span className="font-semibold">trazendo benefícios diretos para empresas e consumidores.</span>
              </p>
            </div>
          </div>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid lg:grid-cols-2 gap-6 mb-8"
        >
          {/* PIX Automático Card */}
          <div 
            className={`bg-emerald-700/40 backdrop-blur-sm border border-emerald-600/30 p-6 rounded-2xl ${cardsVisible ? 'scroll-reveal-slide-up scroll-reveal-stagger-1' : 'scroll-reveal-hidden'}`}
            data-testid="card-pix-automatico"
          >
            <div className="mb-4">
              <span className="inline-block bg-emerald-600/50 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Pix Automático
              </span>
            </div>
            <p 
              className="text-white/90 text-sm leading-relaxed"
              data-testid="text-pix-automatico-description"
            >
              Ideal para pagamentos recorrentes com valor variável. O pagamento ocorre automaticamente se estiver dentro dos limites definidos pelo cliente. É o DDA turbinado, com muito mais liberdade
            </p>
            <div className="mt-4 flex items-center text-cyan-300 text-sm">
              <ArrowRight size={16} className="mr-2" />
            </div>
          </div>
          
          {/* PIX Biometria Card */}
          <div 
            className={`bg-emerald-700/40 backdrop-blur-sm border border-emerald-600/30 p-6 rounded-2xl ${cardsVisible ? 'scroll-reveal-slide-up scroll-reveal-stagger-2' : 'scroll-reveal-hidden'}`}
            data-testid="card-pix-biometria"
          >
            <div className="mb-4">
              <span className="inline-block bg-emerald-600/50 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Pix Biometria
              </span>
            </div>
            <p 
              className="text-white/90 text-sm leading-relaxed"
              data-testid="text-pix-biometria-description"
            >
              Pagamentos são autorizados com biometria, direto no check-out. Traz segurança e conveniência para o e-commerce, impulsionando a adoção do PIX, sem quebra de jornada.
            </p>
            <div className="mt-4 flex items-center text-cyan-300 text-sm">
              <ArrowRight size={16} className="mr-2" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-emerald-900 px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
            data-testid="button-learn-lina-pay"
          >
            <ArrowRight size={16} />
            <span>Conheça o Lina Pay</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
