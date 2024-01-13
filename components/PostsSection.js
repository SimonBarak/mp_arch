import React from "react";
import Link from "next/link";
import Label from "./Label-md";

const NewsSection = () => {
  const posts = [
    {
      title:
        "Zchátralý zámek Valeč proměnil vysočinský podnikatel na luxusní hotel.",
      projectName: "_projects/obnova-areálu-zámku-valeč.md",
      thumb: "/v1576961549/archweb/DSC_0443_mtqqtd.jpg",
      source: "earch.cz",
      date: "2023-03-15 23:00:00 +0000",
      link: "https://www.earch.cz/architektura/clanek/zchatraly-zamek-valec-promenil-vysocinsky-podnikatel-na-luxusni-hotel-nyni-obec-prestavuje-starou-sokolovnu",
      copy: "",
    },
    {
      title: "Osm otázek o soužití architektů",
      projectName: [],
      thumb:
        "/v1654762690/archweb/S_PO_REALIZACI__st%C5%99%C3%ADbrn%C3%A1_linka_iilcsl_cibedd.jpg",
      source: "Architect+",
      date: "2022-06-06T22:00:00.000Z",
      link: "https://www.estate.cz/architect/osm-otazek-o-souziti-architektu/",
      copy: "",
    },
  ];

  return (
    <section id="news" className="pb-16 pt-32">
      <div className="max-w-4xl mx-auto">
        <Label title={"Aktuality"} />
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
          {posts.map((post) => (
            <Link href={post.link || post.copy || "/"} key={post.title}>
              <a
                className={`p-1 block actual-entry ${
                  !post.link && "pointer-events-none"
                }`}
                data-start={post.start}
                data-end={post.end}
                target="_blank"
              >
                <div className="bg-white rounded p-4 shadow-lg">
                  <p className="text-xl md:text-xl mb-4">{post.title}</p>
                  <p className="text-gray-700">TODO DATE</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
