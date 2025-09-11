# 🚀 Lina OpenX - Tutorial Sanity.io + Next.js

Este projeto demonstra a integração entre **Sanity CMS** e **Next.js** seguindo o tutorial oficial, implementado no ambiente **Replit**.

## 🛠️ Stack Tecnológica

- **Next.js 15** com App Router e Turbopack
- **TypeScript** para type safety
- **Tailwind CSS** para styling responsivo
- **Sanity CMS** para gerenciamento de conteúdo
- **Replit** como ambiente de desenvolvimento em nuvem

## ⚙️ Configuração do Sanity

- **Project ID:** `3guhodbf`
- **Dataset:** `production` 
- **API Version:** `2024-01-01`
- **Schema:** `postType` (posts de blog)

## 🏃‍♂️ Como Executar

### Desenvolvimento Local
```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev
```

### Para Integração Completa com Sanity
```bash
# Instalar dependências do Sanity
npm install next-sanity @sanity/image-url sanity@^4.8.1

# Instalar Portable Text (opcional)
npm install @portabletext/react
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── blog/[slug]/
│   │   └── page.tsx      # Página dinâmica para posts
│   ├── page.tsx          # Homepage com listagem
│   └── layout.tsx        # Layout base
└── lib/
    └── sanity.ts         # Cliente Sanity configurado
```

## ✨ Funcionalidades Implementadas

### ✅ Concluídas
- [x] Setup inicial Next.js + TypeScript + Tailwind
- [x] Configuração do cliente Sanity 
- [x] Schema de posts configurado
- [x] Homepage com grid de posts
- [x] Roteamento dinâmico para posts individuais
- [x] Layout responsivo e acessível
- [x] Mock data para demonstração

### 🔄 Próximos Passos
1. **Instalar dependências Sanity** (next-sanity, @sanity/image-url)
2. **Descomentar queries GROQ** nos arquivos de página
3. **Adicionar Portable Text** para conteúdo rico
4. **Configurar ISR** para performance otimizada
5. **Implementar webhooks** para revalidação automática

## 🎯 Demo Atual

A aplicação usa **dados mockados** para demonstrar:
- ✅ Listagem de 3 posts na homepage
- ✅ Navegação para páginas individuais via slug
- ✅ Roteamento dinâmico funcionando
- ✅ Design responsivo com Tailwind
- ✅ TypeScript com tipagem completa

## 🔗 Exemplo de Integração Real

Para ativar conexão com Sanity CMS:

1. **Instale as dependências:**
   ```bash
   npm install next-sanity @sanity/image-url sanity@^4.8.1
   ```

2. **Descomente as queries GROQ:**
   ```typescript
   // Em src/app/page.tsx
   const posts = await client.fetch(`*[_type == "post"]`)
   
   // Em src/app/blog/[slug]/page.tsx  
   const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`)
   ```

3. **Crie conteúdo no Sanity Studio** (Project: 3guhodbf)

## 📚 Recursos

- [Next.js App Router](https://nextjs.org/docs/app)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**💡 Este projeto demonstra um blog funcional pronto para integração completa com Sanity CMS!**
