import { motion } from "framer-motion";
import { BlogPost } from "@/contexts/BlogSearchContext";
import { Post } from "../../../../lib/sanity";
import { Clock, Calendar } from "lucide-react";

interface PostHeaderProps {
  post: BlogPost | Post;
  sanityPost?: Post;
}

// Type guard to check if post is Sanity Post
function isSanityPost(post: BlogPost | Post): post is Post {
  return '_id' in post;
}

export default function PostHeader({ post, sanityPost }: PostHeaderProps) {
  // Use Sanity post data if available, otherwise use legacy post data
  const actualPost = sanityPost || post;
  
  let title: string;
  let excerpt: string;
  let category: string;
  let publishedDate: string;
  
  if (isSanityPost(actualPost)) {
    title = actualPost.title;
    excerpt = actualPost.excerpt;
    category = actualPost.category;
    publishedDate = new Date(actualPost.publishedAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  } else {
    title = actualPost.title;
    excerpt = actualPost.description;
    category = actualPost.category;
    publishedDate = actualPost.date;
  }
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 pt-24 pb-8"
    >
      {/* Category Tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-6"
      >
        <span 
          className="inline-block bg-[var(--lina-cyan)] text-white px-4 py-2 rounded-full text-sm font-semibold"
          data-testid="tag-post-category"
        >
          {category}
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-[var(--lina-dark)] mb-6 leading-tight"
        style={{ fontFamily: 'Lexend, sans-serif' }}
        data-testid="heading-post-title"
      >
        {title}
      </motion.h1>

      {/* Excerpt/Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl text-gray-600 mb-8 leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
        data-testid="text-post-excerpt"
      >
        {excerpt}
      </motion.p>

      {/* Author Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex items-center gap-4 pb-8 border-b border-gray-200"
      >
        {/* Author Avatar */}
        <img 
          src="/src/assets/mascote-astro-lina.png" 
          alt="Time Lina avatar"
          className="w-12 h-12 rounded-full object-cover"
          data-testid="img-author-avatar"
        />
        
        {/* Author Details */}
        <div className="flex-1">
          <h3 
            className="font-semibold text-[var(--lina-dark)] text-lg"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="text-author-name"
          >
            Time Lina
          </h3>
          <p 
            className="text-gray-600 text-sm"
            data-testid="text-author-role"
          >
            Equipe Editorial
          </p>
        </div>

        {/* Meta Information */}
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span data-testid="text-post-date">{publishedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span data-testid="text-post-read-time">5 min de leitura</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}