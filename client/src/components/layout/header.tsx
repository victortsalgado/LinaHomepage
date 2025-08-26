import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "@/components/ui/mobile-menu";
import logoPath from "../../assets/Home_Logo_Pix_BG_LinaPay_1756226661320.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navigationItems = [
    { label: "Produtos", href: "#produtos" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Desenvolvedores", href: "#desenvolvedores" },
    { label: "Empresa", href: "#empresa" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <>
      <header 
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100"
        data-testid="header-main"
      >
        <nav className="container mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3" data-testid="logo-container">
              <img 
                src={logoPath} 
                alt="LINA Logo" 
                className="h-10 w-10"
                data-testid="img-logo"
              />
              <span className="text-2xl font-bold text-lina-dark" data-testid="text-logo">
                LINA
              </span>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="flex items-center space-x-8" data-testid="nav-desktop">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-lina-cyan font-medium transition-colors"
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  className="gradient-lina text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  data-testid="button-contact-specialist"
                >
                  Falar com Especialista
                </Button>
              </div>
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
