import React, { useEffect } from "react";
import PagePath from "../../components/pagePath";
import Card from "../../components/card";
import Seo from "../../components/seo";
import Benefits from "../../components/benefits";
import { useDispatch, useSelector } from "react-redux";

const Favourite = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.basketSlice.loadGetFavouriteProduct();
  }, []);

  const { getFavouriteProduct } = useSelector((state) => state.basketSlice);

  return (
    <>
      <PagePath />
      <section class="favorites">
        <div class="favorites__container">
          <h2 class="favorites__title title">Избранное</h2>
          <div class="favorites__items">
            {getFavouriteProduct.map((item, index) => (
              <div key={index}>
                <Card product={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Seo />
      <Benefits />
    </>
  );
};
export default Favourite;
