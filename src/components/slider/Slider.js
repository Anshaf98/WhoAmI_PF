import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Data } from "../../dummyData";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
      >
        {Data.map((item) => (
          <SwiperSlide>
            <div className="left-side">
              <div className="name">
                <span>{item.name}</span>
                <span>{item.detail}</span>
              </div>
              <div>View Now</div>
            </div>
            <img src={item.img} alt="" className="img-1" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
