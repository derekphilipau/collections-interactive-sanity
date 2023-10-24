import { defineField, defineType } from 'sanity';

import { i18n } from '../../../languages';

export default defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
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
      name: 'imageCopyright',
      title: 'Image Copyright',
      type: 'string',
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
    }),
    defineField({
      name: 'formattedDate',
      title: 'Formatted Date',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryConstituent',
      title: 'Primary Constituent',
      type: 'reference',
      to: [{ type: 'constituent' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: `title.${i18n.base}`,
      author: `primaryConstituent.name.${i18n.base}`,
      media: 'image',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
