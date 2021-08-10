import React from "react";
import Header from "../header/header.jsx";
import OrderSummary from "../order-summary/order-summary.jsx";
import {connect} from "react-redux";
import {selectProductsInCart} from "../../reducer/app/selectors.js";
import {ActionCreator} from "../../reducer/app/app.js";

const Cart = (props) => {
  const {products, onRemoveButtonClick} = props;

  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <section className="cart">
          <div className="cart__title-wrapper">
            <h2 className="cart__title">Cart</h2>
            <span className="cart__number">{products.length} items</span>
          </div>
          <ul className="cart__list">
            {products.map((product) => {
              return (
                <li className="cart__item">
                  <img className="cart__image" src={product.image} alt={product.title} />
                  <div className="cart__info">
                    <h3 className="cart__product">{product.title}</h3>
                    <div className="cart__buttons-wrapper">
                      <div className="cart__purchase-buttons">
                        <button className="cart__button cart__button--minus" type="button">&#8211;</button>
                        <span className="cart__amount">1</span>
                        <button className="cart__button cart__button--plus" type="button">+</button>
                      </div>
                      <button
                      className="cart__remove"
                      type="button"
                      onClick={(evt) => {
                        evt.preventDefault();
                        onRemoveButtonClick(product);
                      }}
                      >Remove</button>
                    </div>
                  </div>
                  <span className="cart__price">${product.price}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <OrderSummary />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  products: selectProductsInCart(state)
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveButtonClick(product) {
    dispatch(ActionCreator.removeFromCart(product));
  }
});

export {Cart};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
