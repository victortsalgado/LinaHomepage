import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Newsletter subscription:", email);
    // Reset form
    setEmail("");
  };

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

          {/* Email Input and Button */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-lg px-6 bg-white border-0 rounded-lg text-gray-900 placeholder:text-gray-500 flex-1"
                data-testid="input-newsletter-email"
              />
              <Button
                onClick={handleSubmit}
                variant="light-bg"
                size="lg"
                className="h-14 px-8 text-lg font-semibold whitespace-nowrap min-w-fit"
                data-testid="button-newsletter-subscribe"
              >
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}