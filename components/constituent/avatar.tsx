import Image from 'next/image';
import type { Constituent } from '@/types';

import { urlForImage } from '@/lib/sanity/image';

interface AvatarProps {
  constituent: Constituent;
}

export default function Avatar({ constituent }: AvatarProps) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={
            constituent.image?.asset?._ref
              ? urlForImage(constituent.image).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={constituent.name}
        />
      </div>
      <div className="text-xl">
        <div className="font-bold">{constituent.name}</div>
        <div className="font-light">{constituent.bio}</div>
      </div>
    </div>
  );
}
