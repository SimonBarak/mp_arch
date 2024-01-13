import React from "react";
import Link from "next/link";

const EntryCard = ({ title, subtitle, slug, image, date }) => {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

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
          {/* src={`${img_url}c_thumb,h_600,w_800${image}`} */}
          <img
            loading="lazy"
            className="w-full object-cover h-60"
            src={`${image}`}
            alt={`${title}, ${subtitle}`}
          />
          <div className="py-2 px-3 min-h-20">
            <p className="text-lg">{title}</p>
            <p className="text-lg">{subtitle}</p>
            <p className="text-lg">{date}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default EntryCard;
