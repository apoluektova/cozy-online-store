import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {
  const {categories, onCategoryClick, onPriceRangeClick} = props;
  const priceRanges = [
    {minPrice: 0,
      maxPrice: 50},
    {minPrice: 50,
      maxPrice: 100},
    {minPrice: 100,
      maxPrice: 150},
    {minPrice: 150,
      maxPrice: 10000},
  ];

  return (
    <section className="filter">
      <h2 className="filter__heading">Filter</h2>
      <h3 className="filter__type">Categories</h3>
      <ul className="filter__list">
        {categories.map((category, index) => {
          const capitalizedCategory = category[0].toUpperCase() + category.slice(1);

          return (
            <li className="filter__item" key={`${category}-${index}`}>
              <a
                href="#"
                className="filter__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onCategoryClick(category);
                }}>
                {capitalizedCategory}
              </a>
            </li>
          );
        })}
      </ul>
      <h3 className="filter__type">Price range</h3>
      <ul className="filter__list">
        {priceRanges.map((range, index) => {
          const rangeString = `$${range.minPrice} - $${range.maxPrice}`;

          return (
            <li
              key={`${range}-${index}`}
              className="filter__item"
              onClick={() => {
                onPriceRangeClick(range);
              }}>
              <label className="filter__label">
                <input className="filter__radio" type="radio" name="radio" />
                {rangeString}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Filter.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
  onPriceRangeClick: PropTypes.func.isRequired
};

export default Filter;
