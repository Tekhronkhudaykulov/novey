import React from "react";
import ProductAbility from "../../../assets/img/product-ability.png";
import ProductAbility2 from "../../../assets/img/product-ability-2.png";

const ProductAbilty = () => {
  return (
    <>
      <section class="productinfo-ability productinfo-ability__1">
        <div class="productinfo-ability__container">
          <div class="productinfo-ability__body">
            <img src={ProductAbility} alt="Картинка" />
            <div class="productinfo-ability__content">
              <h3 class="productinfo-ability__title title">
                Широкий спектр Расцветок!
              </h3>
              <div class="productinfo-ability__subtitle">
                У нас большой выбор различных цветов специально под ваш вкус.
                Каждый найдет для себя подходящий цвет!
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="productinfo-ability productinfo-ability__2">
        <div class="productinfo-ability__container">
          <div class="productinfo-ability__body">
            <img src={ProductAbility2} alt="Картинка" />
            <div class="productinfo-ability__content">
              <div class="productinfo-ability__title title">
                Возможность записывать звуки из FM-радио
              </div>
              <div class="productinfo-ability__subtitle">
                У нас большой выбор различных цветов специально под ваш вкус.
                Каждый найдет для себя подходящий цвет!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductAbilty;
