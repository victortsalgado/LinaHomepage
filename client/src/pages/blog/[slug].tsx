import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PostHeader from "@/components/views/blog/post/PostHeader";
import PostBody from "@/components/views/blog/post/PostBody";
import AuthorBox from "@/components/views/blog/post/AuthorBox";
import RelatedPosts from "@/components/views/blog/post/RelatedPosts";
import { allBlogPosts } from "@/data/blogPosts";
import { useRoute } from "wouter";
import { useMemo } from "react";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const post = useMemo(() => {
    if (!slug) return null;
    // Convert slug back to ID (simple implementation)
    const id = parseInt(slug.replace(/.*-(\d+)$/, '$1'));
    return allBlogPosts.find(p => p.id === id) || null;
  }, [slug]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return allBlogPosts
      .filter(p => p.id !== post.id && p.category === post.category)
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <PostHeader post={post} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mb-12"
        >
          <img 
            src={post.image} 
            alt={post.alt} 
            className="w-full h-64 md:h-96 object-cover"
            data-testid="img-post-featured"
          />
        </motion.div>

        <PostBody post={post} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <AuthorBox author={post.author} />
        </motion.div>

        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <RelatedPosts posts={relatedPosts} />
          </motion.div>
        )}
      </motion.main>

      <Footer />
    </div>
  );
}