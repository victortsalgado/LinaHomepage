import blockContent from './blockContent'
import post from './post'
import media from './media'
import postType from './postType'

// Schemas de página e seções
import page from './page'
import heroSection from './sections/heroSection'
import textSection from './sections/textSection'
import imageSection from './sections/imageSection'
import valoresSection from './sections/valoresSection'
import timelineSection from './sections/timelineSection'
import ctaSection from './sections/ctaSection'

export const schemaTypes = [
  // Documentos principais
  post,
  postType,
  page,
  media,
  
  // Tipos de seção para páginas
  heroSection,
  textSection,
  imageSection,
  valoresSection,
  timelineSection,
  ctaSection,
  
  // Tipos auxiliares
  blockContent,
]