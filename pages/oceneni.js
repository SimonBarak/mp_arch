import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";

export default function Home(props) {
  // data passes through in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const awardsByYear = {};

  data.award.awards.forEach((award) => {
    const year = award.year;
    if (!awardsByYear[year]) {
      awardsByYear[year] = [];
    }
    awardsByYear[year].push(award);
  });

  console.log(awardsByYear);

  return (
    <Layout>
      <section class="pb-32">
        <div class="max-w-xl mx-auto px-4">
          {/* Render awards by year */}
          {Object.entries(awardsByYear).map(([year, awards]) => (
            <div key={year}>
              <h2>{year}</h2>
              <ul>
                {awards.map((award) => (
                  <li key={award.id}>{award.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.award({
    relativePath: `awards.yaml`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
