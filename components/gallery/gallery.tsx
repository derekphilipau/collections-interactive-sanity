import { type Key } from 'react';
import Head from 'next/head';

import { CMS_NAME } from '@/lib/constants';
import ArtworkCard from './artwork-card';

interface GalleryProps {
  gallery: any;
  preview?: boolean;
}

export default function Gallery({ gallery, preview = false }: GalleryProps) {
  console.log(gallery);
  return (
    <div className="columns-1 gap-8 md:columns-2 lg:columns-3 xl:columns-4">
      {gallery.artworks?.length > 0 &&
        gallery.artworks.map((artwork: any, i: Key) => (
          <ArtworkCard
            key={i}
            title={artwork.title}
            slug={artwork.slug}
            image={artwork.image}
            formattedDate={artwork.formattedDate}
            primaryConstituent={artwork.primaryConstituent}
          />
        ))}
    </div>
  );
}
