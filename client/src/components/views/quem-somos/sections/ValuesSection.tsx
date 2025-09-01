"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Define value icon paths as public assets
const evolucaoIcon = "/assets/evolucao.png";
const multidiversidadeIcon = "/assets/Valores_Lina_Icone_mutidiversidade_1756726422423.png";
const colaborativoIcon = "/assets/Valores_Lina_Icone_espirito_colaborativo_1756726422422.png";
const compromissoIcon = "/assets/Valores_Lina_Icone_Compromisso_1756726422421.png";
const paixaoIcon = "/assets/paixao.png";

export default function ValuesSection() {
  const { ref, isVisible } = useScrollReveal();

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      y: 20 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const closingVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const values = [
    {
      icon: evolucaoIcon,
      title: "evolução",
      description: "Criamos o futuro, impulsionados pela coragem de questionar, reinventar e evoluir.",
    },
    {
      icon: multidiversidadeIcon,
      title: "multidiversidade",
      description: "Somos movidos pela riqueza de sermos diferentes. Nossa pluralidade nos fortalece e amplia nossa visão.",
    },
    {
      icon: colaborativoIcon,
      title: "espírito colaborativo",
      description: "A união de ideias, esforço e colaboração é a chave que transforma cada desafio em uma oportunidade.",
    },
    {
      icon: compromissoIcon,
      title: "compromisso",
      description: "Atuamos com dedicação, ética e disciplina para garantir que cada ação seja realizada com excelência e contribua para o sucesso coletivo.",
    },
    {
      icon: paixaoIcon,
      title: "paixão",
      description: "A energia que nos conecta e nos inspira a sempre entregar o nosso melhor.",
    },
  ];

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-32 bg-[var(--lina-dark)]"
      data-testid="section-values"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        {/* Section Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-values-title"
          >
            Nossos Valores
          </h2>
        </motion.div>

        {/* Values List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-12 lg:space-y-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="flex items-start gap-6 lg:gap-8"
              data-testid={`item-value-${index + 1}`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img 
                  src={value.icon} 
                  alt={`Ícone ${value.title}`}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                  data-testid={`icon-value-${value.title.replace(' ', '-')}`}
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3 lg:space-y-4">
                <h3 
                  className="text-2xl lg:text-3xl font-bold text-[var(--lina-cyan)] lowercase"
                  style={{ fontFamily: 'Lexend, sans-serif' }}
                  data-testid={`heading-value-${value.title.replace(' ', '-')}`}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-lg lg:text-xl leading-relaxed text-gray-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  data-testid={`text-value-${value.title.replace(' ', '-')}-description`}
                >
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Paragraph */}
        <motion.div
          variants={closingVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-16 lg:mt-20 text-center"
        >
          <p 
            className="text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            data-testid="text-values-closing"
          >
            Na Lina, nossos valores nos inspiram a transformar o futuro com propósito. 
            Nossa essência está em evoluir continuamente, abraçando a mudança e a diversidade, 
            cocriando soluções e avançando com compromisso e paixão para abrir novos caminhos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}