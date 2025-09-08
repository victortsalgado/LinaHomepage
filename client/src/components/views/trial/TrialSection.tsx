import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { 
  Database, 
  Smartphone, 
  CheckCircle, 
  Rocket, 
  Mail, 
  Users, 
  Eye, 
  EyeOff 
} from "lucide-react";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";

export default function TrialSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    password: "",
    agreeToTerms: false
  });

  const benefits = [
    {
      icon: Database,
      title: "Explore nossas APIs",
      description: "Acesse nossa documentação completa e teste nossas APIs de Open Finance."
    },
    {
      icon: Smartphone,
      title: "Crie um app de teste",
      description: "Desenvolva aplicações de teste para validar seus casos de uso."
    },
    {
      icon: CheckCircle,
      title: "Valide seu caso de uso",
      description: "Teste diferentes cenários e funcionalidades com dados reais."
    },
    {
      icon: Rocket,
      title: "Acelere seu go-to-market",
      description: "Lance sua solução mais rapidamente com nossa infraestrutura robusta."
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleSocialLogin = (provider: string) => {
    // Handle social login
    console.log(`Login with ${provider}`);
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-48 md:py-64 lg:py-80 bg-gray-50 transition-all duration-1000 ${
        sectionVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      data-testid="section-trial"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Informational Content */}
          <div className={`space-y-12 transition-all duration-1000 delay-300 ${
            sectionVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>
            
            {/* Main Title and Description */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-lexend text-gray-900 leading-tight">
                Ative o potencial do{" "}
                <span className="bg-gradient-to-r from-lina-dark to-lina-cyan bg-clip-text text-transparent">
                  Open Finance
                </span>{" "}
                com a Lina
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Crie sua conta e comece a explorar a nossa documentação completa, SDKs e tudo o que você precisa para começar a construir com Open Finance em minutos.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-start gap-4 transition-all duration-700 ${
                      sectionVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-lina-cyan/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-lina-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold font-lexend text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className={`bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-700 delay-1000 ${
              sectionVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-lina-cyan/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-lina-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-lexend text-gray-900 mb-2">
                    Fale com um especialista
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nossa equipe está pronta para ajudar você a implementar as melhores soluções de Open Finance para seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Signup Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            sectionVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100">
              
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold font-lexend text-gray-900 mb-3">
                  Comece seu trial gratuito
                </h2>
                <p className="text-gray-600">
                  Sem cartão de crédito. Fale com nosso time de especialistas.
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3 mb-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-12 rounded-full border-gray-300 hover:border-gray-400 transition-colors"
                  onClick={() => handleSocialLogin('google')}
                  data-testid="button-google-login"
                >
                  <FaGoogle className="w-5 h-5 mr-3 text-red-500" />
                  Continue with Google
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-12 rounded-full border-gray-300 hover:border-gray-400 transition-colors"
                  onClick={() => handleSocialLogin('microsoft')}
                  data-testid="button-microsoft-login"
                >
                  <FaMicrosoft className="w-5 h-5 mr-3 text-blue-500" />
                  Continue with Microsoft
                </Button>
              </div>

              {/* Separator */}
              <div className="relative mb-6">
                <Separator className="bg-gray-200" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3">
                  <span className="text-sm text-gray-500 font-medium">OU</span>
                </div>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Nome completo
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="h-12 rounded-full border-gray-300 focus:border-lina-cyan focus:ring-lina-cyan"
                    placeholder="Seu nome completo"
                    required
                    data-testid="input-full-name"
                  />
                </div>

                {/* Corporate Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    E-mail corporativo
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="h-12 rounded-full border-gray-300 focus:border-lina-cyan focus:ring-lina-cyan"
                    placeholder="seu.email@empresa.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                    Nome da sua empresa
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="h-12 rounded-full border-gray-300 focus:border-lina-cyan focus:ring-lina-cyan"
                    placeholder="Nome da empresa"
                    required
                    data-testid="input-company-name"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="h-12 rounded-full border-gray-300 focus:border-lina-cyan focus:ring-lina-cyan"
                    placeholder="(11) 99999-9999"
                    required
                    data-testid="input-phone"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Crie sua senha
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="h-12 rounded-full border-gray-300 focus:border-lina-cyan focus:ring-lina-cyan pr-12"
                      placeholder="Crie uma senha segura"
                      required
                      data-testid="input-password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
                      onClick={() => setShowPassword(!showPassword)}
                      data-testid="button-toggle-password"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                    className="mt-1 border-gray-300 data-[state=checked]:bg-lina-cyan data-[state=checked]:border-lina-cyan"
                    required
                    data-testid="checkbox-terms"
                  />
                  <Label 
                    htmlFor="agreeToTerms" 
                    className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                  >
                    Eu concordo com os{" "}
                    <a href="/termos" className="text-lina-cyan hover:underline font-medium">
                      Termos de Serviço
                    </a>
                    {" "}e a{" "}
                    <a href="/privacidade" className="text-lina-cyan hover:underline font-medium">
                      Política de Privacidade
                    </a>
                    .
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 bg-lina-cyan hover:bg-lina-cyan/90 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg"
                  disabled={!formData.agreeToTerms}
                  data-testid="button-create-account"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Criar minha conta
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}