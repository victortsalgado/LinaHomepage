"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LaserFlow from "@/components/LaserFlow";

export default function InfraHeroSection() {
  return (
    <section 
      className="relative min-h-screen flex flex-col overflow-visible"
      style={{ backgroundColor: 'var(--lina-dark)' }}
    >
      {/* Background Dashboard Image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 768"><rect fill="%23f8f9fa" width="1024" height="768"/><rect fill="%23e9ecef" x="0" y="0" width="200" height="768"/><rect fill="%23ffffff" x="220" y="80" width="784" height="120"/><rect fill="%23ffffff" x="220" y="220" width="380" height="300"/><rect fill="%23ffffff" x="620" y="220" width="384" height="300"/><rect fill="%2300b6ac" x="240" y="240" width="60" height="80"/><rect fill="%2300b6ac" x="320" y="260" width="60" height="60"/><rect fill="%2300b6ac" x="400" y="280" width="60" height="40"/></svg>')`
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-gray-900/50" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-teal-500/20 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Vertical Laser Effect - Positioned Right, Extending Beyond Section */}
      <div 
        className="fixed right-8 lg:right-16 z-20 pointer-events-none"
        style={{
          top: '80px', // Start from header height
          bottom: '0px', // Extend to bottom
          width: '200px',
        }}
      >
        <div className="relative w-full h-full">
          {/* Main Vertical Laser */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          >
            <LaserFlow
              color="#00b6ac"
              horizontalBeamOffset={0.0}
              verticalBeamOffset={0.0}
              fogIntensity={0.8}
              flowSpeed={0.4}
              wispIntensity={6.0}
              verticalSizing={4.0}
              horizontalSizing={0.6}
              wispDensity={1.8}
              decay={1.5}
              falloffStart={2.0}
              mouseTiltStrength={0.02}
            />
          </motion.div>

          {/* Fog Enhancement on Hover */}
          <motion.div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
            whileHover={{ opacity: 1 }}
          >
            <LaserFlow
              color="#2EC9BC"
              horizontalBeamOffset={0.0}
              verticalBeamOffset={0.0}
              fogIntensity={0.4}
              flowSpeed={0.6}
              wispIntensity={3.0}
              verticalSizing={3.0}
              horizontalSizing={0.8}
              wispDensity={1.2}
              decay={1.0}
              falloffStart={1.5}
              mouseTiltStrength={0.03}
            />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10 flex-1 flex items-center">
        <div className="w-full lg:w-2/3 min-h-[80vh] flex items-center">

          {/* Content Area - Left Side */}
          <div className="text-center lg:text-left space-y-8 w-full">
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