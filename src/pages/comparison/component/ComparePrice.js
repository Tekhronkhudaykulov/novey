import React from "react";
import { useSelector } from "react-redux";
import ComparePicture from "../../../assets/img/products/03.png";
import { baseUrl } from "../../../heplers/request";

const ComparePrice = () => {
  const { compareProducts } = useSelector((state) => state.basketSlice);
  return (
    <section class="primary-section compare-price">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <h2 class="primary-section__title">Сопоставление Цен</h2>
        </div>
        <div class="primary-section__body">
          <ul class="compare-price__items">
            {compareProducts.map((item) => (
              <li class="compare-price__item item-compare-price">
                <div class="item-compare-price__name title">{item?.name}</div>
                {item?.photo?.includes("https://app.billz.uz") ? (
                  <img src={`${item?.photo}`} alt="" />
                ) : (
                  <img src={`${baseUrl}/${item?.photo}`} alt="Картинка" />
                )}

                <div class="item-compare-price__price button">
                  {item?.price} сум
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ComparePrice;
