import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "@/components/ui/mobile-menu";
import logoLina from "@assets/7906d125-8a87-4c30-ba79-7e52df4e1545_1756708646805.png";
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
  const produtosDropdownItems = [
    { 
      title: "Data Link", 
      href: "/data-link",
      description: "Solução completa para integração de dados empresariais",
      imageSrc: "/assets/menu/data-link.png"
    },
    { 
      title: "Lina Pay", 
      href: "/lina-pay",
      description: "Sistema de pagamentos digitais integrado",
      imageSrc: "/assets/menu/lina-pay.png"
    },
    { 
      title: "JSR", 
      href: "/jsr",
      description: "Plataforma de gestão e relatórios avançados",
      imageSrc: "/assets/menu/jsr.png"
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProduct, setActiveProduct] = useState(produtosDropdownItems[0]);
  const isMobile = useIsMobile();

  // Detectar scroll para efeitos do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para detectar quando qualquer menu do NavigationMenu está aberto
  const handleMenuOpen = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);

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
        className="fixed top-0 w-full z-50 transition-all duration-300"
        data-testid="header-main"
      >
        <div className={cn(
          "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
          isScrolled && "bg-white/90 rounded-full border backdrop-blur-lg shadow-sm"
        )}>
          <nav className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 transition-all duration-300">
            <div className="flex w-full justify-between lg:w-auto">
              {/* Logo */}
              <Link href="/" aria-label="home" className="flex items-center space-x-2" data-testid="logo-container">
                <img 
                  src={logoLina} 
                  alt="LINA" 
                  className={cn(
                    "w-auto cursor-pointer transition-all duration-300",
                    isScrolled ? "h-5" : "h-6"
                  )}
                  data-testid="img-logo"
                />
              </Link>

              {/* Mobile Menu Button */}
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
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

            {/* Desktop Navigation - Centered */}
            {!isMobile && (
              <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                <NavigationMenu data-testid="nav-desktop" onValueChange={(value) => {
                  if (value) {
                    handleMenuOpen();
                  } else {
                    handleMenuClose();
                  }
                }}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-600 hover:text-lina-cyan font-normal transition-colors text-[15px] h-9 bg-transparent border-none shadow-none [&[data-state=open]>svg]:text-lina-cyan">
                        Produtos
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-3 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-[1fr_.75fr]">
                          {/* Left Column - Product List */}
                          <div className="grid grid-cols-1 gap-3">
                            {produtosDropdownItems.map((item) => (
                              <div
                                key={item.title}
                                onMouseEnter={() => setActiveProduct(item)}
                              >
                                <ListItem
                                  title={item.title}
                                  href={item.href}
                                >
                                  {item.description}
                                </ListItem>
                              </div>
                            ))}
                          </div>
                          
                          {/* Right Column - Dynamic Content */}
                          <div className="row-span-3">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={activeProduct.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/40 p-6 no-underline outline-none"
                              >
                                <div className="mb-4">
                                  <div className="w-full h-32 bg-gradient-to-r from-lina-cyan/20 to-blue-100 rounded-md mb-4 flex items-center justify-center">
                                    <span className="text-gray-600 text-sm font-medium">
                                      {activeProduct.title}
                                    </span>
                                  </div>
                                </div>
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  {activeProduct.title}
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {activeProduct.description}
                                </p>
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-600 hover:text-lina-cyan font-normal transition-colors text-[15px] h-9 bg-transparent border-none shadow-none [&[data-state=open]>svg]:text-lina-cyan">
                        Recursos
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink 
                        href="#integracoes" 
                        className="hover:text-lina-cyan/80 font-normal transition-colors text-gray-600 text-[15px] h-9 bg-transparent border-none shadow-none px-4 py-2"
                        data-testid="link-integrations"
                      >
                        Integrações
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink 
                        href="#demo" 
                        className="hover:text-lina-cyan/80 font-normal transition-colors text-gray-600 text-[15px] h-9 bg-transparent border-none shadow-none px-4 py-2"
                        data-testid="link-demo"
                      >
                        Demo
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink 
                        href="#quem-somos" 
                        className="hover:text-lina-cyan/80 font-normal transition-colors text-gray-600 text-[15px] h-9 bg-transparent border-none shadow-none px-4 py-2"
                        data-testid="link-about"
                      >
                        Quem Somos
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            )}

            {/* Contact Button - Right */}
            {!isMobile && (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#contato" 
                      className="hover:text-lina-cyan/80 font-medium transition-colors text-[#009999] text-[15px] h-9 bg-transparent border-none shadow-none px-4 py-2"
                      data-testid="link-contact"
                    >
                      Entre em Contato
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}
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