import React from "react";

const Filter = (props) => {
  const {categories, onCategoryClick} = props;
  const priceRanges = ['$0 - $50', '$50 - $100', '$100 - $150', '$150 and more'];

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
          return (
            <li className="filter__item">
              <label className="filter__label">
                <input className="filter__radio" type="radio" name="radio" />
                  {range}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Filter;
