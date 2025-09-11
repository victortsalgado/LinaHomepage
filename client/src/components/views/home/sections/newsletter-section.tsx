import RDStationForm from "@/components/ui/RDStationForm";

export default function NewsletterSection() {

  return (
    <section 
      className="w-full py-24 md:py-32 lg:py-40 bg-[var(--lina-dark)]"
      data-testid="section-newsletter"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem] pt-[16px] pb-[16px] mt-[43px] mb-[43px]">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-newsletter-title"
          >
            <span className="font-normal">Fique por dentro do </span>
            <span className="font-bold">Universo Open!</span>
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-[var(--lina-cyan)] mb-8 md:mb-12"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-newsletter-subtitle"
          >
            Inscreva-se e receba a nossa Newsletter
          </p>

          {/* RD Station Form */}
          <div className="max-w-4xl mx-auto">
            <RDStationForm className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}