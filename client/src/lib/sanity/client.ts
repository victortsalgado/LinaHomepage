import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'dw34kfrg',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false for development or when you need fresh data
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

export default client