import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import EntryCard from "../../components/EntryCard";
import Gallery from "../../components/Gallery";
import TableRow from "../../components/TableRow";
import Map from "../../components/Mapbox";
import Label from "../../components/Label-md";
import RowCard from "../../components/RowCard.js";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { pins } = props;

  const { images, description } = data.realisation;
  const table = data.realisation;
  const project = data.realisation.project;
  const news = data.realisation?.testnews.map((x) => x.news);

  console.log();

  return (
    <Layout>
      <section className="pb-16 lg:pb-24">
        {images && images?.length > 0 ? (
          <Gallery images={images} />
        ) : (
          <div>No images :(</div>
        )}
      </section>
      <section className="pb-16">
        <div className="max-w-xl mx-auto text-lg px-5">{description}</div>
      </section>
      <section className="pb-16">
        <table className="max-w-xl mx-auto px-5 align-top table-auto w-full text-lg">
          <tbody>
            <TableRow title="Název" value={table.title} />
            <TableRow title="Lokace" value={table.location} />
            <TableRow title="Cena" value={table.price} />
            <TableRow title="Rozloha" value={table.size} />
            <TableRow title="Investor" value={table.investor} />
            <TableRow title="Rok" value={table.year} />
            <TableRow title="Autoři" value={table.authors} />
            <TableRow title="Spolupráce" value={table.collaborations} />
            <TableRow title="Režisér" value={table.director} />
            <TableRow title="Vydavatel" value={table.publisher} />
            <TableRow title="ISBN" value={table.isbn} />
          </tbody>
        </table>
      </section>

      {project != null && (
        <section className="max-w-xl px-5 mx-auto pb-16">
          <Label title={"Návrh"} />
          <EntryCard
            key={project.slug}
            title={project.title}
            subtitle={project.subtitle}
            slug={"/"}
            image={project.images[0]}
          />
        </section>
      )}

      {news != null && (
        <section className="max-w-xl px-5 mx-auto pb-16">
          <Label title={"Ve zprávách"} />
          <div className="grid grid-cols-1 gap-8 items-stretch">
            <RowCard
              key={news.slug}
              title={news.title}
              source={news.source}
              link={news.link}
              image={news.thumb}
              date={"2013"}
            />
          </div>
        </section>
      )}

      <Map items={pins} />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.realisationConnection();
  const paths = data.realisationConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.realisation({
    relativePath: ctx.params.slug + ".md",
  });

  const pin = {
    coordinates: [data.realisation.longitude, data.realisation.latitude],
    title: data.realisation.title,
    slug: "/realisations/" + data.realisation._sys.filename,
    image: data.realisation.images[0] || "",
  };

  return {
    props: {
      data,
      query,
      variables,
      pins: [pin],
    },
  };
};
