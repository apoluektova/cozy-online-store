const initialState = {
  products: [],
  product: {},
  categories: [],
};

const ActionType = {
  LOAD_ALL_PRODUCTS: `LOAD_ALL_PRODUCTS`,
  LOAD_SOME_PRODUCTS: `LOAD_SOME_PRODUCTS`,
  LOAD_PRODUCT: `LOAD_PRODUCT`,
  LOAD_CATEGORIES: `LOAD_CATEGORIES`,
  LOAD_PRODUCTS_BY_CATEGORY: `LOAD_PRODUCTS_BY_CATEGORY`,
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
    };
  },
  loadProductsByCategory: (products) => {
    return {
      type: ActionType.LOAD_PRODUCTS_BY_CATEGORY,
      payload: products
    };
  },
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
  },
  loadProductsByCategory: (category) => (dispatch, getState, api) => {
    return api.get(`/products/category/${category}`)
    .then((response) => {
      dispatch(ActionCreator.loadProductsByCategory(response.data));
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
     case ActionType.LOAD_PRODUCTS_BY_CATEGORY:
       return {
         ...state,
         products: action.payload,
       }
  }

  return state;
};

export {reducer, Operation, ActionCreator, ActionType, initialState};
