import type { Constituent } from '@/types';
import { PortableText } from '@portabletext/react';

import AiWarning from '../ai-warning';
import SanityImage from '../image/sanity-image';
import { portableTextComponents } from '../sanity/portableTextComponents';

interface WallArtworkConstituentProps {
  constituent: Constituent;
}

export default function WallArtworkConstituent({
  constituent,
}: WallArtworkConstituentProps) {
  return (
    <div className="">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight md:leading-none mb-12 text-center md:text-left">
        About the Artist
      </h2>
      <div className="flex items-start w-full gap-12">
        <div className="w-48">
          <SanityImage image={constituent.image} />
        </div>
        <div className="">
          <div className="text-4xl font-bold">{constituent.name}</div>
          <div className="text-xl font-light">{constituent.bio}</div>
        </div>
      </div>
      <div className="mt-4 text-xl markdown">
        <PortableText
          value={constituent.content}
          components={portableTextComponents}
        />
        <AiWarning />
      </div>
    </div>
  );
}
