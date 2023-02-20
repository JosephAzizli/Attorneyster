import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './RecentBlogs.css'

import { Grid } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import pattern from './pattern.svg'

import blogInfo from './blogdata.json'
import Blog from "./Blog";

const RecentBlogs = () => {
  return (
    <div>
        <h1>Recent Blogs</h1>
        <img src={pattern} alt="" />
        <div className="blogs">
            <div>

            </div>
            <div>
            <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
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
          modules={[Grid]}
          className="mySwiper"
        >
          {blogInfo.map((blog) => (
            <SwiperSlide>
              <Blog
                sekil={blog.image}
                tarix={blog.name}
                basliq={blog.job}
                metn={blog.comment}
              />
            </SwiperSlide>
          ))}
        </Swiper>
            </div>
        </div>
    </div>
  )
}

export default RecentBlogs