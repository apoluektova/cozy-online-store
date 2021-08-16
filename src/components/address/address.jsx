import React from "react";
import Header from "../header/header.jsx";
import Breadcrumbs from "../breadcrumbs/breadcrumbs.jsx";

const Address = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <Breadcrumbs />
        <form className="form">
          <div className="form__item">
            <label className="form__label" htmlFor="name">Postal Code</label>
            <input className="form__input" type="text" name="name" id="name" required />
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="name">Country</label>
            <input className="form__input" type="text" name="name" id="name" required />
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="name">City</label>
            <input className="form__input" type="text" name="name" id="name" required />
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="name">Address</label>
            <input className="form__input" type="text" name="name" id="name" required />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Address;
