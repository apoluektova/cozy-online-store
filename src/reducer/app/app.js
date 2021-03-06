const initialState = {
  category: null,
  priceRange: {},
  sortingType: null,
  productsInCart: [],
  productQuantity: {},
  placemarkCoordinates: [],
};

const ActionType = {
  CHANGE_CATEGORY: `CHANGE_CATEGORY`,
  CHANGE_PRICE_RANGE: `CHANGE_PRICE_RANGE`,
  CHANGE_SORTING_TYPE: `CHANGE_SORTING_TYPE`,
  ADD_TO_CART: `ADD_TO_CART`,
  REMOVE_FROM_CART: `REMOVE_FROM_CART`,
  REMOVE_ONE_ITEM: `REMOVE_ONE_ITEM`,
  GET_PLACEMARK_COORDINATES: `GET_PLACEMARK_COORDINATES`
};

const ActionCreator = {
  changeCategory: (category) => {
    return {
      type: ActionType.CHANGE_CATEGORY,
      payload: category
    };
  },
  changePriceRange: (priceRange) => {
    return {
      type: ActionType.CHANGE_PRICE_RANGE,
      payload: priceRange
    };
  },
  changeSortingType: (sortingType) => {
    return {
      type: ActionType.CHANGE_SORTING_TYPE,
      payload: sortingType
    };
  },
  addToCart: (product) => {
    return {
      type: ActionType.ADD_TO_CART,
      payload: product
    };
  },
  removeFromCart: (product) => {
    return {
      type: ActionType.REMOVE_FROM_CART,
      payload: product
    };
  },
  removeOneItem: (product) => {
    return {
      type: ActionType.REMOVE_ONE_ITEM,
      payload: product
    };
  },
  getPlacemarkCoordinates: (coordinates) => {
    return {
      type: ActionType.GET_PLACEMARK_COORDINATES,
      payload: coordinates
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.CHANGE_CATEGORY):
      return {
        ...state,
        category: action.payload
      };
    case (ActionType.CHANGE_PRICE_RANGE):
      return {
        ...state,
        priceRange: action.payload
      };
    case (ActionType.CHANGE_SORTING_TYPE):
      return {
        ...state,
        sortingType: action.payload
      };
    case (ActionType.ADD_TO_CART):
      if (state.productsInCart.find((product) => product.id === action.payload.id)) {
        return {
          ...state,
          productQuantity: {...state.productQuantity, [action.payload.id]: (state.productQuantity[action.payload.id] || 0) + 1}
        };
      } else {
        return {
          ...state,
          productsInCart: state.productsInCart.concat(action.payload),
          productQuantity: {...state.productQuantity, [action.payload.id]: (state.productQuantity[action.payload.id] || 0) + 1}
        };
      }
    case (ActionType.REMOVE_FROM_CART):
      return {
        ...state,
        productsInCart: state.productsInCart.slice().filter((product) => product.id !== action.payload.id),
        productQuantity: {...state.productQuantity, [action.payload.id]: (state.productQuantity[action.payload.id] - state.productQuantity[action.payload.id])}
      };
    case (ActionType.REMOVE_ONE_ITEM):
      if (state.productQuantity[action.payload.id] > 0) {
        return {
          ...state,
          productQuantity: {...state.productQuantity, [action.payload.id]: (state.productQuantity[action.payload.id] - 1)}
        };
      } else {
        return {
          ...state,
          productsInCart: state.productsInCart.slice().filter((product) => product.id !== action.payload.id)
        };
      }
    case (ActionType.GET_PLACEMARK_COORDINATES):
      return {
        ...state,
        placemarkCoordinates: action.payload,
      };
  }

  return state;
};

export {reducer, ActionCreator, ActionType, initialState};


