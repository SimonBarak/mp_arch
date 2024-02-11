import { Layout } from "../components/Layout";
import { Page } from "../components/Page";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const description = data.about.description;

  const title = data.about.title;

  return (
    <Layout>
      <Page>
        <section className="pb-12">
          <div className="max-w-2xl mx-auto text-2xl px-4 text-block">
            <p>
              {title.split("\\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </section>
        <section className="pb-20">
          <div className="max-w-2xl mx-auto px-4 grid grid-cols-2 gap-5">
            {data.about.member.map((member) => (
              <div className="">
                <div>
                  <CldImage
                    width={1200}
                    height={1800}
                    crop="fill"
                    src={member.photo}
                    size="50w"
                    alt={title}
                  />
                </div>

                <div>
                  <p className="pt-5 pb-2 pr-2">{member.name}</p>
                  <p className=" text-gray-500">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-2xl px-4 mx-auto text-xl">
            <div className="border-2 rounded border-gray-400">
              <Link href="/oceneni">
                <a className="flex px-5 py-3 border-b-2 border-gray-400 hover:bg-gray-300">
                  <div className="flex-grow">Ocenění</div>
                  <div>⟶</div>
                </a>
              </Link>
              <Link href="/spoluprace">
                <a className="flex px-5 py-3 hover:bg-gray-300">
                  <div className="flex-grow">Spolupráce</div>
                  <div>⟶</div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-20">

          <div className="max-w-2xl mx-auto px-4 text-block">
            <div className="max-w-2xl pb-5 text-xl">O krajinářské architektuře</div>
            {description}
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-2xl mx-auto">
            {data.about.member.map((member) => (
              <div className="mb-20" key={member.name} id={member.name}>
                <div className="max-w-60">
                  <CldImage
                    width={1200}
                    height={1800}
                    crop="fill"
                    src={member.photo}
                    size="50w"
                    alt={title}
                  />
                </div>

                <div>
                  <p className="pt-5 pb-2 text-xl pr-2">{member.name}</p>
                  <p className="pb-5">{member.position}</p>
                  <p className="pb-2 ">{member.resume}</p>
                </div>
              </div>
            ))}
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
