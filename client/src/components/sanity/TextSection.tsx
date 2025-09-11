import { TextSection as TextSectionType } from '@/lib/sanity/queries'
import DOMPurify from 'dompurify'

interface TextSectionProps {
  section: TextSectionType
}

export function TextSection({ section }: TextSectionProps) {
  const textAlignClass = {
    left: 'text-left',
    center: 'text-center', 
    right: 'text-right'
  }[section.textAlign || 'left']

  // Sanitize HTML content to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(section.content)

  return (
    <section className="py-48 md:py-64 lg:py-80 px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {section.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            {section.title}
          </h2>
        )}
        
        <div 
          className={`prose prose-lg max-w-none ${textAlignClass}`}
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          data-testid="text-content"
        />
      </div>
    </section>
  )
}