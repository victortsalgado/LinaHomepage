"use client";

import { BlogPost } from "@/contexts/BlogSearchContext";
import { Post } from "../../../../lib/sanity";

interface SanityBlogPostCardProps {
  post: Post;
  index: number;
  className?: string;
}

interface LegacyBlogPostCardProps {
  post: BlogPost;
  index: number;
  className?: string;
}

type BlogPostCardProps = SanityBlogPostCardProps | LegacyBlogPostCardProps;

// Type guard to check if post is Sanity Post
function isSanityPost(post: Post | BlogPost): post is Post {
  return '_id' in post;
}


export default function BlogPostCard({ post, index, className = "" }: BlogPostCardProps) {
  // Generate slug and other properties based on post type
  let slug: string;
  let title: string;
  let description: string;
  let category: string;
  let date: string;
  let image: string;
  let alt: string;
  let postId: string | number;
  
  if (isSanityPost(post)) {
    // Sanity post
    slug = post.slug.current;
    title = post.title;
    description = post.excerpt;
    category = post.category;
    date = new Date(post.publishedAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    image = post.mainImage?.asset ? `/api/placeholder/600/400?text=${encodeURIComponent(post.title)}` : "/api/placeholder/600/400?text=Blog+Post";
    alt = post.mainImage?.alt || post.title;
    postId = post._id;
  } else {
    // Legacy BlogPost
    if (post.id === 0) {
      slug = "pix-e-open-finance-remodelando-mercado-financeiro";
    } else if (post.id === 13) {
      slug = "open-insurance-futuro-mercado-seguros";
    } else if (post.id === 14) {
      slug = "impacto-ultimas-atualizacoes-open-finance";
    } else if (post.id === 15) {
      slug = "open-finance-mercado-de-credito";
    } else if (post.id === 16) {
      slug = "cenario-open-finance-brasil";
    } else {
      slug = `${post.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()}-${post.id}`;
    }
    title = post.title;
    description = post.description;
    category = post.category;
    date = post.date;
    image = post.image;
    alt = post.alt;
    postId = post.id;
  }

  return (
    <a
      href={`/blog/${slug}`}
      className={`group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden block ${className}`}
      data-testid={`link-blog-post-${index}`}
      data-post-id={postId}
    >
      {/* Image with Category Tag */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          data-testid={`img-blog-post-${index}`}
        />
        {/* Category Tag */}
        <div 
          className="absolute top-4 left-4 bg-[var(--lina-cyan)] text-white px-3 py-1 rounded-full text-xs font-semibold"
          data-testid={`tag-blog-category-${index}`}
        >
          {category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {/* Date */}
        <div className="text-sm text-gray-500 mb-3">
          <span data-testid={`text-blog-date-${index}`}>{date}</span>
        </div>
        
        {/* Title with Lexend Font */}
        <h3 
          className="text-xl font-semibold text-[var(--lina-dark)] mb-3 group-hover:text-[var(--lina-cyan)] transition-colors"
          style={{ fontFamily: 'Lexend, sans-serif' }}
          data-testid={`text-blog-title-${index}`}
        >
          {title}
        </h3>
        
        {/* Description */}
        <p 
          className="text-gray-600 text-sm leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
          data-testid={`text-blog-description-${index}`}
        >
          {description}
        </p>
      </div>
    </a>
  );
}