import { Button } from "@/components/ui/button";
import { RefreshCw, Fingerprint, ArrowRight, CreditCard } from "lucide-react";

export default function LinaPaySection() {
  return (
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
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* PIX Automático Card */}
          <div 
            className="bg-gradient-to-br from-lina-light to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            data-testid="card-pix-automatico"
          >
            <div className="w-16 h-16 gradient-lina rounded-2xl flex items-center justify-center mb-6">
              <RefreshCw className="text-white text-2xl" size={32} />
            </div>
            <h3 
              className="text-2xl font-bold text-lina-dark mb-4"
              data-testid="text-pix-automatico-title"
            >
              PIX Automático
            </h3>
            <p 
              className="text-gray-600 mb-6 leading-relaxed"
              data-testid="text-pix-automatico-description"
            >
              Ideal para pagamentos recorrentes with valor variável. O pagamento ocorre automaticamente se estiver dentro dos limites definidos pelo cliente. É o DDA turbinado, com muito mais liberdade.
            </p>
            <div className="flex items-center space-x-2 text-lina-cyan font-semibold cursor-pointer hover:underline">
              <span>Saiba mais</span>
              <ArrowRight size={16} />
            </div>
          </div>
          
          {/* PIX Biometria Card */}
          <div 
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            data-testid="card-pix-biometria"
          >
            <div className="w-16 h-16 gradient-dark rounded-2xl flex items-center justify-center mb-6">
              <Fingerprint className="text-lina-cyan text-2xl" size={32} />
            </div>
            <h3 
              className="text-2xl font-bold text-lina-dark mb-4"
              data-testid="text-pix-biometria-title"
            >
              PIX Biometria
            </h3>
            <p 
              className="text-gray-600 mb-6 leading-relaxed"
              data-testid="text-pix-biometria-description"
            >
              Pagamentos são autorizados com biometria, direto no check-out. Traz segurança e conveniência para o e-commerce, impulsionando a adoção do PIX, sem quebras de jornada.
            </p>
            <div className="flex items-center space-x-2 text-lina-cyan font-semibold cursor-pointer hover:underline">
              <span>Saiba mais</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="gradient-lina text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            data-testid="button-learn-lina-pay"
          >
            Conheça o Lina Pay
          </Button>
        </div>
      </div>
    </section>
  );
}
