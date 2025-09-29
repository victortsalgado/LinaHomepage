"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { submitToRDStation } from '@/api/rdstation';


export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    const processedValue = field === 'telefone' ? formatPhone(value) : value;
    setFormData(prev => ({ ...prev, [field]: processedValue }));
  };
  
  // Validation functions
  const validateName = (value: string) => value.trim().length >= 2;
  const validateEmail = (value: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return false;
    }
    
    const personalEmailDomains = [
      'gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com',
      'icloud.com', 'me.com', 'msn.com', 'yahoo.com.br', 'hotmail.com.br',
      'bol.com.br', 'uol.com.br', 'terra.com.br', 'ig.com.br', 'globo.com',
      'r7.com', 'oi.com.br', 'zipmail.com.br', 'pop.com.br'
    ];
    
    const emailDomain = value.toLowerCase().split('@')[1];
    return !personalEmailDomains.includes(emailDomain);
  };
  const validatePhone = (value: string) => value.replace(/\D/g, '').length >= 10;
  const validateCompany = (value: string) => value.trim().length >= 2;

  // Format phone number
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  };
  
  const isFormValid = validateName(formData.nome) && 
                      validateEmail(formData.email) && 
                      validatePhone(formData.telefone) && 
                      validateCompany(formData.empresa);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await submitToRDStation(formData);
      setIsSubmitted(true);
      
      // Disparar evento de analytics (se GA estiver disponível)
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form_success'
        });
      }
    } catch (error) {
      console.error('❌ Erro no envio do formulário:', error);
      
      // Disparar evento de erro no analytics
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'form_error', {
          event_category: 'engagement',
          event_label: 'contact_form_error'
        });
      }
      
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      if (errorMessage.includes('500')) {
        alert('❌ Problema temporário. Seus dados foram capturados! Nossa equipe entrará em contato em breve.');
      } else {
        alert('❌ Erro ao enviar formulário. Tente novamente em alguns minutos.');
      }
    } finally {
      setIsSubmitting(false);
    }
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
      className="py-48 md:py-64 lg:py-80 bg-white"
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
            <Card className="w-full max-w-xl border border-gray-200 shadow-lg">
              <CardContent 
                className="p-8 lg:p-12 bg-transparent"
              >
                <div className="space-y-8">
                  {/* Form Title */}
                  <h2
                    className="text-2xl lg:text-3xl font-bold text-black text-center"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-form-title"
                  >
                    Envie sua mensagem
                  </h2>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Nome */}
                      <div className="space-y-2">
                        <Label 
                          htmlFor="nome" 
                          className="text-black font-medium"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          data-testid="label-nome"
                        >
                          Nome completo*
                        </Label>
                        <Input
                          id="nome"
                          type="text"
                          required
                          placeholder="Digite seu nome completo"
                          value={formData.nome}
                          onChange={(e) => handleInputChange('nome', e.target.value)}
                          className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#00b6ac] focus:ring-[#00b6ac]"
                          data-testid="input-nome"
                        />
                        {formData.nome && !validateName(formData.nome) && (
                          <p className="text-red-500 text-sm">
                            Por favor, insira um nome válido (mínimo 2 caracteres)
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label 
                          htmlFor="email" 
                          className="text-black font-medium"
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
                          className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#00b6ac] focus:ring-[#00b6ac]"
                          data-testid="input-email"
                        />
                        {formData.email && !validateEmail(formData.email) && (
                          <p className="text-red-500 text-sm">
                            {!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) 
                              ? "Por favor, insira um email válido" 
                              : "Por favor, use um email corporativo (não Gmail, Hotmail, Yahoo, etc.)"}
                          </p>
                        )}
                      </div>

                      {/* Telefone */}
                      <div className="space-y-2">
                        <Label 
                          htmlFor="telefone" 
                          className="text-black font-medium"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          data-testid="label-telefone"
                        >
                          Telefone*
                        </Label>
                        <Input
                          id="telefone"
                          type="tel"
                          required
                          placeholder="(11) 99999-9999"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange('telefone', e.target.value)}
                          className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#00b6ac] focus:ring-[#00b6ac]"
                          data-testid="input-telefone"
                        />
                        {formData.telefone && !validatePhone(formData.telefone) && (
                          <p className="text-red-500 text-sm">
                            Por favor, insira um telefone válido
                          </p>
                        )}
                      </div>

                      {/* Empresa */}
                      <div className="space-y-2">
                        <Label 
                          htmlFor="empresa" 
                          className="text-black font-medium"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          data-testid="label-empresa"
                        >
                          Empresa*
                        </Label>
                        <Input
                          id="empresa"
                          type="text"
                          required
                          placeholder="Nome da empresa"
                          value={formData.empresa}
                          onChange={(e) => handleInputChange('empresa', e.target.value)}
                          className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#00b6ac] focus:ring-[#00b6ac]"
                          data-testid="input-empresa"
                        />
                        {formData.empresa && !validateCompany(formData.empresa) && (
                          <p className="text-red-500 text-sm">
                            Por favor, insira o nome da empresa
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={!isFormValid || isSubmitting}
                        className="w-full bg-gradient-to-r from-[#00857F] to-[#2EC9BC] hover:from-[#00756F] hover:to-[#28B8AC] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                        data-testid="button-submit-form"
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-green-700 mb-2" style={{ fontFamily: 'Lexend, sans-serif' }}>
                          Obrigado!
                        </h3>
                        <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Sua mensagem foi enviada com sucesso.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-green-800 mb-2" style={{ fontFamily: 'Lexend, sans-serif' }}>
                          Entraremos em contato em breve!
                        </h4>
                        <p className="text-green-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Nossa equipe de especialistas analisará sua mensagem e retornará o contato dentro de 24 horas para apresentar a melhor solução para o seu negócio.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}