import { useRouter } from "next/router";
import { urlForImage } from "../../lib/sanity";
import ErrorPage from "next/error";
import Layout from "../layout";
import Container from "../container";
import Header from "../header";
import ArtworkTitle from "./artwork-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import ArtworkHeader from "./artwork-header";
import ArtworkBody from "./artwork-body";
import SectionSeparator from "../section-separator";
import MoreStories from "../more-stories";

export default function Artwork({ data = {}, preview = false }) {
  const router = useRouter();

  const { artwork, moreArtworks } = data;
  const slug = artwork?.slug;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <ArtworkTitle>Loading…</ArtworkTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${artwork.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                {artwork.image?.asset?._ref && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(artwork.image)
                      .width(1200)
                      .height(627)
                      .fit("crop")
                      .url()}
                  />
                )}
              </Head>
              <ArtworkHeader
                title={artwork.title}
                image={artwork.image}
                date={artwork.formattedDate}
                primaryConstituent={artwork.primaryConstituent}
              />
              <ArtworkBody description={artwork.description} />
            </article>
            <SectionSeparator />
            {moreArtworks.length > 0 && <MoreStories artworks={moreArtworks} />}
          </>
        )}
      </Container>
    </Layout>
  );
}
