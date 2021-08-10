import React from "react";

const OrderSummary = () => {
  return (
    <section className="order-summary">
      <h2 className="order-summary__title">Order Summary</h2>
      <table className="order-summary__table table">
        <tbody>
          <tr className="table__row">
            <td className="table__info">Price</td>
            <td className="table__info">$391.98</td>
          </tr>
          <tr className="table__row">
            <td className="table__info">Discount</td>
            <td className="table__info">$31.9</td>
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
          <span className="order-summary__total-text">$288.08</span>
        </div>
        <span className="order-summary__delivery">Estimated Delivery by <b>01 Feb 2021</b></span>
      </div>
      <button className="order-summary__button" type="button">Proceed to checkout</button>
    </section>
  );
};

export default OrderSummary;
