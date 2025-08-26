import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export const PageDatalink = (): JSX.Element => {
  const backgroundImages = [
    {
      className: "absolute w-[1440px] h-[236px] top-[4292px] left-0",
      src: "/figmaAssets/rectangle-114.png",
      alt: "Rectangle",
    },
    {
      className: "absolute w-[1440px] h-[587px] top-[3780px] left-0",
      src: "/figmaAssets/rectangle-113.png",
      alt: "Rectangle",
    },
    {
      className: "absolute w-[1440px] h-[961px] top-[3001px] left-0",
      src: "/figmaAssets/rectangle-115.png",
      alt: "Rectangle",
    },
    {
      className: "absolute w-[1440px] h-[787px] top-[2330px] left-0",
      src: "/figmaAssets/rectangle-105.png",
      alt: "Rectangle",
    },
    {
      className: "absolute w-[1344px] h-[880px] top-[1556px] left-0",
      src: "/figmaAssets/rectangle-106.png",
      alt: "Rectangle",
    },
    {
      className: "absolute w-[1440px] h-[1110px] top-[531px] left-0",
      src: "/figmaAssets/rectangle-104.png",
      alt: "Rectangle",
    },
    {
      className: "absolute w-[1440px] h-[638px] top-0 left-0",
      src: "/figmaAssets/rectangle-103.png",
      alt: "Rectangle",
    },
  ];

  const featureCards = [
    {
      className: "absolute w-[376px] h-[324px] top-[842px] left-[152px]",
      src: "/figmaAssets/rectangle-91.png",
      iconSrc: "/figmaAssets/icones-com-efeito-3.png",
      iconPosition: "top-[878px] left-[303px]",
      titleSrc:
        "/figmaAssets/dados-banc-rios-e-de-investimento-em-uma--nica-api.png",
      titlePosition: "absolute w-[260px] h-[37px] top-[964px] left-[206px]",
      descSrc:
        "/figmaAssets/-acesse-dados-consolidados-de-pf-e-pj-em-mais-de-50-institui--es.png",
      descPosition: "absolute w-[207px] h-16 top-[1025px] left-[235px]",
    },
    {
      className: "absolute w-[376px] h-[324px] top-[1174px] left-[152px]",
      src: "/figmaAssets/rectangle-100.png",
      iconSrc: "/figmaAssets/icones-com-efeito.png",
      iconPosition: "top-[1210px] left-[303px]",
      titleSrc:
        "/figmaAssets/personaliza--o-e-segmenta--o-em-n-vel-avan-ado.png",
      titlePosition: "absolute w-[252px] h-[41px] top-[1296px] left-[210px]",
      descSrc:
        "/figmaAssets/use-dados-reais-e-atualizados-para-criar-ofertas-sob-medida-e-me.png",
      descPosition: "absolute w-[285px] h-[60px] top-[1357px] left-[193px]",
    },
    {
      className: "absolute w-[376px] h-[324px] top-[842px] left-[536px]",
      src: "/figmaAssets/rectangle-98.png",
      iconSrc: "/figmaAssets/icones-com-efeito-2.png",
      iconPosition: "top-[878px] left-[687px]",
      titleSrc: "/figmaAssets/integra--o-r-pida-com-apis-padronizadas.png",
      titlePosition: "absolute w-[189px] h-10 top-[964px] left-[625px]",
      descSrc:
        "/figmaAssets/reduza-o-tempo-de-integra--o-com-documenta--o-robusta-e-suporte-.png",
      descPosition: "absolute w-[189px] h-[87px] top-[1025px] left-[625px]",
    },
    {
      className: "absolute w-[376px] h-[324px] top-[1174px] left-[536px]",
      src: "/figmaAssets/rectangle-101.png",
      iconSrc: "/figmaAssets/icones-com-efeito-1.png",
      iconPosition: "top-[1210px] left-[687px]",
      titleSrc: "/figmaAssets/insights-acion-veis-com-base-em-dados-reais.png",
      titlePosition: "absolute w-[197px] h-[37px] top-[1292px] left-[622px]",
      descSrc:
        "/figmaAssets/mais-de-2-mil-pontos-de-dados-para-alimentar-seus-sistemas-de-bi.png",
      descPosition: "absolute w-[212px] h-[63px] top-[1357px] left-[614px]",
    },
    {
      className: "absolute w-[376px] h-[324px] top-[842px] left-[920px]",
      src: "/figmaAssets/rectangle-99.png",
      iconSrc: "/figmaAssets/icones-com-efeito-4.png",
      iconPosition: "top-[878px] left-[1071px]",
      titleSrc: "/figmaAssets/seguran-a-e-conformidade-como-padr-o.png",
      titlePosition: "absolute w-[220px] h-10 top-[964px] left-[994px]",
      descSrc:
        "/figmaAssets/tecnologia-em-conformidade-com-open-finance--lgpd-e-homologada-p.png",
      descPosition: "absolute w-[245px] h-16 top-[1025px] left-[981px]",
    },
    {
      className: "absolute w-[376px] h-[324px] top-[1174px] left-[920px]",
      src: "/figmaAssets/rectangle-102.png",
      iconSrc: "/figmaAssets/group-2.svg",
      iconPosition: "top-[1210px] left-[1071px]",
      titleSrc:
        "/figmaAssets/tecnologia-propriet-ria-com-flexibilidade-para-escalar.png",
      titlePosition: "absolute w-[232px] h-10 top-[1298px] left-[988px]",
      descSrc:
        "/figmaAssets/-solu--es-desenvolvidas-pela-lina--sem-depend-ncia-de-terceiros-.png",
      descPosition: "absolute w-[213px] h-[60px] top-[1357px] left-[999px]",
    },
  ];

  const apiCards = [
    {
      position: "top-[1844px] left-[156px]",
      iconSrc: "/figmaAssets/union-6.svg",
      title: "GET/Contas",
      description:
        "Saldo, extrato, limites e transações bancárias. Ideal para análise de crédito, comprovação de renda e conciliação bancária.",
    },
    {
      position: "top-[1844px] left-[540px]",
      iconSrc: "/figmaAssets/union-8.svg",
      title: "GET/Cartões",
      description:
        "Limites, faturas, tipos de crédito e histórico de uso. Perfeito para gestão de risco e recomendação de produtos financeiros.",
    },
    {
      position: "top-[1844px] left-[924px]",
      iconSrc: "/figmaAssets/union-3.svg",
      title: "GET/Crédito",
      description:
        "Informações sobre contratos de empréstimos e financiamentos. Base sólida para modelagem de crédito e prevenção à fraude.",
    },
    {
      position: "top-[2122px] left-[328px]",
      iconSrc: "/figmaAssets/union-2.svg",
      title: "GET/Investimentos",
      description:
        "Dados de posição e movimentação em renda fixa, variável, fundos e tesouro direto. Essencial para carteiras consolidadas e planejamento financeiro.",
    },
    {
      position: "top-[2122px] left-[712px]",
      iconSrc: "/figmaAssets/union-7.svg",
      title: "GET/Cadastral",
      description:
        "Nome, documentos, endereço, contatos e estrutura societária (PJ). Base para KYC, validação de identidade e compliance.",
    },
  ];

  const sectorIcons = [
    {
      position: "top-[3580px] left-[300px]",
      iconSrc: "/figmaAssets/union.svg",
    },
    {
      position: "top-[3735px] left-[300px]",
      iconSrc: "/figmaAssets/union-4.svg",
    },
    {
      position: "top-[3578px] left-[727px]",
      iconSrc: "/figmaAssets/union-5.svg",
    },
    {
      position: "top-[3740px] left-[727px]",
      iconSrc: "/figmaAssets/union-1.svg",
    },
  ];

  const clientAvatars = [
    {
      position: "top-0 left-0",
      src: "/figmaAssets/client.png",
    },
    {
      position: "top-0 left-[30px]",
      src: "/figmaAssets/client-1.png",
    },
    {
      position: "top-0 left-[62px]",
      src: "/figmaAssets/client-2.png",
    },
  ];

  const formFields = [
    {
      label: "Nome completo",
      placeholder: "Digite seu nome",
      required: true,
      position: "top-28",
    },
    {
      label: "E-mail corporativo",
      placeholder: "Digite seu e-mail corporativo",
      required: true,
      position: "top-[196px]",
    },
    {
      label: "Telefone",
      placeholder: "DDD + Número",
      required: true,
      position: "top-[280px]",
    },
    {
      label: "Empresa",
      placeholder: "Nome da sua empresa",
      required: true,
      position: "top-[364px]",
    },
  ];

  const selectOptions1 = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];
  const selectOptions2 = [
    "Até R$ 5 milhões",
    "entre R$ 5 milhões e R$ 10 milhões",
    "entre R$ 10 milhões e R$ 50 milhões",
    "acima de R$ 50 milhões",
    "Option 5",
  ];

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[6118px] relative">
        <div className="absolute w-[1440px] h-[4528px] top-[1590px] left-0">
          {backgroundImages.map((bg, index) => (
            <img
              key={`bg-${index}`}
              className={bg.className}
              alt={bg.alt}
              src={bg.src}
            />
          ))}

          <img
            className="absolute w-[938px] h-[45px] top-[550px] left-[252px] object-cover"
            alt="Logos"
            src="/figmaAssets/logos-1.png"
          />

          <img
            className="absolute w-[547px] h-24 top-[4042px] left-[446px]"
            alt="Vamos juntos"
            src="/figmaAssets/vamos-juntos-transformar-complexidade-em-agilidade-.png"
          />

          <img
            className="absolute w-[410px] h-16 top-[4167px] left-[515px]"
            alt="Fale com um de"
            src="/figmaAssets/fale-com-um-de-nossos-especialistas-e-descubra-como-o-data-link-.png"
          />

          <img
            className="absolute w-[223px] h-[37px] top-[4444px] left-[608px]"
            alt="Element lina open x"
            src="/figmaAssets/--2025-lina-open-x-todos-os-direitos-reservados-.png"
          />

          <Button className="w-[260px] top-[446px] left-[252px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
            <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] ml-[-3.50px] mr-[-3.50px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base tracking-[0] leading-4 whitespace-nowrap">
              Descubra como funciona
            </div>
          </Button>

          <Button className="w-[388px] top-[1539px] left-[526px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
            <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base tracking-[0] leading-4 whitespace-nowrap">
              Veja nossos diferenciais na prática
            </div>
          </Button>

          <Button className="w-[319px] top-[4256px] left-[561px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
            <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base tracking-[0] leading-4 whitespace-nowrap">
              Solicitar demonstração
            </div>
          </Button>

          {featureCards.map((card, index) => (
            <div key={`feature-${index}`}>
              <img className={card.className} alt="Rectangle" src={card.src} />
              <img
                className={`${card.iconPosition} absolute w-[65px] h-[65px]`}
                alt="Icones com efeito"
                src={card.iconSrc}
              />
              <img
                className={card.titlePosition}
                alt="Feature title"
                src={card.titleSrc}
              />
              <img
                className={card.descPosition}
                alt="Feature description"
                src={card.descSrc}
              />
            </div>
          ))}

          <img
            className="absolute w-[174px] h-[15px] top-[181px] left-[253px]"
            alt="Quem usa recomenda"
            src="/figmaAssets/quem-usa--recomenda-.png"
          />

          <Card className="absolute w-[558px] h-[367px] top-[148px] left-[599px] bg-[#003a38] rounded-[32px] shadow-[4px_4px_8px_#0ab5aa1a] border-0">
            <CardContent className="p-0">
              <div className="absolute w-[458px] top-[68px] left-[55px] [font-family:'Lexend',Helvetica] font-light text-white text-lg tracking-[0] leading-6">
                &quot;Temos uma parceria sólida com a Lina. É um parceiro
                estratégico para o Banco Semear, contribuindo com dados,
                soluções de ITP e diferenciais importantes nos nossos meios de
                pagamento. Acreditamos no Open Finance e encontramos na Lina um
                aliado que entende nossas necessidades e entrega soluções sob
                medida.&quot;
              </div>

              <div className="absolute w-[167px] top-[260px] left-[103px] [font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                Ricardo Mendes
              </div>

              <div className="absolute w-[394px] top-[284px] left-[103px] [font-family:'Inter',Helvetica] font-light text-white text-xs tracking-[0] leading-4 whitespace-nowrap">
                Diretor de Tecnologia, Banco Semear
              </div>

              <Avatar className="top-[260px] left-[55px] absolute w-10 h-10">
                <AvatarImage src="/figmaAssets/client-3.svg" alt="Client" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          <div className="absolute w-[102px] h-[19px] top-[382px] left-[258px]">
            <div className="relative h-10">
              {clientAvatars.map((avatar, index) => (
                <Avatar
                  key={`avatar-${index}`}
                  className={`${avatar.position} absolute w-10 h-10`}
                >
                  <AvatarImage src={avatar.src} alt="Client" />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>

          {apiCards.map((card, index) => (
            <Card
              key={`api-${index}`}
              className={`${card.position} absolute w-[360px] h-[254px] bg-white rounded-2xl shadow-[4px_4px_8px_#0ab5aa1a]`}
            >
              <CardContent className="flex flex-col w-[312px] items-start gap-4 relative top-10 left-6 p-0">
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-10 h-10 bg-[#07f4e2] rounded-xl">
                    <div className="relative w-[23px] h-[23px] top-[9px] left-[9px]">
                      <img
                        className="absolute w-[19px] h-[19px] top-0.5 left-0.5"
                        alt="Union"
                        src={card.iconSrc}
                      />
                    </div>
                  </div>

                  <div className="relative w-[264px] h-6">
                    <div className="absolute w-[252px] -top-px left-0 [font-family:'Lexend',Helvetica] font-normal text-[#003a38] text-2xl tracking-[0] leading-6">
                      {card.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-[312px] h-28 mt-[-1.00px] [font-family:'Lexend',Helvetica] font-light text-[#606060] text-base tracking-[0] leading-6">
                    {card.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <img
            className="absolute w-[552px] h-[303px] top-[3199px] left-[252px]"
            alt="Rectangle"
            src="/figmaAssets/rectangle-108.png"
          />

          <img
            className="absolute w-[939px] h-[373px] top-[3526px] left-[252px]"
            alt="Rectangle"
            src="/figmaAssets/rectangle-109.png"
          />

          <img
            className="absolute w-[265px] h-4 top-[3439px] left-[300px]"
            alt="Veja como aplicamos"
            src="/figmaAssets/veja-como-aplicamos-no-seu-setor.png"
          />

          {sectorIcons.map((icon, index) => (
            <div
              key={`sector-${index}`}
              className={`${icon.position} absolute w-14 h-14 bg-[#07f4e2] rounded-xl`}
            >
              <div className="relative w-8 h-8 top-3 left-3">
                <img
                  className="absolute w-[25px] h-[27px] top-[3px] left-[3px]"
                  alt="Union"
                  src={icon.iconSrc}
                />
              </div>
            </div>
          ))}

          <img
            className="top-[3429px] left-[578px] absolute w-[34px] h-[34px]"
            alt="Component"
            src="/figmaAssets/component-2.png"
          />

          <img
            className="absolute w-[636px] h-28 top-[694px] left-[387px]"
            alt="Group"
            src="/figmaAssets/group-21.png"
          />

          <img
            className="absolute w-[744px] h-[97px] top-[1700px] left-[348px]"
            alt="Group"
            src="/figmaAssets/group-18.png"
          />

          <img
            className="absolute w-[89px] h-[66px] top-[124px] left-[1045px]"
            alt="Image"
            src="/figmaAssets/-.png"
          />

          <div className="absolute w-[60px] h-[19px] top-[4407px] left-[690px] overflow-hidden">
            <img
              className="w-0.5 left-[18px] absolute h-[19px] top-0"
              alt="Vector"
              src="/figmaAssets/vector-2.svg"
            />

            <img
              className="w-[15px] left-[45px] absolute h-[19px] top-0"
              alt="Vector"
              src="/figmaAssets/vector-3.svg"
            />

            <img
              className="w-3 left-0 absolute h-[19px] top-0"
              alt="Vector"
              src="/figmaAssets/vector.svg"
            />

            <img
              className="w-[15px] left-[26px] absolute h-[19px] top-0"
              alt="Vector"
              src="/figmaAssets/vector-1.svg"
            />
          </div>

          <img
            className="absolute w-[360px] h-[326px] top-[3176px] left-[831px] object-cover"
            alt="Woman datalink"
            src="/figmaAssets/woman-datalink-1.png"
          />

          <img
            className="absolute w-[788px] h-[467px] top-[2547px] left-[294px]"
            alt="Rectangle"
            src="/figmaAssets/rectangle-112.png"
          />

          <img
            className="absolute w-[370px] h-[147px] top-[2805px] left-[328px]"
            alt="Group"
            src="/figmaAssets/group-24.png"
          />

          <img
            className="absolute w-[370px] h-[124px] top-[2805px] left-[720px]"
            alt="Group"
            src="/figmaAssets/group-23.png"
          />

          <div className="top-[322px] left-[452px] bg-[#0ab5aa] rounded-[17px] absolute w-[34px] h-[34px]">
            <div className="relative w-[17px] h-4 top-[9px] left-[9px] bg-[url(/figmaAssets/ativo-1-1.png)] bg-cover bg-[50%_50%]" />
          </div>

          <img
            className="absolute w-[467px] h-[263px] top-[2507px] left-[683px] object-cover"
            alt="Mockup datalink"
            src="/figmaAssets/mockup-datalink-1.png"
          />
        </div>

        <div className="absolute w-[1440px] h-[1590px] top-0 left-0">
          <img
            className="absolute w-[1440px] h-[847px] top-[743px] left-0"
            alt="Rectangle"
            src="/figmaAssets/rectangle-94.png"
          />

          <img
            className="absolute w-[1440px] h-[820px] top-0 left-0"
            alt="Rectangle"
            src="/figmaAssets/rectangle-95.png"
          />

          <div className="absolute top-[250px] left-[253px] w-[520px]">
            <h1 className="[font-family:'Lexend',Helvetica] font-medium text-[#003a38] text-[40px] tracking-[0] leading-[50px] mb-6">
              Conecte dados bancários em um clique{" "}
              <span className="text-[#0ab5aa">— direto do Open Finance</span>
            </h1>

            <p className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base tracking-[0] leading-6 mb-8">
              Com o Data Link você acessa informações bancárias e de investimentos de clientes PF e PJ de forma segura,
              padronizada e integrada via Open Finance. Tudo com uma única API e em conformidade com a LGPD.
            </p>
          </div>

          <Button className="w-[260px] top-[550px] left-[252px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
            <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] ml-[-9.50px] mr-[-9.50px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base tracking-[0] leading-4 whitespace-nowrap">
              Falar com um especialista
            </div>
          </Button>

          <Card className="absolute w-[364px] h-[693px] top-[71px] left-[828px] bg-[#003a38] rounded-2xl shadow-[4px_4px_8px_#0ab5aa1a] border-0">
            <CardContent className="p-0">
              {formFields.map((field, index) => (
                <div
                  key={`field-${index}`}
                  className={`flex flex-col w-[312px] items-start gap-2 absolute ${field.position} left-6`}
                >
                  <div className="flex h-[15px] items-start gap-0.5 relative self-stretch w-full">
                    <Label className="relative w-fit mt-[-1.00px] [font-family:'Lexend',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                      {field.label}
                    </Label>
                    {field.required && (
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                        *
                      </div>
                    )}
                  </div>

                  <Input
                    className="flex items-start px-3.5 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-md border border-solid border-[#cbcccc]"
                    placeholder={field.placeholder}
                    defaultValue=""
                  />
                </div>
              ))}

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
                    {selectOptions2.map((option, index) => (
                      <SelectItem key={`option2-${index}`} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col w-[312px] h-[68px] items-start gap-0.5 absolute top-[530px] left-6">
                <div className="flex h-[19px] items-start gap-0.5 relative self-stretch w-full">
                  <Label className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
                    Label
                  </Label>
                </div>

                <Select>
                  <SelectTrigger
                    className="flex items-
center px-3.5 py-[13px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-md border border-solid border-[#cbcccc]"
                  >
                    <SelectValue placeholder="Aquisição" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectOptions1.map((option, index) => (
                      <SelectItem key={`option1-${index}`} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-[312px] top-[621px] left-6 h-auto flex items-center justify-center gap-2.5 px-8 py-4 absolute bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
                <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Lexend',Helvetica] font-bold text-text-color-branco text-base tracking-[0] leading-4 whitespace-nowrap">
                  Falar com um especialista
                </div>
              </Button>

              <div className="absolute w-[296px] top-14 left-8 [font-family:'Lexend',Helvetica] font-light text-white text-xs text-center tracking-[0] leading-4">
                Não se preocupe, seus dados estarão sempre seguros conosco.
              </div>

              <div className="absolute w-[306px] top-8 left-[27px] [font-family:'Lexend',Helvetica] font-medium text-white text-base text-center tracking-[-0.32px] leading-6">
                Fale com um especialista hoje mesmo.
              </div>
            </CardContent>
          </Card>

          <div className="absolute top-[884px] left-[38px] w-[1364px] h-[647px] bg-[#f5f5f5] rounded-3xl">
            <div className="absolute top-[100px] left-[253px] w-[520px]">
              <h2 className="[font-family:'Lexend',Helvetica] font-medium text-[#6B7280] text-[40px] tracking-[0] leading-[50px] mb-6">
                A ponte entre sua empresa e o Open Finance, <span className="text-[#0ab5aa]">sem complicação</span>
              </h2>

              <p className="[font-family:'Lexend',Helvetica] font-light text-[#6B7280] text-base tracking-[0] leading-6 mb-8">
                O Data Link é a plataforma de APIs da Lina que permite que empresas de qualquer porte se conectem diretamente aos dados bancários e de investimentos de seus clientes, com segurança, padronização e integração simplificada.
              </p>

              <p className="[font-family:'Lexend',Helvetica] font-light text-[#6B7280] text-base tracking-[0] leading-6 mb-8">
                Com ele, é possível acessar mais de 2 mil pontos de dados de forma estruturada — incluindo extratos, saldos, limites, contratos de crédito, cartões, investimentos e muito mais — tudo via Open Finance, com consentimento do cliente e em conformidade com a LGPD.
              </p>

              <Button className="w-[260px] h-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0ab5aa] rounded-[80px] hover:bg-[#0ab5aa]/90">
                <div className="relative w-fit [font-family:'Lexend',Helvetica] font-bold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                  Descubra como funciona
                </div>
              </Button>
            </div>

            <div className="absolute top-[50px] right-[38px]">
              <img
                className="w-[575px] h-[547px] rounded-2xl object-cover"
                alt="Man datalink"
                src="/figmaAssets/man-datalink-1.png"
              />
            </div>
          </div>

          <div className="absolute w-[201px] h-[30px] top-[183px] left-[252px]">
            <img
              className="absolute w-[99px] h-[30px] top-0 left-0"
              alt="Group"
              src="/figmaAssets/group.png"
            />

            <img
              className="absolute w-[86px] h-[29px] top-px left-[110px]"
              alt="Group"
              src="/figmaAssets/group-1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};