import { Layout } from "../../components/Layout.js";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client.js";
import BooksEntries from "../../components/BooksEntries.js";

export default function Books(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const type = "books";
  const itemsList = data.publicationConnection.edges.map((item) => { return { title: item.node.title, subtitle: item.node.subtitle, slug: `/${type}/${item.node._sys.filename}`, image: item.node.images[0] } });

  return (
    <Layout>
      <BooksEntries type="publications" itemsList={itemsList} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.publicationConnection();

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
