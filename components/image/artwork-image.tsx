import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { urlForImage } from '@/lib/sanity/image';

interface ArtworkImageProps {
  title: string;
  slug?: string;
  image: any;
  priority?: boolean;
}

export default function ArtworkImage({
  title,
  slug,
  image: source,
  priority,
}: ArtworkImageProps) {
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    >
      <Image
        className="w-full h-auto object-contain"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/artwork/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
