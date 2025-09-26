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
  formId = 'bw_lp_linapay-b7eb1ff97c2b35f91e32', 
  className = "" 
}: RDStationFormProps) {
  useEffect(() => {
    // Initialize the form using the globally loaded RD Station script
    if (window.RDStationForms) {
      new window.RDStationForms(formId, 'UA-228918210-1').createForm();
    } else {
      console.error('RD Station Forms script not loaded. Ensure the script is included in index.html');
    }

    // Function to hide url_pagina text and elements
    const hideUrlPagina = () => {
      const formElement = document.getElementById(formId);
      if (formElement) {
        // Hide any text node containing "url_pagina"
        const walker = document.createTreeWalker(
          formElement,
          NodeFilter.SHOW_TEXT
        );

        const textNodesToHide = [];
        let node;
        while (node = walker.nextNode()) {
          if (node.textContent?.trim() === 'url_pagina') {
            textNodesToHide.push(node);
          }
        }

        textNodesToHide.forEach(textNode => {
          const parent = textNode.parentElement;
          if (parent) {
            parent.style.display = 'none';
            parent.style.visibility = 'hidden';
            parent.style.opacity = '0';
            parent.style.height = '0';
            parent.style.width = '0';
            parent.style.margin = '0';
            parent.style.padding = '0';
            parent.style.overflow = 'hidden';
          }
        });

        // Also hide any elements with url-related attributes
        const urlElements = formElement.querySelectorAll('[name*="url"], [id*="url"], [class*="url"]');
        urlElements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.style.height = '0';
            el.style.width = '0';
            el.style.margin = '0';
            el.style.padding = '0';
            el.style.overflow = 'hidden';
          }
        });
      }
    };

    // Run immediately and also set up interval to catch dynamically loaded content
    setTimeout(hideUrlPagina, 100);
    setTimeout(hideUrlPagina, 500);
    setTimeout(hideUrlPagina, 1000);
    
    const interval = setInterval(hideUrlPagina, 2000);

    // Cleanup function to clear form on unmount
    return () => {
      clearInterval(interval);
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