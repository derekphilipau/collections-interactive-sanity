'use client';

import { Key, MutableRefObject, useEffect, useRef, useState } from 'react';
import type { Artwork as ArtworkType, Gallery } from '@/types';
import { ChevronUp } from 'lucide-react';

import { getTranslation } from '@/lib/utils';
import Artwork from '@/components/artwork/artwork';
import GalleryInfo from '@/components/gallery/gallery-info';
import ThumbnailImage from '@/components/image/thumbnail-image';

const RETURN_TO_GALLERY_TIMEOUT = 5 * 60 * 1000; // 5 minutes

interface GalleryProps {
  gallery: Gallery;
}

export default function Gallery({ gallery }: GalleryProps) {
  const [lang, setLang] = useState<string>('en');
  const [artwork, setArtwork] = useState<ArtworkType | null>(null);
  const galleryTimerRef = useRef<number | null>(null);
  const galleryScrollable = useRef() as MutableRefObject<HTMLDivElement | null>;

  useEffect(() => {
    return () => {
      if (galleryTimerRef.current) {
        clearTimeout(galleryTimerRef.current);
      }
    };
  }, []);

  function onImageClick(artwork: ArtworkType | null) {
    if (galleryTimerRef.current) {
      clearTimeout(galleryTimerRef.current);
      galleryTimerRef.current = null;
    }

    setArtwork(artwork);
    galleryScrollable?.current?.scrollTo({ top: 0, behavior: 'smooth' });

    if (artwork) {
      // Set a timer to return to the main gallery after a period of time
      galleryTimerRef.current = setTimeout(() => {
        setArtwork(null);
      }, RETURN_TO_GALLERY_TIMEOUT) as unknown as number;
    }
  }

  return (
    <div className="flex">
      <div
        ref={galleryScrollable}
        className="w-3/4 h-screen overflow-y-auto  bg-neutral-950 text-white"
      >
        {!artwork ? (
          <GalleryInfo gallery={gallery} lang={lang} />
        ) : (
          <Artwork artwork={artwork} lang={lang} />
        )}
      </div>
      <div className="w-1/4 h-screen overflow-y-auto p-8 bg-neutral-800 bg-gradient-to-t from-neutral-900 to-neutral-800 text-white">
        <div className="mb-4 text-xl text-muted font-bold tracking-tight leading-tight md:leading-none">
          {lang !== 'es' && (
            <a className="cursor-pointer" onClick={() => setLang('es')}>
              Español
            </a>
          )}
          {lang !== 'en' && (
            <a className="cursor-pointer" onClick={() => setLang('en')}>
              English
            </a>
          )}
        </div>
        <h1 className="text-xl md:text-2xl font-bold tracking-tight leading-tight md:leading-none mb-4 cursor-pointer uppercase">
          <a
            className="text-white hover:text-neutral-100"
            onClick={() => onImageClick(null)}
          >
            {getTranslation(gallery.title, lang)}
            {artwork && <ChevronUp className="inline-block h-8 w-8 ml-4" />}
          </a>
        </h1>
        <div className="columns-1 gap-4 md:columns-1 lg:columns-2">
          {gallery.artworks?.length > 0 &&
            gallery.artworks.map((artwork: ArtworkType, i: Key) => (
              <div
                key={i}
                className="mb-8 flex items-center justify-center bg-neutral-50 text-neutral-200 transition-colors hover:bg-neutral-100 hover:brightness-90 hover:text-neutral-300 dark:bg-neutral-800 dark:text-neutral-900 dark:hover:bg-neutral-700  dark:hover:text-neutral-800 cursor-pointer"
                onClick={() => onImageClick(artwork)}
              >
                <ThumbnailImage
                  title={getTranslation(artwork.title, lang)}
                  image={artwork.image}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
