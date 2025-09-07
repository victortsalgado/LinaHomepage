"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function MissionSection() {
  const { ref, isVisible } = useScrollReveal();

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="py-48 md:py-64 lg:py-80 bg-gray-50"
      data-testid="section-mission-vision-values"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid gap-8 lg:gap-12 lg:grid-cols-3"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            data-testid="card-mission"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-400 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" data-testid="icon-mission" />
              </div>
              
              <h3 
                className="text-2xl lg:text-3xl font-bold text-gray-900"
                style={{ fontFamily: 'Lexend, sans-serif' }}
                data-testid="heading-mission"
              >
                Nossa Missão
              </h3>
              
              <p 
                className="text-lg leading-relaxed text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="text-mission-description"
              >
                Simplificar a complexidade do Open Finance, oferecendo uma infraestrutura 
                de pagamentos e dados que conecta empresas a novas oportunidades e acelera 
                a inovação no mercado financeiro.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            data-testid="card-vision"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" data-testid="icon-vision" />
              </div>
              
              <h3 
                className="text-2xl lg:text-3xl font-bold text-gray-900"
                style={{ fontFamily: 'Lexend, sans-serif' }}
                data-testid="heading-vision"
              >
                Nossa Visão
              </h3>
              
              <p 
                className="text-lg leading-relaxed text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="text-vision-description"
              >
                Ser a plataforma de Open Finance líder e mais confiável da América Latina, 
                reconhecida por impulsionar a próxima geração de serviços financeiros 
                inclusivos e eficientes.
              </p>
            </div>
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            data-testid="card-values"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Gem className="w-8 h-8 text-white" data-testid="icon-values" />
              </div>
              
              <h3 
                className="text-2xl lg:text-3xl font-bold text-gray-900"
                style={{ fontFamily: 'Lexend, sans-serif' }}
                data-testid="heading-values"
              >
                Nossos Valores
              </h3>
              
              <div 
                className="text-left space-y-4 w-full"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="list-values"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    <span className="font-semibold text-gray-900">Inovação:</span> Buscamos 
                    constantemente novas formas de resolver problemas complexos.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    <span className="font-semibold text-gray-900">Segurança:</span> A proteção 
                    dos dados de nossos parceiros é nossa prioridade máxima.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    <span className="font-semibold text-gray-900">Parceria:</span> Crescemos 
                    junto com nossos clientes, como verdadeiros aliados estratégicos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}