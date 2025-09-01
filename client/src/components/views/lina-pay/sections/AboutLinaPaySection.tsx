"use client";

import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutLinaPaySection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  });

  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  });

  return (
    <section className="w-full h-[737px] bg-[#f8f3f3]/80 rounded-[0px_0px_40px_40px] relative">
      <div className="grid lg:grid-cols-2 gap-12 items-start px-6 lg:px-[252px] pt-[144px]">
        
        {/* Left Column - Content */}
        <div 
          ref={contentRef}
          className={`flex-1 max-w-[360px] transition-all duration-800 ease-out ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          data-testid="content-about-linapay"
        >
          <h2 
            className="[font-family:'Lexend',Helvetica] font-medium text-[40px] leading-[48px] mb-8"
            data-testid="heading-about-linapay-title"
          >
            <span className="text-[#606060]">O que é o </span>
            <span className="text-[#0ab5aa]">Lina Pay</span>
            <span className="text-[#606060]">?</span>
          </h2>

          <p 
            className="[font-family:'Lexend',Helvetica] font-light text-[#606060] text-base leading-6 mb-10"
            data-testid="text-about-linapay-description"
          >
            O Lina Pay é uma plataforma de pagamentos via Open Finance que permite que a sua empresa ofereça uma experiência de checkout fluida, segura e com custo reduzido. Com ele, o consumidor paga com um toque, por reconhecimento facial ou biometria, sem senhas e sem interrupções, para que vendas não sejam mais perdidas. Nossa solução é homologada pelo Banco Central e conectada a +100 instituições.
          </p>

          <Button 
            className="w-[260px] h-auto px-8 py-4 bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90 rounded-full [font-family:'Lexend',Helvetica] font-bold text-white text-base transition-all duration-200 hover:scale-105"
            data-testid="button-about-linapay-cta"
          >
            Descubra como funciona
          </Button>
        </div>

        {/* Right Column - Image */}
        <div 
          ref={imageRef}
          className={`flex-1 flex justify-end transition-all duration-800 ease-out delay-200 ${
            imageVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}
          data-testid="image-about-linapay-visual"
        >
          <img
            className="w-[638px] h-[455px] object-cover"
            alt="Mulher sorrindo ao usar o celular para pagamentos"
            src="/figmaAssets/woman-4.png"
          />
        </div>
      </div>

      {/* Decorative Component */}
      <img
        className="absolute w-[34px] h-[34px] top-[205px] left-[420px]"
        alt="Component"
        src="/figmaAssets/component-5.svg"
      />
    </section>
  );
}