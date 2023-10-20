import { PortableText } from '@portabletext/react';

import { portableTextComponents } from '@/components/sanity/portableTextComponents';

interface GalleryInfoProps {
  gallery: any;
}

export default function GalleryInfo({ gallery }: GalleryInfoProps) {
  return (
    <div className="p-8">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {gallery.title}
      </h1>
      <div className="max-w-2xl mx-auto">
        <PortableText
          value={gallery.description}
          components={portableTextComponents}
        />
      </div>
    </div>
  );
}
