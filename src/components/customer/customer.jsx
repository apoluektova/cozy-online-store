import React from "react";
import Header from "../header/header.jsx";

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
              <div className="form__item">
                <label className="form__label" htmlFor="phone">Phone Number</label>
                <input className="form__input" type="text" name="phone" id="phone" required/>
              </div>
              <div className="form__item">
                <label className="form__label" htmlFor="email">E-mail</label>
                <input className="form__input" type="text" name="email" id="email" required/>
              </div>
            </div>
          </form>
          <button className="customer__button" type="button">Continue to payment </button>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Customer;
