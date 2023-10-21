import { PortableText } from '@portabletext/react';

import { portableTextComponents } from '@/components/sanity/portableTextComponents';
import AiWarning from '../ai-warning';
import Avatar from '../constituent/avatar';
import Constituent from '../constituent/constituent';
import { ArtworkImageZoom } from '../image/artwork-image-zoom';

export default function Artwork({ artwork, preview = false }) {
  const slug = artwork?.slug;

  return (
    <article className="">
      <div className="flex items-start gap-12 p-20">
        <div className="w-[20rem] min-w-[20rem]">
          <ArtworkImageZoom artwork={artwork} />
        </div>
        <div className="">
          <div className="">
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
      </div>
      <div className="mt-12 p-20 bg-neutral-900">
        <Constituent constituent={artwork.primaryConstituent} />
      </div>
    </article>
  );
}
