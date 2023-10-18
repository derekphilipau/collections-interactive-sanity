import { getGalleryQuery } from "../lib/queries/gallery";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import Gallery from "../components/gallery/gallery";

const GalleryPreview = lazy(
  () => import("../components/gallery/gallery-preview")
);

export default function IndexPage({ gallery, preview }) {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <GalleryPreview gallery={gallery} />
      </PreviewSuspense>
    );
  }

  return <Gallery gallery={gallery} />;
}

export async function getStaticProps({ preview = false }) {
  const galleryQuery = getGalleryQuery(process.env.DEFAULT_GALLERY_ID);

  const gallery = await getClient(preview).fetch(galleryQuery);

  return {
    props: { gallery, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
