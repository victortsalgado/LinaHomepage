import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Database, Clock, Target, Users, CheckCircle } from "lucide-react";
import Header from "@/components/layout/header";

export default function DataLink() {
  const featureCards = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Dados bancários e de investimento em uma única API",
      description: "Acesse dados consolidados de PF e PJ em mais de 50 instituições"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Integração rápida com APIs padronizadas", 
      description: "Reduza o tempo de integração com documentação robusta e suporte técnico"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalização e segmentação em nível avançado",
      description: "Use dados reais e atualizados para criar ofertas sob medida e melhorar a experiência do cliente"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança e conformidade como padrão",
      description: "Tecnologia em conformidade com Open Finance, LGPD e homologada pelo Banco Central"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Insights acionáveis com base em dados reais",
      description: "Mais de 2 mil pontos de dados para alimentar seus sistemas de BI e analytics"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tecnologia proprietária com flexibilidade para escalar",
      description: "Soluções desenvolvidas pela Lina, sem dependência de terceiros"
    }
  ];

  const apiEndpoints = [
    {
      icon: "💳",
      title: "GET/Contas",
      description: "Saldo, extrato, limites e transações bancárias. Ideal para análise de crédito, comprovação de renda e conciliação bancária."
    },
    {
      icon: "💸",
      title: "GET/Cartões", 
      description: "Limites, faturas, tipos de crédito e histórico de uso. Perfeito para gestão de risco e recomendação de produtos financeiros."
    },
    {
      icon: "💰",
      title: "GET/Crédito",
      description: "Informações sobre contratos de empréstimos e financiamentos. Base sólida para modelagem de crédito e prevenção à fraude."
    },
    {
      icon: "📈",
      title: "GET/Investimentos",
      description: "Dados de posição e movimentação em renda fixa, variável, fundos e tesouro direto. Essencial para carteiras consolidadas e planejamento financeiro."
    },
    {
      icon: "📋",
      title: "GET/Cadastral",
      description: "Nome, documentos, endereço, contatos e estrutura societária (PJ). Base para KYC, validação de identidade e compliance."
    }
  ];

  const sectors = [
    {
      icon: "🏦",
      title: "Plataformas e Marketplaces de Crédito",
      description: "Automatize a análise de crédito com dados reais e atualizados"
    },
    {
      icon: "📊",
      title: "Plataformas de Investimento", 
      description: "Ofereça carteiras consolidadas e recomendações personalizadas"
    },
    {
      icon: "💼",
      title: "Empresas de Assessoria Financeira",
      description: "Tenha uma visão completa do patrimônio dos seus clientes"
    },
    {
      icon: "📱",
      title: "Plataformas de Contabilidade Online",
      description: "Concilie e categorize transações automaticamente"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Conecte dados bancários em um clique{" "}
                <span className="text-lina-cyan">— direto do Open Finance</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Com o Data Link você acessa informações bancárias e de investimentos de clientes PF e PJ de forma segura,
                padronizada e integrada via Open Finance. Tudo com uma única API e em conformidade com a LGPD.
              </p>
              <Button 
                size="lg" 
                className="bg-lina-cyan hover:bg-lina-cyan/90 text-white px-8 py-4 rounded-full"
                data-testid="button-hero-cta"
              >
                Falar com um especialista
              </Button>
            </div>
            
            {/* Contact Form */}
            <Card className="p-6 bg-slate-900 text-white border-0 shadow-xl">
              <CardContent className="space-y-6 p-0">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Solicite uma demonstração</h3>
                  <p className="text-gray-300">Fale com nossos especialistas</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-white text-sm">Nome completo *</Label>
                    <Input 
                      placeholder="Digite seu nome" 
                      className="mt-1 bg-white text-black"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white text-sm">E-mail corporativo *</Label>
                    <Input 
                      placeholder="Digite seu e-mail corporativo" 
                      className="mt-1 bg-white text-black"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white text-sm">Telefone *</Label>
                    <Input 
                      placeholder="DDD + Número" 
                      className="mt-1 bg-white text-black"
                      data-testid="input-phone"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white text-sm">Empresa *</Label>
                    <Input 
                      placeholder="Nome da sua empresa" 
                      className="mt-1 bg-white text-black"
                      data-testid="input-company"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white text-sm">Qual o Faturamento Anual da Empresa?</Label>
                    <Select>
                      <SelectTrigger className="mt-1 bg-white text-black" data-testid="select-revenue">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5m">Até R$ 5 milhões</SelectItem>
                        <SelectItem value="5-10m">Entre R$ 5 milhões e R$ 10 milhões</SelectItem>
                        <SelectItem value="10-50m">Entre R$ 10 milhões e R$ 50 milhões</SelectItem>
                        <SelectItem value="50m+">Acima de R$ 50 milhões</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    className="w-full bg-lina-cyan hover:bg-lina-cyan/90 text-white"
                    data-testid="button-form-submit"
                  >
                    Solicitar demonstração
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-8">
            <p className="text-lina-cyan font-medium">Quem usa, recomenda</p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-slate-900 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <blockquote className="text-lg leading-relaxed mb-6">
                "Temos uma parceria sólida com a Lina. É um parceiro estratégico para o Banco Semear, contribuindo com dados,
                soluções de ITP e diferenciais importantes nos nossos meios de pagamento. Acreditamos no Open Finance e encontramos na Lina um
                aliado que entende nossas necessidades e entrega soluções sob medida."
              </blockquote>
              
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Ricardo Mendes" />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Ricardo Mendes</div>
                  <div className="text-gray-300 text-sm">Diretor de Tecnologia, Banco Semear</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Veja nossos diferenciais na prática
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-lina-cyan/10 rounded-xl flex items-center justify-center text-lina-cyan">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              APIs completas para todas as suas necessidades
            </h2>
            <p className="text-lg text-gray-600">
              Acesse dados estruturados e padronizados com nossa suite de APIs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiEndpoints.map((endpoint, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-lina-cyan/10 rounded-xl flex items-center justify-center text-2xl">
                      {endpoint.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {endpoint.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {endpoint.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Feito para resolver dores reais de diferentes segmentos
            </h2>
            <p className="text-lg text-gray-600">
              Veja como aplicamos no seu setor
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-lina-cyan/20 rounded-xl flex items-center justify-center text-2xl">
                      {sector.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {sector.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vamos juntos transformar complexidade em agilidade
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Fale com um de nossos especialistas e descubra como o Data Link pode acelerar a inovação na sua empresa
          </p>
          <Button 
            size="lg" 
            className="bg-lina-cyan hover:bg-lina-cyan/90 text-white px-8 py-4 rounded-full"
            data-testid="button-cta-final"
          >
            Solicitar demonstração
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t">
        <div className="container mx-auto px-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 LINA Open X - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}