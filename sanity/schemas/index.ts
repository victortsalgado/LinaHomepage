import blockContent from './blockContent'
import post from './post'
import media from './media'
import postType from './postType'

// Schemas de página e seções
import page from './page'
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
  valoresSection,
  timelineSection,
  ctaSection,
  
  // Tipos auxiliares
  blockContent,
]