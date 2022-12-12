import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Login from "../modals/auth/login";
import Register from "../modals/auth/register";
import VerifyCode from "../modals/auth/verifyCode";
import BurgerMenu from "../modals/BurgerMenu";

const FixedMenu = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const { isAuthenticated, modalVerify, authModal, loginModal } = useSelector(
    (state) => state.authSlice
  );

  const dispatch = useDispatch();

  const tokenVerify = () => {
    if (isAuthenticated) {
      navigate("/profile");
    } else {
      dispatch.authSlice.setAuthModal(true);
    }
  };

  return (
    <ul class="fixed-menu">
      <li class="fixed-menu__item">
        <Link to="/catalog" class="fixed-menu__link">
          <i class="iconmoon-list"></i>
        </Link>
      </li>
      <li class="fixed-menu__item">
        <Link to="/filter" class="fixed-menu__link fixed-menu__link-search">
          <i class="iconmoon-search"></i>
        </Link>
      </li>
      <li class="fixed-menu__item">
        <Link to="/" class="fixed-menu__link">
          <i class="iconmoon-connect"></i>
        </Link>
      </li>
      <li class="fixed-menu__item">
        <Link to="/favourite" class="fixed-menu__link">
          <i class="iconmoon-favorite"></i>
        </Link>
      </li>
      <li class="fixed-menu__item">
        <Link to="/basket" class="fixed-menu__link">
          <i class="iconmoon-cart"></i>
        </Link>
      </li>
      <li class="fixed-menu__item" onClick={tokenVerify}>
        <Link to="" class="fixed-menu__link">
          <i class="iconmoon-profile"></i>
        </Link>
      </li>
      {authModal && <Register />}
      {loginModal && <Login />}
      {modalVerify && <VerifyCode />}
      {modal && <BurgerMenu setModal={setModal} />}
    </ul>
  );
};

export default FixedMenu;
