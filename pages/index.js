import { Layout } from "../components/Layout";
import { client } from "../tina/__generated__/client";
import GalleryProjects from "../components/GalleryProjects";
import Map from "../components/Mapbox";
import PostsSection from "../components/PostsSection";
import AwardsSection from "../components/AwardsSection";
import BooksSection from "../components/BooksSection";
import NewsSection from "../components/NewsSection";
import MovieSection from "../components/MovieSection";
import BtnXl from "../components/btn-xl";
import Label from "../components/Label-md";
import Image from "../components/Image-hero";

export default function Home(props) {
  const { realisations, books, movies, publications, pins, news } = props;

  return (
    <Layout>
      <section className="h-half flex items-center">
        <div className="max-w-2xl mx-auto text-gray-700 px-4">
          <h1 className="text-2xl lg:text-4xl mb-8">
            Konkrétní místo je vždy základem
            <br /> naší tvorby.
          </h1>
          <div className="max-w-xl text-gray-700 text-xl">
            Opakovaně se pokoušíme přečíst prostor, nalézat významy, neničit,
            citlivě zacházet. Jsme architekti, kteří se prioritně věnují
            krajinářské architektuře.
          </div>
        </div>
      </section>
      <section>
        {/* <div className="container mx-auto">
          <Label title={"Stavby"} />
        </div> */}
        {/* <GalleryProjects items={realisations} /> */}
        <div className="grid grid-cols-2 gap-10">
          {realisations.map((item) => (
            <div className="" key={item.title}>
              <Image url={item.image} />
              <div className="py-5 px-3">
                <p className="text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <BtnXl url={"/realisations"} text={"Projekty"} />
      </section>
      <p className="text-gray-700 mb-4 px-4 uppercase">Mapa projektů</p>
      <Map items={pins} />
      <NewsSection items={news} />
      {/* <PostsSection /> */}

      <BooksSection items={books} title={"Kinhy"} slug={"/books"} />
      <MovieSection items={movies} />
      <BooksSection
        items={publications}
        title={"Publikace"}
        slug={"/publications"}
      />
      <AwardsSection />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });

  // GET REALISATIONS
  const realisationConnection = await client.queries.realisationConnection({
    sort: "weight",
  });

  const realisationsFetch =
    realisationConnection.data.realisationConnection.edges.map((edge) => {
      return {
        images: edge.node.images || [],
        title: edge.node.title,
        slug: "/" + edge.node._sys.filename,
      };
    });

  const projectConnection = await client.queries.projectConnection();

  const projectPins = projectConnection.data.projectConnection.edges.map(
    (edge) => {
      return {
        coordinates: [edge.node.longitude, edge.node.latitude],
        title: edge.node.title,
        slug: "/projects/" + edge.node._sys.filename,
        image: edge.node.images[0] || "",
      };
    }
  );

  const realisationPins =
    realisationConnection.data.realisationConnection.edges.map((edge) => {
      return {
        coordinates: [edge.node.longitude, edge.node.latitude],
        title: edge.node.title,
        slug: "/realisations/" + edge.node._sys.filename,
        image: "",
      };
    });

  const pins = [...realisationPins, ...projectPins];

  const realisationsWithImage = realisationsFetch.map((realisation) => {
    return {
      image: realisation.images[0] || "",
      title: realisation.title,
      slug: "/realisations/" + realisation.slug,
    };
  });
  const realisations = realisationsWithImage.slice(0, 6);

  // GET BOOKS
  const bookConnection = await client.queries.bookConnection();
  const books = bookConnection.data.bookConnection.edges
    .map((edge) => {
      return {
        title: edge.node.title,
        image: edge.node.images[0],
        slug: "/books/" + edge.node._sys.filename,
      };
    })
    .slice(0, 4);

  // GET MOVIES
  const movieConnection = await client.queries.movieConnection();
  const movies = movieConnection.data.movieConnection.edges
    .map((edge) => {
      return {
        title: edge.node.title,
        image: edge.node.images[0],
        source: edge.node.source,
        year: edge.node.year,
        slug: "/movies/" + edge.node._sys.filename,
      };
    })
    .slice(0, 4);

  // GET NEWS
  const newsConnection = await client.queries.newsConnection();
  const news = newsConnection.data.newsConnection.edges
    .map((edge) => {
      return {
        title: edge.node.title,
        image: edge.node.thumb,
        source: edge.node.source,
        year: new Date(edge.node.date).getFullYear(),
        slug: edge.node.link,
      };
    })
    .slice(0, 4);

  // GET PUBLICATIONS
  const publicationConnection = await client.queries.publicationConnection();
  const publications = publicationConnection.data.publicationConnection.edges
    .map((edge) => {
      return {
        title: edge.node.title,
        image: edge.node.images[0],
        slug: "/books/" + edge.node._sys.filename,
      };
    })
    .slice(0, 4);

  return {
    props: {
      data,
      query,
      variables,
      realisations,
      books,
      movies,
      publications,
      pins,
      news,
    },
  };
};
