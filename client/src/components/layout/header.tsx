import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "@/components/ui/mobile-menu";
import logoLina from "../../assets/logo-lina.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navigationItems = [
    { label: "Produtos", href: "#produtos", hasDropdown: true },
    { label: "Recursos", href: "#recursos", hasDropdown: true },
    { label: "Integrações", href: "#integracoes" },
    { label: "Demo", href: "#demo" },
    { label: "Quem Somos", href: "#quem-somos" },
  ];

  return (
    <>
      <header 
        className="fixed top-0 w-full z-50 pt-4"
        data-testid="header-main"
      >
        <div className="container mx-auto px-8">
          <nav className="bg-white rounded-full shadow-lg px-8 py-4">
            <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center" data-testid="logo-container">
              <img 
                src={logoLina} 
                alt="LINA" 
                className="h-8 w-auto"
                data-testid="img-logo"
              />
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="flex items-center space-x-8" data-testid="nav-desktop">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-lina-cyan font-normal transition-colors text-sm flex items-center"
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3 text-gray-400" />}
                  </a>
                ))}
              </div>
            )}

            {/* Entre em Contato Button */}
            {!isMobile && (
              <Button 
                className="bg-lina-cyan text-white px-6 py-2 rounded-lg font-medium hover:bg-lina-cyan/90 transition-colors"
                data-testid="button-contact"
              >
                Entre em Contato
              </Button>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu-toggle"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            )}
          </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </>
  );
}
