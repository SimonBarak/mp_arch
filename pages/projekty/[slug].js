import { Layout } from "../../components/Layout";
import { useState } from "react";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import Gallery from "../../components/Gallery";
import TableRow from "../../components/TableRow";
import Map from "../../components/Mapbox";
import Hero from "../../components/hero";
import Modal from "../../components/Modal.js";
import { CldImage } from "next-cloudinary";

export default function Project(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const { pins } = props;
  const { title, images, description, subtitle } = data.project;
  const table = data.project;

  const [slide, setSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (index) => {
    setIsOpen(true);
    setSlide(index);
  };

  return (
    <Layout>
      <div className={isOpen ? "menu-is-open" : ""}>
        <Hero title={title} subtitle={subtitle} />
        <section className="pb-16 lg:pb-28">
          <div className="bg-gray-200 container mx-auto">
            <CldImage
              width={1600}
              height={1000}
              crop="fill"
              src={images[0]}
              size="100w"
              alt={title}
            />
          </div>

          <div className="container grid md:grid-cols-4 gap-5 m-5 mx-auto">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  loading="lazy"
                  src={image}
                  alt="Obrazek projektu"
                  onClick={() => openModal(index)}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
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
        <Map items={pins} />

      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        >
          <div className="modal-container">
            <Gallery images={images} currentSlide={slide} />
            <div className="absolute right-0">
              <button
                id="main-nav__button"
                className={`nav-hamburger bg-white ${isOpen ? "open" : "closed"}`}
                onClick={closeModal}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.projectConnection();
  const paths = data.projectConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.project({
    relativePath: ctx.params.slug + ".md",
  });

  const pin = {
    coordinates: [data.project.longitude, data.project.latitude],
    title: data.project.title,
    slug: "/projekty/" + data.project._sys.filename,
    image: data.project.images[0] || "",
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
