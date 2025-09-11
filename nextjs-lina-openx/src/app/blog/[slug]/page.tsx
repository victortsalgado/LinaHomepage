// import { client } from '@/lib/sanity'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  body: any[]
  image?: {
    asset: {
      _ref: string
    }
  }
}

interface Params {
  slug: string
}

// Mock data for demonstration
const mockPosts: { [key: string]: Post } = {
  'introducao-open-finance': {
    _id: '1',
    title: 'Introdução ao Open Finance',
    slug: { current: 'introducao-open-finance' },
    publishedAt: '2024-01-15T10:00:00Z',
    body: []
  },
  'pix-2-0-futuro-pagamentos': {
    _id: '2',
    title: 'PIX 2.0: O Futuro dos Pagamentos',
    slug: { current: 'pix-2-0-futuro-pagamentos' },
    publishedAt: '2024-01-10T10:00:00Z',
    body: []
  },
  'seguranca-fintechs': {
    _id: '3',
    title: 'Segurança em Fintechs',
    slug: { current: 'seguranca-fintechs' },
    publishedAt: '2024-01-05T10:00:00Z',
    body: []
  }
}

// async function getPost(slug: string): Promise<Post | null> {
//   const query = `*[_type == "post" && slug.current == $slug][0] {
//     _id,
//     title,
//     slug,
//     publishedAt,
//     image,
//     body
//   }`
//   
//   return await client.fetch(query, { slug })
// }

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  // const post = await getPost(slug)
  const post = mockPosts[slug] // Using mock data for demonstration
  
  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        ← Voltar para o blog
      </Link>
      
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time 
          dateTime={post.publishedAt}
          className="text-gray-600 text-lg"
        >
          {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </header>

      <div className="prose prose-lg max-w-none">
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conteúdo do Post</h2>
          <p className="text-gray-700 mb-4">
            Este é um exemplo de página de blog post dinâmica criada seguindo o tutorial Sanity.io + Next.js.
          </p>
          <p className="text-gray-700 mb-4">
            Em uma implementação completa, o conteúdo seria carregado do Sanity CMS usando:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>GROQ queries para buscar o post pelo slug</li>
            <li>Portable Text para renderizar o conteúdo rico</li>
            <li>Sanity Image URL para otimizar imagens</li>
            <li>Revalidation para cache eficiente</li>
          </ul>
          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <p className="text-sm text-gray-600">
              <strong>Slug atual:</strong> {slug}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Post ID:</strong> {post._id}
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">💡 Próximos Passos</h3>
          <p className="text-gray-700 mb-3">
            Para completar a integração com Sanity:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Instalar dependências: <code className="bg-white px-2 py-1 rounded">next-sanity @sanity/image-url</code></li>
            <li>Configurar cliente Sanity em <code className="bg-white px-2 py-1 rounded">src/lib/sanity.ts</code></li>
            <li>Descomentar queries GROQ reais</li>
            <li>Adicionar componentes para Portable Text</li>
            <li>Configurar revalidação ISR</li>
          </ol>
        </div>
      </div>
    </article>
  )
}