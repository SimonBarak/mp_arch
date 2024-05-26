import { Layout } from "../../components/Layout.js";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client.js";
import ProjectEntries from "../../components/ProjectEntries.js";

export default function Projekty(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const type = "projects";

  const items = data.projects.list.map((x) => x.item);

  const itemsList = items.map((item) => {
    return {
      title: item.title ?? "Název není vyplněn",
      year: item.year,
      subtitle: item.subtitle,
      slug: `/projekty/${item._sys.filename}`,
      image: item.images[0],
    };
  });

  return (
    <Layout>
      <ProjectEntries type={type} itemsList={itemsList} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  // const { data, query, variables } = await client.queries.projectConnection({
  //   sort: "year",
  // });

  const { data, query, variables } = await client.queries.projects({
    relativePath: "index.md",
  });

  // const { data, query, variables } =
  //   await client.queries.project_viewConnection({
  //     sort: "year",
  //   });

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
