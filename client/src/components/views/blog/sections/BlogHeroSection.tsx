"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { useBlogSearch } from "@/contexts/BlogSearchContext";
import SearchDropdown from "@/components/ui/SearchDropdown";

export default function BlogHeroSection() {
  const { ref, isVisible } = useScrollReveal();
  const { searchTerm, setSearchTerm, setSelectedPostId } = useBlogSearch();
  const [typewriterText, setTypewriterText] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  
  const fullText = "Universo Open";

  const handlePostSelect = (postId: number) => {
    setSelectedPostId(postId);
    // For now, we'll just scroll to the post in the grid
    // In a real app, this would navigate to a detailed post page
    const element = document.querySelector(`[data-post-id="${postId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
      className="relative py-20 lg:py-32 overflow-visible"
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
                className="max-w-2xl mx-auto relative z-[9999]"
                style={{ zIndex: 9999 }}
              >
                <SearchDropdown
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  onPostSelect={handlePostSelect}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}