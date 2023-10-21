export const artworkFields = `
  _id,
  title,
  formattedDate,
  excerpt,
  description,
  image,
  imageCopyright,
  medium,
  dimensions,
  "slug": slug.current,
  primaryConstituent->,
`;

export const indexQuery = `
*[_type == "artwork"] | order(date desc, _updatedAt desc) {
  ${artworkFields}
}`;

export const artworkQuery = `
{
  "artwork": *[_type == "artwork" && slug.current == $slug] | order(_updatedAt desc) [0] {
    description,
    ${artworkFields}
  },
  "moreArtworks": *[_type == "artwork" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    description,
    ${artworkFields}
  }
}`;

export const artworkSlugsQuery = `
*[_type == "artwork" && defined(slug.current)][].slug.current
`;

export const artworkBySlugQuery = `
*[_type == "artwork" && slug.current == $slug][0] {
  ${artworkFields}
}
`;
