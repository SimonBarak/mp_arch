import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../../components/Layout";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { Page } from "../../components/Page";

const groupDataByYear = (originalData) => {
  const groupedData = {};

  originalData.forEach((item) => {
    const year = item.year;
    if (!groupedData[year]) {
      groupedData[year] = [];
    }
    groupedData[year].push(item);
  });

  return groupedData;
};

export default function Home(props) {
  // data passes through in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const itemsList = data.awardConnection.edges.map((item) => item.node);

  const groupedData = groupDataByYear(itemsList);

  const years = Object.keys(groupedData).reverse();

  return (
    <Layout>
      <Page>
        <section className="pt-32 mb-20">
          <div className="max-w-2xl 2xl:max-w-4xl mx-auto text-gray-700 px-4">
            <h1 className="text-2xl lg:text-4xl 2xl:text-6xl mb-8">Ocenění</h1>
          </div>
        </section>
        <section className="pb-32">
          <div className="max-w-xl mx-auto px-4">
            <div>
              {years.map((year) => (
                <div key={year} className="flex mb-5">
                  <h2 className="mr-5">{year}</h2>
                  <div className="w-full">
                    {groupedData[year].map((item, index) => (
                      <div
                        className="border-b border-gray-400 mb-10 "
                        key={index}
                      >
                        <div className=" mb-4">
                          {item.placement}
                        </div>
                        <div className="mb-4 text-2xl">{item.title}</div>

                        <div className="flex">

                          {item.realisation && (
                            <a
                              className="text-blue-300 hover:text-blue-400"
                              href={item.link}
                            >{item.realisation.title}</a>
                          )}
                        </div>
                        <div className="flex mb-4">

                          {item.link && (
                            <a
                              className="text-blue-300 hover:text-blue-400"
                              href={item.link}
                            >
                              Stránky ocenění
                            </a>
                          )}

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Page>
    </Layout >
  );
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.awardConnection({
    sort: "year",
  });

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
