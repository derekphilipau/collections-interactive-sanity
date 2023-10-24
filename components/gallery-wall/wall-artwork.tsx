import { PortableText } from '@portabletext/react';

import { portableTextComponents } from '@/components/sanity/portableTextComponents';
import AiWarning from '../ai-warning';
import Avatar from '../constituent/avatar';
import SanityImage from '../image/sanity-image';
import WallArtworkConstituent from './wall-artwork-constituent';

export default function WallArtwork({ artwork, preview = false }) {
  const slug = artwork?.slug;

  return (
    <div className="w-full">
      <div className="flex justify-center w-full">
        <div className="w-3/4">
          <SanityImage image={artwork.image} />
          {artwork.imageCopyright && (
            <div className="mt-2 text-base text-muted-foreground italic">
              {artwork.imageCopyright}
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-none mb-6">
            {artwork.title}
          </h1>
          <div className="mb-6 text-4xl">{artwork.formattedDate}</div>
          <div className="">
            {artwork.primaryConstituent && (
              <Avatar constituent={artwork.primaryConstituent} />
            )}
          </div>
          {artwork.medium && (
            <div className="mt-6 text-xl text-neutral-400">
              Medium: {artwork.medium}
            </div>
          )}
          {artwork.dimensions && (
            <div className="mt-2 text-xl text-neutral-400">
              Dimensions: {artwork.dimensions}
            </div>
          )}
        </div>
        <div className="mt-6 text-xl markdown">
          <PortableText
            value={artwork.description}
            components={portableTextComponents}
          />
          <AiWarning />
        </div>
      </div>
      <div className="mt-12 ">
        <WallArtworkConstituent constituent={artwork.primaryConstituent} />
      </div>
    </div>
  );
}
