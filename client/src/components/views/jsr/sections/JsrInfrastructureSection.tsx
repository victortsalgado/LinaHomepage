"use client";

import { motion } from "framer-motion";
import { Landmark, Shield, Wallet, CreditCard } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Institution types data
const institutionTypes = [
  {
    id: 1,
    icon: Landmark,
    title: "Bancos e cooperativas",
    description: "Saia na frente e ofereça o jeito mais moderno de pagar com o Pix."
  },
  {
    id: 2,
    icon: Shield,
    title: "Instituições de Pagamentos e Fintechs",
    description: "Antecipe tendências e gere vantagem competitiva transformando contas digitais em meios de pagamento Pix."
  },
  {
    id: 3,
    icon: Wallet,
    title: "Carteiras digitais",
    description: "Adicione o Pix por aproximação em sua wallet e seja a carteira preferida dos clientes."
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Plataformas de pagamento e BaaS",
    description: "Reduza custos por transação e amplie a oferta de serviços aos clientes finais."
  }
];

export default function JsrInfrastructureSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });
  
  const { ref: visualRef, isVisible: visualVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <section 
      className="py-48 md:py-64 lg:py-80 bg-white" 
      data-testid="section-jsr-infrastructure"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Visual Element (moved from right) */}
          <motion.div
            ref={visualRef}
            initial={{ opacity: 0, x: -50 }}
            animate={visualVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start order-2 lg:order-1"
          >
            {/* Smartphone Mockup */}
            <div className="relative">
              <motion.div
                className="relative w-80 h-96 bg-black rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={visualVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                data-testid="mockup-smartphone"
              >
                {/* Screen */}
                <div className="w-full h-full bg-white relative">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
                    <div className="text-sm font-medium text-gray-800">9:41</div>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Interface - PIX por Biometria */}
                  <div className="p-6 space-y-6">
                    {/* App header */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={visualVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        PIX por Biometria
                      </h3>
                      <p className="text-sm text-gray-600">
                        Pagamento Seguro
                      </p>
                    </motion.div>
                    
                    {/* Payment amount */}
                    <motion.div
                      className="bg-[var(--lina-cyan)]/10 rounded-2xl p-6 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={visualVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      <div className="text-3xl font-bold text-[var(--lina-cyan)] mb-2">R$ 45,90</div>
                      <div className="text-sm text-gray-600">Checkout sem redirecionamento</div>
                    </motion.div>
                    
                    {/* Biometric demonstration */}
                    <motion.div
                      className="flex justify-center items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={visualVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1.6, duration: 0.8 }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                        <motion.div
                          className="w-10 h-10 text-white"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.40.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-2.04-1.34-3.28 0-1.24.47-2.41 1.34-3.28.87-.87 2.04-1.34 3.28-1.34 1.24 0 2.41.47 3.28 1.34.87.87 1.34 2.04 1.34 3.28 0 1.24-.47 2.41-1.34 3.28-.18.18-.47.18-.65 0-.18-.18-.18-.47 0-.65.69-.69 1.07-1.61 1.07-2.63 0-1.02-.38-1.94-1.07-2.63-.69-.69-1.61-1.07-2.63-1.07-1.02 0-1.94.38-2.63 1.07-.69.69-1.07 1.61-1.07 2.63 0 1.02.38 1.94 1.07 2.63.18.18.18.47 0 .65-.09.1-.22.15-.35.15z"/>
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Success message */}
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0 }}
                      animate={visualVisible ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 2, duration: 0.8 }}
                    >
                      <p className="text-sm text-green-600 font-medium">
                        Toque para confirmar pagamento
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Text Content (moved from left) */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={textVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 order-1 lg:order-2"
          >
            {/* First Section - APIs and Support */}
            <div className="space-y-6">
              <h2
                className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: 'Lexend, sans-serif' }}
                data-testid="heading-infrastructure-apis"
              >
                APIs simples, suporte técnico próximo e foco em produção rápida
              </h2>
              
              <p
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="text-infrastructure-apis-description"
              >
                Nossas APIs e SDKs contam com suporte técnico dedicado e documentação completa. 
                Somos certificados no Open Finance e pelo Banco Central.
              </p>
            </div>

            {/* Second Section - Institution Types */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3
                  className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                  data-testid="heading-infrastructure-institutions"
                >
                  Infraestrutura JSR desenhada para vários modelos de instituições financeiras
                </h3>
                
                <h4
                  className="text-lg font-semibold text-[var(--lina-cyan)]"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                  data-testid="subheading-infrastructure-sectors"
                >
                  Veja como aplicamos no seu setor
                </h4>
              </div>

              {/* Institution Types List */}
              <div className="space-y-6">
                {institutionTypes.map((institution, index) => {
                  const IconComponent = institution.icon;
                  
                  return (
                    <motion.div
                      key={institution.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={textVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ 
                        duration: 0.6, 
                        ease: "easeOut",
                        delay: 0.3 + (index * 0.1)
                      }}
                      className="flex items-start gap-4"
                      data-testid={`item-institution-${index + 1}`}
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-xl flex items-center justify-center shadow-md">
                          <IconComponent 
                            className="w-6 h-6 text-white" 
                            data-testid={`icon-institution-${index + 1}`}
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <h5 
                          className="text-lg font-bold text-gray-900"
                          style={{ fontFamily: 'Lexend, sans-serif' }}
                          data-testid={`title-institution-${index + 1}`}
                        >
                          {institution.title}
                        </h5>
                        <p 
                          className="text-gray-600 leading-relaxed"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          data-testid={`description-institution-${index + 1}`}
                        >
                          {institution.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}