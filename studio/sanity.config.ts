import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { resolveProductionUrl } from './resolveProductionUrl';
import { schema } from './schema';

const title =
  import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Collections Interactive';
const projectId = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema,
  document: {
    productionUrl: resolveProductionUrl,
  },
  plugins: [deskTool({}), visionTool()],
});
