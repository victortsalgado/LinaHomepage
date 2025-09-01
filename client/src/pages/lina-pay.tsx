import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LinaPayHeroSection from "@/components/views/lina-pay/sections/LinaPayHeroSection";
import AboutLinaPaySection from "@/components/views/lina-pay/sections/AboutLinaPaySection";
import SocialProofSection from "@/components/views/lina-pay/sections/SocialProofSection";
import DifferentiatorsSection from "@/components/views/lina-pay/sections/DifferentiatorsSection";
import FeaturesSection from "@/components/views/lina-pay/sections/FeaturesSection";



const businessTypes = [
  {
    icon: "/figmaAssets/union-4.svg",
    title: "E-commerces e marketplaces",
    description:
      "Melhore o check-out e reduza o abandono com Pix por Biometria.",
  },
  {
    icon: "/figmaAssets/union-1.svg",
    title: "Fintechs reguladas",
    description:
      "Acesse o Open Finance sem lidar com homologações regulatórias.",
  },
  {
    icon: "/figmaAssets/union-3.svg",
    title: "Carteiras digitais",
    description:
      "Ofereça Pix por aproximação e uma jornada sem etapas manuais.",
  },
  {
    icon: "/figmaAssets/union-2.svg",
    title: "Plataformas de pagamento",
    description:
      "Adicione funcionalidades que reduzem custos e aumentam o atendimento às necessidades dos clientes.",
  },
  {
    icon: "/figmaAssets/union-5.svg",
    title: "Cooperativas de crédito",
    description:
      "Adicione funcionalidades que reduzem custos e aumentam a satisfação.",
  },
  {
    icon: "/figmaAssets/union.svg",
    title: "Plataformas BaaS",
    description:
      "Ofereça novos serviços com agilidade e integração ao Open Finance.",
  },
];

const integrationFeatures = [
  "APIs completas e documentadas",
  "Compatível com VTEX, Shopify, Nuvemshop, entre outras",
  "Suporte técnico direto com nosso time de especialistas",
  "Homologado no Open Finance e 100% LGPD compliant",
  "Processos de integração pensados para desenvolvedores e times ágeis",
];

export default function LinaPay(): JSX.Element {
  return (
    <>
      <Header />
      <div className="bg-white grid justify-items-center w-screen">
        <div className="bg-white w-full max-w-[1440px]">
          <div className="relative">
            <LinaPayHeroSection />

            {/* What is Lina Pay Section */}
            <AboutLinaPaySection />

            {/* Social Proof Section */}
            <SocialProofSection />

            {/* Differentiators Section */}
            <DifferentiatorsSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* Integration Section */}
            <section className="w-full h-[787px] rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(251,250,250,1)_0%,rgba(152,216,211,1)_100%)] relative">
              <div className="flex justify-between items-center px-[294px] pt-[157px]">
                <Card className="w-[552px] h-[535px] bg-white rounded-2xl border-0">
                  <CardContent className="p-10">
                    <h2 className="[font-family:'Lexend',Helvetica] font-medium text-5xl leading-[56px] mb-8">
                      <span className="text-[#003a38]">
                        Integre rápido, escale
                      </span>
                      <span className="text-[#0ab5aa]"> sem limites</span>
                    </h2>

                    <div className="space-y-6">
                      {integrationFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <img
                            className="w-4 h-4 mt-1"
                            alt="Check"
                            src="/figmaAssets/check.svg"
                          />
                          <p className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base leading-6">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <img
                  className="w-[277px] h-[562px] object-cover"
                  alt="Mockup"
                  src="/figmaAssets/mockup01-1.png"
                />
              </div>
            </section>

            {/* Business Types Section */}
            <section className="w-full h-[961px] bg-[#003a38] rounded-[0px_0px_40px_40px] border border-solid border-black relative">
              <div className="px-[252px] pt-[198px]">
                <div className="mb-16">
                  <h2 className="[font-family:'Lexend',Helvetica] font-medium text-5xl leading-[56px] mb-8">
                    <span className="text-white">Pensado para diferentes </span>
                    <span className="text-[#07f4e2]">tipos de negócio</span>
                  </h2>

                  <div className="flex items-center gap-4 mb-12">
                    <p className="[font-family:'Inter',Helvetica] font-bold text-white text-base">
                      Veja como aplicamos no seu setor
                    </p>
                    <img
                      className="w-[34px] h-[34px]"
                      alt="Component"
                      src="/figmaAssets/component-5.svg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-[427px] gap-y-8">
                  {businessTypes.map((business, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-[#07f4e2] rounded-xl flex items-center justify-center flex-shrink-0">
                        <img
                          className="w-[27px] h-auto"
                          alt="Union"
                          src={business.icon}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="[font-family:'Lexend',Helvetica] font-bold text-white text-base mb-2">
                          {business.title}
                        </h3>
                        <p className="[font-family:'Lexend',Helvetica] font-light text-white text-base leading-6">
                          {business.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <img
                className="absolute w-[360px] h-[328px] bottom-0 right-[252px] object-cover"
                alt="Man"
                src="/figmaAssets/man-3.png"
              />
            </section>

            {/* Final CTA Section */}
            <section
              id="cta-form-section"
              className="w-full h-[587px] rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(152,216,211,1)_100%)] relative"
            >
              <div className="text-center px-[444px] pt-[249px]">
                <h2 className="[font-family:'Lexend',Helvetica] font-medium text-[#606060] text-[40px] leading-[56px] mb-8">
                  Vamos simplificar e reduzir o custo dos pagamentos?
                </h2>

                <p className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base leading-6 mb-10">
                  Fale com um de nossos especialistas e comece agora a oferecer o
                  Pix com menos atrito, mais segurança e o menor custo do mercado.
                </p>

                <Button className="w-[319px] h-auto px-8 py-4 bg-[#0ab5aa] rounded-[80px] [font-family:'Lexend',Helvetica] font-bold text-white text-base">
                  Solicitar demonstração
                </Button>
              </div>
            </section>

            {/* Footer */}
            <footer className="w-full h-[232px] bg-[#003a38] shadow-[4px_4px_8px_#0ab5aa1a] relative">
              <div className="text-center pt-[141px]">
                <p className="[font-family:'Lexend',Helvetica] font-normal text-[#527572] text-base leading-6">
                  © 2025 Lina Open X<br />
                  Todos os direitos reservados.
                </p>

                <div className="w-[60px] h-[19px] mx-auto mt-4 relative overflow-hidden">
                  <img
                    className="w-0.5 absolute h-[19px] top-0 left-[18px]"
                    alt="Vector"
                    src="/figmaAssets/vector.svg"
                  />
                  <img
                    className="w-[15px] absolute h-[19px] top-0 left-[45px]"
                    alt="Vector"
                    src="/figmaAssets/vector-1.svg"
                  />
                  <img
                    className="w-3 absolute h-[19px] top-0 left-0"
                    alt="Vector"
                    src="/figmaAssets/vector-3.svg"
                  />
                  <img
                    className="w-[15px] absolute h-[19px] top-0 left-[26px]"
                    alt="Vector"
                    src="/figmaAssets/vector-2.svg"
                  />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}