import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import logoPath from "../../assets/Home_Logo_Pix_BG_LinaPay_1756226661320.png";

export default function Footer() {
  const regulatoryLinks = [
    "Gestão de Consentimentos",
    "Identidade e Acesso (IAM)",
    "API Gateway",
    "Sandbox",
    "Open Desk",
    "Jornada Sem Redirecionamento - JSR"
  ];

  const serviceLinks = [
    "Agregação de Contas",
    "Iniciação de Pagamentos",
    "Onboarding e KYC",
    "Investimentos",
    "Risco e Crédito",
    "Iniciação de Pagamentos - Lina Pay",
    "Compartilhamento de Dados - Data Link"
  ];

  return (
    <footer 
      className="bg-[#1a4d4d] text-white rounded-t-[40px] px-8 py-12 lg:px-16 lg:py-16"
      data-testid="footer-main"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {/* Coluna 1 - Contato */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src={logoPath} 
                alt="LINA Logo" 
                className="h-10 w-10"
                data-testid="img-footer-logo"
              />
              <span 
                className="text-2xl font-bold text-white"
                data-testid="text-footer-logo"
              >
                Lina
              </span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="text-gray-200">
                <span className="font-medium text-sm" data-testid="text-footer-phone">
                  +55 11 3181 6170
                </span>
              </div>
              <div className="text-gray-200">
                <span className="text-sm leading-relaxed" data-testid="text-footer-address">
                  Rua Correia Dias, 93, SL 0102,<br />
                  Paraíso, 04104 - 000
                </span>
              </div>
              <div className="text-gray-200">
                <span className="text-sm" data-testid="text-footer-email">
                  openx@linainfratech.com.br
                </span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div 
                className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors"
                data-testid="link-social-linkedin"
              >
                <Linkedin size={16} />
              </div>
              <div 
                className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors"
                data-testid="link-social-twitter"
              >
                <Twitter size={16} />
              </div>
              <div 
                className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors"
                data-testid="link-social-youtube"
              >
                <Youtube size={16} />
              </div>
              <div 
                className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-500 transition-colors"
                data-testid="link-social-instagram"
              >
                <Instagram size={16} />
              </div>
            </div>
          </div>
          
          {/* Coluna 2 - Regulatório */}
          <div>
            <h3 
              className="font-semibold text-white text-base mb-6 uppercase tracking-wide"
              data-testid="heading-footer-regulatory"
            >
              REGULATORIO FINANCE E INSURANCE
            </h3>
            <ul className="space-y-3">
              {regulatoryLinks.map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-200 hover:text-white transition-colors text-sm leading-relaxed"
                    data-testid={`link-regulatory-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coluna 3 - Serviços */}
          <div>
            <h3 
              className="font-semibold text-white text-base mb-6 uppercase tracking-wide"
              data-testid="heading-footer-services"
            >
              OPEN FINANCE AS A SERVICE
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-200 hover:text-white transition-colors text-sm leading-relaxed"
                    data-testid={`link-service-${index}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}