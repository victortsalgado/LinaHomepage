import { motion } from "framer-motion";
import { BlogPost } from "@/contexts/BlogSearchContext";
import { Clock, Calendar } from "lucide-react";

interface PostHeaderProps {
  post: BlogPost;
}

export default function PostHeader({ post }: PostHeaderProps) {
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
          {post.category}
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
        {post.title}
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
        {post.description}
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
          src={post.author?.avatar || "/api/placeholder/60/60?text=Author"} 
          alt={`${post.author?.name || "Author"} avatar`}
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
            {post.author?.name || "Author"}
          </h3>
          {post.author?.role && (
            <p 
              className="text-gray-600 text-sm"
              data-testid="text-author-role"
            >
              {post.author.role}
            </p>
          )}
        </div>

        {/* Meta Information */}
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span data-testid="text-post-date">{post.date}</span>
          </div>
          {post.readTime && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span data-testid="text-post-read-time">{post.readTime}</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}