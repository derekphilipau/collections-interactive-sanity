import type { Artwork, Gallery as GalleryType } from '@/types';

import { getGalleryBySlugQuery } from '@/lib/sanity/queries/gallery';
import { sanityFetch } from '@/lib/sanity/sanityFetch';
import Gallery from '@/components/gallery/gallery';

type PageProps = {
  params: { index: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params, searchParams }: PageProps) {
  const galleryQuery = getGalleryBySlugQuery(
    process.env.DEFAULT_GALLERY_SLUG_EN
  );
  const gallery = await sanityFetch<GalleryType>({ query: galleryQuery });
  return <Gallery gallery={gallery} />;
}
