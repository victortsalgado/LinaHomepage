import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageSection',
  title: 'Seção de Imagem',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
      description: 'Título opcional da seção de imagem',
      validation: Rule => Rule.max(100),
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      description: 'Imagem principal da seção',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Texto Alternativo',
      type: 'string',
      description: 'Texto alternativo para acessibilidade (obrigatório)',
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: 'caption',
      title: 'Legenda',
      type: 'text',
      description: 'Legenda opcional da imagem',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      alt: 'alt',
      caption: 'caption',
      media: 'image'
    },
    prepare(selection) {
      const {title, alt, caption} = selection
      return {
        title: title || 'Seção de Imagem',
        subtitle: `Alt: ${alt}${caption ? ` • ${caption.substring(0, 30)}...` : ''}`,
        media: selection.media
      }
    }
  }
})