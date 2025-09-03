import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      // Here you would integrate with your newsletter service
      console.log("Newsletter subscription:", email);
    }, 1000);
  };

  return (
    <section 
      className="w-full py-16 md:py-20 bg-[var(--lina-dark)]"
      data-testid="section-newsletter"
    >
      <div className="container mx-auto px-6 lg:px-8 pt-[16px] pb-[16px] mt-[43px] mb-[43px]">
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

          {/* Email Subscription Form */}
          <form 
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto"
            data-testid="form-newsletter-signup"
          >
            <div className="flex flex-row gap-4 items-center">
              {/* Email Input - Large rounded field */}
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 px-6 bg-white border-0 focus:border-0 focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-full text-gray-900 text-lg shadow-lg"
                  required
                  data-testid="input-newsletter-email"
                />
              </div>
              
              {/* Subscribe Button - Separate element */}
              <Button
                type="submit"
                disabled={isLoading || !email}
                variant="dark-bg"
                className="h-14 px-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-newsletter-subscribe"
              >
                {isLoading ? "Inscrevendo..." : "Inscrever"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}