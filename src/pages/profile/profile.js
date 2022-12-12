import React, { useState } from "react";
import PagePath from "../../components/pagePath";
import Seo from "../../components/seo";
import Benefits from "../../components/benefits";
import { useNavigate } from "react-router-dom";
import ProfileTabItemsFirst from "./component/ProfileTabItemsFirst";
import ProfileTabItemsSecond from "./component/ProfileTabItemsSecond";
import ProfileTabItemsThird from "./component/ProfileTabItemsThird";

const Profile = () => {
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  const tokenDelete = () => {
    localStorage.clear();
    navigate("/shopHomePage");
    refreshPage();
  };

  const [toogleState, setToogleState] = useState(1);

  const toggleTab = (index) => {
    setToogleState(index);
  };
  return (
    <>
      <PagePath />
      <section class="profile" data-tab>
        <div class="profile__container">
          <h3 class="profile__title title">Профиль</h3>
          <div class="profile__header">
            <div class="profile__tab-buttons">
              <button
                class={
                  toogleState === 1
                    ? "profile__tab-button tcaer"
                    : "profile__tab-button"
                }
                type="button"
                data-tab-btn="1"
                onClick={() => toggleTab(1)}
              >
                <i class="iconmoon-profile"></i>Личные данные
              </button>
              <button
                class={
                  toogleState === 2
                    ? "profile__tab-button tcaer"
                    : "profile__tab-button"
                }
                type="button"
                data-tab-btn="2"
                onClick={() => toggleTab(2)}
              >
                <i class="iconmoon-handbag"></i>Заказы
              </button>
              <button
                class={
                  toogleState === 3
                    ? "profile__tab-button tcaer"
                    : "profile__tab-button"
                }
                type="button"
                data-tab-btn="3"
                onClick={() => toggleTab(3)}
              >
                <i class="iconmoon-mail"></i>История транзакций
              </button>
            </div>
            <a onClick={tokenDelete} href="#" class="profile__leave">
              Выйти из профиля
            </a>
          </div>
          <div class="profile__tab-bodys">
            <ProfileTabItemsFirst setToogleState={toogleState} />
            <ProfileTabItemsSecond setToogleState={toogleState} />
            <ProfileTabItemsThird setToogleState={toogleState} />
          </div>
        </div>
      </section>
      <Seo />
      <Benefits />
    </>
  );
};

export default Profile;
