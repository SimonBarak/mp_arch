import React from "react";

const RowCard = ({ title, source, link, image, year }) => {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="entrie">
      <a
        className="
          flex
          h-full
          overflow-hidden
          rounded
          bg-white border-2 border-gray-300
          hover:border-blue-300 hover:text-blue-500
          transition"
        href={`${link}`}
      >
        <div className="p-5 min-h-20 flex flex-col justify-between w-2/3">
          <p className="text-xl h-full">{title}</p>
          <div className="text-md text-gray-500">
            <p className="mb-2">{source}</p>
            <p className="">{year}</p>
          </div>
        </div>
        <img
          loading="lazy"
          className="object-cover h-60 w-1/3"
          src={`${image}`}
          alt={`${title}, ${source}`}
        />
      </a>
    </div>
  );
};

export default RowCard;
