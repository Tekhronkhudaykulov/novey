import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../heplers/request";

const PortnorSlider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadPartner();
  }, []);

  const { partnerList } = useSelector((state) => state.OtherSlice);

  return (
    <section className="primary-section our-partners">
      <div className="primary-section__container">
        <div className="primary-section__header">
          <h2 className="primary-section__title">Наши партнеры</h2>
        </div>
        <div className="primary-section__body">
          <div className="our-partners__slider">
            <Swiper
              slidesPerView={4}
              breakpoints={{
                769: { slidesPerView: 3 },
                700: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              loopFillGroupWithBlank={true}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".our-partners__slider-prevbutton",
                nextEl: ".our-partners__slider-nextbutton",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {partnerList.map((item, ind) => (
                <SwiperSlide
                  key={ind}
                  className="our-partners__slide swiper-slide"
                >
                  <img src={`${baseUrl}/${item?.photo}`} alt="Картинка" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="our-partners__slider-prevbutton" type="button">
            <i className="iconmoon-arrow-chevron"></i>
          </button>
          <button className="our-partners__slider-nextbutton" type="button">
            <i className="iconmoon-arrow-chevron"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortnorSlider;
