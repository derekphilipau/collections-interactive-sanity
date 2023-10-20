import { type Key } from 'react';

import ArtworkCard from './artwork-card';

interface GalleryArtworksProps {
  gallery: any;
  preview?: boolean;
}

export default function GalleryArtworks({
  gallery,
  preview = false,
}: GalleryArtworksProps) {
  return (
    <div className="columns-1 gap-4 lg:columns-2 xl:columns-3">
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
