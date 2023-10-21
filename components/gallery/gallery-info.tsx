import type { Gallery } from '@/types';
import { PortableText } from '@portabletext/react';

import { portableTextComponents } from '@/components/sanity/portableTextComponents';
import AiWarning from '../ai-warning';

interface GalleryInfoProps {
  gallery: Gallery;
}

export default function GalleryInfo({ gallery }: GalleryInfoProps) {
  return (
    <div className="p-20 mb-12">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight md:leading-none mb-12 uppercase">
        {gallery.title}
      </h1>
      <div className="text-xl markdown">
        <PortableText
          value={gallery.description}
          components={portableTextComponents}
        />
        <AiWarning />
      </div>
    </div>
  );
}
