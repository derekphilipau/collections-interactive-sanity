import { usePreview } from '../../lib/sanity';
import { artworkQuery } from '../../lib/sanity/queries/artwork';
import Artwork from './artwork';

export default function ArtworkPreview({ artwork }) {
  const slug = artwork?.slug;
  const previewData = usePreview(null, artworkQuery, { slug });
  return <Artwork artwork={previewData ?? artwork} preview />;
}
