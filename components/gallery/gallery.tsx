'use client';

import { Key, MutableRefObject, useEffect, useRef, useState } from 'react';
import type { Artwork as ArtworkType, Gallery } from '@/types';
import { ChevronUp } from 'lucide-react';

import Artwork from '@/components/artwork/artwork';
import GalleryInfo from '@/components/gallery/gallery-info';
import ThumbnailImage from '@/components/image/thumbnail-image';

const RETURN_TO_GALLERY_TIMEOUT = 5 * 60 * 1000; // 5 minutes

interface GalleryProps {
  gallery: Gallery;
}

export default function Gallery({ gallery }: GalleryProps) {
  const [slug, setSlug] = useState<string | null>(null);
  const [artwork, setArtwork] = useState<ArtworkType | null>(null);
  const galleryTimerRef = useRef<number | null>(null);

  function onImageClick(slug: string | null) {
    setSlug(slug);
  }

  const galleryScrollable = useRef() as MutableRefObject<HTMLDivElement | null>;

  useEffect(() => {
    setArtwork(
      gallery.artworks.find((artwork) => artwork.slug === slug) || null
    );
    galleryScrollable?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    setArtwork(
      gallery.artworks.find((artwork) => artwork.slug === slug) || null
    );
    galleryScrollable?.current?.scrollTo({ top: 0, behavior: 'smooth' });

    if (slug) {
      // Set a timer to return to the main gallery after a period of time
      galleryTimerRef.current = setTimeout(() => {
        setSlug(null);
      }, RETURN_TO_GALLERY_TIMEOUT) as unknown as number;
    }

    return () => {
      if (galleryTimerRef.current) {
        clearTimeout(galleryTimerRef.current);
      }
    };
  }, [slug]);

  return (
    <div className="flex">
      <div
        ref={galleryScrollable}
        className="w-3/4 h-screen overflow-y-auto  bg-neutral-950 text-white"
      >
        {!artwork ? (
          <GalleryInfo gallery={gallery} />
        ) : (
          <Artwork artwork={artwork} />
        )}
      </div>
      <div className="w-1/4 h-screen overflow-y-auto p-8">
        <h1 className="text-1xl md:text-2xl lg:text-2xl font-bold tracking-tight leading-tight md:leading-none mb-4 cursor-pointer uppercase">
          <a
            className="text-neutral-700 hover:text-neutral-800"
            onClick={() => onImageClick(null)}
          >
            {gallery.title}
            {slug && <ChevronUp className="inline-block h-8 w-8 ml-4" />}
          </a>
        </h1>
        <div className="columns-1 gap-4 md:columns-1 lg:columns-2">
          {gallery.artworks?.length > 0 &&
            gallery.artworks.map((artwork: ArtworkType, i: Key) => (
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
