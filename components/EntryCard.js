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
          flex
          flex-col"
        >
          <div>
            <CldImage
              width={1200}
              height={1200}
              crop="fill"
              src={image}
              size="100w"
              alt={title}
              className="bg-gray-200 shadow-lg"
            />
          </div>
          <div className="hidden md:block py-2 min-h-20">
            <p className="text-lg mb-2">{title}</p>
            <p className="text-gray-500">{year}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default EntryCard;
