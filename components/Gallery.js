import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = ({ images, type = "fullscreen", currentSlide }) => {
  const slidesPerView = type === "fullscreen" ? 1 : 2.33;

  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        params={{ observer: true, observeParents: true }}
        ref={swiperRef} // Assign the ref to the Swiper component
        direction={"horizontal"}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        mousewheel={true}
        modules={[Pagination]}
        initialSlide={currentSlide} // Set the initial slide based on the currentSlide prop
        loop={true}
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

        {images.length > 1 && (
          <>
            <div class="swiper-next swiper-button-next outline-none absolute inset-y-0 right-0 bottom-0 z-10 flex justify-center items-center">
              <button
                class="text-4xl px-4 text-gray-700 "
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <span class="arrow hover:text-blue-500"> ⟶ </span>
              </button>
            </div>

            <div className="swiper-prev  swiper-button-next outline-none absolute inset-y-0 left-0 bottom-0 z-10 flex justify-center items-center">
              <button
                class="text-4xl px-4 text-gray-700 "
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <span class="arrow hover:text-blue-500"> ⟵ </span>
              </button>
            </div>
          </>
        )}
      </Swiper>
    </>
  );
};

export default Gallery;
