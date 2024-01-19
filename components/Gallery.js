import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "./Image-gallery";

const Gallery = ({ images, type = "fullscreen" }) => {
  const slidesPerView = type === "fullscreen" ? 1 : 2.33;
  return (
    <Swiper
      direction={"horizontal"}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      mousewheel={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="w-screen h-screen">
            <img
              // srcSet={`
              //   ${img_url}w_500${url} 500w,
              //   ${img_url}w_1420${url} 710w,
              //   ${img_url}w_1000${url} 1000w,
              //   ${img_url}w_1420${url} 1420w
              // `}
              src={image}
              sizes=""
              alt={`MP architekti`}
              className="w-full h-full object-contain object-center"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
