import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroIllustrationPath from "../../assets/Home_Ilustra_Banner_01_1756234068551.png";
import heroBgPath from "../../assets/Home_BG_Banner_01_1756234068550.jpg";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-8 lg:px-16 pt-[0px] pb-[0px] mt-[120px] mb-[120px] ml-[67px] mr-[67px] pl-[29px] pr-[29px]">
      <section 
        className="relative overflow-hidden rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, #1B5E62 0%, #0D4142 50%, #000000 100%)',
        }}
        data-testid="section-hero"
      >
        
        <div className="relative z-10 px-12 py-16 lg:py-20 mt-[-104px] mb-[-104px]">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[400px]">
            {/* Content - Takes up 7 columns */}
            <div className="lg:col-span-7 text-white space-y-6">
              <h1 
                className="lg:text-5xl text-[#00F0D8] font-medium text-[35px] ml-[21px] mr-[21px]"
                data-testid="heading-hero-title"
              >
                Pix Automático
              </h1>
              
              <div className="space-y-4">
                <p 
                  className="text-base lg:text-lg text-white leading-relaxed max-w-lg ml-[25px] mr-[25px] font-extralight"
                  data-testid="text-hero-description"
                >
                  Conheça a nova funcionalidade automatiza pagamentos recorrentes, incluindo valores variáveis, trazendo benefícios diretos para empresas e consumidores.
                </p>
              </div>
              
              <div className="flex gap-4 pt-2">
                <button 
                  className="border border-[#00F0D8] px-6 py-2 rounded-md text-sm hover:bg-[#00F0D8]/10 transition-all duration-300 flex items-center gap-2 text-[#fcfffe] mt-[0px] mb-[0px] pt-[5px] pb-[5px] font-light pl-[21px] pr-[21px] ml-[42px] mr-[42px]"
                  data-testid="button-learn-more"
                >      Saiba mais</button>
              </div>
            </div>

            {/* 3D Illustration - Takes up 5 columns */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-full">
                {/* Dark surface background to match 3D elements base */}
                <div className="absolute bottom-0 right-0 w-4/5 h-3/5 bg-gradient-to-t from-[#000000] via-[#0A1F1F] to-transparent rounded-lg"></div>
                <div className="relative flex justify-center lg:justify-end h-full items-center">
                  <img 
                    src={heroIllustrationPath} 
                    alt="PIX Automático Illustration" 
                    className="w-full max-w-xs lg:max-w-sm"
                    data-testid="img-hero-illustration"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div 
            className="flex justify-center mt-8 space-x-2"
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
