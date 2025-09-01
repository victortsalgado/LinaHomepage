import { motion } from "framer-motion";
import { BlogPost } from "@/contexts/BlogSearchContext";
import PostSidebar from "@/components/views/blog/post/PostSidebar";

interface PostBodyProps {
  post: BlogPost;
}

export default function PostBody({ post }: PostBodyProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-3">
          <article 
            className="prose prose-lg max-w-none
                     prose-headings:font-bold prose-headings:text-[var(--lina-dark)]
                     prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                     prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                     prose-strong:text-[var(--lina-dark)]
                     prose-a:text-[var(--lina-cyan)] prose-a:no-underline hover:prose-a:underline
                     prose-ul:text-gray-700 prose-ol:text-gray-700
                     prose-li:mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="article-content"
          >
            <h2>Introdução ao PIX Automático</h2>
            <p>
              O PIX Automático representa uma das maiores evoluções no sistema de pagamentos brasileiro desde o lançamento do PIX em 2020. Esta nova modalidade permite que empresas configurem pagamentos recorrentes de forma automatizada, eliminando a necessidade de intervenção manual tanto do lado do pagador quanto do recebedor.
            </p>
            
            <p>
              Com o crescimento exponencial do PIX como meio de pagamento preferido pelos brasileiros, era natural que o Banco Central desenvolvesse uma solução para atender às demandas por pagamentos recorrentes. O PIX Automático vem suprir essa necessidade, oferecendo uma alternativa mais eficiente e segura aos débitos automáticos tradicionais.
            </p>

            <h2>Como Funciona o PIX Automático</h2>
            <p>
              O funcionamento do PIX Automático é baseado em um modelo de autorização prévia, onde o pagador concede permissão para que determinada empresa realize cobranças automáticas em sua conta. Este processo envolve alguns passos fundamentais:
            </p>

            <h3>Processo de Autorização</h3>
            <ul>
              <li><strong>Solicitação de Autorização:</strong> A empresa solicita ao cliente a autorização para realizar cobranças automáticas</li>
              <li><strong>Configuração de Limites:</strong> O cliente define valores máximos e periodicidade das cobranças</li>
              <li><strong>Validação Biométrica:</strong> O processo é finalizado com autenticação biométrica ou senha</li>
              <li><strong>Ativação do Serviço:</strong> A autorização fica ativa e as cobranças podem ser processadas automaticamente</li>
            </ul>

            <h3>Segurança e Controle</h3>
            <p>
              Uma das principais vantagens do PIX Automático é o nível de controle que oferece ao usuário. Diferentemente dos débitos automáticos tradicionais, o PIX Automático permite:
            </p>

            <ol>
              <li>Definição de valores máximos por cobrança</li>
              <li>Estabelecimento de limites mensais</li>
              <li>Cancelamento imediato sem burocracia</li>
              <li>Transparência total sobre as transações</li>
            </ol>

            <h2>Vantagens para Empresas</h2>
            <p>
              A implementação do PIX Automático traz benefícios significativos para empresas de todos os tamanhos. A redução da inadimplência é uma das principais vantagens, já que o sistema elimina problemas como cartões vencidos ou contas sem saldo suficiente.
            </p>

            <p>
              Além disso, o custo operacional é significativamente menor comparado a outros meios de pagamento recorrente. Enquanto os débitos automáticos tradicionais podem levar dias para serem processados, o PIX Automático é processado em tempo real, melhorando o fluxo de caixa das empresas.
            </p>

            <h2>Implementação Prática</h2>
            <p>
              Para empresas interessadas em implementar o PIX Automático, é essencial contar com uma solução tecnológica robusta e confiável. A LINA oferece através do LinaPay uma integração completa com as funcionalidades do PIX Automático, permitindo que empresas de qualquer porte possam aproveitar todos os benefícios desta nova modalidade.
            </p>

            <p>
              A implementação envolve aspectos técnicos importantes como integração com APIs do Banco Central, gestão de autorizações, tratamento de exceções e relatórios detalhados de transações. Nossa solução cuida de todos esses aspectos, permitindo que sua empresa foque no que realmente importa: seu negócio.
            </p>

            <h2>Conclusão</h2>
            <p>
              O PIX Automático representa o futuro dos pagamentos recorrentes no Brasil. Com sua implementação, esperamos ver uma redução significativa nos custos operacionais das empresas e uma melhoria na experiência do consumidor. É uma oportunidade única para empresas se posicionarem na vanguarda da inovação em pagamentos.
            </p>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <PostSidebar />
        </div>
      </div>
    </motion.section>
  );
}