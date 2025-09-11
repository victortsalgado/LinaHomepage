// Exemplo para testar a integração Sanity
export const testPage = {
  _id: "test-page",
  title: "Página de Teste Sanity",
  slug: { current: "teste-sanity" },
  sections: [
    {
      _type: "heroSection",
      title: "Bem-vindo ao Sanity + React",
      subtitle: "Integração funcionando perfeitamente",
      ctaText: "Saiba Mais"
    },
    {
      _type: "textSection", 
      title: "Conteúdo Dinâmico",
      content: "<p>Este conteúdo vem diretamente do Sanity CMS e pode ser editado pelo painel administrativo.</p>",
      textAlign: "center"
    }
  ]
}