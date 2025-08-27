import { Button } from "@/components/ui/button";
import SectionWithMockup from "@/components/ui/section-with-mockup";
import { CreditCard } from "lucide-react";

export default function LinaPaySection() {
  return (
    <>
      {/* Lina Pay Header Section */}
      <section 
        className="py-20 bg-white"
        data-testid="section-lina-pay"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 gradient-lina rounded-2xl flex items-center justify-center">
                <CreditCard className="text-white" size={32} />
              </div>
              <h2 
                className="text-4xl font-bold text-lina-dark"
                data-testid="heading-lina-pay-title"
              >
                Lina Pay
              </h2>
            </div>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-testid="text-lina-pay-description"
            >
              Transforme o PIX em motor de vendas, lucratividade e fidelização com nossas soluções inovadoras.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              className="gradient-lina text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              data-testid="button-learn-lina-pay"
            >
              Conheça o Lina Pay
            </Button>
          </div>
        </div>
      </section>

      {/* PIX Automático Section with Animation */}
      <SectionWithMockup
        title="PIX Automático"
        description="Ideal para pagamentos recorrentes com valor variável. O pagamento ocorre automaticamente se estiver dentro dos limites definidos pelo cliente. É o DDA turbinado, com muito mais liberdade."
        primaryImageSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&q=80"
        secondaryImageSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80"
        reverseLayout={false}
      />

      {/* PIX Biometria Section with Animation */}
      <SectionWithMockup
        title="PIX Biometria"
        description="Pagamentos são autorizados com biometria, direto no check-out. Traz segurança e conveniência para o e-commerce, impulsionando a adoção do PIX, sem quebras de jornada."
        primaryImageSrc="https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=500&q=80"
        secondaryImageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80"
        reverseLayout={true}
      />
    </>
  );
}
