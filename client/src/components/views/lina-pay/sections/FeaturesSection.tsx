"use client";

import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { 
  Fingerprint, 
  Nfc, 
  Zap, 
  CalendarClock, 
  Repeat, 
  Bot,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Features cards data
const featureCards = [
  {
    id: 1,
    icon: Fingerprint,
    title: "Pix por biometria",
    description: "Pagamentos autorizados com um toque direto no checkout. Segurança e fluidez para o seu e-commerce."
  },
  {
    id: 2,
    icon: Nfc,
    title: "Pix por aproximação",
    description: "Permite pagamentos presenciais com a simples aproximação do celular, sem precisar de cartões."
  },
  {
    id: 3,
    icon: Zap,
    title: "Pix instantâneo",
    description: "Pagamento é confirmado imediatamente para a conta de destino, sem intermediários."
  },
  {
    id: 4,
    icon: CalendarClock,
    title: "Pix agendado",
    description: "Agende pagamentos futuros de forma simples, debitando automaticamente na data escolhida."
  },
  {
    id: 5,
    icon: Repeat,
    title: "Pix recorrente",
    description: "Automatize cobranças com valor fixo, como assinaturas, garantindo previsibilidade de caixa."
  },
  {
    id: 6,
    icon: Bot,
    title: "Pix automático",
    description: "Pagamentos inteligentes iniciados por eventos e gatilhos pré-definidos pelo cliente."
  }
];

export default function FeaturesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-gray-50" data-testid="section-features">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-features-title"
          >
            Funcionalidades que resolvem problemas reais
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="h-10 w-10 p-0 rounded-full border-[var(--lina-cyan)] text-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="h-10 w-10 p-0 rounded-full border-[var(--lina-cyan)] text-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              data-testid="button-carousel-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef} data-testid="carousel-features">
            <div className="flex">
              {featureCards.map((card, index) => {
                const IconComponent = card.icon;
                
                return (
                  <div
                    key={card.id}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 pr-4"
                    data-testid={`slide-feature-${index + 1}`}
                  >
                    <motion.div
                      className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 h-full"
                      whileHover={{ 
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                      data-testid={`card-feature-${index + 1}`}
                    >
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                            <IconComponent 
                              className="w-7 h-7 text-white" 
                              data-testid={`icon-feature-${index + 1}`}
                            />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 
                          className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-800 transition-colors duration-300"
                          style={{ fontFamily: 'Lexend, sans-serif' }}
                          data-testid={`title-feature-${index + 1}`}
                        >
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p 
                          className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          data-testid={`description-feature-${index + 1}`}
                        >
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {featureCards.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-[var(--lina-cyan)] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                data-testid={`dot-indicator-${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}