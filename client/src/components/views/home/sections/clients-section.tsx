import LogoLoop from "@/components/ui/logo-loop";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ClientsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();

  // All 23 client logos from App Storage
  const clientLogos = [
    { src: "/b3.png", alt: "B3", title: "B3" },
    { src: "/banco_semear.png", alt: "Banco SEMEAR", title: "Banco SEMEAR" },
    { src: "/brb.png", alt: "BRB", title: "BRB" },
    { src: "/brp.png", alt: "BRP", title: "BRP" },
    { src: "/banco_master.png", alt: "Banco Master", title: "Banco Master" },
    { src: "/brasilprev.png", alt: "BrasilPrev", title: "BrasilPrev" },
    { src: "/chubb.png", alt: "CHUBB", title: "CHUBB" },
    { src: "/hdi.png", alt: "HDI Seguros", title: "HDI Seguros" },
    { src: "/luiza_seg.jpg", alt: "Luiza Seguros", title: "Luiza Seguros" },
    { src: "/prudential.png", alt: "Prudential", title: "Prudential" },
    { src: "/santander_auto.png", alt: "Santander Auto", title: "Santander Auto" },
    { src: "/swiss_re.png", alt: "Swiss Re", title: "Swiss Re" },
    { src: "/accredito.png", alt: "Accredito", title: "Accredito" },
    { src: "/brasilcap.jpg", alt: "Brasilcap", title: "Brasilcap" },
    { src: "/brasilcard.png", alt: "Brasilcard", title: "Brasilcard" },
    { src: "/cardif.png", alt: "Cardif", title: "Cardif" },
    { src: "/cred_system.png", alt: "Cred System", title: "Cred System" },
    { src: "/cresol.png", alt: "Cresol", title: "Cresol" },
    { src: "/ideal.png", alt: "Ideal", title: "Ideal" },
    { src: "/iugu.png", alt: "Iugu", title: "Iugu" },
    { src: "/pague_veloz.png", alt: "Pague Veloz", title: "Pague Veloz" },
    { src: "/sulamerica.png", alt: "SulAmérica", title: "SulAmérica" },
    { src: "/swap_ip.png", alt: "Swap IP", title: "Swap IP" }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`w-full bg-gray-50/60 py-12 md:py-16 lg:py-20 ${sectionVisible ? 'scroll-reveal-fade-in' : 'scroll-reveal-hidden'}`}
      data-testid="section-clients"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            data-testid="heading-clients-title"
          >
            <span className="text-[#006666]">
              <span className="font-light">Nossos clientes são a</span> <span className="font-bold">nossa melhor referência!</span>
            </span>
          </h2>
        </div>
        
        {/* Simple test - display first few logos directly */}
        <div className="flex flex-wrap gap-8 justify-center items-center py-8">
          {clientLogos.slice(0, 6).map((logo, index) => (
            <div key={index} className="h-16 w-auto">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                title={logo.title}
                className="h-full w-auto object-contain filter grayscale hover:filter-none transition-all duration-300"
                data-testid={`client-logo-${index}`}
                onError={(e) => {
                  console.error(`Failed to load logo: ${logo.src}`);
                  e.currentTarget.style.border = '2px solid red';
                }}
                onLoad={() => console.log(`Loaded logo: ${logo.src}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
