import { Linkedin, Youtube, Instagram } from "lucide-react";
import { Link } from "wouter";
import logoPath from "@assets/Nova_logo_lina_1756708154690.png";

export function Footer() {
  const productLinks = [
    { name: "Data Link", path: "/data-link" },
    { name: "Lina Pay", path: "/lina-pay" }
  ];

  const resourceLinks = [
    { name: "Blog", path: "#" },
    { name: "Documentação", path: "#" },
    { name: "Suporte", path: "#" }
  ];

  const otherLinks = [
    { name: "Integrações", path: "#" },
    { name: "Trial", path: "#" },
    { name: "Quem somos", path: "/quem-somos" }
  ];

  const legalLinks = [
    "Política de Privacidade",
    "Termos de Uso",
    "Política de Cookies"
  ];

  return (
    <footer 
      className="bg-teal-700 text-white"
      data-testid="footer-main"
    >
      <div className="px-6 py-16 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Coluna 1 - Logo e Contato */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <img 
                  src={logoPath} 
                  alt="LINA Logo" 
                  className="h-12 w-auto mb-8"
                  data-testid="img-footer-logo"
                />
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-medium text-white text-sm block" data-testid="text-footer-phone">
                    +55 11 3181 6170
                  </span>
                </div>
                <div>
                  <span className="text-gray-200 text-sm leading-relaxed block" data-testid="text-footer-address">
                    Rua Correia Dias, 93, SL 0102,<br />
                    Paraíso, 04104 - 000
                  </span>
                </div>
                <div>
                  <span className="text-gray-200 text-sm block" data-testid="text-footer-email">
                    openx@linainfratech.com.br
                  </span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/company/lina-openx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-400 rounded-lg flex items-center justify-center hover:bg-teal-300 transition-colors"
                  data-testid="link-social-linkedin"
                >
                  <Linkedin size={18} className="text-teal-800" />
                </a>
                <a 
                  href="https://x.com/Lina_OpenX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-400 rounded-lg flex items-center justify-center hover:bg-teal-300 transition-colors"
                  data-testid="link-social-twitter"
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" className="text-teal-800">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@linaopenx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-400 rounded-lg flex items-center justify-center hover:bg-teal-300 transition-colors"
                  data-testid="link-social-youtube"
                >
                  <Youtube size={18} className="text-teal-800" />
                </a>
                <a 
                  href="https://www.instagram.com/lina.openx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-400 rounded-lg flex items-center justify-center hover:bg-teal-300 transition-colors"
                  data-testid="link-social-instagram"
                >
                  <Instagram size={18} className="text-teal-800" />
                </a>
              </div>
            </div>

            {/* Coluna 2 - Produtos */}
            <div>
              <h3 
                className="font-semibold text-white text-lg mb-6 uppercase tracking-wider"
                data-testid="heading-footer-products"
              >
                PRODUTOS
              </h3>
              <ul className="space-y-4">
                {productLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link 
                      href={link.path}
                      className="text-gray-200 hover:text-white transition-colors text-lg font-medium"
                      data-testid={`link-product-${index}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 - Recursos */}
            <div>
              <h3 
                className="font-semibold text-white text-lg mb-6 uppercase tracking-wider"
                data-testid="heading-footer-resources"
              >
                RECURSOS
              </h3>
              <ul className="space-y-4">
                {resourceLinks.map((link, index) => (
                  <li key={link.name}>
                    <a 
                      href={link.path}
                      className="text-gray-200 hover:text-white transition-colors text-lg font-medium"
                      data-testid={`link-resource-${index}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4 - Links */}
            <div>
              <h3 
                className="font-semibold text-white text-lg mb-6 uppercase tracking-wider"
                data-testid="heading-footer-other"
              >
                LINKS
              </h3>
              <ul className="space-y-4">
                {otherLinks.map((link, index) => (
                  <li key={link.name}>
                    {link.path.startsWith('/') ? (
                      <Link 
                        href={link.path}
                        className="text-gray-200 hover:text-white transition-colors text-lg font-medium"
                        data-testid={`link-other-${index}`}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.path}
                        className="text-gray-200 hover:text-white transition-colors text-lg font-medium"
                        data-testid={`link-other-${index}`}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-16 pt-8 border-t border-teal-600">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <p 
                className="text-gray-300 text-sm"
                data-testid="text-footer-copyright"
              >
                © 2025 LINA. Todos os direitos reservados. CNPJ: 37.663.090/0001-00
              </p>
              <div className="flex flex-wrap gap-6">
                {legalLinks.map((link, index) => (
                  <a 
                    key={link}
                    href="#" 
                    className="text-gray-300 hover:text-white text-sm transition-colors whitespace-nowrap"
                    data-testid={`link-legal-${index}`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;