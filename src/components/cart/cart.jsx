import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import OrderSummary from "../order-summary/order-summary.jsx";
import {connect} from "react-redux";
import {selectProductQuantity, selectProductsInCart, selectOrderPrice} from "../../reducer/app/selectors.js";
import {ActionCreator} from "../../reducer/app/app.js";

const Cart = (props) => {
  const {products, productQuantity, onRemoveButtonClick, onMinusButtonClick, onPlusButtonClick, orderPrice} = props;
  const totalProductsAmount = Object.values(productQuantity).reduce((acc, value) => {
    acc = acc + value;
    return acc;
  }, 0);

  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <section className="cart">
          <div className="cart__title-wrapper">
            <h2 className="cart__title">Cart</h2>
            <span className="cart__number">{totalProductsAmount} items</span>
          </div>
          <ul className="cart__list">
            {products.map((product) => {
              const cartAmount = productQuantity[product.id];

              return (
                <li className="cart__item" key={product.id}>
                  <img className="cart__image" src={product.image} alt={product.title} />
                  <div className="cart__info">
                    <h3 className="cart__product">{product.title}</h3>
                    <div className="cart__buttons-wrapper">
                      <div className="cart__purchase-buttons">
                        <button
                          className="cart__button cart__button--minus"
                          type="button"
                          onClick={(evt) => {
                            evt.preventDefault();
                            onMinusButtonClick(product);
                          }}
                        >
                          &#8211;
                        </button>
                        <span className="cart__amount">{cartAmount}</span>
                        <button
                          className="cart__button cart__button--plus"
                          type="button"
                          onClick={(evt) => {
                            evt.preventDefault();
                            onPlusButtonClick(product);
                          }}
                        >
                          +
                        </button>
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
        <OrderSummary
          orderPrice={orderPrice}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  products: selectProductsInCart(state),
  productQuantity: selectProductQuantity(state),
  orderPrice: selectOrderPrice(state)
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveButtonClick(product) {
    dispatch(ActionCreator.removeFromCart(product));
  },
  onMinusButtonClick(product) {
    dispatch(ActionCreator.removeFromCart(product));
  },
  onPlusButtonClick(product) {
    dispatch(ActionCreator.addToCart(product));
  }
});

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  productQuantity: PropTypes.object.isRequired,
  onRemoveButtonClick: PropTypes.func.isRequired,
  onMinusButtonClick: PropTypes.func.isRequired,
  onPlusButtonClick: PropTypes.func.isRequired,
  orderPrice: PropTypes.number.isRequired
};

export {Cart};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

