"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Search, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/contexts/BlogSearchContext";
import { allBlogPosts } from "@/data/blogPosts";

interface SearchDropdownProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onPostSelect: (postId: number) => void;
  className?: string;
}

export default function SearchDropdown({ 
  searchTerm, 
  onSearchChange, 
  onPostSelect,
  className = "" 
}: SearchDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter posts based on search term
  const filteredResults = searchTerm.length >= 2 
    ? allBlogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 6) // Limit to 6 results
    : [];

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearchChange(value);
    setIsOpen(value.length >= 2);
    setFocusedIndex(-1);
  };

  // Handle post selection
  const handlePostSelect = (post: BlogPost) => {
    onPostSelect(post.id);
    setIsOpen(false);
    onSearchChange(post.title);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || filteredResults.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < filteredResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : filteredResults.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0) {
          handlePostSelect(filteredResults[focusedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(searchTerm.length >= 2)}
          placeholder="Pesquisar artigos, insights e recursos..."
          className="w-full pl-12 pr-6 py-4 text-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:border-[var(--lina-cyan)] focus:ring-2 focus:ring-[var(--lina-cyan)]/20 rounded-full outline-none transition-all duration-300"
          style={{ fontFamily: 'Inter, sans-serif' }}
          data-testid="input-search-blog"
        />
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && filteredResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[9999]"
            data-testid="dropdown-search-results"
          >
            {/* Results Header */}
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
              <p className="text-sm text-gray-600 font-medium">
                {filteredResults.length} resultados encontrados
              </p>
            </div>

            {/* Results List */}
            <div className="max-h-96 overflow-y-auto">
              {filteredResults.map((post, index) => (
                <motion.button
                  key={post.id}
                  onClick={() => handlePostSelect(post)}
                  className={`w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50 last:border-b-0 ${
                    index === focusedIndex ? 'bg-[var(--lina-cyan)]/5 border-[var(--lina-cyan)]/20' : ''
                  }`}
                  data-testid={`button-search-result-${post.id}`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Post Image */}
                    <img 
                      src={post.image}
                      alt={post.alt}
                      className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                    />
                    
                    {/* Post Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span 
                          className="text-xs px-2 py-1 bg-[var(--lina-cyan)] text-white rounded-full font-semibold"
                        >
                          {post.category}
                        </span>
                        {post.readTime && (
                          <span className="text-xs text-gray-500 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </span>
                        )}
                      </div>
                      
                      <h4 
                        className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1"
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                      >
                        {post.title}
                      </h4>
                      
                      <p 
                        className="text-xs text-gray-600 line-clamp-1"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {post.description}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* View All Results Footer */}
            {filteredResults.length >= 6 && (
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                <button 
                  className="text-sm text-[var(--lina-cyan)] font-medium hover:text-[var(--lina-dark)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Ver todos os resultados para "{searchTerm}"
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results Message */}
      <AnimatePresence>
        {isOpen && searchTerm.length >= 2 && filteredResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[9999]"
          >
            <div className="px-4 py-8 text-center">
              <p className="text-gray-500">
                Nenhum resultado encontrado para "{searchTerm}"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}