import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SeoPicture from "../../src/assets/img/logo.png";

const Seo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadSeo();
  }, []);

  const { seoList } = useSelector((state) => state.OtherSlice);

  return (
    <section class="primary-section seo-text">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <h2 class="primary-section__title">SEO Текст</h2>
        </div>
        <div class="primary-section__body">
          <div class="seo-text__content">
            <div class="seo-text__text">{seoList?.meta_keywords}</div>
            <div class="seo-text__img">
              <img src={SeoPicture} alt="Картинка" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seo;
