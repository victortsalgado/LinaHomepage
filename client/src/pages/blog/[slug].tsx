import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PostHeader from '@/components/views/blog/post/PostHeader';
import PostBody from '@/components/views/blog/post/PostBody';
import AuthorBox from '@/components/views/blog/post/AuthorBox';
import RelatedPosts from '@/components/views/blog/post/RelatedPosts';
// Simple NotFound component inline
const NotFound = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-gray-600 mb-8">Post não encontrado</p>
      <a href="/blog" className="text-cyan-600 hover:text-cyan-700">
        Voltar ao blog
      </a>
    </div>
  </div>
);
import { usePost, usePosts } from '@/hooks/usePosts';
import { useMemo } from 'react';
import { sanityPostToBlogPost } from '@/contexts/BlogSearchContext';
import { allBlogPosts as mockPosts } from '@/data/blogPosts';

export default function BlogSlugPage() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug;
  
  // Fetch Sanity post data
  const { data: sanityPost, isLoading, error } = usePost(slug || '');
  
  // Get related posts from Sanity data
  const { data: allSanityPosts } = usePosts();
  const relatedPosts = useMemo(() => {
    if (!sanityPost || !allSanityPosts) return [];
    return allSanityPosts
      .filter(p => p.slug.current !== slug && p.category === sanityPost.category)
      .slice(0, 3)
      .map((post, index) => sanityPostToBlogPost(post, index));
  }, [sanityPost, allSanityPosts, slug]);
  
  // Find fallback mock post only if no Sanity data
  const mockPost = mockPosts.find(p => p.slug === slug);

  // JSON-LD Schema
  useEffect(() => {
    if (!sanityPost && !mockPost) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'blog-schema';
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": sanityPost?.title || mockPost?.title || '',
      "description": sanityPost?.excerpt || mockPost?.description || '',
      "author": {
        "@type": "Organization",
        "name": "Lina"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Lina",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/assets/new-lina-logo.png`
        }
      },
      "datePublished": sanityPost?.publishedAt || mockPost?.date || "2025-01-15",
      "dateModified": sanityPost?.publishedAt || mockPost?.date || "2025-01-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };
    
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('#blog-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [sanityPost, mockPost]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando post...</p>
        </div>
      </div>
    );
  }

  // If no post found in Sanity, try fallback to mock data
  if (!sanityPost && !mockPost) {
    return <NotFound />;
  }

  // Use Sanity post as primary, mock as fallback
  const displayPost = sanityPost ? sanityPostToBlogPost(sanityPost, 0) : mockPost;

  if (!displayPost) {
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
        <PostHeader post={displayPost} sanityPost={sanityPost} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mb-12"
        >
          <img 
            src={sanityPost?.mainImage?.asset ? `/api/placeholder/800/400?text=${encodeURIComponent(sanityPost.title)}` : displayPost?.image || '/api/placeholder/800/400'} 
            alt={sanityPost?.mainImage?.alt || displayPost?.alt || 'Post image'} 
            className="w-full h-64 md:h-96 object-cover"
            data-testid="img-post-featured"
          />
        </motion.div>

        <PostBody post={displayPost} sanityPost={sanityPost} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <AuthorBox author={displayPost.author} />
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