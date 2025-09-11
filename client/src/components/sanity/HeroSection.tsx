import { HeroSection as HeroSectionType } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  section: HeroSectionType
}

export function HeroSection({ section }: HeroSectionProps) {
  const backgroundImageUrl = section.backgroundImage 
    ? urlFor(section.backgroundImage).width(1920).height(1080).url()
    : null

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-100"
      style={backgroundImageUrl ? {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {backgroundImageUrl && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {section.title}
        </h1>
        
        {section.subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            {section.subtitle}
          </p>
        )}
        
        {section.ctaText && (
          <Button 
            size="lg" 
            className="bg-[#00EFCF] hover:bg-[#00EFCF]/90 text-black font-semibold"
            data-testid="button-hero-cta"
          >
            {section.ctaText}
          </Button>
        )}
      </div>
    </section>
  )
}