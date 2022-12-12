import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../heplers/request";

const News1 = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch.OtherSlice.loadNewsDetail(id);
  }, []);

  const { newsDetailList } = useSelector((state) => state.OtherSlice);
  return (
    <section class="news-detail">
      <div class="news-detail__container">
        <h3 class="news-detail__title title">Текст новости</h3>
        <div class="news-detail__body">
          <img
            class="news-detail__img"
            src={`${baseUrl}/${newsDetailList?.photo}`}
            alt="Картинка"
          />
          <div class="news-detail__content">
            <div class="news-detail__date">
              <i class="iconmoon-calendar"></i>
              {newsDetailList?.date}
            </div>
            <h3 class="news-detail__title">{newsDetailList?.name}</h3>
            <div class="news-detail__text text">
              {newsDetailList?.description}
            </div>
          </div>
          {/* <video
            src=""
            class="news-detail__video"
            controls
            preload="metadata"
            poster="img/main-banner.png"
          ></video> */}
          {/* <div class="news-detail__content">
            <h3 class="news-detail__title">
              Novey Z1 - телефон нового поколения
            </h3>
            <div class="news-detail__text text">
              Большинство современных смартфонов очень трудны в использовании,
              множество их функций запутанны и сложны. Из-за этого, в основном
              взрослое население или дети испытывают сложности в пользовании
              смартфонами. Учитывая все это, мы решили дать возможность всем
              легко и удобно пользоваться надежной связью, создав уникальный
              телефон NOVEY Z1! Это настоящая революция в сфере мобильных
              телефонов. NOVEY Z1 – это CDMA телефон нового поколения. Мы
              использовали самые передовые и современные технологии для создания
              максимально удобного и надежного телефона! В данном телефоне
              собраны все самые нужные и необходимые функции, которые могут
              пригодится вам в различных жизненных ситуациях. Среди его функций
              можно выделить мощную батарею, качественную камеру, яркий фонарь,
              большой и удобный экран и порт для USB! Большая память на 23
              гигибайта позволит вам хранить большое количество информации на
              телефоне. Отдельное внимание следует уделить уникальному дизайну
              данной модели. Стильный внешний вид и яркие цвета, тонкая отделка
              и приятный на ощупь корпус будут радовать вас каждый день!
              Специально для вас доступны несколько цветов на выбор. NOVEY Z1 –
              это не просто мобильный телефон, а это отличное сочетание
              качества, многофункциональности и доступной цены!
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default News1;
