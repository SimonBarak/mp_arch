import { Layout } from "../../components/Layout";
import { useState, useEffect } from "react";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import Gallery from "../../components/Gallery";
import Modal from "../../components/Modal";
import TableRow from "../../components/TableRow";
import Map from "../../components/Mapbox";
import Hero from "../../components/hero";
import Label from "../../components/Label-md";
import EntryCard from "../../components/EntryCard";
import { CldImage } from "next-cloudinary";

export default function Project(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const { pins } = props;
  const { title, images, description, subtitle, realisation } = data.project;

  const table = data.project;

  const [slide, setSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (index) => {
    setIsOpen(true);
    setSlide(index);
  };

  const heroImage = images[0];
  const galleryImages = images.slice(1);

  return (
    <Layout>
      <div className={isOpen ? "menu-is-open" : ""}>
        <Hero title={title} subtitle={subtitle} />
        <section className="pb-16 lg:pb-28">
          <div className="container mx-auto">
            <CldImage
              width={1600}
              height={1000}
              crop="fill"
              src={heroImage}
              size="100w"
              alt={title}
              className="cursor-pointer bg-gray-200"
              onClick={() => openModal(0)}
            />
          </div>

          <div className="container grid md:grid-cols-4 gap-1 md:gap-2 m-2 mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative">
                <CldImage
                  width={600}
                  height={600}
                  crop="fill"
                  src={image}
                  alt="Obrazek projektu"
                  onClick={() => openModal(index + 1)}
                  className="cursor-pointer bg-gray-200"
                  sizes="25vw"
                />
              </div>
            ))}
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
        {realisation != undefined && (
          <section className="max-w-xl mx-auto pb-20">
            <Label title={"Stavba"} />
            <EntryCard
              key={realisation.title}
              title={realisation.title}
              slug={`/realizace/${realisation._sys.filename}`}
              image={realisation.images[0]}
            />
          </section>
        )}
        <Map items={pins} />
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Gallery images={images} currentSlide={slide} />
      </Modal>
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
