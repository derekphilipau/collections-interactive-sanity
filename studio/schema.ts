import { type SchemaTypeDefinition } from 'sanity';

import artwork from './schemas/documents/artwork';
import constituent from './schemas/documents/constituent';
import gallery from './schemas/documents/gallery';
import galleryWall from './schemas/documents/galleryWall';
import blockContent from './schemas/objects/blockContent';
import localizedBlockContent from './schemas/objects/localizedBlockContent';
import localizedSlug from './schemas/objects/localizedSlug';
import localizedString from './schemas/objects/localizedString';
import localizedText from './schemas/objects/localizedText';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    galleryWall,
    gallery,
    artwork,
    constituent,
    blockContent,
    localizedSlug,
    localizedString,
    localizedText,
    localizedBlockContent,
  ],
};
