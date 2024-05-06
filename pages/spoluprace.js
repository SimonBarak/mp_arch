import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
import { Page } from "../components/Page";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import { CldImage } from "next-cloudinary";
import React from "react";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const collaborations = data.about.collaborations;

  //console.log(data.about.collaborations);

  return (
    <Layout>
      <Page>
        <section className="py-12">
          <div className="max-w-lg mx-auto px-4 text-4xl">
            Děkujeme za spolupráci
          </div>
        </section>

        <section className="pb-32">
          <div className="max-w-lg mx-auto px-4">
            {collaborations.map((item) => (
              <React.Fragment key={item.name}>
                <div className="pb-6">
                  <p>{item.name}</p>
                  <p className="text-gray-500">{item.profession}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </Page>
    </Layout>
  );
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.about({
    relativePath: `about.md`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
