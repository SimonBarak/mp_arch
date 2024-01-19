import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
import { Page } from "../components/Page";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const description = data.about.description;

  const title = data.about.title;

  const members = [
    { name: "TODO", position: "", image: "" },
    { name: "TODO", position: "", image: "" },
  ];

  console.log(data.about.member);

  return (
    <Layout>
      <Page>
        <section className="pb-12">
          <div className="max-w-2xl mx-auto text-2xl px-4 text-block">
            {title}
          </div>
        </section>
        <section className="pb-16">
          <div className="max-w-2xl mx-auto px-4 grid grid-cols-2 gap-5">
            {data.about.member.map((member) => (
              <div className="">
                <div>
                  <img
                    loading="lazy"
                    src={member.photo}
                    alt={member.name}
                    className="max-h-70 object-contain"
                  />
                </div>

                <div>
                  <p className="py-5 pr-2">{member.name},</p>
                  <p className="pb-2 text-gray-500">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-2xl px-4 mx-auto text-xl">
            <div className="border-2 rounded border-gray-400">
              <a
                className="flex px-5 py-3 border-b-2 border-gray-400 hover:bg-gray-300"
                href="{{site.baseurl}}/zivotopis.html"
              >
                <div className="flex-grow">Životopisy</div>
                <div>⟶</div>
              </a>

              <a
                className="flex px-5 py-3 border-b-2 border-gray-400 hover:bg-gray-300"
                href="{{site.baseurl}}/oceneni.html"
              >
                <div className="flex-grow">Ocenění</div>
                <div>⟶</div>
              </a>

              <a
                className="flex px-5 py-3 hover:bg-gray-300"
                href="{{site.baseurl}}/spoluprace.html"
              >
                <div className="flex-grow">Spolupráce</div>
                <div>⟶</div>
              </a>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-2xl mx-auto text-lg px-4 text-block">
            {description}
          </div>
        </section>
      </Page>
    </Layout>
  );
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.about({
    relativePath: `about.md`,
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
