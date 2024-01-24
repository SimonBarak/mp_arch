import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const EntryCard = ({ title, slug, image, year }) => {
  return (
    <div className="entrie">
      <Link href={slug}>
        <a
          className="
          h-full
          overflow-hidden
          rounded
          bg-white border-2 border-gray-300
          hover:border-blue-300 hover:text-blue-500
          transition
          flex
          flex-col"
        >
          <div>
            <CldImage
              width={1200}
              height={700}
              crop="fill"
              src={image}
              size="100w"
              alt={title}
            />
          </div>
          <div className="py-2 px-3 min-h-20 flex flex-col justify-between h-full">
            <p className="text-lg mb-2">{title}</p>
            <p className="text-gray-500">{year}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default EntryCard;
