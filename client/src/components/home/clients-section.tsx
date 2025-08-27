import { ChevronRight } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ClientsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();

  const clients = [
    "Prudential",
    "Semear", 
    "PagueVeloz",
    "HDI",
    "Darwin",
    "Mais Empresas",
    "Banco Central",
    "BTG Pactual"
  ];

  return (
    <section 
      ref={sectionRef}
      className={`bg-background pb-16 pt-16 md:pb-32 ${sectionVisible ? 'scroll-reveal-fade-in' : 'scroll-reveal-hidden'}`}
      data-testid="section-clients"
    >
      <div className="relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm text-muted-foreground">Confiando em nossas soluções</p>
          </div>
          
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider
              durationOnHover={30}
              duration={8}
              gap={64}
            >
              {clients.map((client, index) => (
                <div key={client} className="flex" data-testid={`logo-client-${index}`}>
                  <div className="mx-auto h-5 w-fit dark:invert bg-gray-200 dark:bg-zinc-700 rounded px-3 py-2 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{client}</span>
                  </div>
                </div>
              ))}
            </InfiniteSlider>
            
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
