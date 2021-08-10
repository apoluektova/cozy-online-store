import React from "react";
import {Link} from "react-router-dom";
import {APP_ROUTE} from "../../const.js";

const Header = () => {
  return (
    <header className="header">
      <Link to={APP_ROUTE.MAIN}>
        <img className="header__logo" src="img/svg/logo.svg" width="71" height="39" alt="Cozy shop logo" />
      </Link>
      <nav className="header__navigation navigation">
        <ul className="navigation__list site-list">
          <li className="site-list__item">
            <a className="site-list__link" href="">Shop</a>
          </li>
          <li className="site-list__item">
            <a className="site-list__link" href="">About us</a>
          </li>
          <li className="site-list__item">
            <a className="site-list__link" href="">Contacts</a>
          </li>
        </ul>
      </nav>
      <ul className="user-list">
          <li className="user-list__item">
            <img className="user-list__icon" src="img/svg/heart.svg" width="24" height="24" alt="Favorites" />
          </li>
          <li className="user-list__item">
            <img className="user-list__icon" src="img/svg/user.svg" width="24" height="24" alt="Login" />
          </li>
          <li className="user-list__item">
            <Link to={APP_ROUTE.CART} className="user-list__link">
              <img className="user-list__icon" src="img/svg/cart.svg" width="24" height="24" alt="Cart" />
              <span className="user-list__number visually-hidden">1</span>
            </Link>
          </li>
        </ul>
    </header>
  );
};

export default Header;
