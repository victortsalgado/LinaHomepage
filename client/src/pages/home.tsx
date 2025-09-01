import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import DataLinkSection from "@/components/home/data-link-section";
import LinaPaySection from "@/components/home/lina-pay-section";
import RegulatedEntitiesSection from "@/components/home/regulated-entities-section";
import ClientsSection from "@/components/home/clients-section";
import BlogSection from "@/components/home/blog-section";
import NewsletterSection from "@/components/home/newsletter-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Animated Blur Background */}
      <div className="floating-blur"></div>
      
      {/* Content Layer */}
      <div className="content-layer">
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
