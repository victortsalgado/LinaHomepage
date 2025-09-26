"use client";

import { useState, useEffect, useRef } from 'react';
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
      
      // Only sync with RD Station if not transitioning between steps
      if (!isTransitioning) {
        // Clear existing timeout
        if (syncTimeout) {
          clearTimeout(syncTimeout);
        }
        
        // Set new timeout for debounced sync
        const newTimeout = setTimeout(() => {
          syncWithRDStation();
        }, 1000);
        
        setSyncTimeout(newTimeout);
      }
      
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

  // Sync with RD Station form when step changes or data updates
  const syncWithRDStation = () => {
    setTimeout(() => {
      console.log('[RD SYNC] Attempting to sync with RD Station form...');
      console.log('[RD SYNC] Current form data:', formData);
      
      // Find RD Station form fields and populate them
      const rdForm = document.querySelector('[role="main"][id*="teste_lina"]') || document.getElementById('teste_lina-bw_lp_linapay-4d252035dc055a459f05');
      console.log('[RD SYNC] RD Form found:', !!rdForm);
      
      if (rdForm) {
        console.log('[RD SYNC] RD Form element:', rdForm);
        
        // Look for all input fields in the form
        const allInputs = rdForm.querySelectorAll('input, select, textarea');
        console.log('[RD SYNC] All form controls found:', allInputs.length);
        
        // Log all available inputs for debugging
        allInputs.forEach((input, index) => {
          const element = input as HTMLInputElement;
          console.log(`[RD SYNC] Input ${index}:`, {
            type: element.type,
            name: element.name,
            placeholder: element.placeholder,
            id: element.id,
            className: element.className
          });
        });
        
        // Try multiple selectors for each field type with more variations
        const nameSelectors = [
          'input[name*="name"]', 'input[name*="nome"]', 'input[placeholder*="nome"]', 
          'input[placeholder*="name"]', 'input[placeholder*="Nome"]', 'input[data-name*="name"]',
          'input[id*="name"]', 'input[id*="nome"]', 'input[class*="name"]'
        ];
        
        const emailSelectors = [
          'input[type="email"]', 'input[name*="email"]', 'input[placeholder*="email"]', 
          'input[placeholder*="Email"]', 'input[id*="email"]', 'input[class*="email"]'
        ];
        
        const phoneSelectors = [
          'input[type="tel"]', 'input[name*="phone"]', 'input[name*="telefone"]', 
          'input[placeholder*="telefone"]', 'input[placeholder*="Telefone"]', 
          'input[placeholder*="phone"]', 'input[id*="phone"]', 'input[id*="telefone"]'
        ];
        
        const companySelectors = [
          'input[name*="company"]', 'input[name*="empresa"]', 'input[placeholder*="empresa"]', 
          'input[placeholder*="Empresa"]', 'input[placeholder*="company"]', 
          'input[id*="company"]', 'input[id*="empresa"]'
        ];

        // Find fields using comprehensive selectors
        const findField = (selectors: string[]) => {
          for (const selector of selectors) {
            const field = rdForm.querySelector(selector) as HTMLInputElement;
            if (field) return field;
          }
          return null;
        };

        const nameInput = findField(nameSelectors);
        const emailInput = findField(emailSelectors);
        const phoneInput = findField(phoneSelectors);
        const companyInput = findField(companySelectors);

        console.log('[RD SYNC] Fields found:', {
          nameInput: !!nameInput,
          emailInput: !!emailInput, 
          phoneInput: !!phoneInput,
          companyInput: !!companyInput
        });

        // Helper function to fill field with multiple event types
        const fillField = (input: HTMLInputElement, value: string, fieldName: string) => {
          if (input && value) {
            console.log(`[RD SYNC] Filling ${fieldName} with value:`, value);
            
            // Clear existing value
            input.value = '';
            
            // Set new value using multiple methods
            input.value = value;
            input.setAttribute('value', value);
            
            // Dispatch multiple event types to ensure compatibility
            const events = ['focus', 'input', 'change', 'blur', 'keyup', 'keydown'];
            events.forEach(eventType => {
              const event = new Event(eventType, { bubbles: true, cancelable: true });
              input.dispatchEvent(event);
            });
            
            // Also try native value setter
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
            if (nativeInputValueSetter) {
              nativeInputValueSetter.call(input, value);
              input.dispatchEvent(new Event('input', { bubbles: true }));
            }
            
            // Verify the value was set
            console.log(`[RD SYNC] ${fieldName} field value after setting:`, input.value);
          } else if (!input) {
            console.warn(`[RD SYNC] ${fieldName} input not found`);
          }
        };

        // Fill the fields
        if (nameInput) fillField(nameInput, formData.nome, 'name');
        if (emailInput) fillField(emailInput, formData.email, 'email');
        if (phoneInput) fillField(phoneInput, formData.telefone, 'phone');
        if (companyInput) fillField(companyInput, formData.empresa, 'company');
      } else {
        console.error('[RD SYNC] RD Station form not found');
        // Try to find any form element for debugging
        const allForms = document.querySelectorAll('form');
        console.log('[RD SYNC] All forms on page:', allForms.length);
        allForms.forEach((form, index) => {
          console.log(`[RD SYNC] Form ${index}:`, form.id, form.className);
        });
      }
    }, 1000); // Further increased timeout
  };

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

  const handleFormComplete = () => {
    console.log('[RD SUBMIT] Starting form completion process...');
    
    // Validate all fields before submitting
    const isFormValid = validateName(formData.nome) && 
                       validateEmail(formData.email) && 
                       validatePhone(formData.telefone) && 
                       validateCompany(formData.empresa);
    
    if (!isFormValid) {
      console.warn('[RD SUBMIT] Form validation failed. Cannot submit incomplete form.');
      alert('Por favor, preencha todos os campos obrigatórios antes de enviar.');
      return;
    }
    
    console.log('[RD SUBMIT] Form is valid, proceeding with submission...');
    syncWithRDStation();
    
    // Submit RD Station form after ensuring data is synced
    setTimeout(() => {
      console.log('[RD SUBMIT] Attempting to submit RD Station form...');
      const rdForm = document.querySelector('[role="main"][id*="teste_lina"]');
      
      if (rdForm) {
        console.log('[RD SUBMIT] RD Form found, looking for submit button...');
        
        // Try multiple selectors for submit button
        let submitButton: HTMLButtonElement | null = null;
        
        // First try standard submit selectors
        submitButton = rdForm.querySelector('button[type="submit"], input[type="submit"], .bricks-button, .rd-button') as HTMLButtonElement;
        
        // If not found, search for buttons by text content
        if (!submitButton) {
          const allButtons = rdForm.querySelectorAll('button, input[type="button"]');
          for (const button of Array.from(allButtons)) {
            const text = button.textContent?.trim().toLowerCase() || '';
            const value = (button as HTMLInputElement).value?.trim().toLowerCase() || '';
            if (text.includes('enviar') || text.includes('submit') || value.includes('enviar') || value.includes('submit')) {
              submitButton = button as HTMLButtonElement;
              break;
            }
          }
        }
        
        console.log('[RD SUBMIT] Submit button found:', !!submitButton);
        
        if (submitButton) {
          console.log('[RD SUBMIT] Clicking submit button...');
          submitButton.click();
          
          // Also trigger form submit event as backup
          const form = rdForm.querySelector('form') as HTMLFormElement;
          if (form) {
            console.log('[RD SUBMIT] Found form element, triggering submit...');
            form.submit();
          }
        } else {
          console.warn('[RD SUBMIT] No submit button found. Available buttons:', rdForm.querySelectorAll('button, input[type="submit"]'));
        }
      } else {
        console.error('[RD SUBMIT] RD Station form not found');
      }
    }, 1000); // Increased timeout to ensure sync is complete
    
    // Mark form as submitted to show confirmation message
    setTimeout(() => {
      setIsFormSubmitted(true);
    }, 1500);
  };

  return (
    <div className={className}>
      {/* Hidden RD Station Form - positioned off-screen but visible for functionality */}
      <div style={{ 
        position: 'absolute', 
        left: '-9999px', 
        top: '-9999px', 
        width: '1px', 
        height: '1px', 
        opacity: 0.01,
        pointerEvents: 'none'
      }}>
        <RDStationForm className="" />
      </div>

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