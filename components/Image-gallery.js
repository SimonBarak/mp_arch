import React from "react";

const img_url = "https://res.cloudinary.com/dhxmg9p4i/image/upload/";

const Image = ({ url, alt = "" }) => {
  return (
    <img
      loading=""
      // srcSet={`
      //   ${img_url}w_500${url} 500w,
      //   ${img_url}w_1420${url} 710w,
      //   ${img_url}w_1000${url} 1000w,
      //   ${img_url}w_1420${url} 1420w
      // `}
      src={`${url}`}
      sizes=""
      alt={`${alt}, MP architekti`}
      className="w-full h-full object-cover object-center"
    />
  );
};

export default Image;
