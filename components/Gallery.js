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
          <div className="container">
            <Image url={image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
