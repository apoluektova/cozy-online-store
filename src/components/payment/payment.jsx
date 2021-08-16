import React from "react";
import Header from "../header/header.jsx";
import Breadcrumbs from "../breadcrumbs/breadcrumbs.jsx";
import {Link} from "react-router-dom";
import {APP_ROUTE} from "../../const.js";

const Payment = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <Breadcrumbs />
        <div className="page-content__wrapper">
          <div className="payment">
            <form className="payment__form form">
              <div className="form__item">
                <label className="form__label" htmlFor="number">Card Number</label>
                <input className="form__input" type="text" name="number" id="number" required />
              </div>
              <div className="form__wrapper">
                <div className="form__item form__item--small form__item--payment">
                  <label className="form__label" htmlFor="valid">Valid Thru</label>
                  <input className="form__input" type="text" name="valid" id="valid" required/>
                </div>
                <div className="form__item form__item--small form__item--payment">
                  <label className="form__label" htmlFor="cvc">CVC</label>
                  <input className="form__input" type="text" name="cvc" id="cvc" required />
                </div>
              </div>
              <div className="form__item">
                <label className="form__label" htmlFor="name">Name</label>
                <input className="form__input" type="text" name="name" id="name" required />
              </div>
            </form>
            <div className="payment__card card">
              <div className="card__top">
                <div className="card__chip">
                  <img src="img/chip.png" width="50" height="32" />
                </div>
                <div className="card__type">
                  <img src="img/visa.png" width="60" height="31" />
                </div>
              </div>
              <div className="card__number">
                <span>####</span>
                <span>####</span>
                <span>####</span>
                <span>####</span>
              </div>
              <div className="card__owner">
                <div className="card__name">
                  <span>Harry Potter</span>
                </div>
                <div className="card__valid">
                  <span>08 / 24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to={APP_ROUTE.ADDRESS}>
          <button className="customer__button" type="button">Continue to address </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Payment;
