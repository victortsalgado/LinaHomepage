"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

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

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-32 bg-white"
      data-testid="section-contact"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Left Column - Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Main Title and Description */}
            <div className="space-y-6">
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900"
                style={{ fontFamily: 'Lexend, sans-serif' }}
                data-testid="heading-contact-title"
              >
                Fale com um especialista
              </h1>
              
              <p
                className="text-xl lg:text-2xl leading-relaxed text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="text-contact-description"
              >
                Estamos prontos para transformar o seu negócio. Preencha o formulário ao lado ou utilize um dos nossos canais de contato. Nossa equipe retornará o mais breve possível.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[var(--lina-cyan)] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 
                    className="text-lg font-semibold text-gray-900"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-contact-phone"
                  >
                    Telefone
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="text-contact-phone-number"
                  >
                    +55 11 3181 6170
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[var(--lina-cyan)] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 
                    className="text-lg font-semibold text-gray-900"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-contact-email"
                  >
                    E-mail
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="text-contact-email-address"
                  >
                    openx@linainfratech.com.br
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[var(--lina-cyan)] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 
                    className="text-lg font-semibold text-gray-900"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-contact-address"
                  >
                    Endereço
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="text-contact-address-details"
                  >
                    Rua Correia Dias, 93, SL 0102,<br />
                    Paraíso, 04104-000<br />
                    São Paulo, SP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={formVariants}
            className="flex justify-center lg:justify-end"
          >
            <Card className="w-full max-w-xl">
              <CardContent 
                className="p-8 lg:p-12"
                style={{ backgroundColor: 'var(--lina-dark)' }}
              >
                <div className="space-y-8">
                  {/* Form Title */}
                  <h2
                    className="text-2xl lg:text-3xl font-bold text-white text-center"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-form-title"
                  >
                    Envie sua mensagem
                  </h2>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label 
                        htmlFor="fullName" 
                        className="text-white font-medium"
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
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                        data-testid="input-full-name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label 
                        htmlFor="email" 
                        className="text-white font-medium"
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
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                        data-testid="input-email"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label 
                        htmlFor="phone" 
                        className="text-white font-medium"
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
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                        data-testid="input-phone"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label 
                        htmlFor="company" 
                        className="text-white font-medium"
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
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                        data-testid="input-company"
                      />
                    </div>

                    {/* Revenue Dropdown */}
                    <div className="space-y-2">
                      <Label 
                        className="text-white font-medium"
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
                          className="bg-white/10 border-white/20 text-white focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                          data-testid="select-revenue"
                        >
                          <SelectValue 
                            placeholder="Selecione o faturamento anual"
                            className="text-white/60"
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
                        className="text-white font-medium"
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
                          className="bg-white/10 border-white/20 text-white focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)]"
                          data-testid="select-segment"
                        >
                          <SelectValue 
                            placeholder="Selecione o segmento"
                            className="text-white/60"
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
                      variant="light-bg"
                      size="lg"
                      className="w-full font-bold px-8 text-lg shadow-lg hover:shadow-xl"
                      style={{ fontFamily: 'Lexend, sans-serif' }}
                      data-testid="button-submit-form"
                    >
                      Enviar mensagem
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}