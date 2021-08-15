import React from "react";

const Breadcrumbs = () => {
  return (
    <ul className="breadcrumbs">
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
  );
};

export default Breadcrumbs;
