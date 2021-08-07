import {extend} from "../../utils.js";

const initialState = {
  products: [],
  product: {},
  categories: [],
};

const ActionType = {
  LOAD_ALL_PRODUCTS: `LOAD_ALL_PRODUCTS`,
  LOAD_SOME_PRODUCTS: `LOAD_SOME_PRODUCTS`,
  LOAD_PRODUCT: `LOAD_PRODUCT`,
  LOAD_CATEGORIES: `LOAD_CATEGORIES`
};

const ActionCreator = {
  loadAllProducts: (products) => {
    return {
      type: ActionType.LOAD_ALL_PRODUCTS,
      payload: products
    };
  },
  loadSomeProducts: (products) => {
    return {
      type: ActionType.LOAD_SOME_PRODUCTS,
      payload: products
    };
  },
  loadProduct: (product) => {
    return {
      type: ActionType.LOAD_PRODUCT,
      payload: product
    };
  },
  loadCategories: (categories) => {
    return {
      type: ActionType.LOAD_CATEGORIES,
      payload: categories
    }
  }
};

const Operation = {
  loadAllProducts: () => (dispatch, getState, api) => {
    return api.get(`/products`)
    .then((response) => {
      dispatch(ActionCreator.loadAllProducts(response.data));
    });
  },
  loadSomeProducts: (number) => (dispatch, getState, api) => {
    return api.get(`/products?limit=${number}`)
    .then((response) => {
      dispatch(ActionCreator.loadSomeProducts(response.data));
    });
  },
  loadProduct: (id) => (dispatch, getState, api) => {
    return api.get(`/products/${id}`)
    .then((response) => {
      dispatch(ActionCreator.loadProduct(response.data));
    });
  },
  loadCategories: () => (dispatch, getState, api) => {
    return api.get(`/products/categories`)
    .then((response) => {
      dispatch(ActionCreator.loadCategories(response.data));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case ActionType.LOAD_SOME_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case ActionType.LOAD_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    case ActionType.LOAD_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
  }

  return state;
};

export {reducer, Operation, ActionCreator, ActionType, initialState};
