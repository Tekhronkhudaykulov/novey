import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CareraPicture from "../../../assets/img/career.png";
import Soot from "../../../assets/img/partner.png";

const CareraItem = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadPartner();
  }, []);

  const { t, i18n } = useTranslation();

  return (
    <section class="home-services">
      <div class="home-services__container">
        <article class="home-services__item item-home-services">
          <img
            class="item-home-services__img"
            src={CareraPicture}
            alt="Картинка"
          />
          <div class="item-home-services__content">
            <h3 class="item-home-services__title title">{t("careareTitle")}</h3>
            <div class="item-home-services__text text">{t("careare")}</div>
            <Link to="/carera" class="item-home-services__link button-home">
              <span>Подробнее</span>
            </Link>
          </div>
        </article>
        <article class="home-services__item item-home-services">
          <img class="item-home-services__img" src={Soot} alt="Картинка" />
          <div class="item-home-services__content">
            <h3 class="item-home-services__title title">{t("partnerTitle")}</h3>
            <div class="item-home-services__text text">{t("partner")}</div>
            <Link
              to="/distributors"
              class="item-home-services__link button-home"
            >
              <span>Подробнее</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CareraItem;
