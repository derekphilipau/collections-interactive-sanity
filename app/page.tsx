import { SanityDocument } from 'next-sanity';

import { getGalleryQuery } from '@/lib/sanity/queries/gallery';
import { sanityFetch } from '@/lib/sanity/sanityFetch';
import Gallery from '@/components/gallery/gallery';

type Props = {
  params: { index: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params, searchParams }: Props) {
  const galleryQuery = getGalleryQuery(process.env.DEFAULT_GALLERY_ID);

  const gallery = await sanityFetch<SanityDocument[]>({ query: galleryQuery });
  return <Gallery gallery={gallery} />;
}
