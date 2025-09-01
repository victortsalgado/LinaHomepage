"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import BlogPostCard from "@/components/ui/BlogPostCard";
import { useBlogSearch, sanityPostToBlogPost } from "@/contexts/BlogSearchContext";
import { useMemo } from "react";
import { usePosts } from "@/hooks/usePosts";


export default function AllPostsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { searchTerm, category, tag } = useBlogSearch();
  
  // Fetch posts from Sanity
  const { data: sanityPosts, isLoading, error } = usePosts();
  
  // Convert Sanity posts to legacy format
  const allPosts = useMemo(() => {
    if (!sanityPosts) return [];
    return sanityPosts.map((post, index) => sanityPostToBlogPost(post, index));
  }, [sanityPosts]);

  // Filter posts based on search term and filters
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = category === "todas" || 
        post.category.toLowerCase() === category.toLowerCase();
      
      return matchesSearch && matchesCategory;
    });
  }, [allPosts, searchTerm, category, tag]);

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
      className="py-20 lg:py-32 bg-white relative z-0"
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
              Todos os Artigos
            </h2>
          </motion.div>

          {/* Loading State */}
          {isLoading ? (
            <motion.div
              variants={itemVariants}
              className="flex justify-center py-16"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--lina-cyan)]"></div>
            </motion.div>
          ) : error ? (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <p className="text-xl text-red-500">
                Erro ao carregar artigos. Tente novamente mais tarde.
              </p>
            </motion.div>
          ) : filteredPosts.length > 0 ? (
            <motion.div
              variants={gridVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <BlogPostCard post={post} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-500">
                {searchTerm 
                  ? `Nenhum artigo encontrado para "${searchTerm}"` 
                  : "Nenhum artigo encontrado para os filtros selecionados."
                }
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}