import NameSpace from "../name-space.js";
import {createSelector} from "reselect";

export const selectPriceRange = (state) => {
  return state[NameSpace.APP].priceRange;
};

export const selectSortingType = (state) => {
  return state[NameSpace.APP].sortingType;
};

export const selectProductsInCart = (state) => {
  return state[NameSpace.APP].productsInCart;
};

export const selectProductQuantity = (state) => {
  return state[NameSpace.APP].productQuantity;
};

export const selectOrderPrice = createSelector(
    selectProductsInCart,
    selectProductQuantity,
    (products, productQuantity) => {
      const total = products.reduce((acc, product) => {
        acc = acc + (product.price * productQuantity[product.id]);
        return acc;
      }, 0);
      return total;
    }
);
