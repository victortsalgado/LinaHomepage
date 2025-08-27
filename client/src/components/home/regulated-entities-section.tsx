import { Button } from "@/components/ui/button";
import { Shield, Code, Smartphone, BarChart, Headphones, Settings, Building } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function RegulatedEntitiesSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal<HTMLDivElement>();

  const features = [
    {
      icon: Shield,
      title: "Gestão de Consentimentos",
      description: "Governança e rastreabilidade total de todo o ciclo de consentimentos."
    },
    {
      icon: Code,
      title: "Plataforma de APIs (Fases 1 a 4)",
      description: "Integração completa e conforme o Bacen, para dados e pagamentos."
    },
    {
      icon: Smartphone,
      title: "Jornada Sem Redirecionamento | JSR",
      description: "PIX 2.0 com biometria e aproximação, certificado FIDO2."
    },
    {
      icon: BarChart,
      title: "Monitoração ativa e contínua",
      description: "Indicadores em tempo real e resposta imediata a instabilidades."
    },
    {
      icon: Headphones,
      title: "Consultoria técnica e suporte 24×7",
      description: "Especialistas para homologação, produção e SLAs regulatórios."
    },
    {
      icon: Settings,
      title: "Servidores de Autorização FAPI OP/RP",
      description: "Autenticação robusta com padrões internacionais de segurança."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 gradient-dark text-white relative overflow-hidden"
      data-testid="section-regulated-entities"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-lina-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-lina-cyan rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={`space-y-8 ${contentVisible ? 'scroll-reveal-slide-right' : 'scroll-reveal-hidden'}`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-lina-cyan rounded-xl flex items-center justify-center">
                <Building className="text-lina-dark" size={24} />
              </div>
              <h2 
                className="text-4xl font-bold"
                data-testid="heading-regulated-entities-title"
              >
                Entidades Reguladas
              </h2>
            </div>
            
            <p 
              className="text-xl text-gray-200"
              data-testid="text-regulated-entities-description"
            >
              A única infraestrutura no Brasil capaz de levar sua operação Open do sandbox à escala, com segurança e conformidade inigualáveis.
            </p>
            
            <div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              data-testid="card-institutions-stat"
            >
              <div className="text-3xl font-bold text-lina-cyan mb-2">50+</div>
              <p className="text-gray-300">
                Instituições já aceleraram sua entrada no Open com a LINA, ganhando agilidade, governança total e suporte especializado.
              </p>
            </div>
            
            <Button 
              className="bg-lina-cyan text-lina-dark px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              data-testid="button-learn-solutions"
            >
              Conheça nossas soluções
            </Button>
          </div>
          
          {/* Features List */}
          <div 
            ref={featuresRef}
            className="space-y-6"
          >
            <h3 
              className="text-2xl font-bold mb-8"
              data-testid="heading-open-finance-title"
            >
              Open Finance e Insurance, do sandbox à escala
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex items-start space-x-4 bg-white/5 p-4 rounded-xl ${featuresVisible ? `scroll-reveal-slide-left scroll-reveal-stagger-${(index % 5) + 1}` : 'scroll-reveal-hidden'}`}
                  data-testid={`card-regulated-feature-${index}`}
                >
                  <div className="w-8 h-8 bg-lina-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-lina-dark text-sm" size={16} />
                  </div>
                  <div>
                    <h4 
                      className="font-semibold mb-1"
                      data-testid={`text-regulated-feature-title-${index}`}
                    >
                      {feature.title}
                    </h4>
                    <p 
                      className="text-gray-300 text-sm"
                      data-testid={`text-regulated-feature-description-${index}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
