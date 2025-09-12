import { Button } from "@/components/ui/button";
import { Shield, Code, Smartphone, BarChart, Headphones, Settings } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";

export default function RegulatedEntitiesSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();

  // Features list with corresponding icons
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
      className="pt-24 md:pt-32 lg:pt-40 pb-8 bg-white/40 text-lina-dark relative overflow-hidden"
      data-testid="section-regulated-entities"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full blur-3xl" style={{ background: 'var(--lina-cyan)' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full blur-2xl" style={{ background: 'var(--lina-cyan)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full blur-3xl opacity-3" style={{ background: 'var(--lina-cyan)' }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem] relative z-10 mt-[-52px] mb-[-52px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-[0px] mb-[0px] pt-[-85px] pb-[-85px]">
          {/* Content Column (Left) - Title, Description & Graph */}
          <div 
            ref={contentRef}
            className={`${contentVisible ? 'scroll-reveal-slide-right' : 'scroll-reveal-hidden'}`}
          >
            {/* Main Title */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-lexend text-lina-dark"
              data-testid="heading-regulated-entities-title"
            >
              <span className="whitespace-nowrap bg-gradient-to-r from-[#00857F] to-[#2EC9BC] bg-clip-text text-transparent">Infraestrutura & Conectividade</span><br />
              <span className="whitespace-nowrap">Soluções de conformidade para</span><br />
              <span className="whitespace-nowrap">entidades reguladas</span>
            </h2>
            
            {/* Description */}
            <div 
              className="text-xl text-gray-700 leading-relaxed space-y-4 mt-[99px] mb-[99px]"
              data-testid="text-regulated-entities-description"
            >
              <p>
                Tecnologia 100% proprietária com foco em performance e conformidade regulatória.
              </p>
              <p>
                Certificamos e homologamos mais de 50 instituições financeiras no Open Finance Brasil, com módulos e serviços sob medida para:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Transmissores e Receptores de Dados</li>
                <li>• Detentores de Contas</li>
                <li>• Iniciadores de Pagamentos - ITP</li>
              </ul>
            </div>

          </div>
          
          {/* Features Column (Right) - Features List */}
          <div className={`space-y-4 self-start ${contentVisible ? 'scroll-reveal-slide-left' : 'scroll-reveal-hidden'} pl-[58px] pr-[58px] ml-[0px] mr-[0px] mt-[200.5px] mb-[200.5px]`}>
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="flex items-start space-x-4 bg-white p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={contentVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                whileHover={{ y: -2 }}
                data-testid={`card-regulated-feature-${index}`}
              >
                <div 
                  className="w-10 h-10 bg-[#2ec9bc] rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <feature.icon 
                    className="text-white" 
                    size={20}
                  />
                </div>
                <div>
                  <h4 
                    className="font-semibold mb-1 text-lina-dark"
                    data-testid={`text-regulated-feature-title-${index}`}
                  >
                    {feature.title}
                  </h4>
                  <p 
                    className="text-gray-700 text-sm"
                    data-testid={`text-regulated-feature-description-${index}`}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Centered Text Section - Full Width */}
        <div className="flex justify-center pt-0 mt-[-113px] mb-[-113px]">
          <div className="space-y-4 max-w-2xl text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              <span className="font-bold">Tecnologia, performance, segurança</span> e o nível de<br />
              suporte técnico eoperacional que o ecossistema exige!
            </p>
            
          </div>
        </div>
        
        {/* CTA Button - Full Width */}
        <div className="text-center mt-[126px] mb-[126px] pt-[7px] pb-[7px]">
          <Button 
            variant="light-bg"
            className="px-8 font-semibold"
            data-testid="button-learn-more"
          >
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  );
}