import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {APP_ROUTE} from "../../const.js";

const OrderSummary = (props) => {
  const {orderPrice} = props;
  const orderPriceFixed = orderPrice.toFixed(2);
  const discount = ((orderPrice * 10) / 100).toFixed(2);
  const totalPrice = (orderPrice + ((orderPrice * 10) / 100)).toFixed(2);
  // const getShippingCost = (price) => {
  //   if (price >= 100) {
  //     return `Free`;
  //   } else {
  //     return 20;
  //   }
  // };
  // const shipping = getShippingCost(orderPrice);

  return (
    <section className="order-summary">
      <h2 className="order-summary__title">Order Summary</h2>
      <table className="order-summary__table table">
        <tbody>
          <tr className="table__row">
            <td className="table__info">Price</td>
            <td className="table__info">${orderPriceFixed}</td>
          </tr>
          <tr className="table__row">
            <td className="table__info">Discount</td>
            <td className="table__info">${discount}</td>
          </tr>
          <tr className="table__row">
            <td className="table__info">Shipping</td>
            <td className="table__info table__info--shipping">Free</td>
          </tr>
        </tbody>
      </table>
      <div className="order-summary__total">
        <div className="order-summary__total-wrapper">
          <span className="order-summary__total-text">Total</span>
          <span className="order-summary__total-text">${totalPrice}</span>
        </div>
        <span className="order-summary__delivery">Estimated Delivery by <b>01 Feb 2021</b></span>
      </div>
      <Link to={APP_ROUTE.ORDER}>
        <button className="order-summary__button" type="button">Proceed to checkout</button>
      </Link>
    </section>
  );
};

OrderSummary.propTypes = {
  orderPrice: PropTypes.number.isRequired,
};

export default OrderSummary;
