import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const RowCard = ({ title, source, link, image, year }) => {
  return (
    <Link href={"/"}>
      <div
        className="flex bg-white rounded-lg border-2 border-gray-300
          hover:border-blue-300  overflow-hidden cursor-pointer"
      >
        {/* Left side with text */}
        <div className="w-3/5 p-6 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <div className="text-gray-500 md:text-md">
            <p className="mb-2">{source}</p>
            <p className="">{year}</p>
          </div>
        </div>

        {/* Right side with image */}
        <div className="w-2/5">
          <CldImage
            src={image} // Replace with the path to your image
            alt="Image"
            width={600}
            height={850}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default RowCard;
