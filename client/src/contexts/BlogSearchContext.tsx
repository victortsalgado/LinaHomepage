"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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

interface BlogSearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  tag: string;
  setTag: (tag: string) => void;
  selectedPostId: number | null;
  setSelectedPostId: (id: number | null) => void;
}

const BlogSearchContext = createContext<BlogSearchContextType | undefined>(undefined);

export function BlogSearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("todas");
  const [tag, setTag] = useState("todas");
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

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