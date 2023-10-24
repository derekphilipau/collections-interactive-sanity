import { defineField, defineType } from 'sanity';

import { i18n } from '../../../languages';

export default defineType({
  name: 'constituent',
  title: 'Constituent',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'localizedBlockContent',
    }),
    defineField({
      name: 'image',
      title: 'Portrait',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: `name.${i18n.base}`,
      subtitle: `bio.${i18n.base}`,
      media: 'image',
    },
  },
});
