import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import Dadaview from "../../components/dadaview";
import Gallery from "../../components/Gallery";
import TableRow from "../../components/TableRow";
import Map from "../../components/Mapbox";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { images, description } = data.movie;
  const table = data.movie;

  return (
    <Layout>
      <section className="pb-16 lg:pb-24">
        <Gallery images={images} />
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
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.movieConnection();
  const paths = data.movieConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.movie({
    relativePath: ctx.params.slug + ".md",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
