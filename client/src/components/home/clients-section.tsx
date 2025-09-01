import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ClientsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();

  // Client logos data with enhanced brand representations
  const clients = [
    {
      name: "BrasilPrev",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%23E74C3C'%3EBrasilPrev%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Bradesco Seguros", 
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect x='10' y='15' width='30' height='30' fill='%23CC092F' rx='4'/%3E%3Ctext x='50' y='35' font-family='Arial, sans-serif' font-size='14' font-weight='bold' fill='%23CC092F'%3EBradesco Seguros%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Safra",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ccircle cx='30' cy='30' r='15' fill='%232E8B57'/%3E%3Ctext x='55' y='35' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%232E8B57'%3ESafra%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Sicoob",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpath d='M15 30 L30 15 L45 30 L30 45 Z' fill='%23FF6B35'/%3E%3Ctext x='55' y='35' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%23FF6B35'%3ESicoob%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Caixa",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect x='15' y='20' width='20' height='20' fill='%23004B87'/%3E%3Ctext x='45' y='35' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%23004B87'%3ECaixa%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Stone",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ccircle cx='25' cy='30' r='12' fill='%2300D4AA'/%3E%3Ctext x='45' y='35' font-family='Arial, sans-serif' font-size='18' font-weight='bold' fill='%2300D4AA'%3EStone%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Icatu Seguros",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpath d='M20 20 L35 10 L35 50 L20 40 Z' fill='%23FF8C00'/%3E%3Ctext x='45' y='35' font-family='Arial, sans-serif' font-size='14' font-weight='bold' fill='%23FF8C00'%3EIcatu Seguros%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Prudential",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Cpath d='M15 40 Q30 15 45 40' stroke='%23003D82' stroke-width='3' fill='none'/%3E%3Ctext x='55' y='35' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%23003D82'%3EPrudential%3C/text%3E%3C/svg%3E"
    },
    {
      name: "HDI Seguros",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect x='15' y='20' width='25' height='20' fill='%23DC143C' rx='3'/%3E%3Ctext x='50' y='35' font-family='Arial, sans-serif' font-size='14' font-weight='bold' fill='%23DC143C'%3EHDI Seguros%3C/text%3E%3C/svg%3E"
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
            duration={25}
            durationOnHover={40}
            gap={80}
            className="py-8"
          >
            {clients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                className="flex items-center justify-center min-w-[180px]"
                data-testid={`logo-client-${index}`}
              >
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 cursor-pointer"
                  data-testid={`img-logo-${client.name.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
            ))}
          </InfiniteSlider>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
