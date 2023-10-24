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

export interface LocalizedString {
  en?: string;
  es?: string;
}

export interface LocalizedPortableTextBlock {
  en?: PortableTextBlock;
  es?: PortableTextBlock;
}

export interface Gallery {
  _id: string;
  _type: 'gallery';
  title: LocalizedString;
  slug: LocalizedString;
  description: LocalizedPortableTextBlock;
  image: SanityImage;
  artworks: Artwork[];
}

export interface GalleryWall {
  _id?: string;
  _type?: 'gallery';
  title: LocalizedString;
  slug: LocalizedString;
  description: LocalizedPortableTextBlock;
  image: SanityImage;
  installedArtworks: InstalledArtwork[];
}

export interface InstalledArtwork {
  _id: string;
  _type: 'object';
  width: number;
  top: number;
  left: number;
  artwork: Artwork;
}

export interface Artwork {
  _id: string;
  _type: 'artwork';
  title: LocalizedString;
  description: LocalizedPortableTextBlock;
  image: SanityImage;
  imageCopyright?: string;
  medium?: LocalizedString;
  dimensions?: string;
  formattedDate: string;
  primaryConstituent: Constituent;
}

export interface Constituent {
  _id: string;
  _type: 'constituent';
  name: LocalizedString;
  bio: LocalizedString;
  content: LocalizedPortableTextBlock;
  image: SanityImage;
}
