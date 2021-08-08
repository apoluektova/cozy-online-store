import React from "react";

const Sorting = (props) => {
  const {onSortingButtonClick} = props;
  const sortingTypes = ['Price Low to High', 'Price High to Low'];

  return (
    <section className="sorting">
      <h2 className="visually-hidden">Sorting</h2>
      <span className="sorting__text">Sort by</span>
      <ul className="sorting__list">
        {sortingTypes.map((sortingType) => {
          return (
            <li className="sorting__item">
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

export default Sorting;
