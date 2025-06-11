import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const EntryCard = ({ title, slug, image, year }) => {
  return (
    <>
      <Link href={slug} className="block">
        <CldImage
          width={900}
          height={900}
          crop="fill"
          src={image}
          size="33w"
          alt={title}
          className="block bg-gray-200"
        />
      </Link>
      <div className="hidden md:block py-2 min-h-20">
        <p className="text-lg mb-2">{title}</p>
        <p className="text-gray-500">{year}</p>
      </div>
    </>
  );
};

export default EntryCard;
