import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      data-testid="button-scroll-to-top"
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-[#00b6ac] hover:bg-[#00b6ac]/90 text-white shadow-lg transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-[#00b6ac]/20 focus:ring-offset-2"
      size="icon"
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
}