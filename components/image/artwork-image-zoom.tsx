'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { FullscreenIcon } from 'lucide-react';

import { urlForImage } from '@/lib/sanity/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog-full-screen-local';
import SanityImage from './sanity-image';

const OpenSeaDragonViewer = dynamic(() => import('./open-seadragon-viewer'), {
  ssr: false,
});

interface ArtworkImageZoomProps {
  artwork: any;
}

export function ArtworkImageZoom({ artwork }: ArtworkImageZoomProps) {
  const [open, setOpen] = useState(false);

  if (!artwork.image) return null;

  const largeImageUrl = urlForImage(artwork.image.asset).width(2000).url();

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="flex">
          <div
            className="min-w-0 hover:shadow-medium transition-shadow duration-200"
            style={{ flex: '0 0 100%' }}
            onClick={() => setOpen(true)}
          >
            <SanityImage
              image={artwork.image}
              className="max-h-[32rem] cursor-pointer object-contain"
              width={800}
            />
            <FullscreenIcon className="mt-2 h-10 w-10 cursor-pointer text-muted-foreground hover:text-white" />
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="h-full max-w-none p-0">
            <DialogHeader className="pt-2 z-50 h-20 bg-white p-4 dark:bg-neutral-900 sm:p-4 sm:text-left">
              <DialogTitle className="mt-1 px-2 text-base font-semibold sm:px-0 sm:text-2xl">
                {artwork.title}
              </DialogTitle>
            </DialogHeader>
            <div className="h-full w-full overflow-y-scroll">
              <OpenSeaDragonViewer image={largeImageUrl} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
