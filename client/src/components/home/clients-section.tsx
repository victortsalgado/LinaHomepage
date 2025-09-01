import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import brasilprevLogo from "@/assets/brasilprev.png";
import bradescoSegurosLogo from "@/assets/bradesco-seguros.png";
import safraLogo from "@/assets/safra.png";
import sicoobLogo from "@/assets/sicoob.png";
import caixaLogo from "@/assets/caixa.png";
import stoneLogo from "@/assets/stone.png";
import icatuSegurosLogo from "@/assets/icatu-seguros.png";
import hdiSegurosLogo from "@/assets/hdi-seguros.png";
import cloudwalkLogo from "@/assets/cloudwalk.png";

export default function ClientsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();

  // Client logos data with real brand logos
  const clients = [
    {
      name: "BrasilPrev",
      logo: brasilprevLogo
    },
    {
      name: "Bradesco Seguros", 
      logo: bradescoSegurosLogo
    },
    {
      name: "Safra",
      logo: safraLogo
    },
    {
      name: "Sicoob",
      logo: sicoobLogo
    },
    {
      name: "Caixa",
      logo: caixaLogo
    },
    {
      name: "Stone",
      logo: stoneLogo
    },
    {
      name: "Icatu Seguros",
      logo: icatuSegurosLogo
    },
    {
      name: "CloudWalk",
      logo: cloudwalkLogo
    },
    {
      name: "HDI Seguros",
      logo: hdiSegurosLogo
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`w-full bg-gray-50 py-16 ${sectionVisible ? 'scroll-reveal-fade-in' : 'scroll-reveal-hidden'}`}
      data-testid="section-clients"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            data-testid="heading-clients-title"
          >
            Confiado pelas maiores instituições do mercado
          </h2>
        </div>
        
        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <InfiniteSlider
            duration={15}
            gap={100}
            className="py-12"
          >
            {clients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                className="flex items-center justify-center min-w-[220px]"
                data-testid={`logo-client-${index}`}
              >
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 cursor-pointer"
                  data-testid={`img-logo-${client.name.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
            ))}
          </InfiniteSlider>
          
        </div>
      </div>
    </section>
  );
}
