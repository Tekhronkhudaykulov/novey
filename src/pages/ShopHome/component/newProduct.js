import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NewProductImage from "../../../assets/img/products/01.png";
import Card from "../../../components/card";

const NewProduct = () => {
  const { newProductList } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  const { loading, error } = useSelector(
    (state) => state.loading.effects.productSlice.loadNewProductFunction
  );

  useEffect(() => {
    dispatch.productSlice.loadNewProductFunction();
  }, []);
  return (
    <section class="primary-section new-products">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <a href="./filter.html" class="primary-section__title">
            Новые поступления<i class="iconmoon-arrow"></i>
          </a>
          <span class="primary-section__subtitle">Новые тавары</span>
        </div>
        <div class="primary-section__body">
          <div class="new-products__items">
            {loading
              ? "Loading..."
              : newProductList.map((item) =>
                  item?.photo?.includes(
                    "assets_files/images/no-photo.png"
                  ) ? null : (
                    <Card sale product={item} />
                  )
                )}
          </div>
          {/* <ul class="pagination">
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                1
              </a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                2
              </a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                3
              </a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                4
              </a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                <i class="iconmoon-arrow"></i>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
