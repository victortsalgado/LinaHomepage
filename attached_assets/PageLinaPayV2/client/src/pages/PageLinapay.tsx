import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const featureCards = [
  {
    icon: "/figmaAssets/icones-com-efeito.svg",
    title: "Pix por biometria no e-commerce",
    description:
      "Autenticação facial ou digital direto no check-out, sem redirecionamento para o app do banco.",
  },
  {
    icon: "/figmaAssets/icones-com-efeito-1.svg",
    title: "Pix por aproximação em carteiras digitais",
    description:
      "Pagamentos via NFC com celulares e wearables, como já fazemos com cartões físicos.",
  },
  {
    icon: "/figmaAssets/icones-com-efeito-4.svg",
    title: "Menor custo por transação do mercado",
    description:
      "Reduza drasticamente os custos com taxas de boletos e cartões, sem perder o controle dos pagamentos.",
  },
  {
    icon: "/figmaAssets/icones-com-efeito-2.svg",
    title: "Modelo comercial flexível e escalável",
    description:
      "Adapte o uso do Lina Pay ao crescimento do seu negócio, com condições que acompanham sua operação e necessidades técnicas.",
  },
  {
    icon: "/figmaAssets/icones-com-efeito-3.svg",
    title: "Integração simplificada e rápida com APIs",
    description:
      "Tempo de homologação otimizado, com suporte dedicado e documentação robusta.",
  },
  {
    icon: "/figmaAssets/icones-com-efeito-5.svg",
    title: "Banco Central e certificado na JSR Open Finance",
    description:
      "Segurança regulatória e confiança técnica, pronto para escalar desde o primeiro dia.",
  },
];

const productFeatures = [
  {
    icon: "/figmaAssets/icon-card-4.svg",
    title: "Pix por biometria",
    description:
      "Pagamentos são autorizados com biometria, direto no check-out do site. Traz segurança e fluidez para o e-commerce, sem quebra na jornada.",
  },
  {
    icon: "/figmaAssets/icon-card.svg",
    title: "Pix por aproximação",
    description:
      "Permite pagamentos presenciais com um simples toque, via NFC. O cliente não precisa abrir o app do banco nem digitar senha.",
  },
  {
    icon: "/figmaAssets/icon-card-3.svg",
    title: "Pix instantâneo",
    description:
      "O pagamento acontece no momento da compra e o valor é transferido imediatamente para a conta de quem vende, sem intermediários.",
  },
  {
    icon: "/figmaAssets/icon-card-2.svg",
    title: "Pix agendado",
    description:
      "O cliente escolhe a data do pagamento, e o valor é transferido automaticamente. Mais controle e zero esquecimentos.",
  },
  {
    icon: "/figmaAssets/icon-card-1.svg",
    title: "Pix recorrente",
    description:
      "Automatiza cobranças com valores e datas fixas, ideal para serviços de assinatura. Reduz a inadimplência e garante previsibilidade de receita.",
  },
  {
    icon: "/figmaAssets/icon-card-5.svg",
    title: "Pix automático",
    description:
      "Ideal para contas recorrentes com valor variável. O pagamento ocorre automaticamente se estiver dentro dos limites definidos pelo cliente. É o DDA turbinado, com muito mais liberdade.",
  },
];

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

export const PageLinapay = (): JSX.Element => {
  return (
    <div className="bg-white grid justify-items-center w-screen">
      <div className="bg-white w-full max-w-[1440px]">
        <div className="relative">
          {/* Hero Section */}
          <section className="w-full h-[820px] rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(251,250,250,1)_0%,rgba(152,216,211,1)_100%)] relative">
            <div className="flex justify-between items-start px-[252px] pt-[189px]">
              <div className="flex-1 max-w-[456px]">
                <div className="w-[188px] h-[34px] mb-[31px]">
                  <img
                    className="w-[184px] h-[33px]"
                    alt="Camada"
                    src="/figmaAssets/camada-1.svg"
                  />
                </div>

                <h1 className="[font-family:'Lexend',Helvetica] font-medium text-[40px] leading-[56px] mb-6">
                  <span className="text-[#606060]">
                    Transforme a experiência de compra e{" "}
                  </span>
                  <span className="text-[#0ab5aa]">
                    reduza custos com meios de pagamento
                  </span>
                </h1>

                <p className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base leading-6 mb-10">
                  Com o Pix por biometria, você elimina fricções no checkout,
                  impulsiona a adoção do Pix nas compras online, e se livra de
                  vez das taxas com cartões e boletos
                </p>

                <Button className="w-[260px] h-auto px-8 py-4 bg-[#0ab5aa] rounded-[80px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base">
                  Falar com um especialista
                </Button>
              </div>

              {/* Contact Form */}
              <Card className="w-[360px] h-[693px] bg-[#003a38] rounded-2xl shadow-[4px_4px_8px_#0ab5aa1a] border-0">
                <CardContent className="p-6 pt-8">
                  <div className="text-center mb-6">
                    <h3 className="[font-family:'Lexend',Helvetica] font-medium text-white text-base mb-2">
                      Fale com um especialista hoje mesmo.
                    </h3>
                    <p className="[font-family:'Lexend',Helvetica] font-light text-white text-xs">
                      Não se preocupe, seus dados estarão sempre seguros
                      conosco.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label className="[font-family:'Lexend',Helvetica] font-normal text-white text-[13px]">
                        Nome completo <span className="text-white">*</span>
                      </Label>
                      <Input
                        placeholder="Digite seu nome"
                        className="bg-white border-[#cbcccc] [font-family:'Lexend',Helvetica] font-normal text-fontstextcolor text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="[font-family:'Lexend',Helvetica] font-normal text-white text-[13px]">
                        E-mail corporativo <span className="text-white">*</span>
                      </Label>
                      <Input
                        placeholder="Digite seu e-mail corporativo"
                        className="bg-white border-[#cbcccc] [font-family:'Lexend',Helvetica] font-normal text-fontstextcolor text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="[font-family:'Lexend',Helvetica] font-normal text-white text-[13px]">
                        Telefone <span className="text-white">*</span>
                      </Label>
                      <Input
                        placeholder="DDD + Número"
                        className="bg-white border-[#cbcccc] [font-family:'Lexend',Helvetica] font-normal text-fontstextcolor text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="[font-family:'Lexend',Helvetica] font-normal text-white text-[13px]">
                        Empresa <span className="text-white">*</span>
                      </Label>
                      <Input
                        placeholder="Nome da sua empresa"
                        className="bg-white border-[#cbcccc] [font-family:'Lexend',Helvetica] font-normal text-fontstextcolor text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-[13px]">
                        Qual o Faturamento Anual da Empresa?
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white border-[#cbcccc]">
                          <SelectValue placeholder="Selecione aqui" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ate-5mi">
                            Até R$ 5 milhões
                          </SelectItem>
                          <SelectItem value="5-10mi">
                            entre R$ 5 milhões e R$ 10 milhões
                          </SelectItem>
                          <SelectItem value="10-50mi">
                            entre R$ 10 milhões e R$ 50 milhões
                          </SelectItem>
                          <SelectItem value="acima-50mi">
                            acima de R$ 50 milhões
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="[font-family:'Inter',Helvetica] font-normal text-white text-[13px]">
                        Label
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white border-[#cbcccc]">
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

                    <Button className="w-full h-auto px-8 py-4 bg-[#0ab5aa] rounded-[80px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base">
                      Falar com um especialista
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What is Lina Pay Section */}
          <section className="w-full h-[737px] bg-[#f8f3f3] rounded-[0px_0px_40px_40px] relative">
            <div className="flex justify-between items-start px-[252px] pt-[144px]">
              <div className="flex-1 max-w-[360px]">
                <h2 className="[font-family:'Lexend',Helvetica] font-medium text-[40px] leading-[48px] mb-8">
                  <span className="text-[#606060]">O que é o </span>
                  <span className="text-[#0ab5aa]">Lina Pay</span>
                </h2>

                <p className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base leading-6 mb-10">
                  O Lina Pay é um meio de pagamento via Pix projetado para dar
                  fluidez, segurança e controle à jornada de pagamento no
                  e-commerce, marketplaces, carteiras digitais e nas
                  transferências entre contas.
                  <br />
                  <br />
                  Com ele, o consumidor paga com um toque, por reconhecimento
                  facial ou biometria digital — sem abrir o app do banco, sem QR
                  Code, sem interrupções. Para quem vende, é a oportunidade de
                  reduzir custos com boletos e cartões, automatizar cobranças e
                  escalar com previsibilidade, com uma solução homologada pelo
                  Banco Central e conectada a mais de 100 instituições
                  financeiras.
                </p>

                <Button className="w-[260px] h-auto px-8 py-4 bg-[#0ab5aa] rounded-[80px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base">
                  Descubra como funciona
                </Button>
              </div>

              <div className="flex-1 flex justify-end">
                <img
                  className="w-[638px] h-[455px] object-cover"
                  alt="Woman"
                  src="/figmaAssets/woman-4.png"
                />
              </div>
            </div>

            <img
              className="absolute w-[34px] h-[34px] top-[205px] left-[420px]"
              alt="Component"
              src="/figmaAssets/component-5.svg"
            />
          </section>

          {/* Testimonials Section */}
          <section className="w-full h-[638px] rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(251,250,250,1)_0%,rgba(152,216,211,1)_100%)] relative">
            <div className="px-[252px] pt-[160px]">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="[font-family:'Lexend',Helvetica] font-medium text-[40px] leading-[56px] mb-8">
                    <span className="text-[#606060]">Resultados </span>
                    <span className="text-[#0ab5aa]">validados </span>
                    <span className="text-[#606060]">por quem já usa</span>
                  </h2>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex -space-x-2">
                      <img
                        className="w-10 h-10 rounded-full"
                        alt="Client"
                        src="/figmaAssets/client.png"
                      />
                      <img
                        className="w-10 h-10 rounded-full"
                        alt="Client"
                        src="/figmaAssets/client-1.png"
                      />
                      <img
                        className="w-10 h-10 rounded-full"
                        alt="Client"
                        src="/figmaAssets/client-2.png"
                      />
                    </div>
                  </div>

                  <Button className="w-[260px] h-auto px-8 py-4 bg-[#0ab5aa] rounded-[80px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base">
                    Descubra como funciona
                  </Button>
                </div>

                <Card className="w-[552px] h-[367px] bg-[#003a38] rounded-[32px] shadow-[4px_4px_8px_#0ab5aa1a] border-0">
                  <CardContent className="p-[55px]">
                    <blockquote className="[font-family:'Lexend',Helvetica] font-light text-white text-lg leading-6 mb-8">
                      "A solução de Pix via Open Finance da Lina foi fundamental
                      para o sucesso da jornada de investimento em previdência
                      via WhatsApp da Brasilprev. Com ela os clientes podem
                      investir a partir de qualquer banco, de forma simples e
                      segura. A Lina contribuiu diretamente para solucionar o
                      desafio de levar a previdência para cada vez mais
                      brasileiros."
                    </blockquote>

                    <div className="flex items-center gap-3">
                      <img
                        className="w-10 h-10"
                        alt="Client"
                        src="/figmaAssets/client-3.svg"
                      />
                      <div>
                        <div className="[font-family:'Inter',Helvetica] font-bold text-white text-base">
                          Leonardo Rainhos
                        </div>
                        <div className="[font-family:'Inter',Helvetica] font-light text-white text-xs">
                          Gerente de Produtos da Brasilprev
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="absolute top-[127px] left-[492px] bg-[#0ab5aa] rounded-[17px] w-[34px] h-[34px]">
              <div className="relative w-[17px] h-4 top-[9px] left-[9px] bg-[url(/figmaAssets/ativo-1-1.png)] bg-cover bg-[50%_50%]" />
            </div>

            <img
              className="absolute w-[89px] h-[66px] top-[-36px] left-[1045px]"
              alt="Image"
              src="/figmaAssets/-.svg"
            />
          </section>

          {/* Logos Section */}
          <section className="w-full h-[595px] bg-[#f8f3f3] rounded-[0px_0px_40px_40px] relative">
            <img
              className="absolute w-[936px] h-[45px] top-[390px] left-[252px] object-cover"
              alt="Logos"
              src="/figmaAssets/logos-1.png"
            />
          </section>

          {/* Features Grid Section */}
          <section className="w-full bg-white rounded-[0px_0px_40px_40px] py-[115px] relative">
            <div className="px-[252px]">
              <div className="text-center mb-16">
                <h2 className="[font-family:'Lexend',Helvetica] font-medium text-[40px] leading-[56px] mb-4">
                  <span className="text-[#606060]">
                    O que torna o Lina Pay{" "}
                  </span>
                  <span className="text-[#0ab5aa]">diferente</span>
                </h2>
                <img
                  className="inline-block w-[34px] h-[34px] ml-4"
                  alt="Component"
                  src="/figmaAssets/component-5.svg"
                />
              </div>

              <div className="grid grid-cols-3 gap-6">
                {featureCards.map((feature, index) => (
                  <Card
                    key={index}
                    className="w-[360px] h-[308px] bg-white rounded-2xl shadow-[4px_4px_8px_#0ab5aa1a]"
                  >
                    <CardContent className="p-6 text-center">
                      <img
                        className="w-[65px] h-[65px] mx-auto mb-4"
                        alt="Icon"
                        src={feature.icon}
                      />
                      <h3 className="[font-family:'Lexend',Helvetica] font-bold text-[#606060] text-base mb-4">
                        {feature.title}
                      </h3>
                      <p className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base leading-6">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button className="w-[388px] h-auto px-8 py-4 bg-[#0ab5aa] rounded-[80px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base">
                  Veja nossos diferenciais na prática
                </Button>
              </div>
            </div>
          </section>

          {/* Product Features Section */}
          <section className="w-full bg-white py-[115px] relative">
            <div className="px-[252px]">
              <div className="text-center mb-16">
                <h2 className="[font-family:'Lexend',Helvetica] font-medium text-[40px] leading-[56px] mb-4">
                  <span className="text-[#606060]">
                    Funcionalidades que
                    <br />
                  </span>
                  <span className="text-[#0ab5aa]">resolvem problemas </span>
                  <span className="text-[#606060]">reais</span>
                </h2>
                <div className="flex justify-center">
                  <div className="w-[34px] h-[34px] bg-[#0ab5aa] rounded-[17px] flex items-center justify-center">
                    <img
                      className="w-[15px] h-3.5 object-cover"
                      alt="Camada"
                      src="/figmaAssets/camada-1-1.png"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {productFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className={`w-[360px] ${index === 5 ? "h-[277px]" : "h-[254px]"} bg-white rounded-2xl shadow-[4px_4px_8px_#0ab5aa1a] relative`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <img
                          className="w-10 h-10"
                          alt="Icon card"
                          src={feature.icon}
                        />
                        <h3 className="[font-family:'Lexend',Helvetica] font-normal text-[#003a38] text-2xl flex-1 ml-4">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base leading-6">
                        {feature.description}
                      </p>
                      <img
                        className="absolute w-[34px] h-[34px] bottom-6 right-6"
                        alt="Button icon"
                        src="/figmaAssets/button-icon.svg"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

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
                  <p className="[font-family:'Inter',Helvetica] font-bold text-text-color-branco text-base">
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
            className="w-full h-[587px] rounded-[40px_40px_0px_0px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(152,216,211,1)_
100%)] relative"
          >
            <div className="text-center px-[444px] pt-[249px]">
              <h2 className="[font-family:'Lexend',Helvetica] font-medium text-[#606060] text-[40px] leading-[56px] mb-8">
                Vamos simplificar e reduzir o custo dos pagamentos?
              </h2>

              <p className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base leading-6 mb-10">
                Fale com um de nossos especialistas e comece agora a oferecer o
                Pix com menos atrito, mais segurança e o menor custo do mercado.
              </p>

              <Button className="w-[319px] h-auto px-8 py-4 bg-[#0ab5aa] rounded-[80px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base">
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
  );
};
