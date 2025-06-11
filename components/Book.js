import React from "react";
import Link from "next/link";

const Book = ({ slug, image, title, year }) => {
  const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="grid-item ">
      <div className="item-contect p-4 md:p-0">
        <div className="flex items-center justify-center mb-8">
          <Link href={`${slug}`} className="block">
            <div className="book-mockup">
              <img
                loading="lazy"
                className="w-auto overflow-hidden shadow-lg h-72"
                style={{ boxShadow: "-5px 1px 12px 3px rgba(0, 0, 0, 0.37)" }}
                src={`${image}`}
                alt={`M&P architekti, books`}
              />
            </div>
          </Link>
        </div>
        <div className="h-20">
          <p>{title}</p>
          <p className="text-gray-500">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
