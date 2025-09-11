import { ImageSection as ImageSectionType } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'

interface ImageSectionProps {
  section: ImageSectionType
}

export function ImageSection({ section }: ImageSectionProps) {
  const imageUrl = urlFor(section.image).width(1200).height(800).url()

  return (
    <section className="py-48 md:py-64 lg:py-80 px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {section.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            {section.title}
          </h2>
        )}
        
        <div className="text-center">
          <img
            src={imageUrl}
            alt={section.alt}
            className="w-full h-auto rounded-lg shadow-lg"
            data-testid="img-section"
          />
          
          {section.caption && (
            <p className="text-gray-600 mt-4 text-sm md:text-base" data-testid="text-caption">
              {section.caption}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}