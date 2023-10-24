import { artworkFields } from './artwork';

export const galleryFields = `
  _id,
  title,
  description,
  image,
  artworks[]->{
    ${artworkFields}
  },
`;

export function getGalleryBySlugQuery(gallerySlug: string | undefined) {
  if (!gallerySlug) {
    return '';
  }
  return `*[_type == "gallery" && slug.en.current == "${gallerySlug}"][0]{ ${galleryFields} }`;
}
