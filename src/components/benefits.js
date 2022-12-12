import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OurAdvantagesPicture1 from "../assets/img/home-our-advantages/01.png";
import { baseUrl } from "../heplers/request";

const Benefits = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadAdvantage();
  }, []);

  const { advantageList } = useSelector((state) => state.OtherSlice);

  return (
    <section class="primary-section our-advantages">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <h2 class="primary-section__title">Наши преимущества</h2>
        </div>
        <div class="primary-section__body">
          <div class="our-advantages__items">
            {advantageList.map((item, ind) => (
              <div key={ind} class="our-advantages__item item-our-advantages">
                <div class="item-our-advantages__img">
                  <img src={`${baseUrl}/${item?.photo}`} alt="Картинка" />
                </div>
                <div class="item-our-advantages__title">{item?.name}</div>
                <div class="item-our-advantages__text">{item?.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
