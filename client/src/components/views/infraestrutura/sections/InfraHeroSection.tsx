"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Shield, Smartphone, Users, BarChart3, Code } from "lucide-react";
import LaserFlow from "@/components/LaserFlow";

export default function InfraHeroSection() {
  return (
    <section 
      className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--lina-dark)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-gray-900/30" />

        {/* Floating orbs - following Lina's pattern */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-teal-500/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">

          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Infraestrutura &{" "}
              <span className="bg-gradient-to-r from-[#00b6ac] to-[#2EC9BC] bg-clip-text text-transparent">
                Conectividade
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-10"
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Habilite sua instituição no Open Finance & Insurance com tecnologia, performance, segurança e o suporte do melhor time de especialistas do mercado!
            </motion.p>

            {/* Highlighted Message Box */}
            <motion.div
              className="bg-gradient-to-r from-[#00b6ac]/10 to-[#2EC9BC]/5 border border-[#00b6ac]/30 rounded-2xl p-6 mb-10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p 
                className="text-lg text-[#00b6ac] font-medium leading-relaxed text-center lg:text-left" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Infraestrutura homologada, suporte especializado e performance comprovada: o padrão de quem lidera o ecossistema Open.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="group bg-gradient-to-r from-[#00b6ac] to-[#2EC9BC] hover:from-[#00b6ac]/90 hover:to-[#2EC9BC]/90 text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl shadow-[#00b6ac]/25 hover:shadow-[#00b6ac]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden">
                {/* Button shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center gap-3" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  Fale com um especialista
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Main Container */}
            <div className="relative bg-gradient-to-br from-white/5 via-white/2 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-white/10 overflow-hidden">
              
              {/* Laser Flow Background Effect */}
              <div className="absolute inset-0 z-0">
                <LaserFlow
                  color="#00b6ac"
                  horizontalBeamOffset={0.0}
                  verticalBeamOffset={0.1}
                  fogIntensity={0.3}
                  flowSpeed={0.5}
                  wispIntensity={3.0}
                  verticalSizing={1.5}
                  horizontalSizing={0.8}
                />
              </div>

              {/* Multiple Laser Lines for Network Connections */}
              {[
                { x: -0.3, y: -0.2, rotation: 45, color: "#00b6ac" },
                { x: 0.3, y: -0.2, rotation: 135, color: "#2EC9BC" },
                { x: -0.3, y: 0.2, rotation: -45, color: "#00b6ac" },
                { x: 0.3, y: 0.2, rotation: -135, color: "#2EC9BC" },
                { x: 0, y: -0.35, rotation: 90, color: "#00b6ac" },
                { x: 0, y: 0.35, rotation: -90, color: "#2EC9BC" }
              ].map((laser, index) => (
                <div 
                  key={index}
                  className="absolute z-1"
                  style={{
                    top: `${50 + laser.y * 100}%`,
                    left: `${50 + laser.x * 100}%`,
                    width: '200px',
                    height: '100px',
                    transform: `translate(-50%, -50%) rotate(${laser.rotation}deg)`,
                    opacity: 0.6
                  }}
                >
                  <LaserFlow
                    color={laser.color}
                    horizontalBeamOffset={0.0}
                    verticalBeamOffset={0.0}
                    fogIntensity={0.2}
                    flowSpeed={0.3 + index * 0.1}
                    wispIntensity={2.0}
                    verticalSizing={0.8}
                    horizontalSizing={2.0}
                    decay={0.8}
                  />
                </div>
              ))}

              {/* Network Diagram com z-10 para ficar acima dos lasers */}
              <div className="relative h-96 w-full z-10">
                {/* Central Node - LINA */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00b6ac] to-[#2EC9BC] rounded-full flex items-center justify-center shadow-2xl shadow-[#00b6ac]/50 border-4 border-white/20">
                    <span className="text-white font-bold text-sm" style={{ fontFamily: 'Lexend, sans-serif' }}>LINA</span>
                  </div>
                  <div className="absolute inset-0 bg-[#00b6ac] rounded-full animate-ping opacity-30" />
                </div>

                {/* Satellite Nodes */}
                {[
                  { top: '15%', left: '15%', label: 'Banks', icon: Building2, delay: '0s' },
                  { top: '15%', right: '15%', label: 'Insurance', icon: Shield, delay: '0.5s' },
                  { bottom: '15%', left: '15%', label: 'Fintechs', icon: Smartphone, delay: '1s' },
                  { bottom: '15%', right: '15%', label: 'Partners', icon: Users, delay: '1.5s' },
                  { top: '5%', left: '50%', label: 'Regulators', icon: BarChart3, delay: '2s' },
                  { bottom: '5%', left: '50%', label: 'APIs', icon: Code, delay: '2.5s' }
                ].map((node, index) => {
                  const IconComponent = node.icon;
                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                      style={{ 
                        top: node.top,
                        left: node.left,
                        right: node.right,
                        bottom: node.bottom
                      }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full border-2 border-[#00b6ac]/40 flex items-center justify-center shadow-lg"
                        animate={{
                          scale: [1, 1.1, 1],
                          borderColor: ['rgba(0, 182, 172, 0.4)', 'rgba(0, 182, 172, 0.8)', 'rgba(0, 182, 172, 0.4)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: parseFloat(node.delay)
                        }}
                      >
                        <IconComponent className="w-5 h-5 text-[#00b6ac]" />
                      </motion.div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 font-medium whitespace-nowrap">
                        {node.label}
                      </div>
                    </div>
                  );
                })}

                {/* Connection Lines with Laser Flow Effect */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  {[
                    // Coordenadas exatas para coincidir com os centros dos ícones
                    { x1: '50%', y1: '50%', x2: '15%', y2: '15%', delay: 0, label: 'Banks' },      // top-left
                    { x1: '50%', y1: '50%', x2: '85%', y2: '15%', delay: 0.3, label: 'Insurance' }, // top-right 
                    { x1: '50%', y1: '50%', x2: '15%', y2: '85%', delay: 0.6, label: 'Fintechs' },  // bottom-left
                    { x1: '50%', y1: '50%', x2: '85%', y2: '85%', delay: 0.9, label: 'Partners' },  // bottom-right
                    { x1: '50%', y1: '50%', x2: '50%', y2: '5%', delay: 1.2, label: 'Regulators' }, // top-center
                    { x1: '50%', y1: '50%', x2: '50%', y2: '95%', delay: 1.5, label: 'APIs' }       // bottom-center
                  ].map((line, index) => (
                    <g key={index}>
                      {/* Base line */}
                      <line
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="rgba(0, 182, 172, 0.2)"
                        strokeWidth="1"
                      />

                      {/* Animated laser flow */}
                      <motion.line
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="url(#laserGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ 
                          pathLength: 0,
                          opacity: 0
                        }}
                        animate={{ 
                          pathLength: [0, 0.8, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          delay: 2 + line.delay,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Pulsing glow effect */}
                      <motion.line
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="rgba(0, 182, 172, 0.6)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        filter="blur(3px)"
                        initial={{ 
                          pathLength: 0,
                          opacity: 0
                        }}
                        animate={{ 
                          pathLength: [0, 0.6, 0],
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          delay: 2.1 + line.delay,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: "easeInOut"
                        }}
                      />
                    </g>
                  ))}

                  {/* Enhanced data flow particles */}
                  {[
                    { path: "M 50 50 L 15 15", delay: 3, color: "#00b6ac", label: "Banks" },
                    { path: "M 50 50 L 85 15", delay: 3.3, color: "#2EC9BC", label: "Insurance" },
                    { path: "M 50 50 L 15 85", delay: 3.6, color: "#00b6ac", label: "Fintechs" },
                    { path: "M 50 50 L 85 85", delay: 3.9, color: "#2EC9BC", label: "Partners" },
                    { path: "M 50 50 L 50 5", delay: 4.2, color: "#00b6ac", label: "Regulators" },
                    { path: "M 50 50 L 50 95", delay: 4.5, color: "#2EC9BC", label: "APIs" }
                  ].map((particle, index) => (
                    <g key={`particle-group-${index}`}>
                      {/* Main particle */}
                      <motion.circle
                        r="3"
                        fill={particle.color}
                        filter="url(#glow)"
                        initial={{ offsetDistance: "0%", opacity: 0 }}
                        animate={{ 
                          offsetDistance: ["0%", "100%"],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: particle.delay,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: "easeOut"
                        }}
                        style={{
                          offsetPath: `path('${particle.path}')`
                        }}
                      />

                      {/* Particle trail */}
                      <motion.circle
                        r="1.5"
                        fill={particle.color}
                        fillOpacity="0.6"
                        initial={{ offsetDistance: "0%", opacity: 0 }}
                        animate={{ 
                          offsetDistance: ["0%", "100%"],
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: particle.delay + 0.1,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: "easeOut"
                        }}
                        style={{
                          offsetPath: `path('${particle.path}')`
                        }}
                      />
                    </g>
                  ))}

                  <defs>
                    {/* Laser gradient */}
                    <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00b6ac" stopOpacity="0" />
                      <stop offset="30%" stopColor="#00b6ac" stopOpacity="1" />
                      <stop offset="70%" stopColor="#2EC9BC" stopOpacity="1" />
                      <stop offset="100%" stopColor="#2EC9BC" stopOpacity="0" />
                    </linearGradient>

                    {/* Glow filter */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>

                    {/* Connection gradient */}
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00b6ac" />
                      <stop offset="50%" stopColor="#2EC9BC" />
                      <stop offset="100%" stopColor="#00b6ac" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating Info Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#00b6ac]/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: [-20, -10, -20],
                }}
                transition={{ 
                  opacity: { delay: 2, duration: 0.5 },
                  y: { delay: 2.5, duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <span className="text-white text-xs font-medium">50+ Instituições</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-[#2EC9BC]/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [20, 10, 20],
                }}
                transition={{ 
                  opacity: { delay: 2.5, duration: 0.5 },
                  y: { delay: 3, duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <span className="text-white text-xs font-medium">Suporte 24x7</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}