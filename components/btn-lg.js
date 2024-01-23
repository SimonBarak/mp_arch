import React from "react";
import Link from "next/link";

const BtnLg = ({ content, href, active }) => {
  return (
    <Link href={href}>
      <button
        className={`text-xl lg:text-xl py-2 px-3 lg:px-10 mb-2 mr-2  hover:bg-blue-200 rounded-lg transition ${
          active ? "bg-blue-200" : "bg-gray-100"
        }`}
      >
        {content}
      </button>
    </Link>
  );
};

export default BtnLg;
