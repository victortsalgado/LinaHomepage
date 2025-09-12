import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'valoresSection',
  title: 'Seção de Valores',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Seção',
      type: 'string',
      description: 'Título principal da seção de valores',
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'text',
      description: 'Texto explicativo da seção',
      rows: 3,
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Cor de Fundo',
      type: 'string',
      description: 'Cor de fundo da seção',
      options: {
        list: [
          {title: 'Branco', value: 'white'},
          {title: 'Cinza Claro', value: 'gray-50'},
          {title: 'Azul Claro', value: 'blue-50'},
          {title: 'Verde Claro', value: 'green-50'},
          {title: 'Roxo Claro', value: 'purple-50'},
        ],
        layout: 'radio',
      },
      initialValue: 'white',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'valores',
      title: 'Lista de Valores',
      type: 'array',
      description: 'Valores da empresa com ícone, título e descrição',
      of: [
        {
          type: 'object',
          title: 'Valor',
          fields: [
            defineField({
              name: 'icon',
              title: 'Ícone',
              type: 'string',
              description: 'Nome do ícone (ex: heart, star, shield)',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Título do Valor',
              type: 'string',
              description: 'Nome do valor',
              validation: Rule => Rule.required().max(50),
            }),
            defineField({
              name: 'description',
              title: 'Descrição',
              type: 'text',
              description: 'Explicação detalhada do valor',
              rows: 4,
              validation: Rule => Rule.required().max(300),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'icon',
              description: 'description'
            },
            prepare(selection) {
              const {title, subtitle, description} = selection
              return {
                title: title,
                subtitle: `Ícone: ${subtitle}`,
                description: description?.substring(0, 80) + '...'
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1).max(8),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      backgroundColor: 'backgroundColor',
      valores: 'valores'
    },
    prepare(selection) {
      const {title, backgroundColor, valores} = selection
      const valorCount = valores?.length || 0
      return {
        title: title || 'Seção de Valores',
        subtitle: `${valorCount} valor(es) • Fundo: ${backgroundColor}`,
      }
    }
  }
})