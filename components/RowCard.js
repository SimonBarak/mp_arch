import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const RowCard = ({ title = "", source = "", link, image = "", year = "" }) => {
  return (
    <Link href={link}>
      <div
        className="max-w-lg w-full flex flex-col bg-white rounded-lg border-2 border-gray-300
          hover:border-blue-300 overflow-hidden cursor-pointer"
      >
        <div className="">
          <CldImage
            src={image} // Replace with the path to your image
            alt="Image"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <div className="p-4 md:p-6 flex flex-col justify-between">
          <h2 className="md:text-xl mb-2 lg:text-xl">{title}</h2>
          <div className="text-gray-500 md:text-md">
            <p className="mb-2">{source}</p>
            <p className="">{year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RowCard;
