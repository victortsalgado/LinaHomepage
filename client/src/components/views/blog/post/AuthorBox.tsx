import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface Author {
  name: string;
  avatar: string;
  role: string;
}

interface AuthorBoxProps {
  author?: Author;
}

export default function AuthorBox({ author }: AuthorBoxProps) {
  if (!author) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <div className="bg-gray-50 rounded-3xl p-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Author Avatar */}
          <div className="flex-shrink-0">
            <img 
              src={author.avatar} 
              alt={`${author.name} avatar`}
              className="w-24 h-24 rounded-full object-cover"
              data-testid="img-author-box-avatar"
            />
          </div>

          {/* Author Info */}
          <div className="flex-1">
            <h3 
              className="text-2xl font-bold text-[var(--lina-dark)] mb-2"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-author-name"
            >
              {author.name}
            </h3>
            
            <p 
              className="text-[var(--lina-cyan)] font-semibold mb-4"
              data-testid="text-author-role"
            >
              {author.role}
            </p>

            <p 
              className="text-gray-700 leading-relaxed mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="text-author-bio"
            >
              {author.role === "Product Manager" && "Carolina é Product Manager na LINA com mais de 8 anos de experiência em produtos financeiros. Especialista em pagamentos digitais e Open Finance, ela lidera iniciativas que transformam a forma como empresas e consumidores interagem com serviços financeiros."}
              
              {author.role === "Tech Lead" && "Roberto é Tech Lead na LINA, com vasta experiência em arquitetura de sistemas financeiros. Especialista em integração de APIs e segurança em pagamentos, ele conduz projetos técnicos que garantem a robustez e confiabilidade das nossas soluções."}
              
              {author.role === "CTO" && "Marina é CTO da LINA e uma das principais vozes técnicas da empresa. Com mais de 12 anos de experiência em tecnologia financeira, ela define a visão tecnológica da empresa e lidera a criação de soluções inovadoras para o mercado brasileiro."}
              
              {author.role === "CEO" && "André é CEO e co-fundador da LINA. Empreendedor serial com experiência em fintechs, ele lidera a visão estratégica da empresa na construção de pontes entre o Open Finance e as necessidades reais do mercado brasileiro."}
              
              {!["Product Manager", "Tech Lead", "CTO", "CEO"].includes(author.role) && "Especialista com vasta experiência no mercado financeiro, contribuindo com insights valiosos sobre as tendências e inovações que estão moldando o futuro dos pagamentos digitais no Brasil."}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span 
                className="text-sm text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Conecte-se:
              </span>
              
              <div className="flex items-center gap-3">
                <a 
                  href="#"
                  className="text-gray-400 hover:text-[var(--lina-cyan)] transition-colors"
                  data-testid="link-author-linkedin"
                  aria-label={`LinkedIn de ${author.name}`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                
                <a 
                  href="#"
                  className="text-gray-400 hover:text-[var(--lina-cyan)] transition-colors"
                  data-testid="link-author-twitter"
                  aria-label={`Twitter de ${author.name}`}
                >
                  <Twitter className="w-5 h-5" />
                </a>
                
                <a 
                  href="#"
                  className="text-gray-400 hover:text-[var(--lina-cyan)] transition-colors"
                  data-testid="link-author-email"
                  aria-label={`Email de ${author.name}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}