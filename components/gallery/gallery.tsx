'use client';

import { Key, useEffect, useState } from 'react';

import Artwork from '@/components/artwork/artwork';
import GalleryInfo from '@/components/gallery/gallery-info';
import ArtworkImage from '@/components/image/artwork-image';

interface GalleryProps {
  gallery: any;
}

export default function Gallery({ gallery }: GalleryProps) {
  const [slug, setSlug] = useState('');
  const [artwork, setArtwork] = useState(null);

  function onImageClick(slug: string) {
    setSlug(slug);
  }

  useEffect(() => {
    setArtwork(gallery.artworks.find((artwork) => artwork.slug === slug));
  }, [slug]);

  return (
    <div className="flex">
      <div className="w-2/3 h-screen overflow-y-auto  bg-neutral-950 text-white">
        {!artwork ? (
          <GalleryInfo gallery={gallery} />
        ) : (
          <Artwork artwork={artwork} />
        )}
      </div>
      <div className="w-1/3 h-screen overflow-y-auto p-8">
        <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-4">
          <a href="/">{gallery.title}</a>
        </h1>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-8">
          Artworks
        </h3>
        <div className="columns-1 gap-4 lg:columns-2 xl:columns-3">
          {gallery.artworks?.length > 0 &&
            gallery.artworks.map((artwork: any, i: Key) => (
              <div
                key={i}
                className="mb-8 flex items-center justify-center bg-neutral-50 text-neutral-200 transition-colors hover:bg-neutral-100 hover:brightness-90 hover:text-neutral-300 dark:bg-neutral-800 dark:text-neutral-900 dark:hover:bg-neutral-700  dark:hover:text-neutral-800 cursor-pointer"
                onClick={() => onImageClick(artwork.slug)}
              >
                <ArtworkImage
                  title={artwork.title}
                  image={artwork.image}
                  slug={artwork.slug}
                  priority
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
