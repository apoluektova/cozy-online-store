import React from "react";
import Product from "../product/product.jsx";

const Catalog = () => {
  return (
    <section className="catalog">
      <h2 className="visually-hidden">Catalog</h2>
      <div className="catalog__list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Catalog;
