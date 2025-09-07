"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Animated connection visualization component
const AnimatedConnections = () => {
  const nodes = [
    { id: 1, x: 20, y: 30, delay: 0 },
    { id: 2, x: 80, y: 20, delay: 0.5 },
    { id: 3, x: 60, y: 70, delay: 1 },
    { id: 4, x: 40, y: 50, delay: 1.5 },
    { id: 5, x: 10, y: 80, delay: 2 },
    { id: 6, x: 90, y: 60, delay: 2.5 },
  ];

  const connections = [
    { from: 1, to: 2, delay: 3 },
    { from: 2, to: 3, delay: 3.5 },
    { from: 3, to: 4, delay: 4 },
    { from: 4, to: 5, delay: 4.5 },
    { from: 1, to: 4, delay: 5 },
    { from: 2, to: 6, delay: 5.5 },
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
              strokeWidth="0.5"
              strokeOpacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                duration: 1.5,
                delay: connection.delay,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 3,
              }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-3 h-3 bg-[var(--lina-cyan)] rounded-full shadow-lg"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1], 
            opacity: [0, 1, 0.8],
          }}
          transition={{
            duration: 1,
            delay: node.delay,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 6,
          }}
        >
          {/* Node glow effect */}
          <div className="absolute inset-0 bg-[var(--lina-cyan)] rounded-full animate-ping opacity-30" />
        </motion.div>
      ))}

      {/* Data flow particles */}
      <motion.div
        className="absolute w-2 h-2 bg-[var(--lina-cyan)] rounded-full opacity-60"
        animate={{
          x: [20, 80, 60, 40, 10],
          y: [30, 20, 70, 50, 80],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default function DataLinkHeroSection() {
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

      <main className="overflow-hidden bg-white">
        <section>
          <div className="relative pt-24 md:pt-36">
            {/* Background Gradient */}
            <div 
              aria-hidden 
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,rgb(255,255,255)_75%)]" 
            />
            
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                {/* Left Column - Content */}
                <div className="text-center lg:text-left">
                  {/* Title */}
                  <motion.h1
                    className="mt-8 max-w-4xl mx-auto lg:mx-0 text-balance text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-datalink-hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Conecte dados bancários em{" "}
                    <span className="bg-gradient-to-r from-[#008F7F] to-[#2EC38C] bg-clip-text text-transparent">
                      um clique
                    </span>
                    {" "}— direto do Open Finance.
                  </motion.h1>
                  
                  {/* Description */}
                  <motion.p
                    className="mx-auto lg:mx-0 mt-6 max-w-2xl text-balance text-lg text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="text-datalink-hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    A ponte entre sua empresa e o Open Finance, sem complicação. Com o DataLink, você acessa mais de 2.200 pontos de dados de forma estruturada, incluindo saldos, transações, limites e cartões.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-8 flex justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <Button
                      variant="light-bg"
                      size="lg"
                      className="group h-14 px-10 text-lg"
                      data-testid="button-datalink-cta"
                    >
                      <span className="mr-2">Solicitar Demonstração</span>
                      <div className="overflow-hidden w-5">
                        <div className="flex w-10 -translate-x-1/2 duration-300 ease-in-out group-hover:translate-x-0">
                          <ArrowRight className="w-5 h-5" />
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Button>
                  </motion.div>

                  {/* Data points highlight */}
                  <motion.div
                    className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full" />
                      <span>+2.200 pontos de dados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full" />
                      <span>+50 instituições</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--lina-cyan)] rounded-full" />
                      <span>API homologada</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right Column - Animated Visual */}
                <div className="hidden lg:block relative h-[600px] w-full">
                  <motion.div
                    className="w-full h-full flex items-center justify-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  >
                    {/* Central hub */}
                    <motion.div
                      className="absolute z-10 w-24 h-24 bg-gradient-to-br from-[var(--lina-cyan)] to-teal-500 rounded-full flex items-center justify-center shadow-2xl"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 20px rgba(0, 239, 207, 0.3)',
                          '0 0 40px rgba(0, 239, 207, 0.5)',
                          '0 0 20px rgba(0, 239, 207, 0.3)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="text-white font-bold text-lg">API</span>
                    </motion.div>

                    {/* Animated connections */}
                    <AnimatedConnections />

                    {/* Floating data labels with continuous animation */}
                    <motion.div
                      className="absolute top-1/4 left-1/4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-gray-200 cursor-pointer hover:bg-[var(--lina-cyan)]/10 transition-colors"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -8, 0], 
                        scale: [0.8, 1, 1],
                        boxShadow: [
                          '0 4px 6px rgba(0, 0, 0, 0.1)',
                          '0 8px 15px rgba(0, 239, 207, 0.3)',
                          '0 4px 6px rgba(0, 0, 0, 0.1)'
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
                      <span className="text-xs font-medium text-gray-700 select-none">Saldos</span>
                    </motion.div>

                    <motion.div
                      className="absolute top-1/3 right-1/4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-gray-200 cursor-pointer hover:bg-[var(--lina-cyan)]/10 transition-colors"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -10, 0], 
                        scale: [0.8, 1, 1],
                        boxShadow: [
                          '0 4px 6px rgba(0, 0, 0, 0.1)',
                          '0 8px 15px rgba(0, 239, 207, 0.3)',
                          '0 4px 6px rgba(0, 0, 0, 0.1)'
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
                      <span className="text-xs font-medium text-gray-700 select-none">Transações</span>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-1/3 left-1/3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-gray-200 cursor-pointer hover:bg-[var(--lina-cyan)]/10 transition-colors"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -6, 0], 
                        scale: [0.8, 1, 1],
                        boxShadow: [
                          '0 4px 6px rgba(0, 0, 0, 0.1)',
                          '0 8px 15px rgba(0, 239, 207, 0.3)',
                          '0 4px 6px rgba(0, 0, 0, 0.1)'
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
                      <span className="text-xs font-medium text-gray-700 select-none">Limites</span>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-1/4 right-1/3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-gray-200 cursor-pointer hover:bg-[var(--lina-cyan)]/10 transition-colors"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: [0, -12, 0], 
                        scale: [0.8, 1, 1],
                        boxShadow: [
                          '0 4px 6px rgba(0, 0, 0, 0.1)',
                          '0 8px 15px rgba(0, 239, 207, 0.3)',
                          '0 4px 6px rgba(0, 0, 0, 0.1)'
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
                      <span className="text-xs font-medium text-gray-700 select-none">Cartões</span>
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