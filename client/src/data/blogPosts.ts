import { BlogPost } from "@/contexts/BlogSearchContext";

// Blog posts migrated from original Lina website (maintaining original URLs for SEO)
export const mockPosts: BlogPost[] = [
  {
    id: 100,
    category: "DataLink",
    title: "Pix e Open Finance: Remodelando o Mercado Financeiro",
    description: "Veja como o Pix e o Open Finance estão criando oportunidades para empresas e consumidores, tornando os serviços financeiros mais rápidos, acessíveis e eficientes.",
    date: "26 Mar 2025",
    readTime: "15 min",
    image: "/api/placeholder/600/400?text=PIX+Open+Finance+Mercado",
    alt: "PIX e Open Finance remodelando o mercado financeiro brasileiro",
    author: {
      name: "Time Lina",
      avatar: "/src/assets/mascote-astro-lina.png",
      role: "Equipe Editorial"
    }
  },
  {
    id: 101,
    category: "DataLink", 
    title: "Open Insurance: O Futuro dos Seguros no Brasil Digital",
    description: "A fase 3 do Open Insurance revoluciona o setor, com canais digitais que permitem personalização, eficiência e vantagem competitiva para seguradoras.",
    date: "25 Nov 2024",
    readTime: "12 min",
    image: "/api/placeholder/600/400?text=Open+Insurance+Brasil",
    alt: "Open Insurance transformando o futuro dos seguros no Brasil",
    author: {
      name: "Time Lina",
      avatar: "/src/assets/mascote-astro-lina.png",
      role: "Equipe Editorial"
    }
  },
  {
    id: 102,
    category: "DataLink",
    title: "Atualizações do Open Finance: Impactos e Oportunidades", 
    description: "Fique por dentro das atualizações mais recentes do Open Finance Brasil e como a evolução das APIs vai transformar o ecossistema financeiro.",
    date: "20 Fev 2024",
    readTime: "10 min",
    image: "/api/placeholder/600/400?text=Open+Finance+Updates",
    alt: "Últimas atualizações do Open Finance Brasil",
    author: {
      name: "Murilo Rabusky",
      avatar: "/api/placeholder/40/40?text=MR",
      role: "Head of Product"
    }
  },
  {
    id: 103,
    category: "DataLink",
    title: "Como o Open Finance Pode Destravar o Crédito no Brasil",
    description: "Como o Open Finance está criando novas fontes de receita e oportunidades de negócios para instituições financeiras de médio e pequeno porte.",
    date: "29 Nov 2023", 
    readTime: "14 min",
    image: "/api/placeholder/600/400?text=Open+Finance+Credit",
    alt: "Open Finance destravando o mercado de crédito brasileiro",
    author: {
      name: "Murilo Rabusky", 
      avatar: "/api/placeholder/40/40?text=MR",
      role: "Head of Product"
    }
  },
  {
    id: 104,
    category: "DataLink",
    title: "O Momento Atual do Open Finance no Brasil",
    description: "Como o Open Finance Brasil está mudando de um desafio técnico para uma oportunidade de negócios.",
    date: "16 Nov 2023",
    readTime: "11 min", 
    image: "/api/placeholder/600/400?text=Open+Finance+Atual",
    alt: "O momento atual do Open Finance no Brasil",
    author: {
      name: "Murilo Rabusky",
      avatar: "/api/placeholder/40/40?text=MR", 
      role: "Head of Product"
    }
  }
];

export const allBlogPosts = mockPosts;