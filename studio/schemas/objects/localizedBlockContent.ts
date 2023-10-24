import { defineField, defineType } from 'sanity';

import { i18n } from '../../../languages';

export default defineType({
  name: 'localizedBlockContent',
  title: 'Localized Block Content',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: i18n.languages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: 'blockContent',
      fieldset: lang.isDefault ? undefined : 'translations',
    })
  ),
});
