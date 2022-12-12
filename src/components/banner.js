import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CooperationBannerPicture from "../assets/img/home-mainbanner.png";

const Banner = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadSlider();
  }, []);

  const { sliderList } = useSelector((state) => state.OtherSlice);
  return (
    <>
      <img src={CooperationBannerPicture} alt="Картинка" />
      <div class="path-page home-page">
        <div class="path-page__container">
          <ul class="path-page__items">
            <li class="path-page__item">
              <a href="#" class="path-page__link">
                Главная
              </a>
            </li>
            <li class="path-page__item">
              <a href="#" class="path-page__link">
                каталог
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="home-mainbanner__container">
        <h1 class="home-mainbanner__title">ПАРТНЕРСКИЕ ПРОГРАММЫ</h1>
        <div class="home-mainbanner__subtitle">
          Мы предлагаем вам разные Программы партнёрства в зависимости от
          направления вашего бизнеса. Выберите подходящую для вас программу
          партнёрства.
        </div>
      </div>
    </>
  );
};

export default Banner;
