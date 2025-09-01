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
      <div className="container mx-auto px-6 lg:px-8">
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
            <div className="relative flex items-center">
              {/* Email Input - Large rounded field */}
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-16 pl-6 pr-32 bg-white border-0 focus:border-0 focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-full text-gray-900 text-lg shadow-lg"
                  required
                  data-testid="input-newsletter-email"
                />
                
                {/* Subscribe Button - Positioned inside the input field */}
                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-12 px-6 bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90 text-black font-semibold rounded-full transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-newsletter-subscribe"
                >
                  {isLoading ? "Inscrevendo..." : "Inscrever"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}