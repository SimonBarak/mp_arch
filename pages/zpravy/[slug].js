import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import RowCard from "../../components/RowCard";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const item = data.news;
  console.log(data);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto pb-20 px-5 my-60">
        <div className="flex justify-center">
          <RowCard
            key={item.slug}
            title={item.title}
            source={item.source}
            link={item.link}
            image={item.thumb}
            year={item.year}
          />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.newsConnection();
  const paths = data.newsConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.news({
    relativePath: ctx.params.slug + ".yaml",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
