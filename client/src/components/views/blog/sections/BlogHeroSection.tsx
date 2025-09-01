"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useBlogSearch } from "@/contexts/BlogSearchContext";

export default function BlogHeroSection() {
  const { ref, isVisible } = useScrollReveal();
  const { searchTerm, setSearchTerm } = useBlogSearch();
  const [typewriterText, setTypewriterText] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  
  const fullText = "Universo Open";

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const typeWriter = () => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 150); // 150ms delay between letters
      } else {
        // Show search bar after typewriter completes
        setTimeout(() => setShowSearchBar(true), 500);
      }
    };

    // Start typewriter after a short delay
    timeoutId = setTimeout(typeWriter, 800);

    return () => clearTimeout(timeoutId);
  }, [isVisible]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const welcomeVariants = {
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

  const searchBarVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ 
        backgroundColor: 'var(--lina-dark)',
        background: `
          radial-gradient(circle at 50% 50%, rgba(0, 175, 170, 0.1) 0%, transparent 50%),
          var(--lina-dark)
        `
      }}
      data-testid="section-blog-hero"
    >
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center space-y-8"
        >
          {/* Welcome Text */}
          <motion.p
            variants={welcomeVariants}
            className="text-lg lg:text-xl text-gray-300 font-medium tracking-wider uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-hero-welcome"
          >
            BEM VINDO AO
          </motion.p>

          {/* Main Title with Typewriter Effect */}
          <div className="min-h-[120px] lg:min-h-[160px] flex items-center justify-center">
            <h1
              className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-testid="heading-hero-title"
            >
              {typewriterText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-[var(--lina-cyan)]"
              >
                |
              </motion.span>
            </h1>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {showSearchBar && (
              <motion.div
                variants={searchBarVariants}
                initial="hidden"
                animate="visible"
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Pesquisar artigos, insights e recursos..."
                    className="pl-12 pr-6 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-[var(--lina-cyan)] focus:ring-[var(--lina-cyan)] rounded-full"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="input-search-blog"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}