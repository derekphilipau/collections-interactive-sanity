import { type SchemaTypeDefinition } from 'sanity';

import artwork from './schemas/artwork';
import blockContent from './schemas/blockContent';
import constituent from './schemas/constituent';
import gallery from './schemas/gallery';
import galleryWall from './schemas/galleryWall';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryWall, gallery, artwork, constituent, blockContent],
};
