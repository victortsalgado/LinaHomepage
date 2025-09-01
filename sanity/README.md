# Lina Blog - Sanity Studio

Este é o projeto Sanity Studio configurado para gerenciar o conteúdo do blog da Lina.

## Configuração Inicial

### 1. Criar Projeto no Sanity.io

1. Acesse [sanity.io](https://www.sanity.io/) e crie uma conta
2. Crie um novo projeto
3. Anote o **Project ID** que será gerado

### 2. Configurar Variáveis de Ambiente

No Replit, adicione as seguintes variáveis no painel "Secrets":

```
SANITY_PROJECT_ID=seu_project_id_aqui
SANITY_DATASET=production
```

### 3. Atualizar Configuração

1. Edite o arquivo `sanity.config.ts`
2. Substitua `'your-project-id'` pelo seu Project ID real
3. Faça o mesmo no arquivo `lib/sanity.ts` do projeto principal

### 4. Deploy do Studio (Opcional)

Para hospedar o Sanity Studio online:

```bash
cd sanity
npx sanity deploy
```

Isso criará uma URL única onde você pode gerenciar o conteúdo.

## Schema Configurado

### Post (Artigo do Blog)

O schema `post` inclui todos os campos necessários:

- **title**: Título do artigo
- **slug**: URL única gerada automaticamente
- **mainImage**: Imagem de destaque com alt text
- **category**: DataLink, LinaPay, JSR ou Institucional
- **excerpt**: Resumo para preview
- **body**: Conteúdo rico em Rich Text
- **publishedAt**: Data de publicação
- **seoTitle**: Meta title para SEO
- **seoDescription**: Meta description para SEO

## Como Usar

### Executar o Studio Localmente

```bash
cd sanity
npm run dev
```

### Integração com o Frontend

O arquivo `lib/sanity.ts` no projeto principal já está configurado com:

- Cliente Sanity configurado
- Helper para URLs de imagem
- Tipos TypeScript para o Post
- Queries GROQ prontas para usar

### Exemplo de Uso no Frontend

```typescript
import { client, queries } from '../lib/sanity'

// Buscar todos os posts
const posts = await client.fetch(queries.allPosts)

// Buscar post específico
const post = await client.fetch(queries.postBySlug, { slug: 'meu-post' })

// Buscar posts por categoria
const dataLinkPosts = await client.fetch(queries.postsByCategory, { category: 'DataLink' })
```

## Próximos Passos

1. Criar conta no Sanity.io e obter Project ID
2. Configurar as variáveis de ambiente
3. Atualizar os arquivos de configuração com o Project ID real
4. Começar a inserir o conteúdo dos artigos migrados