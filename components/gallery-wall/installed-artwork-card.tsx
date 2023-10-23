import type { InstalledArtwork } from '@/types';

import ThumbnailImage from '../image/thumbnail-image';

export function InstalledArtworkCard({
  installedArtwork,
  onImageClick,
}: {
  installedArtwork: any;
  onImageClick: (installedArtwork: InstalledArtwork) => void;
}) {
  if (!installedArtwork) return null;

  const style = {
    width: `${installedArtwork.width}%`,
    top: `${installedArtwork.top}%`,
    left: `${installedArtwork.left}%`,
  };

  return (
    <div
      className="absolute drop-shadow-lg hover:outline outline-offset-4 hover:outline-1 outline-white cursor-pointer"
      style={style}
      onClick={() => onImageClick(installedArtwork)}
    >
      <ThumbnailImage
        title={installedArtwork.artwork.title}
        image={installedArtwork.artwork.image}
        slug={installedArtwork.artwork.slug}
        priority
      />
    </div>
  );
}
