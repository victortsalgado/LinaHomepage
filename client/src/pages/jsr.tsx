import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import JsrHeroSection from "@/components/views/jsr/sections/JsrHeroSection";
import SolutionSection from "@/components/views/jsr/sections/SolutionSection";
import JsrSocialProofSection from "@/components/views/jsr/sections/JsrSocialProofSection";
import JsrDifferentiatorsSection from "@/components/views/jsr/sections/JsrDifferentiatorsSection";
import JsrApisSection from "@/components/views/jsr/sections/JsrApisSection";
import JsrInfrastructureSection from "@/components/views/jsr/sections/JsrInfrastructureSection";
import JsrCtaFormSection from "@/components/views/jsr/sections/JsrCtaFormSection";

const clientLogos = [
  { src: "/figmaAssets/client.png", alt: "Client" },
  { src: "/figmaAssets/client-1.png", alt: "Client" },
  { src: "/figmaAssets/client-2.png", alt: "Client" }
];

const featureCards = [
  {
    icon: "/figmaAssets/icones-com-efeito.svg",
    title: "Infraestrutura homologada e certificada",
    description: "Solução SaaS pronta para produção, validada pelo Banco Central e com certificação FIDO2.",
    top: "top-[878px]",
    left: "left-[303px]"
  },
  {
    icon: "/figmaAssets/icones-com-efeito-4.svg",
    title: "Zero fricção regulatória",
    description: "A Lina cuida dos testes, relatórios, atualizações e atendimento a SLAs exigidos pelo Bacen.",
    top: "top-[878px]",
    left: "left-[687px]"
  },
  {
    icon: "/figmaAssets/icones-com-efeito-1.svg",
    title: "Integração simples e rápida via API",
    description: "Ideal para instituições com times técnicos enxutos ou sobrecarregados.",
    top: "top-[878px]",
    left: "left-[1071px]"
  },
  {
    icon: "/figmaAssets/icones-com-efeito-3.svg",
    title: "Modelo comercial flexível e escalável",
    description: "Condições adaptadas à realidade de bancos, fintechs, cooperativas e plataformas BaaS.",
    top: "top-[1210px]",
    left: "left-[494px]"
  },
  {
    icon: "/figmaAssets/icones-com-efeito-2.svg",
    title: "Jornadas UI/UX whitelabel, com interfaces customizáveis",
    description: "Ideal para quem busca ainda mais agilidade e menos esforço na implantação.",
    top: "top-[1210px]",
    left: "left-[878px]"
  }
];

const pixFeatures = [
  {
    icon: "/figmaAssets/icon-card-2.svg",
    title: "Pix por biometria",
    description: "Cliente paga com FaceID ou digital, sem sair do site.",
    benefits: [
      "Elimina o abandono por quebra de jornada",
      "Aumenta a conversão e reduz fricções",
      "Sem senha, QR Code ou redirecionamento"
    ]
  },
  {
    icon: "/figmaAssets/icon-card.svg",
    title: "Pix por aproximação no varejo físico",
    description: "Cliente paga aproximando o celular da maquininha, como faz com um cartão.",
    benefits: [
      "Sem abrir app do banco",
      "Reduz filas e acelera o atendimento",
      "Ideal para eventos, food service e lojas de conveniência"
    ]
  },
  {
    icon: "/figmaAssets/icon-card-1.svg",
    title: "Pix à vista, agendado, recorrente e automático",
    description: "Sua instituição pronta para todos os modelos de pagamento via Pix pela JSR.",
    benefits: [
      "Pagamentos únicos, agendados ou automatizados",
      "Redução de inadimplência e mais previsibilidade",
      "Substitui DDA e boletos com mais liberdade e controle"
    ]
  }
];

const institutionTypes = [
  {
    icon: "/figmaAssets/union-2.svg",
    title: "Bancos e cooperativas",
    description: "Saia na frente e ofereça o jeito mais moderno de pagar com o Pix.",
    top: "top-[3484px]",
    left: "left-[300px]"
  },
  {
    icon: "/figmaAssets/union-1.svg",
    title: "Carteiras digitais",
    description: "Adicione o Pix por aproximação à sua wallet e seja a carteira preferida dos clientes.",
    top: "top-[3484px]",
    left: "left-[727px]"
  },
  {
    icon: "/figmaAssets/union-3.svg",
    title: "Instituições de Pagamentos e Fintechs",
    description: "Antecipe tendências e ganhe vantagem competitiva transformando contas digitais em meios de pagamento Pix nas wallets.",
    top: "top-[3623px]",
    left: "left-[300px]"
  },
  {
    icon: "/figmaAssets/union.svg",
    title: "Plataformas de pagamento e BaaS",
    description: "Reduza custos por transação e amplie a oferta de serviços aos clientes finais.",
    top: "top-[3623px]",
    left: "left-[727px]"
  }
];

const apiFeatures = [
  "APIs documentadas e suporte técnico dedicado",
  "Compatível com ecossistemas modernos (mobile, internet banking, wallets)",
  "Solução homologada no Open Finance e certificada pelo Banco Central",
  "Onboarding em semanas com time consultivo de integração",
  "Atualizações e sustentação contínuas, sob gestão da Lina"
];

export default function JSR(): JSX.Element {
  return (
    <>
      <Header />
      <JsrHeroSection />
      <SolutionSection />
      <JsrSocialProofSection />
      <JsrDifferentiatorsSection />
      <JsrApisSection />
      <JsrInfrastructureSection />
      <JsrCtaFormSection />
      <div className="bg-white grid justify-items-center [align-items:start] w-screen">
        <div className="bg-white w-[1440px] h-[6196px] relative">
          <div className="absolute w-[1440px] h-[4606px] top-[1590px] left-0">
            <div className="absolute w-[1440px] h-[232px] top-[4374px] left-0 bg-[#003a38] shadow-[4px_4px_8px_#0ab5aa1a]" />
            <div className="absolute w-[1440px] h-[752px] top-[3690px] left-0 rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(152,216,211,1)_100%)]" />
            <div className="absolute w-[1440px] h-[961px] top-[2911px] left-0 bg-[#003a38] rounded-[0px_0px_40px_40px]" />
            <div className="absolute w-[1440px] h-[787px] top-[2218px] left-0 rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(251,250,250,1)_0%,rgba(152,216,211,1)_100%)]" />
            <div className="absolute w-[1440px] h-[761px] top-[1568px] left-0 bg-white rounded-[0px_0px_40px_40px]" />
            <div className="absolute w-[1440px] h-[1110px] top-[531px] left-0 bg-[#f8f3f3] rounded-[0px_0px_40px_40px]" />
            <div className="absolute w-[1440px] h-[638px] top-0 left-0 rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(251,250,250,1)_0%,rgba(152,216,211,1)_100%)]" />
            <img
              className="absolute w-[938px] h-[45px] top-[550px] left-[252px] object-cover"
              alt="Logos"
              src="/figmaAssets/logos-1.png"
            />
            <div className="absolute w-[739px] top-[3976px] left-[348px] [font-family:'Lexend',Helvetica] font-medium text-[#606060] text-[40px] text-center tracking-[-0.80px] leading-[56px]">
              Antecipe-se à obrigatoriedade <br />e lidere a nova era do Pix
            </div>
            <div className="absolute w-[552px] top-[4104px] left-[444px] [font-family:'Lexend',Helvetica] font-normal text-[#606060] text-base text-center tracking-[0] leading-6">
              <span className="font-light">A </span>
              <span className="font-bold">JSR será obrigatória em 2026</span>
              <span className="font-light">
                , mas a corrida já começou. Quem se antecipa, conquista mais
                usuários e lidera a revolução dos pagamentos digitais no Brasil.
                <br />
                <br />
              </span>
              <span className="font-bold">
                Com a infraestrutura JSR da Lina, sua instituição entra em
                produção rapidamente
              </span>
              <span className="font-light">
                {" "}
                — com segurança, conformidade regulatória e a melhor consultoria
                técnica do mercado.
              </span>
            </div>
            <div className="absolute w-[360px] top-[4515px] left-[540px] [font-family:'Lexend',Helvetica] font-normal text-[#527572] text-base text-center tracking-[0] leading-6">
              © 2025 Lina Open X<br />
              Todos os direitos reservados.
            </div>
            <Button className="w-[260px] top-[446px] left-[252px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
              <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] ml-[-3.50px] mr-[-3.50px] [font-family:'Lexend',Helvetica] font-bold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                Descubra como funciona
              </div>
            </Button>
            <Button className="w-[388px] top-[1539px] left-[526px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
              <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                Veja nossos diferenciais na prática
              </div>
            </Button>
            <Button className="w-[388px] top-[2249px] left-[526px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
              <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                Veja nossos diferenciais na prática
              </div>
            </Button>
            <Button className="w-[319px] top-[4297px] left-[561px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
              <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                Solicitar demonstração
              </div>
            </Button>
            {featureCards.map((card, index) => (
              <Card key={index} className={`absolute w-[360px] h-[308px] ${index < 3 ? 'top-[846px]' : 'top-[1178px]'} ${index === 0 ? 'left-[156px]' : index === 1 ? 'left-[540px]' : index === 2 ? 'left-[924px]' : index === 3 ? 'left-[347px]' : 'left-[731px]'} bg-white rounded-2xl shadow-[4px_4px_8px_#0ab5aa1a]`}>
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <img
                    className="w-[65px] h-[65px] mb-4"
                    alt="Icones com efeito"
                    src={card.icon}
                  />
                  <div className="[font-family:'Lexend',Helvetica] font-bold text-[#606060] text-base tracking-[0] leading-6 mb-3">
                    {card.title}
                  </div>
                  <div className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base tracking-[0] leading-6">
                    {card.description}
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="absolute w-[337px] top-[195px] left-[252px] [font-family:'Lexend',Helvetica] font-medium text-transparent text-[40px] tracking-[-0.80px] leading-[56px]">
              <span className="text-[#606060] tracking-[-0.32px]">
                Resultados{" "}
              </span>
              <span className="text-[#0ab5aa] tracking-[-0.32px]">validados</span>
              <span className="text-[#606060] tracking-[-0.32px]">
                {" "}
                por quem já usa
              </span>
            </div>
            <Card className="absolute w-[558px] h-[367px] top-[148px] left-[599px]">
              <CardContent className="relative w-[552px] h-[367px] bg-[#003a38] rounded-[32px] shadow-[4px_4px_8px_#0ab5aa1a] p-0">
                <div className="absolute w-[458px] top-[68px] left-[55px] [font-family:'Lexend',Helvetica] font-light text-white text-lg tracking-[0] leading-6">
                  &quot;Estamos com a Lina desde o início do Open Finance e a nossa
                  parceria sempre foi muito forte. Com a Lina, o BRP foi um dos
                  primeiros bancos a obter a certificação funcional na Fase 3 e,
                  desde então, sempre estivemos muito próximos dos diretores e
                  corpo técnico, que nos dão todo o apoio e suporte necessários.
                  Estamos muito satisfeitos com a parceria.&quot;
                </div>
                <div className="absolute w-[167px] top-[278px] left-[103px] [font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                  Marcelo Bueno
                </div>
                <div className="absolute w-[394px] top-[302px] left-[103px] [font-family:'Inter',Helvetica] font-light text-white text-xs tracking-[0] leading-4 whitespace-nowrap">
                  Gerente de Controladoria e Compliance, BRP
                </div>
                <img
                  className="top-[278px] left-[55px] absolute w-10 h-10"
                  alt="Client"
                  src="/figmaAssets/client-3.svg"
                />
              </CardContent>
            </Card>
            <div className="absolute w-[102px] h-10 top-[382px] left-[258px]">
              <div className="relative h-10">
                {clientLogos.map((logo, index) => (
                  <img
                    key={index}
                    className={`top-0 ${index === 0 ? 'left-0' : index === 1 ? 'left-[30px]' : 'left-[62px]'} absolute w-10 h-10`}
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
              </div>
            </div>
            {pixFeatures.map((feature, index) => (
              <Card key={index} className={`${index === 0 ? 'left-[156px]' : index === 1 ? 'left-[540px]' : 'left-[924px]'} absolute w-[360px] h-[357px] top-[1844px] bg-white rounded-2xl shadow-[4px_4px_8px_#0ab5aa1a]`}>
                <CardContent className="p-0 relative h-full">
                  <img
                    className={`absolute w-[30px] h-[30px] ${index === 0 ? 'top-10' : 'top-[49px]'} left-6`}
                    alt="Icon card"
                    src={feature.icon}
                  />
                  <div className={`absolute ${index === 0 ? 'w-[252px]' : index === 1 ? 'w-[222px]' : 'w-[287px]'} ${index === 0 ? 'top-[42px]' : 'top-[39px]'} left-[62px] [font-family:'Lexend',Helvetica] font-normal text-[#003a38] text-xl tracking-[0] leading-6`}>
                    {feature.title}
                  </div>
                  <div className={`absolute w-[312px] ${index === 0 ? 'top-[85px]' : 'top-[99px]'} left-6 [font-family:'Lexend',Helvetica] font-light text-[#606060] text-base tracking-[0] leading-6`}>
                    {feature.description}
                  </div>
                  <div className={`h-[174px] ${index === 0 ? 'top-[150px]' : 'top-[164px]'} absolute w-[308px] left-6`}>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex}>
                        <div className={`absolute w-72 ${benefitIndex === 0 ? '-top-px' : benefitIndex === 1 ? 'top-[61px]' : 'top-[120px]'} left-5 [font-family:'Lexend',Helvetica] font-light text-[#606060] text-base tracking-[0] leading-6`}>
                          {benefit}
                        </div>
                        <img
                          className={`absolute w-4 h-4 ${benefitIndex === 0 ? 'top-1' : benefitIndex === 1 ? 'top-[66px]' : 'top-[124px]'} left-0`}
                          alt="Component"
                          src="/figmaAssets/component-3.svg"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="absolute w-[552px] h-[303px] top-[3109px] left-[252px] bg-[#022c2b] rounded-2xl" />
            <div className="absolute w-[939px] h-[348px] top-[3436px] left-[252px] bg-[#012c2a] rounded-2xl" />
            {institutionTypes.map((institution, index) => (
              <div key={index}>
                <div className={`absolute w-[307px] ${index < 2 ? 'top-[3483px]' : 'top-[3622px]'} ${index % 2 === 0 ? 'left-[379px]' : 'left-[804px]'} [font-family:'Lexend',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6`}>
                  <span className="font-bold text-white">{institution.title}</span>
                  <span className="font-light text-white"> {institution.description}</span>
                </div>
                <div className={`absolute w-14 h-14 ${institution.top} ${institution.left} bg-[#07f4e2] rounded-xl`}>
                  <div className="relative w-8 h-8 top-3 left-3">
                    <img
                      className={`absolute ${index === 0 ? 'w-[25px] h-[27px] top-[3px] left-[3px]' : index === 1 ? 'w-[27px] h-6 top-1 left-[3px]' : index === 2 ? 'w-6 h-6 top-1 left-1' : 'w-[27px] h-[23px] top-1 left-[3px]'}`}
                      alt="Union"
                      src={institution.icon}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute w-[458px] top-[3158px] left-[300px] [font-family:'Lexend',Helvetica] font-medium text-transparent text-[32px] tracking-[-0.64px] leading-10">
              <span className="text-white tracking-[-0.20px]">
                Infraestrutura JSR desenhada para{" "}
              </span>
              <span className="text-[#07f4e2] tracking-[-0.20px]">
                vários modelos de instituições financeiras
              </span>
            </div>
            <div className="absolute w-[274px] top-[3346px] left-[300px] [font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
              Veja como aplicamos no seu setor
            </div>
            <img
              className="absolute w-[34px] h-[34px] top-[3339px] left-[578px]"
              alt="Component"
              src="/figmaAssets/component-5.svg"
            />
            <div className="absolute w-[638px] h-28 top-[694px] left-[387px]">
              <div className="relative w-[636px] h-28">
                <div className="absolute w-[629px] top-0 left-0 [font-family:'Lexend',Helvetica] font-medium text-transparent text-[40px] text-center tracking-[-0.80px] leading-[56px]">
                  <span className="text-[#606060] tracking-[-0.32px]">
                    Por que o Data Link entrega{" "}
                  </span>
                  <span className="text-[#0ab5aa] tracking-[-0.32px]">
                    mais valor em menos tempo
                  </span>
                  <span className="text-[#606060] tracking-[-0.32px]">?</span>
                </div>
                <img
                  className="absolute w-[34px] h-[34px] top-[68px] left-[602px]"
                  alt="Component"
                  src="/figmaAssets/component-5.svg"
                />
              </div>
            </div>
            <div className="absolute w-[746px] h-24 top-[1700px] left-[348px]">
              <div className="relative w-[744px] h-24">
                <div className="absolute w-[744px] top-0 left-0 [font-family:'Lexend',Helvetica] font-medium text-transparent text-[40px] text-center tracking-[-0.80px] leading-10">
                  <span className="text-[#606060] tracking-[-0.32px] leading-[48px]">
                    APIs construídas para <br />
                  </span>
                  <span className="text-[#0ab5aa] tracking-[-0.32px] leading-[48px]">
                    facilitar a sua operação
                  </span>
                </div>
                <div className="absolute w-[34px] h-[34px] top-[59px] left-[606px] bg-[#0ab5aa] rounded-[17px]">
                  <div className="relative w-[17px] h-4 top-[9px] left-[9px]">
                    <img
                      className="absolute w-[15px] h-3.5 top-px left-px object-cover"
                      alt="Camada"
                      src="/figmaAssets/camada-1-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute w-[89px] h-[66px] top-[124px] left-[1045px]"
              alt="Image"
              src="/figmaAssets/-.svg"
            />
            <div className="w-[60px] h-[19px] top-[4485px] left-[690px] absolute overflow-hidden">
              <img
                className="w-0.5 h-[19px] left-[18px] absolute top-0"
                alt="Vector"
                src="/figmaAssets/vector-7.svg"
              />
              <img
                className="w-[15px] h-[19px] left-[45px] absolute top-0"
                alt="Vector"
                src="/figmaAssets/vector-3.svg"
              />
              <img
                className="w-3 h-[19px] left-0 absolute top-0"
                alt="Vector"
                src="/figmaAssets/vector-2.svg"
              />
              <img
                className="w-[15px] h-[19px] left-[26px] absolute top-0"
                alt="Vector"
                src="/figmaAssets/vector.svg"
              />
            </div>
            <img
              className="absolute w-[360px] h-[335px] top-[3077px] left-[829px] object-cover"
              alt="Man JSR"
              src="/figmaAssets/man-jsr-1.png"
            />
            <Card className="absolute w-[552px] h-[535px] top-[2411px] left-[294px] bg-white rounded-2xl">
              <CardContent className="p-8 relative h-full">
                <div className="[font-family:'Lexend',Helvetica] font-medium text-[#003a38] text-[32px] tracking-[-0.64px] leading-10 mb-8">
                  APIs simples, suporte técnico próximo e foco em produção rápida
                </div>
                <div className="space-y-4">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <img
                        className="w-4 h-4 flex-shrink-0 mt-1"
                        alt="Check"
                        src="/figmaAssets/component-3.svg"
                      />
                      <div className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base tracking-[0] leading-6">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <img
              className="absolute w-[277px] h-[562px] top-[2397px] left-[869px] object-cover"
              alt="Mockup"
              src="/figmaAssets/mockup01-1.png"
            />
            <div className="absolute w-[34px] h-[34px] top-[322px] left-[492px] bg-[#0ab5aa] rounded-[17px]">
              <div className="relative w-[17px] h-4 top-[9px] left-[9px] bg-[url(/figmaAssets/ativo-1-1.png)] bg-cover bg-[50%_50%]" />
            </div>
          </div>
          <div className="absolute w-[1440px] h-[1590px] top-0 left-0">
            <div className="absolute w-[1440px] h-[847px] top-[743px] left-0 bg-[#f8f3f3] rounded-[0px_0px_40px_40px]" />
            <div className="absolute w-[1440px] h-[820px] top-0 left-0 rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(251,250,250,1)_0%,rgba(152,216,211,1)_100%)]" />
            <div className="absolute w-[456px] top-[235px] left-[252px] [font-family:'Lexend',Helvetica] font-medium text-transparent text-[40px] tracking-[-0.80px] leading-[56px]">
              <span className="text-[#606060] tracking-[-0.32px]">
                A nova era do Pix já começou —{" "}
              </span>
              <span className="text-[#0ab5aa] tracking-[-0.32px]">
                e sua instituição precisa estar pronta
              </span>
            </div>
            <div className="absolute w-[456px] top-[475px] left-[252px] [font-family:'Lexend',Helvetica] font-light text-[#606060] text-base tracking-[0] leading-6">
              A JSR é a evolução do Open Finance que permite pagamentos com Pix
              por biometria e aproximação. Com a infraestrutura da Lina, sua
              instituição entra no jogo rapidamente, sem precisar escalar time
              técnico ou lidar com a carga regulatória.
            </div>
            <Button className="w-[260px] top-[612px] left-[252px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
              <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] ml-[-9.50px] mr-[-9.50px] [font-family:'Lexend',Helvetica] font-bold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                Falar com um especialista
              </div>
            </Button>
            <Card className="absolute w-[364px] h-[693px] top-[71px] left-[828px]" data-testid="section-cta-form">
              <CardContent className="relative w-[360px] h-[693px] bg-[#003a38] rounded-2xl shadow-[4px_4px_8px_#0ab5aa1a] p-0">
                <div className="flex flex-col w-[312px] items-start gap-2 absolute top-28 left-6">
                  <div className="flex h-[15px] items-start gap-0.5 relative self-stretch w-full">
                    <Label className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                      Nome completo
                    </Label>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                      *
                    </div>
                  </div>
                  <Input
                    className="flex items-start px-3.5 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-md border border-solid border-[#cbcccc]"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div className="flex flex-col w-[312px] items-start gap-2 absolute top-[196px] left-6">
                  <div className="flex h-[15px] items-start gap-0.5 relative self-stretch w-full">
                    <Label className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                      E-mail corporativo
                    </Label>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                      *
                    </div>
                  </div>
                  <Input
                    className="flex items-start px-3.5 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-md border border-solid border-[#cbcccc]"
                    placeholder="Digite seu e-mail corporativo"
                  />
                </div>
                <div className="flex flex-col w-[312px] items-start gap-2 absolute top-[280px] left-6">
                  <div className="flex h-[15px] items-start gap-0.5 relative self-stretch w-full">
                    <Label className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                      Telefone
                    </Label>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                      *
                    </div>
                  </div>
                  <Input
                    className="flex items-start px-3.5 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-md border border-solid border-[#cbcccc]"
                    placeholder="DDD + Número"
                  />
                </div>
                <div className="flex flex-col w-[312px] items-start gap-2 absolute top-[364px] left-6">
                  <div className="flex h-[15px] items-start gap-0.5 relative self-stretch w-full">
                    <Label className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                      Empresa
                    </Label>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                      *
                    </div>
                  </div>
                  <Input
                    className="flex items-start px-3.5 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-md border border-solid border-[#cbcccc]"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <Button className="w-[312px] top-[621px] left-6 h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
                  <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Lexend',Helvetica] font-bold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                    Falar com um especialista
                  </div>
                </Button>
                <div className="absolute w-[296px] top-14 left-8 [font-family:'Lexend',Helvetica] font-light text-white text-xs text-center tracking-[0] leading-4">
                  Não se preocupe, seus dados estarão sempre seguros conosco.
                </div>
                <div className="absolute w-[306px] top-8 left-[27px] [font-family:'Lexend',Helvetica] font-medium text-white text-base text-center tracking-[-0.32px] leading-6">
                  Fale com um especialista hoje mesmo.
                </div>
                <div className="flex flex-col w-[312px] h-[68px] items-start gap-0.5 absolute top-[530px] left-6">
                  <div className="flex h-[19px] items-start gap-0.5 relative self-stretch w-full">
                    <Label className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                      Label
                    </Label>
                  </div>
                  <Select>
                    <SelectTrigger className="flex items-center px-3.5 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-md border border-solid border-[#cbcccc]">
                      <SelectValue placeholder="Aquisição" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                      <SelectItem value="option4">Option 4</SelectItem>
                      <SelectItem value="option5">Option 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col w-[312px] h-[66px] items-start gap-0.5 absolute top-[448px] left-6">
                  <div className="flex h-[19px] items-start gap-0.5 relative self-stretch w-full">
                    <Label className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                      Qual o Faturamento Anual da Empresa?
                    </Label>
                  </div>
                  <Select>
                    <SelectTrigger className="flex items-center px-3.5 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-md border border-solid border-[#cbcccc]">
                      <SelectValue placeholder="Selecione aqui" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ate5mi">Até R$ 5 milhões</SelectItem>
                      <SelectItem value="5a10mi">entre R$ 5 milhões e R$ 10 milhões</SelectItem>
                      <SelectItem value="10a50mi">entre R$ 10 milhões e R$ 50 milhões</SelectItem>
                      <SelectItem value="acima50mi">acima de R$ 50 milhões</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            <div className="absolute w-[374px] top-[894px] left-[252px] [font-family:'Lexend',Helvetica] font-medium text-transparent text-[40px] tracking-[-0.80px] leading-[48px]">
              <span className="text-[#606060] tracking-[-0.32px]">
                A solução ideal para ativar o{" "}
              </span>
              <span className="text-[#0ab5aa] tracking-[-0.32px]">
                Pix por aproximação
              </span>
              <span className="text-[#606060] tracking-[-0.32px]">
                {" "}
                sem travar o roadmap
              </span>
            </div>
            <div className="absolute w-[360px] top-[1152px] left-[252px] [font-family:'Lexend',Helvetica] font-light text-[#606060] text-base tracking-[0] leading-6">
              A Jornada Sem Redirecionamento (JSR) é a nova camada de
              infraestrutura do Open Finance que permite pagamentos via Pix sem
              abrir o app do banco — por biometria ou NFC.
              <br />
              <br />A Lina oferece infraestrutura e conectividadeem uma solução
              plug &amp; play homologada e certificada pelo Banco Central, para
              instituições financeiras que precisam se conectar à JSR sem
              desenvolver tudo do zero.
            </div>
            <Button className="w-[260px] top-[1417px] left-[252px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
              <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] ml-[-3.50px] mr-[-3.50px] [font-family:'Lexend',Helvetica] font-bold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                Descubra como funciona
              </div>
            </Button>
            <img
              className="absolute w-[34px] h-[34px] top-[1100px] left-[436px]"
              alt="Component"
              src="/figmaAssets/component-5.svg"
            />
            <img
              className="absolute w-[646px] h-[631px] top-[889px] left-[639px] object-cover"
              alt="Womanjsr"
              src="/figmaAssets/womanjsr-2.png"
            />
            <div className="w-[102px] h-[33px] top-[159px] left-[252px] absolute overflow-hidden">
              <img
                className="w-[3px] h-[33px] left-[31px] absolute top-0"
                alt="Vector"
                src="/figmaAssets/vector-1.svg"
              />
              <img
                className="w-[26px] h-[33px] left-[76px] absolute top-0"
                alt="Vector"
                src="/figmaAssets/vector-3.svg"
              />
              <img
                className="w-[21px] h-[33px] left-0 absolute top-0"
                alt="Vector"
                src="/figmaAssets/vector-5.svg"
              />
              <img
                className="w-[25px] h-[33px] left-11 absolute top-0"
                alt="Vector"
                src="/figmaAssets/vector-6.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}