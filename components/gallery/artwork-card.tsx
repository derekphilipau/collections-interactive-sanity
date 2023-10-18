import ArtistAvatar from "../artist-avatar";
import ArtworkImage from "../image/artwork-image";
import ArtworkTitle from "../artwork/artwork-title";

interface ArtworkCardProps {
  title: string;
  image: any;
  formattedDate: string;
  primaryConstituent: any;
}

export default function ArtworkCard({
  title,
  image,
  formattedDate,
  primaryConstituent,
}: ArtworkCardProps) {
  return (
    <div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <ArtworkImage title={title} image={image} priority />
      </div>
      <div className="max-w-2xl mx-auto">
        <ArtworkTitle>test{title}</ArtworkTitle>
        <div className="mb-6">
          {primaryConstituent && (
            <ArtistAvatar
              name={primaryConstituent.name}
              excerpt={primaryConstituent.excerpt}
              image={primaryConstituent.image}
            />
          )}
        </div>
        <div className="mb-6 text-lg">{formattedDate}</div>
      </div>
    </div>
  );
}
