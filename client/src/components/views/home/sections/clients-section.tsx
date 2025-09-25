import LogoLoop from "@/components/ui/logo-loop";
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

  // Client logos data formatted for LogoLoop
  const clientLogos = [
    { src: brasilprevLogo, alt: "BrasilPrev", title: "BrasilPrev" },
    { src: bradescoSegurosLogo, alt: "Bradesco Seguros", title: "Bradesco Seguros" },
    { src: safraLogo, alt: "Safra", title: "Safra" },
    { src: sicoobLogo, alt: "Sicoob", title: "Sicoob" },
    { src: caixaLogo, alt: "Caixa", title: "Caixa" },
    { src: stoneLogo, alt: "Stone", title: "Stone" },
    { src: icatuSegurosLogo, alt: "Icatu Seguros", title: "Icatu Seguros" },
    { src: hdiSegurosLogo, alt: "HDI Seguros", title: "HDI Seguros" },
    { src: cloudwalkLogo, alt: "CloudWalk", title: "CloudWalk" }
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
