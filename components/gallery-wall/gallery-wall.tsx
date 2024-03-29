'use client';

import { Key, useState } from 'react';
import type { GalleryWall, InstalledArtwork } from '@/types';

import { cn, getTranslation } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent } from '@/components/ui/sheet-custom';
import ThumbnailImage from '../image/thumbnail-image';
import { Button } from '../ui/button-custom';
import WallArtwork from './wall-artwork';

interface GalleryWallProps {
  galleryWall: GalleryWall;
}

export default function GalleryWall({ galleryWall }: GalleryWallProps) {
  const [lang, setLang] = useState<string>('en');
  const [open, setOpen] = useState(false);
  const [installedArtwork, setInstalledArtwork] =
    useState<InstalledArtwork | null>(null);

  function onImageClick(installedArtwork: InstalledArtwork) {
    setInstalledArtwork(installedArtwork);
    if (!open) {
      setOpen(true);
    }
  }

  return (
    <div className="relative h-screen w-screen overflow-x-hidden bg-neutral-800 bg-gradient-to-t from-neutral-900 to-neutral-800">
      <div className="absolute z-40 bottom-8 left-8">
        <h1 className="text-white text-xl md:text-3xl lg:text-5xl font-bold tracking-tight leading-tight md:leading-none cursor-pointer uppercase">
          {getTranslation(galleryWall.title, lang)}
        </h1>
      </div>
      <div className="absolute z-50 text-xl text-muted font-bold tracking-tight leading-tight md:leading-none bottom-8 right-8">
        {lang !== 'es' && (
          <Button variant="custom" size="xl" onClick={() => setLang('es')}>
            Español
          </Button>
        )}
        {lang !== 'en' && (
          <Button variant="custom" size="xl" onClick={() => setLang('en')}>
            English
          </Button>
        )}
      </div>
      {galleryWall.installedArtworks?.length > 0 &&
        galleryWall.installedArtworks.map(
          (installedArtwork: InstalledArtwork, i: Key) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: `${installedArtwork.width}%`,
                top: `${installedArtwork.top}%`,
                left: `${installedArtwork.left}%`,
                cursor: 'pointer',
                filter:
                  'drop-shadow(0 10px 8px rgb(0 0 0 / 0.4)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.4))',
              }}
              onClick={() => onImageClick(installedArtwork)}
            >
              <ThumbnailImage
                title={getTranslation(installedArtwork.artwork.title, lang)}
                image={installedArtwork.artwork.image}
              />
            </div>
          )
        )}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-1/2 bg-black pt-14">
          <ScrollArea className="h-full overflow-y-auto px-12 pt-2 pb-12 text-white">
            <WallArtwork artwork={installedArtwork?.artwork} lang={lang} />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
