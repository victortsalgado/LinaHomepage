"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Landmark, Library, ShoppingCart, Wallet } from "lucide-react";
import FeatureImagePath from "@assets/Imagens_site_novo_lina-15_1757691073660.png";

// Features data matching the segments
const featuresData = [
  {
    id: 1,
    icon: Users,
    title: "Empresas de assessoria financeira e patrimonial",
    description:
      "Tenha uma visão unificada das finanças dos clientes com dados integrados de contas, cartões, crédito e investimentos.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Plataformas de investimento",
    description:
      "Ofereça carteiras consolidadas e recomendações personalizadas conectando contas de investimento e bancárias em mais de 50 instituições.",
  },
  {
    id: 3,
    icon: Landmark,
    title: "Plataformas e marketplaces de crédito",
    description:
      "Automatize a análise de crédito e comprovação de renda com acesso direto a extratos bancários via API.",
  },
  {
    id: 4,
    icon: Library,
    title: "Plataformas de contabilidade online",
    description:
      "Concilie e categorize transações automaticamente com dados bancários atualizados e padronizados.",
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: "E-commerces e marketplaces",
    description:
      "Melhore a experiência de checkout e reduza o abandono de carrinho com pagamentos instantâneos.",
  },
  {
    id: 6,
    icon: Wallet,
    title: "Carteiras digitais",
    description:
      "Ofereça pagamentos por aproximação e uma experiência de pagamento superior aos seus usuários.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="py-48 md:py-64 lg:py-80"
      style={{ backgroundColor: "var(--lina-dark)" }}
      data-testid="section-features"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-[92rem]">
        {/* Top Section with Title */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Box - Title */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 ml-[-1px] mr-[-1px]">
              <h2
                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "Lexend, sans-serif" }}
                data-testid="heading-features-title"
              >
                Pensado para diferentes{" "}
                <span className="bg-gradient-to-r from-[#00b6ac] to-[#2EC9BC] bg-clip-text text-transparent">
                  tipos de negócio
                </span>
              </h2>
              <div className="flex items-center gap-3 text-gray-300">
                <p
                  className="text-lg"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  data-testid="text-features-subtitle"
                >
                  Veja como aplicamos no seu setor
                </p>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right - Just the image without any box */}
            <div className="relative">
              <img
                src={FeatureImagePath}
                alt="Profissional sorrindo segurando tablet"
                className="w-full h-auto rounded-3xl object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {featuresData.map((feature, index) => {
              const IconComponent = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#00b6ac]/30 transition-all duration-300"
                  data-testid={`feature-card-${index + 1}`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00b6ac] to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <IconComponent
                        className="w-8 h-8 text-white"
                        data-testid={`icon-feature-${index + 1}`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold text-white mb-3 leading-tight"
                      style={{ fontFamily: "Lexend, sans-serif" }}
                      data-testid={`title-feature-${index + 1}`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      data-testid={`description-feature-${index + 1}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}