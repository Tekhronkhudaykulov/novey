import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const BurgerMenu = ({ setModal }) => {
  return (
    <div className="burger-menu">
      <AiOutlineClose
        size={35}
        style={{ float: "right" }}
        onClick={() => setModal(false)}
      />
      <p className="novey">NOVEY</p>
      <div className="burger-menu-items">
        <Link to="/shopHomePage">Главная</Link>
        <Link to="/news">Новости</Link>
        <Link to="/favourite">Избранное</Link>
        <Link to="/">О нас</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/profile">Профиль</Link>
        <Link to="/basket">Корзина</Link>
        <Link to="/compare">Сравнение</Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
