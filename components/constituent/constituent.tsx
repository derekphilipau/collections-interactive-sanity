import { PortableText } from '@portabletext/react';

import SanityImage from '../image/sanity-image';
import { portableTextComponents } from '../sanity/portableTextComponents';

interface ConstituentProps {
  constituent: any;
}

export default function Constituent({ constituent }: ConstituentProps) {
  return (
    <div className="">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight md:leading-none mb-6 text-center md:text-left">
        About the Artist
      </h2>
      <div className="flex items-start gap-8">
        <div className="w-[20rem] min-w-[20rem]">
          <SanityImage image={constituent.image} />
        </div>
        <div>
          <div className="">
            <div className="text-xl font-bold">{constituent.name}</div>
            <div className="text-xl font-light">{constituent.bio}</div>
            <div className="mt-4">
              <PortableText
                value={constituent.content}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl"></div>
    </div>
  );
}
