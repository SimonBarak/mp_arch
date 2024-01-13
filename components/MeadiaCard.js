import React from "react";

const MediaCard = ({ title, subtitle, slug, image }) => {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="entrie">
      <a
        className="
          h-full
          flex
          overflow-hidden
          rounded
          bg-white border-2 border-gray-300
          hover:border-blue-300 hover:text-blue-500
          transition"
        href={`${baseurl}${slug}`}
      >
        {/* src={`${img_url}c_thumb,h_600,w_800${image}`} */}
        <img
          loading="lazy"
          className="w-full object-cover h-60"
          src={`${image}`}
          alt={`${title}, ${subtitle}`}
        />
        <div className="py-2 px-3 h-20">
          <p className="text-lg">{title}</p>
          <p className="text-lg">{subtitle}</p>
        </div>
      </a>
    </div>
  );
};

export default MediaCard;
