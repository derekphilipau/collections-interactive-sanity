import Image from 'next/image';

import { urlForImage } from '@/lib/sanity/image';

interface SanityImageProps {
  image: any;
  height?: number;
  width?: number;
  className?: string;
}

export default function SanityImage({
  image,
  height,
  width,
  className = 'relative',
}: SanityImageProps) {
  if (!image?.asset) {
    return null;
  }

  let src: string;
  if (height && width) {
    src = urlForImage(image.asset).height(height).width(width).url();
  } else if (height) {
    src = urlForImage(image.asset).height(height).url();
  } else if (width) {
    src = urlForImage(image.asset).width(width).url();
  } else {
    src = urlForImage(image.asset).url();
  }

  return (
    <figure className={className}>
      <Image
        className="w-full h-auto object-contain"
        width={0}
        height={0}
        alt={image.alt}
        src={src}
        sizes="100vw"
      />
      {image.caption && (
        <figcaption className="italic text-muted-foreground mt-2">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
