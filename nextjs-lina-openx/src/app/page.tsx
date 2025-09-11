// import { client } from '@/lib/sanity'
import Link from 'next/link'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  image?: {
    asset: {
      _ref: string
    }
  }
}

// Mock data for demonstration (would come from Sanity in real implementation)
const mockPosts: Post[] = [
  {
    _id: '1',
    title: 'Introdução ao Open Finance',
    slug: { current: 'introducao-open-finance' },
    publishedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '2', 
    title: 'PIX 2.0: O Futuro dos Pagamentos',
    slug: { current: 'pix-2-0-futuro-pagamentos' },
    publishedAt: '2024-01-10T10:00:00Z'
  },
  {
    _id: '3',
    title: 'Segurança em Fintechs',
    slug: { current: 'seguranca-fintechs' },
    publishedAt: '2024-01-05T10:00:00Z'
  }
]

// async function getPosts(): Promise<Post[]> {
//   const query = `*[_type == "post"] | order(publishedAt desc) {
//     _id,
//     title,
//     slug,
//     publishedAt,
//     image
//   }`
//   
//   return await client.fetch(query)
// }

export default async function HomePage() {
  // const posts = await getPosts()
  const posts = mockPosts // Using mock data for demonstration

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Lina OpenX Blog
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link 
            key={post._id} 
            href={`/blog/${post.slug.current}`}
            className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm">
              {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
            </p>
          </Link>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            Nenhum post encontrado. Crie seu primeiro post no Sanity Studio!
          </p>
        </div>
      )}

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Sobre o Tutorial</h2>
        <p className="text-gray-700 mb-4">
          Esta é uma implementação do tutorial Sanity.io + Next.js no Replit. 
          O blog está configurado para usar:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Next.js 15 com App Router</li>
          <li>Sanity CMS (Project ID: 3guhodbf)</li>
          <li>Tailwind CSS para styling</li>
          <li>Dados mockados para demonstração</li>
        </ul>
        <p className="text-gray-600 text-sm mt-4">
          Para funcionalidade completa, instale as dependências: next-sanity, @sanity/image-url
        </p>
      </div>
    </div>
  )
}
