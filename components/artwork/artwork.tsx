import ArtworkImage from '../image/artwork-image';
import ArtworkBody from './artwork-body';
import ArtworkHeader from './artwork-header';

export default function Artwork({ artwork, preview = false }) {
  const slug = artwork?.slug;

  return (
    <article>
      <div className="flex min-h-screen gap-8">
        <ArtworkImage title={artwork.title} image={artwork.image} priority />
        <div className="">
          <ArtworkHeader
            title={artwork.title}
            formattedDate={artwork.formattedDate}
            primaryConstituent={artwork.primaryConstituent}
          />
          <ArtworkBody description={artwork.description} />
        </div>
      </div>
    </article>
  );
}
