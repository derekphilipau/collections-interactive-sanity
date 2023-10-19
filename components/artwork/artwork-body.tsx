import { PortableText } from '@portabletext/react';

import markdownStyles from '../markdown-styles.module.css';

export default function ArtworkBody({ description }) {
  return (
    <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
      <PortableText value={description} />
    </div>
  );
}
