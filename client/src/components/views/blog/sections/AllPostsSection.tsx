"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import BlogPostCard from "@/components/ui/BlogPostCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBlogSearch } from "@/contexts/BlogSearchContext";
import { useMemo } from "react";
import { allBlogPosts } from "@/data/blogPosts";

export default function AllPostsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { searchTerm, category, setCategory, tag, setTag } = useBlogSearch();

  // Filter posts based on search term and filters
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter(post => {
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = category === "todas" || 
        post.category.toLowerCase() === category.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, category, tag]);

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
          {/* Filter Dropdowns - Centered */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4"
          >
            <div className="group relative">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
                    "min-w-[200px] justify-between"
                  )}
                  data-testid="select-category-filter"
                  onMouseEnter={(e) => {
                    e.currentTarget.click();
                  }}
                >
                  <SelectValue placeholder="Todas as Categorias" />
                  <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as Categorias</SelectItem>
                  <SelectItem value="datalink">DataLink</SelectItem>
                  <SelectItem value="linapay">LinaPay</SelectItem>
                  <SelectItem value="jsr">JSR</SelectItem>
                  <SelectItem value="institucional">Institucional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="group relative">
              <Select value={tag} onValueChange={setTag}>
                <SelectTrigger 
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
                    "min-w-[160px] justify-between"
                  )}
                  data-testid="select-tag-filter"
                  onMouseEnter={(e) => {
                    e.currentTarget.click();
                  }}
                >
                  <SelectValue placeholder="Todas as Tags" />
                  <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
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
              Todas as Publicações
            </h2>
          </motion.div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
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