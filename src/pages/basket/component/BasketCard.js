import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../../heplers/request";

const BasketCard = ({ product }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const plus = () => {
    setAmount(amount + 1);
    dispatch.basketSlice.loadPostProductToBasket({
      product_id: product?.product?.id,
      amount: amount,
    });
  };

  return (
    <article class="cart-info__item item-cart-info">
      {product?.product?.photo?.includes("https://app.billz.uz") ? (
        <img
          class="item-cart-info__img"
          src={`${product?.product?.photo}`}
          alt=""
        />
      ) : (
        <img
          class="item-cart-info__img"
          src={`${baseUrl}/${product?.product?.photo}`}
          alt="Картинка"
        />
      )}
      <div class="item-cart-info__main">
        <div class="item-cart-info__name">{product?.product?.name}</div>
        <div class="item-cart-info__subname">
          {product?.product?.category?.name}
        </div>
        <div data-quantity class="item-cart-info__quantity">
          <button
            onClick={() =>
              dispatch.basketSlice.loadDeleteBasketProduct({
                product_id: product?.product?.id,
              })
            }
            data-quantity-decrease
            type="button"
          >
            -
          </button>
          <input value={product?.amount} type="text" data-quantity-value />
          <button onClick={plus} data-quantity-increase type="button">
            +
          </button>
        </div>
      </div>
      <div class="item-cart-info__summa title">{product?.price} сум</div>
    </article>
  );
};

export default BasketCard;
