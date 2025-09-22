import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'arsenalPost',
  title: 'Arsenal Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'productDetails',
      title: 'Product Details',
      type: 'object',
      fields: [
        {
          name: 'brand',
          title: 'Brand',
          type: 'string',
        },
        {
          name: 'model',
          title: 'Model',
          type: 'string',
        },
        {
          name: 'caliber',
          title: 'Caliber/Specifications',
          type: 'string',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'string',
        },
        {
          name: 'purchaseLink',
          title: 'Purchase Link',
          type: 'url',
        },
        {
          name: 'rating',
          title: 'Rating',
          type: 'number',
          options: {
            list: [
              { title: '1 Star', value: 1 },
              { title: '2 Stars', value: 2 },
              { title: '3 Stars', value: 3 },
              { title: '4 Stars', value: 4 },
              { title: '5 Stars', value: 5 },
            ],
          },
        },
      ],
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
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})