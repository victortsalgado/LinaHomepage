import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroIllustrationPath from "../../assets/Home_Ilustra_Banner_01_1756234068551.png";
import heroBgPath from "../../assets/Home_BG_Banner_01_1756234068550.jpg";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-8 lg:px-16 pt-[-4px] pb-[-4px] ml-[108px] mr-[108px] mt-[102px] mb-[102px] pl-[26px] pr-[26px]">
      <section
        className="relative overflow-hidden rounded-3xl"
        style={{
          background:
            "linear-gradient(135deg, #1B5E62 0%, #0D4142 50%, #000000 100%)",
        }}
        data-testid="section-hero"
      >
        <div className="relative z-10 px-12 py-16 lg:py-20 pl-[50px] pr-[50px] ml-[-33px] mr-[-33px] mt-[-114px] mb-[-114px] pt-[86px] pb-[86px]">
          <div className="grid lg:grid-cols-12 gap- items-center min-h-[400px] pl-[5px] pr-[5px] pt-[0px] pb-[0px] ml-[0px] mr-[0px] mt-[0px] mb-[0px]">
            {/* Content - Takes up 7 columns */}
            <div className="lg:col-span-7 text-white space-y-6">
              <h1
                className="lg:text-5xl text-[#00F0D8] font-medium text-[39px] pt-[0px] pb-[0px] mt-[34px] mb-[34px] ml-[24px] mr-[24px] pl-[0px] pr-[0px]"
                data-testid="heading-hero-title"
              >
                Pix Automático
              </h1>

              <div className="space-y-4">
                <p
                  className="text-base lg:text-lg text-white leading-relaxed max-w-lg ml-[25px] mr-[25px] font-extralight"
                  data-testid="text-hero-description"
                >
                  Conheça a nova funcionalidade automatiza pagamentos
                  recorrentes, incluindo valores variáveis, trazendo benefícios
                  diretos para empresas e consumidores.
                </p>
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  className="border border-[#00F0D8] px-6 py-2 rounded-full text-sm hover:bg-[#00F0D8]/10 transition-all duration-300 flex items-center gap-2 text-white mt-[0px] mb-[0px] pt-[5px] pb-[5px] font-light pl-[21px] pr-[21px] ml-[42px] mr-[42px]"
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
                    className="w-full max-w-xs lg:max-w-sm ml-[31px] mr-[31px] pl-[41px] pr-[41px] pt-[0px] pb-[0px] mt-[10px] mb-[10px]"
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
            <div
              className="w-2 h-2 bg-[#00F0D8] rounded-full"
              data-testid="indicator-active"
            ></div>
            <div
              className="w-2 h-2 bg-white/40 rounded-full"
              data-testid="indicator-inactive-1"
            ></div>
            <div
              className="w-2 h-2 bg-white/40 rounded-full"
              data-testid="indicator-inactive-2"
            ></div>
            <div
              className="w-2 h-2 bg-white/40 rounded-full"
              data-testid="indicator-inactive-3"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
