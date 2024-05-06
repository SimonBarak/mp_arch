import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import ProjectEntries from "../../components/ProjectEntries.js";

export default function Realizations(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const items = data.realizations.list.map((x) => x.item);

  const itemsList = items.map((item) => {
    return {
      title: item.title ?? "Název není vyplněn",
      year: item.year,
      subtitle: item.subtitle,
      slug: `/realizace/${item._sys.filename}`,
      image: item.images[0],
    };
  });

  // itemsList.forEach((item) => {
  //   console.log(item);
  // });

  return (
    <Layout>
      <ProjectEntries type="realisations" itemsList={itemsList} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  // const { data, query, variables } = await client.queries.realisationConnection(
  //   {
  //     sort: "year",
  //   }
  // );

  const { data, query, variables } = await client.queries.realizations({
    relativePath: "index.md",
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
