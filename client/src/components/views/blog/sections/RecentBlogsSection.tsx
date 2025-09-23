"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBlogSearch } from "@/contexts/BlogSearchContext";
import { allBlogPosts } from "@/data/blogPosts";

// Get the 5 most recent posts
const recentPosts = allBlogPosts.slice(0, 5);

export default function RecentBlogsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { searchTerm, category, setCategory, tag, setTag } = useBlogSearch();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter posts based on search term and filters
  const filteredPosts = useMemo(() => {
    return recentPosts.filter(post => {
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = category === "todas" || 
        post.category.toLowerCase() === category.toLowerCase();
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, category, tag]);

  // Reset slide when filters change
  useState(() => {
    if (currentSlide >= filteredPosts.length) {
      setCurrentSlide(0);
    }
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredPosts.length) % filteredPosts.length);
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

  const currentPost = filteredPosts[currentSlide];

  // Show message if no posts match filters
  if (filteredPosts.length === 0) {
    return (
      <section 
        ref={ref}
        className="py-20 lg:py-32 bg-white"
        data-testid="section-recent-blogs"
      >
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center space-y-8">
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              style={{ fontFamily: 'Lexend, sans-serif' }}
            >
              Artigos Recentes
            </h2>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 mb-12">
              <div className="flex space-x-4 mx-auto lg:mx-0">
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
            </div>
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">
                Nenhum artigo encontrado para "{searchTerm}" na categoria selecionada.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-32 bg-white relative z-0"
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
            className="text-center"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-recent-blogs"
            >
              Artigos Recentes
            </h2>
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
                  {currentPost.author && (
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
                          {currentPost.readTime && (
                            <>
                              <span data-testid="text-carousel-read-time">{currentPost.readTime} de leitura</span>
                              <span>•</span>
                            </>
                          )}
                          <span data-testid="text-carousel-date">{currentPost.date}</span>
                        </div>
                      </div>
                    </div>
                  )}
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
            {filteredPosts.map((_, index) => (
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