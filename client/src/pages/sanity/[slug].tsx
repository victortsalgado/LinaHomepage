import { useEffect, useState } from 'react'
import { useParams } from 'wouter'
import { getPageBySlug, SanityPage } from '@/lib/sanity/queries'
import { PageRenderer } from '@/components/sanity/PageRenderer'
import NotFound from '@/pages/not-found'

export default function SanityPage() {
  const { slug } = useParams<{ slug: string }>()
  const [page, setPage] = useState<SanityPage | null | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    const fetchPage = async () => {
      setLoading(true)
      try {
        const fetchedPage = await getPageBySlug(slug)
        setPage(fetchedPage)
      } catch (error) {
        console.error('Error fetching Sanity page:', error)
        setPage(null)
      } finally {
        setLoading(false)
      }
    }

    fetchPage()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando página...</p>
        </div>
      </div>
    )
  }

  if (!page) {
    return <NotFound />
  }

  return <PageRenderer page={page} />
}