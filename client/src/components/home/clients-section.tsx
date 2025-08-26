import { ChevronRight } from "lucide-react";

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
      <div className="group relative m-auto max-w-5xl px-6">
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
        
        {/* Clients Grid */}
        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
          {clients.map((client, index) => (
            <div key={client} className="flex" data-testid={`logo-client-${index}`}>
              <div className="mx-auto h-5 w-fit dark:invert bg-gray-200 dark:bg-zinc-700 rounded px-3 py-2 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{client}</span>
              </div>
            </div>
          ))}
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
