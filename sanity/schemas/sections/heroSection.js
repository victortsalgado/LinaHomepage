import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Seção Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Título principal da seção hero',
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      description: 'Subtítulo ou descrição da seção hero',
      rows: 3,
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Imagem de Fundo',
      type: 'image',
      description: 'Imagem de fundo para a seção hero',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
          description: 'Texto alternativo para acessibilidade',
        }
      ]
    }),
    defineField({
      name: 'ctaText',
      title: 'Texto do Botão CTA',
      type: 'string',
      description: 'Texto do botão de call-to-action (opcional)',
      validation: Rule => Rule.max(30),
    }),
    defineField({
      name: 'ctaLink',
      title: 'Link do Botão CTA',
      type: 'url',
      description: 'URL para onde o botão CTA direciona',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'backgroundImage',
      ctaText: 'ctaText'
    },
    prepare(selection) {
      const {title, subtitle, ctaText} = selection
      const hasButton = ctaText ? ' • Com CTA' : ''
      return {
        title: title || 'Seção Hero',
        subtitle: subtitle ? `${subtitle.substring(0, 50)}...${hasButton}` : `Hero Section${hasButton}`,
        media: selection.media
      }
    }
  }
})