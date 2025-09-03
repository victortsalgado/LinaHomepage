import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/views/home/sections/hero-section";
import DataLinkSection from "@/components/views/home/sections/data-link-section";
import LinaPaySection from "@/components/views/home/sections/lina-pay-section";
import RegulatedEntitiesSection from "@/components/views/home/sections/regulated-entities-section";
import ClientsSection from "@/components/views/home/sections/clients-section";
import BlogSection from "@/components/views/home/sections/blog-section";
import NewsletterSection from "@/components/views/home/sections/newsletter-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Background blur circles */}
      <div className="floating-blur-circles">
        <div className="blur-circle"></div>
        <div className="blur-circle"></div>
        <div className="blur-circle"></div>
      </div>
      
      {/* Content Layer */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Header />
        <main>
          <HeroSection />
          <DataLinkSection />
          <LinaPaySection />
          <RegulatedEntitiesSection />
          <ClientsSection />
          <BlogSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
