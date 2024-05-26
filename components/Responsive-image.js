import React from "react";

const ResponsiveImage = ({ src, alt, height }) => {
  // Base URL for images, assuming a structured file naming convention
  const srcBase = src;

  // Responsive images paths
  const srcSet = `
        ${srcBase} 480w,
        ${srcBase} 768w,
        ${srcBase} 1024w,
        ${srcBase} 1440w
    `;

  return (
    <img
      src={`${srcBase}`} // Default src to large when srcSet is not supported
      srcSet={srcSet}
      sizes="(max-width: 480px) 480px,
                   (max-width: 768px) 768px,
                   (max-width: 1024px) 1024px,
                   1440px"
      alt={alt}
      style={{ height: height, width: "100%", objectFit: "contain" }}
    />
  );
};

export default ResponsiveImage;
