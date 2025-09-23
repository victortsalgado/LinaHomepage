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
    text: "Temos uma parceria de sucesso com a Lina. É um parceiro importante para o Banco Semear e nos apoia com compartilhamento de dados e também com geração de ITP, que é um diferencial para nossos produtos de meio de pagamento. O Semear acredita na Open Finance e a Lina é o nosso parceiro de confiança, sempre disponível a entender nossas necessidades e customizar soluções, sabem do fato e significado da palavra parceria.",
    author: "Ricardo Mendes",
    role: "Diretor de Tecnologia, Banco Semear",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    initials: "RM"
  };

  // Team avatars for circles above button
  const teamAvatars = [
    { id: 1, src: "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=100&h=100&fit=crop&crop=face", alt: "Team member 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1541535881962-3bb380b08458?w=100&h=100&fit=crop&crop=face", alt: "Team member 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face", alt: "Team member 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=100&h=100&fit=crop&crop=face", alt: "Team member 4" }
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
                    <div
                      key={avatar.id}
                      className={`w-12 h-12 rounded-lg overflow-hidden border-2 border-white shadow-md ${index > 0 ? '-ml-3' : ''}`}
                      data-testid={`avatar-team-${avatar.id}`}
                    >
                      <img
                        src={avatar.src}
                        alt={avatar.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
                <div className="bg-gradient-to-br from-[#2d5a57] to-[#1a3d3a] rounded-2xl p-8 text-white relative">
                  {/* Quote Icon - Custom image positioned overlapping the box - half inside/half outside */}
                  <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <img 
                      src="/attached_assets/Depoimentos-Site-Lina_Aspas_1758631100702.png" 
                      alt="Quote icon"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <blockquote 
                      className="text-lg leading-relaxed mb-6"
                      data-testid="text-testimonial-quote"
                    >
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/20">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                          data-testid="img-testimonial-avatar"
                        />
                      </div>
                      <div>
                        <p 
                          className="font-bold text-white"
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