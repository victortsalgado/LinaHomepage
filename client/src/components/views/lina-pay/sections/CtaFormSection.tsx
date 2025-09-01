"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { User, Building, Mail, Phone } from "lucide-react";

export default function CtaFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: "",
    segment: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) return;

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        revenue: "",
        segment: ""
      });
      // Here you would integrate with your contact form service
      console.log("LinaPay contact form submission:", formData);
    }, 1500);
  };

  return (
    <section 
      ref={ref}
      className="w-full py-16 md:py-20 bg-gray-100"
      data-testid="section-cta-form"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Section Title and Subtitle */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Title */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-[var(--lina-dark)] mb-6"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-cta-title"
          >
            Vamos simplificar e reduzir o custo dos pagamentos?
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-cta-subtitle"
          >
            Fale com um especialista e descubra como o LinaPay pode transformar a experiência de compra dos seus clientes e otimizar sua receita.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="max-w-4xl mx-auto bg-[var(--lina-dark)] rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Form Title */}
          <div className="text-center mb-8">
            <h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-form-title"
            >
              Fale com um especialista hoje mesmo.
            </h3>
            <p 
              className="text-lg text-gray-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="text-form-subtitle"
            >
              Não se preocupe, seus dados estarão sempre seguros conosco.
            </p>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            data-testid="form-contact"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Nome completo */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nome completo*
                </label>
                <div className="absolute left-4 top-12 transform -translate-y-1/2 text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-12 pl-12 pr-6 bg-white/10 border border-white/20 focus:border-[var(--lina-cyan)] focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-xl text-white text-base placeholder:text-gray-400"
                  required
                  data-testid="input-contact-name"
                />
              </div>

              {/* E-mail corporativo */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail corporativo*
                </label>
                <div className="absolute left-4 top-12 transform -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="seu.email@empresa.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 pl-12 pr-6 bg-white/10 border border-white/20 focus:border-[var(--lina-cyan)] focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-xl text-white text-base placeholder:text-gray-400"
                  required
                  data-testid="input-contact-email"
                />
              </div>

              {/* Telefone */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Telefone*
                </label>
                <div className="absolute left-4 top-12 transform -translate-y-1/2 text-gray-400">
                  <Phone className="w-5 h-5" />
                </div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full h-12 pl-12 pr-6 bg-white/10 border border-white/20 focus:border-[var(--lina-cyan)] focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-xl text-white text-base placeholder:text-gray-400"
                  required
                  data-testid="input-contact-phone"
                />
              </div>

              {/* Empresa */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa*
                </label>
                <div className="absolute left-4 top-12 transform -translate-y-1/2 text-gray-400">
                  <Building className="w-5 h-5" />
                </div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Nome da sua empresa"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full h-12 pl-12 pr-6 bg-white/10 border border-white/20 focus:border-[var(--lina-cyan)] focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-xl text-white text-base placeholder:text-gray-400"
                  required
                  data-testid="input-contact-company"
                />
              </div>

              {/* Faturamento Anual */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Qual o Faturamento Anual da Empresa?
                </label>
                <Select onValueChange={(value) => handleSelectChange("revenue", value)}>
                  <SelectTrigger className="w-full h-12 bg-white/10 border border-white/20 focus:border-[var(--lina-cyan)] focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-xl text-white">
                    <SelectValue placeholder="Selecione o faturamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ate-5mi">Até R$ 5 milhões</SelectItem>
                    <SelectItem value="5mi-10mi">entre R$ 5 milhões e R$ 10 milhões</SelectItem>
                    <SelectItem value="10mi-50mi">entre R$ 10 milhões e R$ 50 milhões</SelectItem>
                    <SelectItem value="acima-50mi">acima de R$ 50 milhões</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Segmento da Empresa */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Qual o segmento da sua empresa?
                </label>
                <Select onValueChange={(value) => handleSelectChange("segment", value)}>
                  <SelectTrigger className="w-full h-12 bg-white/10 border border-white/20 focus:border-[var(--lina-cyan)] focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-xl text-white">
                    <SelectValue placeholder="Selecione o segmento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bancos">Bancos e Instituições Financeiras</SelectItem>
                    <SelectItem value="fintechs">Fintechs e Meios de Pagamento</SelectItem>
                    <SelectItem value="ecommerce">E-commerce e Marketplaces</SelectItem>
                    <SelectItem value="seguradoras">Seguradoras (Insurtechs)</SelectItem>
                    <SelectItem value="software">Software e SaaS</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={isLoading || !formData.name || !formData.email || !formData.phone || !formData.company}
                className="h-14 px-8 bg-[var(--lina-cyan)] text-gray-900 rounded-xl font-bold text-lg hover:bg-[var(--lina-cyan)]/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-[var(--lina-cyan)]/20"
                data-testid="button-contact-submit"
              >
                {isLoading ? "Enviando..." : "Falar com um especialista"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}