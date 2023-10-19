import { Metadata } from 'next';
import { SanityDocument } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';

import { artworkQuery, artworkSlugsQuery } from '@/lib/sanity/queries/artwork';
import { getGalleryQuery } from '@/lib/sanity/queries/gallery';
import { sanityFetch } from '@/lib/sanity/sanityFetch';
import Artwork from '@/components/artwork/artwork';
import ArtworkPreview from '@/components/artwork/artwork-preview';

// Return a list of `params` to populate the [slug] dynamic segment
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const galleryQuery = getGalleryQuery(process.env.DEFAULT_GALLERY_ID);
  const gallery = await sanityFetch<SanityDocument[]>({ query: galleryQuery });

  return gallery?.artworks?.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const preview = false;
  const artwork = await sanityFetch<SanityDocument[]>({
    query: artworkQuery,
    params: {
      slug: params.slug,
    },
  });

  return {
    title: artwork.title,
    description: artwork.description,
    openGraph: {
      title: artwork.title || '',
      description: artwork.description,
      images: [artwork.image],
    },
  };
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }) {
  const { artwork, moreArtworks } = await sanityFetch<SanityDocument[]>({
    query: artworkQuery,
    params: {
      slug: params.slug,
    },
  });

  console.log(artwork);

  return <Artwork artwork={artwork} />;
}
