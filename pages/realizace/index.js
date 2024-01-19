import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import ProjectEntries from "../../components/ProjectEntries.js";

export default function Realisation(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const itemsList = data.realisationConnection.edges.map((item) => {
    return {
      title: item.node.title,
      subtitle: item.node.subtitle,
      slug: `/realizace/${item.node._sys.filename}`,
      image: item.node.images[0],
    };
  });

  return (
    <Layout>
      <ProjectEntries type="realisations" itemsList={itemsList} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.realisationConnection(
    {
      sort: "weight",
    }
  );

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
