import { Layout } from "../../components/Layout.js";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client.js";
import BtnMd from "../../components/btn-md.js";
import RowCard from "../../components/RowCard.js";

export default function News(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const type = "news";
  const itemsList = data.newsConnection.edges.map((item) => {
    return {
      title: item.node.title,
      source: item.node.source,
      link: item.node.link,
      image: item.node.thumb,
    };
  });

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="mt-40 mb-8">
          <div className="flex">
            <BtnMd content={"Prioritně"} />
            <BtnMd content={"Chonologicky"} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 items-stretch">
          {itemsList.map((item) => (
            <RowCard
              key={item.slug}
              title={item.title}
              source={item.source}
              link={item.link}
              image={item.image}
              date={"2013"}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.newsConnection();

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
