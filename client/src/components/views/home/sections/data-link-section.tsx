import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import dataLinkImage from "../../../../assets/data-link-image.png";
import datalinkAnimation from "../../../../assets/datalink-animation.gif";

export default function DataLinkSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();

  const features = [
    {
      title: "Contas bancárias",
      description: "Saldo, extrato, limite e transações"
    },
    {
      title: "Operações de crédito",
      description: "Adiantamento a depositante e direitos creditórios"
    },
    {
      title: "Dados cadastrais",
      description: "Pessoa física e jurídica"
    },
    {
      title: "Cartões de crédito",
      description: "Faturas e lançamentos, limites contratados, utilizados e disponíveis"
    },
    {
      title: "Investimentos",
      description: "Renda fixa e variável, títulos públicos federais e fundos de investimento"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-gray-50 min-h-screen flex items-center"
      data-testid="section-data-link"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        {/* Block Card Layout */}
        <div className="bg-gradient-to-br from-white/80 via-teal-50/60 to-cyan-100/50 rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm min-h-[500px]">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Content */}
            <div 
              ref={contentRef}
              className={`p-16 lg:p-24 ${contentVisible ? 'scroll-reveal-slide-right' : 'scroll-reveal-hidden'}`}
            >
              {/* Title with gradient highlight */}
              <Heading
                level="h2"
                size="lg"
                className="text-gray-800 mb-6"
                gradientWords={['dados financeiros']}
                data-testid="heading-data-link-title"
              >
                Integre dados financeiros<br />
                para decisões e<br />
                processos inteligentes
              </Heading>
              
              {/* Subtitle with bold parts */}
              <p 
                className="text-lg text-gray-700 mb-8 leading-relaxed"
                data-testid="text-data-link-description"
              >
                <span className="font-bold">Conecte contas bancárias em tempo real, diretamente do Open Finance</span>, conectando transações, saldos, limites, contratos de crédito, cartões, investimentos e muito mais!
              </p>
              
              {/* Bullet Points List */}
              <div className="relative space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="relative"
                    data-testid={`item-feature-${index}`}
                  >
                    
                    {/* Bullet Point */}
                    <div 
                      className={`flex items-start gap-4 scroll-reveal-hidden ${
                        contentVisible 
                          ? 'scroll-reveal-scale-in'
                          : ''
                      }`}
                      style={{
                        animationDelay: index === 0 ? '0.1s' : index === 1 ? '0.8s' : index === 2 ? '1.6s' : index === 3 ? '2.4s' : '3.2s'
                      }}
                    >
                      <div className="relative z-10 mt-2 flex-shrink-0">
                        <div className="w-4 h-4 bg-[#2ec9bc] rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <h3 
                          className="font-bold mb-1 text-base text-[#006666]"
                          data-testid={`text-feature-title-${index}`}
                        >
                          {feature.title}
                        </h3>
                        <p 
                          className="text-gray-700 text-sm leading-relaxed"
                          data-testid={`text-feature-description-${index}`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="light-bg"
                className="px-6 py-2 flex items-center space-x-2"
                data-testid="button-learn-data-link"
              >
                <span>Conheça o Data Link</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Image */}
            <div 
              ref={imageRef}
              className={`relative p-16 lg:p-24 ${imageVisible ? 'scroll-reveal-slide-left' : 'scroll-reveal-hidden'}`}
            >
              
              {/* Data Link illustration */}
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src={dataLinkImage}
                    alt="Professional woman with Data Link interface" 
                    className="w-full max-w-md object-contain mt-[-5px] mb-[-5px] ml-[0px] mr-[0px] pl-[2px] pr-[2px]"
                    data-testid="img-data-link-main"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
