"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Recent blog posts data (5 most recent)
const recentPosts = [
  {
    id: 1,
    category: "LinaPay",
    title: "Pix Automático: como funciona e por que adotar na sua empresa",
    description: "Descubra como o PIX Automático está revolucionando pagamentos recorrentes e trazendo benefícios para empresas e consumidores. Uma análise completa sobre implementação, vantagens e casos de uso práticos.",
    date: "15 Jan 2025",
    readTime: "8 min",
    image: "/api/placeholder/600/400?text=PIX+Automatico",
    alt: "PIX Automático visualization",
    author: {
      name: "Carolina Ribeiro",
      avatar: "/api/placeholder/40/40?text=CR",
      role: "Product Manager"
    }
  },
  {
    id: 2,
    category: "DataLink",
    title: "O impacto do Open Finance na análise de crédito",
    description: "Entenda como o compartilhamento de dados está revolucionando a forma como as instituições avaliam o risco de crédito. Explore casos reais e benefícios para consumidores e empresas.",
    date: "12 Jan 2025",
    readTime: "6 min",
    image: "/api/placeholder/600/400?text=Open+Finance+Credit",
    alt: "Open Finance credit analysis",
    author: {
      name: "Roberto Silva",
      avatar: "/api/placeholder/40/40?text=RS",
      role: "Tech Lead"
    }
  },
  {
    id: 3,
    category: "JSR",
    title: "Por que a JSR é a evolução dos pagamentos digitais?",
    description: "Explore como a JavaScript Registry está transformando a infraestrutura de pagamentos no Brasil e preparando o futuro. Uma visão técnica e estratégica sobre a nova era dos pagamentos.",
    date: "10 Jan 2025",
    readTime: "10 min",
    image: "/api/placeholder/600/400?text=JSR+Evolution",
    alt: "JSR payment evolution",
    author: {
      name: "Marina Costa",
      avatar: "/api/placeholder/40/40?text=MC",
      role: "CTO"
    }
  },
  {
    id: 4,
    category: "Institucional",
    title: "Lina anuncia parceria estratégica com Mastercard",
    description: "Nova parceria acelera a adoção de pagamentos sem fricção através da tecnologia JSR, marcando um novo capítulo na história da empresa.",
    date: "08 Jan 2025",
    readTime: "5 min",
    image: "/api/placeholder/600/400?text=Lina+Mastercard",
    alt: "Lina Mastercard partnership",
    author: {
      name: "André Martins",
      avatar: "/api/placeholder/40/40?text=AM",
      role: "CEO"
    }
  },
  {
    id: 5,
    category: "DataLink",
    title: "Como o Open Finance está democratizando o acesso ao crédito",
    description: "Análise profunda sobre como a tecnologia está quebrando barreiras e criando novas oportunidades de inclusão financeira no Brasil.",
    date: "05 Jan 2025",
    readTime: "7 min",
    image: "/api/placeholder/600/400?text=Credit+Democratization",
    alt: "Credit democratization through Open Finance",
    author: {
      name: "Juliana Santos",
      avatar: "/api/placeholder/40/40?text=JS",
      role: "Data Scientist"
    }
  }
];

export default function RecentBlogsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [category, setCategory] = useState("todas");
  const [tag, setTag] = useState("todas");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recentPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recentPosts.length) % recentPosts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const currentPost = recentPosts[currentSlide];

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-32 bg-white"
      data-testid="section-recent-blogs"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-recent-blogs"
            >
              Artigos Recentes
            </h2>

            {/* Filter Dropdowns */}
            <div className="flex space-x-4">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger 
                  className="w-48"
                  data-testid="select-category-filter"
                >
                  <SelectValue placeholder="Categorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as Categorias</SelectItem>
                  <SelectItem value="datalink">DataLink</SelectItem>
                  <SelectItem value="linapay">LinaPay</SelectItem>
                  <SelectItem value="jsr">JSR</SelectItem>
                  <SelectItem value="institucional">Institucional</SelectItem>
                </SelectContent>
              </Select>

              <Select value={tag} onValueChange={setTag}>
                <SelectTrigger 
                  className="w-48"
                  data-testid="select-tag-filter"
                >
                  <SelectValue placeholder="Tags" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as Tags</SelectItem>
                  <SelectItem value="inovacao">Inovação</SelectItem>
                  <SelectItem value="pagamentos">Pagamentos</SelectItem>
                  <SelectItem value="tecnologia">Tecnologia</SelectItem>
                  <SelectItem value="mercado">Mercado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Carousel Container */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Carousel Content */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={currentPost.image}
                    alt={currentPost.alt}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500"
                    data-testid="img-carousel-featured"
                  />
                  <div 
                    className="absolute top-4 left-4 bg-[var(--lina-cyan)] text-white px-3 py-1 rounded-full text-sm font-semibold"
                    data-testid="tag-carousel-category"
                  >
                    {currentPost.category}
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6">
                  <h3
                    className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-carousel-title"
                  >
                    {currentPost.title}
                  </h3>

                  <p
                    className="text-lg text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="text-carousel-description"
                  >
                    {currentPost.description}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <img 
                      src={currentPost.author.avatar}
                      alt={currentPost.author.name}
                      className="w-12 h-12 rounded-full"
                      data-testid="img-carousel-author"
                    />
                    <div>
                      <p 
                        className="font-semibold text-gray-900"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="text-carousel-author-name"
                      >
                        {currentPost.author.name}
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span data-testid="text-carousel-read-time">{currentPost.readTime} de leitura</span>
                        <span>•</span>
                        <span data-testid="text-carousel-date">{currentPost.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl"
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl"
              data-testid="button-carousel-next"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-3"
          >
            {recentPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[var(--lina-cyan)] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                data-testid={`button-carousel-dot-${index}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}