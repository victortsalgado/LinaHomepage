import { BlogPost } from "@/contexts/BlogSearchContext";

// Complete blog posts database for search functionality
export const allBlogPosts: BlogPost[] = [
  {
    id: 0,
    category: "Institucional",
    title: "Inovação em Movimento: Como o PIX e o Open Finance Estão Remodelando o Mercado Financeiro",
    description: "Entenda como a sinergia entre PIX e Open Finance está criando novas soluções de pagamento, reduzindo custos e transformando a experiência do cliente. Saiba mais.",
    date: "20 Jan 2025",
    readTime: "12 min",
    image: "/api/placeholder/600/400?text=PIX+Open+Finance+Revolution",
    alt: "PIX e Open Finance transformando o mercado financeiro",
    author: {
      name: "Time Lina",
      avatar: "/src/assets/mascote-astro-lina.png",
      role: "Equipe Editorial"
    }
  },
  {
    id: 13,
    category: "DataLink",
    title: "Open Insurance: O Futuro do Mercado Brasileiro de Seguros Digitalizado e Personalizado",
    description: "Explore como o Open Insurance está personalizando produtos e digitalizando o mercado de seguros no Brasil. Prepare sua empresa para o futuro.",
    date: "22 Jan 2025",
    readTime: "10 min",
    image: "/api/placeholder/600/400?text=Open+Insurance+Brazil",
    alt: "Open Insurance transformando o mercado de seguros no Brasil",
    author: {
      name: "Time Lina",
      avatar: "/src/assets/mascote-astro-lina.png",
      role: "Equipe Editorial"
    }
  },
  {
    id: 14,
    category: "Institucional",
    title: "O Impacto das Últimas Atualizações do Open Finance",
    description: "Análise completa sobre as últimas atualizações do Open Finance no Brasil e o que elas significam para bancos, fintechs e instituições de pagamento.",
    date: "25 Jan 2025",
    readTime: "8 min",
    image: "/api/placeholder/600/400?text=Open+Finance+Updates",
    alt: "Últimas atualizações do Open Finance no Brasil",
    author: {
      name: "Time Lina",
      avatar: "/src/assets/mascote-astro-lina.png",
      role: "Equipe Editorial"
    }
  },
  {
    id: 1,
    category: "LinaPay",
    title: "Pix Automático: como funciona e por que adotar na sua empresa",
    description: "Descubra como o PIX Automático está revolucionando pagamentos recorrentes e trazendo benefícios para empresas e consumidores. Uma análise completa sobre implementação, vantagens e casos de uso práticos.",
    date: "15 Jan 2025",
    readTime: "8 min",
    image: "/api/placeholder/600/400?text=PIX+Automatico",
    alt: "PIX Automático visualization",
    author: {
      name: "Carolina Ribeiro",
      avatar: "/api/placeholder/40/40?text=CR",
      role: "Product Manager"
    }
  },
  {
    id: 2,
    category: "DataLink",
    title: "O impacto do Open Finance na análise de crédito",
    description: "Entenda como o compartilhamento de dados está revolucionando a forma como as instituições avaliam o risco de crédito. Explore casos reais e benefícios para consumidores e empresas.",
    date: "12 Jan 2025",
    readTime: "6 min",
    image: "/api/placeholder/600/400?text=Open+Finance+Credit",
    alt: "Open Finance credit analysis",
    author: {
      name: "Roberto Silva",
      avatar: "/api/placeholder/40/40?text=RS",
      role: "Tech Lead"
    }
  },
  {
    id: 3,
    category: "JSR",
    title: "Por que a JSR é a evolução dos pagamentos digitais?",
    description: "Explore como a JavaScript Registry está transformando a infraestrutura de pagamentos no Brasil e preparando o futuro. Uma visão técnica e estratégica sobre a nova era dos pagamentos.",
    date: "10 Jan 2025",
    readTime: "10 min",
    image: "/api/placeholder/600/400?text=JSR+Evolution",
    alt: "JSR payment evolution",
    author: {
      name: "Marina Costa",
      avatar: "/api/placeholder/40/40?text=MC",
      role: "CTO"
    }
  },
  {
    id: 4,
    category: "Institucional",
    title: "Lina anuncia parceria estratégica com Mastercard",
    description: "Nova parceria acelera a adoção de pagamentos sem fricção através da tecnologia JSR, marcando um novo capítulo na história da empresa.",
    date: "08 Jan 2025",
    readTime: "5 min",
    image: "/api/placeholder/600/400?text=Lina+Mastercard",
    alt: "Lina Mastercard partnership",
    author: {
      name: "André Martins",
      avatar: "/api/placeholder/40/40?text=AM",
      role: "CEO"
    }
  },
  {
    id: 5,
    category: "DataLink",
    title: "Como o Open Finance está democratizando o acesso ao crédito",
    description: "Análise profunda sobre como a tecnologia está quebrando barreiras e criando novas oportunidades de inclusão financeira no Brasil.",
    date: "05 Jan 2025",
    readTime: "7 min",
    image: "/api/placeholder/600/400?text=Credit+Democratization",
    alt: "Credit democratization through Open Finance",
    author: {
      name: "Juliana Santos",
      avatar: "/api/placeholder/40/40?text=JS",
      role: "Data Scientist"
    }
  },
  {
    id: 6,
    category: "LinaPay",
    title: "Biometria no PIX: segurança e conveniência em uma só solução",
    description: "Conheça como a autenticação biométrica está elevando o nível de segurança dos pagamentos digitais no Brasil.",
    date: "03 Jan 2025",
    readTime: "6 min",
    image: "/api/placeholder/400/300?text=PIX+Biometry",
    alt: "PIX biometric authentication"
  },
  {
    id: 7,
    category: "JSR",
    title: "A obrigatoriedade da JSR em 2026: prepare-se agora",
    description: "Entenda os prazos, requisitos e como sua instituição pode se antecipar à regulamentação para obter vantagem competitiva.",
    date: "28 Dez 2024",
    readTime: "9 min",
    image: "/api/placeholder/400/300?text=JSR+2026+Mandatory",
    alt: "JSR 2026 mandatory implementation"
  },
  {
    id: 8,
    category: "Institucional",
    title: "Lina é nomeada LinkedIn Top Startup de 2024",
    description: "Reconhecimento consolida posição da empresa como uma das mais inovadoras do cenário tecnológico brasileiro.",
    date: "25 Dez 2024",
    readTime: "4 min",
    image: "/api/placeholder/400/300?text=LinkedIn+Top+Startup",
    alt: "LinkedIn Top Startup award"
  },
  {
    id: 9,
    category: "DataLink",
    title: "Integração de dados bancários: melhores práticas de segurança",
    description: "Guia completo sobre como implementar integrações seguras respeitando as diretrizes do Banco Central.",
    date: "22 Dez 2024",
    readTime: "11 min",
    image: "/api/placeholder/400/300?text=Banking+Data+Security",
    alt: "Banking data integration security"
  },
  {
    id: 10,
    category: "LinaPay",
    title: "O futuro dos pagamentos recorrentes no e-commerce brasileiro",
    description: "Análise das tendências que estão moldando a forma como consumidores pagam por assinaturas e serviços online.",
    date: "20 Dez 2024",
    readTime: "8 min",
    image: "/api/placeholder/400/300?text=Recurring+Payments",
    alt: "Recurring payments in e-commerce"
  },
  {
    id: 11,
    category: "JSR",
    title: "Infraestrutura JSR: construindo a base dos pagamentos do futuro",
    description: "Visão técnica sobre a arquitetura necessária para implementar soluções JSR robustas e escaláveis.",
    date: "18 Dez 2024",
    readTime: "12 min",
    image: "/api/placeholder/400/300?text=JSR+Infrastructure",
    alt: "JSR technical infrastructure"
  },
  {
    id: 12,
    category: "Institucional",
    title: "Como a Lina está construindo pontes no Open Finance",
    description: "Conheça a missão da empresa de simplificar a complexidade e conectar empresas a novas oportunidades.",
    date: "15 Dez 2024",
    readTime: "6 min",
    image: "/api/placeholder/400/300?text=Lina+Bridges+Finance",
    alt: "Lina building bridges in Open Finance"
  }
];