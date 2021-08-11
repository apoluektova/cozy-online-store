import React from "react";
import PropTypes from "prop-types";

const Product = (props) => {
  const {product, onCartButtonClick} = props;

  return (
    <article className="product">
      <img className="product__image" src={product.image} width="100%" height="auto" alt={product.title} />
      <h3 className="product__title">{product.title}</h3>
      <p className="product__price">${product.price}</p>
      <p className="product__description">{product.description}</p>
      <div className="product__wrapper">
        <button className="product__button" type="button">
          <svg className="product__button" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
            <path d="M11.9997 20C-7.27154 9.47147 6.21861 -1.95792 11.9997 5.26932C17.7816 -1.95792 31.2718 9.47147 11.9997 20Z" stroke="#5D5F5F" strokeWidth="1.8"/>
          </svg>
        </button>
        <button
          className="product__button"
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            onCartButtonClick(product);
          }}
        >
          <svg className="product__button" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H2.5817C3.05988 1 3.29897 1 3.49338 1.08668C3.66475 1.1631 3.81117 1.2862 3.9159 1.4419C4.03469 1.61852 4.07576 1.85406 4.15791 2.32513L4.52068 4.40541M4.52068 4.40541L5.36881 9.26895C5.54834 10.2985 5.6381 10.8132 5.90339 11.1841C6.13699 11.5106 6.46345 11.7593 6.84031 11.8978C7.26831 12.055 7.78842 12.0048 8.82864 11.9044L18.1917 11.0008C19.1332 10.9099 19.604 10.8645 19.9663 10.6646C20.3542 10.4505 20.66 10.1137 20.8358 9.70705C21 9.32724 21 8.85427 21 7.90833V7.90833C21 6.90322 21 6.40066 20.8209 6.00639C20.6291 5.58443 20.2968 5.24216 19.8807 5.03807C19.4919 4.84737 18.9895 4.83254 17.9849 4.80288L4.52068 4.40541Z" stroke="#5D5F5F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="8.31694" cy="17.0541" rx="1.95122" ry="1.94595" stroke="#5D5F5F" strokeWidth="1.8"/>
            <ellipse cx="17.5855" cy="17.0541" rx="1.95122" ry="1.94595" stroke="#5D5F5F" strokeWidth="1.8"/>
          </svg>
        </button>
      </div>
    </article>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string
  }).isRequired,
  onCartButtonClick: PropTypes.func.isRequired
};

export default Product;
