import Layout from "../layout";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import Container from "../container";
import ArtworkCard from "./artwork-card";
import { Key } from 'react';


interface GalleryProps {
  gallery: any;
  preview?: boolean;
}

export default function Gallery({ gallery, preview = false }: GalleryProps) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
          <div className="p-8 columns-1 gap-8 md:columns-2 lg:columns-3 xl:columns-4">
          {gallery.artworks?.length > 0 &&
            gallery.artworks.map((artwork: any, i: Key) => (
              <ArtworkCard
                key={i}
                title={artwork.title}
                slug={artwork.slug}
                image={artwork.image}
                formattedDate={artwork.formattedDate}
                primaryConstituent={artwork.primaryConstituent}
              />
            ))}
          </div>
      </Layout>
    </>
  );
}
