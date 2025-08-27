import { Button } from "@/components/ui/button";
import { University, CreditCard, TrendingUp, UserCheck, Database } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import dataLinkImage from "../../assets/data-link-image.png";
import datalinkAnimation from "../../assets/datalink-animation.gif";

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
      className="py-20 bg-gray-50"
      data-testid="section-data-link"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Block Card Layout */}
        <div className="bg-gradient-to-br from-white via-teal-50 to-cyan-100 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Content */}
            <div 
              ref={contentRef}
              className={`p-8 lg:p-12 ${contentVisible ? 'scroll-reveal-slide-right' : 'scroll-reveal-hidden'}`}
            >
              {/* Title with gradient highlight */}
              <h2 
                className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                data-testid="heading-data-link-title"
              >
                <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                  Integre dados financeiros
                </span>
                <br />
                <span className="text-gray-800">
                  para decisões e processos inteligentes
                </span>
              </h2>
              
              {/* Subtitle with bold parts */}
              <p 
                className="text-lg text-gray-700 mb-8 leading-relaxed"
                data-testid="text-data-link-description"
              >
                <span className="font-bold">Conecte dados financeiros em tempo real, diretamente do Open Finance</span>, conectando transações, saldos, limites, contratos de crédito, cartões, investimentos e muito mais!
              </p>
              
              {/* Bullet Points List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`flex items-start gap-4 ${contentVisible ? `scroll-reveal-scale-in scroll-reveal-stagger-${(index % 5) + 1}` : 'scroll-reveal-hidden'}`}
                    data-testid={`item-feature-${index}`}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 
                        className="font-bold text-gray-800 mb-1"
                        data-testid={`text-feature-title-${index}`}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="text-gray-600 text-sm"
                        data-testid={`text-feature-description-${index}`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                className="gradient-lina text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                data-testid="button-learn-data-link"
              >
                Conheça o Data Link
              </Button>
            </div>
            
            {/* Image */}
            <div 
              ref={imageRef}
              className={`relative p-8 lg:p-12 ${imageVisible ? 'scroll-reveal-slide-left' : 'scroll-reveal-hidden'}`}
            >
              {/* Modern geometric elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl opacity-20"></div>
              <div className="absolute bottom-8 left-8 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full opacity-30"></div>
              
              {/* Data Link illustration */}
              <div className="flex justify-center relative">
                <img 
                  src={dataLinkImage}
                  alt="Professional woman with Data Link interface" 
                  className="w-full max-w-md object-contain mt-[-5px] mb-[-5px] ml-[0px] mr-[0px] pl-[2px] pr-[2px]"
                  data-testid="img-data-link-main"
                />
                
                {/* Animated DataLink logo positioned over the turquoise square */}
                <div className="absolute top-[12%] right-[8%] w-32 h-32 lg:w-40 lg:h-40">
                  <img 
                    src={datalinkAnimation}
                    alt="DataLink animated logo" 
                    className="w-full h-full object-cover rounded-xl pl-[0px] pr-[0px] ml-[-97px] mr-[-97px] mt-[-34px] mb-[-34px]"
                    data-testid="img-datalink-animation"
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
