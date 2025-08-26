import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "@/components/ui/mobile-menu";
import NavigationDropdown from "@/components/ui/navigation-dropdown";
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

  const productDropdownItems = [
    { 
      label: "Data Link", 
      href: "/data-link", 
      description: "APIs de dados bancários e de investimentos via Open Finance" 
    }
  ];

  const resourceDropdownItems = [
    { 
      label: "Blog", 
      href: "#blog", 
      description: "Artigos e insights sobre Open Finance" 
    },
    { 
      label: "Documentação", 
      href: "#docs", 
      description: "Guias técnicos e referências de API" 
    }
  ];

  return (
    <>
      <header 
        className="fixed top-0 w-full z-50 pt-4"
        data-testid="header-main"
      >
        <div className="container mx-auto px-8">
          <nav className="bg-white rounded-full shadow-lg px-8 py-4">
            <div className="flex items-center justify-between ml-[6px] mr-[6px] pl-[-2px] pr-[-2px]">
            {/* Logo */}
            <div className="flex items-center" data-testid="logo-container">
              <img 
                src={logoLina} 
                alt="LINA" 
                className="h-6 w-auto"
                data-testid="img-logo"
              />
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="flex items-center space-x-8 ml-[0px] mr-[0px] pl-[77px] pr-[77px] text-right" data-testid="nav-desktop">
                {navigationItems.map((item) => {
                  if (item.label === "Produtos" && item.hasDropdown) {
                    return (
                      <NavigationDropdown
                        key={item.label}
                        label={item.label}
                        items={productDropdownItems}
                        className="ml-[14px] mr-[14px]"
                      />
                    );
                  }
                  if (item.label === "Recursos" && item.hasDropdown) {
                    return (
                      <NavigationDropdown
                        key={item.label}
                        label={item.label}
                        items={resourceDropdownItems}
                        className="ml-[14px] mr-[14px]"
                      />
                    );
                  }
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-600 hover:text-lina-cyan font-normal transition-colors flex items-center text-[13px] pl-[0px] pr-[0px] ml-[14px] mr-[14px] text-left"
                      data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                      {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3 text-lina-cyan" />}
                    </a>
                  );
                })}
              </div>
            )}

            {/* Entre em Contato Link */}
            {!isMobile && (
              <a 
                href="#contato"
                className="hover:text-lina-cyan/80 font-medium transition-colors text-[#009999] text-[13px]"
                data-testid="link-contact"
              >
                Entre em Contato
              </a>
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
