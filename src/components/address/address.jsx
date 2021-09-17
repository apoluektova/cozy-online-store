import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Breadcrumbs from "../breadcrumbs/breadcrumbs.jsx";
import AddressMap from "../address-map/address-map.jsx";

const Address = (props) => {
  const {onMapClick, placemarkCoordinates} = props;

  return (
    <React.Fragment>
      <Header />
      <div className="page-content">
        <Breadcrumbs />
        <AddressMap
          onMapClick={onMapClick}
          placemarkCoordinates={placemarkCoordinates}
        />
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

Address.propTypes = {
  onMapClick: PropTypes.func.isRequired,
  placemarkCoordinates: PropTypes.array.isRequired,
};

export default Address;
