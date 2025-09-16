"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LaserFlow from "@/components/LaserFlow";

export default function InfraHeroSection() {
  return (
    <section 
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--lina-dark)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-gray-900/30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-teal-500/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full min-h-[80vh]">

          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
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
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Habilite sua instituição no Open Finance & Insurance com tecnologia, performance, segurança e o suporte do melhor time de especialistas do mercado!
            </motion.p>

            {/* Highlighted Message Box */}
            <motion.div
              className="bg-gradient-to-r from-[#00b6ac]/10 to-[#2EC9BC]/5 border border-[#00b6ac]/30 rounded-2xl p-6 backdrop-blur-sm"
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
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center gap-3" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  Fale com um especialista
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Column - Subtle Laser Background */}
          <motion.div
            className="relative h-[600px] lg:h-[700px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Subtle Background Laser */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-30">
              <LaserFlow
                color="#00b6ac"
                horizontalBeamOffset={0.0}
                verticalBeamOffset={-0.3}
                fogIntensity={0.2}
                flowSpeed={0.2}
                wispIntensity={1.5}
                verticalSizing={0.8}
                horizontalSizing={3.0}
                wispDensity={0.8}
                decay={0.6}
                falloffStart={0.8}
              />
            </div>

            {/* Horizontal Accent Laser */}
            <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 opacity-60">
              <LaserFlow
                color="#2EC9BC"
                horizontalBeamOffset={0.0}
                verticalBeamOffset={0.0}
                fogIntensity={0.4}
                flowSpeed={0.3}
                wispIntensity={2.0}
                verticalSizing={0.3}
                horizontalSizing={4.0}
                wispDensity={1.0}
                decay={0.8}
                falloffStart={1.0}
              />
            </div>

            {/* Glass Effect Border */}
            <div className="absolute inset-0 rounded-3xl border border-[#00b6ac]/20 bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-sm" />
            
            {/* Corner Accents */}
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#00b6ac]/40 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#2EC9BC]/40 rounded-bl-lg"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section Indicator */}
      <div className="relative z-10 pb-8">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Lexend, sans-serif' }}>
              50+ instituições financeiras e seguradoras
            </h2>
            <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#00b6ac] to-[#2EC9BC] bg-clip-text text-transparent">
              confiam na LINA
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}