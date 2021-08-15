import React from "react";
import Header from "../header/header.jsx";
import {Link} from "react-router-dom";
import {APP_ROUTE} from "../../const.js";

const Customer = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <section className="customer">
          <h2 className="visually-hidden">Customer information</h2>
          <ul className="customer__breadcrumbs breadcrumbs">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link breadcrumbs__link--active" href="">Customer Information</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="">Payment</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="">Address</a>
            </li>
          </ul>
          <form className="customer__form form">
            <div className="form__item">
              <label className="form__label" htmlFor="first-name">First Name</label>
              <input className="form__input" type="text" name="first-name" id="first-name" required/>
            </div>
            <div className="form__item">
              <label className="form__label" htmlFor="last-name">Last Name</label>
              <input className="form__input" type="text" name="last-name" id="last-name" required/>
            </div>
            <div className="form__wrapper">
              <div className="form__item form__item--small">
                <label className="form__label" htmlFor="phone">Phone Number</label>
                <input className="form__input" type="tel" name="phone" id="phone" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" required/>
              </div>
              <div className="form__item form__item--small">
                <label className="form__label" htmlFor="email">E-mail</label>
                <input className="form__input" type="email" name="email" id="email" required/>
              </div>
            </div>
          </form>
          <Link to={APP_ROUTE.PAYMENT}>
            <button className="customer__button" type="button">Continue to payment </button>
          </Link>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Customer;
