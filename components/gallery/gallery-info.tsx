import type { Gallery } from '@/types';
import { PortableText } from '@portabletext/react';

import { getTranslation } from '@/lib/utils';
import { portableTextComponents } from '@/components/sanity/portableTextComponents';
import AiWarning from '../ai-warning';

interface GalleryInfoProps {
  gallery: Gallery;
  lang: string;
}

export default function GalleryInfo({ gallery, lang }: GalleryInfoProps) {
  return (
    <div className="p-20 mb-12">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight md:leading-none mb-12 uppercase">
        {getTranslation(gallery.title, lang)}
      </h1>
      <div className="text-xl markdown">
        <PortableText
          value={getTranslation(gallery.description, lang)}
          components={portableTextComponents}
        />
        <AiWarning lang={lang} />
      </div>
    </div>
  );
}
