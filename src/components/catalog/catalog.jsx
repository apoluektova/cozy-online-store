import React from "react";
import PropTypes from "prop-types";
import Product from "../product/product.jsx";

const Catalog = (props) => {
  const {products, onCartButtonClick} = props;

  return (
    <section className="catalog">
      <h2 className="visually-hidden">Catalog</h2>
      <div className="catalog__list">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              onCartButtonClick={onCartButtonClick}
            />
          );
        })}
      </div>
    </section>
  );
};

Catalog.propTypes = {
  products: PropTypes.array.isRequired,
  onCartButtonClick: PropTypes.func.isRequired,
};

export default Catalog;
