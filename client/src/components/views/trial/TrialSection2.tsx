import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function TrialSection2() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();

  return (
    <section 
      ref={sectionRef}
      className={`-mt-24 md:-mt-30 lg:-mt-36 py-24 md:py-32 lg:py-40 bg-gray-50 transition-all duration-1000 ${
        sectionVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      data-testid="section-trial"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        
        {/* Main Content Block */}
        <div className="bg-white rounded-3xl shadow-lg p-16 lg:p-24">
          
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12">
            
            {/* Left - Title with Icon */}
            <div className={`transition-all duration-1000 delay-300 ${
              sectionVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/datalink-icon.png?v=1" 
                  alt="Data Link Icon" 
                  className="w-16 h-16 object-contain"
                  data-testid="img-data-link-icon"
                />
                <h1 className="text-4xl lg:text-5xl font-lexend">
                  <span className="text-[#009895]">Data</span> <span className="font-bold" style={{color: '#0AB5AB'}}>Link</span>
                </h1>
              </div>
              
              {/* Subtitle */}
              <p className="text-lg lg:text-xl leading-relaxed text-[#23252f]">
                <span className="font-bold">Integre dados financeiros em tempo real, diretamente do Open Finance</span>, conectando transações, saldos, limites, contratos de crédito, cartões, investimentos e muito mais!
              </p>
            </div>

            {/* Right - YouTube Player */}
            <div className={`transition-all duration-1000 delay-500 ${
              sectionVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/F_puVKxZLuw?controls=1&modestbranding=1&rel=0"
                  title="Data Link - Vídeo Demonstração"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-testid="video-youtube-player"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section - Two Boxes */}
          <div className="grid md:grid-cols-2 gap-8 shadow-sm">
            
            {/* First Box - Teste o Pix Automático */}
            <div className={`bg-white border-2 border-[#009895] rounded-2xl p-8 transition-all duration-1000 delay-700 ${
              sectionVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-2xl lg:text-3xl font-lexend mb-4 text-[#009895]">
                Conheça a solução de <span className="font-bold">PFM</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Conecte suas contas para uma gestão financeira inteligente.
              </p>
              
              <Button 
                variant="light-bg"
                className="px-6 py-3 flex items-center space-x-2 font-medium"
                data-testid="button-test-pix"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Conectar agora</span>
              </Button>
            </div>

            {/* Second Box - Acesse nossas APIs */}
            <div className={`bg-white border-2 border-[#009895] rounded-2xl p-8 transition-all duration-1000 delay-900 ${
              sectionVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-2xl lg:text-3xl font-lexend mb-4 text-[#009895]">
                Acesse nossas <span className="font-bold">APIs</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experimente gratuitamente por 30 dias.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="light-bg"
                  className="px-6 py-3 flex items-center space-x-2 font-medium"
                  data-testid="button-request-access"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Solicitar Acesso</span>
                </Button>
                
                <Button 
                  className="px-6 py-3 font-medium bg-transparent border-2 border-[#2ec9bc] text-[#2ec9bc] hover:bg-[#2ec9bc] hover:text-white transition-all duration-200 rounded-full"
                  data-testid="button-documentation"
                >
                  Documentação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}