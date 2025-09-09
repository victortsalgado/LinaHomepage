import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function TrialHero() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLElement>();

  return (
    <section 
      ref={heroRef}
      className="relative pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-24 lg:pb-28 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      data-testid="section-trial-hero"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Title */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            data-testid="heading-trial-title"
          >
            <span className="bg-gradient-to-r from-[#009895] to-[#2ec9bc] bg-clip-text text-transparent">
              Teste nossas soluções
            </span>
            <br />
            <span className="text-[#23252f]">
              gratuitamente
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              heroVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            data-testid="text-trial-subtitle"
          >
            Explore o <span className="font-semibold text-[#009895]">Lina Pay</span> e o <span className="font-semibold text-[#009895]">Data Link</span> sem compromisso. 
            Experimente por 30 dias e descubra como nossa tecnologia pode transformar seu negócio.
          </p>

        </div>
      </div>
    </section>
  );
}