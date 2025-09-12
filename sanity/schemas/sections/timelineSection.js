import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'timelineSection',
  title: 'Seção de Timeline',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
      description: 'Título principal da seção timeline',
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      description: 'Texto explicativo da seção timeline',
      rows: 3,
    }),
    defineField({
      name: 'layout',
      title: 'Layout da Timeline',
      type: 'string',
      description: 'Escolha o layout da timeline',
      options: {
        list: [
          {title: 'Vertical', value: 'vertical'},
          {title: 'Horizontal', value: 'horizontal'},
          {title: 'Alternado', value: 'alternating'},
        ],
        layout: 'radio',
      },
      initialValue: 'vertical',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'eventos',
      title: 'Eventos da Timeline',
      type: 'array',
      description: 'Lista cronológica de eventos importantes',
      of: [
        {
          type: 'object',
          title: 'Evento',
          fields: [
            defineField({
              name: 'year',
              title: 'Ano',
              type: 'string',
              description: 'Ano do evento (ex: 2020, 2021-2022)',
              validation: Rule => Rule.required().max(20),
            }),
            defineField({
              name: 'title',
              title: 'Título do Evento',
              type: 'string',
              description: 'Título principal do evento',
              validation: Rule => Rule.required().max(80),
            }),
            defineField({
              name: 'description',
              title: 'Descrição',
              type: 'text',
              description: 'Descrição detalhada do evento',
              rows: 4,
              validation: Rule => Rule.required().max(400),
            }),
            defineField({
              name: 'highlight',
              title: 'Destacar Evento',
              type: 'boolean',
              description: 'Marcar este evento como destaque visual',
              initialValue: false,
            }),
            defineField({
              name: 'image',
              title: 'Imagem do Evento',
              type: 'image',
              description: 'Imagem opcional para ilustrar o evento',
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
          ],
          preview: {
            select: {
              title: 'title',
              year: 'year',
              description: 'description',
              media: 'image',
              highlight: 'highlight'
            },
            prepare(selection) {
              const {title, year, description, highlight} = selection
              return {
                title: `${year} - ${title}`,
                subtitle: highlight ? '⭐ Evento Destacado' : 'Evento Timeline',
                description: description?.substring(0, 80) + '...',
                media: selection.media
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1).max(20),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      layout: 'layout',
      eventos: 'eventos'
    },
    prepare(selection) {
      const {title, layout, eventos} = selection
      const eventCount = eventos?.length || 0
      return {
        title: title || 'Timeline',
        subtitle: `${eventCount} evento(s) • Layout: ${layout}`,
      }
    }
  }
})