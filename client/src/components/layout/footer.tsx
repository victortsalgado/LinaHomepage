import { Linkedin, Twitter, Youtube, Phone, MapPin, Mail } from "lucide-react";
import logoPath from "../../assets/Home_Logo_Pix_BG_LinaPay_1756226661320.png";

export default function Footer() {
  const productLinks = [
    "Data Link",
    "Lina Pay", 
    "JSR",
    "Pix Automático"
  ];

  const companyLinks = [
    "Sobre nós",
    "Carreira",
    "Blog",
    "Contato"
  ];

  const legalLinks = [
    "Política de Privacidade",
    "Termos de Uso",
    "Política de Cookies"
  ];

  return (
    <footer 
      className="bg-lina-dark text-white py-16"
      data-testid="footer-main"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Identity Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoPath} 
                alt="LINA Logo" 
                className="h-12 w-12"
                data-testid="img-footer-logo"
              />
              <span 
                className="text-3xl font-bold text-white"
                data-testid="text-footer-logo"
              >
                LINA
              </span>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} />
                <span className="font-inter text-sm" data-testid="text-footer-phone">
                  (11) 3000-0000
                </span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm" data-testid="text-footer-address">
                  Av. Brigadeiro Faria Lima, 1234<br />
                  São Paulo, SP - 01452-000
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} />
                <span className="font-inter text-sm" data-testid="text-footer-email">
                  contato@lina.com.br
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-lina-cyan/20 rounded-lg flex items-center justify-center hover:bg-lina-cyan hover:text-lina-dark transition-colors"
                data-testid="link-social-linkedin"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-lina-cyan/20 rounded-lg flex items-center justify-center hover:bg-lina-cyan hover:text-lina-dark transition-colors"
                data-testid="link-social-twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-lina-cyan/20 rounded-lg flex items-center justify-center hover:bg-lina-cyan hover:text-lina-dark transition-colors"
                data-testid="link-social-youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 
              className="font-lexend font-semibold text-lg mb-6 text-white"
              data-testid="heading-footer-products"
            >
              Produtos
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="font-inter text-gray-300 hover:text-lina-cyan transition-colors"
                    data-testid={`link-product-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 
              className="font-lexend font-semibold text-lg mb-6 text-white"
              data-testid="heading-footer-company"
            >
              Empresa
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="font-inter text-gray-300 hover:text-lina-cyan transition-colors"
                    data-testid={`link-company-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h3 
              className="font-lexend font-semibold text-lg mb-6 text-white"
              data-testid="heading-footer-legal"
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="font-inter text-gray-300 hover:text-lina-cyan transition-colors"
                    data-testid={`link-legal-main-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-center md:text-left">
            <p 
              className="font-inter text-gray-400 text-sm"
              data-testid="text-footer-copyright"
            >
              © 2025 LINA. Todos os direitos reservados.
            </p>
            <p 
              className="font-inter text-gray-400 text-sm mt-1 md:mt-0"
              data-testid="text-footer-cnpj"
            >
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
