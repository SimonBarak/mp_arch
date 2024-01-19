import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
import { Page } from "../components/Page";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import Map from "../components/Mapbox";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { contact } = data;

  const pins = [
    {
      coordinates: [contact.studiopin.longitude, contact.studiopin.latitude],
      title: contact.street,
      slug: "/contact",
      image: "",
    },
  ];

  return (
    <Layout>
      <Page>
        <section className="pb-10">
          <div className="max-w-lg mx-auto px-4">
            <p className="text-2xl text-gray-600">M&P architekti</p>
            <p className="text-2xl text-gray-600">
              Ateliér krajinářské architektury
            </p>
          </div>
        </section>
        <section className="pb-10">
          <div className="max-w-lg mx-auto px-4">
            <h4 className="font-medium text-xs text-gray-500 border-b border-gray-500 mb-2 uppercase">
              E-mail
            </h4>

            <p className="text-lg">
              <a
                href="mailto:{{ site.data.contact.email }}"
                className="text-purple-700 hover:text-blue-800"
              >
                {contact.email}
              </a>
            </p>
          </div>
        </section>
        <section className="pb-10">
          <div className="max-w-lg mx-auto px-4">
            <h4 className="font-medium text-xs text-gray-500 border-b border-gray-500 mb-2 uppercase">
              Telefon
            </h4>

            {contact.phones.map((phone) => (
              <p className="text-lg">
                <span className="text-gray-500">{phone.person}</span>{" "}
                {phone.phone}
              </p>
            ))}
          </div>
        </section>
        <section className="pb-20">
          <div className="max-w-lg mx-auto px-4">
            <h4 className="font-medium text-xs text-gray-500 border-b border-gray-500 mb-2 uppercase">
              Adresa
            </h4>
            <ul>
              <li className="text-lg">{contact.street}</li>
              <li className="text-lg">
                {contact.city}, {contact.post_code}
              </li>
              <li className="text-lg">{contact.county}</li>
            </ul>
          </div>
        </section>
        <section className="pb-20">
          <img className="container mx-auto" src={contact.image} />
        </section>
        <Map items={pins} />
      </Page>
    </Layout>
  );
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.contact({
    relativePath: `base.yaml`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
