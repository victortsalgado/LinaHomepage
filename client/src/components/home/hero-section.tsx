import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroIllustrationPath from "../../assets/Home_Ilustra_Banner_01_1756226671991.png";

export default function HeroSection() {
  return (
    <section 
      className="pt-32 pb-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #012A2F 0%, #0A3A3A 50%, #00F0D8 100%)'
      }}
      data-testid="section-hero"
    >
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-lina-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-lina-cyan/15 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-lina-cyan/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[700px]">
          {/* Content */}
          <div className="text-white space-y-10">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 space-x-3">
              <div className="w-3 h-3 bg-lina-cyan rounded-full animate-pulse"></div>
              <span className="text-base font-medium" data-testid="text-new-feature">
                Nova Funcionalidade
              </span>
            </div>
            
            <h1 
              className="text-6xl lg:text-7xl font-bold leading-tight"
              data-testid="heading-hero-title"
            >
              PIX <span className="text-lina-cyan">Automático</span>
            </h1>
            
            <p 
              className="text-2xl text-gray-200 max-w-2xl leading-relaxed font-light"
              data-testid="text-hero-description"
            >
              Conheça a nova funcionalidade que automatiza pagamentos recorrentes, incluindo valores variáveis, trazendo benefícios diretos para empresas e consumidores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                className="bg-lina-cyan text-lina-dark px-10 py-5 rounded-3xl font-semibold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                data-testid="button-learn-more"
              >
                Saiba mais
              </Button>
            </div>
          </div>

          {/* 3D Illustration */}
          <div className="relative lg:ml-16">
            <div className="relative z-10">
              <img 
                src={heroIllustrationPath} 
                alt="PIX Automático Illustration" 
                className="w-full max-w-lg mx-auto animate-float drop-shadow-2xl"
                data-testid="img-hero-illustration"
              />
            </div>
            
            {/* Enhanced Glowing Effect */}
            <div className="absolute inset-0 bg-lina-cyan/30 rounded-full blur-3xl transform scale-90 opacity-60"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-lina-cyan/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div 
          className="flex justify-center mt-12 space-x-3"
          data-testid="carousel-indicators"
        >
          <div className="w-3 h-3 bg-lina-cyan rounded-full" data-testid="indicator-active"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full" data-testid="indicator-inactive-1"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full" data-testid="indicator-inactive-2"></div>
        </div>
      </div>
    </section>
  );
}
