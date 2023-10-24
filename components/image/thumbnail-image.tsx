import { SanityImage as SanityImageType } from '@/types';
import cn from 'classnames';

import SanityImage from './sanity-image';

interface ThumbnailImageProps {
  title: string;
  image: SanityImageType;
}

export default function ThumbnailImage({
  title,
  image: source,
}: ThumbnailImageProps) {
  const image = source?.asset?._ref ? (
    <div className="shadow-small hover:shadow-medium transition-shadow duration-200">
      <SanityImage image={source} width={800} />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return <div className="sm:mx-0">{image}</div>;
}
