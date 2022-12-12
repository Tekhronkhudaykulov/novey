import React from "react";

const ProductinfoReview = () => {
  return (
    <section class="primary-section productinfo-review">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <h2 class="primary-section__title">Отзывы</h2>
        </div>
        <div class="primary-section__body">
          <div class="productinfo-review__items">
            <article class="productinfo-review__item item-productinfo-review">
              <div class="item-productinfo-review__header">
                <img
                  class="item-productinfo-review__image"
                  src="img/products/02.png"
                  alt="Картинка"
                />
                <div class="item-productinfo-review__name">Ройтман Рафаэль</div>
                <div class="item-productinfo-review__rate"></div>
              </div>
              <div class="item-productinfo-review__text text">
                Купил этот телефон, так как накопилось несколько сим-карт,
                которые необходимо держать на связи. После 6-и дюймовых
                смартфонов, этот телефон довольно миниатюрный. Сеть ловит
                нормально. Батарея в режиме ожидания держит несколько дней.
              </div>
              <div class="item-productinfo-review__date">
                <i class="iconmoon-calendar"></i>24.06.2022
              </div>
            </article>
            <article class="productinfo-review__item item-productinfo-review">
              <div class="item-productinfo-review__header">
                <img
                  class="item-productinfo-review__image"
                  src="img/products/02.png"
                  alt="Картинка"
                />
                <div class="item-productinfo-review__name">Ройтман Рафаэль</div>
                <div class="item-productinfo-review__rate"></div>
              </div>
              <div class="item-productinfo-review__text text">
                Купил этот телефон, так как накопилось несколько сим-карт,
                которые необходимо держать на связи. После 6-и дюймовых
                смартфонов, этот телефон довольно миниатюрный. Сеть ловит
                нормально. Батарея в режиме ожидания держит несколько дней.
              </div>
              <div class="item-productinfo-review__date">
                <i class="iconmoon-calendar"></i>24.06.2022
              </div>
            </article>
            <article class="productinfo-review__item item-productinfo-review">
              <div class="item-productinfo-review__header">
                <img
                  class="item-productinfo-review__image"
                  src="img/products/02.png"
                  alt="Картинка"
                />
                <div class="item-productinfo-review__name">Ройтман Рафаэль</div>
                <div class="item-productinfo-review__rate"></div>
              </div>
              <div class="item-productinfo-review__text text">
                Купил этот телефон, так как накопилось несколько сим-карт,
                которые необходимо держать на связи. После 6-и дюймовых
                смартфонов, этот телефон довольно миниатюрный. Сеть ловит
                нормально. Батарея в режиме ожидания держит несколько дней.
              </div>
              <div class="item-productinfo-review__date">
                <i class="iconmoon-calendar"></i>24.06.2022
              </div>
            </article>
            <article class="productinfo-review__item item-productinfo-review">
              <div class="item-productinfo-review__header">
                <img
                  class="item-productinfo-review__image"
                  src="img/products/02.png"
                  alt="Картинка"
                />
                <div class="item-productinfo-review__name">Ройтман Рафаэль</div>
                <div class="item-productinfo-review__rate"></div>
              </div>
              <div class="item-productinfo-review__text text">
                Купил этот телефон, так как накопилось несколько сим-карт,
                которые необходимо держать на связи. После 6-и дюймовых
                смартфонов, этот телефон довольно миниатюрный. Сеть ловит
                нормально. Батарея в режиме ожидания держит несколько дней.
              </div>
              <div class="item-productinfo-review__date">
                <i class="iconmoon-calendar"></i>24.06.2022
              </div>
            </article>
          </div>
          <form
            action="#"
            class="productinfo-review__form form-productinfo-review form"
          >
            <h3 class="form-productinfo-review__title title">Оставить отзыв</h3>
            <textarea
              class="form-productinfo-review__text"
              data-req
              data-error=""
              placeholder="Текст"
            ></textarea>
            <div class="form-productinfo-review__rate">
              <h4>Оценить</h4>
            </div>
            <button class="button" type="submit">
              Опубликовать
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ProductinfoReview;
