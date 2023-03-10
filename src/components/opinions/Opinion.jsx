import React from "react";

//CSS
import "./Opinion.css";

//IMAGE
import pattern from "./images/pattern.svg";

//JSON
import cardInfo from "./comments.json";
import OpinionCard from "./OpinionCard";
import OpinionCard2 from "./OpinionCard2";

//SWIPERJS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

const Opinion = () => {
  return (
    <div
      className="opinion"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h1>Client Opinions & Reviews</h1>
      <div className="patter">
        <img src={pattern} alt="" />
      </div>

      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          rewind={true}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            815: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1430: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {cardInfo.map((card) => card.id%2 ? (
            <SwiperSlide>
              <OpinionCard
                sekil={card.image}
                ad={card.name}
                ish={card.job}
                rey={card.comment}
              /> : 
            </SwiperSlide>
          ) : 
          <SwiperSlide>
          <OpinionCard2
            sekil={card.image}
            ad={card.name}
            ish={card.job}
            rey={card.comment}
          />
        </SwiperSlide> 
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Opinion;
