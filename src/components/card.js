import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { baseUrl } from "../heplers/request";
import { MdOutlineFavorite } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Card = ({ news, product, key }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <article key={key} class="product">
      {news && <div class="product__action">NEW</div>}
      <a class="product__favorite">
        {product?.isFavorite === true ? (
          <MdOutlineFavorite
            onClick={() =>
              dispatch.basketSlice.loadPostFavouriteProduct({
                product_id: product?.id,
              })
            }
            size={30}
          />
        ) : (
          <i
            onClick={() =>
              dispatch.basketSlice.loadPostFavouriteProduct({
                product_id: product?.id,
              })
            }
            class="iconmoon-favorite"
          ></i>
        )}
      </a>
      <Link to={"/productInfo/" + product?.id} class="product__img">
        {product?.photo?.includes("https://app.billz.uz") ? (
          <img className="hover-for-img" src={`${product?.photo}`} alt="" />
        ) : (
          <img
            className="hover-for-img"
            src={`${baseUrl}/${product?.photo}`}
            alt="Картинка"
          />
        )}
      </Link>
      <div class="product__subtext">{product?.category?.name}</div>
      <div class="product__name">
        {localStorage.i18nextLng === "ru" && product.name_ru}
        {localStorage.i18nextLng === "uz" && product.name_uz}
        {localStorage.i18nextLng === "gb" && product.name_en}
      </div>
      <div class="product__footer">
        <div class="product__price">
          {product?.price_old && (
            <span class="product__price-old">{product?.price_old} сум</span>
          )}
          <span class="product__price-real">{product?.price} сум</span>
        </div>
        <a class="product__cart">
          <i
            onClick={() =>
              dispatch.basketSlice.loadPostProductToBasket({
                product_id: product?.id,
                amount: 1,
              })
            }
            class="iconmoon-cart"
          ></i>
        </a>
      </div>
    </article>
  );
};

export default Card;
