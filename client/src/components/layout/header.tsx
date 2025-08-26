import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "@/components/ui/mobile-menu";
import logoLina from "../../assets/logo-lina.png";
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const produtosDropdownItems = [
    { label: "Data Link", href: "/data-link" },
    { label: "Lina Pay", href: "/lina-pay" },
    { label: "JSR", href: "/jsr" },
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
              <Link href="/">
                <img 
                  src={logoLina} 
                  alt="LINA" 
                  className="h-6 w-auto cursor-pointer"
                  data-testid="img-logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation and Contact Link */}
            {!isMobile && (
              <div className="flex items-center space-x-8" data-testid="nav-desktop">
                {navigationItems.map((item) => {
                  if (item.label === "Produtos" && item.hasDropdown) {
                    return (
                      <DropdownMenu key={item.label}>
                        <DropdownMenuTrigger className="text-gray-600 hover:text-lina-cyan font-normal transition-colors flex items-center text-[15px] border-none bg-transparent">
                          {item.label}
                          <ChevronDown className="ml-1 h-3 w-3 text-lina-cyan" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {produtosDropdownItems.map((dropdownItem) => (
                            <DropdownMenuItem key={dropdownItem.label} asChild>
                              <Link href={dropdownItem.href}>
                                {dropdownItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    );
                  }
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-600 hover:text-lina-cyan font-normal transition-colors flex items-center text-[15px]"
                      data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                      {item.hasDropdown && <ChevronDown className="ml-1 h-3 w-3 text-lina-cyan" />}
                    </a>
                  );
                })}
                
                {/* Entre em Contato Link */}
                <a 
                  href="#contato"
                  className="hover:text-lina-cyan/80 font-medium transition-colors text-[#009999] text-[15px]"
                  data-testid="link-contact"
                >
                  Entre em Contato
                </a>
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
