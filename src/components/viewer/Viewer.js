import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Viewer.css";
import { data2 } from "../../dummyData";

const Viewer = () => {
  return (
    <div className="viewer">
      <div className="wrapper2">
        <div className="container0">
          <span>top rated</span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            nihil ut assumenda quis architecto eaque doloribus et quo
            repellendus suscipit, non harum, ex, autem odit iusto asperiores
            eligendi ratione commodi?
          </span>
        </div>

        <img
          src="https://res.cloudinary.com/dpakxje91/image/upload/v1667974590/Screenshot_2022-11-09_114447_xl7pvt.png"
          alt=""
        />

        <div className="container0" style={{ textAlign: "right" }}>
          <span>1k</span>
          <span>Our Viewers</span>
        </div>
      </div>

      <div className="reviews">Reviews</div>

      <div className="carousal">
        <Swiper
          modules={[Pagination, Navigation]}
          className="vCar"
          loopFillGroupWithBlank={true}
          navigation={true}
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
        >
          {data2.map((v) => (
            <SwiperSlide>
              <div className="viewer2">
                <img src={v.image} alt="" />
                <span>{v.comment}</span>
                <hr />
                <span>{v.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Viewer;
