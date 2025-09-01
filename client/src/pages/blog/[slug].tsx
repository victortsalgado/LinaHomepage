import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PostHeader from "@/components/views/blog/post/PostHeader";
import PostBody from "@/components/views/blog/post/PostBody";
import PostBodyPIXOpenFinance from "@/components/views/blog/post/PostBodyPIXOpenFinance";
import PostBodyOpenInsurance from "@/components/views/blog/post/PostBodyOpenInsurance";
import AuthorBox from "@/components/views/blog/post/AuthorBox";
import RelatedPosts from "@/components/views/blog/post/RelatedPosts";
import { allBlogPosts } from "@/data/blogPosts";
import { useRoute } from "wouter";
import { useMemo, useEffect } from "react";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const post = useMemo(() => {
    if (!slug) return null;
    
    // Handle specific slugs for featured articles
    if (slug === "pix-e-open-finance-remodelando-mercado-financeiro") {
      return allBlogPosts.find(p => p.id === 0) || null;
    }
    if (slug === "open-insurance-futuro-mercado-seguros") {
      return allBlogPosts.find(p => p.id === 13) || null;
    }
    
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

  // SEO metadata setup
  useEffect(() => {
    if (!post) return;

    // Set document title
    let title = `${post.title} | Lina`;
    if (post.id === 0) {
      title = "PIX e Open Finance: A Revolução no Mercado Financeiro | Lina";
    } else if (post.id === 13) {
      title = "Open Insurance no Brasil: O Futuro do Mercado de Seguros | Lina";
    }
    document.title = title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = post.description;
      document.head.appendChild(meta);
    }

    // Add JSON-LD structured data for featured articles
    if (post.id === 0 || post.id === 13) {
      const existingSchema = document.querySelector('#blog-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      const script = document.createElement('script');
      script.id = 'blog-schema';
      script.type = 'application/ld+json';
      
      let schemaData;
      if (post.id === 0) {
        schemaData = {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "PIX e Open Finance: A Revolução no Mercado Financeiro | Lina",
          "description": "Entenda como a sinergia entre PIX e Open Finance está criando novas soluções de pagamento, reduzindo custos e transformando a experiência do cliente. Saiba mais.",
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
          "about": [
            { "@type": "Thing", "name": "PIX" },
            { "@type": "Thing", "name": "Open Finance" }
          ],
          "datePublished": "2025-01-20",
          "dateModified": "2025-01-20",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
          },
          "image": post.image
        };
      } else if (post.id === 13) {
        schemaData = {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Open Insurance no Brasil: O Futuro do Mercado de Seguros | Lina",
          "description": "Explore como o Open Insurance está personalizando produtos e digitalizando o mercado de seguros no Brasil. Prepare sua empresa para o futuro.",
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
          "about": [
            { "@type": "Thing", "name": "Open Insurance" }
          ],
          "datePublished": "2025-01-22",
          "dateModified": "2025-01-22",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
          },
          "image": post.image
        };
      }
      
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const schema = document.querySelector('#blog-schema');
      if (schema) {
        schema.remove();
      }
    };
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

        {post.id === 0 ? (
          <PostBodyPIXOpenFinance post={post} />
        ) : post.id === 13 ? (
          <PostBodyOpenInsurance post={post} />
        ) : (
          <PostBody post={post} />
        )}
        
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