import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "./BasketCard";

const BasketInfo = () => {
  const dispatch = useDispatch();

  const { basketAllPrice } = useSelector((state) => state.basketSlice);

  useEffect(() => {
    dispatch.basketSlice.loadGetBasketProducts();
  }, []);

  const { getBasketProductsList } = useSelector((state) => state.basketSlice);

  return (
    <section class="cart-info">
      <div class="cart-info__container">
        <div class="cart-info__items">
          {getBasketProductsList.map((item, index) => (
            <div key={index}>
              <BasketCard product={item} />
            </div>
          ))}
        </div>
        <div class="cart-info__summ summ-cart-info">
          <div class="summ-cart-info__title">Ваш заказ</div>
          <div class="summ-cart-info__row">
            <h4>Сумма:</h4>
            <span>{basketAllPrice}</span>
          </div>
          {/* <div class="summ-cart-info__row">
            <h4>Скидка:</h4>
            <span>25%</span>
          </div> */}
          <div class="summ-cart-info__footer">
            <div class="summ-cart-info__row">
              <h4>Итого:</h4>
              <div class="summ-cart-info__total">
                <strong>{basketAllPrice} сум</strong>
              </div>
            </div>
            <button class="summ-cart-info__button button" type="submit">
              Оформить
            </button>
            <a href="#" class="summ-cart-info__back">
              Вернуться к покупкам
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketInfo;
