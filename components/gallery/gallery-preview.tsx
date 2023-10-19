import { usePreview } from '../../lib/sanity';
import { getGalleryQuery } from '../../lib/sanity/queries/gallery';
import Gallery from './gallery';

export default function GalleryPreview({ gallery }) {
  const galleryQuery = getGalleryQuery(process.env.DEFAULT_GALLERY_ID);

  const previewGallery = usePreview(null, galleryQuery);
  return <Gallery gallery={previewGallery ?? gallery} preview />;
}
