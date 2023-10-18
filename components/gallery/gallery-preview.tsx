import { usePreview } from "../../lib/sanity";

import Gallery from "./gallery";
import { getGalleryQuery } from "../../lib/queries/gallery";

export default function GalleryPreview({ gallery }) {
  const galleryQuery = getGalleryQuery(process.env.DEFAULT_GALLERY_ID);

  const previewGallery = usePreview(null, galleryQuery);
  return <Gallery gallery={previewGallery ?? gallery} preview />;
}
