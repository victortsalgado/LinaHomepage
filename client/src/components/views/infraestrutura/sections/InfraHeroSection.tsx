"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import infraImage from "@assets/generated_images/Fintech_innovation_infrastructure_visualization_95bfa7ab.png";

// Animated neural network visualization component
const AnimatedNeuralNetwork = () => {
  const nodes = [
    { id: 1, x: 15, y: 25, delay: 0 },
    { id: 2, x: 35, y: 15, delay: 0.3 },
    { id: 3, x: 55, y: 30, delay: 0.6 },
    { id: 4, x: 75, y: 20, delay: 0.9 },
    { id: 5, x: 85, y: 45, delay: 1.2 },
    { id: 6, x: 65, y: 60, delay: 1.5 },
    { id: 7, x: 45, y: 70, delay: 1.8 },
    { id: 8, x: 25, y: 55, delay: 2.1 },
    { id: 9, x: 50, y: 45, delay: 2.4 },
  ];

  const connections = [
    { from: 1, to: 2, delay: 3 },
    { from: 2, to: 3, delay: 3.2 },
    { from: 3, to: 4, delay: 3.4 },
    { from: 4, to: 5, delay: 3.6 },
    { from: 5, to: 6, delay: 3.8 },
    { from: 6, to: 7, delay: 4 },
    { from: 7, to: 8, delay: 4.2 },
    { from: 8, to: 1, delay: 4.4 },
    { from: 3, to: 9, delay: 4.6 },
    { from: 9, to: 6, delay: 4.8 },
    { from: 2, to: 9, delay: 5 },
    { from: 9, to: 5, delay: 5.2 },
  ];

  return (
    <div className="relative w-full h-full">
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="var(--lina-cyan)"
              strokeWidth="0.8"
              strokeOpacity="0.7"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                duration: 2,
                delay: connection.delay,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 4,
              }}
            />
          );
        })}
      </svg>

      {/* Neural Network Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-4 h-4 bg-[var(--lina-cyan)] rounded-full shadow-lg border-2 border-white"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.3, 1], 
            opacity: [0, 1, 0.9],
          }}
          transition={{
            duration: 1.2,
            delay: node.delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 8,
          }}
        >
          {/* Node glow effect */}
          <div className="absolute inset-0 bg-[var(--lina-cyan)] rounded-full animate-ping opacity-40" />
        </motion.div>
      ))}

      {/* Data flow particles */}
      <motion.div
        className="absolute w-2 h-2 bg-[var(--lina-cyan)] rounded-full opacity-70"
        animate={{
          x: [15, 35, 55, 75, 85, 65, 45, 25, 50],
          y: [25, 15, 30, 20, 45, 60, 70, 55, 45],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default function InfraHeroSection() {
  return (
    <>
      {/* Background Elements */}
      <div 
        aria-hidden
        className="fixed inset-0 pointer-events-none isolate overflow-hidden"
      >
        <div className="floating-ball" />
        <div className="floating-ball-2" />
        <div className="floating-ball-3" />
      </div>

      <main className="overflow-hidden bg-[var(--lina-dark)] circuit-texture">
        <section>
          <div className="relative pt-24 md:pt-36">
            {/* Background Gradient with dark theme */}
            <div 
              aria-hidden 
              className="absolute inset-0 -z-10 size-full bg-gradient-to-br from-[var(--lina-dark)] via-[var(--lina-medium)] to-[var(--lina-dark)]" 
            />
            
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[700px]">
                {/* Left Column - Content */}
                <div className="text-center lg:text-left">
                  {/* Title */}
                  <motion.h1
                    className="mt-8 max-w-4xl mx-auto lg:mx-0 text-balance text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight title-glow"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-infraestrutura-hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Infraestrutura e conectividade para um ecossistema de{" "}
                    <span className="bg-gradient-to-r from-[var(--lina-cyan)] to-teal-300 bg-clip-text text-transparent">
                      Open Finance escalável e seguro
                    </span>
                  </motion.h1>
                  
                  {/* Description */}
                  <motion.p
                    className="mx-auto lg:mx-0 mt-6 max-w-2xl text-balance text-lg text-gray-300 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="text-infraestrutura-hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    A única infraestrutura no Brasil capaz de levar sua operação Open do sandbox à escala, com segurança e conformidade inigualáveis.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-8 flex justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="group h-14 px-10 text-lg border-2 border-[var(--lina-cyan)] text-[var(--lina-cyan)] bg-transparent hover:bg-[var(--lina-cyan)] hover:text-[var(--lina-dark)] transition-all duration-300"
                      data-testid="button-infraestrutura-cta"
                    >
                      <span className="mr-2">Fale com um especialista</span>
                      <div className="overflow-hidden w-5">
                        <div className="flex w-10 -translate-x-1/2 duration-300 ease-in-out group-hover:translate-x-0">
                          <ArrowRight className="w-5 h-5" />
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                </div>
                
                {/* Right Column - Visual with Infrastructure Image */}
                <div className="hidden lg:block relative h-[700px] w-full">
                  <motion.div
                    className="w-full h-full flex items-center justify-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  >
                    {/* Main Infrastructure Image */}
                    <motion.div
                      className="absolute z-10 w-4/5 h-auto rounded-2xl overflow-hidden shadow-2xl"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      <img 
                        src={infraImage} 
                        alt="Infraestrutura de conectividade - visualização abstrata de dados e conexões de rede"
                        className="w-full h-auto object-cover filter brightness-110 contrast-110"
                        data-testid="img-infraestrutura-hero"
                        fetchPriority="high"
                      />
                      {/* Overlay gradient for better integration */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--lina-dark)]/30 via-transparent to-transparent" />
                    </motion.div>

                    {/* Animated neural network overlay */}
                    <div className="absolute inset-0 z-20">
                      <AnimatedNeuralNetwork />
                    </div>

                    {/* Floating data labels with technical terms */}
                    <motion.div
                      className="absolute top-1/4 left-1/6 bg-black/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-[var(--lina-cyan)]/30 cursor-pointer hover:bg-[var(--lina-cyan)]/10 transition-colors"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -8, 0], 
                        scale: [0.8, 1, 1],
                        boxShadow: [
                          '0 4px 6px rgba(0, 0, 0, 0.3)',
                          '0 8px 15px rgba(0, 239, 207, 0.4)',
                          '0 4px 6px rgba(0, 0, 0, 0.3)'
                        ]
                      }}
                      transition={{ 
                        delay: 1.5, 
                        duration: 0.5,
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                        boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -12,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="text-xs font-medium text-[var(--lina-cyan)] select-none">API Gateway</span>
                    </motion.div>

                    <motion.div
                      className="absolute top-1/3 right-1/6 bg-black/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-[var(--lina-cyan)]/30 cursor-pointer hover:bg-[var(--lina-cyan)]/10 transition-colors"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -10, 0], 
                        scale: [0.8, 1, 1],
                        boxShadow: [
                          '0 4px 6px rgba(0, 0, 0, 0.3)',
                          '0 8px 15px rgba(0, 239, 207, 0.4)',
                          '0 4px 6px rgba(0, 0, 0, 0.3)'
                        ]
                      }}
                      transition={{ 
                        delay: 2, 
                        duration: 0.5,
                        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                        boxShadow: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -12,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="text-xs font-medium text-[var(--lina-cyan)] select-none">Microservices</span>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-1/3 left-1/4 bg-black/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-[var(--lina-cyan)]/30 cursor-pointer hover:bg-[var(--lina-cyan)]/10 transition-colors"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -6, 0], 
                        scale: [0.8, 1, 1],
                        boxShadow: [
                          '0 4px 6px rgba(0, 0, 0, 0.3)',
                          '0 8px 15px rgba(0, 239, 207, 0.4)',
                          '0 4px 6px rgba(0, 0, 0, 0.3)'
                        ]
                      }}
                      transition={{ 
                        delay: 2.5, 
                        duration: 0.5,
                        y: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
                        boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -12,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="text-xs font-medium text-[var(--lina-cyan)] select-none">Cloud Native</span>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-1/4 right-1/4 bg-black/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-[var(--lina-cyan)]/30 cursor-pointer hover:bg-[var(--lina-cyan)]/10 transition-colors"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -12, 0], 
                        scale: [0.8, 1, 1],
                        boxShadow: [
                          '0 4px 6px rgba(0, 0, 0, 0.3)',
                          '0 8px 15px rgba(0, 239, 207, 0.4)',
                          '0 4px 6px rgba(0, 0, 0, 0.3)'
                        ]
                      }}
                      transition={{ 
                        delay: 3, 
                        duration: 0.5,
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 },
                        boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -12,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="text-xs font-medium text-[var(--lina-cyan)] select-none">Security Layer</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}