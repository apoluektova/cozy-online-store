import React from "react";
import Product from "../product/product.jsx";

const Catalog = (props) => {
  const {products} = props;

  return (
    <section className="catalog">
      <h2 className="visually-hidden">Catalog</h2>
      <div className="catalog__list">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Catalog;
