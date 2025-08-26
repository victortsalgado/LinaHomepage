import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "O futuro dos pagamentos instantâneos no Brasil",
      description: "Descubra como o PIX está revolucionando o mercado financeiro e as oportunidades para empresas.",
      date: "15 Jan 2024",
      readTime: "5 min de leitura",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Smartphone showing digital payment interface with holographic elements"
    },
    {
      id: 2,
      title: "Open Finance: Guia completo para instituições",
      description: "Tudo que você precisa saber sobre implementação e conformidade no ecossistema aberto.",
      date: "12 Jan 2024",
      readTime: "7 min de leitura",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Multiple screens displaying financial charts, graphs and data analytics"
    },
    {
      id: 3,
      title: "Biometria em pagamentos: segurança e experiência",
      description: "Como a autenticação biométrica está transformando a segurança dos pagamentos digitais.",
      date: "10 Jan 2024",
      readTime: "4 min de leitura",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Close-up of fingerprint scanner with blue digital security elements overlay"
    }
  ];

  return (
    <section 
      className="py-20 bg-white"
      data-testid="section-blog"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div>
            <h2 
              className="text-4xl font-bold text-lina-dark mb-4"
              data-testid="heading-blog-title"
            >
              Últimas do Blog
            </h2>
            <p 
              className="text-xl text-gray-600"
              data-testid="text-blog-description"
            >
              Insights sobre Open Finance, PIX e inovação
            </p>
          </div>
          <Button 
            variant="ghost"
            className="mt-6 md:mt-0 text-lina-cyan font-semibold hover:underline"
            data-testid="button-view-all-articles"
          >
            Ver todos os artigos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              data-testid={`card-blog-post-${index}`}
            >
              <img 
                src={post.image} 
                alt={post.alt} 
                className="w-full h-48 object-cover"
                data-testid={`img-blog-post-${index}`}
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span data-testid={`text-blog-date-${index}`}>{post.date}</span>
                  <span>•</span>
                  <span data-testid={`text-blog-readtime-${index}`}>{post.readTime}</span>
                </div>
                <h3 
                  className="text-xl font-semibold text-lina-dark mb-3 hover:text-lina-cyan transition-colors"
                  data-testid={`text-blog-title-${index}`}
                >
                  {post.title}
                </h3>
                <p 
                  className="text-gray-600 text-sm"
                  data-testid={`text-blog-description-${index}`}
                >
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
