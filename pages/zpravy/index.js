import { Layout } from "../../components/Layout.js";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client.js";
import Label from "../../components/Label-md";
import RowCard from "../../components/RowCard.js";
import BtnMd from "../../components/btn-md";

export default function News(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const itemsList = data.newsConnection.edges
    .map((item) => {
      return {
        title: item.node.title,
        source: item.node.source,
        link: item.node.copy ? item.node.copy : item.node.link,
        image: item.node.thumb,
        year: new Date(item.node.date).getFullYear(),
      };
    })
    .reverse();

  return (
    <Layout>
      <div className="max-w-6xl mx-auto pb-20 px-5 mt-60 ">
        <h1 className="text-2xl lg:text-4xl 2xl:text-5xl mb-8 2xl:mb-10 leading-10m text-gray-700">
          M&P ve zprávách
        </h1>
        {/*<div className="mt-40 mb-8">
           <div className="flex">
            <BtnMd
              content={"Prioritně"}
              onClick={() => toggleOrder("rate")}
              isSelected={order === "rate"}
            />
            <BtnMd
              content={"Chronologicky"}
              onClick={() => toggleOrder("date")}
              isSelected={order === "date"}
            />
          </div>
        </div> */}
        <div className="grid gap-4 lg:gap-10 grid-cols-1 lg:grid-cols-2 justify-center items-center">
          {itemsList.map((item) => (
            <RowCard
              key={item.slug}
              title={item.title}
              source={item.source}
              link={item.link}
              image={item.image}
              year={item.year}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.newsConnection({
    sort: "date",
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
