import type { InstalledArtwork } from '@/types';

import { getTranslation } from '@/lib/utils';
import ThumbnailImage from '../image/thumbnail-image';

export function InstalledArtworkCard({
  installedArtwork,
  lang,
  onImageClick,
}: {
  installedArtwork: any;
  lang: string;
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
        title={getTranslation(installedArtwork.artwork.title, lang)}
        image={installedArtwork.artwork.image}
      />
    </div>
  );
}
