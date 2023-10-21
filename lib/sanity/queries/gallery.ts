import { artworkFields } from './artwork';

export const galleryFields = `
  _id,
  title,
  description[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  },
  image,
  artworks[]->{
    ${artworkFields}
  },
`;

export function getGalleryBySlugQuery(gallerySlug: string | undefined) {
  if (!gallerySlug) {
    return '';
  }
  return `*[_type == "gallery" && slug.current == "${gallerySlug}"][0]{ ${galleryFields} }`;
}
