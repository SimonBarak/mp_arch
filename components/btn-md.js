import React from "react";

const BtnMd = ({ content, onClick, isSelected }) => {
  return (
    <button
      className={`py-2 px-4 mb-2 mr-2 text-sm rounded-lg transition ${
        isSelected ? "bg-blue-200" : "bg-gray-100"
      }`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default BtnMd;
