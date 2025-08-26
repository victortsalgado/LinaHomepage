import { Button } from "@/components/ui/button";
import { University, CreditCard, TrendingUp, UserCheck, Database } from "lucide-react";

export default function DataLinkSection() {
  const features = [
    {
      icon: University,
      title: "Contas Bancárias",
      description: "Saldo, extrato, limite e transações"
    },
    {
      icon: CreditCard,
      title: "Cartões de Crédito",
      description: "Faturas e lançamentos, limites"
    },
    {
      icon: TrendingUp,
      title: "Investimentos",
      description: "Renda fixa e variável, títulos públicos"
    },
    {
      icon: UserCheck,
      title: "Dados Cadastrais",
      description: "Pessoa física e jurídica"
    }
  ];

  return (
    <section 
      className="py-20 bg-gray-50"
      data-testid="section-data-link"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 gradient-lina rounded-xl flex items-center justify-center">
                <Database className="text-white" size={24} />
              </div>
              <h2 
                className="text-4xl font-bold text-lina-dark"
                data-testid="heading-data-link-title"
              >
                Data Link
              </h2>
            </div>
            
            <p 
              className="text-xl text-gray-600 leading-relaxed"
              data-testid="text-data-link-description"
            >
              Integre dados financeiros para decisões e processos inteligentes. Conecte dados financeiros em tempo real, diretamente do Open Finance.
            </p>
            
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="w-12 h-12 bg-lina-light rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="text-lina-cyan text-xl" size={24} />
                  </div>
                  <h3 
                    className="font-semibold text-lina-dark mb-2"
                    data-testid={`text-feature-title-${index}`}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-gray-600 text-sm"
                    data-testid={`text-feature-description-${index}`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            <Button 
              className="gradient-lina text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              data-testid="button-learn-data-link"
            >
              Conheça o Data Link
            </Button>
          </div>
          
          {/* Illustration */}
          <div className="relative">
            {/* Professional woman using financial technology */}
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional woman analyzing financial data on multiple screens" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="img-data-link-main"
            />
            
            {/* Floating Cards */}
            <div 
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-float"
              data-testid="card-floating-sync"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold">Dados Sincronizados</span>
              </div>
            </div>
            
            <div 
              className="absolute -bottom-6 -left-6 gradient-lina text-white p-4 rounded-xl shadow-xl animate-float-delayed"
              data-testid="card-floating-institutions"
            >
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Instituições Conectadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
