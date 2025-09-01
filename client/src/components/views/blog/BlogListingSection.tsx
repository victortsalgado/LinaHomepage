"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/ui/BlogPostCard";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock data for blog posts
const mockBlogPosts = [
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

const categories = ["Todos", "DataLink", "LinaPay", "JSR", "Institucional"];

export default function BlogListingSection() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Filter posts by category
  const filteredPosts = selectedCategory === "Todos" 
    ? mockBlogPosts 
    : mockBlogPosts.filter(post => post.category === selectedCategory);

  // Get featured post (first post in filtered results)
  const featuredPost = filteredPosts[0];

  // Pagination logic
  const totalPages = Math.ceil((filteredPosts.length - 1) / postsPerPage); // -1 because featured post is separate
  const remainingPosts = filteredPosts.slice(1); // Remove featured post
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = remainingPosts.slice(startIndex, endIndex);

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
      className="py-20 lg:py-32 bg-gray-50"
      data-testid="section-blog-listing"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Page Title */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-blog-title"
            >
              Blog Lina
            </h1>
            <p
              className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
              data-testid="text-blog-subtitle"
            >
              Acompanhe as últimas novidades e insights sobre Open Finance, pagamentos digitais e inovação tecnológica.
            </p>
          </motion.div>

          {/* Featured Article */}
          {featuredPost && (
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <h2
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: 'Lexend, sans-serif' }}
                data-testid="heading-featured-article"
              >
                Artigo em Destaque
              </h2>
              <a
                href="#"
                className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden block"
                data-testid="link-featured-article"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Featured Image */}
                  <div className="relative overflow-hidden lg:order-1">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.alt} 
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      data-testid="img-featured-article"
                    />
                    <div 
                      className="absolute top-6 left-6 bg-[var(--lina-cyan)] text-white px-4 py-2 rounded-full text-sm font-semibold"
                      data-testid="tag-featured-category"
                    >
                      {featuredPost.category}
                    </div>
                  </div>
                  
                  {/* Featured Content */}
                  <div className="p-8 lg:order-2">
                    <div className="text-sm text-gray-500 mb-4">
                      <span data-testid="text-featured-date">{featuredPost.date}</span>
                    </div>
                    <h3 
                      className="text-3xl lg:text-4xl font-bold text-[var(--lina-dark)] mb-6 group-hover:text-[var(--lina-cyan)] transition-colors"
                      style={{ fontFamily: 'Lexend, sans-serif' }}
                      data-testid="text-featured-title"
                    >
                      {featuredPost.title}
                    </h3>
                    <p 
                      className="text-lg text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      data-testid="text-featured-description"
                    >
                      {featuredPost.description}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          )}

          {/* Category Filters */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            variants={gridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentPosts.map((post, index) => (
              <motion.div key={post.id} variants={itemVariants}>
                <BlogPostCard post={post} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center space-x-4"
            >
              <Button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
                data-testid="button-pagination-prev"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </Button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    className={currentPage === page ? "bg-[var(--lina-cyan)] hover:bg-[var(--lina-cyan)]/90" : ""}
                    data-testid={`button-pagination-${page}`}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
                data-testid="button-pagination-next"
              >
                <span>Próximo</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}