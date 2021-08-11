import NameSpace from "../name-space.js";
import {selectPriceRange, selectSortingType} from "../app/selectors.js";
import {createSelector} from "reselect";
import {SORTING_TYPES} from "../../const.js";

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

export const selectProductsBySortingType = createSelector(
    selectProductsByPrice,
    selectSortingType,
    (products, sortingType) => {
      if (sortingType === null) {
        return products;
      } else if (sortingType === SORTING_TYPES.PRICE_LOW_HIGH) {
        return products.slice().sort((a, b) => {
          return a.price - b.price;
        });
      } else if (sortingType === SORTING_TYPES.PRICE_HIGH_LOW) {
        return products.slice().sort((a, b) => {
          return b.price - a.price;
        });
      } else if (sortingType === SORTING_TYPES.NAME_A_Z) {
        return products.slice().sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else {
            return 0;
          }
        });
      } else if (sortingType === SORTING_TYPES.NAME_Z_A) {
        return products.slice().sort((a, b) => {
          if (b.title < a.title) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    }
);
