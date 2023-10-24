import { defineField, defineType } from 'sanity';

import { i18n } from '../../../languages';

export default defineType({
  name: 'galleryWall',
  title: 'Gallery Wall',
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
      name: 'installedArtworks',
      type: 'array',
      of: [
        {
          title: 'Installed Artwork',
          name: 'installedArtwork',
          type: 'object',
          fields: [
            { name: 'artwork', type: 'reference', to: [{ type: 'artwork' }] },
            { name: 'width', type: 'number', title: 'Width (%)' },
            { name: 'top', type: 'number', title: 'Top (%)' },
            { name: 'left', type: 'number', title: 'Left (%)' },
          ],
          preview: {
            select: {
              title: `artwork.title.${i18n.base}`,
              subtitle: `artwork.primaryConstituent.name.${i18n.base}`,
              media: 'artwork.image',
            },
          },
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
