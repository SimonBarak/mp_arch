import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//import { FreeMode, Navigation, Thumbs } from "swiper";
import { Navigation, Thumbs } from "swiper/react";

//SwiperCore.use([Navigation, Pagination, Thumbs]);

const ImageGallery = ({ images }) => {
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  return (
    <div className="w-full">
      <Swiper
        navigation
        pagination
        thumbs={{ swiper: swiperInstance }}
        loop={true}
        loopedSlides={images.length}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Image ${index}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setSwiperInstance}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="mt-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Image ${index}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
