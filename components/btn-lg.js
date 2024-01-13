import React from 'react';
import Link from 'next/link';


const BtnLg = ({ content, href }) => {
  return (
    <Link href={href}>
      <a className="block">
        <button
          className={`text-xl lg:text-xl py-2 px-3 lg:px-10 mb-2 mr-2 bg-gray-300 hover:bg-blue-200 rounded-lg transition`}
        >
          {content}
        </button>
      </a>
    </Link>
  );
};

export default BtnLg;
