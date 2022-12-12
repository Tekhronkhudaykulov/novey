import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../heplers/request";

const BannerForShop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadSlider();
  }, []);

  const { sliderList } = useSelector((state) => state.OtherSlice);
  return (
    <section class="main-banner">
      <div class="main-banner__slider">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            769: { slidesPerView: 1 },
            700: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          loopFillGroupWithBlank={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".main-banner__slider-prevbutton",
            nextEl: ".main-banner__slider-nextbutton",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderList.map((item, ind) => (
            <SwiperSlide className="main-banner__slide slide-main-banner swiper-slide">
              <div class="slide-main-banner__img">
                <img src={`${baseUrl}/${item?.photo}`} alt="Картинка" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button class="main-banner__slider-prevbutton" type="button">
          <i class="iconmoon-arrow-chevron"></i>
        </button>
        <button class="main-banner__slider-nextbutton" type="button">
          <i class="iconmoon-arrow-chevron"></i>
        </button>
        <div class="main-banner__slider-pagination"></div>
      </div>
    </section>
  );
};

export default BannerForShop;
