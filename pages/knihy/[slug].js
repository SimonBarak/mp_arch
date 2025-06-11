import { Layout } from "../../components/Layout";
import { useState } from "react";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import TableRow from "../../components/TableRow";
import Gallery from "../../components/Gallery";
import Modal from "../../components/Modal";
import ResponsiveImage from "../../components/Responsive-image";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { images, title, description } = data.book;
  const table = data.book;

  const [slide, setSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (index) => {
    setIsOpen(true);
    setSlide(index);
  };

  const heroImage = images[0];

  return (
    <Layout>
      <div className={isOpen ? "menu-is-open" : ""}>
        <section className="pb-16 lg:pb-24 relative">
          <div className="h-screen px-5 py-10">
            <ResponsiveImage src={heroImage} alt={title} height={"100%"} />
          </div>

          <div className="absolute w-full h-full top-0 flex justify-center items-center">
            <button
              className={`lg:text-xl py-2 px-3 lg:px-10 lg:py-4 rounded-lg transition bg-blue-100 shadow`}
              onClick={() => openModal(1)}
            >
              Prohlédnout publikaci
            </button>
          </div>
        </section>
        <section className="pb-16 px-4">
          <div className="max-w-xl mx-auto text-lg px-5">{description}</div>
        </section>
        <section className="pb-16 px-4">
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
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Gallery images={images} currentSlide={slide} />
      </Modal>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.bookConnection();
  const paths = data.bookConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.book({
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
