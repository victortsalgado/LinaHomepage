import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: { label: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navigationItems }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 lg:hidden"
      data-testid="mobile-menu-overlay"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        data-testid="mobile-menu-backdrop"
      />
      
      {/* Menu Content */}
      <div 
        className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300"
        data-testid="mobile-menu-content"
      >
        <div className="flex justify-end p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            data-testid="button-mobile-menu-close"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <nav className="px-6 py-4">
          <ul className="space-y-6">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block text-lg text-gray-700 hover:text-lina-cyan font-medium transition-colors"
                  onClick={onClose}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-8">
            <Button 
              className="w-full gradient-lina text-white py-3 rounded-xl font-semibold"
              onClick={onClose}
              data-testid="button-mobile-contact-specialist"
            >
              Falar com Especialista
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
