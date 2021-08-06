import NameSpace from "../name-space.js";

export const getProducts = (state) => {
  return state[NameSpace.DATA].products.products;
};
