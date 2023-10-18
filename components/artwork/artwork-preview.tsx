import { usePreview } from "../../lib/sanity";
import { artworkQuery } from "../../lib/queries/artwork";
import Artwork from "./artwork";

export default function ArtworkPreview({ data }) {
  const slug = data?.post?.slug;
  const previewData = usePreview(null, artworkQuery, { slug });
  return <Artwork data={previewData ?? data} preview />;
}
