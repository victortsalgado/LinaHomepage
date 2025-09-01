import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BlogListingSection from "@/components/views/blog/BlogListingSection";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BlogListingSection />
      </main>
      <Footer />
    </div>
  );
}