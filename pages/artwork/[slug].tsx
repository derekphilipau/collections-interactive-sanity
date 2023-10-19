import { lazy } from "react";
import { PreviewSuspense } from "next-sanity/preview";
import { artworkQuery, artworkSlugsQuery } from "../../lib/queries/artwork";
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from "../../lib/sanity.server";
import Artwork from "../../components/artwork/artwork";

const ArtworkPreview = lazy(
  () => import("../../components/artwork/artwork-preview")
);

export default function ArtworkPage({ preview, data }) {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <ArtworkPreview data={data} />
      </PreviewSuspense>
    );
  }

  return <Artwork data={data} />;
}

export async function getStaticProps({ params, preview = false }) {
  const { artwork, moreArtworks } = await getClient(preview).fetch(
    artworkQuery,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      preview,
      data: {
        artwork,
        moreArtworks: overlayDrafts(moreArtworks),
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(artworkSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
