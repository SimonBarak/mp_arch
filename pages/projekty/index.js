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
  const itemsList = data.projectConnection.edges
    .map((item) => {
      return {
        title: item.node.title,
        year: item.node.year,
        subtitle: item.node.subtitle,
        slug: `/projekty/${item.node._sys.filename}`,
        image: item.node.images[0],
      };
    })
    .reverse();

  return (
    <Layout>
      <ProjectEntries type={type} itemsList={itemsList} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.projectConnection({
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
