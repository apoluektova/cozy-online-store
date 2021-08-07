import NameSpace from "../name-space.js";

export const selectProducts = (state) => {
  return state[NameSpace.DATA].products;
};

export const selectCategories = (state) => {
  return state[NameSpace.DATA].categories;
}
