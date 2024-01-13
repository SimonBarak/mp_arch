import { Layout } from "../../components/Layout.js";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client.js";
import ProjectEntries from "../../components/ProjectEntries.js";

export default function Plan(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const type = "projects";
  const itemsList = data.projectConnection.edges.map((item) => {
    return {
      title: item.node.title,
      subtitle: item.node.subtitle,
      slug: `/${type}/${item.node._sys.filename}`,
      image: item.node.images[0],
    };
  });

  return (
    <Layout>
      <ProjectEntries type={type} itemsList={itemsList} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.projectConnection();

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
