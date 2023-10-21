import type {
  Asset,
  Image,
  ImageCrop,
  ImageHotspot,
  PortableTextBlock,
} from '@sanity/types';

export interface SanityImage {
  [key: string]: unknown;
  asset?: Asset;
  crop?: ImageCrop;
  hotspot?: ImageHotspot;
  alt?: string;
  caption?: string;
}

export interface Gallery {
  _id?: string;
  _type?: 'gallery';
  title: string;
  slug: string;
  description: PortableTextBlock;
  excerpt: string;
  image: SanityImage;
  artworks: Artwork[];
}

export interface Artwork {
  _id?: string;
  _type?: 'artwork';
  title: string;
  slug: string;
  description: PortableTextBlock;
  excerpt: string;
  image: SanityImage;
  medium: string;
  formattedDate: string;
  primaryConstituent: Constituent;
}

export interface Constituent {
  _id?: string;
  _type?: 'constituent';
  name: string;
  slug: string;
  bio: string;
  content: PortableTextBlock;
  image: SanityImage;
}
