import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PostHeader from "@/components/views/blog/post/PostHeader";
import PostBody from "@/components/views/blog/post/PostBody";
import PostBodyPIXOpenFinance from "@/components/views/blog/post/PostBodyPIXOpenFinance";
import PostBodyOpenInsurance from "@/components/views/blog/post/PostBodyOpenInsurance";
import PostBodyOpenFinanceUpdates from "@/components/views/blog/post/PostBodyOpenFinanceUpdates";
import PostBodyOpenFinanceCredit from "@/components/views/blog/post/PostBodyOpenFinanceCredit";
import PostBodyOpenFinanceScenario from "@/components/views/blog/post/PostBodyOpenFinanceScenario";
import AuthorBox from "@/components/views/blog/post/AuthorBox";
import RelatedPosts from "@/components/views/blog/post/RelatedPosts";
import { allBlogPosts } from "@/data/blogPosts";
import { useRoute } from "wouter";
import { useMemo, useEffect } from "react";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/*");
  const fullSlug = params ? params["*"] : null;

  const post = useMemo(() => {
    if (!fullSlug) return null;
    
    // Create mapping of original URLs to post IDs for the 5 test posts from CSV
    const urlToPostMapping: { [key: string]: number } = {
      // URLs from the CSV (removing the domain part)
      "2025/03/inovacao-em-movimento-como-o-pix-e-o-open-finance-estao-remodelando-o-mercado-financeiro": 100,
      "2024/11/open-insurance-o-futuro-do-mercado-brasileiro-de-seguros-digitalizado-e-personalizado": 101,
      "2024/02/o-impacto-das-ultimas-atualizacoes-do-open-finance": 102,
      "2023/11/nivelando-o-jogo-e-destravando-o-mercado-de-credito-com-open-finance": 103,
      "2023/11/o-momento-atual-do-open-finance-no-brasil": 104,
    };
    
    // Check if it's one of our migrated URLs
    const migratedPostId = urlToPostMapping[fullSlug];
    if (migratedPostId) {
      return allBlogPosts.find(p => p.id === migratedPostId) || null;
    }
    
    
    // Convert slug back to ID (simple implementation)
    const id = parseInt(fullSlug.replace(/.*-(\d+)$/, '$1'));
    return allBlogPosts.find(p => p.id === id) || null;
  }, [fullSlug]);

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

    // Add JSON-LD structured data for migrated articles
    if (post.id >= 100 && post.id <= 104) {
      const existingSchema = document.querySelector('#blog-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      const script = document.createElement('script');
      script.id = 'blog-schema';
      script.type = 'application/ld+json';
      
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": `${post.title} | Lina`,
        "description": post.description,
        "author": {
          "@type": post.author.name === "Time Lina" ? "Organization" : "Person",
          "name": post.author.name
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
          { "@type": "Thing", "name": "Open Finance" },
          { "@type": "Thing", "name": "Open Insurance" }
        ],
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        },
        "image": post.image
      };
      
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