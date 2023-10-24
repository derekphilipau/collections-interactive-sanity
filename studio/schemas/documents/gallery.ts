import { defineField, defineType } from 'sanity';

import { i18n } from '../../../languages';

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'localizedSlug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedBlockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Primary Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Artworks',
      name: 'artworks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'artwork' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: `title.${i18n.base}`,
      media: 'image',
    },
  },
});
