import React from "react";
import Video from "../assets/img/video.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import Img from "../assets/img/img.png";
import Img2 from "../assets/img/img2.png";
import Img3 from "../assets/img/img3.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Rolik = () => {
  return (
    <section class="primary-section our-videos">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <h2 class="primary-section__title">Ролики</h2>
        </div>
        <div class="primary-section__body">
          <div class="our-videos__slider">
            <Swiper
              slidesPerView={3}
              breakpoints={{
                769: { slidesPerView: 3 },
                700: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              loopFillGroupWithBlank={true}
              loop={true}
              // autoplay={{
              //   delay: 1000,
              //   disableOnInteraction: false,
              // }}
              navigation={{
                prevEl: ".our-videos__slider-prevbutton",
                nextEl: ".our-videos__slider-nextbutton",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="our-videos__slide swiper-slide">
                <a href="https://www.youtube.com/watch?v=6_tSy3JWTCM">
                  <img src={Img} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="our-videos__slide swiper-slide">
                <a href="https://www.youtube.com/watch?v=JKjBRTf9lkI">
                  <img src={Img2} alt="" />
                </a>
              </SwiperSlide>
              <SwiperSlide className="our-videos__slide swiper-slide">
                <a href="https://www.youtube.com/watch?v=MJZzLf0-CPY">
                  <img src={Img3} alt="" />
                </a>
              </SwiperSlide>
            </Swiper>
            <button class="our-videos__slider-prevbutton" type="button">
              <i class="iconmoon-arrow-chevron"></i>
            </button>
            <button class="our-videos__slider-nextbutton" type="button">
              <i class="iconmoon-arrow-chevron"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rolik;
