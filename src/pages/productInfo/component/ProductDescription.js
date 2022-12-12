import React, { useState } from "react";

const ProductDescription = ({ viewProductCharackter }) => {
  const [toogleState, setToogleState] = useState(1);

  const toggleTab = (index) => {
    setToogleState(index);
  };

  return (
    <section class="productinfo-description">
      <div class="productinfo-description__container">
        <div class="productinfo-description__content" data-tab>
          <div class="productinfo-description__header">
            <button
              class={
                toogleState === 1
                  ? "productinfo-description__tab-button tcaer"
                  : "productinfo-description__tab-button "
              }
              type="button"
              data-tab-btn="1"
              onClick={() => toggleTab(1)}
            >
              Описание
            </button>
            <button
              class={
                toogleState === 2
                  ? "productinfo-description__tab-button tcaer"
                  : "productinfo-description__tab-button"
              }
              type="button"
              data-tab-btn="2"
              onClick={() => toggleTab(2)}
            >
              Технические характеристики
            </button>
          </div>
          <div class="productinfo-description__tab-bodys">
            <div
              class={
                toogleState === 1
                  ? "productinfo-description__tab-body tcaer"
                  : "productinfo-description__tab-body"
              }
              data-tab-body="1"
            >
              <div class="productinfo-description__title title">Описание</div>
              <div class="productinfo-description__text">
                {viewProductCharackter?.description}
              </div>
            </div>
            <div
              class={
                toogleState === 2
                  ? "productinfo-description__tab-body tcaer"
                  : "productinfo-description__tab-body"
              }
              data-tab-body="2"
            >
              <ul class="productinfo-description__specifications">
                {viewProductCharackter?.productProperties?.length > 0
                  ? viewProductCharackter?.productProperties?.map((i) => (
                      <li
                        key={i}
                        class="productinfo-description__specification"
                      >
                        <h3>{i?.key_name}</h3>
                        <span>{i?.value_name}</span>
                      </li>
                    ))
                  : "Ничего не найдено"}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDescription;
