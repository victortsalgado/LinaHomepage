import { useEffect } from 'react';

interface RDStationFormProps {
  formId?: string;
  className?: string;
}

// Declare global RDStationForms to avoid TypeScript errors
declare global {
  interface Window {
    RDStationForms: any;
  }
}

export default function RDStationForm({ 
  formId = 'teste_lina-bw_lp_linapay-4d252035dc055a459f05', 
  className = "" 
}: RDStationFormProps) {
  useEffect(() => {
    // Load RD Station script if not already loaded
    if (!document.querySelector('script[src*="rdstation-forms"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
      script.onload = () => {
        // Initialize the form after script loads
        if (window.RDStationForms) {
          new window.RDStationForms(formId, 'UA-228918210-1').createForm();
        }
      };
      document.head.appendChild(script);
    } else {
      // Script already loaded, just create the form
      if (window.RDStationForms) {
        new window.RDStationForms(formId, 'UA-228918210-1').createForm();
      }
    }

    // Cleanup function to clear form on unmount
    return () => {
      const element = document.getElementById(formId);
      if (element) {
        element.innerHTML = '';
      }
    };
  }, [formId]);

  return (
    <div 
      role="main" 
      id={formId}
      className={className}
      data-testid={`rdstation-form-${formId}`}
    />
  );
}