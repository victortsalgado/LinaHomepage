import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroIllustrationPath from "../../assets/Home_Ilustra_Banner_01_1756234068551.png";
import heroBgPath from "../../assets/Home_BG_Banner_01_1756234068550.jpg";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-8 mt-[100px] mb-[100px]">
      <section 
        className="relative overflow-hidden rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, #2A7B7F 0%, #1B5E62 15%, #0D4142 35%, #000000 65%)',
        }}
        data-testid="section-hero"
      >
        
        <div className="relative z-10 px-16 py-0">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[20px]">
            {/* Content - Takes up 7 columns */}
            <div className="lg:col-span-7 text-white space-y-1">
              <h1 
                className="text-5xl lg:text-6xl text-[#00F0D8] font-medium leading-tight"
                data-testid="heading-hero-title"
              >
                Pix Automático
              </h1>
              
              <div className="space-y-2 text-left">
                <p 
                  className="text-lg lg:text-xl text-white leading-relaxed max-w-2xl font-light"
                  data-testid="text-hero-description"
                >
                  Conheça a nova funcionalidade automatiza pagamentos recorrentes, incluindo valores variáveis, <strong className="font-medium">trazendo benefícios diretos para empresas e consumidores.</strong>
                </p>
              </div>
              
              <div className="flex gap-4 pt-3">
                <button 
                  className="border border-[#00F0D8] px-8 py-3 rounded-full text-base hover:bg-[#00F0D8]/10 transition-all duration-300 flex items-center gap-3 text-white font-normal"
                  data-testid="button-learn-more"
                >
                  <span className="text-[#00F0D8]">→</span>
                  Saiba mais
                </button>
              </div>
            </div>

            {/* 3D Illustration - Takes up 5 columns */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-full">
                <div className="relative flex justify-center lg:justify-end h-full items-center ml-[-12px] mr-[-12px]">
                  <img 
                    src={heroIllustrationPath} 
                    alt="PIX Automático Illustration" 
                    className="w-full max-w-xs lg:max-w-sm ml-[27px] mr-[27px] mt-[20px] mb-[20px] pl-[10px] pr-[10px] animate-float pt-[10px] pb-[10px]"
                    data-testid="img-hero-illustration"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div 
            className="flex justify-center mt-3 space-x-2"
            data-testid="carousel-indicators"
          >
            <div className="w-2 h-2 bg-[#00F0D8] rounded-full" data-testid="indicator-active"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full" data-testid="indicator-inactive-1"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full" data-testid="indicator-inactive-2"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full" data-testid="indicator-inactive-3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
