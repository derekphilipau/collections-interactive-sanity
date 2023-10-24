'use client';

import { Key, MutableRefObject, useEffect, useRef, useState } from 'react';
import type { GalleryWall, InstalledArtwork } from '@/types';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent } from '@/components/ui/sheet-custom';
import { InstalledArtworkCard } from './installed-artwork-card';
import WallArtwork from './wall-artwork';

const RETURN_TO_GALLERY_TIMEOUT = 5 * 60 * 1000; // 5 minutes

interface GalleryWallProps {
  galleryWall: GalleryWall;
}

export default function GalleryWall({ galleryWall }: GalleryWallProps) {
  const [slug, setSlug] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [installedArtwork, setInstalledArtwork] =
    useState<InstalledArtwork | null>(null);
  const galleryTimerRef = useRef<number | null>(null);

  function onImageClick(installedArtwork: InstalledArtwork | null) {
    setInstalledArtwork(installedArtwork);
    console.log('clicked ' + installedArtwork?.artwork.slug);
    setOpen(true);
  }

  const galleryScrollable = useRef() as MutableRefObject<HTMLDivElement | null>;

  useEffect(() => {
    setInstalledArtwork(
      galleryWall.installedArtworks.find(
        (installedArtwork) => installedArtwork.artwork?.slug === slug
      ) || null
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

  const titleStyle = {
    width: `100%`,
    bottom: `2%`,
    left: `2%`,
  };
  return (
    <section className="">
      <div className="relative h-screen w-screen overflow-x-hidden bg-neutral-800 bg-gradient-to-t from-neutral-900 to-neutral-800">
        <div className="absolute z-40" style={titleStyle}>
          <h1 className="text-white text-5xl font-bold tracking-tight leading-tight md:leading-none mb-4 cursor-pointer uppercase">
            {galleryWall.title}
          </h1>
        </div>
        {galleryWall.installedArtworks?.length > 0 &&
          galleryWall.installedArtworks.map(
            (installedArtwork: InstalledArtwork, i: Key) => (
              <InstalledArtworkCard
                key={i}
                installedArtwork={installedArtwork}
                onImageClick={onImageClick}
              />
            )
          )}
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-1/2 bg-black pt-14">
          <ScrollArea className="h-full overflow-y-auto px-12 pt-2 pb-12 text-white">
            <WallArtwork artwork={installedArtwork?.artwork} />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </section>
  );
}
