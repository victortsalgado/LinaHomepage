import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "@/components/ui/mobile-menu";
import logoLina from "@assets/7906d125-8a87-4c30-ba79-7e52df4e1545_1756708646805.png";
import dataLinkLogo from "@assets/Logo_Produto_DataLink_1758621910210.png";
import linaPayLogo from "@assets/Logo_Produto_LinaPay_1758622359589.png";
import linaJSRLogo from "@assets/Logo_Produto_LinaJSR_1758622910938.png";
import { Link, useLocation } from "wouter";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuTriggerUnstyled,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const produtosDropdownItems = [
    { 
      title: "Data Link", 
      href: "/data-link",
      description: "Integre dados bancários do Open Finance",
      badges: ["API First", "Analytics", "Insights"],
      imageSrc: dataLinkLogo
    },
    { 
      title: "Lina Pay", 
      href: "/lina-pay",
      description: "Gateway completo de PIX com a flexibilidade do Open Finance",
      badges: ["PIX", "Cobrança", "Recorrência"],
      imageSrc: linaPayLogo
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProduct, setActiveProduct] = useState(produtosDropdownItems[0]);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  // Detectar se estamos em páginas com fundo escuro
  const isDarkPage = location === '/infraestrutura-e-conectividade';
  const shouldUseWhiteText = isDarkPage && !isScrolled;

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

  const integracoesDropdownItems = [
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
          "container mx-auto mt-2 px-6 transition-all duration-300 lg:px-8 max-w-[92rem]",
          isScrolled && "bg-white/90 rounded-full border backdrop-blur-lg shadow-sm"
        )}>
          <nav className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 transition-all duration-300">
            <div className="flex w-full justify-between lg:w-auto">
              {/* Logo */}
              <Link href="/" aria-label="home" className="flex items-center space-x-2" data-testid="logo-container">
                <img 
                  src={logoLina} 
                  alt="LINA" 
                  className="w-auto h-6 cursor-pointer transition-all duration-300"
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
                      <NavigationMenuTriggerUnstyled asChild>
                        <button className={cn(
                          "group relative font-normal text-[16px] h-9 bg-transparent border-none shadow-none px-4 py-2 transition-all duration-300 hover:text-[#00b6ac] hover:scale-105 before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-1/2 before:bg-gradient-to-r before:from-teal-500 before:to-cyan-500 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 data-[state=open]:text-[#00b6ac] data-[state=open]:scale-105 data-[state=open]:before:w-full data-[state=open]:before:left-0 flex items-center",
                          shouldUseWhiteText ? "text-white" : "text-gray-600"
                        )}>
                          Produtos
                          <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </button>
                      </NavigationMenuTriggerUnstyled>
                      <NavigationMenuContent>
                        <div className="grid gap-0 md:w-[600px] lg:w-[750px] lg:grid-cols-[1.3fr_1fr]">
                          {/* Left Column - Product List */}
                          <div className="grid grid-cols-1 gap-0.5 p-2 bg-white dark:bg-gray-900">
                            {produtosDropdownItems.map((item) => (
                              <div
                                key={item.title}
                                onMouseEnter={() => setActiveProduct(item)}
                              >
                                <Link
                                  to={item.href}
                                  className={cn(
                                    "group relative block select-none rounded-lg p-3.5 leading-none no-underline outline-none transition-all duration-200",
                                    "hover:bg-gray-50 dark:hover:bg-gray-800",
                                    activeProduct.title === item.title && "bg-gray-50 dark:bg-gray-800"
                                  )}
                                >
                                  <div className="flex items-start gap-3">
                                    {/* Product Info */}
                                    <div className="flex-1 space-y-1">
                                      <div className="flex items-center gap-2">
                                        <h4 className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                                          {item.title}
                                        </h4>
                                        <svg 
                                          className={cn(
                                            "h-3.5 w-3.5 transition-all duration-200 opacity-0 -translate-x-1",
                                            "group-hover:opacity-100 group-hover:translate-x-0 text-teal-500"
                                          )} 
                                          fill="none" 
                                          viewBox="0 0 24 24" 
                                          stroke="currentColor"
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </div>
                                      <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Hover indicator line */}
                                  <div className={cn(
                                    "absolute left-0 top-0 h-full w-0.5 rounded-r-full transition-all duration-200",
                                    "bg-gradient-to-b from-teal-500 to-cyan-500",
                                    "opacity-0 group-hover:opacity-100",
                                    activeProduct.title === item.title && "opacity-100"
                                  )} />
                                </Link>
                              </div>
                            ))}
                          </div>

                          {/* Right Column - Visual Preview with Badges Only */}
                          <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-8">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={activeProduct.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="flex flex-col items-center text-center"
                              >
                                {/* Logo destacada */}
                                <div className="relative mb-5">
                                  <div className="absolute inset-0 bg-teal-500/10 dark:bg-teal-500/5 rounded-2xl blur-2xl" />
                                  <div className="relative">
                                    <img 
                                      src={activeProduct.imageSrc} 
                                      alt={activeProduct.title}
                                      className="h-24 w-auto object-contain"
                                    />
                                  </div>
                                </div>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-2 justify-center">
                                  {activeProduct.badges && activeProduct.badges.map((badge: string, index: number) => (
                                    <div 
                                      key={index}
                                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border border-teal-200/50 dark:border-teal-700/50"
                                    >
                                      {badge}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                      <NavigationMenuTriggerUnstyled asChild>
                        <button className={cn(
                          "group relative font-normal text-[16px] h-9 bg-transparent border-none shadow-none px-4 py-2 transition-all duration-300 hover:text-[#00b6ac] hover:scale-105 before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-1/2 before:bg-gradient-to-r before:from-teal-500 before:to-cyan-500 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 data-[state=open]:text-[#00b6ac] data-[state=open]:scale-105 data-[state=open]:before:w-full data-[state=open]:before:left-0 flex items-center",
                          shouldUseWhiteText ? "text-white" : "text-gray-600"
                        )}>
                          Integrações
                          <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </button>
                      </NavigationMenuTriggerUnstyled>
                      <NavigationMenuContent>
                        <div className="grid w-[400px] gap-0.5 p-2 md:w-[400px] lg:w-[450px] bg-white dark:bg-gray-900">
                          {integracoesDropdownItems.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className={cn(
                                "group relative block select-none rounded-lg p-3.5 leading-none no-underline outline-none transition-all duration-200",
                                "hover:bg-gray-50 dark:hover:bg-gray-800"
                              )}
                            >
                              <div className="flex items-start gap-3">
                                {/* Integration Info */}
                                <div className="flex-1 space-y-1">
                                  <div className="flex items-center gap-2">
                                    <h4 className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                                      {item.title}
                                    </h4>
                                    <svg 
                                      className={cn(
                                        "h-3.5 w-3.5 transition-all duration-200 opacity-0 -translate-x-1",
                                        "group-hover:opacity-100 group-hover:translate-x-0 text-teal-500"
                                      )} 
                                      fill="none" 
                                      viewBox="0 0 24 24" 
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                  <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                                    {item.description}
                                  </p>
                                </div>
                              </div>

                              {/* Hover indicator line */}
                              <div className={cn(
                                "absolute left-0 top-0 h-full w-0.5 rounded-r-full transition-all duration-200",
                                "bg-gradient-to-b from-teal-500 to-cyan-500",
                                "opacity-0 group-hover:opacity-100"
                              )} />
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/trial" 
                          className={cn(
                            "relative font-normal text-[16px] h-9 bg-transparent border-none shadow-none px-4 py-2 transition-all duration-300 hover:text-[#00b6ac] hover:scale-105 before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-1/2 before:bg-gradient-to-r before:from-teal-500 before:to-cyan-500 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0",
                            shouldUseWhiteText ? "text-white" : "text-gray-600"
                          )}
                          data-testid="link-trial"
                        >
                          Trial
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog" 
                          className={cn(
                            "relative font-normal text-[16px] h-9 bg-transparent border-none shadow-none px-4 py-2 transition-all duration-300 hover:text-[#00b6ac] hover:scale-105 before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-1/2 before:bg-gradient-to-r before:from-teal-500 before:to-cyan-500 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0",
                            shouldUseWhiteText ? "text-white" : "text-gray-600"
                          )}
                          data-testid="link-blog"
                        >
                          Blog
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/quem-somos" 
                          className={cn(
                            "relative font-normal text-[16px] h-9 bg-transparent border-none shadow-none px-4 py-2 transition-all duration-300 hover:text-[#00b6ac] hover:scale-105 before:content-[''] before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-1/2 before:bg-gradient-to-r before:from-teal-500 before:to-cyan-500 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0",
                            shouldUseWhiteText ? "text-white" : "text-gray-600"
                          )}
                          data-testid="link-about"
                        >
                          Quem Somos
                        </Link>
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
                    <NavigationMenuLink asChild>
                      <Link
                        to="/contato"
                        className={cn(
                          "font-medium transition-colors h-9 bg-transparent border-none shadow-none px-4 py-2 text-[16px] hover:text-lina-cyan/80",
                          shouldUseWhiteText ? "text-white" : "text-[#009999]"
                        )}
                        data-testid="link-contact"
                      >
                        Entre em Contato
                      </Link>
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
          { label: "Integrações", href: "#integracoes" },
          { label: "Trial", href: "/trial" },
          { label: "Blog", href: "/blog" },
          { label: "Quem Somos", href: "/quem-somos" },
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