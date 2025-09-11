import { SanityPage, SanitySection } from '@/lib/sanity/queries'
import { HeroSection } from './HeroSection'
import { TextSection } from './TextSection'
import { ImageSection } from './ImageSection'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

interface PageRendererProps {
  page: SanityPage
}

export function PageRenderer({ page }: PageRendererProps) {
  const renderSection = (section: SanitySection, index: number) => {
    switch (section._type) {
      case 'heroSection':
        return <HeroSection key={index} section={section} />
      case 'textSection':
        return <TextSection key={index} section={section} />
      case 'imageSection':
        return <ImageSection key={index} section={section} />
      default:
        console.warn(`Unknown section type: ${(section as any)._type}`)
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main data-testid="main-content">
        {page.sections?.map(renderSection)}
      </main>
      <Footer />
    </div>
  )
}