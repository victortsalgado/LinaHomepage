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
    // Initialize the form using the globally loaded RD Station script
    if (window.RDStationForms) {
      new window.RDStationForms(formId, 'UA-228918210-1').createForm();
    } else {
      console.error('RD Station Forms script not loaded. Ensure the script is included in index.html');
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