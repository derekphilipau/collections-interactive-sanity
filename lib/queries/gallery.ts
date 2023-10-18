import { artworkFields } from "./artwork";

export const galleryFields = `
  _id,
  title,
  description,
  image,
  artworks[]->{
    ${artworkFields}
  },
`;

export function getGalleryQuery(galleryId: string) {
  return `*[_id == "${galleryId}"][0]{ ${galleryFields} }`;
}
