import React from "react";
import Link from "next/link";

const EntryCard = ({ item }) => {
  return (
    <Link href={item.slug}>
      <a
        className="
                flex
                border-2
                bg-white
                border-gray-400
                hover:border-blue-300
                h-full
                rounded-md
                overflow-hidden
            "
      >
        <div className="flex-1 flex flex-col p-4 text-left">
          <h4 className="flex-1 pb-4 text-xl">{item.title}</h4>
          <div className="flex text-gray-500">
            <h5>{item.source}</h5>
            <span>&nbsp;|&nbsp;</span>
            <h6>{item.year}</h6>
          </div>
        </div>
        {/* src={`${img_url}c_thumb,h_500,w_500${item.image}`} */}
        <img
          src={`${item.image}`}
          className="article img object-cover block w-1/3 h-48"
          alt="Film od studia MP&Arch"
        />
      </a>
    </Link>
  );
};

export default EntryCard;
