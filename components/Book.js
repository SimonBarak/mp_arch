import React from "react";
import Link from "next/link";

const Book = ({ slug, image, title }) => {
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
        <p className="h-16">{title}</p>
      </div>
    </Link>
  );
};

export default Book;
