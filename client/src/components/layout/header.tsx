import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "@/components/ui/mobile-menu";

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
        className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-100"
        data-testid="header-main"
      >
        <nav className="container mx-auto px-8 lg:px-12 py-4">
          <div className="flex items-center justify-center">
            {/* Logo */}
            <div className="flex items-center" data-testid="logo-container">
              <span className="text-2xl font-bold text-lina-cyan" data-testid="text-logo">
                LINA
              </span>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="flex items-center space-x-8 ml-12" data-testid="nav-desktop">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-lina-cyan font-normal transition-colors text-sm flex items-center"
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3" />}
                  </a>
                ))}
                <Button 
                  className="bg-lina-cyan text-white px-4 py-2 rounded-md font-medium hover:bg-lina-cyan/90 transition-colors ml-4"
                  data-testid="button-contact"
                >
                  Entre em Contato
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <div className="ml-auto">
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
              </div>
            )}
          </div>
        </nav>
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
