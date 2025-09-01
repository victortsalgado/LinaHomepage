import { motion } from "framer-motion";
import { BlogPost } from "@/contexts/BlogSearchContext";
import BlogPostCard from "@/components/ui/BlogPostCard";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 
          className="text-3xl md:text-4xl font-bold text-[var(--lina-dark)] mb-4"
          style={{ fontFamily: 'Lexend, sans-serif' }}
          data-testid="heading-related-posts"
        >
          Artigos Relacionados
        </h2>
        <p 
          className="text-gray-600 text-lg max-w-2xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
          data-testid="text-related-posts-description"
        >
          Continue explorando nossos insights sobre tecnologia financeira e inovação
        </p>
      </div>

      {/* Related Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <BlogPostCard 
              post={post} 
              index={index}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}