import React from "react";
import Link from "next/link";

const Book = ({ slug, image, title, year }) => {
  const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const baseurl = NEXT_PUBLIC_BASE_URL;
  return (
    <Link href={slug}>
      <div>
        <img
          className="w-auto overflow-hidden shadow-lg mb-4 h-72"
          style={{ boxShadow: "-5px 1px 12px 3px rgba(0, 0, 0, 0.37)" }}
          src={`${image}`}
          alt={`M&P architekti, books`}
        />
        <div className="h-20">
          <p>{title}</p>
          <p className="text-gray-500">{year}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
