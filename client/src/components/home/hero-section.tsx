import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroIllustrationPath from "../../assets/Home_Ilustra_Banner_01_1756226671991.png";

export default function HeroSection() {
  return (
    <section 
      className="pt-20 pb-16 hero-bg relative overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-lina-dark/90 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-lina-cyan/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-lina-cyan/30 rounded-full animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 space-x-2">
              <div className="w-2 h-2 bg-lina-cyan rounded-full animate-pulse"></div>
              <span className="text-sm font-medium" data-testid="text-new-feature">
                Nova Funcionalidade
              </span>
            </div>
            
            <h1 
              className="text-5xl lg:text-6xl font-bold leading-tight"
              data-testid="heading-hero-title"
            >
              PIX <span className="text-lina-cyan">Automático</span>
            </h1>
            
            <p 
              className="text-xl text-gray-200 max-w-xl leading-relaxed"
              data-testid="text-hero-description"
            >
              Conheça a nova funcionalidade que automatiza pagamentos recorrentes, incluindo valores variáveis, trazendo benefícios diretos para empresas e consumidores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-lina-cyan text-lina-dark px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                data-testid="button-learn-more"
              >
                Saiba mais
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-lina-dark transition-all duration-300"
                data-testid="button-watch-demo"
              >
                <Play className="mr-2 h-4 w-4" />
                Ver Demo
              </Button>
            </div>
          </div>

          {/* 3D Illustration */}
          <div className="relative lg:ml-12">
            <div className="relative z-10">
              <img 
                src={heroIllustrationPath} 
                alt="PIX Automático Illustration" 
                className="w-full max-w-md mx-auto animate-float"
                data-testid="img-hero-illustration"
              />
            </div>
            
            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-lina-cyan/20 rounded-full blur-3xl transform scale-75"></div>
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
