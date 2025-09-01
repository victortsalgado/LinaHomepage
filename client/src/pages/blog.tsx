import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BlogHeroSection from "@/components/views/blog/sections/BlogHeroSection";
import RecentBlogsSection from "@/components/views/blog/sections/RecentBlogsSection";
import AllPostsSection from "@/components/views/blog/sections/AllPostsSection";
import { BlogSearchProvider } from "@/contexts/BlogSearchContext";

export default function Blog() {
  return (
    <BlogSearchProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <BlogHeroSection />
          <RecentBlogsSection />
          <AllPostsSection />
        </main>
        <Footer />
      </div>
    </BlogSearchProvider>
  );
}