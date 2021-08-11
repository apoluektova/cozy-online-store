import React from "react";
import PropTypes from "prop-types";

const Sorting = (props) => {
  const {onSortingButtonClick} = props;
  const sortingTypes = [`Price Low to High`, `Price High to Low`, `Name A to Z`, `Name Z to A`];

  return (
    <section className="sorting">
      <h2 className="visually-hidden">Sorting</h2>
      <span className="sorting__text">Sort by</span>
      <ul className="sorting__list">
        {sortingTypes.map((sortingType, index) => {
          return (
            <li className="sorting__item" key={`${sortingType}-${index}`}>
              <button
                className="sorting__button"
                type="button"
                onClick={() =>
                  onSortingButtonClick(sortingType)
                }>
                {sortingType}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Sorting.propTypes = {
  onSortingButtonClick: PropTypes.func.isRequired
};

export default Sorting;
