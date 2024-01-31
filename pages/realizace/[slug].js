import { useState } from "react";
import { Layout } from "../../components/Layout.js";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client.js";
import EntryCard from "../../components/EntryCard.js";
import TableRow from "../../components/TableRow.js";
import Map from "../../components/Mapbox.js";
import Label from "../../components/Label-md.js";
import RowCard from "../../components/RowCard.js";
import Gallery from "../../components/Gallery.js";
import Modal from "../../components/Modal.js";
import { CldImage } from "next-cloudinary";
import Hero from "../../components/hero";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { pins } = props;

  const { images, description, title, subtitle } = data.realisation;
  const table = data.realisation;
  const project = data.realisation.project;

  const allnews = data.realisation.testnews?.map((x) => x.news);
  const news = allnews ? allnews.sort((a, b) => b.year - a.year) : null;

  const allawards = data.realisation?.awardsx?.map((x) => x.award);
  const awards = allawards ? allawards.sort((a, b) => b.year - a.year) : null;

  const [showModal, setShowModal] = useState(false);
  const [slide, setSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  console.log("HEllo");

  console.log(data.realisation.project._sys.filename);

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
        <Hero
          title={data.realisation.title}
          subtitle={data.realisation.subtitle}
        />
        <section className="pb-16 lg:pb-28">
          <div className="container mx-auto">
            <CldImage
              width={1600}
              height={1000}
              crop="fill"
              src={images[0]}
              size="100w"
              alt={title}
              className="bg-gray-200 "
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

        {description && (
          <section className=" pb-20">
            <div className="max-w-xl mx-auto text-lg">{description}</div>
          </section>
        )}
        <section className="pb-28">
          <table className="max-w-xl mx-auto px-5 align-top table-auto w-full text-lg">
            <tbody>
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

        {awards != null && (
          <section className="max-w-xl mx-auto pb-16">
            <Label title={"Ocenění projektu"} />
            <div className="grid grid-cols-1">
              {awards.map((item) => (
                <div
                  className="border-b border-gray-400 mb-4"
                  key={item?.title}
                >
                  <div className="text-gray-500 my-2">{item.placement}</div>
                  <div className="mb-2">
                    <a
                      className="inline-block hover:text-blue-400 "
                      href={item.link}
                    >
                      {item.title}, {item.year}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {project != undefined && (
          <section className="max-w-xl mx-auto pb-20">
            <Label title={"Návrh"} />
            <EntryCard
              key={project.title}
              title={project.title}
              slug={`/projekty/${project._sys.filename}`}
              image={project.images[0]}
            />
          </section>
        )}

        {news != null && (
          <section className="max-w-4xl mx-auto pb-20">
            <Label title={"Ve zprávách"} />
            <div className="grid md:grid-cols-2 gap-4">
              {news.map((item) => (
                <RowCard
                  key={item.slug}
                  title={item.title}
                  source={item.source}
                  link={item.link}
                  image={item.thumb}
                  year={new Date(item.date).getFullYear()}
                />
              ))}
            </div>
          </section>
        )}

        <section className="">
          <Map items={pins} />
        </section>
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
                className={`nav-hamburger bg-white ${
                  isOpen ? "open" : "closed"
                }`}
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
  const transformation = "/w_700,h_530,c_scale/";

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

  const { data, query, variables } = await client.queries.realisation({
    relativePath: ctx.params.slug + ".md",
  });

  const pin = {
    coordinates: [data.realisation.longitude, data.realisation.latitude],
    title: data.realisation.title,
    slug: "/realizace/" + data.realisation._sys.filename,
    image: addTransformationToCloudinaryURL(
      data.realisation.images[0],
      "/w_400,h_200,c_scale/"
    ),
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
