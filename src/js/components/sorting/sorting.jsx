import React from "react";

const Sorting = () => {
  return (
    <section className="sorting">
      <h2 className="visually-hidden">Sorting</h2>
      <span className="sorting__text">Sort by</span>
      <ul className="sorting__list">
        <li className="sorting__item">Price Low to High</li>
        <li className="sorting__item">Price High to Low</li>
      </ul>
    </section>
  );
};

export default Sorting;
