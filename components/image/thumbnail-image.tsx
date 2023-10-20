import cn from 'classnames';

import SanityImage from './sanity-image';

interface ThumbnailImageProps {
  title: string;
  slug?: string;
  image: any;
  priority?: boolean;
}

export default function ThumbnailImage({
  title,
  slug,
  image: source,
  priority,
}: ThumbnailImageProps) {
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    >
      <SanityImage image={source} width={800} />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return <div className="sm:mx-0">{image}</div>;
}
