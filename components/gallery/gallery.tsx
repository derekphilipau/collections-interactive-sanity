'use client';

import { Key, MutableRefObject, useEffect, useRef, useState } from 'react';
import { ChevronUp } from 'lucide-react';

import Artwork from '@/components/artwork/artwork';
import GalleryInfo from '@/components/gallery/gallery-info';
import ThumbnailImage from '@/components/image/thumbnail-image';

interface GalleryProps {
  gallery: any;
}

export default function Gallery({ gallery }: GalleryProps) {
  const [slug, setSlug] = useState<string | null>(null);
  const [artwork, setArtwork] = useState<any | null>(null);

  function onImageClick(slug: string | null) {
    setSlug(slug);
  }

  const scrollable = useRef() as MutableRefObject<HTMLDivElement | null>;

  useEffect(() => {
    setArtwork(gallery.artworks.find((artwork) => artwork.slug === slug));
    scrollable?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  return (
    <div className="flex">
      <div
        ref={scrollable}
        className="w-3/4 h-screen overflow-y-auto  bg-neutral-950 text-white"
      >
        {!artwork ? (
          <GalleryInfo gallery={gallery} />
        ) : (
          <Artwork artwork={artwork} />
        )}
      </div>
      <div className="w-1/4 h-screen overflow-y-auto p-8">
        <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-4 cursor-pointer ">
          <a
            className="text-neutral-700 hover:text-neutral-800"
            onClick={() => onImageClick(null)}
          >
            {gallery.title}
            {slug && <ChevronUp className="inline-block h-8 w-8 ml-4" />}
          </a>
        </h1>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight md:leading-none mb-8">
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
                <ThumbnailImage
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
