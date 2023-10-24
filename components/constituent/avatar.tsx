import Image from 'next/image';
import type { Constituent } from '@/types';

import { urlForImage } from '@/lib/sanity/image';
import { getTranslation } from '@/lib/utils';

interface AvatarProps {
  constituent: Constituent;
  lang: string;
}

export default function Avatar({ constituent, lang }: AvatarProps) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={
            constituent.image?.asset?._ref
              ? urlForImage(constituent.image)
                  .height(96)
                  .width(96)
                  .fit('crop')
                  .url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={getTranslation(constituent.name, lang)}
        />
      </div>
      <div className="text-xl">
        <div className="font-bold">
          {getTranslation(constituent.name, lang)}
        </div>
        <div className="font-light">
          {getTranslation(constituent.bio, lang)}
        </div>
      </div>
    </div>
  );
}
