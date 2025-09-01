"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Import company logos
import brasilprevLogo from "@/assets/brasilprev.png";
import safraLogo from "@/assets/safra.png";
import sicoobLogo from "@/assets/sicoob.png";
import stoneLogo from "@/assets/stone.png";
import cloudwalkLogo from "@/assets/cloudwalk.png";

export default function SocialProofSection() {
  // Client logos configuration
  const clientLogos = [
    { name: "BRASILPREV", logo: brasilprevLogo, id: "brasilprev" },
    { name: "Safra", logo: safraLogo, id: "safra" },
    { name: "Sicoob", logo: sicoobLogo, id: "sicoob" },
    { name: "Stone", logo: stoneLogo, id: "stone" },
    { name: "CloudWalk", logo: cloudwalkLogo, id: "cloudwalk" },
  ];

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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[var(--lina-light)] to-cyan-200 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-social-proof-title"
          >
            Veja o impacto do DataLink na prática
          </motion.h2>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Client Logos Grid */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 
                className="text-xl font-semibold text-gray-700 mb-8"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="heading-trusted-by"
              >
                Empresas que confiam na Lina
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={client.id}
                    variants={logoVariants}
                    className="group relative"
                    data-testid={`logo-${client.id}`}
                  >
                    <img
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-110"
                    />
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div 
              variants={itemVariants}
              className="lg:pl-8"
            >
              <div 
                className="relative bg-gradient-to-br from-white via-[var(--lina-light)] to-cyan-50 rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden"
                data-testid="card-testimonial"
              >
                {/* Background pattern */}
                <div 
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--lina-cyan)] to-transparent opacity-10 rounded-bl-full"
                />
                
                {/* Quote icon */}
                <div className="relative z-10">
                  <Quote 
                    className="w-8 h-8 text-[var(--lina-cyan)] mb-6" 
                    data-testid="icon-quote"
                  />
                  
                  {/* Testimonial text */}
                  <blockquote 
                    className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    data-testid="text-testimonial-quote"
                  >
                    "Temos uma parceria sólida com a Lina. É um parceiro estratégico para o Banco Semear, contribuindo com dados, soluções de ITP e diferenciais importantes nos nossos meios de pagamento."
                  </blockquote>
                  
                  {/* Author information */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[var(--lina-cyan)] to-teal-400 rounded-full flex items-center justify-center">
                      <span 
                        className="text-white font-bold text-lg"
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                      >
                        RM
                      </span>
                    </div>
                    <div className="text-left">
                      <p 
                        className="font-semibold text-gray-900 text-lg"
                        style={{ fontFamily: 'Lexend, sans-serif' }}
                        data-testid="text-author-name"
                      >
                        Ricardo Mendes
                      </p>
                      <p 
                        className="text-gray-600"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        data-testid="text-author-company"
                      >
                        Banco Semear
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}