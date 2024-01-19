import React from "react";
import Link from "next/link";

const EntryCard = ({ title, slug, image, date }) => {
  return (
    <div className="entrie">
      <Link href={slug}>
        <a
          className="
          block
          h-full
          overflow-hidden
          rounded
          bg-white border-2 border-gray-300
          hover:border-blue-300 hover:text-blue-500
          transition"
        >
          <img
            loading="lazy"
            className="w-full object-cover h-60"
            src={`${image}`}
            alt={`${title}`}
          />
          <div className="py-2 px-3 min-h-20">
            <p className="text-lg">{title}</p>
            <p className="text-lg">{date}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default EntryCard;
