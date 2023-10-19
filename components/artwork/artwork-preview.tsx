import { artworkQuery } from '../../lib/queries/artwork';
import { usePreview } from '../../lib/sanity';
import Artwork from './artwork';

export default function ArtworkPreview({ artwork }) {
  const slug = artwork?.slug;
  const previewData = usePreview(null, artworkQuery, { slug });
  return <Artwork artwork={previewData ?? artwork} preview />;
}
