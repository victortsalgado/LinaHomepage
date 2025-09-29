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
    
    // Handle legacy specific slugs for featured articles
    if (fullSlug === "pix-e-open-finance-remodelando-mercado-financeiro") {
      return allBlogPosts.find(p => p.id === 0) || null;
    }
    if (fullSlug === "open-insurance-futuro-mercado-seguros") {
      return allBlogPosts.find(p => p.id === 13) || null;
    }
    if (fullSlug === "impacto-ultimas-atualizacoes-open-finance") {
      return allBlogPosts.find(p => p.id === 14) || null;
    }
    if (fullSlug === "open-finance-mercado-de-credito") {
      return allBlogPosts.find(p => p.id === 15) || null;
    }
    if (fullSlug === "cenario-open-finance-brasil") {
      return allBlogPosts.find(p => p.id === 16) || null;
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
    if (post.id === 0) {
      title = "PIX e Open Finance: A Revolução no Mercado Financeiro | Lina";
    } else if (post.id === 13) {
      title = "Open Insurance no Brasil: O Futuro do Mercado de Seguros | Lina";
    } else if (post.id === 14) {
      title = "Últimas Atualizações do Open Finance: Impacto e Oportunidades | Lina";
    } else if (post.id === 15) {
      title = "Como o Open Finance está Destravando o Mercado de Crédito | Lina";
    } else if (post.id === 16) {
      title = "O Cenário do Open Finance no Brasil: Situação Atual e Tendências";
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
    if (post.id === 0 || post.id === 13 || post.id === 14 || post.id === 15 || post.id === 16) {
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
      } else if (post.id === 14) {
        schemaData = {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": "Últimas Atualizações do Open Finance: Impacto e Oportunidades | Lina",
          "description": "Análise completa sobre as últimas atualizações do Open Finance no Brasil e o que elas significam para bancos, fintechs e instituições de pagamento.",
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
            { "@type": "Thing", "name": "Open Finance" }
          ],
          "datePublished": "2025-01-25",
          "dateModified": "2025-01-25",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
          },
          "image": post.image
        };
      } else if (post.id === 15) {
        schemaData = {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Como o Open Finance está Destravando o Mercado de Crédito | Lina",
          "description": "Descubra como a análise de dados via Open Finance está nivelando o jogo, reduzindo riscos e criando novas oportunidades no mercado de crédito.",
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
            { "@type": "Thing", "name": "Análise de Crédito" },
            { "@type": "Thing", "name": "Open Finance" }
          ],
          "datePublished": "2025-01-28",
          "dateModified": "2025-01-28",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
          },
          "image": post.image
        };
      } else if (post.id === 16) {
        schemaData = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "O Cenário do Open Finance no Brasil: Situação Atual e Tendências",
          "description": "Um panorama completo sobre o momento atual do Open Finance no Brasil. Entenda a adesão, o impacto nos bancos e as tendências para o futuro.",
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
            { "@type": "Thing", "name": "Open Finance Brasil" }
          ],
          "datePublished": "2025-01-30",
          "dateModified": "2025-01-30",
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
        ) : post.id === 14 ? (
          <PostBodyOpenFinanceUpdates post={post} />
        ) : post.id === 15 ? (
          <PostBodyOpenFinanceCredit post={post} />
        ) : post.id === 16 ? (
          <PostBodyOpenFinanceScenario post={post} />
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