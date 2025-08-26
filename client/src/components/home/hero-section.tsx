import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroIllustrationPath from "../../assets/Home_Ilustra_Banner_01_1756234068551.png";
import heroBgPath from "../../assets/Home_BG_Banner_01_1756234068550.jpg";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [
    {
      title: "Pix Automático",
      description: "Conheça a nova funcionalidade automatiza pagamentos recorrentes, incluindo valores variáveis, trazendo benefícios diretos para empresas e consumidores.",
      buttonText: "Saiba mais",
      image: heroIllustrationPath,
      gradient: "linear-gradient(135deg, #2A7B7F 0%, #1B5E62 15%, #0D4142 35%, #000000 65%)"
    },
    {
      title: "Data Link",
      description: "Integração completa de dados empresariais com segurança e eficiência. Conecte seus sistemas de forma inteligente e automatizada.",
      buttonText: "Conhecer Data Link",
      image: heroIllustrationPath,
      gradient: "linear-gradient(135deg, #1E3A8A 0%, #1E40AF 15%, #1D4ED8 35%, #000000 65%)"
    },
    {
      title: "Lina Pay",
      description: "Sistema de pagamentos digitais completo. Processos seguros, rápidos e eficientes para sua empresa crescer sem limites.",
      buttonText: "Ver Lina Pay",
      image: heroIllustrationPath,
      gradient: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 15%, #A78BFA 35%, #000000 65%)"
    },
    {
      title: "JSR Platform",
      description: "Plataforma de gestão e relatórios avançados. Monitore, analise e tome decisões baseadas em dados em tempo real.",
      buttonText: "Explorar JSR",
      image: heroIllustrationPath,
      gradient: "linear-gradient(135deg, #059669 0%, #10B981 15%, #34D399 35%, #000000 65%)"
    }
  ];

  // Create duplicate slides for infinite loop
  const extendedSlides = [...slides, ...slides];
  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide >= totalSlides - 1) {
      // Instantly jump to the duplicate set without animation
      setIsTransitioning(false);
      setCurrentSlide(0);
      // Re-enable transition after a brief moment
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(1);
      }, 50);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 7 seconds with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Handle the infinite loop transition
  useEffect(() => {
    if (currentSlide >= totalSlides && isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, totalSlides, isTransitioning]);

  return (
    <div className="container mx-auto px-8 mt-[100px] mb-[100px]">
      <section 
        className="relative overflow-hidden rounded-3xl"
        style={{
          background: slides[currentSlide % totalSlides].gradient,
        }}
        data-testid="section-hero"
      >
        
        {/* Carousel Container */}
        <div className="relative w-full">
          <div 
            className={`flex ${isTransitioning ? 'carousel-smooth' : ''}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {extendedSlides.map((slide, index) => (
              <div 
                key={index} 
                className={`w-full flex-shrink-0 carousel-slide ${
                  index === currentSlide ? 'carousel-slide-active' : 'carousel-slide-inactive'
                }`}
              >
                <div className="relative z-10 px-16 py-0">
                  <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[20px]">
                    {/* Content - Takes up 7 columns */}
                    <div className={`lg:col-span-7 text-white space-y-1 carousel-content-fade ${
                      index === currentSlide ? 'carousel-content-active' : 'carousel-content-inactive'
                    }`}>
                      <h1 
                        className="text-5xl lg:text-6xl text-[#00F0D8] font-medium leading-tight"
                        data-testid={`heading-hero-title-${index}`}
                      >
                        {slide.title}
                      </h1>
                      
                      <div className="space-y-2 text-left">
                        <p 
                          className="text-lg lg:text-xl text-white leading-relaxed max-w-2xl font-light"
                          data-testid={`text-hero-description-${index}`}
                        >
                          {slide.description}
                        </p>
                      </div>
                      
                      <div className="flex gap-4 pt-3">
                        <button 
                          className="border border-[#00F0D8] px-8 py-3 rounded-full text-base hover:bg-[#00F0D8]/10 transition-all duration-300 flex items-center gap-3 text-white font-normal"
                          data-testid={`button-learn-more-${index}`}
                        >
                          <span className="text-[#00F0D8]">→</span>
                          {slide.buttonText}
                        </button>
                      </div>
                    </div>

                    {/* 3D Illustration - Takes up 5 columns */}
                    <div className={`lg:col-span-5 relative carousel-content-fade ${
                      index === currentSlide ? 'carousel-content-active' : 'carousel-content-inactive'
                    }`}>
                      <div className="relative h-full">
                        <div className="relative flex justify-center lg:justify-end h-full items-center ml-[-12px] mr-[-12px]">
                          <img 
                            src={slide.image} 
                            alt={`${slide.title} Illustration`} 
                            className="w-full max-w-xs lg:max-w-sm ml-[27px] mr-[27px] mt-[20px] mb-[20px] pl-[10px] pr-[10px] animate-float pt-[10px] pb-[10px]"
                            data-testid={`img-hero-illustration-${index}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div 
          className="flex justify-center space-x-2 mt-[17px] mb-[17px] relative z-20"
          data-testid="carousel-indicators"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
                (currentSlide % totalSlides) === index 
                  ? 'bg-[#00F0D8]' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              data-testid={`indicator-${index}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
