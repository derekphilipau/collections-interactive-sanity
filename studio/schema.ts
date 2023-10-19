import { type SchemaTypeDefinition } from 'sanity';

import artwork from './schemas/artwork';
import constituent from './schemas/constituent';
import gallery from './schemas/gallery';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, artwork, constituent],
};
