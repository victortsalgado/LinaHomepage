"use client";

import { BlogPost } from "@/contexts/BlogSearchContext";

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
  className?: string;
}

export default function BlogPostCard({ post, index, className = "" }: BlogPostCardProps) {
  // Generate slug from title and id, with special handling for featured articles
  let slug;
  if (post.id === 0) {
    slug = "pix-e-open-finance-remodelando-mercado-financeiro";
  } else if (post.id === 13) {
    slug = "open-insurance-futuro-mercado-seguros";
  } else {
    slug = `${post.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()}-${post.id}`;
  }

  return (
    <a
      href={`/blog/${slug}`}
      className={`group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden block ${className}`}
      data-testid={`link-blog-post-${index}`}
      data-post-id={post.id}
    >
      {/* Image with Category Tag */}
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.alt} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          data-testid={`img-blog-post-${index}`}
        />
        {/* Category Tag */}
        <div 
          className="absolute top-4 left-4 bg-[var(--lina-cyan)] text-white px-3 py-1 rounded-full text-xs font-semibold"
          data-testid={`tag-blog-category-${index}`}
        >
          {post.category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {/* Date */}
        <div className="text-sm text-gray-500 mb-3">
          <span data-testid={`text-blog-date-${index}`}>{post.date}</span>
        </div>
        
        {/* Title with Lexend Font */}
        <h3 
          className="text-xl font-semibold text-[var(--lina-dark)] mb-3 group-hover:text-[var(--lina-cyan)] transition-colors"
          style={{ fontFamily: 'Lexend, sans-serif' }}
          data-testid={`text-blog-title-${index}`}
        >
          {post.title}
        </h3>
        
        {/* Description */}
        <p 
          className="text-gray-600 text-sm leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
          data-testid={`text-blog-description-${index}`}
        >
          {post.description}
        </p>
      </div>
    </a>
  );
}