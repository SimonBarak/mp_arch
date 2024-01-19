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

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  //console.log(data.realisation);

  const { pins } = props;

  const { images, description, title, subtitle } = data.realisation;
  const table = data.realisation;
  const project = data.realisation.project;
  const news = data.realisation?.testnews?.map((x) => x.news);
  const awards = data.realisation?.awardsx?.map((x) => x.award);

  console.log(subtitle);

  const [showModal, setShowModal] = useState(false);

  const openModal = (url) => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Layout>
      <section className="h-half flex items-center">
        <div className="max-w-2xl mx-auto text-gray-700 px-4">
          <h1 className="text-2xl lg:text-4xl">{data.realisation.title}</h1>
          {subtitle ? (
            <div className="max-w-xl text-gray-700 text-xl mt-10">
              {subtitle}
            </div>
          ) : null}
        </div>
      </section>
      <section className="pb-16 lg:pb-28">
        <div className="w-screen h-screen mx-auto mb-5">
          <img
            src={images[0]}
            sizes=""
            alt={`${data.realisation.title}, MP architekti`}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="h-70">
            <img
              src={images[1]}
              sizes=""
              alt={`${data.realisation.title}, MP architekti`}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="h-70">
            <img
              src={images[2]}
              sizes=""
              alt={`${data.realisation.title}, MP architekti`}
              className="w-full h-full object-cover object-center"
            />
          </div>
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
              <div class="border-b border-gray-400 mb-4">
                <div class="text-gray-500 my-2">{item.placement}</div>
                <div class="mb-2">
                  <a class="inline-block hover:text-blue-400 " href={item.link}>
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
            key={project.slug}
            title={project.title}
            slug={"/"}
            image={project.images[0]}
          />
        </section>
      )}

      {news != null && (
        <section className="max-w-4xl mx-auto pb-20">
          <Label title={"Ve zprávách"} />
          <div className="grid grid-cols-2 gap-8 items-stretch">
            {news.map((item) => (
              <RowCard
                key={item?.slug}
                title={item?.title}
                source={item?.source}
                link={item?.link}
                image={item?.thumb}
                date={item?.year}
              />
            ))}
          </div>
        </section>
      )}

      {pins?.lenght > 0 && (
        <section className="">
          <Map items={pins} />
        </section>
      )}
      <div className="grid grid-cols-4 gap-5 m-5">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Modal imageUrl={image} onClose={closeModal} />
          </div>
        ))}
      </div>
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
