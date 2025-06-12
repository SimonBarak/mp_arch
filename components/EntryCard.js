import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const EntryCard = ({ title, slug, image, year }) => {
  return (
    <div>
      <Link href={slug} className="block">
        <CldImage
          width={800}
          height={1000}
          crop="fill"
          src={image}
          size="33w"
          alt={title}
          className="block bg-gray-200"
        />
      </Link>
      <div className="text-sm md:text-base lg:text-lg mt-2 mb-4 pr-4 min-h-20">
        <p className=" mb-2">{title}</p>
        <p className="text-gray-500">{year}</p>
      </div>
    </div>
  );
};

export default EntryCard;
