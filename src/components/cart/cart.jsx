import React from "react";
import Header from "../header/header.jsx";
import OrderSummary from "../order-summary/order-summary.jsx";

const Cart = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <section className="cart">
          <div className="cart__title-wrapper">
            <h2 className="cart__title">Cart</h2>
            <span className="cart__number">2 items</span>
          </div>
          <ul className="cart__list">
            <li className="cart__item">
              <img className="cart__image" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Product image" />
              <div className="cart__info">
                <h3 className="cart__product">Product name</h3>
                <div className="cart__buttons-wrapper">
                  <div className="cart__purchase-buttons">
                    <button className="cart__button cart__button--minus" type="button">&#8211;</button>
                    <span className="cart__amount">1</span>
                    <button className="cart__button cart__button--plus" type="button">+</button>
                  </div>
                  <button className="cart__remove" type="button">Remove</button>
                </div>
              </div>
              <span className="cart__price">$149.99</span>
            </li>
            <li className="cart__item">
              <img className="cart__image" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="Product image" />
              <div className="cart__info">
                <h3 className="cart__product">Product name</h3>
                <div className="cart__buttons-wrapper">
                  <div className="cart__purchase-buttons">
                    <button className="cart__button cart__button--minus" type="button">&#8211;</button>
                    <span className="cart__amount">1</span>
                    <button className="cart__button cart__button--plus" type="button">+</button>
                  </div>
                  <button className="cart__remove" type="button">Remove</button>
                </div>
              </div>
              <span className="cart__price">$149.99</span>
            </li>
          </ul>
        </section>
        <OrderSummary />
      </div>
    </React.Fragment>
  );
};

export default Cart;
