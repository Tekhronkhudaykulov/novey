import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <a href="#" className="footer__logo">
            <img src={footerLogo} alt="Картинка" />
          </a>
          <h2>Мы в соц.сетях</h2>
          <div className="footer__social">
            <a
              href="https://t.me/novey_uzb_bot"
              className="footer__social-link"
            >
              <i className="iconmoon-telegram"></i>
            </a>
            <a
              href="https://www.instagram.com/novey_mobile/"
              className="footer__social-link"
            >
              <i className="iconmoon-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/noveymobile/"
              className="footer__social-link"
            >
              <i className="iconmoon-facebook"></i>
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h5 className="footer__col-title">Информация</h5>
          <div className="footer__menu">
            <Link to="/shopHomePage" className="footer__menu-link">
              Главная
            </Link>
            <Link to="/basket" className="footer__menu-link">
              Корзина
            </Link>
            <Link to="/catalog" className="footer__menu-link">
              Каталог
            </Link>
            <a href="#" className="footer__menu-link">
              Профиль
            </a>
            <Link to="/news" className="footer__menu-link">
              Новости
            </Link>
            <a href="#" className="footer__menu-link">
              О нас
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h5 className="footer__col-title">Контакты</h5>
          <a href="#" className="footer__contact">
            <i className="iconmoon-call"></i>+998 55 500 55 00
          </a>
          <a href="#" className="footer__contact">
            <i className="iconmoon-mail"></i>info@novey.uz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
