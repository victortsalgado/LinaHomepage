import { Button } from "@/components/ui/button";
import { University, CreditCard, TrendingUp, UserCheck, Database, ArrowRight } from "lucide-react";
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
      description: "Saldo, extrato, limite e transações",
      icon: Database
    },
    {
      title: "Operações de crédito",
      description: "Adiantamento a depositante e direitos creditórios",
      icon: TrendingUp
    },
    {
      title: "Dados cadastrais",
      description: "Pessoa física e jurídica",
      icon: UserCheck
    },
    {
      title: "Cartões de crédito",
      description: "Faturas e lançamentos, limites contratados, utilizados e disponíveis",
      icon: CreditCard
    },
    {
      title: "Investimentos",
      description: "Renda fixa e variável, títulos públicos federais e fundos de investimento",
      icon: University
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-6 bg-gray-50"
      data-testid="section-data-link"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Block Card Layout */}
        <div className="bg-gradient-to-br from-white/80 via-teal-50/60 to-cyan-100/50 rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm min-h-[500px]">
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
                <span className="text-gray-800 font-medium">
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
              <div className="relative space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="relative"
                    data-testid={`item-feature-${index}`}
                  >
                    {/* Vertical connecting line appears after this bullet point */}
                    {index < features.length - 1 && (
                      <div 
                        className={`absolute left-2 top-4 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-400 opacity-0 ${
                          contentVisible 
                            ? `scroll-reveal-line-stagger-${index + 1}` 
                            : ''
                        }`}
                        style={{
                          transformOrigin: 'top',
                          height: 'calc(100% + 1.5rem)',
                          transform: 'scaleY(0)'
                        }}
                      ></div>
                    )}
                    
                    {/* Icon */}
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
                      <div className="relative z-10 mt-1 flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-[#2ec9bc]" />
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
                className="bg-[#2ec9bc] border border-[#2ec9bc] text-white hover:bg-transparent hover:text-[#2ec9bc] px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
                data-testid="button-learn-data-link"
              >
                <span>Conheça o Data Link</span>
                <ArrowRight className="w-4 h-4" />
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
                    className="w-full h-full object-cover rounded-xl pl-[0px] pr-[0px] ml-[-62px] mr-[-62px] mt-[-77px] mb-[-77px]"
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
