import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import Link from "next/link";
import Map from "../components/Mapbox";
import AwardsSection from "../components/AwardsSection";
import BooksSection from "../components/BooksSection";
import NewsSection from "../components/NewsSection";
import MovieSection from "../components/MovieSection";
import BtnXl from "../components/btn-xl";
import Image from "../components/Image-hero";

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const allrealisations = data.page.presentation.slice(0, 4);

  const realisations = allrealisations.map((x) => x.realisation);

  const { books, movies, publications, pins, news } = props;

  return (
    <Layout>
      <section className="h-half flex items-center">
        <div className="max-w-2xl mx-auto text-gray-700 px-4">
          <h1 className="text-2xl lg:text-4xl mb-8">
            Konkrétní místo je vždy základem
            <br /> naší tvorby.
          </h1>
          <div className="max-w-xl text-gray-700 text-xl">
            {data.page.subtitle}
          </div>
        </div>
      </section>
      <section>
        {/* <div className="container mx-auto">
          <Label title={"Stavby"} />
        </div> */}
        {/* <GalleryProjects items={realisations} /> */}
        <div className="container mx-auto grid grid-cols-2 gap-5">
          {realisations.map((item) => (
            <Link href={"/realizace/" + item._sys.filename}>
              <div className="" key={item.title}>
                <Image url={item.images[0]} />
                <div className="py-5 px-3">
                  <p className="text-xl h-16">{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <BtnXl url={"/realisations"} text={"Projekty"} />
      </section>
      <p className="text-gray-700 mb-4 px-4 uppercase">Mapa projektů</p>
      <Map items={pins} />
      {/* <PostsSection /> */}
      <NewsSection items={news} />
      <AwardsSection />
      <BooksSection items={books} title={"Kinhy"} slug={"/books"} />
      <MovieSection items={movies} />
      <BooksSection
        items={publications}
        title={"Publikace"}
        slug={"/publications"}
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  function addTransformationToCloudinaryURL(url, transformation) {
    const parts = url.split("/upload/");

    if (parts.length === 2) {
      const modifiedURL = parts[0] + "/upload/" + transformation + parts[1];
      return modifiedURL;
    } else {
      // Handle invalid URL format
      return url;
    }
  }

  const { data, query, variables } = await client.queries.page({
    relativePath: "home.md",
  });

  // GET REALISATIONS
  const realisationConnection = await client.queries.realisationConnection({
    sort: "weight",
  });

  const projectConnection = await client.queries.projectConnection();

  const projectPins = projectConnection.data.projectConnection.edges.map(
    (edge) => {
      return {
        coordinates: [edge.node.longitude, edge.node.latitude],
        title: edge.node.title,
        slug: "/projekty/" + edge.node._sys.filename,
        image: addTransformationToCloudinaryURL(
          edge.node.images[0],
          "/w_400,h_200,c_scale/"
        ),
      };
    }
  );

  const realisationPins =
    realisationConnection.data.realisationConnection.edges.map((edge) => {
      return {
        coordinates: [edge.node.longitude, edge.node.latitude],
        title: edge.node.title,
        slug: "/realizace/" + edge.node._sys.filename,
        image: addTransformationToCloudinaryURL(
          edge.node.images[0],
          "/w_400,h_200,c_scale/"
        ),
      };
    });

  const pins = [...realisationPins, ...projectPins];

  // GET BOOKS
  const bookConnection = await client.queries.bookConnection();
  const books = bookConnection.data.bookConnection.edges
    .map((edge) => {
      return {
        title: edge.node.title,
        image: edge.node.images[0],
        slug: "/knihy/" + edge.node._sys.filename,
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
        slug: "/filmy/" + edge.node._sys.filename,
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
        slug: "/knihy/" + edge.node._sys.filename,
      };
    })
    .slice(0, 4);

  return {
    props: {
      data,
      query,
      variables,
      books,
      movies,
      publications,
      pins,
      news,
    },
  };
};
