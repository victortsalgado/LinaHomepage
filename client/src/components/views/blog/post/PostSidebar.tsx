import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Hash } from "lucide-react";
import { useState } from "react";

export default function PostSidebar() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const tableOfContents = [
    { id: "introducao", title: "Introdução ao PIX Automático" },
    { id: "funcionamento", title: "Como Funciona o PIX Automático" },
    { id: "vantagens", title: "Vantagens para Empresas" },
    { id: "implementacao", title: "Implementação Prática" },
    { id: "conclusao", title: "Conclusão" }
  ];

  return (
    <div className="sticky top-24 space-y-8">
      {/* Table of Contents */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-50 rounded-2xl p-6"
      >
        <h3 
          className="text-lg font-semibold text-[var(--lina-dark)] mb-4 flex items-center gap-2"
          style={{ fontFamily: 'Lexend, sans-serif' }}
          data-testid="heading-table-contents"
        >
          <Hash className="w-5 h-5" />
          Neste artigo
        </h3>
        
        <nav>
          <ul className="space-y-3">
            {tableOfContents.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-gray-600 hover:text-[var(--lina-cyan)] transition-colors text-sm leading-relaxed block"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  data-testid={`link-toc-${index}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-[var(--lina-cyan)] to-cyan-600 rounded-2xl p-6 text-white"
      >
        <div className="text-center mb-4">
          <Mail className="w-8 h-8 mx-auto mb-3" />
          <h3 
            className="text-lg font-semibold mb-2"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-newsletter"
          >
            Receba insights exclusivos
          </h3>
          <p 
            className="text-sm opacity-90 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-newsletter-description"
          >
            Assine nossa newsletter e fique por dentro das últimas novidades do Open Finance e pagamentos digitais.
          </p>
        </div>

        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Seu melhor email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            data-testid="input-newsletter-email"
            required
          />
          <Button 
            type="submit"
            className="w-full bg-white text-[var(--lina-cyan)] hover:bg-gray-100 font-semibold"
            data-testid="button-newsletter-submit"
          >
            Assinar Newsletter
          </Button>
        </form>
      </motion.div>
    </div>
  );
}