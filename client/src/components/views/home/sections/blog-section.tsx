import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pixBlogImage from "@assets/generated_images/PIX_2.0_blog_thumbnail_3b7ec595.png";
import openFinanceBlogImage from "@assets/generated_images/Open_Finance_blog_thumbnail_48730c91.png";
import openInsuranceBlogImage from "@assets/generated_images/Open_Insurance_blog_thumbnail_11c02fc5.png";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      category: "PIX 2.0",
      title: "Pix Automático: como funciona e por que adotar na sua empresa",
      description: "Descubra como o PIX Automático está revolucionando pagamentos recorrentes e trazendo benefícios para empresas e consumidores.",
      date: "28 Ago 2024",
      image: pixBlogImage,
      alt: "PIX 2.0 automatic payments visualization"
    },
    {
      id: 2,
      category: "OPEN FINANCE",
      title: "Pix e Open Finance: Remodelando o Mercado Financeiro",
      description: "Entenda a sinergia entre as duas maiores inovações do sistema financeiro e como sua empresa pode se beneficiar.",
      date: "25 Ago 2024",
      image: openFinanceBlogImage,
      alt: "Open Finance market transformation visualization"
    },
    {
      id: 3,
      category: "OPEN INSURANCE",
      title: "Open Insurance: O Futuro dos Seguros no Brasil Digital",
      description: "Explore como o compartilhamento de dados está criando um novo ecossistema de seguros mais justo e personalizado.",
      date: "22 Ago 2024",
      image: openInsuranceBlogImage,
      alt: "Open Insurance digital transformation visualization"
    }
  ];

  return (
    <section 
      className="py-48 md:py-64 lg:py-80 bg-gray-50 rounded-b-[40px]"
      data-testid="section-blog"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        {/* Centralized Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-normal text-[#006666] mb-4 text-center"
            data-testid="heading-blog-title"
          >
            Acompanhe nosso Blog e fique por dentro de tudo o<br />que acontece no <span className="font-bold">Universo Open</span>
          </h2>
        </div>
        
        {/* Grid of Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <a
              key={post.id}
              href="#"
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden block"
              data-testid={`link-blog-post-${index}`}
            >
              {/* Image with Category Tag */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.alt} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  data-testid={`img-blog-post-${index}`}
                />
                {/* Category Tag */}
                <div 
                  className="absolute top-4 left-4 bg-lina-cyan text-white px-3 py-1 rounded-full text-xs font-semibold"
                  data-testid={`tag-blog-category-${index}`}
                >
                  {post.category}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {/* Date */}
                <div className="text-sm text-gray-500 mb-3">
                  <span data-testid={`text-blog-date-${index}`}>{post.date}</span>
                </div>
                
                {/* Title with Lexend Font */}
                <h3 
                  className="text-xl font-semibold text-lina-dark mb-3 hover:text-lina-cyan transition-colors font-['Lexend']"
                  data-testid={`text-blog-title-${index}`}
                >
                  {post.title}
                </h3>
                
                {/* Description */}
                <p 
                  className="text-gray-600 text-sm leading-relaxed"
                  data-testid={`text-blog-description-${index}`}
                >
                  {post.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            variant="light-bg"
            className="px-6 py-2 flex items-center space-x-2"
            data-testid="button-view-all-articles"
          >
            <span>Ver todos os artigos</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
