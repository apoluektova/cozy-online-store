import React from "react";

const Filter = () => {
  return (
    <section className="filter">
      <h2 className="filter__heading">Filter</h2>
      <h3 className="filter__type">Categories</h3>
      <ul className="filter__list">
        <li className="filter__item">Electronics</li>
        <li className="filter__item">Jewelery</li>
        <li className="filter__item">Men Clothing</li>
        <li className="filter__item">Women Clothing</li>
      </ul>
      <h3 className="filter__type">Price range</h3>
      <ul className="filter__list">
        <li className="filter__item">
          <label className="filter__label">
            <input className="filter__radio" type="radio" name="radio" />
            0 - $25
          </label>
        </li>
        <li className="filter__item">
          <label className="filter__label">
            <input className="filter__radio" type="radio" name="radio" />
            $25 - $50
          </label>
        </li>
        <li className="filter__item">
          <label className="filter__label">
            <input className="filter__radio" type="radio" name="radio" />
            $50 - $75
          </label>
        </li>
        <li className="filter__item">
          <label className="filter__label">
            <input className="filter__radio" type="radio" name="radio" />
            $75 - $100
          </label>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
