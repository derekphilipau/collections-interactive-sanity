import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface ArtistAvatarProps {
  name: string;
  image: any;
  bio: string;
}

export default function ArtistAvatar({ name, image, bio }: ArtistAvatarProps) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={
            image?.asset?._ref
              ? urlForImage(image).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={name}
        />
      </div>
      <div className="text-xl">
        <div className="font-bold">{name}</div>
        <div className="font-light">{bio}</div>
      </div>
    </div>
  );
}
