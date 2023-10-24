import type { Constituent } from '@/types';
import { PortableText } from '@portabletext/react';

import { getTranslation } from '@/lib/utils';
import AiWarning from '../ai-warning';
import SanityImage from '../image/sanity-image';
import { portableTextComponents } from '../sanity/portableTextComponents';

interface ConstituentProps {
  constituent: Constituent;
  lang: string;
}

export default function Constituent({ constituent, lang }: ConstituentProps) {
  return (
    <div className="">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight md:leading-none mb-12 text-center md:text-left">
        {lang === 'en' ? 'About the Artist' : 'Sobre el Artista'}
      </h2>
      <div className="flex items-start gap-12">
        <div className="w-[20rem] min-w-[20rem]">
          <SanityImage image={constituent.image} />
        </div>
        <div>
          <div className="">
            <div className="text-4xl font-bold">
              {getTranslation(constituent.name, lang)}
            </div>
            <div className="text-xl font-light">
              {getTranslation(constituent.bio, lang)}
            </div>
            <div className="mt-4 text-xl markdown">
              <PortableText
                value={getTranslation(constituent.content, lang)}
                components={portableTextComponents}
              />
              <AiWarning lang={lang} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl"></div>
    </div>
  );
}
