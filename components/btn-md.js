import React from "react";

const BtnMd = ({ content }) => {
  return (
    <button
      className={`py-2 px-4 mb-2 mr-2 bg-gray-100 hover:bg-blue-200 rounded-lg transition`}
    >
      {content}
    </button>
  );
};

export default BtnMd;
