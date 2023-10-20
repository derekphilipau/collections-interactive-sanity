import Constituent from '../constituent/constituent';
import { ArtworkImageZoom } from '../image/artwork-image-zoom';
import SanityImage from '../image/sanity-image';
import ArtworkBody from './artwork-body';
import ArtworkHeader from './artwork-header';

export default function Artwork({ artwork, preview = false }) {
  const slug = artwork?.slug;

  return (
    <article className="">
      <div className="flex items-start gap-8 p-8">
        <div className="w-[20rem] min-w-[20rem]">
          <ArtworkImageZoom artwork={artwork} />
        </div>
        <div className="">
          <ArtworkHeader
            title={artwork.title}
            formattedDate={artwork.formattedDate}
            primaryConstituent={artwork.primaryConstituent}
          />
          <ArtworkBody description={artwork.description} />
        </div>
      </div>
      <div className="mt-12 px-8 pt-12 pb-20 bg-neutral-900">
        <Constituent constituent={artwork.primaryConstituent} />
      </div>
    </article>
  );
}
