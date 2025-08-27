import { ChevronRight } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function ClientsSection() {
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
      className="bg-background pb-16 pt-16 md:pb-32"
      data-testid="section-clients"
    >
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm text-muted-foreground">Confiando em nossas soluções</p>
          </div>
          
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider
              durationOnHover={20}
              duration={40}
              gap={112}
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
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
          <a
            href="/clientes"
            className="block text-sm duration-150 hover:opacity-75 bg-[#00F0D8]/90 backdrop-blur-sm text-black px-6 py-3 rounded-full font-medium flex items-center gap-2"
            data-testid="link-meet-customers"
          >
            <span>Conheça Nossos Clientes</span>
            <ChevronRight className="ml-1 inline-block size-3" />
          </a>
        </div>
        
        {/* Background effect */}
        <div 
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[#00F0D8]/5 via-transparent to-[#00F0D8]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
    </section>
  );
}
