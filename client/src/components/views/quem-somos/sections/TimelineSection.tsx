"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function TimelineSection() {
  const { ref, isVisible } = useScrollReveal();

  // Animation variants for timeline items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const leftItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -80,
      y: 30 
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

  const rightItemVariants = {
    hidden: { 
      opacity: 0, 
      x: 80,
      y: 30 
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

  const lineVariants = {
    hidden: { 
      scaleY: 0,
      opacity: 0 
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const timelineData = [
    {
      year: "2021",
      title: "Fundação da Lina",
      description: "Nasce a Lina, com a missão de simplificar a complexidade do Open Finance no Brasil, atuando como a ponte que conecta empresas a um universo de novas oportunidades.",
      side: "left",
    },
    {
      year: "2022",
      title: "Pioneirismo e Certificação",
      description: "Lançamento da plataforma DataLink e certificação como um dos primeiros players na Fase 1 do Open Finance, estabelecendo um novo padrão de mercado.",
      side: "right",
    },
    {
      year: "2023",
      title: "Inovação em Pagamentos",
      description: "Expansão do portfólio com o lançamento do LinaPay, revolucionando os pagamentos digitais com a introdução do PIX por biometria.",
      side: "left",
    },
    {
      year: "2024",
      title: "Reconhecimento de Mercado",
      description: "Nomeada como LinkedIn Top Startup, consolidando nossa posição como uma das empresas mais inovadoras e promissoras do cenário tecnológico.",
      side: "right",
    },
    {
      year: "2025",
      title: "Parceria Estratégica Global",
      description: "Anunciada parceria estratégica com a Mastercard para acelerar a adoção de pagamentos sem fricção através da tecnologia JSR.",
      side: "left",
    },
  ];

  return (
    <section 
      ref={ref}
      className="py-48 md:py-64 lg:py-80 bg-gray-50"
      data-testid="section-timeline"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Section Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-testid="heading-timeline-title"
          >
            Nossa História
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[var(--lina-cyan)] to-gray-300 origin-top"
            style={{ height: '100%' }}
            data-testid="timeline-central-line"
          />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-16 lg:space-y-20"
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                variants={item.side === "left" ? leftItemVariants : rightItemVariants}
                className={`relative flex items-center ${
                  item.side === "left" 
                    ? "lg:justify-start lg:pr-1/2" 
                    : "lg:justify-end lg:pl-1/2"
                }`}
                data-testid={`timeline-item-${item.year}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[var(--lina-cyan)] rounded-full z-10" />

                {/* Content Card */}
                <div 
                  className={`w-full lg:w-5/12 ${
                    item.side === "left" 
                      ? "lg:mr-auto lg:pr-12" 
                      : "lg:ml-auto lg:pl-12"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    {/* Year Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-[var(--lina-cyan)] text-white rounded-full text-sm font-bold mb-4">
                      {item.year}
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: 'Lexend, sans-serif' }}
                      data-testid={`heading-timeline-${item.year}`}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-lg leading-relaxed text-gray-600"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      data-testid={`text-timeline-${item.year}-description`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}