import { artworkFields } from './artwork';

export const galleryWallFields = `
  _id,
  title,
  description,
  image,
  installedArtworks[]{
    artwork->{
      ${artworkFields}
    },
    left,
    top,
    width,
  },
`;

export function getGalleryWallBySlugQuery(galleryWallSlug: string | undefined) {
  if (!galleryWallSlug) {
    return '';
  }
  return `*[_type == "galleryWall" && slug.en.current == "${galleryWallSlug}"][0]{ ${galleryWallFields} }`;
}
