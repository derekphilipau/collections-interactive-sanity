import { PortableText } from '@portabletext/react';

import { portableTextComponents } from '@/components/sanity/portableTextComponents';

export default function ArtworkBody({ description }) {
  return (
    <div className="text-xl">
      <PortableText value={description} components={portableTextComponents} />
    </div>
  );
}
