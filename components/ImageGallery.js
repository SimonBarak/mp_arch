import React, { useEffect, useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGallery = ({ images, nextSlide }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleChangeIndex = (index) => {
    //setCurrentIndex(index);
  };

  // useEffect(() => {
  //   console.log("nextSlide", nextSlide);
  //   //etCurrentIndex(nextSlide);
  // }, [nextSlide]);

  const customLeftNav = (onClick, disabled) => (
    <button
      className={`image-gallery-custom-left-nav${
        disabled ? " disabled" : ""
      } h-20 w-20h-20 w-20 absolute left-0 top-0 z-10`}
      onClick={onClick}
      disabled={disabled}
    >
      A
    </button>
  );

  const customRightNav = (onClick, disabled) => (
    <button
      className={`image-gallery-custom-right-nav${
        disabled ? " disabled" : ""
      } h-20 w-20h-20 w-20 absolute right-0 top-0 z-10`}
      onClick={onClick}
      disabled={disabled}
    >
      B
    </button>
  );

  const items = images.map((image) => {
    return { original: image, thumbnail: image };
  });

  return (
    <div>
      <Gallery
        items={items}
        slideDuration={200}
        renderLeftNav={customLeftNav}
        renderRightNav={customRightNav}
        slideIndex={slideIndex}
      />
      <div>
        <p>Current Index: {slideIndex}</p>
        <button onClick={() => setSlideIndex(0)}>Go to First Slide</button>
        <button onClick={() => handleChangeIndex(images.length - 1)}>
          Go to Last Slide
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
