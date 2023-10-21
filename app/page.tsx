import type { Gallery as GalleryType, Artwork } from '@/types';

import { getGalleryQuery } from '@/lib/sanity/queries/gallery';
import { sanityFetch } from '@/lib/sanity/sanityFetch';
import Gallery from '@/components/gallery/gallery';

type PageProps = {
  params: { index: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params, searchParams }: PageProps) {
  const galleryQuery = getGalleryQuery(process.env.DEFAULT_GALLERY_ID);
  const gallery = await sanityFetch<GalleryType>({ query: galleryQuery });

  return <Gallery gallery={gallery} />;
}
