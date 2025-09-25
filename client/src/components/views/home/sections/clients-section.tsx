import LogoLoop from "@/components/ui/logo-loop";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ClientsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();

  // Client logos data using real logos from App Storage
  const clientLogos = [
    { src: "/B3.png", alt: "B3", title: "B3" },
    { src: "/Brasilprev.png", alt: "BrasilPrev", title: "BrasilPrev" },
    { src: "/HDI.png", alt: "HDI Seguros", title: "HDI Seguros" },
    { src: "/BRB.png", alt: "BRB", title: "BRB" },
    { src: "/Prudential.png", alt: "Prudential", title: "Prudential" },
    { src: "/brasilcard.png", alt: "Brasilcard", title: "Brasilcard" },
    { src: "/ideal.png", alt: "Ideal", title: "Ideal" },
    { src: "/sulamerica.png", alt: "SulAmérica", title: "SulAmérica" },
    { src: "/CHUBB.png", alt: "CHUBB", title: "CHUBB" },
    { src: "/Swiss_re.png", alt: "Swiss Re", title: "Swiss Re" },
    { src: "/iugu.png", alt: "Iugu", title: "Iugu" },
    { src: "/cresol.png", alt: "Cresol", title: "Cresol" }
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
        
        {/* LogoLoop Carousel with all options enabled */}
        <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop 
            logos={clientLogos}
            speed={120}
            direction="left"
            logoHeight={64}
            gap={100}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="rgb(249 250 251 / 0.6)"
            ariaLabel="Nossos clientes"
            style={{ filter: 'grayscale(1)', transition: 'filter 0.3s ease' }}
            className="py-12 hover:filter-none"
          />
        </div>
      </div>
    </section>
  );
}
