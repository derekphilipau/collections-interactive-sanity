import Constituent from '../constituent/constituent';
import ArtworkImage from '../image/artwork-image';
import ArtworkBody from './artwork-body';
import ArtworkHeader from './artwork-header';

export default function Artwork({ artwork, preview = false }) {
  const slug = artwork?.slug;

  return (
    <article className="">
      <div className="flex items-start gap-8 p-8">
        <div className="w-[20rem] min-w-[20rem]">
          <ArtworkImage title={artwork.title} image={artwork.image} priority />
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
      <div className="mt-12 px-8 pt-8 pb-12 bg-neutral-900">
        <Constituent constituent={artwork.primaryConstituent} />
      </div>
    </article>
  );
}
