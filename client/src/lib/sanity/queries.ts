import { client } from './client'

export const PAGE_QUERY = `
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    sections[]{
      _type,
      _type == "heroSection" => {
        title,
        subtitle,
        backgroundImage,
        ctaText,
        ctaLink
      },
      _type == "textSection" => {
        title,
        content,
        textAlign
      },
      _type == "imageSection" => {
        title,
        image,
        alt,
        caption
      }
    }
  }
`

export const ALL_PAGES_QUERY = `
  *[_type == "page"]{
    _id,
    title,
    slug
  }
`

export interface SanityPage {
  _id: string
  title: string
  slug: { current: string }
  sections: SanitySection[]
}

export interface SanitySection {
  _type: 'heroSection' | 'textSection' | 'imageSection'
}

export interface HeroSection extends SanitySection {
  _type: 'heroSection'
  title: string
  subtitle?: string
  backgroundImage?: any
  ctaText?: string
  ctaLink?: string
}

export interface TextSection extends SanitySection {
  _type: 'textSection'
  title?: string
  content: string
  textAlign?: 'left' | 'center' | 'right'
}

export interface ImageSection extends SanitySection {
  _type: 'imageSection'
  title?: string
  image: any
  alt: string
  caption?: string
}

export async function getPageBySlug(slug: string): Promise<SanityPage | null> {
  try {
    const page = await client.fetch(PAGE_QUERY, { slug })
    return page
  } catch (error) {
    console.error('Error fetching page by slug:', error)
    return null
  }
}

export async function getAllPages(): Promise<Pick<SanityPage, '_id' | 'title' | 'slug'>[]> {
  try {
    const pages = await client.fetch(ALL_PAGES_QUERY)
    return pages
  } catch (error) {
    console.error('Error fetching all pages:', error)
    return []
  }
}