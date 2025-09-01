import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Configuração do cliente Sanity
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id', // Substitua pelo seu Project ID
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // `false` se você quiser garantir dados frescos
  apiVersion: '2024-01-01', // Use a versão atual da API
})

// Configuração do construtor de URLs de imagem
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Tipos para o schema do post
export interface Post {
  _id: string
  _type: 'post'
  title: string
  slug: {
    current: string
  }
  mainImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  category: 'DataLink' | 'LinaPay' | 'JSR' | 'Institucional'
  excerpt: string
  body: any[] // Array de blocos de conteúdo
  publishedAt: string
  seoTitle?: string
  seoDescription?: string
}

// Queries GROQ para buscar posts
export const queries = {
  // Buscar todos os posts publicados
  allPosts: `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    category,
    excerpt,
    publishedAt,
    seoTitle,
    seoDescription
  }`,

  // Buscar post por slug
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    category,
    excerpt,
    body,
    publishedAt,
    seoTitle,
    seoDescription
  }`,

  // Buscar posts por categoria
  postsByCategory: `*[_type == "post" && category == $category && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    category,
    excerpt,
    publishedAt,
    seoTitle,
    seoDescription
  }`,

  // Buscar posts recentes (últimos 3)
  recentPosts: `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    mainImage,
    category,
    excerpt,
    publishedAt
  }`
}