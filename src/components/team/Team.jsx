import React, { useRef, useState } from "react";

//CSS
import "./Team.css";

//REACT-ICONS
import { MdFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

//IMAGES
import John from "./images/John.png";
import Martha from "./images/Martha.png";
import Brian from "./images/Brian.png";
import pattern from "./images/pattern.svg";

//SWIPERJS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const Team = () => {
  return (
    <div className="team" data-aos="zoom-in-right">
      <h1>Our Experienced Attorney Are Ready To answer any questions</h1>
      <div className="patter">
        <img src={pattern} alt="" />
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          rewind={true}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1430: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="crew col-12 col-md-6 col-lg-4">
              <div className="box">
                <img src={John} alt="" />
                <div className="social">
                  <a href="https://www.facebook.com/">
                    <MdFacebook />
                  </a>
                  <a href="https://www.instagram.com/?ysclid=lebqa322un170084752">
                    <AiOutlineInstagram />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter />
                  </a>
                  <a href="https://www.pinterest.com/">
                    <FaPinterest />
                  </a>
                </div>
              </div>
              <div className='personal'>
                <h1>John Turner</h1>
                <p>Civil Attorney</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="crew col-12 col-md-6 col-lg-4">
              <div className="box">
                <img src={Martha} alt="" />
                <div className="social">
                  <a href="https://www.facebook.com/">
                    <MdFacebook />
                  </a>
                  <a href="https://www.instagram.com/?ysclid=lebqa322un170084752">
                    <AiOutlineInstagram />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter />
                  </a>
                  <a href="https://www.pinterest.com/">
                    <FaPinterest />
                  </a>
                </div>
              </div>
              <div className='personal'>
                <h1>Martha Black</h1>
                <p>Associate Attorney</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="crew col-12 col-md-6 col-lg-4">
              <div className="box">
                <img src={Brian} alt="" />
                <div className="social">
                  <a href="https://www.facebook.com/">
                    <MdFacebook />
                  </a>
                  <a href="https://www.instagram.com/?ysclid=lebqa322un170084752">
                    <AiOutlineInstagram />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter />
                  </a>
                  <a href="https://www.pinterest.com/">
                    <FaPinterest />
                  </a>
                </div>
              </div>
              <div className='personal'>
                <h1>Brian Gomez</h1>
                <p>Titular Attorney</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="crew col-12 col-md-6 col-lg-4">
              <div className="box">
                <img src={John} alt="" />
                <div className="social">
                  <a href="https://www.facebook.com/">
                    <MdFacebook />
                  </a>
                  <a href="https://www.instagram.com/?ysclid=lebqa322un170084752">
                    <AiOutlineInstagram />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter />
                  </a>
                  <a href="https://www.pinterest.com/">
                    <FaPinterest />
                  </a>
                </div>
              </div>
              <div className='personal'>
                <h1>John Turner</h1>
                <p>Civil Attorney</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="crew col-12 col-md-6 col-lg-4">
              <div className="box">
                <img src={Martha} alt="" />
                <div className="social">
                  <a href="https://www.facebook.com/">
                    <MdFacebook />
                  </a>
                  <a href="https://www.instagram.com/?ysclid=lebqa322un170084752">
                    <AiOutlineInstagram />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter />
                  </a>
                  <a href="https://www.pinterest.com/">
                    <FaPinterest />
                  </a>
                </div>
              </div>
              <div className='personal'>
                <h1>Martha Black</h1>
                <p>Associate Attorney</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="crew col-12 col-md-6 col-lg-4">
              <div className="box">
                <img src={Brian} alt="" />
                <div className="social">
                  <a href="https://www.facebook.com/">
                    <MdFacebook />
                  </a>
                  <a href="https://www.instagram.com/?ysclid=lebqa322un170084752">
                    <AiOutlineInstagram />
                  </a>
                  <a href="https://twitter.com/">
                    <AiOutlineTwitter />
                  </a>
                  <a href="https://www.pinterest.com/">
                    <FaPinterest />
                  </a>
                </div>
              </div>
              <div className='personal'>
                <h1>Brian Gomez</h1>
                <p>Titular Attorney</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
