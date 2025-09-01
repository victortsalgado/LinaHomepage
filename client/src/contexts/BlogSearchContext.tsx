"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BlogSearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  tag: string;
  setTag: (tag: string) => void;
}

const BlogSearchContext = createContext<BlogSearchContextType | undefined>(undefined);

export function BlogSearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("todas");
  const [tag, setTag] = useState("todas");

  return (
    <BlogSearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      category,
      setCategory,
      tag,
      setTag
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