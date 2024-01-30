import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "./Image-gallery";

const Gallery = ({ images, type = "fullscreen", currentSlide }) => {
  const slidesPerView = type === "fullscreen" ? 1 : 2.33;

  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    // Handle slide change here
    console.log("Current slide index:", swiper.realIndex);
  };

  const goToSlide = (slideIndex) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(slideIndex);
      //swiperRef.current.slideTo(slideIndex);
    }
  };

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  return (
    <>
      <Swiper
        params={{ observer: true, observeParents: true }}
        ref={swiperRef} // Assign the ref to the Swiper component
        direction={"horizontal"}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        initialSlide={currentSlide} // Set the initial slide based on the currentSlide prop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-screen h-screen p-2">
              <img
                src={image}
                sizes=""
                alt={`MP architekti`}
                className="w-full h-full object-contain object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Gallery;
