import React from "react";

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
        {categories.map((category) => {
          const capitalizedCategory = category[0].toUpperCase() + category.slice(1);

          return (
            <li className="filter__item">
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
        {priceRanges.map((range) => {
          const rangeString = `$${range.minPrice} - $${range.maxPrice}`;

          return (
            <li
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

export default Filter;
