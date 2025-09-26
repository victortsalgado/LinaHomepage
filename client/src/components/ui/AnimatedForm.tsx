"use client";

import { useState, useEffect } from 'react';
import Stepper, { Step } from './Stepper';
import RDStationForm from './RDStationForm';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
}

interface AnimatedFormProps {
  className?: string;
}

export default function AnimatedForm({ className = "" }: AnimatedFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    empresa: ''
  });

  const [currentFieldValid, setCurrentFieldValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Validation functions
  const validateName = (value: string) => value.trim().length >= 2;
  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
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

  const handleInputChange = (field: keyof FormData, value: string) => {
    const processedValue = field === 'telefone' ? formatPhone(value) : value;
    setFormData(prev => ({ ...prev, [field]: processedValue }));
  };

  // Validate current field
  useEffect(() => {
    // This will be updated based on current step validation
    setCurrentFieldValid(true);
  }, [formData]);

  // Sync with RD Station form when step changes or data updates
  const syncWithRDStation = () => {
    setTimeout(() => {
      // Find RD Station form fields and populate them
      const rdForm = document.querySelector('[role="main"][id*="teste_lina"]');
      if (rdForm) {
        // Look for input fields by common patterns
        const nameInput = rdForm.querySelector('input[name*="name"], input[name*="nome"], input[placeholder*="nome"], input[placeholder*="name"]') as HTMLInputElement;
        const emailInput = rdForm.querySelector('input[type="email"], input[name*="email"]') as HTMLInputElement;
        const phoneInput = rdForm.querySelector('input[type="tel"], input[name*="phone"], input[name*="telefone"]') as HTMLInputElement;
        const companyInput = rdForm.querySelector('input[name*="company"], input[name*="empresa"]') as HTMLInputElement;

        // Fill the fields
        if (nameInput && formData.nome) {
          nameInput.value = formData.nome;
          nameInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (emailInput && formData.email) {
          emailInput.value = formData.email;
          emailInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (phoneInput && formData.telefone) {
          phoneInput.value = formData.telefone;
          phoneInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (companyInput && formData.empresa) {
          companyInput.value = formData.empresa;
          companyInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    }, 100);
  };

  const handleStepChange = (step: number) => {
    syncWithRDStation();
  };

  const handleFormComplete = () => {
    syncWithRDStation();
    // Submit RD Station form
    setTimeout(() => {
      const rdForm = document.querySelector('[role="main"][id*="teste_lina"]');
      if (rdForm) {
        const submitButton = rdForm.querySelector('button[type="submit"], input[type="submit"]') as HTMLButtonElement;
        if (submitButton) {
          submitButton.click();
        }
      }
    }, 200);
    // Mark form as submitted to show confirmation message
    setIsFormSubmitted(true);
  };

  return (
    <div className={className}>
      {/* Hidden RD Station Form */}
      <div style={{ display: 'none', visibility: 'hidden', height: 0, overflow: 'hidden' }}>
        <RDStationForm className="hidden" />
      </div>

      {/* Animated Stepper Form */}
      <Stepper
        initialStep={1}
        onStepChange={handleStepChange}
        onFinalStepCompleted={handleFormComplete}
        backButtonText="Anterior"
        nextButtonText="Continuar"
        data-testid="animated-form-stepper"
      >
        {/* Step 1: Nome */}
        <Step>
          <div className="text-center">
            <h2 className="stepper-step-title">Qual é o seu nome?</h2>
            <p className="stepper-step-description">
              Vamos começar nos conhecendo melhor
            </p>
            <div className="stepper-form-field">
              <input
                type="text"
                placeholder="Digite seu nome completo"
                value={formData.nome}
                onChange={(e) => handleInputChange('nome', e.target.value)}
                className="stepper-form-input"
                data-testid="input-animated-nome"
                autoFocus
              />
            </div>
            {formData.nome && !validateName(formData.nome) && (
              <p className="text-red-500 text-sm mt-2">
                Por favor, insira um nome válido (mínimo 2 caracteres)
              </p>
            )}
          </div>
        </Step>

        {/* Step 2: Email */}
        <Step>
          <div className="text-center">
            <h2 className="stepper-step-title">Qual é o seu email corporativo?</h2>
            <p className="stepper-step-description">
              Usaremos este email para entrar em contato
            </p>
            <div className="stepper-form-field">
              <input
                type="email"
                placeholder="exemplo@empresa.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="stepper-form-input"
                data-testid="input-animated-email"
                autoFocus
              />
            </div>
            {formData.email && !validateEmail(formData.email) && (
              <p className="text-red-500 text-sm mt-2">
                Por favor, insira um email válido
              </p>
            )}
          </div>
        </Step>

        {/* Step 3: Telefone */}
        <Step>
          <div className="text-center">
            <h2 className="stepper-step-title">Qual é o seu telefone?</h2>
            <p className="stepper-step-description">
              Para agilizar nosso primeiro contato
            </p>
            <div className="stepper-form-field">
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.telefone}
                onChange={(e) => handleInputChange('telefone', e.target.value)}
                className="stepper-form-input"
                data-testid="input-animated-telefone"
                autoFocus
              />
            </div>
            {formData.telefone && !validatePhone(formData.telefone) && (
              <p className="text-red-500 text-sm mt-2">
                Por favor, insira um telefone válido
              </p>
            )}
          </div>
        </Step>

        {/* Step 4: Empresa */}
        <Step>
          <div className="text-center">
            <h2 className="stepper-step-title">Qual é a sua empresa?</h2>
            <p className="stepper-step-description">
              Queremos entender melhor o seu negócio
            </p>
            <div className="stepper-form-field">
              <input
                type="text"
                placeholder="Nome da sua empresa"
                value={formData.empresa}
                onChange={(e) => handleInputChange('empresa', e.target.value)}
                className="stepper-form-input"
                data-testid="input-animated-empresa"
                autoFocus
              />
            </div>
            {formData.empresa && !validateCompany(formData.empresa) && (
              <p className="text-red-500 text-sm mt-2">
                Por favor, insira o nome da empresa
              </p>
            )}
          </div>
        </Step>

        {/* Step 5: Confirmação */}
        <Step>
          <div className="text-center">
            <h2 className="stepper-step-title">Confirme seus dados</h2>
            <p className="stepper-step-description">
              Revise as informações antes de enviar
            </p>
            <div className="space-y-4 text-left bg-gray-50 p-6 rounded-lg">
              <div>
                <label className="stepper-form-label">Nome:</label>
                <p className="text-gray-900 font-medium">{formData.nome}</p>
              </div>
              <div>
                <label className="stepper-form-label">Email:</label>
                <p className="text-gray-900 font-medium">{formData.email}</p>
              </div>
              <div>
                <label className="stepper-form-label">Telefone:</label>
                <p className="text-gray-900 font-medium">{formData.telefone}</p>
              </div>
              <div>
                <label className="stepper-form-label">Empresa:</label>
                <p className="text-gray-900 font-medium">{formData.empresa}</p>
              </div>
            </div>
          </div>
        </Step>

      </Stepper>

      {/* Success Message - Shows below stepper after form submission */}
      {isFormSubmitted && (
        <div className="mt-12 text-center">
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
              Seus dados foram enviados com sucesso.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-green-800 mb-2" style={{ fontFamily: 'Lexend, sans-serif' }}>
              Entraremos em contato em breve!
            </h4>
            <p className="text-green-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Nossa equipe de especialistas analisará suas informações e retornará o contato dentro de 24 horas para apresentar a melhor solução para o seu negócio.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}