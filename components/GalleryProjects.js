import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "./Image-hero";

const GalleryProjects = ({ items, type = "3" }) => {
  const slidesPerView = type === "3" ? 3 : 1.33;

  return (
    <Swiper
      direction={"horizontal"}
      spaceBetween={2}
      slidesPerView={slidesPerView}
      mousewheel={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="">
            <Image url={item.image} />
            <div className="py-2 px-3">
              <p className="">{item.title}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GalleryProjects;
