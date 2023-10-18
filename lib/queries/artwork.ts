export const artworkFields = `
  _id,
  title,
  formattedDate,
  excerpt,
  image,
  "slug": slug.current,
  "primaryConstituent": primaryConstituent->{name, excerpt, image},
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
  "morePosts": *[_type == "artwork" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
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
