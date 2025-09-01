"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, CreditCard, AreaChart, TrendingUp, UserCheck } from "lucide-react";

export default function ApisSection() {
  // API endpoints data with code examples
  const apiEndpoints = [
    {
      id: "contas",
      icon: Landmark,
      title: "GET/Contas",
      description: "Acesse saldos, extratos e limites.",
      codeExample: 'curl "api.lina/v1/contas?id=..."'
    },
    {
      id: "cartoes",
      icon: CreditCard,
      title: "GET/Cartões",
      description: "Análise de risco e recomendação de produtos.",
      codeExample: 'curl "api.lina/v1/cartoes?id=..."'
    },
    {
      id: "credito",
      icon: AreaChart,
      title: "GET/Crédito",
      description: "Informações de empréstimos para modelagem.",
      codeExample: 'curl "api.lina/v1/credito?id=..."'
    },
    {
      id: "investimentos",
      icon: TrendingUp,
      title: "GET/Investimentos",
      description: "Dados de posição para carteiras consolidadas.",
      codeExample: 'curl "api.lina/v1/investimentos?id=..."'
    },
    {
      id: "cadastral",
      icon: UserCheck,
      title: "GET/Cadastral",
      description: "Validação de dados para onboarding e compliance.",
      codeExample: 'curl "api.lina/v1/cadastral?id=..."'
    }
  ];

  // State for active API endpoint
  const [activeEndpoint, setActiveEndpoint] = useState(apiEndpoints[0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50" data-testid="section-apis">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-apis-title"
          >
            APIs construídas para facilitar a sua operação
          </motion.h2>

          {/* Main Content Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Mobile: Code Editor First, Desktop: API List First */}
            <div className="order-2 lg:order-1">
              {/* API Endpoints List */}
              <div className="space-y-2">
                {apiEndpoints.map((endpoint) => {
                  const IconComponent = endpoint.icon;
                  const isActive = activeEndpoint.id === endpoint.id;
                  
                  return (
                    <div
                      key={endpoint.id}
                      onMouseEnter={() => setActiveEndpoint(endpoint)}
                      className={`group relative p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        isActive 
                          ? 'bg-white shadow-md border-l-4 border-lina-cyan' 
                          : 'hover:bg-white/50'
                      }`}
                      data-testid={`api-item-${endpoint.id}`}
                    >
                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? 'bg-lina-cyan/10' 
                            : 'bg-gray-100 group-hover:bg-lina-cyan/5'
                        }`}>
                          <IconComponent 
                            className={`w-6 h-6 transition-all duration-300 ${
                              isActive 
                                ? 'text-lina-cyan' 
                                : 'text-gray-600 group-hover:text-lina-cyan'
                            }`}
                            data-testid={`icon-${endpoint.id}`}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3
                            className={`text-lg font-semibold transition-colors duration-300 ${
                              isActive 
                                ? 'text-lina-cyan' 
                                : 'text-gray-900 group-hover:text-lina-cyan'
                            }`}
                            style={{ fontFamily: 'Lexend, sans-serif' }}
                            data-testid={`title-${endpoint.id}`}
                          >
                            {endpoint.title}
                          </h3>
                          <p
                            className="text-gray-600 text-sm mt-1"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            data-testid={`description-${endpoint.id}`}
                          >
                            {endpoint.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: Show First, Desktop: Code Editor Second */}
            <div className="order-1 lg:order-2">
              {/* Code Editor Mockup */}
              <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden" data-testid="code-editor-mockup">
                {/* Editor Header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-gray-400 text-sm font-mono">Terminal</span>
                  </div>
                </div>

                {/* Editor Content */}
                <div className="p-6 min-h-[200px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeEndpoint.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-full"
                      data-testid={`code-content-${activeEndpoint.id}`}
                    >
                      {/* Command Prompt */}
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-lina-cyan font-mono text-sm">$</span>
                        <div className="flex-1">
                          <pre className="text-green-400 font-mono text-sm leading-relaxed">
                            {activeEndpoint.codeExample}
                          </pre>
                        </div>
                      </div>

                      {/* Cursor Blink Effect */}
                      <div className="flex items-center">
                        <span className="text-lina-cyan font-mono text-sm">$</span>
                        <div className="ml-2 w-2 h-5 bg-lina-cyan animate-pulse"></div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}