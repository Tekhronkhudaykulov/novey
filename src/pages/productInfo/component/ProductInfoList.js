import React from "react";
import ProductInfoImage2 from "../../../assets/img/bottom-of-phone.png";
import { baseUrl } from "../../../heplers/request";
import { MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListNovey from "../../../modals/listNovey";

const ProductInfoList = ({ viewProductIdList }) => {
  console.log({ viewProductIdList });
  const { productModal } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const sendBasket = () => {
    dispatch.basketSlice.loadPostProductToBasket(
      {
        product_id: viewProductIdList?.id,
        amount: 1,
      },
      navigate("/basket")
    );
  };

  return (
    <>
      {productModal && <ListNovey />}
      <section class="productinfo-card">
        <div class="productinfo-card__container">
          <div class="productinfo-card__body">
            <h2 class="productinfo-card__title title">
              {viewProductIdList?.name}
            </h2>
            <div class="productinfo-card__content">
              <div class="productinfo-card__images">
                <a href="#" class="productinfo-card__favorite">
                  {viewProductIdList?.isFavorite === true ? (
                    <MdOutlineFavorite
                      onClick={() =>
                        dispatch.basketSlice.loadPostFavouriteProduct({
                          product_id: viewProductIdList?.id,
                        })
                      }
                      size={30}
                    />
                  ) : (
                    <i
                      onClick={() =>
                        dispatch.basketSlice.loadPostFavouriteProduct({
                          product_id: viewProductIdList?.id,
                        })
                      }
                      class="iconmoon-favorite"
                    ></i>
                  )}
                </a>
                <div class="productinfo-card__bigimage">
                  {viewProductIdList?.photo?.includes(
                    "https://app.billz.uz"
                  ) ? (
                    <img src={`${viewProductIdList?.photo}`} alt="" />
                  ) : (
                    <img
                      src={`${baseUrl}/${viewProductIdList?.photo}`}
                      alt="Картинка"
                    />
                  )}
                </div>
                <div class="productinfo-card__thumbimages">
                  <img src={ProductInfoImage2} alt="Картинка" />
                  <img src={ProductInfoImage2} alt="Картинка" />
                  <img src={ProductInfoImage2} alt="Картинка" />
                </div>
              </div>
              <div class="productinfo-card__characters">
                <div class="productinfo-card__character">
                  <h4>Цвет</h4>
                  <br />
                  <button
                    type="button"
                    style={{ backgroundColor: `${viewProductIdList?.color}` }}
                  ></button>
                </div>
                <div class="productinfo-card__character flex">
                  <h4>ID:</h4> {viewProductIdList?.id}
                </div>
                {viewProductIdList?.productProperties?.map((item, ind) => (
                  <div key={ind} class="productinfo-card__character flex">
                    <h4>{item?.key_name}:</h4> <span>{item?.value_name}</span>
                  </div>
                ))}
                <a href="#" class="productinfo-card__360">
                  <i class="iconmoon-360"></i>
                  Вид под разными углами
                </a>
              </div>
              <div class="productinfo-card__cartbox">
                <div class="productinfo-card__price">
                  <div class="productinfo-card__price-real">
                    {viewProductIdList?.price} сум
                  </div>
                  {viewProductIdList?.price_old && (
                    <div class="productinfo-card__price-old">
                      {viewProductIdList?.price_old} сум
                    </div>
                  )}
                </div>
                <div class="productinfo-card__price-delivery">
                  <i class="iconmoon-cart"></i>
                  Самовывоз: <span>бесплатно</span>
                </div>
                <div class="productinfo-card__price-delivery">
                  <i class="iconmoon-truck"></i>
                  Доставка курьером: <span>30.000 сум</span>
                </div>
                <a
                  href="#"
                  onClick={sendBasket}
                  class="productinfo-card__cartbutton button"
                >
                  В корзину
                </a>
              </div>
            </div>
            <a
              onClick={() => dispatch.productSlice.productModalFunction(true)}
              class="productinfo-card__compare"
            >
              <i class="iconmoon-phone"></i>
              <span
                onClick={() =>
                  dispatch.basketSlice.loadСompare({
                    product_id: viewProductIdList?.id,
                  })
                }
              >
                + <br /> Сравнить
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductInfoList;
