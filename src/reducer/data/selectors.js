import NameSpace from "../name-space.js";
import {selectPriceRange} from "../app/selectors.js";
import {createSelector} from "reselect";

export const selectProducts = (state) => {
  return state[NameSpace.DATA].products;
};

export const selectCategories = (state) => {
  return state[NameSpace.DATA].categories;
};

export const selectProductsByPrice = createSelector(
  selectProducts,
  selectPriceRange,
  (products, priceRange) => {
    if (Object.keys(priceRange).length === 0) {
      return products;
    } else {
      return products.filter((product) => {
         return product.price >= priceRange.minPrice && product.price < priceRange.maxPrice;
      });
    }
  }
);
