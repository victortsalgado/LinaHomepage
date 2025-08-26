import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "@/components/ui/mobile-menu";
import logoLina from "../../assets/logo-lina.png";
import { Link } from "wouter";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const produtosDropdownItems = [
    { 
      title: "Data Link", 
      href: "/data-link",
      description: "Solução completa para integração de dados empresariais"
    },
    { 
      title: "Lina Pay", 
      href: "/lina-pay",
      description: "Sistema de pagamentos digitais integrado"
    },
    { 
      title: "JSR", 
      href: "/jsr",
      description: "Plataforma de gestão e relatórios avançados"
    },
  ];

  const recursosDropdownItems = [
    {
      title: "Blog",
      href: "/blog",
      description: "Artigos e insights sobre tecnologia e negócios"
    },
    {
      title: "Documentação",
      href: "/docs",
      description: "Guias técnicos e manuais de integração"
    },
    {
      title: "Suporte",
      href: "/suporte",
      description: "Central de ajuda e atendimento ao cliente"
    },
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

            {/* Desktop Navigation */}
            {!isMobile && (
              <NavigationMenu data-testid="nav-desktop">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 hover:text-lina-cyan font-normal transition-colors text-[15px] h-9">
                      Produtos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {produtosDropdownItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 hover:text-lina-cyan font-normal transition-colors text-[15px] h-9">
                      Recursos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {recursosDropdownItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#integracoes" 
                      className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-lina-cyan font-normal transition-colors text-[15px] h-9")}
                      data-testid="link-nav-integracoes"
                    >
                      Integrações
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#demo" 
                      className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-lina-cyan font-normal transition-colors text-[15px] h-9")}
                      data-testid="link-nav-demo"
                    >
                      Demo
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#quem-somos" 
                      className={cn(navigationMenuTriggerStyle(), "text-gray-600 hover:text-lina-cyan font-normal transition-colors text-[15px] h-9")}
                      data-testid="link-nav-quem-somos"
                    >
                      Quem Somos
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#contato" 
                      className={cn(navigationMenuTriggerStyle(), "hover:text-lina-cyan/80 font-medium transition-colors text-[#009999] text-[15px] h-9")}
                      data-testid="link-contact"
                    >
                      Entre em Contato
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
        navigationItems={[
          { label: "Produtos", href: "#produtos" },
          { label: "Recursos", href: "#recursos" },
          { label: "Integrações", href: "#integracoes" },
          { label: "Demo", href: "#demo" },
          { label: "Quem Somos", href: "#quem-somos" },
        ]}
      />
    </>
  );
}

function ListItem({ 
  className, 
  title, 
  children, 
  href, 
  ...props 
}: { 
  className?: string; 
  title: string; 
  children: string; 
  href: string; 
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
