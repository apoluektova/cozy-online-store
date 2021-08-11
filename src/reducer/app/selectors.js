import NameSpace from "../name-space.js";

export const selectPriceRange = (state) => {
  return state[NameSpace.APP].priceRange;
};

export const selectSortingType = (state) => {
  return state[NameSpace.APP].sortingType;
};

export const selectProductsInCart = (state) => {
  return state[NameSpace.APP].productsInCart;
};
