import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/23c9ced3-9bc8-4ede-bc1c-2a348d1dd950_BD-1976-688.jpg_2200x2200q80.jpg"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/100c2025-fc48-4c14-972c-7bf8a37341df_BD-1976-688.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/9d200450-a8ae-46d2-a4c0-47627b331405_BD-1976-688.jpg"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/597067ff-0007-41b3-a581-f86c3e1aeb3a_BD-1976-688.jpg"
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/9b901147-7400-4eda-bc09-dc90d1edbac6_BD-1976-688.jpg"
            alt="Slide 5"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
