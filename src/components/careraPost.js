import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import HomePageBannerPicture from "../assets/img/home-mainbanner.png";
import Map from "../pages/basket/component/Map";
const CareraPost = () => {
  const { loading, error } = useSelector(
    (state) => state.loading.effects.messageSlice.sendMessageCareraLoad
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  return (
    <section class="home-mainbanner">
      <img src={HomePageBannerPicture} alt="Картинка" />
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
        <h1 class="home-mainbanner__title">
          КАРЬЕРА
          {/* ДЛЯ ДИСТРИБЬЮТЕРОВ  */}
        </h1>
        <div class="home-mainbanner__subtitle"></div>
        <div class="home-mainbanner__content">
          <div class="home-contact">
            <div class="home-contact__form home-formbox__form form">
              <div class="home-formbox__header">
                <h3 class="home-formbox__title title">
                  Оставьте ваше сообщение
                </h3>
                <div class="home-formbox__subtitle text">
                  Задайте нам вопрос или отправьте предложения. Наши менеджеры
                  свяжутся с вами
                </div>
              </div>
              <div class="home-formbox__inputs">
                <label class="form-group-input home-page">
                  <span class="form-group-input__label">Имя</span>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    value={name}
                  />
                </label>
                <label class="form-group-input home-page">
                  <span class="form-group-input__label">Номер телефона</span>
                  <PhoneInput
                    country={"uz"}
                    defaultMask={"(..) ...-..-.."}
                    placeholder="+998"
                    value={phone}
                    alwaysDefaultMask={true}
                    onChange={(e) => setPhone(e)}
                    specialLabel={false}
                    inputExtraProps={{
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </label>
              </div>
              <label class="form-group-input home-page">
                <span class="form-group-input__label">
                  Введите своё предложение
                </span>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  type="text"
                ></textarea>
              </label>
              <button
                class="home-formbox__submit button-home"
                onClick={() => {
                  dispatch.messageSlice.sendMessageCareraLoad({
                    name,
                    message,
                    phone,
                  });
                  setName("");
                  setPhone("");
                  setMessage("");
                }}
              >
                <span>{loading ? "Loading..." : "Отправить"}</span>
              </button>
            </div>
            <div class="home-contact__right">
              <h3 class="home-contact__title title">Контакты</h3>
              <div class="home-contact__contacts">
                <div class="home-contact__contact">
                  <i class="iconmoon-location"></i>
                  <div class="home-contact__contact-name">Адрес:</div>
                  <div class="home-contact__contact-subname text">
                    100139, Город Ташкент, Чиланзарский район, 23-микрорайон,
                    Хирмонтепа 69 А.
                  </div>
                </div>
                <div class="home-contact__contact">
                  <i class="iconmoon-call"></i>
                  <div class="home-contact__contact-name">Телефоны:</div>
                  <div class="home-contact__contact-subname text">
                    +998(55) 500-55-00
                  </div>
                </div>
                <div class="home-contact__contact">
                  <i class="iconmoon-calendar"></i>
                  <div class="home-contact__contact-name">Время работы:</div>
                  <div class="home-contact__contact-subname text">
                    Понедельник-суббота 9:00-18:00, Воскресенье: выходной
                  </div>
                </div>
                <div class="home-contact__contact">
                  <i class="iconmoon-mail"></i>
                  <div class="home-contact__contact-name">Почта:</div>
                  <div class="home-contact__contact-subname text">
                    info@novey.uz
                  </div>
                </div>
              </div>
              <div class="home-contact__socials-title">
                Наблюдайте за нами в социальных сетях:
              </div>
              <div class="home-contact__socials">
                <a href="#" class="home-contact__social">
                  <i class="iconmoon-telegram"></i>
                </a>
                <a href="#" class="home-contact__social">
                  <i class="iconmoon-instagram"></i>
                </a>
                <a href="#" class="home-contact__social">
                  <i class="iconmoon-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="home-contact__map">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareraPost;
