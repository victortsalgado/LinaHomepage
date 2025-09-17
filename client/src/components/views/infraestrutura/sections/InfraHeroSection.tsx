"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Shield, Smartphone, Users, BarChart3, Code } from "lucide-react";

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
            <div className="relative bg-gradient-to-br from-white/5 via-white/2 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-white/10">

              {/* Network Diagram */}
              <div className="relative h-96 w-full">
                {/* Central Node - LINA with Logo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  {/* Main circle with pulsing animation */}
                  <motion.div 
                    className="relative w-24 h-24 bg-gradient-to-br from-[#00b6ac] to-[#2EC9BC] rounded-full flex items-center justify-center shadow-2xl shadow-[#00b6ac]/50 border-4 border-white/20"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0, 182, 172, 0.5)",
                        "0 0 40px rgba(0, 182, 172, 0.8)",
                        "0 0 20px rgba(0, 182, 172, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Logo container - you can replace this with your logo */}
                    <div className="w-12 h-12 flex items-center justify-center">
                      {/* Placeholder for logo - replace with your logo */}
                      <img 
                        src="/logo-lina.png" 
                        alt="LINA Logo" 
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          // Fallback to text if logo doesn't load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <span 
                        className="text-white font-bold text-sm hidden" 
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                      >
                        LINA
                      </span>
                    </div>
                  </motion.div>

                  {/* Animated rings around the center */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-[#00b6ac]/30 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 border-2 border-[#2EC9BC]/20 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5
                    }}
                  />
                </div>

                {/* Satellite Nodes with improved positioning */}
                {/* Banks - Superior Esquerdo */}
                <div className="absolute z-10" style={{ top: '60px', left: '60px' }}>
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-gray-700/80 to-gray-800/90 rounded-full border-2 border-[#00b6ac]/40 flex items-center justify-center shadow-xl backdrop-blur-sm"
                    animate={{
                      scale: [1, 1.05, 1],
                      borderColor: ['rgba(0, 182, 172, 0.4)', 'rgba(0, 182, 172, 0.8)', 'rgba(0, 182, 172, 0.4)']
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0
                    }}
                  >
                    <Building2 className="w-6 h-6 text-[#00b6ac]" />
                  </motion.div>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 font-medium whitespace-nowrap">
                    Banks
                  </div>
                </div>

                {/* Insurance - Superior Direito */}
                <div className="absolute z-10" style={{ top: '60px', right: '60px' }}>
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-gray-700/80 to-gray-800/90 rounded-full border-2 border-[#00b6ac]/40 flex items-center justify-center shadow-xl backdrop-blur-sm"
                    animate={{
                      scale: [1, 1.05, 1],
                      borderColor: ['rgba(0, 182, 172, 0.4)', 'rgba(0, 182, 172, 0.8)', 'rgba(0, 182, 172, 0.4)']
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4
                    }}
                  >
                    <Shield className="w-6 h-6 text-[#00b6ac]" />
                  </motion.div>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 font-medium whitespace-nowrap">
                    Insurance
                  </div>
                </div>

                {/* Fintechs - Inferior Esquerdo */}
                <div className="absolute z-10" style={{ bottom: '60px', left: '60px' }}>
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-gray-700/80 to-gray-800/90 rounded-full border-2 border-[#00b6ac]/40 flex items-center justify-center shadow-xl backdrop-blur-sm"
                    animate={{
                      scale: [1, 1.05, 1],
                      borderColor: ['rgba(0, 182, 172, 0.4)', 'rgba(0, 182, 172, 0.8)', 'rgba(0, 182, 172, 0.4)']
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                  >
                    <Smartphone className="w-6 h-6 text-[#00b6ac]" />
                  </motion.div>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 font-medium whitespace-nowrap">
                    Fintechs
                  </div>
                </div>

                {/* Partners - Inferior Direito */}
                <div className="absolute z-10" style={{ bottom: '60px', right: '60px' }}>
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-gray-700/80 to-gray-800/90 rounded-full border-2 border-[#00b6ac]/40 flex items-center justify-center shadow-xl backdrop-blur-sm"
                    animate={{
                      scale: [1, 1.05, 1],
                      borderColor: ['rgba(0, 182, 172, 0.4)', 'rgba(0, 182, 172, 0.8)', 'rgba(0, 182, 172, 0.4)']
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2
                    }}
                  >
                    <Users className="w-6 h-6 text-[#00b6ac]" />
                  </motion.div>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 font-medium whitespace-nowrap">
                    Partners
                  </div>
                </div>

                {/* Regulators - Superior Centro - POSIÇÃO AJUSTADA */}
                <div className="absolute z-10" style={{ top: '-20px', left: '50%', transform: 'translateX(-50%)' }}>
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-gray-700/80 to-gray-800/90 rounded-full border-2 border-[#00b6ac]/40 flex items-center justify-center shadow-xl backdrop-blur-sm"
                    animate={{
                      scale: [1, 1.05, 1],
                      borderColor: ['rgba(0, 182, 172, 0.4)', 'rgba(0, 182, 172, 0.8)', 'rgba(0, 182, 172, 0.4)']
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.6
                    }}
                  >
                    <BarChart3 className="w-6 h-6 text-[#00b6ac]" />
                  </motion.div>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 font-medium whitespace-nowrap">
                    Regulators
                  </div>
                </div>

                {/* APIs - Inferior Centro - POSIÇÃO AJUSTADA */}
                <div className="absolute z-10" style={{ bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-gray-700/80 to-gray-800/90 rounded-full border-2 border-[#00b6ac]/40 flex items-center justify-center shadow-xl backdrop-blur-sm"
                    animate={{
                      scale: [1, 1.05, 1],
                      borderColor: ['rgba(0, 182, 172, 0.4)', 'rgba(0, 182, 172, 0.8)', 'rgba(0, 182, 172, 0.4)']
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    <Code className="w-6 h-6 text-[#00b6ac]" />
                  </motion.div>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 font-medium whitespace-nowrap">
                    APIs
                  </div>
                </div>

                {/* Enhanced Connection Lines with Elegant Flow - COORDENADAS AJUSTADAS */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} viewBox="0 0 100 100" preserveAspectRatio="none">
                  {[
                    { x1: 50, y1: 50, x2: 18.75, y2: 18.75, delay: 0 },
                    { x1: 50, y1: 50, x2: 81.25, y2: 18.75, delay: 0.3 },
                    { x1: 50, y1: 50, x2: 18.75, y2: 81.25, delay: 0.6 },
                    { x1: 50, y1: 50, x2: 81.25, y2: 81.25, delay: 0.9 },
                    { x1: 50, y1: 50, x2: 50, y2: -2.5, delay: 1.2 }, // Regulators - linha mais longa
                    { x1: 50, y1: 50, x2: 50, y2: 93.75, delay: 1.5 } // APIs - linha mais longa
                  ].map((line, index) => (
                    <g key={index}>
                      {/* Base connection line */}
                      <line
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="rgba(0, 182, 172, 0.15)"
                        strokeWidth="0.4"
                        vectorEffect="non-scaling-stroke"
                      />

                      {/* Elegant pulsing connection */}
                      <motion.line
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="url(#pulseGradient)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        initial={{ 
                          pathLength: 0,
                          opacity: 0
                        }}
                        animate={{ 
                          pathLength: [0, 1, 0.8, 0],
                          opacity: [0, 0.8, 1, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          delay: 1 + line.delay,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Smooth data flow particles */}
                      <motion.circle
                        r="2"
                        fill="url(#particleGradient)"
                        filter="url(#softGlow)"
                        initial={{ 
                          x: line.x1,
                          y: line.y1,
                          opacity: 0
                        }}
                        animate={{ 
                          x: [line.x1, line.x2],
                          y: [line.y1, line.y2],
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          delay: 2 + line.delay,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeOut"
                        }}
                      />
                    </g>
                  ))}

                  <defs>
                    {/* Pulse gradient for elegant connection lines */}
                    <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00b6ac" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#2EC9BC" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00b6ac" stopOpacity="0.3" />
                    </linearGradient>

                    {/* Particle gradient */}
                    <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2EC9BC" stopOpacity="1" />
                      <stop offset="70%" stopColor="#00b6ac" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00b6ac" stopOpacity="0" />
                    </radialGradient>

                    {/* Soft glow filter */}
                    <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}