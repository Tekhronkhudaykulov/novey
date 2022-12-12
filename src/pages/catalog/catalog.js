import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Benefits from "../../components/benefits";
import Seo from "../../components/seo";
import { baseUrl } from "../../heplers/request";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.productSlice.productFetchCategoryLoad();
  }, []);

  const { categoryProductList } = useSelector((state) => state.productSlice);

  const navigate = useNavigate();

  const location = useLocation();

  const navigateSearch = (id) => {
    navigate(`/by-category?id=${id}`);
  };
  return (
    <>
      <div class="path-page">
        <div class="path-page__container">
          <ul class="path-page__items">
            <li class="path-page__item">
              <a class="path-page__link">Главная</a>
            </li>
            {location.pathname === "/catalog" && (
              <li class="path-page__item">
                <a class="path-page__link">Catalog</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <section class="catalog">
        <div class="catalog__container">
          <div class="catalog__title title">Каталог</div>
          <div class="catalog__items">
            {categoryProductList.map((item, index) => (
              <a
                onClick={() => {
                  dispatch.productSlice.productFetchByCategoryLoad(item.id);
                  navigateSearch(item.id);
                }}
                key={index}
                class="catalog__item item-catalog"
              >
                <div class="item-catalog__content">
                  <h4 class="item-catalog__title title">{item?.name}</h4>
                  <div class="item-catalog__subtitle">{item?.description}</div>
                </div>
                <div class="item-catalog__img">
                  <img src={`${baseUrl}/${item?.photo}`} alt="Картинка" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Seo />
      <Benefits />
    </>
  );
};
export default Catalog;
