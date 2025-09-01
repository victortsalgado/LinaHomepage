import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/views/contato/sections/ContactSection";

export default function Contato() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}