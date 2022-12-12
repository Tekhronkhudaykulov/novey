import React from "react";
import CooperationBannerPicture from "../../../assets/img/home-mainbanner.png";
import PartnorShipPicture from "../../../assets/img/partnership-program.png";

const CooperationBanner = () => {
  return (
    <section class="home-mainbanner">
      <img src={CooperationBannerPicture} alt="Картинка" />
      <div class="path-page home-page">
        <div class="path-page__container">
          <ul class="path-page__items">
            <li class="path-page__item">
              <a href="#" class="path-page__link">
                Главная
              </a>
            </li>
            <li class="path-page__item">
              <a href="#" class="path-page__link">
                каталог
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="home-mainbanner__container">
        <h1 class="home-mainbanner__title">ПАРТНЕРСКИЕ ПРОГРАММЫ</h1>
        <div class="home-mainbanner__subtitle">
          Мы предлагаем вам разные Программы партнёрства в зависимости от
          направления вашего бизнеса. Выберите подходящую для вас программу
          партнёрства.
        </div>
        <div class="home-mainbanner__content">
          <div class="partnership-programs">
            <article class="partnership-program">
              <img
                class="partnership-program__img"
                src={PartnorShipPicture}
                alt="Картинка"
              />
              <div class="partnership-program__content">
                <h3 class="partnership-program__title">
                  Для предпринимателей у которых есть магазин
                </h3>
                <div class="partnership-program__text text">
                  Закупка моделей NOVEY у уполномоченных дистрибьюторов и
                  перепродажа их конечным пользователям.
                </div>
                <a href="#" class="partnership-program__link button-home">
                  <span>Стать партнером</span>
                </a>
              </div>
            </article>
            <article class="partnership-program">
              <img
                class="partnership-program__img"
                src={PartnorShipPicture}
                alt="Картинка"
              />
              <div class="partnership-program__content">
                <h3 class="partnership-program__title">Для дистрибьютеров</h3>
                <div class="partnership-program__text text">
                  Покупатйе товары напрямую и продавайте только в собственных
                  сетях.
                </div>
                <a href="#" class="partnership-program__link button-home">
                  <span>Стать партнером</span>
                </a>
              </div>
            </article>
            <article class="partnership-program">
              <img
                class="partnership-program__img"
                src={PartnorShipPicture}
                alt="Картинка"
              />
              <div class="partnership-program__content">
                <h3 class="partnership-program__title">Импорт/экспорт</h3>
                <div class="partnership-program__text text">
                  Уникальные торговые предложения от NOVEY для зарубежных
                  дистрибьюторов и партнеров.
                </div>
                <a href="#" class="partnership-program__link button-home">
                  <span>Стать партнером</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperationBanner;
