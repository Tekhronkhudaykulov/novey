import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Login from "../modals/auth/login";
import Register from "../modals/auth/register";
import VerifyCode from "../modals/auth/verifyCode";
import BurgerMenu from "../modals/BurgerMenu";
import i18n from "../translate";
import Input from "./input";

const Header = () => {
  const { t } = useTranslation();
  const { isAuthenticated, modalVerify, authModal, loginModal } = useSelector(
    (state) => state.authSlice
  );

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadRegion();
  }, []);

  const { regionList } = useSelector((state) => state.OtherSlice);

  const tokenVerify = () => {
    if (isAuthenticated) {
      navigate("/profile");
    } else {
      dispatch.authSlice.setAuthModal(true);
    }
  };

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="header__container">
          <a onClick={() => setModal(true)} className="header__catalog-link">
            <i className="iconmoon-burger"></i>
          </a>
          <Link to="/shopHomePage" className="header__logo">
            <img src={logo} alt="Картинка" />
          </Link>
          <div className="header__search search-header">
            <div className="search-header__form form">
              <Input className="search-header__submit" />
            </div>
            <button className="search-header__toggle" type="button">
              <i className="iconmoon-search"></i>
            </button>
          </div>
          <div className="header__location">
            <i className="iconmoon-location"></i>
            <select id="headerLocation">
              {regionList.map((item, index) => (
                <option key={index} value={item?.name}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="header__lang">
            <i className="iconmoon-globus"></i>
            <select
              id="headerLanguage"
              onChange={(e) => {
                i18next.changeLanguage(e.target.value);
              }}
            >
              <option id="ru" value={"ru"}>
                RU
              </option>
              <option id="gb" value={"gb"}>
                ENG
              </option>
              <option id="uz" value={"uz"}>
                UZ
              </option>
            </select>
          </div>
          <div className="header__actions">
            <Link to="/favourite" className="header__favorite">
              <i className="iconmoon-favorite"></i>
            </Link>
            <Link
              to="/basket"
              style={{ position: "relative" }}
              className="header__cart"
            >
              <i className="iconmoon-cart"></i>
              <span
                style={{
                  background: "red",
                  height: "20px",
                  width: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  borderRadius: "10px",
                  position: "absolute",
                  left: "25px",
                  top: "-4px",
                }}
              >
                1
              </span>
            </Link>
            <a className="header__profile">
              <i onClick={tokenVerify} className="iconmoon-profile"></i>
            </a>
          </div>
          {location.pathname !== "/" ? (
            <Link to="/" className="header__chenge-location">
              <i className="iconmoon-connect"></i>
              Перейти в сайт о компании
            </Link>
          ) : (
            <Link to="/shopHomePage" className="header__chenge-location">
              <i className="iconmoon-connect"></i>
              Перейти в NOVEY shop
            </Link>
          )}
        </div>
      </header>
      {authModal && <Register />}
      {loginModal && <Login />}
      {modalVerify && <VerifyCode />}
      {modal && <BurgerMenu setModal={setModal} />}
    </>
  );
};

export default Header;
