import { useQuery } from '@tanstack/react-query'
import { client, queries, Post } from '../../../lib/sanity'

// Hook para buscar todos os posts
export function usePosts() {
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => client.fetch(queries.allPosts),
  })
}

// Hook para buscar post por slug
export function usePost(slug: string) {
  return useQuery<Post>({
    queryKey: ['post', slug],
    queryFn: () => client.fetch(queries.postBySlug, { slug }),
    enabled: !!slug,
  })
}

// Hook para buscar posts por categoria
export function usePostsByCategory(category: string) {
  return useQuery<Post[]>({
    queryKey: ['posts', 'category', category],
    queryFn: () => client.fetch(queries.postsByCategory, { category }),
    enabled: !!category,
  })
}

// Hook para buscar posts recentes
export function useRecentPosts() {
  return useQuery<Post[]>({
    queryKey: ['posts', 'recent'],
    queryFn: () => client.fetch(queries.recentPosts),
  })
}