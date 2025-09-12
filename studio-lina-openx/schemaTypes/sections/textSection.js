import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textSection',
  title: 'Seção de Texto',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
      description: 'Título opcional da seção de texto',
      validation: Rule => Rule.max(100),
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'text',
      description: 'Conteúdo principal da seção de texto',
      rows: 8,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'textAlign',
      title: 'Alinhamento do Texto',
      type: 'string',
      description: 'Alinhamento do conteúdo',
      options: {
        list: [
          {title: 'Esquerda', value: 'left'},
          {title: 'Centro', value: 'center'},
          {title: 'Direita', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
      textAlign: 'textAlign'
    },
    prepare(selection) {
      const {title, content, textAlign} = selection
      return {
        title: title || 'Seção de Texto',
        subtitle: `${textAlign} • ${content ? content.substring(0, 60) + '...' : 'Sem conteúdo'}`,
      }
    }
  }
})