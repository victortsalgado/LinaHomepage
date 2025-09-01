"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MessageSquare, User, Building, Mail, Phone, Briefcase } from "lucide-react";

export default function CtaFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) return;

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        position: "",
        message: ""
      });
      // Here you would integrate with your contact form service
      console.log("Contact form submission:", formData);
    }, 1500);
  };

  return (
    <section 
      ref={ref}
      className="w-full py-16 md:py-20 bg-[var(--lina-dark)]"
      data-testid="section-cta-form"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Title */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-cta-title"
          >
            <span className="font-normal">Vamos juntos transformar </span>
            <span className="font-bold text-[var(--lina-cyan)]">complexidade em agilidade?</span>
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-cta-subtitle"
          >
            Nossa infraestrutura de Open Finance já impulsiona os maiores players do mercado. 
            Fale com um especialista e descubra o potencial para o seu negócio.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto"
          data-testid="form-contact"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Nome */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <User className="w-5 h-5" />
              </div>
              <Input
                type="text"
                name="name"
                placeholder="Nome completo"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-14 pl-12 pr-6 bg-white border-0 focus:border-0 focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-2xl text-gray-900 text-lg shadow-lg"
                required
                data-testid="input-contact-name"
              />
            </div>

            {/* Empresa */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Building className="w-5 h-5" />
              </div>
              <Input
                type="text"
                name="company"
                placeholder="Empresa"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full h-14 pl-12 pr-6 bg-white border-0 focus:border-0 focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-2xl text-gray-900 text-lg shadow-lg"
                required
                data-testid="input-contact-company"
              />
            </div>

            {/* E-mail */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Mail className="w-5 h-5" />
              </div>
              <Input
                type="email"
                name="email"
                placeholder="E-mail corporativo"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-14 pl-12 pr-6 bg-white border-0 focus:border-0 focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-2xl text-gray-900 text-lg shadow-lg"
                required
                data-testid="input-contact-email"
              />
            </div>

            {/* Telefone */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Phone className="w-5 h-5" />
              </div>
              <Input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-14 pl-12 pr-6 bg-white border-0 focus:border-0 focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-2xl text-gray-900 text-lg shadow-lg"
                data-testid="input-contact-phone"
              />
            </div>

            {/* Cargo */}
            <div className="relative md:col-span-2">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <Input
                type="text"
                name="position"
                placeholder="Cargo"
                value={formData.position}
                onChange={handleInputChange}
                className="w-full h-14 pl-12 pr-6 bg-white border-0 focus:border-0 focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-2xl text-gray-900 text-lg shadow-lg"
                data-testid="input-contact-position"
              />
            </div>

            {/* Mensagem */}
            <div className="relative md:col-span-2">
              <div className="absolute left-4 top-4 text-gray-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <textarea
                name="message"
                placeholder="Mensagem (opcional)"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full pl-12 pr-6 py-4 bg-white border-0 focus:border-0 focus:ring-2 focus:ring-[var(--lina-cyan)] rounded-2xl text-gray-900 text-lg shadow-lg resize-none"
                data-testid="input-contact-message"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              disabled={isLoading || !formData.name || !formData.company || !formData.email}
              className="h-16 px-12 bg-[var(--lina-cyan)] text-gray-900 rounded-2xl font-bold text-lg hover:bg-[var(--lina-cyan)]/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:shadow-[var(--lina-cyan)]/20"
              data-testid="button-contact-submit"
            >
              {isLoading ? "Enviando..." : "Falar com um especialista"}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}