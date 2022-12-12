import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AboutUsPicture from "../../../assets/img/about.png";

const AboutCompany = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <section class="home-aboutus">
      <div class="home-aboutus__container">
        <img
          onClick={() => navigate("/cooperation")}
          class="home-aboutus__img"
          src={AboutUsPicture}
          alt="Картинка"
        />
        <div class="home-aboutus__content">
          <h3 class="home-aboutus__title title">{t("companyTitle")}</h3>
          <div class="home-aboutus__text text">{t("about")}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
