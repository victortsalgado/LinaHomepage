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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Função para detectar quando qualquer menu do NavigationMenu está aberto
  const handleMenuOpen = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);

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
      {/* Overlay para desfoque */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
          style={{ top: '80px' }}
        />
      )}
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
              <NavigationMenu data-testid="nav-desktop" onValueChange={(value) => {
                if (value) {
                  handleMenuOpen();
                } else {
                  handleMenuClose();
                }
              }}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 hover:text-lina-cyan font-normal transition-colors text-[15px] h-9">
                      Produtos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/40 p-6 no-underline outline-none">
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Produtos LINA
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Soluções completas para integração e gestão de dados empresariais
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-2">
                          {produtosDropdownItems.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-600 hover:text-lina-cyan font-normal transition-colors text-[15px] h-9">
                      Recursos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/40 p-6 no-underline outline-none">
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Recursos LINA
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Materiais e suporte para maximizar o uso das nossas soluções
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-2">
                          {recursosDropdownItems.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </div>
                      </div>
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
  )
}
