import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/card";

const PopularProduct = () => {
  const dispatch = useDispatch();
  const { popularProductList } = useSelector((state) => state.productSlice);

  const { loading, error } = useSelector(
    (state) => state.loading.effects.productSlice.loadGetPopularProduct
  );
  useEffect(() => {
    dispatch.productSlice.loadGetPopularProduct();
  }, []);

  return (
    <section class="primary-section popular-products">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <a href="./filter.html" class="primary-section__title">
            Популярные товары <i class="iconmoon-arrow"></i>
          </a>
          <span class="primary-section__subtitle">Новинки и бестселлеры</span>
        </div>
        <div class="primary-section__body">
          <div class="popular-products__items">
            {loading
              ? "Loading..."
              : popularProductList.map((item) =>
                  item?.photo?.includes(
                    "assets_files/images/no-photo.png"
                  ) ? null : (
                    <Card sale news product={item} />
                  )
                )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
