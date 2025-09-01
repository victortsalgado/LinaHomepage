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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-newsletter-title"
          >
            Fique por dentro do Universo Open!
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-newsletter-subtitle"
          >
            Inscreva-se e receba a nossa Newsletter
          </p>

          {/* Email Subscription Form */}
          <form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            data-testid="form-newsletter-signup"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Email Input */}
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 bg-white border-gray-300 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)] rounded-xl text-gray-900"
                  required
                  data-testid="input-newsletter-email"
                />
              </div>
              
              {/* Subscribe Button */}
              <Button
                type="submit"
                disabled={isLoading || !email}
                className="h-12 px-6 bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90 text-black font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[var(--lina-cyan)]/25 hover:shadow-xl hover:shadow-[var(--lina-cyan)]/30 disabled:opacity-50 disabled:cursor-not-allowed"
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