import React from "react";

function Award({ item }) {
  return (
    <div className="flex mb-5 w-96">
      <h2 className="mr-5">{item.year}</h2>
      <div className="w-full">
        <div className="border-b border-gray-400 mb-10">
          <div className="text-gray-500 mb-4">{item.placement}</div>
          <div className="mb-4">{item.title}</div>
          {item.link && (
            <a
              className="block text-blue-300 hover:text-blue-400 mb-4"
              href={item.link}
            >
              Stránky ocenění
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Award;
