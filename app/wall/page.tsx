import type { GalleryWall as GalleryWallType } from '@/types';

import { getGalleryWallBySlugQuery } from '@/lib/sanity/queries/galleryWall';
import { sanityFetch } from '@/lib/sanity/sanityFetch';
import GalleryWall from '@/components/gallery-wall/gallery-wall';

type PageProps = {
  params: { index: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params, searchParams }: PageProps) {
  const galleryWallQuery = getGalleryWallBySlugQuery(
    process.env.DEFAULT_GALLERY_SLUG
  );
  const galleryWall = await sanityFetch<GalleryWallType>({
    query: galleryWallQuery,
  });

  return <GalleryWall galleryWall={galleryWall} />;
}
