import React from 'react'
import './Laws.css'
import LawCard from "./LawCard";

import pattern from './pattern.svg'

import cardInfo from "./cardsInfo.json";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const Laws = () => {
  return (
    <div className='laws'>
        <div className="explore row">
            <div className='left col-12 col-md-3 col-lg-5'>
            <h1>Explore The perfect</h1>
             <h1>Our Practice Areas</h1> 
            <img src={pattern} alt="" />
            </div>
            <p className='col-12 col-md-9 col-lg-7'>We are a group of civil litigation/trial attorneys who focus on providing a justice based on the issues relating to insurance defense, insurance coverage, bad faith, insurance fraud and criminal litigation.</p>
        </div>
        <div className="cards-section row">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1101: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1410: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {cardInfo.map((card) => (
            <SwiperSlide>
              <LawCard
                title={card.title}
                body={card.body}
                image={card.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Laws