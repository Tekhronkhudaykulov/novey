import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CompariosProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.basketSlice.loadGetСompare();
  }, []);

  const { compareProducts } = useSelector((state) => state.basketSlice);

  return (
    <section class="compare-add">
      <div class="compare-add__container">
        <h2 class="compare-add__title title">Сравнить</h2>
        <div class="compare-add__form">
          <ul class="compare-add__items">
            {compareProducts.map((item, index) => (
              <li key={index} class="compare-add__item">
                {item?.name}
              </li>
            ))}
          </ul>
          <div class="compare-add__input">
            <button type="submit">+</button>
            <input type="text" placeholder="Напишите, чтобы добавить..." />
          </div>
          <button class="compare-add__button" type="button">
            <i class="iconmoon-phone"></i> Сравнить
          </button>
        </div>
      </div>
    </section>
  );
};
export default CompariosProduct;
