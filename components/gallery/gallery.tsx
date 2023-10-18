import Layout from "../layout";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Container from "../container";
import ArtworkCard from "./artwork-card";

interface GalleryProps {
  gallery: any;
  preview?: boolean;
}

export default function Gallery({ gallery, preview = false }: GalleryProps) {
  console.log("xxx", JSON.stringify(gallery));
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          {gallery.artworks?.length > 0 &&
            gallery.artworks.map((artwork) => (
              <ArtworkCard
                title={artwork.title}
                image={artwork.image}
                formattedDate={artwork.formattedDate}
                primaryConstituent={artwork.primaryConstituent}
              />
            ))}
        </Container>
      </Layout>
    </>
  );
}
