"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import company logos
import brasilprevLogo from "@/assets/brasilprev.png";
import safraLogo from "@/assets/safra.png";
import sicoobLogo from "@/assets/sicoob.png";
import stoneLogo from "@/assets/stone.png";
import cloudwalkLogo from "@/assets/cloudwalk.png";

// Import quote image
import quoteIcon from "@assets/Depoimentos-Site-Lina_Aspas_1758631100702.png";

// Import testimonial avatar
import leonardoAvatar from "@assets/Depoimentos-Site-Lina_Leonardo Rainho_1758631704116.png";

// Import team avatars
import gustavoAvatar from "@assets/Depoimentos-Site-Lina_Gustavo Peres_1758631830437.png";
import marceloTangioniAvatar from "@assets/Depoimentos-Site-Lina_Marcelo Tangioni_1758631830439.png";
import marcioCastroAvatar from "@assets/Depoimentos-Site-Lina_Marcio Castro_1758631830439.png";
import ricardoMendesAvatar from "@assets/Depoimentos-Site-Lina_Ricardo Mendes _1758631830440.png";

export default function SocialProofSection() {
  // Company logos for the bottom section
  const companyLogos = [
    { name: "BrasilPrev", src: brasilprevLogo },
    { name: "Safra", src: safraLogo },
    { name: "Sicoob", src: sicoobLogo },
    { name: "Stone", src: stoneLogo },
    { name: "Cloudwalk", src: cloudwalkLogo }
  ];

  // Featured testimonial
  const testimonial = {
    text: "A solução de Pix via Open Finance da Lina foi fundamental para o sucesso da jornada de investimento em previdência via WhatsApp da Brasilprev. Com ela, os clientes podem investir a partir de qualquer banco, de forma simples e segura. A Lina contribuiu diretamente para solucionar o desafio de levar a previdência para cada vez mais brasileiros.",
    author: "Leonardo Rainhos",
    role: "Gerente de Produtos da Brasilprev",
    avatar: "/attached_assets/Leonardo-Rainhos_1758631298334.png",
    companyLogo: brasilprevLogo,
    initials: "LR"
  };

  // Team avatars above button
  const teamAvatars = [
    { id: 1, src: ricardoMendesAvatar, alt: "Ricardo Mendes" },
    { id: 2, src: marceloTangioniAvatar, alt: "Marcelo Tangioni" },
    { id: 3, src: marcioCastroAvatar, alt: "Marcio Castro" },
    { id: 4, src: gustavoAvatar, alt: "Gustavo Peres" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main Box with DataLink Home Style */}
          <div className="bg-gradient-to-br from-white/80 via-teal-50/60 to-cyan-100/50 rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm min-h-[500px]">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              {/* Left Column - Content */}
              <motion.div 
                variants={itemVariants}
                className="p-16 lg:p-24"
              >
                <div className="mb-6">
                  <span 
                    className="text-sm font-medium text-[#2ec9bc] mb-2 block"
                    data-testid="text-section-label"
                  >
                    Quem usa, recomenda
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-bold text-gray-800 leading-[1.1] mb-4"
                    style={{ fontFamily: 'Lexend, sans-serif' }}
                    data-testid="heading-social-proof-title"
                  >
                    Veja o impacto do <span className="bg-gradient-to-r from-[#00857F] to-[#2EC9BC] bg-clip-text text-transparent">Data Link</span> na prática
                  </h2>
                </div>

                <p 
                  className="text-lg text-gray-700 mb-8 leading-relaxed"
                  data-testid="text-social-proof-description"
                >
                  Descubra como empresas líderes estão transformando seus negócios com nossa solução de Open Finance, otimizando processos e tomando decisões mais inteligentes.
                </p>

                {/* Team Avatars above button */}
                <div className="flex items-center mb-6">
                  {teamAvatars.map((avatar, index) => (
                    <img
                      key={avatar.id}
                      src={avatar.src}
                      alt={avatar.alt}
                      className={`w-14 h-14 object-cover ${index > 0 ? '-ml-3' : ''}`}
                      data-testid={`avatar-team-${avatar.id}`}
                    />
                  ))}
                </div>

                <Button 
                  variant="light-bg"
                  className="px-6 py-3 mb-8"
                  data-testid="button-discover-datalink"
                >
                  <span>Descubra como funciona</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

              </motion.div>

              {/* Right Column - Testimonial */}
              <motion.div 
                variants={itemVariants}
                className="p-16 lg:p-24"
              >
                <div className="bg-gradient-to-br from-[#2d5a57] to-[#1a3d3a] rounded-3xl p-10 text-white relative">
                  {/* Quote Icon - Top Right Corner */}
                  <div className="absolute top-6 right-6 z-10">
                    <img 
                      src={quoteIcon}
                      alt="Quote icon"
                      className="w-16 h-16 object-contain opacity-80"
                    />
                  </div>

                  <div className="relative z-10">
                    <blockquote 
                      className="text-xl leading-relaxed mb-12 pr-12"
                      data-testid="text-testimonial-quote"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={leonardoAvatar}
                          alt={testimonial.author}
                          className="w-16 h-16 object-cover"
                          data-testid="img-testimonial-avatar"
                        />
                        <div>
                          <p 
                            className="font-bold text-white text-lg"
                            data-testid="text-author-name"
                          >
                            {testimonial.author}
                          </p>
                          <p 
                            className="text-white/80 text-sm"
                            data-testid="text-author-role"
                          >
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* Company Logo */}
                      <div className="bg-yellow-400 px-4 py-2 rounded-lg flex items-center justify-center h-12">
                        <img
                          src={testimonial.companyLogo}
                          alt="Company logo"
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Company Logos Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
              {companyLogos.map((company) => (
                <div
                  key={company.name}
                  className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                  data-testid={`logo-${company.name.toLowerCase()}`}
                >
                  <img
                    src={company.src}
                    alt={`${company.name} logo`}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}