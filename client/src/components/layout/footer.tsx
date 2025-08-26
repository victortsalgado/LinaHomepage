import { Linkedin, Twitter, Youtube } from "lucide-react";
import logoPath from "../../assets/Home_Logo_Pix_BG_LinaPay_1756226661320.png";

export default function Footer() {
  const productLinks = [
    "Data Link",
    "Lina Pay", 
    "LinaJSR",
    "PIX Automático",
    "PIX Biometria"
  ];

  const companyLinks = [
    "Sobre nós",
    "Carreira",
    "Blog", 
    "Imprensa",
    "Contato"
  ];

  const legalLinks = [
    "Política de Privacidade",
    "Termos de Uso",
    "Cookies"
  ];

  return (
    <footer 
      className="bg-lina-dark text-white py-16"
      data-testid="footer-main"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
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
            <p 
              className="text-gray-300 mb-6 max-w-md"
              data-testid="text-footer-description"
            >
              Soluções inovadoras para Open Finance, PIX e pagamentos digitais. Transformando o futuro das transações financeiras no Brasil.
            </p>
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
              className="font-bold text-lg mb-6"
              data-testid="heading-footer-products"
            >
              Produtos
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-lina-cyan transition-colors"
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
              className="font-bold text-lg mb-6"
              data-testid="heading-footer-company"
            >
              Empresa
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-lina-cyan transition-colors"
                    data-testid={`link-company-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p 
            className="text-gray-400 text-sm"
            data-testid="text-footer-copyright"
          >
            © 2024 LINA. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <a 
                key={link}
                href="#" 
                className="text-gray-400 hover:text-lina-cyan text-sm transition-colors"
                data-testid={`link-legal-${index}`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
