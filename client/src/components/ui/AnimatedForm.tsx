"use client";

import { useState, useEffect, useRef } from 'react';
import Stepper, { Step } from './Stepper';
import { submitToRDStation } from '../../api/rdstation';

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
  const [syncTimeout, setSyncTimeout] = useState<NodeJS.Timeout | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Refs for controlled focus management
  const nomeInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const telefoneInputRef = useRef<HTMLInputElement>(null);
  const empresaInputRef = useRef<HTMLInputElement>(null);
  
  // Store original scroll position to prevent unwanted scrolling
  const originalScrollRef = useRef<number>(0);

  // Validation functions
  const validateName = (value: string) => value.trim().length >= 2;
  const validateEmail = (value: string) => {
    // Basic email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return false;
    }
    
    // List of common personal email providers to exclude
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

  const handleInputChange = (field: keyof FormData, value: string) => {
    const processedValue = field === 'telefone' ? formatPhone(value) : value;
    setFormData(prev => {
      const newData = { ...prev, [field]: processedValue };
      
      // Form data updated successfully
      console.log('[INPUT CHANGE] Form data updated:', field, '=', processedValue);
      
      return newData;
    });
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (syncTimeout) {
        clearTimeout(syncTimeout);
      }
    };
  }, [syncTimeout]);

  // Validate current step
  const validateCurrentStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return validateName(formData.nome);
      case 2:
        return validateEmail(formData.email);
      case 3:
        return validatePhone(formData.telefone);
      case 4:
        return validateCompany(formData.empresa);
      case 5:
        return validateName(formData.nome) && validateEmail(formData.email) && 
               validatePhone(formData.telefone) && validateCompany(formData.empresa);
      default:
        return false;
    }
  };

  // Update field validation based on current step
  useEffect(() => {
    setCurrentFieldValid(validateCurrentStep(currentStep));
  }, [formData, currentStep]);

  // Global scroll prevention during transitions
  useEffect(() => {
    if (isTransitioning) {
      // Store current scroll position
      originalScrollRef.current = window.scrollY;
      
      // Create scroll prevention handler
      const preventScroll = (e: Event) => {
        e.preventDefault();
        window.scrollTo(0, originalScrollRef.current);
      };
      
      // Add scroll prevention listeners
      window.addEventListener('scroll', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });
      
      console.log(`[SCROLL PREVENTION] Activated at position ${originalScrollRef.current}`);
      
      // Auto-disable after animation completes
      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 800); // Slightly longer than typical animation duration
      
      return () => {
        window.removeEventListener('scroll', preventScroll);
        document.removeEventListener('touchmove', preventScroll);
        clearTimeout(timeoutId);
        console.log('[SCROLL PREVENTION] Deactivated');
      };
    }
  }, [isTransitioning]);


  const handleStepChange = (step: number) => {
    console.log(`[STEP CHANGE] Attempting to change from step ${currentStep} to step ${step}`);
    
    // Validate current step before allowing progression
    if (step > currentStep && !validateCurrentStep(currentStep)) {
      console.log(`[STEP CHANGE] Validation failed for step ${currentStep}, preventing progression`);
      return;
    }
    
    console.log(`[STEP CHANGE] Validation passed, updating step to ${step}`);
    
    // Activate scroll prevention immediately
    setIsTransitioning(true);
    originalScrollRef.current = window.scrollY;
    console.log(`[STEP CHANGE] Scroll prevention activated at position ${originalScrollRef.current}`);
    
    // Change step without any additional operations that might cause scroll
    setCurrentStep(step);
    
    console.log('[STEP CHANGE] Step changed, all sync and focus operations blocked during transition');
  };

  const handleFormComplete = async () => {
    console.log('Iniciando envio do formulário...', formData);
    setIsFormSubmitted(true);
    
    try {
      // Preparar dados para o RD Station
      const rdData = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        empresa: formData.empresa,
      };

      console.log('Dados preparados para envio:', rdData);

      // Enviar para RD Station via API direta
      await submitToRDStation(rdData);
      
      console.log('✅ Lead enviado com sucesso!');
      
      // Disparar evento de analytics (se GA estiver disponível)
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'rd_station_form_success'
        });
      }
      
      // Opcional: redirecionar para página de obrigado ou mostrar mensagem
      // window.location.href = '/obrigado';
      
    } catch (error) {
      console.error('❌ Erro no envio do formulário:', error);
      setIsFormSubmitted(false);
      
      // Disparar evento de erro no analytics
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'form_error', {
          event_category: 'engagement',
          event_label: 'rd_station_form_error'
        });
      }
      
      // Aqui você pode mostrar uma mensagem de erro para o usuário
      alert('Erro ao enviar formulário. Tente novamente.');
    }
  };

  return (
    <div className={className}>
      {/* Animated Stepper Form */}
      <Stepper
        initialStep={1}
        onStepChange={handleStepChange}
        onFinalStepCompleted={handleFormComplete}
        backButtonText="Anterior"
        nextButtonText="Continuar"
        canProceed={currentFieldValid}
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
                ref={nomeInputRef}
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
                ref={emailInputRef}
              />
            </div>
            {formData.email && !validateEmail(formData.email) && (
              <p className="text-red-500 text-sm mt-2">
                {!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) 
                  ? "Por favor, insira um email válido" 
                  : "Por favor, use um email corporativo (não Gmail, Hotmail, Yahoo, etc.)"}
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
                ref={telefoneInputRef}
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
                ref={empresaInputRef}
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