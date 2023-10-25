import type { Artwork as ArtworkType } from '@/types';
import { PortableText } from '@portabletext/react';

import { getTranslation } from '@/lib/utils';
import { portableTextComponents } from '@/components/sanity/portableTextComponents';
import AiWarning from '../ai-warning';
import Avatar from '../constituent/avatar';
import Constituent from '../constituent/constituent';
import { ArtworkImageZoom } from '../image/artwork-image-zoom';

interface ArtworkProps {
  artwork: ArtworkType;
  lang: string;
}

export default function Artwork({ artwork, lang }: ArtworkProps) {
  return (
    <article className="">
      <div className="flex items-start gap-12 p-20">
        <div className="w-[20rem] min-w-[20rem]">
          <ArtworkImageZoom artwork={artwork} lang={lang} />
        </div>
        <div className="">
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-none mb-6">
              {getTranslation(artwork.title, 'en')}
            </h1>
            {lang !== 'en' &&
              getTranslation(artwork.title, lang) !==
                getTranslation(artwork.title, 'en') && (
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight md:leading-none mb-6 text-muted-foreground italic">
                  {getTranslation(artwork.title, lang)}
                </h3>
              )}
            <div className="mb-6 text-4xl">{artwork.formattedDate}</div>
            <div className="">
              {artwork.primaryConstituent && (
                <Avatar constituent={artwork.primaryConstituent} lang={lang} />
              )}
            </div>
            {artwork.medium && (
              <div className="mt-6 text-xl text-neutral-400">
                Medium: {getTranslation(artwork.medium, lang)}
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
              value={getTranslation(artwork.description, lang)}
              components={portableTextComponents}
            />
            <AiWarning lang={lang} />
          </div>
        </div>
      </div>
      <div className="mt-12 p-20 bg-neutral-900">
        <Constituent constituent={artwork.primaryConstituent} lang={lang} />
      </div>
    </article>
  );
}
