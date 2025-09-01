"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Post } from "../../../lib/sanity";

// Keep the old BlogPost interface for legacy components if needed
export interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime?: string;
  image: string;
  alt: string;
  author?: {
    name: string;
    avatar: string;
    role: string;
  };
}

// Utility function to convert Sanity Post to legacy BlogPost format
export function sanityPostToBlogPost(post: Post, index: number = 0): BlogPost {
  return {
    id: index, // Use index as ID since Sanity uses _id
    category: post.category,
    title: post.title,
    description: post.excerpt,
    date: new Date(post.publishedAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }),
    readTime: "5 min", // Default read time, could be calculated from body content
    image: post.mainImage?.asset ? `/api/placeholder/600/400?text=${encodeURIComponent(post.title)}` : "/api/placeholder/600/400?text=Blog+Post",
    alt: post.mainImage?.alt || post.title,
    author: {
      name: "Time Lina",
      avatar: "/src/assets/mascote-astro-lina.png",
      role: "Equipe Editorial"
    }
  };
}

interface BlogSearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  tag: string;
  setTag: (tag: string) => void;
  selectedPostId: string | null; // Changed to string to match Sanity _id
  setSelectedPostId: (id: string | null) => void;
}

const BlogSearchContext = createContext<BlogSearchContextType | undefined>(undefined);

export function BlogSearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("todas");
  const [tag, setTag] = useState("todas");
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  return (
    <BlogSearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      category,
      setCategory,
      tag,
      setTag,
      selectedPostId,
      setSelectedPostId
    }}>
      {children}
    </BlogSearchContext.Provider>
  );
}

export function useBlogSearch() {
  const context = useContext(BlogSearchContext);
  if (context === undefined) {
    throw new Error("useBlogSearch must be used within a BlogSearchProvider");
  }
  return context;
}