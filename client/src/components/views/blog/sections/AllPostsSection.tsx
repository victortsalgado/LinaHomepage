"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import BlogPostCard from "@/components/ui/BlogPostCard";

// All blog posts data (12 posts)
const allBlogPosts = [
  {
    id: 1,
    category: "LinaPay",
    title: "Pix Automático: como funciona e por que adotar na sua empresa",
    description: "Descubra como o PIX Automático está revolucionando pagamentos recorrentes e trazendo benefícios para empresas e consumidores.",
    date: "15 Jan 2025",
    image: "/api/placeholder/400/300?text=PIX+Automatico",
    alt: "PIX Automático visualization"
  },
  {
    id: 2,
    category: "DataLink",
    title: "O impacto do Open Finance na análise de crédito",
    description: "Entenda como o compartilhamento de dados está revolucionando a forma como as instituições avaliam o risco de crédito.",
    date: "12 Jan 2025",
    image: "/api/placeholder/400/300?text=Open+Finance+Credit",
    alt: "Open Finance credit analysis"
  },
  {
    id: 3,
    category: "JSR",
    title: "Por que a JSR é a evolução dos pagamentos digitais?",
    description: "Explore como a JavaScript Registry está transformando a infraestrutura de pagamentos no Brasil e preparando o futuro.",
    date: "10 Jan 2025",
    image: "/api/placeholder/400/300?text=JSR+Evolution",
    alt: "JSR payment evolution"
  },
  {
    id: 4,
    category: "Institucional",
    title: "Lina anuncia parceria estratégica com Mastercard",
    description: "Nova parceria acelera a adoção de pagamentos sem fricção através da tecnologia JSR, marcando um novo capítulo.",
    date: "08 Jan 2025",
    image: "/api/placeholder/400/300?text=Lina+Mastercard",
    alt: "Lina Mastercard partnership"
  },
  {
    id: 5,
    category: "DataLink",
    title: "Como o Open Finance está democratizando o acesso ao crédito",
    description: "Análise profunda sobre como a tecnologia está quebrando barreiras e criando novas oportunidades de inclusão financeira.",
    date: "05 Jan 2025",
    image: "/api/placeholder/400/300?text=Credit+Democratization",
    alt: "Credit democratization through Open Finance"
  },
  {
    id: 6,
    category: "LinaPay",
    title: "Biometria no PIX: segurança e conveniência em uma só solução",
    description: "Conheça como a autenticação biométrica está elevando o nível de segurança dos pagamentos digitais no Brasil.",
    date: "03 Jan 2025",
    image: "/api/placeholder/400/300?text=PIX+Biometry",
    alt: "PIX biometric authentication"
  },
  {
    id: 7,
    category: "JSR",
    title: "A obrigatoriedade da JSR em 2026: prepare-se agora",
    description: "Entenda os prazos, requisitos e como sua instituição pode se antecipar à regulamentação para obter vantagem competitiva.",
    date: "28 Dez 2024",
    image: "/api/placeholder/400/300?text=JSR+2026+Mandatory",
    alt: "JSR 2026 mandatory implementation"
  },
  {
    id: 8,
    category: "Institucional",
    title: "Lina é nomeada LinkedIn Top Startup de 2024",
    description: "Reconhecimento consolida posição da empresa como uma das mais inovadoras do cenário tecnológico brasileiro.",
    date: "25 Dez 2024",
    image: "/api/placeholder/400/300?text=LinkedIn+Top+Startup",
    alt: "LinkedIn Top Startup award"
  },
  {
    id: 9,
    category: "DataLink",
    title: "Integração de dados bancários: melhores práticas de segurança",
    description: "Guia completo sobre como implementar integrações seguras respeitando as diretrizes do Banco Central.",
    date: "22 Dez 2024",
    image: "/api/placeholder/400/300?text=Banking+Data+Security",
    alt: "Banking data integration security"
  },
  {
    id: 10,
    category: "LinaPay",
    title: "O futuro dos pagamentos recorrentes no e-commerce brasileiro",
    description: "Análise das tendências que estão moldando a forma como consumidores pagam por assinaturas e serviços online.",
    date: "20 Dez 2024",
    image: "/api/placeholder/400/300?text=Recurring+Payments",
    alt: "Recurring payments in e-commerce"
  },
  {
    id: 11,
    category: "JSR",
    title: "Infraestrutura JSR: construindo a base dos pagamentos do futuro",
    description: "Visão técnica sobre a arquitetura necessária para implementar soluções JSR robustas e escaláveis.",
    date: "18 Dez 2024",
    image: "/api/placeholder/400/300?text=JSR+Infrastructure",
    alt: "JSR technical infrastructure"
  },
  {
    id: 12,
    category: "Institucional",
    title: "Como a Lina está construindo pontes no Open Finance",
    description: "Conheça a missão da empresa de simplificar a complexidade e conectar empresas a novas oportunidades.",
    date: "15 Dez 2024",
    image: "/api/placeholder/400/300?text=Lina+Bridges+Finance",
    alt: "Lina building bridges in Open Finance"
  }
];

export default function AllPostsSection() {
  const { ref, isVisible } = useScrollReveal();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-32 bg-white"
      data-testid="section-all-posts"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-all-posts"
            >
              All Blog Posts
            </h2>
          </motion.div>

          {/* Posts Grid */}
          <motion.div
            variants={gridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allBlogPosts.map((post, index) => (
              <motion.div key={post.id} variants={itemVariants}>
                <BlogPostCard post={post} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}