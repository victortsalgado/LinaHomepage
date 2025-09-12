import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'Seção de Call-to-Action',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Título principal da seção CTA',
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      description: 'Texto explicativo da seção',
      rows: 4,
      validation: Rule => Rule.required().max(300),
    }),
    defineField({
      name: 'alignment',
      title: 'Alinhamento do Conteúdo',
      type: 'string',
      description: 'Alinhamento do texto e botões',
      options: {
        list: [
          {title: 'Centro', value: 'center'},
          {title: 'Esquerda', value: 'left'},
          {title: 'Direita', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'center',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Cor de Fundo',
      type: 'string',
      description: 'Cor de fundo da seção CTA',
      options: {
        list: [
          {title: 'Branco', value: 'white'},
          {title: 'Cinza Claro', value: 'gray-50'},
          {title: 'Azul', value: 'blue-600'},
          {title: 'Verde', value: 'green-600'},
          {title: 'Roxo', value: 'purple-600'},
          {title: 'Gradiente', value: 'gradient'},
        ],
        layout: 'radio',
      },
      initialValue: 'blue-600',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'buttons',
      title: 'Botões de Ação',
      type: 'array',
      description: 'Lista de botões com diferentes ações',
      of: [
        {
          type: 'object',
          title: 'Botão',
          fields: [
            defineField({
              name: 'text',
              title: 'Texto do Botão',
              type: 'string',
              description: 'Texto que aparece no botão',
              validation: Rule => Rule.required().max(30),
            }),
            defineField({
              name: 'url',
              title: 'URL/Link',
              type: 'url',
              description: 'Link para onde o botão direciona',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'style',
              title: 'Estilo do Botão',
              type: 'string',
              description: 'Estilo visual do botão',
              options: {
                list: [
                  {title: 'Primary (Preenchido)', value: 'primary'},
                  {title: 'Secondary (Contorno)', value: 'secondary'},
                  {title: 'Ghost (Transparente)', value: 'ghost'},
                  {title: 'Link (Apenas texto)', value: 'link'},
                ],
                layout: 'dropdown',
              },
              initialValue: 'primary',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Ícone',
              type: 'string',
              description: 'Nome do ícone opcional (ex: arrow-right, download, phone)',
            }),
            defineField({
              name: 'openInNewTab',
              title: 'Abrir em Nova Aba',
              type: 'boolean',
              description: 'Abrir o link em uma nova aba',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              text: 'text',
              url: 'url',
              style: 'style',
              icon: 'icon'
            },
            prepare(selection) {
              const {text, url, style, icon} = selection
              return {
                title: text,
                subtitle: `${style} • ${url}`,
                description: icon ? `Ícone: ${icon}` : 'Sem ícone'
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1).max(4),
    }),
    defineField({
      name: 'spacing',
      title: 'Espaçamento',
      type: 'string',
      description: 'Espaçamento interno da seção',
      options: {
        list: [
          {title: 'Pequeno', value: 'small'},
          {title: 'Médio', value: 'medium'},
          {title: 'Grande', value: 'large'},
        ],
        layout: 'radio',
      },
      initialValue: 'medium',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      backgroundColor: 'backgroundColor',
      buttons: 'buttons'
    },
    prepare(selection) {
      const {title, backgroundColor, buttons} = selection
      const buttonCount = buttons?.length || 0
      return {
        title: title || 'Call-to-Action',
        subtitle: `${buttonCount} botão(ões) • Fundo: ${backgroundColor}`,
      }
    }
  }
})