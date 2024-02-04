import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import Map from "../components/Mapbox";
import AwardsSection from "../components/AwardsSection";
import BooksSection from "../components/BooksSection";
import NewsSection from "../components/NewsSection";
import MovieSection from "../components/MovieSection";
import BtnXl from "../components/btn-xl";
import Hero from "../components/hero";

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
      <Hero title={data.page.title} subtitle={data.page.subtitle} />
      <section>
        <div className="container-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {realisations.map((item) => (
            <Link href={"/realizace/" + item._sys.filename}>
              <a className="" key={item.title}>
                <CldImage
                  width={1200}
                  height={1200}
                  crop="fill"
                  src={item.images[0]}
                  size="50w"
                  alt={item.title}
                />
                <div className="py-5 px-3">
                  <p className="text-xl h-16">{item.title}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="mx-2">
          <BtnXl url={"/realisations"} text={"Projekty"} />
        </div>
      </section>
      <p className="text-gray-700 mb-4 px-4 uppercase">Mapa projektů</p>
      <Map items={pins} />
      <NewsSection items={news} />
      <AwardsSection />
      <BooksSection items={books} title={"Knihy"} slug={"/books"} />
      <MovieSection items={movies} />
      <BooksSection
        items={publications}
        title={"Publikace"}
        slug={"/publikace"}
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
        image: edge.node.images[0],
      };
    }
  );

  const realisationPins =
    realisationConnection.data.realisationConnection.edges.map((edge) => {
      return {
        coordinates: [edge.node.longitude, edge.node.latitude],
        title: edge.node.title,
        slug: "/realizace/" + edge.node._sys.filename,
        image: edge.node.images[0],
      };
    });

  const pins = [...realisationPins, ...projectPins];

  // GET BOOKS
  const bookConnection = await client.queries.bookConnection({ sort: "year" });
  const books = bookConnection.data.bookConnection.edges
    .map((edge) => {
      return {
        title: edge.node.title,
        year: edge.node.year,
        image: edge.node.images[0],
        slug: "/knihy/" + edge.node._sys.filename,
      };
    })
    .reverse()
    .slice(0, 4);

  // GET MOVIES
  const movieConnection = await client.queries.movieConnection({
    sort: "year",
  });
  const movies = movieConnection.data.movieConnection.edges
    .map((edge) => {
      return {
        title: edge.node.title,
        image: edge.node.images[0],
        source: edge.node.source,
        year: edge.node.year,
        link: "/filmy/" + edge.node._sys.filename,
      };
    })
    .reverse()
    .slice(0, 4);

  // GET NEWS
  const newsConnection = await client.queries.newsConnection({
    sort: "date",
  });

  const news = newsConnection.data.newsConnection.edges
    .map((edge) => {
      return {
        title: edge.node.title,
        image: edge.node.thumb,
        source: edge.node.source,
        year: new Date(edge.node.date).getFullYear(),
        link: edge.node.link,
      };
    })
    .reverse()
    .slice(0, 4);

  // GET PUBLICATIONS
  const publicationConnection = await client.queries.publicationConnection({
    sort: "year",
  });

  const publications = publicationConnection.data.publicationConnection.edges
    .map((edge) => {
      return {
        title: edge.node.title,
        image: edge.node.images[0],
        slug: "/knihy/" + edge.node._sys.filename,
        year: edge.node.year,
      };
    })
    .reverse()
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
