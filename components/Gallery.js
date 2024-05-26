import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = ({ images, type = "fullscreen", currentSlide }) => {
  const slidesPerView = type === "fullscreen" ? 1 : 2.33;

  const swiperRef = useRef(null);

  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <Swiper
        params={{ observer: true, observeParents: true }}
        ref={swiperRef} // Assign the ref to the Swiper component
        direction={"horizontal"}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        mousewheel={true}
        modules={[Pagination, Zoom]}
        initialSlide={currentSlide} // Set the initial slide based on the currentSlide prop
        loop={true}
        zoom={true}
        onZoom={(e) => console.log(e)}
        zoomChange={(e) => console.log(e)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container h-screen w-screen">
              <img
                src={image}
                sizes=""
                alt={`MP architekti`}
                className="w-full h-full object-contain object-center p-5 cursor-zoom-in"
                // onClick={toggleZoom}
              />
            </div>
          </SwiperSlide>
        ))}

        {images.length > 1 && (
          <>
            <div class="swiper-next swiper-button-next outline-none absolute inset-y-0 right-0 bottom-0 z-10 flex justify-center items-center">
              <button
                class="text-4xl mx-5 px-2 py-4 text-gray-700 bg-white rounded"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <span class="arrow"> ⟶ </span>
              </button>
            </div>

            <div className="swiper-prev  swiper-button-next outline-none absolute inset-y-0 left-0 bottom-0 z-10 flex justify-center items-center">
              <button
                class="text-4xl mx-5 px-2 py-4 text-gray-700 bg-white rounded"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <span class="arrow"> ⟵ </span>
              </button>
            </div>
          </>
        )}
      </Swiper>
    </>
  );
};

export default Gallery;
