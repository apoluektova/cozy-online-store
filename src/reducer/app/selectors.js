import NameSpace from "../name-space.js";

export const selectPriceRange = (state) => {
  return state[NameSpace.APP].priceRange;
};

export const selectSortingType = (state) => {
  return state[NameSpace.APP].sortingType;
};
