import ArtistAvatar from "../artist-avatar";
import ArtworkImage from "../image/artwork-image";
import ArtworkTitle from "../artwork/artwork-title";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
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
  /*
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
      */
  return (
    <div className="mb-8">
      <Link href={`/artwork/${slug}`}>
      <HoverCard>
        <HoverCardTrigger><ArtworkImage title={title} image={image} priority /></HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
        
      </Link>
    </div>
  );
}
