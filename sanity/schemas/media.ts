import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Logos', value: 'logos'},
          {title: 'Icons', value: 'icons'},
          {title: 'Banners', value: 'banners'},
          {title: 'Figma Assets', value: 'figma'},
          {title: 'Generated', value: 'generated'},
          {title: 'Company Values', value: 'valores'},
          {title: 'Clients', value: 'clients'},
          {title: 'Products', value: 'products'},
          {title: 'Others', value: 'outros'},
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category',
    },
    prepare(selection) {
      const {title, category} = selection
      return {
        title: title,
        subtitle: category ? `Category: ${category}` : 'No category',
        media: selection.media,
      }
    },
  },
})