import { artworkFields } from './artwork';

export const galleryWallFields = `
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
  return `*[_type == "galleryWall" && slug.current == "${galleryWallSlug}"][0]{ ${galleryWallFields} }`;
}
