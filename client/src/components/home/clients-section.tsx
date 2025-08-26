export default function ClientsSection() {
  const clients = [
    "Prudential",
    "Semear",
    "PagueVeloz", 
    "HDI",
    "Darwin",
    "Mais Empresas"
  ];

  return (
    <section 
      className="py-16 bg-gray-50"
      data-testid="section-clients"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-bold text-lina-dark mb-4"
            data-testid="heading-clients-title"
          >
            Mais de 50 instituições confiam na LINA
          </h2>
          <p 
            className="text-gray-600"
            data-testid="text-clients-description"
          >
            Grandes empresas já transformaram seus processos financeiros com nossas soluções
          </p>
        </div>
        
        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex animate-pulse-slow space-x-12 items-center justify-center"
            data-testid="carousel-clients"
          >
            {clients.map((client, index) => (
              <div 
                key={client}
                className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                data-testid={`logo-client-${index}`}
              >
                <span className="text-gray-500 font-semibold text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
