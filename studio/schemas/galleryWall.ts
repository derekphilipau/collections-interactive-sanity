import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'galleryWall',
  title: 'Gallery Wall',
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
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
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
            { name: 'width', type: 'number', title: 'Width (px)' },
            { name: 'top', type: 'number', title: 'Top (px)' },
            { name: 'left', type: 'number', title: 'Left (px)' },
          ],
          preview: {
            select: {
              title: 'artwork.title',
              media: 'artwork.image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
