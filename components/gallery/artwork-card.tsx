import ArtworkImage from '../image/artwork-image';

interface ArtworkCardProps {
  title: string;
  slug: string;
  image: any;
  formattedDate: string;
  primaryConstituent: any;
}

export default function ArtworkCard({
  title,
  slug,
  image,
  formattedDate,
  primaryConstituent,
}: ArtworkCardProps) {
  return (
    <div className="mb-8 flex items-center justify-center bg-neutral-50 text-neutral-200 transition-colors hover:bg-neutral-100 hover:brightness-90 hover:text-neutral-300 dark:bg-neutral-800 dark:text-neutral-900 dark:hover:bg-neutral-700  dark:hover:text-neutral-800">
      <ArtworkImage title={title} image={image} slug={slug} priority />
    </div>
  );
}
