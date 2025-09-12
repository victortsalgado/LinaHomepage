import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Página',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
      description: 'Título principal da página (H1)',
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug/URL',
      type: 'slug',
      description: 'URL única da página (ex: /quem-somos)',
      options: {
        source: 'title',
        maxLength: 90,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      description: 'Descrição da página para SEO e metadados',
      rows: 3,
      validation: Rule => Rule.max(160),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Imagem de Destaque',
      type: 'image',
      description: 'Imagem principal da página (opcional)',
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
      name: 'sections',
      title: 'Seções da Página',
      type: 'array',
      description: 'Seções modulares que compõem a página',
      of: [
        {type: 'valoresSection'},
        {type: 'timelineSection'},
        {type: 'ctaSection'},
        // Você pode adicionar outros tipos de seção aqui
        {
          type: 'object',
          title: 'Seção de Texto Rico',
          name: 'richTextSection',
          fields: [
            defineField({
              name: 'title',
              title: 'Título da Seção',
              type: 'string',
              validation: Rule => Rule.max(100),
            }),
            defineField({
              name: 'content',
              title: 'Conteúdo',
              type: 'blockContent',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              content: 'content'
            },
            prepare(selection) {
              const {title} = selection
              return {
                title: title || 'Seção de Texto Rico',
                subtitle: 'Rich Text Content'
              }
            }
          }
        },
        {
          type: 'object',
          title: 'Seção de Imagem',
          name: 'imageSection',
          fields: [
            defineField({
              name: 'title',
              title: 'Título da Seção',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Imagem',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Texto Alternativo',
                }
              ],
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Legenda',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            },
            prepare(selection) {
              const {title} = selection
              return {
                title: title || 'Seção de Imagem',
                subtitle: 'Image Section',
                media: selection.media
              }
            }
          }
        }
      ],
      validation: Rule => Rule.min(1),
    }),
    defineField({
      name: 'seoTitle',
      title: 'Meta Title (SEO)',
      type: 'string',
      description: 'Título otimizado para SEO (aparece na aba do navegador)',
      validation: Rule => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      description: 'Descrição otimizada para mecanismos de busca',
      rows: 3,
      validation: Rule => Rule.max(160),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      description: 'Data e hora de publicação da página',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Status da Página',
      type: 'string',
      options: {
        list: [
          {title: 'Rascunho', value: 'draft'},
          {title: 'Publicada', value: 'published'},
          {title: 'Arquivada', value: 'archived'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      status: 'status',
      media: 'featuredImage',
      sections: 'sections'
    },
    prepare(selection) {
      const {title, slug, status, sections} = selection
      const sectionCount = sections?.length || 0
      const statusEmoji = status === 'published' ? '✅' : status === 'draft' ? '✏️' : '📦'
      
      return {
        title: title,
        subtitle: `${statusEmoji} ${slug} • ${sectionCount} seção(ões)`,
        media: selection.media
      }
    }
  },
  orderings: [
    {
      title: 'Data de Publicação (Mais Recente)',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Título A-Z',
      name: 'titleAsc',
      by: [
        {field: 'title', direction: 'asc'}
      ]
    }
  ]
})