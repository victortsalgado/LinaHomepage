import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroIllustrationPath from "../../assets/Home_Ilustra_Banner_01_1756234068551.png";
import heroBgPath from "../../assets/Home_BG_Banner_01_1756234068550.jpg";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-8 lg:px-16 pt-8">
      <section 
        className="relative overflow-hidden rounded-3xl"
        style={{
          backgroundImage: `url(${heroBgPath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="section-hero"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3A3A]/95 to-[#012A2F]/80 rounded-3xl"></div>
        
        <div className="relative z-10 px-12 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
            {/* Content */}
            <div className="text-white space-y-8">
              <h1 
                className="text-5xl lg:text-6xl font-bold leading-tight"
                data-testid="heading-hero-title"
              >
                PIX <span className="text-[#00F0D8]">Automático</span>
              </h1>
              
              <p 
                className="text-lg lg:text-xl text-gray-200 max-w-xl leading-relaxed"
                data-testid="text-hero-description"
              >
                Conheça a nova funcionalidade que automatiza pagamentos recorrentes, incluindo valores variáveis, trazendo benefícios diretos para empresas e consumidores.
              </p>
              
              <div className="flex gap-4 pt-4">
                <Button 
                  className="bg-[#00F0D8] hover:bg-[#00D4C4] text-[#0A3A3A] px-8 py-3 rounded-full font-semibold text-base transition-all duration-300"
                  data-testid="button-learn-more"
                >
                  Saiba mais
                </Button>
              </div>
            </div>

            {/* 3D Illustration */}
            <div className="relative lg:ml-8">
              <div className="relative z-10 flex justify-center lg:justify-end">
                <img 
                  src={heroIllustrationPath} 
                  alt="PIX Automático Illustration" 
                  className="w-full max-w-md lg:max-w-lg"
                  data-testid="img-hero-illustration"
                />
              </div>
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div 
            className="flex justify-center mt-8 space-x-2"
            data-testid="carousel-indicators"
          >
            <div className="w-3 h-3 bg-[#00F0D8] rounded-full" data-testid="indicator-active"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full" data-testid="indicator-inactive-1"></div>
            <div className="w-3 h-3 bg-white/30 rounded-full" data-testid="indicator-inactive-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
