import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "./card";
const SimilarProduct = () => {
  const { similarProductList } = useSelector((state) => state.productSlice);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.productSlice.loadGetSimilarProduct(id);
  }, []);

  return (
    <section class="primary-section similar-products">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <h2 class="primary-section__title">Похожие товары</h2>
        </div>
        <div class="primary-section__body">
          <div class="similar-products__items">
            {similarProductList.map((item) => (
              <Card sale news product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProduct;
