import React from "react";
import Link from "next/link";

const BtnXl = ({ url = "/", text = "Text is missing" }) => {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <Link href={url}>
        <a className="text-xl flex px-4 py-4 rounded btn-1 hover:bg-blue-200 transition">
          <div className="flex-grow">{text}</div>
          <div>⟶</div>
        </a>
      </Link>
    </div>
  );
};

export default BtnXl;
