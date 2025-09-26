"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

// Revenue options for dropdown
const revenueOptions = [
  "Até R$ 5 milhões",
  "entre R$ 5 milhões e R$ 10 milhões", 
  "entre R$ 10 milhões e R$ 50 milhões",
  "acima de R$ 50 milhões"
];

// Segment options for dropdown
const segmentOptions = [
  "Bancos e Instituições Financeiras",
  "Fintechs e Meios de Pagamento",
  "E-commerce e Marketplaces", 
  "Seguradoras (Insurtechs)",
  "Software e SaaS",
  "Outro"
];

export default function JsrCtaFormSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    segment: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-48 md:py-64 lg:py-80 bg-gray-100" 
      data-testid="section-jsr-cta-form"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
              style={{ 
                fontFamily: 'Lexend, sans-serif',
                color: 'var(--lina-dark)'
              }}
              data-testid="heading-cta-title"
            >
              Antecipe-se à obrigatoriedade e lidere a nova era do Pix
            </h2>
            
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: 'var(--lina-dark)'
              }}
              data-testid="text-cta-subtitle"
            >
              A JSR será obrigatória em 2026, mas somente quem se antecipar terá vantagem competitiva. 
              Com a infraestrutura JSR da Lina, sua instituição entra em produção rapidamente e 
              começa a colher os frutos da inovação em pagamentos.
            </p>
          </div>

          {/* Form Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-100 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="space-y-6"
                >

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label 
                        htmlFor="fullName" 
                        className="text-gray-700 font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="label-full-name"
                      >
                        Nome completo*
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        placeholder="Digite seu nome completo"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                        data-testid="input-full-name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label 
                        htmlFor="email" 
                        className="text-gray-700 font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="label-email"
                      >
                        E-mail corporativo*
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="exemplo@empresa.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                        data-testid="input-email"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label 
                        htmlFor="phone" 
                        className="text-gray-700 font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="label-phone"
                      >
                        Telefone*
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                        data-testid="input-phone"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label 
                        htmlFor="company" 
                        className="text-gray-700 font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="label-company"
                      >
                        Empresa*
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        required
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                        data-testid="input-company"
                      />
                    </div>

                    {/* Revenue Dropdown */}
                    <div className="space-y-2">
                      <Label 
                        className="text-gray-700 font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="label-revenue"
                      >
                        Qual o Faturamento Anual da Empresa?
                      </Label>
                      <Select 
                        value={formData.revenue} 
                        onValueChange={(value) => handleInputChange('revenue', value)}
                      >
                        <SelectTrigger 
                          className="bg-gray-50 border-gray-200 text-gray-900 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                          data-testid="select-revenue"
                        >
                          <SelectValue 
                            placeholder="Selecione o faturamento anual"
                            className="text-gray-500"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {revenueOptions.map((option, index) => (
                            <SelectItem 
                              key={index} 
                              value={option}
                              data-testid={`option-revenue-${index + 1}`}
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Segment Dropdown */}
                    <div className="space-y-2">
                      <Label 
                        className="text-gray-700 font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="label-segment"
                      >
                        Qual o segmento da sua empresa?
                      </Label>
                      <Select 
                        value={formData.segment} 
                        onValueChange={(value) => handleInputChange('segment', value)}
                      >
                        <SelectTrigger 
                          className="bg-gray-50 border-gray-200 text-gray-900 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                          data-testid="select-segment"
                        >
                          <SelectValue 
                            placeholder="Selecione o segmento"
                            className="text-gray-500"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {segmentOptions.map((option, index) => (
                            <SelectItem 
                              key={index} 
                              value={option}
                              data-testid={`option-segment-${index + 1}`}
                            >
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90 text-white font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{ fontFamily: 'Lexend, sans-serif' }}
                      data-testid="button-submit-form"
                    >
                      Solicitar demonstração
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}