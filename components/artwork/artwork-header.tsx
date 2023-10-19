import ArtistAvatar from '../artist-avatar';

interface ArtworkHeaderProps {
  title: string;
  formattedDate: string;
  primaryConstituent: any;
}

export default function ArtworkHeader({
  title,
  formattedDate,
  primaryConstituent,
}: ArtworkHeaderProps) {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-none mb-6 text-center md:text-left">
          {title}
        </h1>
        <div className="mb-6 text-4xl">{formattedDate}</div>
        <div className="mb-6">
          {primaryConstituent && (
            <ArtistAvatar
              name={primaryConstituent.name}
              bio={primaryConstituent.bio}
              image={primaryConstituent.image}
            />
          )}
        </div>
      </div>
    </>
  );
}
