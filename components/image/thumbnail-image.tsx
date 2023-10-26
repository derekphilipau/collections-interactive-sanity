import { SanityImage as SanityImageType } from '@/types';

import SanityImage from './sanity-image';

interface ThumbnailImageProps {
  title: string;
  image: SanityImageType;
  width?: number;
  className?: string;
}

export default function ThumbnailImage({
  title,
  image: source,
  width = 400,
  className,
}: ThumbnailImageProps) {
  const image = source?.asset?._ref ? (
    <SanityImage image={source} width={width} className={className} />
  ) : (
    <div
      className={className}
      style={{ paddingTop: '50%', backgroundColor: '#ddd' }}
    />
  );

  return <div className="sm:mx-0">{image}</div>;
}
