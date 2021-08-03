import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src="img/svg/logo.svg" width="71" height="39" alt="Cozy shop logo" />
      <nav className="header__navigation navigation">
        <ul className="navigation__list site-list">
          <li className="site-list__item">Shop</li>
          <li className="site-list__item">About us</li>
          <li className="site-list__item">Contacts</li>
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
            <img className="user-list__icon" src="img/svg/cart.svg" width="24" height="24" alt="Cart" />
            <span className="user-list__number visually-hidden">1</span>
          </li>
        </ul>
    </header>
  );
};

export default Header;
