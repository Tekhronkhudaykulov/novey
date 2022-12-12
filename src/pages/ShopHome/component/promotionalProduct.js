import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/card";

const PromotionalProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.productSlice.productPriceDownLoad();
  }, []);

  const { productPriceDownList } = useSelector((state) => state.productSlice);
  return (
    <section class="primary-section promotional-products">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <a href="./filter.html" class="primary-section__title">
            Акционные товары <i class="iconmoon-arrow"></i>
          </a>
          <span class="primary-section__subtitle">Товары со скидками</span>
        </div>
        <div class="primary-section__body">
          <div class="promotional-products__items">
            {productPriceDownList.map((item) =>
              item?.photo?.includes(
                "assets_files/images/no-photo.png"
              ) ? null : (
                <Card product={item} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalProduct;
