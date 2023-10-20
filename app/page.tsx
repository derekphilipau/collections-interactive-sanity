import { SanityDocument } from 'next-sanity';

import { getGalleryQuery } from '@/lib/sanity/queries/gallery';
import { sanityFetch } from '@/lib/sanity/sanityFetch';
import Gallery from '@/components/gallery/gallery';

type PageProps = {
  params: { index: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Return a list of `params` to populate the [slug] dynamic segment
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const galleryQuery = getGalleryQuery(process.env.DEFAULT_GALLERY_ID);
  // TODO: Add types extending Sanity Document:
  // const gallery = await sanityFetch<SanityDocument[]>({ query: galleryQuery });
  const gallery: any = await sanityFetch({ query: galleryQuery });

  return gallery?.artworks?.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export default async function Page({ params, searchParams }: PageProps) {
  const galleryQuery = getGalleryQuery(process.env.DEFAULT_GALLERY_ID);
  const gallery = await sanityFetch<SanityDocument[]>({ query: galleryQuery });

  return <Gallery gallery={gallery} />;
}
