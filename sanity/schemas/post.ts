import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Artigo do Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Título principal do artigo (H1)',
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL única do post',
      options: {
        source: 'title',
        maxLength: 90,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem de Destaque',
      type: 'image',
      description: 'Imagem principal do artigo',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
          description: 'Texto alternativo para acessibilidade e SEO',
        }
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      description: 'Categoria do post',
      options: {
        list: [
          {title: 'DataLink', value: 'DataLink'},
          {title: 'LinaPay', value: 'LinaPay'},
          {title: 'JSR', value: 'JSR'},
          {title: 'Institucional', value: 'Institucional'},
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      description: 'Resumo/excerto do artigo para os cards de preview',
      rows: 4,
      validation: Rule => Rule.required().max(200),
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'blockContent',
      description: 'Conteúdo completo do artigo em Rich Text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      description: 'Data e hora de publicação do artigo',
      validation: Rule => Rule.required(),
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
      type: 'string',
      description: 'Descrição otimizada para SEO (aparece nos resultados de busca)',
      validation: Rule => Rule.max(160),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      category: 'category',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {title, category, publishedAt, media} = selection
      const publishedDate = publishedAt ? new Date(publishedAt).toLocaleDateString('pt-BR') : 'Sem data'
      
      return {
        title,
        subtitle: `${category} • ${publishedDate}`,
        media,
      }
    },
  },
})